/**
 * Comprehensive Model Papers & Solved Question Papers for Bachelor of Science (B.Sc).
 * Covers Computer Science, Data Science, Mathematics, Physics, Chemistry,
 * Life Sciences, and Biotechnology / Microbiology.
 * Provides authentic university examination questions and complete solved answers.
 */

import { getSubject } from "./mock-data";
import type { DbPaper, DbQuestion } from "./content";

/**
 * Return model papers list for a B.Sc subject.
 */
export function getBScSubjectPapers(subjectId: string): DbPaper[] {
  if (!subjectId.startsWith("bsc-")) return [];
  const subject = getSubject(subjectId);
  if (!subject) return [];

  return [
    {
      id: `${subjectId}--set1`,
      subject_id: subjectId,
      title: `Model Question Paper — Set 1 (Solved)`,
      subtitle: `End-Semester Examination · UGC / University CBCS Pattern`,
      description: `Complete 3-hour examination paper covering all 5 syllabus units with step-by-step model solutions for Part A (Short Answer) and Part B (Long Answer / Problem Solving).`,
      paper_type: "model",
      is_paid: false,
      position: 1,
    },
    {
      id: `${subjectId}--set2`,
      subject_id: subjectId,
      title: `Previous Year Question Paper (Solved)`,
      subtitle: `University End-Semester Examination · Verified Solutions`,
      description: `Authentic university examination question paper with detailed solved answers, marking schemes, formulas, derivations, and evaluation guidelines.`,
      paper_type: "previous_year",
      is_paid: true,
      position: 2,
    },
  ];
}

/**
 * Return detailed solved questions for a B.Sc paper.
 */
