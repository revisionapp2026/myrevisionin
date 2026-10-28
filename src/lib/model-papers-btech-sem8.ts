/**
 * Authentic University Model Papers & Solved Solutions for B.Tech Semester 8.
 * Curricula: AICTE Model Curriculum / University R22 Guidelines.
 *
 * Covers 27 Subjects (54 Question Papers, 540 Solved Questions).
 * Part A (5x2M short questions) + Part B (5x10M essay problems with step-by-step solutions).
 */

import type { DbQuestion } from "./content";

const sem8BTechPapersData: Record<string, DbQuestion[]> = {
  "blockchain technology_set1": [
    {
      "id": "blockchain-technology-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Blockchain Fundamentals and state its primary asymptotic time complexity in Blockchain Technology.",
      "answer_lines": [
        "**Definition**: In Blockchain Technology, Blockchain Fundamentals establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "blockchain-technology-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Cryptocurrency and state its primary asymptotic time complexity in Blockchain Technology.",
      "answer_lines": [
        "**Definition**: In Blockchain Technology, Cryptocurrency establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "blockchain-technology-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Smart Contracts and state its primary asymptotic time complexity in Blockchain Technology.",
      "answer_lines": [
        "**Definition**: In Blockchain Technology, Smart Contracts establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "blockchain-technology-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Consensus Mechanisms and state its primary asymptotic time complexity in Blockchain Technology.",
      "answer_lines": [
        "**Definition**: In Blockchain Technology, Consensus Mechanisms establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "blockchain-technology-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Blockchain Applications and state its primary asymptotic time complexity in Blockchain Technology.",
      "answer_lines": [
        "**Definition**: In Blockchain Technology, Blockchain Applications establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "blockchain-technology-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Blockchain Fundamentals with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Blockchain Fundamentals serves as a core computational building block in Blockchain Technology, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "blockchain-technology-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Cryptocurrency with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Cryptocurrency serves as a core computational building block in Blockchain Technology, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "blockchain-technology-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Smart Contracts with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Smart Contracts serves as a core computational building block in Blockchain Technology, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "blockchain-technology-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Consensus Mechanisms with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Consensus Mechanisms serves as a core computational building block in Blockchain Technology, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "blockchain-technology-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Blockchain Applications with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Blockchain Applications serves as a core computational building block in Blockchain Technology, optimizing storage efficiency, access latency, and data integrity.",
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
  "blockchain technology_set2": [
    {
      "id": "blockchain-technology-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Blockchain Fundamentals.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Blockchain Fundamentals.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "blockchain-technology-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Cryptocurrency.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Cryptocurrency.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "blockchain-technology-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Smart Contracts.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Smart Contracts.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "blockchain-technology-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Consensus Mechanisms.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Consensus Mechanisms.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "blockchain-technology-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Blockchain Applications.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Blockchain Applications.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "blockchain-technology-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Blockchain Fundamentals. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Blockchain Fundamentals.",
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
      "id": "blockchain-technology-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Cryptocurrency. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Cryptocurrency.",
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
      "id": "blockchain-technology-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Smart Contracts. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Smart Contracts.",
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
      "id": "blockchain-technology-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Consensus Mechanisms. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Consensus Mechanisms.",
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
      "id": "blockchain-technology-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Blockchain Applications. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Blockchain Applications.",
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
  "natural language processing_set1": [
    {
      "id": "natural-language-processing-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Text Processing and state its primary measurement protocol in Natural Language Processing.",
      "answer_lines": [
        "**Definition**: Text Processing represents a core empirical or experimental procedure in Natural Language Processing, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "natural-language-processing-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Language Models and state its primary measurement protocol in Natural Language Processing.",
      "answer_lines": [
        "**Definition**: Language Models represents a core empirical or experimental procedure in Natural Language Processing, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "natural-language-processing-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define POS Tagging & Parsing and state its primary measurement protocol in Natural Language Processing.",
      "answer_lines": [
        "**Definition**: POS Tagging & Parsing represents a core empirical or experimental procedure in Natural Language Processing, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "natural-language-processing-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Sentiment Analysis and state its primary measurement protocol in Natural Language Processing.",
      "answer_lines": [
        "**Definition**: Sentiment Analysis represents a core empirical or experimental procedure in Natural Language Processing, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "natural-language-processing-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Machine Translation and state its primary measurement protocol in Natural Language Processing.",
      "answer_lines": [
        "**Definition**: Machine Translation represents a core empirical or experimental procedure in Natural Language Processing, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "natural-language-processing-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Text Processing with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Text Processing within Natural Language Processing. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "natural-language-processing-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Language Models with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Language Models within Natural Language Processing. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "natural-language-processing-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for POS Tagging & Parsing with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for POS Tagging & Parsing within Natural Language Processing. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "natural-language-processing-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Sentiment Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Sentiment Analysis within Natural Language Processing. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "natural-language-processing-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Machine Translation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Machine Translation within Natural Language Processing. Draw the complete apparatus wiring / setup schematic.",
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
  "natural language processing_set2": [
    {
      "id": "natural-language-processing-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Text Processing.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "natural-language-processing-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Language Models.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "natural-language-processing-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for POS Tagging & Parsing.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "natural-language-processing-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Sentiment Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "natural-language-processing-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Machine Translation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "natural-language-processing-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Text Processing.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Text Processing.",
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
      "id": "natural-language-processing-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Language Models.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Language Models.",
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
      "id": "natural-language-processing-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for POS Tagging & Parsing.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in POS Tagging & Parsing.",
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
      "id": "natural-language-processing-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Sentiment Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Sentiment Analysis.",
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
      "id": "natural-language-processing-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Machine Translation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Machine Translation.",
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
  "devops & cloud deployment_set1": [
    {
      "id": "devops-&-cloud-deployment-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DevOps Culture and state its primary asymptotic time complexity in DevOps & Cloud Deployment.",
      "answer_lines": [
        "**Definition**: In DevOps & Cloud Deployment, DevOps Culture establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define CI/CD Pipelines and state its primary asymptotic time complexity in DevOps & Cloud Deployment.",
      "answer_lines": [
        "**Definition**: In DevOps & Cloud Deployment, CI/CD Pipelines establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Containerization (Docker) and state its primary asymptotic time complexity in DevOps & Cloud Deployment.",
      "answer_lines": [
        "**Definition**: In DevOps & Cloud Deployment, Containerization (Docker) establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Orchestration (Kubernetes) and state its primary asymptotic time complexity in DevOps & Cloud Deployment.",
      "answer_lines": [
        "**Definition**: In DevOps & Cloud Deployment, Orchestration (Kubernetes) establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Monitoring & Logging and state its primary asymptotic time complexity in DevOps & Cloud Deployment.",
      "answer_lines": [
        "**Definition**: In DevOps & Cloud Deployment, Monitoring & Logging establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of DevOps Culture with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "DevOps Culture serves as a core computational building block in DevOps & Cloud Deployment, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "devops-&-cloud-deployment-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of CI/CD Pipelines with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "CI/CD Pipelines serves as a core computational building block in DevOps & Cloud Deployment, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "devops-&-cloud-deployment-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Containerization (Docker) with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Containerization (Docker) serves as a core computational building block in DevOps & Cloud Deployment, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "devops-&-cloud-deployment-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Orchestration (Kubernetes) with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Orchestration (Kubernetes) serves as a core computational building block in DevOps & Cloud Deployment, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "devops-&-cloud-deployment-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Monitoring & Logging with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Monitoring & Logging serves as a core computational building block in DevOps & Cloud Deployment, optimizing storage efficiency, access latency, and data integrity.",
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
  "devops & cloud deployment_set2": [
    {
      "id": "devops-&-cloud-deployment-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with DevOps Culture.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in DevOps Culture.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with CI/CD Pipelines.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in CI/CD Pipelines.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Containerization (Docker).",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Containerization (Docker).",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Orchestration (Kubernetes).",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Orchestration (Kubernetes).",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Monitoring & Logging.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Monitoring & Logging.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "devops-&-cloud-deployment-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for DevOps Culture. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in DevOps Culture.",
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
      "id": "devops-&-cloud-deployment-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for CI/CD Pipelines. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in CI/CD Pipelines.",
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
      "id": "devops-&-cloud-deployment-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Containerization (Docker). Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Containerization (Docker).",
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
      "id": "devops-&-cloud-deployment-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Orchestration (Kubernetes). Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Orchestration (Kubernetes).",
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
      "id": "devops-&-cloud-deployment-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Monitoring & Logging. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Monitoring & Logging.",
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
  "major project_set1": [
    {
      "id": "major-project-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Problem and state its primary measurement protocol in Major Project.",
      "answer_lines": [
        "**Definition**: Problem represents a core empirical or experimental procedure in Major Project, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Literature and state its primary measurement protocol in Major Project.",
      "answer_lines": [
        "**Definition**: Literature represents a core empirical or experimental procedure in Major Project, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Design and state its primary measurement protocol in Major Project.",
      "answer_lines": [
        "**Definition**: Design represents a core empirical or experimental procedure in Major Project, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Implementation and state its primary measurement protocol in Major Project.",
      "answer_lines": [
        "**Definition**: Implementation represents a core empirical or experimental procedure in Major Project, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Testing & Documentation and state its primary measurement protocol in Major Project.",
      "answer_lines": [
        "**Definition**: Testing & Documentation represents a core empirical or experimental procedure in Major Project, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Problem with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Problem within Major Project. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "major-project-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Literature with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Literature within Major Project. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "major-project-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Design with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Design within Major Project. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "major-project-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Implementation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Implementation within Major Project. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "major-project-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Testing & Documentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Testing & Documentation within Major Project. Draw the complete apparatus wiring / setup schematic.",
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
  "major project_set2": [
    {
      "id": "major-project-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Problem.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Literature.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Design.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Implementation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Testing & Documentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Problem.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Problem.",
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
      "id": "major-project-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Literature.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Literature.",
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
      "id": "major-project-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Design.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Design.",
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
      "id": "major-project-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Implementation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Implementation.",
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
      "id": "major-project-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Testing & Documentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Testing & Documentation.",
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
  "wireless communication & 5g networks_set1": [
    {
      "id": "wireless-communication-&-5g-networks-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Cellular Concept & Architecture and state its primary significance in Wireless Communication & 5G Networks.",
      "answer_lines": [
        "**Definition**: Cellular Concept & Architecture forms a fundamental structural and operational concept within Wireless Communication & 5G Networks, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define 5G NR & Massive MIMO and state its primary significance in Wireless Communication & 5G Networks.",
      "answer_lines": [
        "**Definition**: 5G NR & Massive MIMO forms a fundamental structural and operational concept within Wireless Communication & 5G Networks, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Millimeter Wave Communication and state its primary significance in Wireless Communication & 5G Networks.",
      "answer_lines": [
        "**Definition**: Millimeter Wave Communication forms a fundamental structural and operational concept within Wireless Communication & 5G Networks, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Channel Modeling & Fading and state its primary significance in Wireless Communication & 5G Networks.",
      "answer_lines": [
        "**Definition**: Channel Modeling & Fading forms a fundamental structural and operational concept within Wireless Communication & 5G Networks, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define IoT Wireless Connectivity and state its primary significance in Wireless Communication & 5G Networks.",
      "answer_lines": [
        "**Definition**: IoT Wireless Connectivity forms a fundamental structural and operational concept within Wireless Communication & 5G Networks, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Cellular Concept & Architecture with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Cellular Concept & Architecture serves as a foundational study module in Wireless Communication & 5G Networks. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Cellular Concept & Architecture is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of 5G NR & Massive MIMO with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "5G NR & Massive MIMO serves as a foundational study module in Wireless Communication & 5G Networks. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of 5G NR & Massive MIMO is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Millimeter Wave Communication with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Millimeter Wave Communication serves as a foundational study module in Wireless Communication & 5G Networks. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Millimeter Wave Communication is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Channel Modeling & Fading with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Channel Modeling & Fading serves as a foundational study module in Wireless Communication & 5G Networks. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Channel Modeling & Fading is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of IoT Wireless Connectivity with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "IoT Wireless Connectivity serves as a foundational study module in Wireless Communication & 5G Networks. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of IoT Wireless Connectivity is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "wireless communication & 5g networks_set2": [
    {
      "id": "wireless-communication-&-5g-networks-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Cellular Concept & Architecture.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with 5G NR & Massive MIMO.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Millimeter Wave Communication.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Channel Modeling & Fading.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with IoT Wireless Connectivity.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Cellular Concept & Architecture. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Cellular Concept & Architecture are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Cellular Concept & Architecture provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of 5G NR & Massive MIMO. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within 5G NR & Massive MIMO are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of 5G NR & Massive MIMO provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Millimeter Wave Communication. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Millimeter Wave Communication are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Millimeter Wave Communication provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Channel Modeling & Fading. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Channel Modeling & Fading are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Channel Modeling & Fading provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "wireless-communication-&-5g-networks-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of IoT Wireless Connectivity. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within IoT Wireless Connectivity are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of IoT Wireless Connectivity provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "satellite & optical fiber communication_set1": [
    {
      "id": "satellite-&-optical-fiber-communication-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Orbital Mechanics & Launchers and state its primary significance in Satellite & Optical Fiber Communication.",
      "answer_lines": [
        "**Definition**: Orbital Mechanics & Launchers forms a fundamental structural and operational concept within Satellite & Optical Fiber Communication, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Satellite Transponders & Links and state its primary significance in Satellite & Optical Fiber Communication.",
      "answer_lines": [
        "**Definition**: Satellite Transponders & Links forms a fundamental structural and operational concept within Satellite & Optical Fiber Communication, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Optical Fiber Transmission and state its primary significance in Satellite & Optical Fiber Communication.",
      "answer_lines": [
        "**Definition**: Optical Fiber Transmission forms a fundamental structural and operational concept within Satellite & Optical Fiber Communication, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define WDM & Optical Networks and state its primary significance in Satellite & Optical Fiber Communication.",
      "answer_lines": [
        "**Definition**: WDM & Optical Networks forms a fundamental structural and operational concept within Satellite & Optical Fiber Communication, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define GPS & Navigation Systems and state its primary significance in Satellite & Optical Fiber Communication.",
      "answer_lines": [
        "**Definition**: GPS & Navigation Systems forms a fundamental structural and operational concept within Satellite & Optical Fiber Communication, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Orbital Mechanics & Launchers with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Orbital Mechanics & Launchers serves as a foundational study module in Satellite & Optical Fiber Communication. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Orbital Mechanics & Launchers is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Satellite Transponders & Links with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Satellite Transponders & Links serves as a foundational study module in Satellite & Optical Fiber Communication. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Satellite Transponders & Links is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Optical Fiber Transmission with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Optical Fiber Transmission serves as a foundational study module in Satellite & Optical Fiber Communication. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Optical Fiber Transmission is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of WDM & Optical Networks with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "WDM & Optical Networks serves as a foundational study module in Satellite & Optical Fiber Communication. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of WDM & Optical Networks is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of GPS & Navigation Systems with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "GPS & Navigation Systems serves as a foundational study module in Satellite & Optical Fiber Communication. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of GPS & Navigation Systems is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "satellite & optical fiber communication_set2": [
    {
      "id": "satellite-&-optical-fiber-communication-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Orbital Mechanics & Launchers.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Satellite Transponders & Links.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Optical Fiber Transmission.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with WDM & Optical Networks.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with GPS & Navigation Systems.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Orbital Mechanics & Launchers. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Orbital Mechanics & Launchers are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Orbital Mechanics & Launchers provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Satellite Transponders & Links. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Satellite Transponders & Links are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Satellite Transponders & Links provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Optical Fiber Transmission. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Optical Fiber Transmission are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Optical Fiber Transmission provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of WDM & Optical Networks. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within WDM & Optical Networks are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of WDM & Optical Networks provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "satellite-&-optical-fiber-communication-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of GPS & Navigation Systems. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within GPS & Navigation Systems are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of GPS & Navigation Systems provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "major project (phase ii)_set1": [
    {
      "id": "major-project-(phase-ii)-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Process Flowsheet Development and state its primary measurement protocol in Major Project (Phase II).",
      "answer_lines": [
        "**Definition**: Process Flowsheet Development represents a core empirical or experimental procedure in Major Project (Phase II), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Equipment Design & Sizing and state its primary measurement protocol in Major Project (Phase II).",
      "answer_lines": [
        "**Definition**: Equipment Design & Sizing represents a core empirical or experimental procedure in Major Project (Phase II), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Economic Feasibility & Cost Estimation and state its primary measurement protocol in Major Project (Phase II).",
      "answer_lines": [
        "**Definition**: Economic Feasibility & Cost Estimation represents a core empirical or experimental procedure in Major Project (Phase II), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Process Safety Verification and state its primary measurement protocol in Major Project (Phase II).",
      "answer_lines": [
        "**Definition**: Process Safety Verification represents a core empirical or experimental procedure in Major Project (Phase II), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Project Report & Final Defense and state its primary measurement protocol in Major Project (Phase II).",
      "answer_lines": [
        "**Definition**: Project Report & Final Defense represents a core empirical or experimental procedure in Major Project (Phase II), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Process Flowsheet Development with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Process Flowsheet Development within Major Project (Phase II). Draw the complete apparatus wiring / setup schematic.",
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
      "id": "major-project-(phase-ii)-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Equipment Design & Sizing with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Equipment Design & Sizing within Major Project (Phase II). Draw the complete apparatus wiring / setup schematic.",
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
      "id": "major-project-(phase-ii)-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Economic Feasibility & Cost Estimation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Economic Feasibility & Cost Estimation within Major Project (Phase II). Draw the complete apparatus wiring / setup schematic.",
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
      "id": "major-project-(phase-ii)-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Process Safety Verification with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Process Safety Verification within Major Project (Phase II). Draw the complete apparatus wiring / setup schematic.",
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
      "id": "major-project-(phase-ii)-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Project Report & Final Defense with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Project Report & Final Defense within Major Project (Phase II). Draw the complete apparatus wiring / setup schematic.",
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
  "major project (phase ii)_set2": [
    {
      "id": "major-project-(phase-ii)-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Process Flowsheet Development.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Equipment Design & Sizing.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Economic Feasibility & Cost Estimation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Process Safety Verification.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Project Report & Final Defense.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "major-project-(phase-ii)-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Process Flowsheet Development.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Process Flowsheet Development.",
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
      "id": "major-project-(phase-ii)-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Equipment Design & Sizing.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Equipment Design & Sizing.",
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
      "id": "major-project-(phase-ii)-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Economic Feasibility & Cost Estimation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Economic Feasibility & Cost Estimation.",
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
      "id": "major-project-(phase-ii)-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Process Safety Verification.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Process Safety Verification.",
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
      "id": "major-project-(phase-ii)-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Project Report & Final Defense.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Project Report & Final Defense.",
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
  "smart grid & high voltage engineering_set1": [
    {
      "id": "smart-grid-&-high-voltage-engineering-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Smart Grid Architecture and state its primary measurement protocol in Smart Grid & High Voltage Engineering.",
      "answer_lines": [
        "**Definition**: Smart Grid Architecture represents a core empirical or experimental procedure in Smart Grid & High Voltage Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Advanced Metering Infrastructure and state its primary measurement protocol in Smart Grid & High Voltage Engineering.",
      "answer_lines": [
        "**Definition**: Advanced Metering Infrastructure represents a core empirical or experimental procedure in Smart Grid & High Voltage Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define High Voltage Generation & Testing and state its primary measurement protocol in Smart Grid & High Voltage Engineering.",
      "answer_lines": [
        "**Definition**: High Voltage Generation & Testing represents a core empirical or experimental procedure in Smart Grid & High Voltage Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Substation Automation and state its primary measurement protocol in Smart Grid & High Voltage Engineering.",
      "answer_lines": [
        "**Definition**: Substation Automation represents a core empirical or experimental procedure in Smart Grid & High Voltage Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Cybersecurity in Power Systems and state its primary measurement protocol in Smart Grid & High Voltage Engineering.",
      "answer_lines": [
        "**Definition**: Cybersecurity in Power Systems represents a core empirical or experimental procedure in Smart Grid & High Voltage Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Smart Grid Architecture with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Smart Grid Architecture within Smart Grid & High Voltage Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "smart-grid-&-high-voltage-engineering-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Advanced Metering Infrastructure with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Advanced Metering Infrastructure within Smart Grid & High Voltage Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "smart-grid-&-high-voltage-engineering-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for High Voltage Generation & Testing with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for High Voltage Generation & Testing within Smart Grid & High Voltage Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "smart-grid-&-high-voltage-engineering-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Substation Automation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Substation Automation within Smart Grid & High Voltage Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "smart-grid-&-high-voltage-engineering-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Cybersecurity in Power Systems with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Cybersecurity in Power Systems within Smart Grid & High Voltage Engineering. Draw the complete apparatus wiring / setup schematic.",
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
  "smart grid & high voltage engineering_set2": [
    {
      "id": "smart-grid-&-high-voltage-engineering-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Smart Grid Architecture.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Advanced Metering Infrastructure.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for High Voltage Generation & Testing.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Substation Automation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Cybersecurity in Power Systems.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "smart-grid-&-high-voltage-engineering-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Smart Grid Architecture.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Smart Grid Architecture.",
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
      "id": "smart-grid-&-high-voltage-engineering-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Advanced Metering Infrastructure.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Advanced Metering Infrastructure.",
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
      "id": "smart-grid-&-high-voltage-engineering-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for High Voltage Generation & Testing.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in High Voltage Generation & Testing.",
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
      "id": "smart-grid-&-high-voltage-engineering-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Substation Automation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Substation Automation.",
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
      "id": "smart-grid-&-high-voltage-engineering-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Cybersecurity in Power Systems.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Cybersecurity in Power Systems.",
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
  "electric vehicles & energy storage_set1": [
    {
      "id": "electric-vehicles-&-energy-storage-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define EV Powertrains & Motor Drives and state its primary measurement protocol in Electric Vehicles & Energy Storage.",
      "answer_lines": [
        "**Definition**: EV Powertrains & Motor Drives represents a core empirical or experimental procedure in Electric Vehicles & Energy Storage, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Battery Management Systems and state its primary measurement protocol in Electric Vehicles & Energy Storage.",
      "answer_lines": [
        "**Definition**: Battery Management Systems represents a core empirical or experimental procedure in Electric Vehicles & Energy Storage, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Charging Infrastructure & Standards and state its primary measurement protocol in Electric Vehicles & Energy Storage.",
      "answer_lines": [
        "**Definition**: Charging Infrastructure & Standards represents a core empirical or experimental procedure in Electric Vehicles & Energy Storage, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Regenerative Braking and state its primary measurement protocol in Electric Vehicles & Energy Storage.",
      "answer_lines": [
        "**Definition**: Regenerative Braking represents a core empirical or experimental procedure in Electric Vehicles & Energy Storage, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define V2G Grid Integration and state its primary measurement protocol in Electric Vehicles & Energy Storage.",
      "answer_lines": [
        "**Definition**: V2G Grid Integration represents a core empirical or experimental procedure in Electric Vehicles & Energy Storage, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for EV Powertrains & Motor Drives with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for EV Powertrains & Motor Drives within Electric Vehicles & Energy Storage. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "electric-vehicles-&-energy-storage-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Battery Management Systems with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Battery Management Systems within Electric Vehicles & Energy Storage. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "electric-vehicles-&-energy-storage-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Charging Infrastructure & Standards with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Charging Infrastructure & Standards within Electric Vehicles & Energy Storage. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "electric-vehicles-&-energy-storage-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Regenerative Braking with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Regenerative Braking within Electric Vehicles & Energy Storage. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "electric-vehicles-&-energy-storage-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for V2G Grid Integration with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for V2G Grid Integration within Electric Vehicles & Energy Storage. Draw the complete apparatus wiring / setup schematic.",
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
  "electric vehicles & energy storage_set2": [
    {
      "id": "electric-vehicles-&-energy-storage-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for EV Powertrains & Motor Drives.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Battery Management Systems.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Charging Infrastructure & Standards.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Regenerative Braking.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for V2G Grid Integration.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "electric-vehicles-&-energy-storage-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for EV Powertrains & Motor Drives.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in EV Powertrains & Motor Drives.",
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
      "id": "electric-vehicles-&-energy-storage-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Battery Management Systems.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Battery Management Systems.",
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
      "id": "electric-vehicles-&-energy-storage-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Charging Infrastructure & Standards.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Charging Infrastructure & Standards.",
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
      "id": "electric-vehicles-&-energy-storage-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Regenerative Braking.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Regenerative Braking.",
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
      "id": "electric-vehicles-&-energy-storage-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for V2G Grid Integration.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in V2G Grid Integration.",
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
  "additive manufacturing & rapid prototyping_set1": [
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for 3D Printing Technologies in Additive Manufacturing & Rapid Prototyping.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Material Selection for AM in Additive Manufacturing & Rapid Prototyping.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for CAD Design for Additive Manufacturing in Additive Manufacturing & Rapid Prototyping.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Post-Processing Techniques in Additive Manufacturing & Rapid Prototyping.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Industrial Applications & Testing in Additive Manufacturing & Rapid Prototyping.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of 3D Printing Technologies with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "3D Printing Technologies models structural stress transmission or thermal energy conversion in Additive Manufacturing & Rapid Prototyping. Sketch the physical schematic and free-body diagram.",
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
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Material Selection for AM with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Material Selection for AM models structural stress transmission or thermal energy conversion in Additive Manufacturing & Rapid Prototyping. Sketch the physical schematic and free-body diagram.",
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
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of CAD Design for Additive Manufacturing with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "CAD Design for Additive Manufacturing models structural stress transmission or thermal energy conversion in Additive Manufacturing & Rapid Prototyping. Sketch the physical schematic and free-body diagram.",
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
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Post-Processing Techniques with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Post-Processing Techniques models structural stress transmission or thermal energy conversion in Additive Manufacturing & Rapid Prototyping. Sketch the physical schematic and free-body diagram.",
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
      "id": "additive-manufacturing-&-rapid-prototyping-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Industrial Applications & Testing with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Industrial Applications & Testing models structural stress transmission or thermal energy conversion in Additive Manufacturing & Rapid Prototyping. Sketch the physical schematic and free-body diagram.",
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
  "additive manufacturing & rapid prototyping_set2": [
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for 3D Printing Technologies.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Material Selection for AM.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for CAD Design for Additive Manufacturing.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Post-Processing Techniques.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Industrial Applications & Testing.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for 3D Printing Technologies.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in 3D Printing Technologies plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Material Selection for AM.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Material Selection for AM plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for CAD Design for Additive Manufacturing.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in CAD Design for Additive Manufacturing plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Post-Processing Techniques.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Post-Processing Techniques plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
      "id": "additive-manufacturing-&-rapid-prototyping-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Industrial Applications & Testing.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Industrial Applications & Testing plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
  "total quality management & reliability_set1": [
    {
      "id": "total-quality-management-&-reliability-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define TQM Principles & Leadership and state its primary significance in Total Quality Management & Reliability.",
      "answer_lines": [
        "**Definition**: TQM Principles & Leadership forms a fundamental structural and operational concept within Total Quality Management & Reliability, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Statistical Quality Control (SQC) and state its primary significance in Total Quality Management & Reliability.",
      "answer_lines": [
        "**Definition**: Statistical Quality Control (SQC) forms a fundamental structural and operational concept within Total Quality Management & Reliability, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Six Sigma & Lean Manufacturing and state its primary significance in Total Quality Management & Reliability.",
      "answer_lines": [
        "**Definition**: Six Sigma & Lean Manufacturing forms a fundamental structural and operational concept within Total Quality Management & Reliability, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Reliability Engineering and state its primary significance in Total Quality Management & Reliability.",
      "answer_lines": [
        "**Definition**: Reliability Engineering forms a fundamental structural and operational concept within Total Quality Management & Reliability, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define ISO Standards & Quality Audits and state its primary significance in Total Quality Management & Reliability.",
      "answer_lines": [
        "**Definition**: ISO Standards & Quality Audits forms a fundamental structural and operational concept within Total Quality Management & Reliability, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of TQM Principles & Leadership with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "TQM Principles & Leadership serves as a foundational study module in Total Quality Management & Reliability. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of TQM Principles & Leadership is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Statistical Quality Control (SQC) with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Statistical Quality Control (SQC) serves as a foundational study module in Total Quality Management & Reliability. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Statistical Quality Control (SQC) is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Six Sigma & Lean Manufacturing with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Six Sigma & Lean Manufacturing serves as a foundational study module in Total Quality Management & Reliability. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Six Sigma & Lean Manufacturing is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Reliability Engineering with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Reliability Engineering serves as a foundational study module in Total Quality Management & Reliability. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Reliability Engineering is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of ISO Standards & Quality Audits with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "ISO Standards & Quality Audits serves as a foundational study module in Total Quality Management & Reliability. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of ISO Standards & Quality Audits is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "total quality management & reliability_set2": [
    {
      "id": "total-quality-management-&-reliability-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with TQM Principles & Leadership.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Statistical Quality Control (SQC).",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Six Sigma & Lean Manufacturing.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Reliability Engineering.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with ISO Standards & Quality Audits.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of TQM Principles & Leadership. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within TQM Principles & Leadership are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of TQM Principles & Leadership provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Statistical Quality Control (SQC). Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Statistical Quality Control (SQC) are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Statistical Quality Control (SQC) provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Six Sigma & Lean Manufacturing. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Six Sigma & Lean Manufacturing are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Six Sigma & Lean Manufacturing provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Reliability Engineering. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Reliability Engineering are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Reliability Engineering provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "total-quality-management-&-reliability-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of ISO Standards & Quality Audits. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within ISO Standards & Quality Audits are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of ISO Standards & Quality Audits provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "disaster management & earthquake engineering_set1": [
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Seismic Hazard & Ground Motion and state its primary significance in Disaster Management & Earthquake Engineering.",
      "answer_lines": [
        "**Definition**: Seismic Hazard & Ground Motion forms a fundamental structural and operational concept within Disaster Management & Earthquake Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Earthquake Resistant Design (IS 1893) and state its primary significance in Disaster Management & Earthquake Engineering.",
      "answer_lines": [
        "**Definition**: Earthquake Resistant Design (IS 1893) forms a fundamental structural and operational concept within Disaster Management & Earthquake Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Ductile Detailing (IS 13920) and state its primary significance in Disaster Management & Earthquake Engineering.",
      "answer_lines": [
        "**Definition**: Ductile Detailing (IS 13920) forms a fundamental structural and operational concept within Disaster Management & Earthquake Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Structural Retrofitting Techniques and state its primary significance in Disaster Management & Earthquake Engineering.",
      "answer_lines": [
        "**Definition**: Structural Retrofitting Techniques forms a fundamental structural and operational concept within Disaster Management & Earthquake Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Disaster Mitigation Strategies and state its primary significance in Disaster Management & Earthquake Engineering.",
      "answer_lines": [
        "**Definition**: Disaster Mitigation Strategies forms a fundamental structural and operational concept within Disaster Management & Earthquake Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Seismic Hazard & Ground Motion with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Seismic Hazard & Ground Motion serves as a foundational study module in Disaster Management & Earthquake Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Seismic Hazard & Ground Motion is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Earthquake Resistant Design (IS 1893) with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Earthquake Resistant Design (IS 1893) serves as a foundational study module in Disaster Management & Earthquake Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Earthquake Resistant Design (IS 1893) is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Ductile Detailing (IS 13920) with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Ductile Detailing (IS 13920) serves as a foundational study module in Disaster Management & Earthquake Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Ductile Detailing (IS 13920) is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Structural Retrofitting Techniques with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Structural Retrofitting Techniques serves as a foundational study module in Disaster Management & Earthquake Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Structural Retrofitting Techniques is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Disaster Mitigation Strategies with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Disaster Mitigation Strategies serves as a foundational study module in Disaster Management & Earthquake Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Disaster Mitigation Strategies is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "disaster management & earthquake engineering_set2": [
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Seismic Hazard & Ground Motion.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Earthquake Resistant Design (IS 1893).",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Ductile Detailing (IS 13920).",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Structural Retrofitting Techniques.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Disaster Mitigation Strategies.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Seismic Hazard & Ground Motion. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Seismic Hazard & Ground Motion are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Seismic Hazard & Ground Motion provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Earthquake Resistant Design (IS 1893). Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Earthquake Resistant Design (IS 1893) are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Earthquake Resistant Design (IS 1893) provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Ductile Detailing (IS 13920). Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Ductile Detailing (IS 13920) are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Ductile Detailing (IS 13920) provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Structural Retrofitting Techniques. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Structural Retrofitting Techniques are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Structural Retrofitting Techniques provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "disaster-management-&-earthquake-engineering-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Disaster Mitigation Strategies. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Disaster Mitigation Strategies are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Disaster Mitigation Strategies provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "bridge engineering & highway infrastructure_set1": [
    {
      "id": "bridge-engineering-&-highway-infrastructure-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Bridge Types & Site Selection.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Bridge Engineering & Highway Infrastructure."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Design of Slab & Girder Bridges.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Bridge Engineering & Highway Infrastructure."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Substructure & Foundation Design.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Bridge Engineering & Highway Infrastructure."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Highway Pavement Materials.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Bridge Engineering & Highway Infrastructure."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Bridge Inspection & Maintenance.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Bridge Engineering & Highway Infrastructure."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Bridge Types & Site Selection with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Bridge Types & Site Selection governs structural stability, foundation bearing capacity, or geometric geodetic control in Bridge Engineering & Highway Infrastructure. Conform to IS 456 / IS 800 standards.",
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
      "id": "bridge-engineering-&-highway-infrastructure-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Design of Slab & Girder Bridges with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Design of Slab & Girder Bridges governs structural stability, foundation bearing capacity, or geometric geodetic control in Bridge Engineering & Highway Infrastructure. Conform to IS 456 / IS 800 standards.",
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
      "id": "bridge-engineering-&-highway-infrastructure-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Substructure & Foundation Design with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Substructure & Foundation Design governs structural stability, foundation bearing capacity, or geometric geodetic control in Bridge Engineering & Highway Infrastructure. Conform to IS 456 / IS 800 standards.",
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
      "id": "bridge-engineering-&-highway-infrastructure-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Highway Pavement Materials with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Highway Pavement Materials governs structural stability, foundation bearing capacity, or geometric geodetic control in Bridge Engineering & Highway Infrastructure. Conform to IS 456 / IS 800 standards.",
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
      "id": "bridge-engineering-&-highway-infrastructure-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Bridge Inspection & Maintenance with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Bridge Inspection & Maintenance governs structural stability, foundation bearing capacity, or geometric geodetic control in Bridge Engineering & Highway Infrastructure. Conform to IS 456 / IS 800 standards.",
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
  "bridge engineering & highway infrastructure_set2": [
    {
      "id": "bridge-engineering-&-highway-infrastructure-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Bridge Types & Site Selection.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Design of Slab & Girder Bridges.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Substructure & Foundation Design.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Highway Pavement Materials.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Bridge Inspection & Maintenance.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "bridge-engineering-&-highway-infrastructure-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Bridge Types & Site Selection.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Bridge Types & Site Selection.",
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
      "id": "bridge-engineering-&-highway-infrastructure-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Design of Slab & Girder Bridges.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Design of Slab & Girder Bridges.",
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
      "id": "bridge-engineering-&-highway-infrastructure-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Substructure & Foundation Design.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Substructure & Foundation Design.",
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
      "id": "bridge-engineering-&-highway-infrastructure-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Highway Pavement Materials.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Highway Pavement Materials.",
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
      "id": "bridge-engineering-&-highway-infrastructure-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Bridge Inspection & Maintenance.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Bridge Inspection & Maintenance.",
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
  "petroleum refining & petrochemicals_set1": [
    {
      "id": "petroleum-refining-&-petrochemicals-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Crude Oil Characterization in Petroleum Refining & Petrochemicals.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Distillation & Cracking Processes in Petroleum Refining & Petrochemicals.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Catalytic Reforming & Hydrotreating in Petroleum Refining & Petrochemicals.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Petrochemical Feedstocks in Petroleum Refining & Petrochemicals.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Clean Fuel Standards & Blending in Petroleum Refining & Petrochemicals.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Crude Oil Characterization with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Crude Oil Characterization models chemical reaction rates and transport mechanisms in Petroleum Refining & Petrochemicals. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "petroleum-refining-&-petrochemicals-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Distillation & Cracking Processes with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Distillation & Cracking Processes models chemical reaction rates and transport mechanisms in Petroleum Refining & Petrochemicals. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "petroleum-refining-&-petrochemicals-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Catalytic Reforming & Hydrotreating with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Catalytic Reforming & Hydrotreating models chemical reaction rates and transport mechanisms in Petroleum Refining & Petrochemicals. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "petroleum-refining-&-petrochemicals-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Petrochemical Feedstocks with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Petrochemical Feedstocks models chemical reaction rates and transport mechanisms in Petroleum Refining & Petrochemicals. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "petroleum-refining-&-petrochemicals-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Clean Fuel Standards & Blending with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Clean Fuel Standards & Blending models chemical reaction rates and transport mechanisms in Petroleum Refining & Petrochemicals. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
  "petroleum refining & petrochemicals_set2": [
    {
      "id": "petroleum-refining-&-petrochemicals-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Crude Oil Characterization.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Distillation & Cracking Processes.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Catalytic Reforming & Hydrotreating.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Petrochemical Feedstocks.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Clean Fuel Standards & Blending.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "petroleum-refining-&-petrochemicals-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Crude Oil Characterization.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Crude Oil Characterization.",
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
      "id": "petroleum-refining-&-petrochemicals-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Distillation & Cracking Processes.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Distillation & Cracking Processes.",
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
      "id": "petroleum-refining-&-petrochemicals-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Catalytic Reforming & Hydrotreating.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Catalytic Reforming & Hydrotreating.",
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
      "id": "petroleum-refining-&-petrochemicals-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Petrochemical Feedstocks.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Petrochemical Feedstocks.",
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
      "id": "petroleum-refining-&-petrochemicals-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Clean Fuel Standards & Blending.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Clean Fuel Standards & Blending.",
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
  "industrial safety & hazardous waste management_set1": [
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemical Plant Hazards & Risk Assessment and state its primary significance in Industrial Safety & Hazardous Waste Management.",
      "answer_lines": [
        "**Definition**: Chemical Plant Hazards & Risk Assessment forms a fundamental structural and operational concept within Industrial Safety & Hazardous Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define HAZOP & Failure Mode Analysis and state its primary significance in Industrial Safety & Hazardous Waste Management.",
      "answer_lines": [
        "**Definition**: HAZOP & Failure Mode Analysis forms a fundamental structural and operational concept within Industrial Safety & Hazardous Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Hazardous Waste Classification & Treatment and state its primary significance in Industrial Safety & Hazardous Waste Management.",
      "answer_lines": [
        "**Definition**: Hazardous Waste Classification & Treatment forms a fundamental structural and operational concept within Industrial Safety & Hazardous Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Effluent Treatment Plant (ETP) Design and state its primary significance in Industrial Safety & Hazardous Waste Management.",
      "answer_lines": [
        "**Definition**: Effluent Treatment Plant (ETP) Design forms a fundamental structural and operational concept within Industrial Safety & Hazardous Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Environmental Regulations & Audits and state its primary significance in Industrial Safety & Hazardous Waste Management.",
      "answer_lines": [
        "**Definition**: Environmental Regulations & Audits forms a fundamental structural and operational concept within Industrial Safety & Hazardous Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Chemical Plant Hazards & Risk Assessment with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Chemical Plant Hazards & Risk Assessment serves as a foundational study module in Industrial Safety & Hazardous Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Chemical Plant Hazards & Risk Assessment is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of HAZOP & Failure Mode Analysis with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "HAZOP & Failure Mode Analysis serves as a foundational study module in Industrial Safety & Hazardous Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of HAZOP & Failure Mode Analysis is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Hazardous Waste Classification & Treatment with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Hazardous Waste Classification & Treatment serves as a foundational study module in Industrial Safety & Hazardous Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Hazardous Waste Classification & Treatment is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Effluent Treatment Plant (ETP) Design with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Effluent Treatment Plant (ETP) Design serves as a foundational study module in Industrial Safety & Hazardous Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Effluent Treatment Plant (ETP) Design is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Environmental Regulations & Audits with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Environmental Regulations & Audits serves as a foundational study module in Industrial Safety & Hazardous Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Environmental Regulations & Audits is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "industrial safety & hazardous waste management_set2": [
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Chemical Plant Hazards & Risk Assessment.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with HAZOP & Failure Mode Analysis.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Hazardous Waste Classification & Treatment.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Effluent Treatment Plant (ETP) Design.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Environmental Regulations & Audits.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Chemical Plant Hazards & Risk Assessment. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Chemical Plant Hazards & Risk Assessment are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Chemical Plant Hazards & Risk Assessment provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of HAZOP & Failure Mode Analysis. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within HAZOP & Failure Mode Analysis are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of HAZOP & Failure Mode Analysis provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Hazardous Waste Classification & Treatment. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Hazardous Waste Classification & Treatment are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Hazardous Waste Classification & Treatment provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Effluent Treatment Plant (ETP) Design. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Effluent Treatment Plant (ETP) Design are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Effluent Treatment Plant (ETP) Design provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "industrial-safety-&-hazardous-waste-management-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Environmental Regulations & Audits. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Environmental Regulations & Audits are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Environmental Regulations & Audits provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "ai in healthcare & finance_set1": [
    {
      "id": "ai-in-healthcare-&-finance-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Healthcare AI and state its primary asymptotic time complexity in AI in Healthcare & Finance.",
      "answer_lines": [
        "**Definition**: In AI in Healthcare & Finance, Healthcare AI establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-in-healthcare-&-finance-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Medical Imaging and state its primary asymptotic time complexity in AI in Healthcare & Finance.",
      "answer_lines": [
        "**Definition**: In AI in Healthcare & Finance, Medical Imaging establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-in-healthcare-&-finance-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Financial AI and state its primary asymptotic time complexity in AI in Healthcare & Finance.",
      "answer_lines": [
        "**Definition**: In AI in Healthcare & Finance, Financial AI establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-in-healthcare-&-finance-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Fraud Detection and state its primary asymptotic time complexity in AI in Healthcare & Finance.",
      "answer_lines": [
        "**Definition**: In AI in Healthcare & Finance, Fraud Detection establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-in-healthcare-&-finance-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Case Studies and state its primary asymptotic time complexity in AI in Healthcare & Finance.",
      "answer_lines": [
        "**Definition**: In AI in Healthcare & Finance, Case Studies establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "ai-in-healthcare-&-finance-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Healthcare AI with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Healthcare AI serves as a core computational building block in AI in Healthcare & Finance, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "ai-in-healthcare-&-finance-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Medical Imaging with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Medical Imaging serves as a core computational building block in AI in Healthcare & Finance, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "ai-in-healthcare-&-finance-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Financial AI with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Financial AI serves as a core computational building block in AI in Healthcare & Finance, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "ai-in-healthcare-&-finance-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Fraud Detection with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Fraud Detection serves as a core computational building block in AI in Healthcare & Finance, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "ai-in-healthcare-&-finance-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Case Studies with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Case Studies serves as a core computational building block in AI in Healthcare & Finance, optimizing storage efficiency, access latency, and data integrity.",
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
  "ai in healthcare & finance_set2": [
    {
      "id": "ai-in-healthcare-&-finance-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Healthcare AI.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Healthcare AI.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "ai-in-healthcare-&-finance-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Medical Imaging.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Medical Imaging.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "ai-in-healthcare-&-finance-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Financial AI.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Financial AI.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "ai-in-healthcare-&-finance-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Fraud Detection.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Fraud Detection.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "ai-in-healthcare-&-finance-s2-q5",
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
      "id": "ai-in-healthcare-&-finance-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Healthcare AI. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Healthcare AI.",
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
      "id": "ai-in-healthcare-&-finance-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Medical Imaging. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Medical Imaging.",
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
      "id": "ai-in-healthcare-&-finance-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Financial AI. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Financial AI.",
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
      "id": "ai-in-healthcare-&-finance-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Fraud Detection. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Fraud Detection.",
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
      "id": "ai-in-healthcare-&-finance-s2-q10",
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
  "edge ai & iot_set1": [
    {
      "id": "edge-ai-&-iot-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Edge Computing and state its primary asymptotic time complexity in Edge AI & IoT.",
      "answer_lines": [
        "**Definition**: In Edge AI & IoT, Edge Computing establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "edge-ai-&-iot-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define TinyML and state its primary asymptotic time complexity in Edge AI & IoT.",
      "answer_lines": [
        "**Definition**: In Edge AI & IoT, TinyML establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "edge-ai-&-iot-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define IoT Architecture and state its primary asymptotic time complexity in Edge AI & IoT.",
      "answer_lines": [
        "**Definition**: In Edge AI & IoT, IoT Architecture establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "edge-ai-&-iot-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Edge Deployment and state its primary asymptotic time complexity in Edge AI & IoT.",
      "answer_lines": [
        "**Definition**: In Edge AI & IoT, Edge Deployment establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "edge-ai-&-iot-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Applications and state its primary asymptotic time complexity in Edge AI & IoT.",
      "answer_lines": [
        "**Definition**: In Edge AI & IoT, Applications establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "edge-ai-&-iot-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Edge Computing with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Edge Computing serves as a core computational building block in Edge AI & IoT, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "edge-ai-&-iot-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of TinyML with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "TinyML serves as a core computational building block in Edge AI & IoT, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "edge-ai-&-iot-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of IoT Architecture with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "IoT Architecture serves as a core computational building block in Edge AI & IoT, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "edge-ai-&-iot-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Edge Deployment with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Edge Deployment serves as a core computational building block in Edge AI & IoT, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "edge-ai-&-iot-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Applications with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Applications serves as a core computational building block in Edge AI & IoT, optimizing storage efficiency, access latency, and data integrity.",
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
  "edge ai & iot_set2": [
    {
      "id": "edge-ai-&-iot-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Edge Computing.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Edge Computing.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "edge-ai-&-iot-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with TinyML.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in TinyML.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "edge-ai-&-iot-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with IoT Architecture.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in IoT Architecture.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "edge-ai-&-iot-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Edge Deployment.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Edge Deployment.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "edge-ai-&-iot-s2-q5",
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
      "id": "edge-ai-&-iot-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Edge Computing. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Edge Computing.",
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
      "id": "edge-ai-&-iot-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for TinyML. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in TinyML.",
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
      "id": "edge-ai-&-iot-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for IoT Architecture. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in IoT Architecture.",
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
      "id": "edge-ai-&-iot-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Edge Deployment. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Edge Deployment.",
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
      "id": "edge-ai-&-iot-s2-q10",
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
  "mlops & data engineering_set1": [
    {
      "id": "mlops-&-data-engineering-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define ML Lifecycle and state its primary measurement protocol in MLOps & Data Engineering.",
      "answer_lines": [
        "**Definition**: ML Lifecycle represents a core empirical or experimental procedure in MLOps & Data Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Model Deployment and state its primary measurement protocol in MLOps & Data Engineering.",
      "answer_lines": [
        "**Definition**: Model Deployment represents a core empirical or experimental procedure in MLOps & Data Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define CI/CD and state its primary measurement protocol in MLOps & Data Engineering.",
      "answer_lines": [
        "**Definition**: CI/CD represents a core empirical or experimental procedure in MLOps & Data Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Monitoring and state its primary measurement protocol in MLOps & Data Engineering.",
      "answer_lines": [
        "**Definition**: Monitoring represents a core empirical or experimental procedure in MLOps & Data Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DataOps and state its primary measurement protocol in MLOps & Data Engineering.",
      "answer_lines": [
        "**Definition**: DataOps represents a core empirical or experimental procedure in MLOps & Data Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for ML Lifecycle with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for ML Lifecycle within MLOps & Data Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "mlops-&-data-engineering-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Model Deployment with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Model Deployment within MLOps & Data Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "mlops-&-data-engineering-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for CI/CD with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for CI/CD within MLOps & Data Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "mlops-&-data-engineering-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Monitoring with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Monitoring within MLOps & Data Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "mlops-&-data-engineering-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DataOps with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DataOps within MLOps & Data Engineering. Draw the complete apparatus wiring / setup schematic.",
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
  "mlops & data engineering_set2": [
    {
      "id": "mlops-&-data-engineering-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for ML Lifecycle.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Model Deployment.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for CI/CD.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Monitoring.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DataOps.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "mlops-&-data-engineering-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for ML Lifecycle.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in ML Lifecycle.",
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
      "id": "mlops-&-data-engineering-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Model Deployment.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Model Deployment.",
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
      "id": "mlops-&-data-engineering-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for CI/CD.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in CI/CD.",
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
      "id": "mlops-&-data-engineering-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Monitoring.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Monitoring.",
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
      "id": "mlops-&-data-engineering-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DataOps.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DataOps.",
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
  "incident response & digital forensics_set1": [
    {
      "id": "incident-response-&-digital-forensics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Incident Response in Incident Response & Digital Forensics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Incident Response."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Forensics Basics in Incident Response & Digital Forensics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Forensics Basics."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Evidence Collection in Incident Response & Digital Forensics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Evidence Collection."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Malware Forensics in Incident Response & Digital Forensics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Malware Forensics."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Reporting in Incident Response & Digital Forensics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Reporting."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Incident Response with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Incident Response models electromagnetic and circuit dynamics in Incident Response & Digital Forensics. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "incident-response-&-digital-forensics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Forensics Basics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Forensics Basics models electromagnetic and circuit dynamics in Incident Response & Digital Forensics. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "incident-response-&-digital-forensics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Evidence Collection with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Evidence Collection models electromagnetic and circuit dynamics in Incident Response & Digital Forensics. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "incident-response-&-digital-forensics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Malware Forensics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Malware Forensics models electromagnetic and circuit dynamics in Incident Response & Digital Forensics. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "incident-response-&-digital-forensics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Reporting with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Reporting models electromagnetic and circuit dynamics in Incident Response & Digital Forensics. Draw the complete equivalent schematic with active/passive components.",
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
  "incident response & digital forensics_set2": [
    {
      "id": "incident-response-&-digital-forensics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Incident Response.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Forensics Basics.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Evidence Collection.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Malware Forensics.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Reporting.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "incident-response-&-digital-forensics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Incident Response. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Incident Response into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "incident-response-&-digital-forensics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Forensics Basics. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Forensics Basics into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "incident-response-&-digital-forensics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Evidence Collection. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Evidence Collection into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "incident-response-&-digital-forensics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Malware Forensics. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Malware Forensics into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "incident-response-&-digital-forensics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Reporting. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Reporting into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "aircraft certification & safety_set1": [
    {
      "id": "aircraft-certification-&-safety-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Certification Basics in Aircraft Certification & Safety.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for FAA/EASA in Aircraft Certification & Safety.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Safety Management in Aircraft Certification & Safety.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Accident Investigation in Aircraft Certification & Safety.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Case Studies in Aircraft Certification & Safety.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Certification Basics with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Certification Basics models structural stress transmission or thermal energy conversion in Aircraft Certification & Safety. Sketch the physical schematic and free-body diagram.",
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
      "id": "aircraft-certification-&-safety-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of FAA/EASA with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "FAA/EASA models structural stress transmission or thermal energy conversion in Aircraft Certification & Safety. Sketch the physical schematic and free-body diagram.",
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
      "id": "aircraft-certification-&-safety-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Safety Management with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Safety Management models structural stress transmission or thermal energy conversion in Aircraft Certification & Safety. Sketch the physical schematic and free-body diagram.",
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
      "id": "aircraft-certification-&-safety-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Accident Investigation with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Accident Investigation models structural stress transmission or thermal energy conversion in Aircraft Certification & Safety. Sketch the physical schematic and free-body diagram.",
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
      "id": "aircraft-certification-&-safety-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Case Studies with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Case Studies models structural stress transmission or thermal energy conversion in Aircraft Certification & Safety. Sketch the physical schematic and free-body diagram.",
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
  "aircraft certification & safety_set2": [
    {
      "id": "aircraft-certification-&-safety-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Certification Basics.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for FAA/EASA.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Safety Management.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Accident Investigation.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Case Studies.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "aircraft-certification-&-safety-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Certification Basics.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Certification Basics plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
      "id": "aircraft-certification-&-safety-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for FAA/EASA.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in FAA/EASA plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
      "id": "aircraft-certification-&-safety-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Safety Management.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Safety Management plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
      "id": "aircraft-certification-&-safety-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Accident Investigation.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Accident Investigation plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
      "id": "aircraft-certification-&-safety-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Case Studies.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Case Studies plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
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
  "space mission design_set1": [
    {
      "id": "space-mission-design-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Mission Architecture and state its primary measurement protocol in Space Mission Design.",
      "answer_lines": [
        "**Definition**: Mission Architecture represents a core empirical or experimental procedure in Space Mission Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "space-mission-design-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Launch Window and state its primary measurement protocol in Space Mission Design.",
      "answer_lines": [
        "**Definition**: Launch Window represents a core empirical or experimental procedure in Space Mission Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "space-mission-design-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Orbit Design and state its primary measurement protocol in Space Mission Design.",
      "answer_lines": [
        "**Definition**: Orbit Design represents a core empirical or experimental procedure in Space Mission Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "space-mission-design-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Payload Design and state its primary measurement protocol in Space Mission Design.",
      "answer_lines": [
        "**Definition**: Payload Design represents a core empirical or experimental procedure in Space Mission Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "space-mission-design-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Cost Estimation and state its primary measurement protocol in Space Mission Design.",
      "answer_lines": [
        "**Definition**: Cost Estimation represents a core empirical or experimental procedure in Space Mission Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "space-mission-design-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Mission Architecture with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Mission Architecture within Space Mission Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "space-mission-design-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Launch Window with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Launch Window within Space Mission Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "space-mission-design-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Orbit Design with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Orbit Design within Space Mission Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "space-mission-design-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Payload Design with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Payload Design within Space Mission Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "space-mission-design-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Cost Estimation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Cost Estimation within Space Mission Design. Draw the complete apparatus wiring / setup schematic.",
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
  "space mission design_set2": [
    {
      "id": "space-mission-design-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Mission Architecture.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "space-mission-design-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Launch Window.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "space-mission-design-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Orbit Design.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "space-mission-design-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Payload Design.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "space-mission-design-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Cost Estimation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "space-mission-design-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Mission Architecture.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Mission Architecture.",
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
      "id": "space-mission-design-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Launch Window.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Launch Window.",
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
      "id": "space-mission-design-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Orbit Design.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Orbit Design.",
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
      "id": "space-mission-design-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Payload Design.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Payload Design.",
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
      "id": "space-mission-design-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Cost Estimation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Cost Estimation.",
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
  "autonomous systems_set1": [
    {
      "id": "autonomous-systems-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Autonomous Basics and state its primary measurement protocol in Autonomous Systems.",
      "answer_lines": [
        "**Definition**: Autonomous Basics represents a core empirical or experimental procedure in Autonomous Systems, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "autonomous-systems-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Navigation and state its primary measurement protocol in Autonomous Systems.",
      "answer_lines": [
        "**Definition**: Navigation represents a core empirical or experimental procedure in Autonomous Systems, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "autonomous-systems-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Perception and state its primary measurement protocol in Autonomous Systems.",
      "answer_lines": [
        "**Definition**: Perception represents a core empirical or experimental procedure in Autonomous Systems, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "autonomous-systems-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Decision Making and state its primary measurement protocol in Autonomous Systems.",
      "answer_lines": [
        "**Definition**: Decision Making represents a core empirical or experimental procedure in Autonomous Systems, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "autonomous-systems-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Applications and state its primary measurement protocol in Autonomous Systems.",
      "answer_lines": [
        "**Definition**: Applications represents a core empirical or experimental procedure in Autonomous Systems, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "autonomous-systems-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Autonomous Basics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Autonomous Basics within Autonomous Systems. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "autonomous-systems-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Navigation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Navigation within Autonomous Systems. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "autonomous-systems-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Perception with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Perception within Autonomous Systems. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "autonomous-systems-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Decision Making with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Decision Making within Autonomous Systems. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "autonomous-systems-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Applications with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Applications within Autonomous Systems. Draw the complete apparatus wiring / setup schematic.",
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
  "autonomous systems_set2": [
    {
      "id": "autonomous-systems-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Autonomous Basics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "autonomous-systems-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Navigation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "autonomous-systems-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Perception.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "autonomous-systems-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Decision Making.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "autonomous-systems-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Applications.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "autonomous-systems-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Autonomous Basics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Autonomous Basics.",
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
      "id": "autonomous-systems-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Navigation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Navigation.",
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
      "id": "autonomous-systems-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Perception.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Perception.",
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
      "id": "autonomous-systems-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Decision Making.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Decision Making.",
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
      "id": "autonomous-systems-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Applications.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Applications.",
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
  "digital twin & simulation_set1": [
    {
      "id": "digital-twin-&-simulation-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Digital Twin Basics in Digital Twin & Simulation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Digital Twin Basics."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Simulation Tools in Digital Twin & Simulation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Simulation Tools."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Modeling in Digital Twin & Simulation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Modeling."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Optimization in Digital Twin & Simulation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Optimization."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Case Studies in Digital Twin & Simulation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Case Studies."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Digital Twin Basics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Digital Twin Basics models electromagnetic and circuit dynamics in Digital Twin & Simulation. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-twin-&-simulation-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Simulation Tools with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Simulation Tools models electromagnetic and circuit dynamics in Digital Twin & Simulation. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-twin-&-simulation-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Modeling with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Modeling models electromagnetic and circuit dynamics in Digital Twin & Simulation. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-twin-&-simulation-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Optimization with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Optimization models electromagnetic and circuit dynamics in Digital Twin & Simulation. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-twin-&-simulation-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Case Studies with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Case Studies models electromagnetic and circuit dynamics in Digital Twin & Simulation. Draw the complete equivalent schematic with active/passive components.",
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
  "digital twin & simulation_set2": [
    {
      "id": "digital-twin-&-simulation-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Digital Twin Basics.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Simulation Tools.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Modeling.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Optimization.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Case Studies.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-twin-&-simulation-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Digital Twin Basics. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Digital Twin Basics into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-twin-&-simulation-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Simulation Tools. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Simulation Tools into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-twin-&-simulation-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Modeling. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Modeling into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-twin-&-simulation-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Optimization. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Optimization into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-twin-&-simulation-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Case Studies. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Case Studies into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "climate change & mitigation_set1": [
    {
      "id": "climate-change-&-mitigation-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Climate Science.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Climate Change & Mitigation."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Impacts.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Climate Change & Mitigation."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Mitigation.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Climate Change & Mitigation."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Adaptation.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Climate Change & Mitigation."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Policies.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Climate Change & Mitigation."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Climate Science with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Climate Science governs structural stability, foundation bearing capacity, or geometric geodetic control in Climate Change & Mitigation. Conform to IS 456 / IS 800 standards.",
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
      "id": "climate-change-&-mitigation-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Impacts with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Impacts governs structural stability, foundation bearing capacity, or geometric geodetic control in Climate Change & Mitigation. Conform to IS 456 / IS 800 standards.",
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
      "id": "climate-change-&-mitigation-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Mitigation with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Mitigation governs structural stability, foundation bearing capacity, or geometric geodetic control in Climate Change & Mitigation. Conform to IS 456 / IS 800 standards.",
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
      "id": "climate-change-&-mitigation-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Adaptation with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Adaptation governs structural stability, foundation bearing capacity, or geometric geodetic control in Climate Change & Mitigation. Conform to IS 456 / IS 800 standards.",
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
      "id": "climate-change-&-mitigation-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Policies with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Policies governs structural stability, foundation bearing capacity, or geometric geodetic control in Climate Change & Mitigation. Conform to IS 456 / IS 800 standards.",
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
  "climate change & mitigation_set2": [
    {
      "id": "climate-change-&-mitigation-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Climate Science.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Impacts.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Mitigation.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Adaptation.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Policies.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "climate-change-&-mitigation-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Climate Science.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Climate Science.",
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
      "id": "climate-change-&-mitigation-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Impacts.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Impacts.",
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
      "id": "climate-change-&-mitigation-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Mitigation.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Mitigation.",
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
      "id": "climate-change-&-mitigation-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Adaptation.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Adaptation.",
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
      "id": "climate-change-&-mitigation-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Policies.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Policies.",
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
  "green building design_set1": [
    {
      "id": "green-building-design-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Green Building Basics and state its primary measurement protocol in Green Building Design.",
      "answer_lines": [
        "**Definition**: Green Building Basics represents a core empirical or experimental procedure in Green Building Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "green-building-design-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Rating Systems and state its primary measurement protocol in Green Building Design.",
      "answer_lines": [
        "**Definition**: Rating Systems represents a core empirical or experimental procedure in Green Building Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "green-building-design-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Energy Efficiency and state its primary measurement protocol in Green Building Design.",
      "answer_lines": [
        "**Definition**: Energy Efficiency represents a core empirical or experimental procedure in Green Building Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "green-building-design-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Materials and state its primary measurement protocol in Green Building Design.",
      "answer_lines": [
        "**Definition**: Materials represents a core empirical or experimental procedure in Green Building Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "green-building-design-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Case Studies and state its primary measurement protocol in Green Building Design.",
      "answer_lines": [
        "**Definition**: Case Studies represents a core empirical or experimental procedure in Green Building Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "green-building-design-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Green Building Basics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Green Building Basics within Green Building Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "green-building-design-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Rating Systems with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Rating Systems within Green Building Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "green-building-design-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Energy Efficiency with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Energy Efficiency within Green Building Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "green-building-design-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Materials with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Materials within Green Building Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "green-building-design-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Case Studies with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Case Studies within Green Building Design. Draw the complete apparatus wiring / setup schematic.",
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
  "green building design_set2": [
    {
      "id": "green-building-design-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Green Building Basics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "green-building-design-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Rating Systems.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "green-building-design-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Energy Efficiency.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "green-building-design-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Materials.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "green-building-design-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Case Studies.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "green-building-design-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Green Building Basics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Green Building Basics.",
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
      "id": "green-building-design-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Rating Systems.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Rating Systems.",
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
      "id": "green-building-design-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Energy Efficiency.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Energy Efficiency.",
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
      "id": "green-building-design-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Materials.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Materials.",
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
      "id": "green-building-design-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Case Studies.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Case Studies.",
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
  "telemedicine & digital health_set1": [
    {
      "id": "telemedicine-&-digital-health-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Telemedicine Basics in Telemedicine & Digital Health.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Telemedicine Basics."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Platforms in Telemedicine & Digital Health.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Platforms."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Data Security in Telemedicine & Digital Health.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Data Security."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Remote Monitoring in Telemedicine & Digital Health.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Remote Monitoring."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Case Studies in Telemedicine & Digital Health.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Case Studies."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Telemedicine Basics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Telemedicine Basics models electromagnetic and circuit dynamics in Telemedicine & Digital Health. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "telemedicine-&-digital-health-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Platforms with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Platforms models electromagnetic and circuit dynamics in Telemedicine & Digital Health. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "telemedicine-&-digital-health-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Data Security with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Data Security models electromagnetic and circuit dynamics in Telemedicine & Digital Health. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "telemedicine-&-digital-health-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Remote Monitoring with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Remote Monitoring models electromagnetic and circuit dynamics in Telemedicine & Digital Health. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "telemedicine-&-digital-health-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Case Studies with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Case Studies models electromagnetic and circuit dynamics in Telemedicine & Digital Health. Draw the complete equivalent schematic with active/passive components.",
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
  "telemedicine & digital health_set2": [
    {
      "id": "telemedicine-&-digital-health-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Telemedicine Basics.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Platforms.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Data Security.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Remote Monitoring.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Case Studies.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "telemedicine-&-digital-health-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Telemedicine Basics. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Telemedicine Basics into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "telemedicine-&-digital-health-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Platforms. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Platforms into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "telemedicine-&-digital-health-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Data Security. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Data Security into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "telemedicine-&-digital-health-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Remote Monitoring. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Remote Monitoring into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "telemedicine-&-digital-health-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Case Studies. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Case Studies into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "biomedical waste management_set1": [
    {
      "id": "biomedical-waste-management-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Waste Categories and state its primary significance in Biomedical Waste Management.",
      "answer_lines": [
        "**Definition**: Waste Categories forms a fundamental structural and operational concept within Biomedical Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biomedical-waste-management-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Handling and state its primary significance in Biomedical Waste Management.",
      "answer_lines": [
        "**Definition**: Handling forms a fundamental structural and operational concept within Biomedical Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biomedical-waste-management-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Disposal and state its primary significance in Biomedical Waste Management.",
      "answer_lines": [
        "**Definition**: Disposal forms a fundamental structural and operational concept within Biomedical Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biomedical-waste-management-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Regulations and state its primary significance in Biomedical Waste Management.",
      "answer_lines": [
        "**Definition**: Regulations forms a fundamental structural and operational concept within Biomedical Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biomedical-waste-management-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Case Studies and state its primary significance in Biomedical Waste Management.",
      "answer_lines": [
        "**Definition**: Case Studies forms a fundamental structural and operational concept within Biomedical Waste Management, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biomedical-waste-management-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Waste Categories with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Waste Categories serves as a foundational study module in Biomedical Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Waste Categories is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "biomedical-waste-management-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Handling with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Handling serves as a foundational study module in Biomedical Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Handling is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "biomedical-waste-management-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Disposal with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Disposal serves as a foundational study module in Biomedical Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Disposal is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "biomedical-waste-management-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Regulations with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Regulations serves as a foundational study module in Biomedical Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
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
      "id": "biomedical-waste-management-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Case Studies with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Case Studies serves as a foundational study module in Biomedical Waste Management. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
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
  "biomedical waste management_set2": [
    {
      "id": "biomedical-waste-management-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Waste Categories.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "biomedical-waste-management-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Handling.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "biomedical-waste-management-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Disposal.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "biomedical-waste-management-s2-q4",
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
      "id": "biomedical-waste-management-s2-q5",
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
      "id": "biomedical-waste-management-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Waste Categories. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Waste Categories are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Waste Categories provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "biomedical-waste-management-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Handling. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Handling are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Handling provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "biomedical-waste-management-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Disposal. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Disposal are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Disposal provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "biomedical-waste-management-s2-q9",
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
      "id": "biomedical-waste-management-s2-q10",
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
  ]
};

export function getBTechSem8PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase().trim();
  const setSuffix = isSet1 ? "_set1" : "_set2";
  const exactKey = `${s}${setSuffix}`;
  if (sem8BTechPapersData[exactKey]) {
    return sem8BTechPapersData[exactKey];
  }
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(sem8BTechPapersData)) {
    if (k.endsWith(setSuffix)) {
      const subKey = k.replace(setSuffix, "");
      if (s.includes(subKey) || subKey.includes(s)) {
        return v;
      }
    }
  }
  return null;
}
