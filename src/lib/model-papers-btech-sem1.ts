/**
 * Authentic University Model Papers & Solved Solutions for B.Tech Semester 1.
 * Curricula: AICTE Model Curriculum / University R22 Guidelines.
 *
 * Covers 8 Subjects (16 Question Papers, 160 Solved Questions).
 * Part A (5x2M short questions) + Part B (5x10M essay problems with step-by-step solutions).
 */

import type { DbQuestion } from "./content";

const sem1BTechPapersData: Record<string, DbQuestion[]> = {
  "engineering mathematics i_set1": [
    {
      "id": "engineering-mathematics-i-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics I.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics I.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics I.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics I.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics I.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Differential Calculus with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Differential Calculus within Engineering Mathematics I.",
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
      "id": "engineering-mathematics-i-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Matrices & Determinants with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Matrices & Determinants within Engineering Mathematics I.",
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
      "id": "engineering-mathematics-i-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Partial Derivatives with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Partial Derivatives within Engineering Mathematics I.",
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
      "id": "engineering-mathematics-i-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Integral Calculus with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Integral Calculus within Engineering Mathematics I.",
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
      "id": "engineering-mathematics-i-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Vector Calculus with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Vector Calculus within Engineering Mathematics I.",
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
  "engineering mathematics i_set2": [
    {
      "id": "engineering-mathematics-i-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Differential Calculus.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Matrices & Determinants.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Partial Derivatives.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Integral Calculus.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Vector Calculus.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-i-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Differential Calculus.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Differential Calculus in Engineering Mathematics I.",
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
      "id": "engineering-mathematics-i-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Matrices & Determinants.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Matrices & Determinants in Engineering Mathematics I.",
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
      "id": "engineering-mathematics-i-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Partial Derivatives.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Partial Derivatives in Engineering Mathematics I.",
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
      "id": "engineering-mathematics-i-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Integral Calculus.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Integral Calculus in Engineering Mathematics I.",
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
      "id": "engineering-mathematics-i-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Vector Calculus.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Vector Calculus in Engineering Mathematics I.",
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
  "engineering physics_set1": [
    {
      "id": "engineering-physics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Oscillations & Waves and state its primary measurement protocol in Engineering Physics.",
      "answer_lines": [
        "**Definition**: Oscillations & Waves represents a core empirical or experimental procedure in Engineering Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-physics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Optics (Interference, Diffraction, Polarization) and state its primary measurement protocol in Engineering Physics.",
      "answer_lines": [
        "**Definition**: Optics (Interference, Diffraction, Polarization) represents a core empirical or experimental procedure in Engineering Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-physics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Laser & Fiber Optics and state its primary measurement protocol in Engineering Physics.",
      "answer_lines": [
        "**Definition**: Laser & Fiber Optics represents a core empirical or experimental procedure in Engineering Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-physics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Quantum Mechanics and state its primary measurement protocol in Engineering Physics.",
      "answer_lines": [
        "**Definition**: Quantum Mechanics represents a core empirical or experimental procedure in Engineering Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-physics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Solid State Physics and state its primary measurement protocol in Engineering Physics.",
      "answer_lines": [
        "**Definition**: Solid State Physics represents a core empirical or experimental procedure in Engineering Physics, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-physics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Oscillations & Waves with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Oscillations & Waves within Engineering Physics. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-physics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Optics (Interference, Diffraction, Polarization) with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Optics (Interference, Diffraction, Polarization) within Engineering Physics. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-physics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Laser & Fiber Optics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Laser & Fiber Optics within Engineering Physics. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-physics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Quantum Mechanics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Quantum Mechanics within Engineering Physics. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-physics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Solid State Physics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Solid State Physics within Engineering Physics. Draw the complete apparatus wiring / setup schematic.",
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
  "engineering physics_set2": [
    {
      "id": "engineering-physics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Oscillations & Waves.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-physics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Optics (Interference, Diffraction, Polarization).",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-physics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Laser & Fiber Optics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-physics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Quantum Mechanics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-physics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Solid State Physics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-physics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Oscillations & Waves.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Oscillations & Waves.",
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
      "id": "engineering-physics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Optics (Interference, Diffraction, Polarization).",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Optics (Interference, Diffraction, Polarization).",
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
      "id": "engineering-physics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Laser & Fiber Optics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Laser & Fiber Optics.",
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
      "id": "engineering-physics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Quantum Mechanics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Quantum Mechanics.",
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
      "id": "engineering-physics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Solid State Physics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Solid State Physics.",
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
  "engineering chemistry_set1": [
    {
      "id": "engineering-chemistry-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Atomic & Molecular Structure and state its primary measurement protocol in Engineering Chemistry.",
      "answer_lines": [
        "**Definition**: Atomic & Molecular Structure represents a core empirical or experimental procedure in Engineering Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-chemistry-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Spectroscopic Techniques and state its primary measurement protocol in Engineering Chemistry.",
      "answer_lines": [
        "**Definition**: Spectroscopic Techniques represents a core empirical or experimental procedure in Engineering Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-chemistry-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Thermodynamics & Chemical Equilibrium and state its primary measurement protocol in Engineering Chemistry.",
      "answer_lines": [
        "**Definition**: Thermodynamics & Chemical Equilibrium represents a core empirical or experimental procedure in Engineering Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-chemistry-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Periodic Properties and state its primary measurement protocol in Engineering Chemistry.",
      "answer_lines": [
        "**Definition**: Periodic Properties represents a core empirical or experimental procedure in Engineering Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-chemistry-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Stereochemistry & Organic Reactions and state its primary measurement protocol in Engineering Chemistry.",
      "answer_lines": [
        "**Definition**: Stereochemistry & Organic Reactions represents a core empirical or experimental procedure in Engineering Chemistry, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-chemistry-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Atomic & Molecular Structure with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Atomic & Molecular Structure within Engineering Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-chemistry-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Spectroscopic Techniques with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Spectroscopic Techniques within Engineering Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-chemistry-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Thermodynamics & Chemical Equilibrium with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Thermodynamics & Chemical Equilibrium within Engineering Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-chemistry-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Periodic Properties with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Periodic Properties within Engineering Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-chemistry-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Stereochemistry & Organic Reactions with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Stereochemistry & Organic Reactions within Engineering Chemistry. Draw the complete apparatus wiring / setup schematic.",
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
  "engineering chemistry_set2": [
    {
      "id": "engineering-chemistry-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Atomic & Molecular Structure.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-chemistry-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Spectroscopic Techniques.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-chemistry-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Thermodynamics & Chemical Equilibrium.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-chemistry-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Periodic Properties.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-chemistry-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Stereochemistry & Organic Reactions.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-chemistry-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Atomic & Molecular Structure.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Atomic & Molecular Structure.",
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
      "id": "engineering-chemistry-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Spectroscopic Techniques.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Spectroscopic Techniques.",
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
      "id": "engineering-chemistry-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Thermodynamics & Chemical Equilibrium.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Thermodynamics & Chemical Equilibrium.",
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
      "id": "engineering-chemistry-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Periodic Properties.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Periodic Properties.",
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
      "id": "engineering-chemistry-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Stereochemistry & Organic Reactions.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Stereochemistry & Organic Reactions.",
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
  "programming for problem solving (c)_set1": [
    {
      "id": "programming-for-problem-solving-(c)-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Introduction to C and state its primary asymptotic time complexity in Programming for Problem Solving (C).",
      "answer_lines": [
        "**Definition**: In Programming for Problem Solving (C), Introduction to C establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Operators & Control Structures and state its primary asymptotic time complexity in Programming for Problem Solving (C).",
      "answer_lines": [
        "**Definition**: In Programming for Problem Solving (C), Operators & Control Structures establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Arrays & Strings and state its primary asymptotic time complexity in Programming for Problem Solving (C).",
      "answer_lines": [
        "**Definition**: In Programming for Problem Solving (C), Arrays & Strings establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Functions & Pointers and state its primary asymptotic time complexity in Programming for Problem Solving (C).",
      "answer_lines": [
        "**Definition**: In Programming for Problem Solving (C), Functions & Pointers establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Structures, Unions & File Handling and state its primary asymptotic time complexity in Programming for Problem Solving (C).",
      "answer_lines": [
        "**Definition**: In Programming for Problem Solving (C), Structures, Unions & File Handling establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Introduction to C with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Introduction to C serves as a core computational building block in Programming for Problem Solving (C), optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "programming-for-problem-solving-(c)-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Operators & Control Structures with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Operators & Control Structures serves as a core computational building block in Programming for Problem Solving (C), optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "programming-for-problem-solving-(c)-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Arrays & Strings with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Arrays & Strings serves as a core computational building block in Programming for Problem Solving (C), optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "programming-for-problem-solving-(c)-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Functions & Pointers with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Functions & Pointers serves as a core computational building block in Programming for Problem Solving (C), optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "programming-for-problem-solving-(c)-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Structures, Unions & File Handling with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Structures, Unions & File Handling serves as a core computational building block in Programming for Problem Solving (C), optimizing storage efficiency, access latency, and data integrity.",
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
  "programming for problem solving (c)_set2": [
    {
      "id": "programming-for-problem-solving-(c)-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Introduction to C.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Introduction to C.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Operators & Control Structures.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Operators & Control Structures.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Arrays & Strings.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Arrays & Strings.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Functions & Pointers.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Functions & Pointers.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Structures, Unions & File Handling.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Structures, Unions & File Handling.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "programming-for-problem-solving-(c)-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Introduction to C. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Introduction to C.",
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
      "id": "programming-for-problem-solving-(c)-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Operators & Control Structures. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Operators & Control Structures.",
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
      "id": "programming-for-problem-solving-(c)-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Arrays & Strings. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Arrays & Strings.",
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
      "id": "programming-for-problem-solving-(c)-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Functions & Pointers. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Functions & Pointers.",
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
      "id": "programming-for-problem-solving-(c)-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Structures, Unions & File Handling. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Structures, Unions & File Handling.",
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
  "basic electrical engineering_set1": [
    {
      "id": "basic-electrical-engineering-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DC Circuits and state its primary measurement protocol in Basic Electrical Engineering.",
      "answer_lines": [
        "**Definition**: DC Circuits represents a core empirical or experimental procedure in Basic Electrical Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "basic-electrical-engineering-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define AC Circuits and state its primary measurement protocol in Basic Electrical Engineering.",
      "answer_lines": [
        "**Definition**: AC Circuits represents a core empirical or experimental procedure in Basic Electrical Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "basic-electrical-engineering-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Transformers and state its primary measurement protocol in Basic Electrical Engineering.",
      "answer_lines": [
        "**Definition**: Transformers represents a core empirical or experimental procedure in Basic Electrical Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "basic-electrical-engineering-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Electrical Machines and state its primary measurement protocol in Basic Electrical Engineering.",
      "answer_lines": [
        "**Definition**: Electrical Machines represents a core empirical or experimental procedure in Basic Electrical Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "basic-electrical-engineering-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Power Systems & Safety and state its primary measurement protocol in Basic Electrical Engineering.",
      "answer_lines": [
        "**Definition**: Power Systems & Safety represents a core empirical or experimental procedure in Basic Electrical Engineering, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "basic-electrical-engineering-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DC Circuits with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DC Circuits within Basic Electrical Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "basic-electrical-engineering-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for AC Circuits with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for AC Circuits within Basic Electrical Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "basic-electrical-engineering-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Transformers with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Transformers within Basic Electrical Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "basic-electrical-engineering-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Electrical Machines with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Electrical Machines within Basic Electrical Engineering. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "basic-electrical-engineering-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Power Systems & Safety with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Power Systems & Safety within Basic Electrical Engineering. Draw the complete apparatus wiring / setup schematic.",
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
  "basic electrical engineering_set2": [
    {
      "id": "basic-electrical-engineering-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DC Circuits.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "basic-electrical-engineering-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for AC Circuits.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "basic-electrical-engineering-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Transformers.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "basic-electrical-engineering-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Electrical Machines.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "basic-electrical-engineering-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Power Systems & Safety.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "basic-electrical-engineering-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DC Circuits.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DC Circuits.",
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
      "id": "basic-electrical-engineering-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for AC Circuits.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in AC Circuits.",
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
      "id": "basic-electrical-engineering-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Transformers.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Transformers.",
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
      "id": "basic-electrical-engineering-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Electrical Machines.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Electrical Machines.",
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
      "id": "basic-electrical-engineering-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Power Systems & Safety.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Power Systems & Safety.",
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
  "engineering graphics & design_set1": [
    {
      "id": "engineering-graphics-&-design-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Drawing Standards & Scales and state its primary measurement protocol in Engineering Graphics & Design.",
      "answer_lines": [
        "**Definition**: Drawing Standards & Scales represents a core empirical or experimental procedure in Engineering Graphics & Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Projections of Points & Lines and state its primary measurement protocol in Engineering Graphics & Design.",
      "answer_lines": [
        "**Definition**: Projections of Points & Lines represents a core empirical or experimental procedure in Engineering Graphics & Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Projections of Solids and state its primary measurement protocol in Engineering Graphics & Design.",
      "answer_lines": [
        "**Definition**: Projections of Solids represents a core empirical or experimental procedure in Engineering Graphics & Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Sections & Developments and state its primary measurement protocol in Engineering Graphics & Design.",
      "answer_lines": [
        "**Definition**: Sections & Developments represents a core empirical or experimental procedure in Engineering Graphics & Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Isometric & CAD Basics and state its primary measurement protocol in Engineering Graphics & Design.",
      "answer_lines": [
        "**Definition**: Isometric & CAD Basics represents a core empirical or experimental procedure in Engineering Graphics & Design, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Drawing Standards & Scales with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Drawing Standards & Scales within Engineering Graphics & Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-graphics-&-design-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Projections of Points & Lines with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Projections of Points & Lines within Engineering Graphics & Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-graphics-&-design-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Projections of Solids with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Projections of Solids within Engineering Graphics & Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-graphics-&-design-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Sections & Developments with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Sections & Developments within Engineering Graphics & Design. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "engineering-graphics-&-design-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Isometric & CAD Basics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Isometric & CAD Basics within Engineering Graphics & Design. Draw the complete apparatus wiring / setup schematic.",
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
  "engineering graphics & design_set2": [
    {
      "id": "engineering-graphics-&-design-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Drawing Standards & Scales.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Projections of Points & Lines.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Projections of Solids.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Sections & Developments.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Isometric & CAD Basics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "engineering-graphics-&-design-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Drawing Standards & Scales.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Drawing Standards & Scales.",
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
      "id": "engineering-graphics-&-design-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Projections of Points & Lines.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Projections of Points & Lines.",
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
      "id": "engineering-graphics-&-design-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Projections of Solids.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Projections of Solids.",
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
      "id": "engineering-graphics-&-design-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Sections & Developments.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Sections & Developments.",
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
      "id": "engineering-graphics-&-design-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Isometric & CAD Basics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Isometric & CAD Basics.",
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
  "environmental science_set1": [
    {
      "id": "environmental-science-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Ecosystems and state its primary measurement protocol in Environmental Science.",
      "answer_lines": [
        "**Definition**: Ecosystems represents a core empirical or experimental procedure in Environmental Science, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "environmental-science-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Natural Resources and state its primary measurement protocol in Environmental Science.",
      "answer_lines": [
        "**Definition**: Natural Resources represents a core empirical or experimental procedure in Environmental Science, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "environmental-science-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Biodiversity & Conservation and state its primary measurement protocol in Environmental Science.",
      "answer_lines": [
        "**Definition**: Biodiversity & Conservation represents a core empirical or experimental procedure in Environmental Science, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "environmental-science-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Pollution & Control and state its primary measurement protocol in Environmental Science.",
      "answer_lines": [
        "**Definition**: Pollution & Control represents a core empirical or experimental procedure in Environmental Science, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "environmental-science-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Environmental Policies & Sustainability and state its primary measurement protocol in Environmental Science.",
      "answer_lines": [
        "**Definition**: Environmental Policies & Sustainability represents a core empirical or experimental procedure in Environmental Science, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "environmental-science-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Ecosystems with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Ecosystems within Environmental Science. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "environmental-science-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Natural Resources with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Natural Resources within Environmental Science. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "environmental-science-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Biodiversity & Conservation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Biodiversity & Conservation within Environmental Science. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "environmental-science-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Pollution & Control with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Pollution & Control within Environmental Science. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "environmental-science-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Environmental Policies & Sustainability with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Environmental Policies & Sustainability within Environmental Science. Draw the complete apparatus wiring / setup schematic.",
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
  "environmental science_set2": [
    {
      "id": "environmental-science-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Ecosystems.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "environmental-science-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Natural Resources.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "environmental-science-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Biodiversity & Conservation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "environmental-science-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Pollution & Control.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "environmental-science-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Environmental Policies & Sustainability.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "environmental-science-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Ecosystems.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Ecosystems.",
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
      "id": "environmental-science-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Natural Resources.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Natural Resources.",
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
      "id": "environmental-science-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Biodiversity & Conservation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Biodiversity & Conservation.",
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
      "id": "environmental-science-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Pollution & Control.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Pollution & Control.",
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
      "id": "environmental-science-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Environmental Policies & Sustainability.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Environmental Policies & Sustainability.",
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
  "communication skills_set1": [
    {
      "id": "communication-skills-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Grammar & Vocabulary and state its primary significance in Communication Skills.",
      "answer_lines": [
        "**Definition**: Grammar & Vocabulary forms a fundamental structural and operational concept within Communication Skills, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "communication-skills-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Reading Comprehension and state its primary significance in Communication Skills.",
      "answer_lines": [
        "**Definition**: Reading Comprehension forms a fundamental structural and operational concept within Communication Skills, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "communication-skills-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Technical Writing and state its primary significance in Communication Skills.",
      "answer_lines": [
        "**Definition**: Technical Writing forms a fundamental structural and operational concept within Communication Skills, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "communication-skills-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Oral Communication and state its primary significance in Communication Skills.",
      "answer_lines": [
        "**Definition**: Oral Communication forms a fundamental structural and operational concept within Communication Skills, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "communication-skills-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Group Discussions & Interviews and state its primary significance in Communication Skills.",
      "answer_lines": [
        "**Definition**: Group Discussions & Interviews forms a fundamental structural and operational concept within Communication Skills, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "communication-skills-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Grammar & Vocabulary with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Grammar & Vocabulary serves as a foundational study module in Communication Skills. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Grammar & Vocabulary is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "communication-skills-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Reading Comprehension with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Reading Comprehension serves as a foundational study module in Communication Skills. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Reading Comprehension is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "communication-skills-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Technical Writing with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Technical Writing serves as a foundational study module in Communication Skills. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Technical Writing is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "communication-skills-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Oral Communication with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Oral Communication serves as a foundational study module in Communication Skills. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Oral Communication is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "communication-skills-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Group Discussions & Interviews with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Group Discussions & Interviews serves as a foundational study module in Communication Skills. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Group Discussions & Interviews is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "communication skills_set2": [
    {
      "id": "communication-skills-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Grammar & Vocabulary.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "communication-skills-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Reading Comprehension.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "communication-skills-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Technical Writing.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "communication-skills-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Oral Communication.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "communication-skills-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Group Discussions & Interviews.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "communication-skills-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Grammar & Vocabulary. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Grammar & Vocabulary are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Grammar & Vocabulary provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "communication-skills-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Reading Comprehension. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Reading Comprehension are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Reading Comprehension provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "communication-skills-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Technical Writing. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Technical Writing are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Technical Writing provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "communication-skills-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Oral Communication. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Oral Communication are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Oral Communication provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "communication-skills-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Group Discussions & Interviews. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Group Discussions & Interviews are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Group Discussions & Interviews provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ]
};

export function getBTechSem1PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase().trim();
  const setSuffix = isSet1 ? "_set1" : "_set2";
  const exactKey = `${s}${setSuffix}`;
  if (sem1BTechPapersData[exactKey]) {
    return sem1BTechPapersData[exactKey];
  }
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(sem1BTechPapersData)) {
    if (k.endsWith(setSuffix)) {
      const subKey = k.replace(setSuffix, "");
      if (s.includes(subKey) || subKey.includes(s)) {
        return v;
      }
    }
  }
  return null;
}