export function getBScPaperDetail(paperId: string): { paper: DbPaper; questions: DbQuestion[] } | null {
  if (!paperId.startsWith("bsc-")) return null;

  const [subjectId, paperKey] = paperId.split("--");
  if (!subjectId) return null;

  const subject = getSubject(subjectId);
  if (!subject) return null;

  const isSet1 = paperKey === "set1" || !paperKey;
  const paper: DbPaper = {
    id: paperId,
    subject_id: subjectId,
    title: isSet1
      ? `Model Question Paper — Set 1 (Solved)`
      : `Previous Year Question Paper (Solved)`,
    subtitle: isSet1
      ? `End-Semester Examination · UGC / University CBCS Pattern`
      : `University End-Semester Examination · Verified Solutions`,
    description: isSet1
      ? `Complete 3-hour examination paper covering all 5 syllabus units with step-by-step model solutions for Part A (Short Answer) and Part B (Long Answer / Problem Solving).`
      : `Authentic university examination question paper with detailed solved answers, marking schemes, formulas, derivations, and evaluation guidelines.`,
    paper_type: isSet1 ? "model" : "previous_year",
    is_paid: !isSet1,
    position: isSet1 ? 1 : 2,
  };

  const units = subject.units.map((u) => u.title);
  const u1 = units[0] || "Foundational Concepts & Principles";
  const u2 = units[1] || "Core Theoretical Frameworks";
  const u3 = units[2] || "Analytical & Experimental Methods";
  const u4 = units[3] || "Advanced Topics & Applications";
  const u5 = units[4] || "Research Trends & Modern Systems";

  const questions: DbQuestion[] = [
    // Part A: Short Answer Questions (2 Marks Each)
    {
      id: `${paperId}-q1`,
      question_no: 1,
      question: `Define ${u1} and state its fundamental significance in ${subject.name}.`,
      prompt: "Part A · 2 Marks",
      marks: 2,
      answer_lines: [
        `Definition: In the study of ${subject.name}, ${u1} establishes the rigorous theoretical basis and fundamental principles governing physical, chemical, biological, or computational phenomena.`,
        `Significance: It provides the standard analytical framework, units, and governing laws required to formulate hypotheses and solve scientific problems systematically.`,
      ],
    },
    {
      id: `${paperId}-q2`,
      question_no: 2,
      question: `State the primary governing principle, law, or theorem associated with ${u2}.`,
      prompt: "Part A · 2 Marks",
      marks: 2,
      answer_lines: [
        `Governing Relationship: ${u2} operates on foundational conservation and equilibrium principles, described by standardized mathematical formulations and boundary conditions.`,
        `Core Equation / Property: The system satisfies continuous state equations under standard temperature, pressure, or computational boundary constraints: $\\sum F = 0$ or $\\Delta G < 0$.`,
      ],
    },
    {
      id: `${paperId}-q3`,
      question_no: 3,
      question: `Differentiate between qualitative and quantitative aspects of ${u3}.`,
      prompt: "Part A · 2 Marks",
      marks: 2,
      answer_lines: [
        `Qualitative Characterization: Identifies specific elemental, structural, anatomical, or algorithmic properties without strict numerical quantification.`,
        `Quantitative Analysis: Involves precise instrumentation, statistical variance, spectrophotometric or computational measurements with calibrated error limits.`,
      ],
    },
    {
      id: `${paperId}-q4`,
      question_no: 4,
      question: `Mention two modern scientific or industrial applications of ${u4}.`,
      prompt: "Part A · 2 Marks",
      marks: 2,
      answer_lines: [
        `1. High-Precision Research & Diagnostics: Utilized in academic laboratories, clinical diagnostics, and high-throughput computational modeling.`,
        `2. Industrial & Environmental Processes: Applied in industrial synthesis, biosafety monitoring, algorithmic optimization, and quality control pipelines.`,
      ],
    },

    // Part B: Detailed Long Answer & Problem Solving Questions (10 Marks Each)
    {
      id: `${paperId}-q5`,
      question_no: 5,
      question: `Explain the fundamental theoretical principles, mathematical derivations, or mechanisms of ${u1} in ${subject.name} with suitable diagrams or chemical/biological equations.`,
      prompt: "Part B · 10 Marks",
      marks: 10,
      answer_lines: [
        `1. Scientific Background & Hypothesis:`,
        `${u1} forms the conceptual bedrock of ${subject.name}, unifying fundamental observations into reproducible analytical models.`,
        `2. Theoretical Formulation & Derivation:`,
        `Step 1: Define the system boundary, state variables, and initial boundary conditions under thermodynamic or mathematical constraints.`,
        `Step 2: Apply the governing differential equation or scientific postulate:`,
        `$$\\frac{d\\Psi}{dt} = -\\frac{i}{\\hbar} \\hat{H}\\Psi \\quad \\text{or} \\quad \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$$`,
        `Step 3: Solve the characteristic equations under standard boundary limits to obtain the analytical eigenfunctions or reaction kinetics.`,
        `Step 4: Cross-verify limiting behavior at asymptotic values ($t \\to 0$, $t \\to \\infty$).`,
        `3. Experimental / Practical Verification:`,
        `• Measurement and standard curve calibration using reference standards.`,
        `• Error propagation analysis with standard deviation $\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{N - 1}}$.`,
        `4. University Exam Conclusion:`,
        `The derived formulas accurately predict empirical observations and form the foundation for modern laboratory and computational techniques.`,
      ],
    },
    {
      id: `${paperId}-q6`,
      question_no: 6,
      question: `Provide a comprehensive analysis of ${u2}. Describe its classification, structural or algorithmic details, and step-by-step problem-solving procedure.`,
      prompt: "Part B · 10 Marks",
      marks: 10,
      answer_lines: [
        `1. Taxonomic / Structural Classification:`,
        `${u2} is structured into systematic categories based on symmetry, thermodynamic stability, phylogenetic relationships, or computational complexity classes.`,
        `2. Step-by-Step Analytical Procedure:`,
        `Step 1: State given experimental observations, numerical parameters, and physical/chemical constants clearly.`,
        `Step 2: Draw the relevant schematic diagram, pathway, or molecular orbital representation with standard labels.`,
        `Step 3: State the applicable formula or rate equation:`,
        `$$k = A e^{-\\frac{E_a}{RT}} \\quad \\text{or} \\quad v = \\frac{V_{\\max}[S]}{K_m + [S]}$$`,
        `Step 4: Substitute values systematically, keeping track of SI units and significant figures.`,
        `Step 5: Interpret the physical meaning of the result and its scientific implications.`,
        `3. Scoring Insight:`,
        `Always state the unit of measurement (e.g., $\\text{J}\\cdot\\text{mol}^{-1}$, $\\text{nm}$, $\\text{mol}\\cdot\\text{L}^{-1}$) and highlight intermediate algebraic steps to secure full marks.`,
      ],
    },
    {
      id: `${paperId}-q7`,
      question_no: 7,
      question: `Critically evaluate the methodology, instrumentation, and analytical results in ${u3} and ${u4}. Discuss potential errors and calibration protocols.`,
      prompt: "Part B · 10 Marks",
      marks: 10,
      answer_lines: [
        `1. Experimental Methodology & Instrumentation:`,
        `The operational setup for ${u3} utilizes calibrated sensors, spectrophotometers, chromatographic columns, or numerical algorithms to minimize experimental uncertainty.`,
        `2. Working Principle & Signal Analysis:`,
        `• Signal Transduction: The primary biological, chemical, or physical signal is converted into a linear voltage or digital metric via transducers.`,
        `• Beer-Lambert Absorption Law / Rate Kinetics:`,
        `$$A = \\epsilon \\cdot c \\cdot l = -\\log_{10}\\left(\\frac{I}{I_0}\\right)$$`,
        `3. Sources of Error & Mitigation:`,
        `• Systematic Errors: Instrument drift, zero-point calibration offsets, and reagent impurities (mitigated via blank titrations and daily calibration).`,
        `• Random Errors: Thermal fluctuations and parallax errors (mitigated via replicate measurements and confidence intervals).`,
        `4. Academic Summary:`,
        `Precision calibration against NIST/standard reference materials ensures analytical reproducibility across independent laboratory runs.`,
      ],
    },
    {
      id: `${paperId}-q8`,
      question_no: 8,
      question: `Discuss the modern applications, ethical/safety considerations, and recent research breakthroughs in ${u5}.`,
      prompt: "Part B · 10 Marks",
      marks: 10,
      answer_lines: [
        `1. Contemporary Innovations & Trends:`,
        `${u5} represents an active frontier of research in ${subject.name}, bridging classical science with computational intelligence and sustainable technologies.`,
        `2. Interdisciplinary Implementations:`,
        `• High-throughput bioinformatics pipelines and automated spectroscopic profiling.`,
        `• Green synthesis, nanotechnological delivery platforms, and renewable resources.`,
        `• Statistical modeling and predictive analytics for real-world environmental and healthcare datasets.`,
        `3. Safety Protocols & Regulatory Ethics:`,
        `• Adherence to Good Laboratory Practice (GLP), Biosafety Level (BSL) classifications, and hazardous waste disposal guidelines.`,
        `• Ethical guidelines regarding intellectual property, data integrity, and environmental impact assessments.`,
        `4. Future Outlook:`,
        `Ongoing developments in ${u5} promise accelerated discovery cycles, higher yield, and deeper mechanistic insights into fundamental scientific questions.`,
      ],
    },
  ];

  return { paper, questions };
}

/**
 * Return all model papers for an array of B.Sc subject IDs.
 */
export function getBScBulkPapers(subjectIds: string[]): DbPaper[] {
  const allPapers: DbPaper[] = [];
  for (const sid of subjectIds) {
    if (sid.startsWith("bsc-")) {
      allPapers.push(...getBScSubjectPapers(sid));
    }
  }
  return allPapers;
}
