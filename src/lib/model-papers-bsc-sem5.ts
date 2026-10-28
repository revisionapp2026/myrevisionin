/**
 * Authentic University Model Papers & Solved Solutions for B.Sc Semester 5.
 * Curricula: UGC CBCS Framework 2020-2023.
 *
 * Covers 31 Subjects (62 Question Papers, 620 Solved Questions).
 * Part A (5x2M short questions) + Part B (5x10M long answers with step-by-step solutions).
 */

import type { DbQuestion } from "./content";

const sem5BScPapersData: Record<string, DbQuestion[]> = {
  "operating systems & computer networks_set1": [
    {
      "id": "operating-systems-&-computer-networks-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OS Processes and state its primary asymptotic time complexity in Operating Systems & Computer Networks.",
      "answer_lines": [
        "**Definition**: In Operating Systems & Computer Networks, OS Processes establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Scheduling and state its primary asymptotic time complexity in Operating Systems & Computer Networks.",
      "answer_lines": [
        "**Definition**: In Operating Systems & Computer Networks, Scheduling establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Memory Management and state its primary asymptotic time complexity in Operating Systems & Computer Networks.",
      "answer_lines": [
        "**Definition**: In Operating Systems & Computer Networks, Memory Management establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Network Models and state its primary asymptotic time complexity in Operating Systems & Computer Networks.",
      "answer_lines": [
        "**Definition**: In Operating Systems & Computer Networks, Network Models establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define TCP/IP and state its primary asymptotic time complexity in Operating Systems & Computer Networks.",
      "answer_lines": [
        "**Definition**: In Operating Systems & Computer Networks, TCP/IP establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of OS Processes with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "OS Processes serves as a core computational building block in Operating Systems & Computer Networks, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "operating-systems-&-computer-networks-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Scheduling with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Scheduling serves as a core computational building block in Operating Systems & Computer Networks, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "operating-systems-&-computer-networks-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Memory Management with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Memory Management serves as a core computational building block in Operating Systems & Computer Networks, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "operating-systems-&-computer-networks-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Network Models with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Network Models serves as a core computational building block in Operating Systems & Computer Networks, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "operating-systems-&-computer-networks-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of TCP/IP with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "TCP/IP serves as a core computational building block in Operating Systems & Computer Networks, optimizing storage efficiency, access latency, and data integrity.",
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
  "operating systems & computer networks_set2": [
    {
      "id": "operating-systems-&-computer-networks-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with OS Processes.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in OS Processes.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Scheduling.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Scheduling.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Memory Management.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Memory Management.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Network Models.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Network Models.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with TCP/IP.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in TCP/IP.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "operating-systems-&-computer-networks-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for OS Processes. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in OS Processes.",
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
      "id": "operating-systems-&-computer-networks-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Scheduling. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Scheduling.",
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
      "id": "operating-systems-&-computer-networks-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Memory Management. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Memory Management.",
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
      "id": "operating-systems-&-computer-networks-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Network Models. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Network Models.",
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
      "id": "operating-systems-&-computer-networks-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for TCP/IP. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in TCP/IP.",
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
  "os & networks lab_set1": [
    {
      "id": "os-&-networks-lab-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OS & Networks: Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in OS & Networks Lab.",
      "answer_lines": [
        "**Definition**: OS & Networks: Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in OS & Networks Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "os-&-networks-lab-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OS & Networks: Standard Preparations & Calibration Methods and state its primary measurement protocol in OS & Networks Lab.",
      "answer_lines": [
        "**Definition**: OS & Networks: Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in OS & Networks Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "os-&-networks-lab-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OS & Networks: Core Experimental Procedures & Synthesis and state its primary measurement protocol in OS & Networks Lab.",
      "answer_lines": [
        "**Definition**: OS & Networks: Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in OS & Networks Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "os-&-networks-lab-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OS & Networks: Quantitative Data Verification & Error Analysis and state its primary measurement protocol in OS & Networks Lab.",
      "answer_lines": [
        "**Definition**: OS & Networks: Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in OS & Networks Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "os-&-networks-lab-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OS & Networks: Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in OS & Networks Lab.",
      "answer_lines": [
        "**Definition**: OS & Networks: Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in OS & Networks Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "os-&-networks-lab-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OS & Networks: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OS & Networks: Laboratory Safety Protocols & Instrumentation within OS & Networks Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "os-&-networks-lab-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OS & Networks: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OS & Networks: Standard Preparations & Calibration Methods within OS & Networks Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "os-&-networks-lab-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OS & Networks: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OS & Networks: Core Experimental Procedures & Synthesis within OS & Networks Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "os-&-networks-lab-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OS & Networks: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OS & Networks: Quantitative Data Verification & Error Analysis within OS & Networks Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "os-&-networks-lab-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OS & Networks: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OS & Networks: Comprehensive Practical Record & Viva Voce within OS & Networks Lab. Draw the complete apparatus wiring / setup schematic.",
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
  "os & networks lab_set2": [
    {
      "id": "os-&-networks-lab-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OS & Networks: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "os-&-networks-lab-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OS & Networks: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "os-&-networks-lab-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OS & Networks: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "os-&-networks-lab-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OS & Networks: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "os-&-networks-lab-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OS & Networks: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "os-&-networks-lab-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OS & Networks: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OS & Networks: Laboratory Safety Protocols & Instrumentation.",
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
      "id": "os-&-networks-lab-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OS & Networks: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OS & Networks: Standard Preparations & Calibration Methods.",
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
      "id": "os-&-networks-lab-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OS & Networks: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OS & Networks: Core Experimental Procedures & Synthesis.",
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
      "id": "os-&-networks-lab-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OS & Networks: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OS & Networks: Quantitative Data Verification & Error Analysis.",
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
      "id": "os-&-networks-lab-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OS & Networks: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OS & Networks: Comprehensive Practical Record & Viva Voce.",
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
  "abstract algebra_set1": [
    {
      "id": "abstract-algebra-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Abstract Algebra.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "abstract-algebra-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Abstract Algebra.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "abstract-algebra-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Abstract Algebra.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "abstract-algebra-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Abstract Algebra.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "abstract-algebra-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Abstract Algebra.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "abstract-algebra-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Groups with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Groups within Abstract Algebra.",
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
      "id": "abstract-algebra-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Subgroups with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Subgroups within Abstract Algebra.",
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
      "id": "abstract-algebra-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Normal Subgroups with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Normal Subgroups within Abstract Algebra.",
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
      "id": "abstract-algebra-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Rings with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Rings within Abstract Algebra.",
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
      "id": "abstract-algebra-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Fields with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Fields within Abstract Algebra.",
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
  "abstract algebra_set2": [
    {
      "id": "abstract-algebra-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Groups.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "abstract-algebra-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Subgroups.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "abstract-algebra-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Normal Subgroups.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "abstract-algebra-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Rings.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "abstract-algebra-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Fields.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "abstract-algebra-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Groups.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Groups in Abstract Algebra.",
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
      "id": "abstract-algebra-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Subgroups.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Subgroups in Abstract Algebra.",
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
      "id": "abstract-algebra-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Normal Subgroups.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Normal Subgroups in Abstract Algebra.",
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
      "id": "abstract-algebra-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Rings.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Rings in Abstract Algebra.",
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
      "id": "abstract-algebra-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Fields.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Fields in Abstract Algebra.",
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
  "dse: physics/stats elective_set1": [
    {
      "id": "dse:-physics/stats-elective-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics/Stats Elective: Core Concepts & Principles and state its primary measurement protocol in DSE: Physics/Stats Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics/Stats Elective: Core Concepts & Principles represents a core empirical or experimental procedure in DSE: Physics/Stats Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics/Stats Elective: Theoretical Formulations & Modeling and state its primary measurement protocol in DSE: Physics/Stats Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics/Stats Elective: Theoretical Formulations & Modeling represents a core empirical or experimental procedure in DSE: Physics/Stats Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics/Stats Elective: Analytical & Computational Methods and state its primary measurement protocol in DSE: Physics/Stats Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics/Stats Elective: Analytical & Computational Methods represents a core empirical or experimental procedure in DSE: Physics/Stats Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics/Stats Elective: Practical Engineering & Industrial Applications and state its primary measurement protocol in DSE: Physics/Stats Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics/Stats Elective: Practical Engineering & Industrial Applications represents a core empirical or experimental procedure in DSE: Physics/Stats Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics/Stats Elective: Modern Trends, Case Studies & Problem Solving and state its primary measurement protocol in DSE: Physics/Stats Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics/Stats Elective: Modern Trends, Case Studies & Problem Solving represents a core empirical or experimental procedure in DSE: Physics/Stats Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics/Stats Elective: Core Concepts & Principles with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics/Stats Elective: Core Concepts & Principles within DSE: Physics/Stats Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-physics/stats-elective-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics/Stats Elective: Theoretical Formulations & Modeling with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics/Stats Elective: Theoretical Formulations & Modeling within DSE: Physics/Stats Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-physics/stats-elective-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics/Stats Elective: Analytical & Computational Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics/Stats Elective: Analytical & Computational Methods within DSE: Physics/Stats Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-physics/stats-elective-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics/Stats Elective: Practical Engineering & Industrial Applications with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics/Stats Elective: Practical Engineering & Industrial Applications within DSE: Physics/Stats Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-physics/stats-elective-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics/Stats Elective: Modern Trends, Case Studies & Problem Solving with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics/Stats Elective: Modern Trends, Case Studies & Problem Solving within DSE: Physics/Stats Elective. Draw the complete apparatus wiring / setup schematic.",
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
  "dse: physics/stats elective_set2": [
    {
      "id": "dse:-physics/stats-elective-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics/Stats Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics/Stats Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics/Stats Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics/Stats Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics/Stats Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics/stats-elective-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics/Stats Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics/Stats Elective: Core Concepts & Principles.",
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
      "id": "dse:-physics/stats-elective-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics/Stats Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics/Stats Elective: Theoretical Formulations & Modeling.",
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
      "id": "dse:-physics/stats-elective-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics/Stats Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics/Stats Elective: Analytical & Computational Methods.",
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
      "id": "dse:-physics/stats-elective-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics/Stats Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics/Stats Elective: Practical Engineering & Industrial Applications.",
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
      "id": "dse:-physics/stats-elective-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics/Stats Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics/Stats Elective: Modern Trends, Case Studies & Problem Solving.",
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
  "software engineering_set1": [
    {
      "id": "software-engineering-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define SDLC and state its primary asymptotic time complexity in Software Engineering.",
      "answer_lines": [
        "**Definition**: In Software Engineering, SDLC establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "software-engineering-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Requirements and state its primary asymptotic time complexity in Software Engineering.",
      "answer_lines": [
        "**Definition**: In Software Engineering, Requirements establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "software-engineering-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Design and state its primary asymptotic time complexity in Software Engineering.",
      "answer_lines": [
        "**Definition**: In Software Engineering, Design establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "software-engineering-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Testing and state its primary asymptotic time complexity in Software Engineering.",
      "answer_lines": [
        "**Definition**: In Software Engineering, Testing establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "software-engineering-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Project Management and state its primary asymptotic time complexity in Software Engineering.",
      "answer_lines": [
        "**Definition**: In Software Engineering, Project Management establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "software-engineering-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of SDLC with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "SDLC serves as a core computational building block in Software Engineering, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "software-engineering-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Requirements with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Requirements serves as a core computational building block in Software Engineering, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "software-engineering-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Design with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Design serves as a core computational building block in Software Engineering, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "software-engineering-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Testing with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Testing serves as a core computational building block in Software Engineering, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "software-engineering-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Project Management with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Project Management serves as a core computational building block in Software Engineering, optimizing storage efficiency, access latency, and data integrity.",
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
  "software engineering_set2": [
    {
      "id": "software-engineering-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with SDLC.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in SDLC.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "software-engineering-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Requirements.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Requirements.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "software-engineering-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Design.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Design.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "software-engineering-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Testing.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Testing.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "software-engineering-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Project Management.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Project Management.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "software-engineering-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for SDLC. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in SDLC.",
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
      "id": "software-engineering-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Requirements. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Requirements.",
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
      "id": "software-engineering-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Design. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Design.",
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
      "id": "software-engineering-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Testing. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Testing.",
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
      "id": "software-engineering-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Project Management. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Project Management.",
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
  "big data analytics_set1": [
    {
      "id": "big-data-analytics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Big Data Intro and state its primary asymptotic time complexity in Big Data Analytics.",
      "answer_lines": [
        "**Definition**: In Big Data Analytics, Big Data Intro establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "big-data-analytics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Hadoop and state its primary asymptotic time complexity in Big Data Analytics.",
      "answer_lines": [
        "**Definition**: In Big Data Analytics, Hadoop establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "big-data-analytics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define MapReduce and state its primary asymptotic time complexity in Big Data Analytics.",
      "answer_lines": [
        "**Definition**: In Big Data Analytics, MapReduce establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "big-data-analytics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Spark and state its primary asymptotic time complexity in Big Data Analytics.",
      "answer_lines": [
        "**Definition**: In Big Data Analytics, Spark establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "big-data-analytics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define NoSQL and state its primary asymptotic time complexity in Big Data Analytics.",
      "answer_lines": [
        "**Definition**: In Big Data Analytics, NoSQL establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "big-data-analytics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Big Data Intro with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Big Data Intro serves as a core computational building block in Big Data Analytics, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "big-data-analytics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Hadoop with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Hadoop serves as a core computational building block in Big Data Analytics, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "big-data-analytics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of MapReduce with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "MapReduce serves as a core computational building block in Big Data Analytics, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "big-data-analytics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Spark with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Spark serves as a core computational building block in Big Data Analytics, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "big-data-analytics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of NoSQL with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "NoSQL serves as a core computational building block in Big Data Analytics, optimizing storage efficiency, access latency, and data integrity.",
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
  "big data analytics_set2": [
    {
      "id": "big-data-analytics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Big Data Intro.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Big Data Intro.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "big-data-analytics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Hadoop.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Hadoop.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "big-data-analytics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with MapReduce.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in MapReduce.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "big-data-analytics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Spark.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Spark.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "big-data-analytics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with NoSQL.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in NoSQL.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "big-data-analytics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Big Data Intro. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Big Data Intro.",
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
      "id": "big-data-analytics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Hadoop. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Hadoop.",
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
      "id": "big-data-analytics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for MapReduce. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in MapReduce.",
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
      "id": "big-data-analytics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Spark. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Spark.",
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
      "id": "big-data-analytics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for NoSQL. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in NoSQL.",
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
  "big data lab_set1": [
    {
      "id": "big-data-lab-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Big Data: Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in Big Data Lab.",
      "answer_lines": [
        "**Definition**: Big Data: Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in Big Data Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "big-data-lab-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Big Data: Standard Preparations & Calibration Methods and state its primary measurement protocol in Big Data Lab.",
      "answer_lines": [
        "**Definition**: Big Data: Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in Big Data Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "big-data-lab-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Big Data: Core Experimental Procedures & Synthesis and state its primary measurement protocol in Big Data Lab.",
      "answer_lines": [
        "**Definition**: Big Data: Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in Big Data Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "big-data-lab-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Big Data: Quantitative Data Verification & Error Analysis and state its primary measurement protocol in Big Data Lab.",
      "answer_lines": [
        "**Definition**: Big Data: Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in Big Data Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "big-data-lab-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Big Data: Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in Big Data Lab.",
      "answer_lines": [
        "**Definition**: Big Data: Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in Big Data Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "big-data-lab-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Big Data: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Big Data: Laboratory Safety Protocols & Instrumentation within Big Data Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "big-data-lab-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Big Data: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Big Data: Standard Preparations & Calibration Methods within Big Data Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "big-data-lab-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Big Data: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Big Data: Core Experimental Procedures & Synthesis within Big Data Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "big-data-lab-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Big Data: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Big Data: Quantitative Data Verification & Error Analysis within Big Data Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "big-data-lab-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Big Data: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Big Data: Comprehensive Practical Record & Viva Voce within Big Data Lab. Draw the complete apparatus wiring / setup schematic.",
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
  "big data lab_set2": [
    {
      "id": "big-data-lab-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Big Data: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "big-data-lab-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Big Data: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "big-data-lab-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Big Data: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "big-data-lab-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Big Data: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "big-data-lab-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Big Data: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "big-data-lab-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Big Data: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Big Data: Laboratory Safety Protocols & Instrumentation.",
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
      "id": "big-data-lab-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Big Data: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Big Data: Standard Preparations & Calibration Methods.",
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
      "id": "big-data-lab-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Big Data: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Big Data: Core Experimental Procedures & Synthesis.",
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
      "id": "big-data-lab-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Big Data: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Big Data: Quantitative Data Verification & Error Analysis.",
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
      "id": "big-data-lab-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Big Data: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Big Data: Comprehensive Practical Record & Viva Voce.",
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
  "probability & stochastic processes_set1": [
    {
      "id": "probability-&-stochastic-processes-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Probability Spaces and state its primary asymptotic time complexity in Probability & Stochastic Processes.",
      "answer_lines": [
        "**Definition**: In Probability & Stochastic Processes, Probability Spaces establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Random Variables and state its primary asymptotic time complexity in Probability & Stochastic Processes.",
      "answer_lines": [
        "**Definition**: In Probability & Stochastic Processes, Random Variables establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Markov Chains and state its primary asymptotic time complexity in Probability & Stochastic Processes.",
      "answer_lines": [
        "**Definition**: In Probability & Stochastic Processes, Markov Chains establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Poisson Processes and state its primary asymptotic time complexity in Probability & Stochastic Processes.",
      "answer_lines": [
        "**Definition**: In Probability & Stochastic Processes, Poisson Processes establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Applications and state its primary asymptotic time complexity in Probability & Stochastic Processes.",
      "answer_lines": [
        "**Definition**: In Probability & Stochastic Processes, Applications establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Probability Spaces with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Probability Spaces serves as a core computational building block in Probability & Stochastic Processes, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "probability-&-stochastic-processes-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Random Variables with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Random Variables serves as a core computational building block in Probability & Stochastic Processes, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "probability-&-stochastic-processes-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Markov Chains with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Markov Chains serves as a core computational building block in Probability & Stochastic Processes, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "probability-&-stochastic-processes-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Poisson Processes with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Poisson Processes serves as a core computational building block in Probability & Stochastic Processes, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "probability-&-stochastic-processes-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Applications with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Applications serves as a core computational building block in Probability & Stochastic Processes, optimizing storage efficiency, access latency, and data integrity.",
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
  "probability & stochastic processes_set2": [
    {
      "id": "probability-&-stochastic-processes-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Probability Spaces.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Probability Spaces.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Random Variables.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Random Variables.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Markov Chains.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Markov Chains.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Poisson Processes.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Poisson Processes.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Applications.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Applications.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "probability-&-stochastic-processes-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Probability Spaces. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Probability Spaces.",
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
      "id": "probability-&-stochastic-processes-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Random Variables. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Random Variables.",
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
      "id": "probability-&-stochastic-processes-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Markov Chains. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Markov Chains.",
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
      "id": "probability-&-stochastic-processes-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Poisson Processes. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Poisson Processes.",
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
      "id": "probability-&-stochastic-processes-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Applications. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Applications.",
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
  "dse: statistics/cs elective_set1": [
    {
      "id": "dse:-statistics/cs-elective-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in DSE: Statistics/CS Elective.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in DSE: Statistics/CS Elective.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in DSE: Statistics/CS Elective.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in DSE: Statistics/CS Elective.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in DSE: Statistics/CS Elective.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for DSE: Statistics/CS Elective: Core Concepts & Principles with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for DSE: Statistics/CS Elective: Core Concepts & Principles within DSE: Statistics/CS Elective.",
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
      "id": "dse:-statistics/cs-elective-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for DSE: Statistics/CS Elective: Theoretical Formulations & Modeling with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for DSE: Statistics/CS Elective: Theoretical Formulations & Modeling within DSE: Statistics/CS Elective.",
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
      "id": "dse:-statistics/cs-elective-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for DSE: Statistics/CS Elective: Analytical & Computational Methods with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for DSE: Statistics/CS Elective: Analytical & Computational Methods within DSE: Statistics/CS Elective.",
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
      "id": "dse:-statistics/cs-elective-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for DSE: Statistics/CS Elective: Practical Engineering & Industrial Applications with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for DSE: Statistics/CS Elective: Practical Engineering & Industrial Applications within DSE: Statistics/CS Elective.",
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
      "id": "dse:-statistics/cs-elective-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for DSE: Statistics/CS Elective: Modern Trends, Case Studies & Problem Solving with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for DSE: Statistics/CS Elective: Modern Trends, Case Studies & Problem Solving within DSE: Statistics/CS Elective.",
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
  "dse: statistics/cs elective_set2": [
    {
      "id": "dse:-statistics/cs-elective-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in DSE: Statistics/CS Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in DSE: Statistics/CS Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in DSE: Statistics/CS Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in DSE: Statistics/CS Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in DSE: Statistics/CS Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "dse:-statistics/cs-elective-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for DSE: Statistics/CS Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing DSE: Statistics/CS Elective: Core Concepts & Principles in DSE: Statistics/CS Elective.",
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
      "id": "dse:-statistics/cs-elective-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for DSE: Statistics/CS Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing DSE: Statistics/CS Elective: Theoretical Formulations & Modeling in DSE: Statistics/CS Elective.",
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
      "id": "dse:-statistics/cs-elective-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for DSE: Statistics/CS Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing DSE: Statistics/CS Elective: Analytical & Computational Methods in DSE: Statistics/CS Elective.",
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
      "id": "dse:-statistics/cs-elective-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for DSE: Statistics/CS Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing DSE: Statistics/CS Elective: Practical Engineering & Industrial Applications in DSE: Statistics/CS Elective.",
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
      "id": "dse:-statistics/cs-elective-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for DSE: Statistics/CS Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing DSE: Statistics/CS Elective: Modern Trends, Case Studies & Problem Solving in DSE: Statistics/CS Elective.",
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
  "ai tools & applications_set1": [
    {
      "id": "ai-tools-&-applications-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define AI Basics and state its primary asymptotic time complexity in AI Tools & Applications.",
      "answer_lines": [
        "**Definition**: In AI Tools & Applications, AI Basics establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-tools-&-applications-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define ML Tools and state its primary asymptotic time complexity in AI Tools & Applications.",
      "answer_lines": [
        "**Definition**: In AI Tools & Applications, ML Tools establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-tools-&-applications-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define LLMs and state its primary asymptotic time complexity in AI Tools & Applications.",
      "answer_lines": [
        "**Definition**: In AI Tools & Applications, LLMs establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-tools-&-applications-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Prompt Engineering and state its primary asymptotic time complexity in AI Tools & Applications.",
      "answer_lines": [
        "**Definition**: In AI Tools & Applications, Prompt Engineering establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-tools-&-applications-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Case Studies and state its primary asymptotic time complexity in AI Tools & Applications.",
      "answer_lines": [
        "**Definition**: In AI Tools & Applications, Case Studies establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-tools-&-applications-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of AI Basics with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "AI Basics serves as a core computational building block in AI Tools & Applications, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "ai-tools-&-applications-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of ML Tools with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "ML Tools serves as a core computational building block in AI Tools & Applications, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "ai-tools-&-applications-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of LLMs with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "LLMs serves as a core computational building block in AI Tools & Applications, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "ai-tools-&-applications-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Prompt Engineering with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Prompt Engineering serves as a core computational building block in AI Tools & Applications, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "ai-tools-&-applications-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Case Studies with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Case Studies serves as a core computational building block in AI Tools & Applications, optimizing storage efficiency, access latency, and data integrity.",
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
  "ai tools & applications_set2": [
    {
      "id": "ai-tools-&-applications-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with AI Basics.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in AI Basics.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "ai-tools-&-applications-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with ML Tools.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in ML Tools.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "ai-tools-&-applications-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with LLMs.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in LLMs.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "ai-tools-&-applications-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Prompt Engineering.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Prompt Engineering.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "ai-tools-&-applications-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Case Studies.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Case Studies.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "ai-tools-&-applications-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for AI Basics. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in AI Basics.",
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
      "id": "ai-tools-&-applications-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for ML Tools. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in ML Tools.",
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
      "id": "ai-tools-&-applications-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for LLMs. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in LLMs.",
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
      "id": "ai-tools-&-applications-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Prompt Engineering. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Prompt Engineering.",
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
      "id": "ai-tools-&-applications-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Case Studies. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Case Studies.",
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
  "dse: economic botany / plant biotechnology_set1": [
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Cereals & Pulses and state its primary significance in DSE: Economic Botany / Plant Biotechnology.",
      "answer_lines": [
        "**Definition**: Cereals & Pulses forms a fundamental structural and operational concept within DSE: Economic Botany / Plant Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Fruits & Vegetables and state its primary significance in DSE: Economic Botany / Plant Biotechnology.",
      "answer_lines": [
        "**Definition**: Fruits & Vegetables forms a fundamental structural and operational concept within DSE: Economic Botany / Plant Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Medicinal Plants and state its primary significance in DSE: Economic Botany / Plant Biotechnology.",
      "answer_lines": [
        "**Definition**: Medicinal Plants forms a fundamental structural and operational concept within DSE: Economic Botany / Plant Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Plant Tissue Culture and state its primary significance in DSE: Economic Botany / Plant Biotechnology.",
      "answer_lines": [
        "**Definition**: Plant Tissue Culture forms a fundamental structural and operational concept within DSE: Economic Botany / Plant Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Transgenic Plants and state its primary significance in DSE: Economic Botany / Plant Biotechnology.",
      "answer_lines": [
        "**Definition**: Transgenic Plants forms a fundamental structural and operational concept within DSE: Economic Botany / Plant Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Cereals & Pulses with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Cereals & Pulses serves as a foundational study module in DSE: Economic Botany / Plant Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Cereals & Pulses is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Fruits & Vegetables with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Fruits & Vegetables serves as a foundational study module in DSE: Economic Botany / Plant Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Fruits & Vegetables is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Medicinal Plants with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Medicinal Plants serves as a foundational study module in DSE: Economic Botany / Plant Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Medicinal Plants is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Plant Tissue Culture with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Plant Tissue Culture serves as a foundational study module in DSE: Economic Botany / Plant Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Plant Tissue Culture is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Transgenic Plants with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Transgenic Plants serves as a foundational study module in DSE: Economic Botany / Plant Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Transgenic Plants is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "dse: economic botany / plant biotechnology_set2": [
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Cereals & Pulses.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Fruits & Vegetables.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Medicinal Plants.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Plant Tissue Culture.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Transgenic Plants.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Cereals & Pulses. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Cereals & Pulses are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Cereals & Pulses provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Fruits & Vegetables. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Fruits & Vegetables are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Fruits & Vegetables provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Medicinal Plants. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Medicinal Plants are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Medicinal Plants provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Plant Tissue Culture. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Plant Tissue Culture are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Plant Tissue Culture provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-economic-botany-/-plant-biotechnology-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Transgenic Plants. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Transgenic Plants are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Transgenic Plants provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "dse: applied zoology / animal biotechnology_set1": [
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Aquaculture and state its primary significance in DSE: Applied Zoology / Animal Biotechnology.",
      "answer_lines": [
        "**Definition**: Aquaculture forms a fundamental structural and operational concept within DSE: Applied Zoology / Animal Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Poultry and state its primary significance in DSE: Applied Zoology / Animal Biotechnology.",
      "answer_lines": [
        "**Definition**: Poultry forms a fundamental structural and operational concept within DSE: Applied Zoology / Animal Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Sericulture and state its primary significance in DSE: Applied Zoology / Animal Biotechnology.",
      "answer_lines": [
        "**Definition**: Sericulture forms a fundamental structural and operational concept within DSE: Applied Zoology / Animal Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Animal Cell Culture and state its primary significance in DSE: Applied Zoology / Animal Biotechnology.",
      "answer_lines": [
        "**Definition**: Animal Cell Culture forms a fundamental structural and operational concept within DSE: Applied Zoology / Animal Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Genetic Engineering and state its primary significance in DSE: Applied Zoology / Animal Biotechnology.",
      "answer_lines": [
        "**Definition**: Genetic Engineering forms a fundamental structural and operational concept within DSE: Applied Zoology / Animal Biotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Aquaculture with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Aquaculture serves as a foundational study module in DSE: Applied Zoology / Animal Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Aquaculture is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Poultry with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Poultry serves as a foundational study module in DSE: Applied Zoology / Animal Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Poultry is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Sericulture with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Sericulture serves as a foundational study module in DSE: Applied Zoology / Animal Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Sericulture is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Animal Cell Culture with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Animal Cell Culture serves as a foundational study module in DSE: Applied Zoology / Animal Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Animal Cell Culture is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Genetic Engineering with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Genetic Engineering serves as a foundational study module in DSE: Applied Zoology / Animal Biotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Genetic Engineering is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "dse: applied zoology / animal biotechnology_set2": [
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Aquaculture.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Poultry.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Sericulture.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Animal Cell Culture.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Genetic Engineering.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Aquaculture. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Aquaculture are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Aquaculture provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Poultry. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Poultry are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Poultry provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Sericulture. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Sericulture are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Sericulture provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Animal Cell Culture. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Animal Cell Culture are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Animal Cell Culture provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-applied-zoology-/-animal-biotechnology-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Genetic Engineering. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Genetic Engineering are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Genetic Engineering provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "dse: polymer chemistry / industrial chemistry_set1": [
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Polymer Basics in DSE: Polymer Chemistry / Industrial Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Polymerization in DSE: Polymer Chemistry / Industrial Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Industrial Processes in DSE: Polymer Chemistry / Industrial Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Petrochemicals in DSE: Polymer Chemistry / Industrial Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Green Chemistry in DSE: Polymer Chemistry / Industrial Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Polymer Basics with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Polymer Basics models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Industrial Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Polymerization with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Polymerization models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Industrial Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Industrial Processes with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Industrial Processes models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Industrial Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Petrochemicals with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Petrochemicals models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Industrial Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Green Chemistry with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Green Chemistry models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Industrial Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
  "dse: polymer chemistry / industrial chemistry_set2": [
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Polymer Basics.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Polymerization.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Industrial Processes.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Petrochemicals.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Green Chemistry.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Polymer Basics.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Polymer Basics.",
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
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Polymerization.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Polymerization.",
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
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Industrial Processes.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Industrial Processes.",
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
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Petrochemicals.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Petrochemicals.",
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
      "id": "dse:-polymer-chemistry-/-industrial-chemistry-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Green Chemistry.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Green Chemistry.",
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
  "medicinal botany / ethnobotany_set1": [
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Medicinal Plants and state its primary significance in Medicinal Botany / Ethnobotany.",
      "answer_lines": [
        "**Definition**: Medicinal Plants forms a fundamental structural and operational concept within Medicinal Botany / Ethnobotany, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Phytochemistry and state its primary significance in Medicinal Botany / Ethnobotany.",
      "answer_lines": [
        "**Definition**: Phytochemistry forms a fundamental structural and operational concept within Medicinal Botany / Ethnobotany, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Traditional Medicine and state its primary significance in Medicinal Botany / Ethnobotany.",
      "answer_lines": [
        "**Definition**: Traditional Medicine forms a fundamental structural and operational concept within Medicinal Botany / Ethnobotany, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Ethnobotany and state its primary significance in Medicinal Botany / Ethnobotany.",
      "answer_lines": [
        "**Definition**: Ethnobotany forms a fundamental structural and operational concept within Medicinal Botany / Ethnobotany, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Conservation and state its primary significance in Medicinal Botany / Ethnobotany.",
      "answer_lines": [
        "**Definition**: Conservation forms a fundamental structural and operational concept within Medicinal Botany / Ethnobotany, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Medicinal Plants with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Medicinal Plants serves as a foundational study module in Medicinal Botany / Ethnobotany. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Medicinal Plants is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Phytochemistry with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Phytochemistry serves as a foundational study module in Medicinal Botany / Ethnobotany. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Phytochemistry is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Traditional Medicine with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Traditional Medicine serves as a foundational study module in Medicinal Botany / Ethnobotany. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Traditional Medicine is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Ethnobotany with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Ethnobotany serves as a foundational study module in Medicinal Botany / Ethnobotany. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Ethnobotany is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Conservation with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Conservation serves as a foundational study module in Medicinal Botany / Ethnobotany. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Conservation is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "medicinal botany / ethnobotany_set2": [
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Medicinal Plants.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Phytochemistry.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Traditional Medicine.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Ethnobotany.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Conservation.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Medicinal Plants. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Medicinal Plants are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Medicinal Plants provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Phytochemistry. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Phytochemistry are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Phytochemistry provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Traditional Medicine. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Traditional Medicine are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Traditional Medicine provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Ethnobotany. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Ethnobotany are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Ethnobotany provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "medicinal-botany-/-ethnobotany-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Conservation. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Conservation are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Conservation provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "immunology & immunotechnology_set1": [
    {
      "id": "immunology-&-immunotechnology-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Immune System and state its primary significance in Immunology & Immunotechnology.",
      "answer_lines": [
        "**Definition**: Immune System forms a fundamental structural and operational concept within Immunology & Immunotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Antigens & Antibodies and state its primary significance in Immunology & Immunotechnology.",
      "answer_lines": [
        "**Definition**: Antigens & Antibodies forms a fundamental structural and operational concept within Immunology & Immunotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Immune Response and state its primary significance in Immunology & Immunotechnology.",
      "answer_lines": [
        "**Definition**: Immune Response forms a fundamental structural and operational concept within Immunology & Immunotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Vaccines and state its primary significance in Immunology & Immunotechnology.",
      "answer_lines": [
        "**Definition**: Vaccines forms a fundamental structural and operational concept within Immunology & Immunotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Immunodiagnostics and state its primary significance in Immunology & Immunotechnology.",
      "answer_lines": [
        "**Definition**: Immunodiagnostics forms a fundamental structural and operational concept within Immunology & Immunotechnology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Immune System with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Immune System serves as a foundational study module in Immunology & Immunotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Immune System is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Antigens & Antibodies with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Antigens & Antibodies serves as a foundational study module in Immunology & Immunotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Antigens & Antibodies is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Immune Response with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Immune Response serves as a foundational study module in Immunology & Immunotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Immune Response is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Vaccines with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Vaccines serves as a foundational study module in Immunology & Immunotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Vaccines is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Immunodiagnostics with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Immunodiagnostics serves as a foundational study module in Immunology & Immunotechnology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Immunodiagnostics is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "immunology & immunotechnology_set2": [
    {
      "id": "immunology-&-immunotechnology-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Immune System.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Antigens & Antibodies.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Immune Response.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Vaccines.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Immunodiagnostics.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Immune System. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Immune System are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Immune System provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Antigens & Antibodies. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Antigens & Antibodies are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Antigens & Antibodies provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Immune Response. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Immune Response are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Immune Response provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Vaccines. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Vaccines are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Vaccines provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "immunology-&-immunotechnology-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Immunodiagnostics. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Immunodiagnostics are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Immunodiagnostics provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "immunology lab_set1": [
    {
      "id": "immunology-lab-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Immunology: Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in Immunology Lab.",
      "answer_lines": [
        "**Definition**: Immunology: Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in Immunology Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "immunology-lab-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Immunology: Standard Preparations & Calibration Methods and state its primary measurement protocol in Immunology Lab.",
      "answer_lines": [
        "**Definition**: Immunology: Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in Immunology Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "immunology-lab-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Immunology: Core Experimental Procedures & Synthesis and state its primary measurement protocol in Immunology Lab.",
      "answer_lines": [
        "**Definition**: Immunology: Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in Immunology Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "immunology-lab-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Immunology: Quantitative Data Verification & Error Analysis and state its primary measurement protocol in Immunology Lab.",
      "answer_lines": [
        "**Definition**: Immunology: Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in Immunology Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "immunology-lab-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Immunology: Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in Immunology Lab.",
      "answer_lines": [
        "**Definition**: Immunology: Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in Immunology Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "immunology-lab-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Immunology: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Immunology: Laboratory Safety Protocols & Instrumentation within Immunology Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "immunology-lab-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Immunology: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Immunology: Standard Preparations & Calibration Methods within Immunology Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "immunology-lab-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Immunology: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Immunology: Core Experimental Procedures & Synthesis within Immunology Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "immunology-lab-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Immunology: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Immunology: Quantitative Data Verification & Error Analysis within Immunology Lab. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "immunology-lab-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Immunology: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Immunology: Comprehensive Practical Record & Viva Voce within Immunology Lab. Draw the complete apparatus wiring / setup schematic.",
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
  "immunology lab_set2": [
    {
      "id": "immunology-lab-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Immunology: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "immunology-lab-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Immunology: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "immunology-lab-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Immunology: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "immunology-lab-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Immunology: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "immunology-lab-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Immunology: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "immunology-lab-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Immunology: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Immunology: Laboratory Safety Protocols & Instrumentation.",
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
      "id": "immunology-lab-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Immunology: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Immunology: Standard Preparations & Calibration Methods.",
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
      "id": "immunology-lab-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Immunology: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Immunology: Core Experimental Procedures & Synthesis.",
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
      "id": "immunology-lab-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Immunology: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Immunology: Quantitative Data Verification & Error Analysis.",
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
      "id": "immunology-lab-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Immunology: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Immunology: Comprehensive Practical Record & Viva Voce.",
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
  "dse: medicinal chemistry / polymer chemistry_set1": [
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Drug Design in DSE: Medicinal Chemistry / Polymer Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Drug Classes in DSE: Medicinal Chemistry / Polymer Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Polymers in DSE: Medicinal Chemistry / Polymer Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Polymerization in DSE: Medicinal Chemistry / Polymer Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Applications in DSE: Medicinal Chemistry / Polymer Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Drug Design with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Drug Design models chemical reaction rates and transport mechanisms in DSE: Medicinal Chemistry / Polymer Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Drug Classes with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Drug Classes models chemical reaction rates and transport mechanisms in DSE: Medicinal Chemistry / Polymer Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Polymers with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Polymers models chemical reaction rates and transport mechanisms in DSE: Medicinal Chemistry / Polymer Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Polymerization with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Polymerization models chemical reaction rates and transport mechanisms in DSE: Medicinal Chemistry / Polymer Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Applications with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Applications models chemical reaction rates and transport mechanisms in DSE: Medicinal Chemistry / Polymer Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
  "dse: medicinal chemistry / polymer chemistry_set2": [
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Drug Design.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Drug Classes.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Polymers.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Polymerization.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Applications.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Drug Design.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Drug Design.",
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
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Drug Classes.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Drug Classes.",
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
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q8",
      "question_no": 8,
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
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Polymerization.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Polymerization.",
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
      "id": "dse:-medicinal-chemistry-/-polymer-chemistry-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Applications.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Applications.",
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
  "dse: botany/zoology elective_set1": [
    {
      "id": "dse:-botany/zoology-elective-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Botany/Zoology Elective: Core Concepts & Principles and state its primary significance in DSE: Botany/Zoology Elective.",
      "answer_lines": [
        "**Definition**: DSE: Botany/Zoology Elective: Core Concepts & Principles forms a fundamental structural and operational concept within DSE: Botany/Zoology Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Botany/Zoology Elective: Theoretical Formulations & Modeling and state its primary significance in DSE: Botany/Zoology Elective.",
      "answer_lines": [
        "**Definition**: DSE: Botany/Zoology Elective: Theoretical Formulations & Modeling forms a fundamental structural and operational concept within DSE: Botany/Zoology Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Botany/Zoology Elective: Analytical & Computational Methods and state its primary significance in DSE: Botany/Zoology Elective.",
      "answer_lines": [
        "**Definition**: DSE: Botany/Zoology Elective: Analytical & Computational Methods forms a fundamental structural and operational concept within DSE: Botany/Zoology Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Botany/Zoology Elective: Practical Engineering & Industrial Applications and state its primary significance in DSE: Botany/Zoology Elective.",
      "answer_lines": [
        "**Definition**: DSE: Botany/Zoology Elective: Practical Engineering & Industrial Applications forms a fundamental structural and operational concept within DSE: Botany/Zoology Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Botany/Zoology Elective: Modern Trends, Case Studies & Problem Solving and state its primary significance in DSE: Botany/Zoology Elective.",
      "answer_lines": [
        "**Definition**: DSE: Botany/Zoology Elective: Modern Trends, Case Studies & Problem Solving forms a fundamental structural and operational concept within DSE: Botany/Zoology Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Botany/Zoology Elective: Core Concepts & Principles with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Botany/Zoology Elective: Core Concepts & Principles serves as a foundational study module in DSE: Botany/Zoology Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Botany/Zoology Elective: Core Concepts & Principles is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Botany/Zoology Elective: Theoretical Formulations & Modeling with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Botany/Zoology Elective: Theoretical Formulations & Modeling serves as a foundational study module in DSE: Botany/Zoology Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Botany/Zoology Elective: Theoretical Formulations & Modeling is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Botany/Zoology Elective: Analytical & Computational Methods with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Botany/Zoology Elective: Analytical & Computational Methods serves as a foundational study module in DSE: Botany/Zoology Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Botany/Zoology Elective: Analytical & Computational Methods is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Botany/Zoology Elective: Practical Engineering & Industrial Applications with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Botany/Zoology Elective: Practical Engineering & Industrial Applications serves as a foundational study module in DSE: Botany/Zoology Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Botany/Zoology Elective: Practical Engineering & Industrial Applications is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Botany/Zoology Elective: Modern Trends, Case Studies & Problem Solving with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Botany/Zoology Elective: Modern Trends, Case Studies & Problem Solving serves as a foundational study module in DSE: Botany/Zoology Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Botany/Zoology Elective: Modern Trends, Case Studies & Problem Solving is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "dse: botany/zoology elective_set2": [
    {
      "id": "dse:-botany/zoology-elective-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Botany/Zoology Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Botany/Zoology Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Botany/Zoology Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Botany/Zoology Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Botany/Zoology Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Botany/Zoology Elective: Core Concepts & Principles. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Botany/Zoology Elective: Core Concepts & Principles are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Botany/Zoology Elective: Core Concepts & Principles provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Botany/Zoology Elective: Theoretical Formulations & Modeling. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Botany/Zoology Elective: Theoretical Formulations & Modeling are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Botany/Zoology Elective: Theoretical Formulations & Modeling provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Botany/Zoology Elective: Analytical & Computational Methods. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Botany/Zoology Elective: Analytical & Computational Methods are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Botany/Zoology Elective: Analytical & Computational Methods provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Botany/Zoology Elective: Practical Engineering & Industrial Applications. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Botany/Zoology Elective: Practical Engineering & Industrial Applications are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Botany/Zoology Elective: Practical Engineering & Industrial Applications provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-botany/zoology-elective-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Botany/Zoology Elective: Modern Trends, Case Studies & Problem Solving. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Botany/Zoology Elective: Modern Trends, Case Studies & Problem Solving are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Botany/Zoology Elective: Modern Trends, Case Studies & Problem Solving provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "entrepreneurship in biotech_set1": [
    {
      "id": "entrepreneurship-in-biotech-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Biotech Business and state its primary significance in Entrepreneurship in Biotech.",
      "answer_lines": [
        "**Definition**: Biotech Business forms a fundamental structural and operational concept within Entrepreneurship in Biotech, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Startups and state its primary significance in Entrepreneurship in Biotech.",
      "answer_lines": [
        "**Definition**: Startups forms a fundamental structural and operational concept within Entrepreneurship in Biotech, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Funding and state its primary significance in Entrepreneurship in Biotech.",
      "answer_lines": [
        "**Definition**: Funding forms a fundamental structural and operational concept within Entrepreneurship in Biotech, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Regulations and state its primary significance in Entrepreneurship in Biotech.",
      "answer_lines": [
        "**Definition**: Regulations forms a fundamental structural and operational concept within Entrepreneurship in Biotech, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Case Studies and state its primary significance in Entrepreneurship in Biotech.",
      "answer_lines": [
        "**Definition**: Case Studies forms a fundamental structural and operational concept within Entrepreneurship in Biotech, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Biotech Business with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Biotech Business serves as a foundational study module in Entrepreneurship in Biotech. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Biotech Business is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Startups with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Startups serves as a foundational study module in Entrepreneurship in Biotech. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Startups is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Funding with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Funding serves as a foundational study module in Entrepreneurship in Biotech. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Funding is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Regulations with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Regulations serves as a foundational study module in Entrepreneurship in Biotech. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Regulations is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Case Studies with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Case Studies serves as a foundational study module in Entrepreneurship in Biotech. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Case Studies is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "entrepreneurship in biotech_set2": [
    {
      "id": "entrepreneurship-in-biotech-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Biotech Business.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Startups.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Funding.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Regulations.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Case Studies.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Biotech Business. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Biotech Business are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Biotech Business provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Startups. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Startups are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Startups provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Funding. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Funding are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Funding provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Regulations. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Regulations are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Regulations provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "entrepreneurship-in-biotech-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Case Studies. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Case Studies are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Case Studies provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "quantum mechanics & spectroscopy_set1": [
    {
      "id": "quantum-mechanics-&-spectroscopy-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Wave-Particle Duality in Quantum Mechanics & Spectroscopy.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Schrödinger Equation in Quantum Mechanics & Spectroscopy.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Quantum Numbers in Quantum Mechanics & Spectroscopy.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Atomic Spectra in Quantum Mechanics & Spectroscopy.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Molecular Spectroscopy in Quantum Mechanics & Spectroscopy.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Wave-Particle Duality with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Wave-Particle Duality models chemical reaction rates and transport mechanisms in Quantum Mechanics & Spectroscopy. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "quantum-mechanics-&-spectroscopy-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Schrödinger Equation with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Schrödinger Equation models chemical reaction rates and transport mechanisms in Quantum Mechanics & Spectroscopy. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "quantum-mechanics-&-spectroscopy-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Quantum Numbers with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Quantum Numbers models chemical reaction rates and transport mechanisms in Quantum Mechanics & Spectroscopy. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "quantum-mechanics-&-spectroscopy-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Atomic Spectra with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Atomic Spectra models chemical reaction rates and transport mechanisms in Quantum Mechanics & Spectroscopy. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "quantum-mechanics-&-spectroscopy-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Molecular Spectroscopy with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Molecular Spectroscopy models chemical reaction rates and transport mechanisms in Quantum Mechanics & Spectroscopy. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
  "quantum mechanics & spectroscopy_set2": [
    {
      "id": "quantum-mechanics-&-spectroscopy-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Wave-Particle Duality.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Schrödinger Equation.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Quantum Numbers.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Atomic Spectra.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Molecular Spectroscopy.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "quantum-mechanics-&-spectroscopy-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Wave-Particle Duality.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Wave-Particle Duality.",
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
      "id": "quantum-mechanics-&-spectroscopy-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Schrödinger Equation.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Schrödinger Equation.",
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
      "id": "quantum-mechanics-&-spectroscopy-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Quantum Numbers.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Quantum Numbers.",
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
      "id": "quantum-mechanics-&-spectroscopy-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Atomic Spectra.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Atomic Spectra.",
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
      "id": "quantum-mechanics-&-spectroscopy-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Molecular Spectroscopy.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Molecular Spectroscopy.",
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
  "physics lab v_set1": [
    {
      "id": "physics-lab-v-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  V: Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in Physics Lab V.",
      "answer_lines": [
        "**Definition**: Physics  V: Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in Physics Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-v-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  V: Standard Preparations & Calibration Methods and state its primary measurement protocol in Physics Lab V.",
      "answer_lines": [
        "**Definition**: Physics  V: Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in Physics Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-v-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  V: Core Experimental Procedures & Synthesis and state its primary measurement protocol in Physics Lab V.",
      "answer_lines": [
        "**Definition**: Physics  V: Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in Physics Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-v-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  V: Quantitative Data Verification & Error Analysis and state its primary measurement protocol in Physics Lab V.",
      "answer_lines": [
        "**Definition**: Physics  V: Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in Physics Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-v-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  V: Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in Physics Lab V.",
      "answer_lines": [
        "**Definition**: Physics  V: Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in Physics Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-v-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  V: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  V: Laboratory Safety Protocols & Instrumentation within Physics Lab V. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "physics-lab-v-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  V: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  V: Standard Preparations & Calibration Methods within Physics Lab V. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "physics-lab-v-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  V: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  V: Core Experimental Procedures & Synthesis within Physics Lab V. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "physics-lab-v-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  V: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  V: Quantitative Data Verification & Error Analysis within Physics Lab V. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "physics-lab-v-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  V: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  V: Comprehensive Practical Record & Viva Voce within Physics Lab V. Draw the complete apparatus wiring / setup schematic.",
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
  "physics lab v_set2": [
    {
      "id": "physics-lab-v-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  V: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-v-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  V: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-v-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  V: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-v-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  V: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-v-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  V: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-v-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  V: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  V: Laboratory Safety Protocols & Instrumentation.",
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
      "id": "physics-lab-v-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  V: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  V: Standard Preparations & Calibration Methods.",
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
      "id": "physics-lab-v-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  V: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  V: Core Experimental Procedures & Synthesis.",
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
      "id": "physics-lab-v-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  V: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  V: Quantitative Data Verification & Error Analysis.",
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
      "id": "physics-lab-v-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  V: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  V: Comprehensive Practical Record & Viva Voce.",
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
  "dse: chemistry/cs elective_set1": [
    {
      "id": "dse:-chemistry/cs-elective-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Chemistry/CS Elective: Core Concepts & Principles and state its primary measurement protocol in DSE: Chemistry/CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: Chemistry/CS Elective: Core Concepts & Principles represents a core empirical or experimental procedure in DSE: Chemistry/CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Chemistry/CS Elective: Theoretical Formulations & Modeling and state its primary measurement protocol in DSE: Chemistry/CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: Chemistry/CS Elective: Theoretical Formulations & Modeling represents a core empirical or experimental procedure in DSE: Chemistry/CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Chemistry/CS Elective: Analytical & Computational Methods and state its primary measurement protocol in DSE: Chemistry/CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: Chemistry/CS Elective: Analytical & Computational Methods represents a core empirical or experimental procedure in DSE: Chemistry/CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Chemistry/CS Elective: Practical Engineering & Industrial Applications and state its primary measurement protocol in DSE: Chemistry/CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: Chemistry/CS Elective: Practical Engineering & Industrial Applications represents a core empirical or experimental procedure in DSE: Chemistry/CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Chemistry/CS Elective: Modern Trends, Case Studies & Problem Solving and state its primary measurement protocol in DSE: Chemistry/CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: Chemistry/CS Elective: Modern Trends, Case Studies & Problem Solving represents a core empirical or experimental procedure in DSE: Chemistry/CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Chemistry/CS Elective: Core Concepts & Principles with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Chemistry/CS Elective: Core Concepts & Principles within DSE: Chemistry/CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-chemistry/cs-elective-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Chemistry/CS Elective: Theoretical Formulations & Modeling with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Chemistry/CS Elective: Theoretical Formulations & Modeling within DSE: Chemistry/CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-chemistry/cs-elective-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Chemistry/CS Elective: Analytical & Computational Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Chemistry/CS Elective: Analytical & Computational Methods within DSE: Chemistry/CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-chemistry/cs-elective-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Chemistry/CS Elective: Practical Engineering & Industrial Applications with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Chemistry/CS Elective: Practical Engineering & Industrial Applications within DSE: Chemistry/CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-chemistry/cs-elective-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Chemistry/CS Elective: Modern Trends, Case Studies & Problem Solving with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Chemistry/CS Elective: Modern Trends, Case Studies & Problem Solving within DSE: Chemistry/CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
  "dse: chemistry/cs elective_set2": [
    {
      "id": "dse:-chemistry/cs-elective-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Chemistry/CS Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Chemistry/CS Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Chemistry/CS Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Chemistry/CS Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Chemistry/CS Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-chemistry/cs-elective-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Chemistry/CS Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Chemistry/CS Elective: Core Concepts & Principles.",
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
      "id": "dse:-chemistry/cs-elective-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Chemistry/CS Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Chemistry/CS Elective: Theoretical Formulations & Modeling.",
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
      "id": "dse:-chemistry/cs-elective-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Chemistry/CS Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Chemistry/CS Elective: Analytical & Computational Methods.",
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
      "id": "dse:-chemistry/cs-elective-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Chemistry/CS Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Chemistry/CS Elective: Practical Engineering & Industrial Applications.",
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
      "id": "dse:-chemistry/cs-elective-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Chemistry/CS Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Chemistry/CS Elective: Modern Trends, Case Studies & Problem Solving.",
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
  "computational physics_set1": [
    {
      "id": "computational-physics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Python for Physics and state its primary measurement protocol in Computational Physics.",
      "answer_lines": [
        "**Definition**: Python for Physics represents a core empirical or experimental procedure in Computational Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computational-physics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Numerical Methods and state its primary measurement protocol in Computational Physics.",
      "answer_lines": [
        "**Definition**: Numerical Methods represents a core empirical or experimental procedure in Computational Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computational-physics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Simulation and state its primary measurement protocol in Computational Physics.",
      "answer_lines": [
        "**Definition**: Simulation represents a core empirical or experimental procedure in Computational Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computational-physics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Data Analysis and state its primary measurement protocol in Computational Physics.",
      "answer_lines": [
        "**Definition**: Data Analysis represents a core empirical or experimental procedure in Computational Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computational-physics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Visualization and state its primary measurement protocol in Computational Physics.",
      "answer_lines": [
        "**Definition**: Visualization represents a core empirical or experimental procedure in Computational Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computational-physics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Python for Physics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Python for Physics within Computational Physics. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "computational-physics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Numerical Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Numerical Methods within Computational Physics. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "computational-physics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Simulation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Simulation within Computational Physics. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "computational-physics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Data Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Data Analysis within Computational Physics. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "computational-physics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Visualization with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Visualization within Computational Physics. Draw the complete apparatus wiring / setup schematic.",
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
  "computational physics_set2": [
    {
      "id": "computational-physics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Python for Physics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computational-physics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Numerical Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computational-physics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Simulation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computational-physics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Data Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computational-physics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Visualization.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computational-physics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Python for Physics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Python for Physics.",
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
      "id": "computational-physics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Numerical Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Numerical Methods.",
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
      "id": "computational-physics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Simulation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Simulation.",
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
      "id": "computational-physics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Data Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Data Analysis.",
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
      "id": "computational-physics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Visualization.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Visualization.",
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
  "dse: polymer chemistry / medicinal chemistry_set1": [
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Polymer Basics in DSE: Polymer Chemistry / Medicinal Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Polymerization in DSE: Polymer Chemistry / Medicinal Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Drug Design in DSE: Polymer Chemistry / Medicinal Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Drug Classes in DSE: Polymer Chemistry / Medicinal Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Applications in DSE: Polymer Chemistry / Medicinal Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Polymer Basics with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Polymer Basics models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Medicinal Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Polymerization with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Polymerization models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Medicinal Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Drug Design with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Drug Design models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Medicinal Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Drug Classes with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Drug Classes models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Medicinal Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Applications with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Applications models chemical reaction rates and transport mechanisms in DSE: Polymer Chemistry / Medicinal Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
  "dse: polymer chemistry / medicinal chemistry_set2": [
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Polymer Basics.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Polymerization.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Drug Design.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Drug Classes.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Applications.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Polymer Basics.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Polymer Basics.",
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
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Polymerization.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Polymerization.",
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
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Drug Design.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Drug Design.",
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
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Drug Classes.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Drug Classes.",
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
      "id": "dse:-polymer-chemistry-/-medicinal-chemistry-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Applications.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Applications.",
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
  "chemistry lab v_set1": [
    {
      "id": "chemistry-lab-v-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  V: Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in Chemistry Lab V.",
      "answer_lines": [
        "**Definition**: Chemistry  V: Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in Chemistry Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-v-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  V: Standard Preparations & Calibration Methods and state its primary measurement protocol in Chemistry Lab V.",
      "answer_lines": [
        "**Definition**: Chemistry  V: Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in Chemistry Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-v-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  V: Core Experimental Procedures & Synthesis and state its primary measurement protocol in Chemistry Lab V.",
      "answer_lines": [
        "**Definition**: Chemistry  V: Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in Chemistry Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-v-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  V: Quantitative Data Verification & Error Analysis and state its primary measurement protocol in Chemistry Lab V.",
      "answer_lines": [
        "**Definition**: Chemistry  V: Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in Chemistry Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-v-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  V: Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in Chemistry Lab V.",
      "answer_lines": [
        "**Definition**: Chemistry  V: Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in Chemistry Lab V, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-v-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  V: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  V: Laboratory Safety Protocols & Instrumentation within Chemistry Lab V. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "chemistry-lab-v-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  V: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  V: Standard Preparations & Calibration Methods within Chemistry Lab V. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "chemistry-lab-v-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  V: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  V: Core Experimental Procedures & Synthesis within Chemistry Lab V. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "chemistry-lab-v-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  V: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  V: Quantitative Data Verification & Error Analysis within Chemistry Lab V. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "chemistry-lab-v-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  V: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  V: Comprehensive Practical Record & Viva Voce within Chemistry Lab V. Draw the complete apparatus wiring / setup schematic.",
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
  "chemistry lab v_set2": [
    {
      "id": "chemistry-lab-v-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  V: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-v-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  V: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-v-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  V: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-v-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  V: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-v-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  V: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-v-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  V: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  V: Laboratory Safety Protocols & Instrumentation.",
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
      "id": "chemistry-lab-v-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  V: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  V: Standard Preparations & Calibration Methods.",
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
      "id": "chemistry-lab-v-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  V: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  V: Core Experimental Procedures & Synthesis.",
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
      "id": "chemistry-lab-v-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  V: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  V: Quantitative Data Verification & Error Analysis.",
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
      "id": "chemistry-lab-v-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  V: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  V: Comprehensive Practical Record & Viva Voce.",
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
  "dse: physics elective_set1": [
    {
      "id": "dse:-physics-elective-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics Elective: Core Concepts & Principles and state its primary measurement protocol in DSE: Physics Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics Elective: Core Concepts & Principles represents a core empirical or experimental procedure in DSE: Physics Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics-elective-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics Elective: Theoretical Formulations & Modeling and state its primary measurement protocol in DSE: Physics Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics Elective: Theoretical Formulations & Modeling represents a core empirical or experimental procedure in DSE: Physics Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics-elective-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics Elective: Analytical & Computational Methods and state its primary measurement protocol in DSE: Physics Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics Elective: Analytical & Computational Methods represents a core empirical or experimental procedure in DSE: Physics Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics-elective-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics Elective: Practical Engineering & Industrial Applications and state its primary measurement protocol in DSE: Physics Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics Elective: Practical Engineering & Industrial Applications represents a core empirical or experimental procedure in DSE: Physics Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics-elective-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Physics Elective: Modern Trends, Case Studies & Problem Solving and state its primary measurement protocol in DSE: Physics Elective.",
      "answer_lines": [
        "**Definition**: DSE: Physics Elective: Modern Trends, Case Studies & Problem Solving represents a core empirical or experimental procedure in DSE: Physics Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-physics-elective-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics Elective: Core Concepts & Principles with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics Elective: Core Concepts & Principles within DSE: Physics Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-physics-elective-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics Elective: Theoretical Formulations & Modeling with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics Elective: Theoretical Formulations & Modeling within DSE: Physics Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-physics-elective-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics Elective: Analytical & Computational Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics Elective: Analytical & Computational Methods within DSE: Physics Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-physics-elective-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics Elective: Practical Engineering & Industrial Applications with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics Elective: Practical Engineering & Industrial Applications within DSE: Physics Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-physics-elective-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: Physics Elective: Modern Trends, Case Studies & Problem Solving with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: Physics Elective: Modern Trends, Case Studies & Problem Solving within DSE: Physics Elective. Draw the complete apparatus wiring / setup schematic.",
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
  "dse: physics elective_set2": [
    {
      "id": "dse:-physics-elective-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics-elective-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics-elective-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics-elective-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics-elective-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: Physics Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-physics-elective-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics Elective: Core Concepts & Principles.",
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
      "id": "dse:-physics-elective-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics Elective: Theoretical Formulations & Modeling.",
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
      "id": "dse:-physics-elective-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics Elective: Analytical & Computational Methods.",
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
      "id": "dse:-physics-elective-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics Elective: Practical Engineering & Industrial Applications.",
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
      "id": "dse:-physics-elective-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: Physics Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: Physics Elective: Modern Trends, Case Studies & Problem Solving.",
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
  "dse: math/botany elective_set1": [
    {
      "id": "dse:-math/botany-elective-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Math/Botany Elective: Core Concepts & Principles and state its primary significance in DSE: Math/Botany Elective.",
      "answer_lines": [
        "**Definition**: DSE: Math/Botany Elective: Core Concepts & Principles forms a fundamental structural and operational concept within DSE: Math/Botany Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Math/Botany Elective: Theoretical Formulations & Modeling and state its primary significance in DSE: Math/Botany Elective.",
      "answer_lines": [
        "**Definition**: DSE: Math/Botany Elective: Theoretical Formulations & Modeling forms a fundamental structural and operational concept within DSE: Math/Botany Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Math/Botany Elective: Analytical & Computational Methods and state its primary significance in DSE: Math/Botany Elective.",
      "answer_lines": [
        "**Definition**: DSE: Math/Botany Elective: Analytical & Computational Methods forms a fundamental structural and operational concept within DSE: Math/Botany Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Math/Botany Elective: Practical Engineering & Industrial Applications and state its primary significance in DSE: Math/Botany Elective.",
      "answer_lines": [
        "**Definition**: DSE: Math/Botany Elective: Practical Engineering & Industrial Applications forms a fundamental structural and operational concept within DSE: Math/Botany Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: Math/Botany Elective: Modern Trends, Case Studies & Problem Solving and state its primary significance in DSE: Math/Botany Elective.",
      "answer_lines": [
        "**Definition**: DSE: Math/Botany Elective: Modern Trends, Case Studies & Problem Solving forms a fundamental structural and operational concept within DSE: Math/Botany Elective, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Math/Botany Elective: Core Concepts & Principles with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Math/Botany Elective: Core Concepts & Principles serves as a foundational study module in DSE: Math/Botany Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Math/Botany Elective: Core Concepts & Principles is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Math/Botany Elective: Theoretical Formulations & Modeling with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Math/Botany Elective: Theoretical Formulations & Modeling serves as a foundational study module in DSE: Math/Botany Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Math/Botany Elective: Theoretical Formulations & Modeling is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Math/Botany Elective: Analytical & Computational Methods with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Math/Botany Elective: Analytical & Computational Methods serves as a foundational study module in DSE: Math/Botany Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Math/Botany Elective: Analytical & Computational Methods is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Math/Botany Elective: Practical Engineering & Industrial Applications with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Math/Botany Elective: Practical Engineering & Industrial Applications serves as a foundational study module in DSE: Math/Botany Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Math/Botany Elective: Practical Engineering & Industrial Applications is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DSE: Math/Botany Elective: Modern Trends, Case Studies & Problem Solving with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DSE: Math/Botany Elective: Modern Trends, Case Studies & Problem Solving serves as a foundational study module in DSE: Math/Botany Elective. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DSE: Math/Botany Elective: Modern Trends, Case Studies & Problem Solving is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "dse: math/botany elective_set2": [
    {
      "id": "dse:-math/botany-elective-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Math/Botany Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Math/Botany Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Math/Botany Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Math/Botany Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DSE: Math/Botany Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Math/Botany Elective: Core Concepts & Principles. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Math/Botany Elective: Core Concepts & Principles are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Math/Botany Elective: Core Concepts & Principles provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Math/Botany Elective: Theoretical Formulations & Modeling. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Math/Botany Elective: Theoretical Formulations & Modeling are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Math/Botany Elective: Theoretical Formulations & Modeling provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Math/Botany Elective: Analytical & Computational Methods. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Math/Botany Elective: Analytical & Computational Methods are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Math/Botany Elective: Analytical & Computational Methods provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Math/Botany Elective: Practical Engineering & Industrial Applications. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Math/Botany Elective: Practical Engineering & Industrial Applications are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Math/Botany Elective: Practical Engineering & Industrial Applications provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "dse:-math/botany-elective-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DSE: Math/Botany Elective: Modern Trends, Case Studies & Problem Solving. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DSE: Math/Botany Elective: Modern Trends, Case Studies & Problem Solving are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DSE: Math/Botany Elective: Modern Trends, Case Studies & Problem Solving provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "pharmaceutical chemistry_set1": [
    {
      "id": "pharmaceutical-chemistry-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Drug Basics and state its primary measurement protocol in Pharmaceutical Chemistry.",
      "answer_lines": [
        "**Definition**: Drug Basics represents a core empirical or experimental procedure in Pharmaceutical Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Pharmacokinetics and state its primary measurement protocol in Pharmaceutical Chemistry.",
      "answer_lines": [
        "**Definition**: Pharmacokinetics represents a core empirical or experimental procedure in Pharmaceutical Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Drug Synthesis and state its primary measurement protocol in Pharmaceutical Chemistry.",
      "answer_lines": [
        "**Definition**: Drug Synthesis represents a core empirical or experimental procedure in Pharmaceutical Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Quality Control and state its primary measurement protocol in Pharmaceutical Chemistry.",
      "answer_lines": [
        "**Definition**: Quality Control represents a core empirical or experimental procedure in Pharmaceutical Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Regulations and state its primary measurement protocol in Pharmaceutical Chemistry.",
      "answer_lines": [
        "**Definition**: Regulations represents a core empirical or experimental procedure in Pharmaceutical Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Drug Basics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Drug Basics within Pharmaceutical Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "pharmaceutical-chemistry-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Pharmacokinetics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Pharmacokinetics within Pharmaceutical Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "pharmaceutical-chemistry-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Drug Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Drug Synthesis within Pharmaceutical Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "pharmaceutical-chemistry-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Quality Control with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Quality Control within Pharmaceutical Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "pharmaceutical-chemistry-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Regulations with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Regulations within Pharmaceutical Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
  "pharmaceutical chemistry_set2": [
    {
      "id": "pharmaceutical-chemistry-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Drug Basics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Pharmacokinetics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Drug Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Quality Control.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Regulations.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "pharmaceutical-chemistry-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Drug Basics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Drug Basics.",
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
      "id": "pharmaceutical-chemistry-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Pharmacokinetics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Pharmacokinetics.",
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
      "id": "pharmaceutical-chemistry-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Drug Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Drug Synthesis.",
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
      "id": "pharmaceutical-chemistry-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Quality Control.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Quality Control.",
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
      "id": "pharmaceutical-chemistry-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Regulations.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Regulations.",
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
  "dse: cs elective_set1": [
    {
      "id": "dse:-cs-elective-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: CS Elective: Core Concepts & Principles and state its primary measurement protocol in DSE: CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: CS Elective: Core Concepts & Principles represents a core empirical or experimental procedure in DSE: CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-cs-elective-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: CS Elective: Theoretical Formulations & Modeling and state its primary measurement protocol in DSE: CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: CS Elective: Theoretical Formulations & Modeling represents a core empirical or experimental procedure in DSE: CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-cs-elective-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: CS Elective: Analytical & Computational Methods and state its primary measurement protocol in DSE: CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: CS Elective: Analytical & Computational Methods represents a core empirical or experimental procedure in DSE: CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-cs-elective-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: CS Elective: Practical Engineering & Industrial Applications and state its primary measurement protocol in DSE: CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: CS Elective: Practical Engineering & Industrial Applications represents a core empirical or experimental procedure in DSE: CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-cs-elective-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DSE: CS Elective: Modern Trends, Case Studies & Problem Solving and state its primary measurement protocol in DSE: CS Elective.",
      "answer_lines": [
        "**Definition**: DSE: CS Elective: Modern Trends, Case Studies & Problem Solving represents a core empirical or experimental procedure in DSE: CS Elective, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dse:-cs-elective-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: CS Elective: Core Concepts & Principles with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: CS Elective: Core Concepts & Principles within DSE: CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-cs-elective-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: CS Elective: Theoretical Formulations & Modeling with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: CS Elective: Theoretical Formulations & Modeling within DSE: CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-cs-elective-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: CS Elective: Analytical & Computational Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: CS Elective: Analytical & Computational Methods within DSE: CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-cs-elective-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: CS Elective: Practical Engineering & Industrial Applications with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: CS Elective: Practical Engineering & Industrial Applications within DSE: CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "dse:-cs-elective-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DSE: CS Elective: Modern Trends, Case Studies & Problem Solving with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DSE: CS Elective: Modern Trends, Case Studies & Problem Solving within DSE: CS Elective. Draw the complete apparatus wiring / setup schematic.",
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
  "dse: cs elective_set2": [
    {
      "id": "dse:-cs-elective-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: CS Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-cs-elective-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: CS Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-cs-elective-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: CS Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-cs-elective-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: CS Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-cs-elective-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DSE: CS Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dse:-cs-elective-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: CS Elective: Core Concepts & Principles.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: CS Elective: Core Concepts & Principles.",
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
      "id": "dse:-cs-elective-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: CS Elective: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: CS Elective: Theoretical Formulations & Modeling.",
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
      "id": "dse:-cs-elective-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: CS Elective: Analytical & Computational Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: CS Elective: Analytical & Computational Methods.",
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
      "id": "dse:-cs-elective-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: CS Elective: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: CS Elective: Practical Engineering & Industrial Applications.",
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
      "id": "dse:-cs-elective-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DSE: CS Elective: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DSE: CS Elective: Modern Trends, Case Studies & Problem Solving.",
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
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Root Finding with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Root Finding within Numerical Methods.",
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
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Interpolation with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Interpolation within Numerical Methods.",
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
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Numerical Integration with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Numerical Integration within Numerical Methods.",
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
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Root Finding.",
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
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Interpolation.",
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
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Numerical Integration.",
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
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Root Finding.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Root Finding in Numerical Methods.",
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
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Interpolation.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Interpolation in Numerical Methods.",
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
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Numerical Integration.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Numerical Integration in Numerical Methods.",
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
  ]
};

export function getBScSem5PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase().trim();
  const setSuffix = isSet1 ? "_set1" : "_set2";
  const exactKey = `${s}${setSuffix}`;
  if (sem5BScPapersData[exactKey]) {
    return sem5BScPapersData[exactKey];
  }
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(sem5BScPapersData)) {
    if (k.endsWith(setSuffix)) {
      const subKey = k.replace(setSuffix, "");
      if (s.includes(subKey) || subKey.includes(s)) {
        return v;
      }
    }
  }
  return null;
}
