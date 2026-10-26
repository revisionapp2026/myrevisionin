export type StudyMode = "explain" | "flashcards" | "quiz" | "audio-script";

export function generateSyllabusContent(params: {
  topic: string;
  mode: StudyMode;
  programLabel?: string | undefined;
  semester?: number | undefined;
  subjectName?: string | undefined;
  unitName?: string | undefined;
  groundingContext?: string | undefined;
}): string {
  const {
    topic,
    mode,
    programLabel = "B.Com / BBA",
    semester = 1,
    subjectName = "this subject",
    unitName = "",
    groundingContext = "",
  } = params;

  // Extract raw points if available from syllabus grounding
  const rawPoints = groundingContext
    .split("\n")
    .map((l) => l.replace(/^[-*•\d.\s]+/, "").trim())
    .filter((l) => l.length > 10);

  if (mode === "explain") {
    const bullets: string[] = [];
    if (rawPoints.length >= 4) {
      bullets.push(...rawPoints.slice(0, 6).map((p) => `- ${p}`));
    } else {
      bullets.push(
        `- ${topic} is a core syllabus concept in ${subjectName}${unitName ? ` (${unitName})` : ""} essential for understanding fundamental principles and practical applications.`,
        `- It provides a structured methodology to analyze, organize, and evaluate key business processes.`,
        `- Core components focus on systematic planning, standard execution, and internal controls.`,
        `- Clear understanding of ${topic} helps students connect theoretical concepts to actual exam questions.`,
        `- Key terminology, definitions, and exam illustrations should be cited accurately for maximum marks in university exams.`,
      );
    }

    const keyPoints = [
      `- Always begin your exam answer with the formal definition of ${topic}.`,
      `- Highlight 3-4 distinct features, advantages, and limitations with clear side-headings.`,
      `- Include a flowchart or diagram if asking for process or classification.`,
      `- Relate ${topic} to practical case problems in ${subjectName} where applicable.`,
    ];

    const questions = [
      `1. Define ${topic} and explain its primary significance in ${subjectName}.`,
      `2. What are the key features and essential advantages of ${topic}?`,
      `3. Differentiate ${topic} from related syllabus concepts with exam illustrations.`,
      `4. Discuss the practical problems or challenges encountered in applying ${topic}.`,
    ];

    return [
      "EXPLANATION",
      ...bullets,
      "",
      "KEY POINTS TO REMEMBER",
      ...keyPoints,
      "",
      "PRACTICE QUESTIONS",
      ...questions,
    ].join("\n");
  }

  if (mode === "flashcards") {
    if (rawPoints.length >= 8) {
      return rawPoints
        .slice(0, 8)
        .map((p, i) => `Important Point ${i + 1} of ${topic} :: ${p}`)
        .join("\n");
    }

    return [
      `What is ${topic}? :: It is a fundamental concept in ${subjectName} designed for systematic study and exam preparation.`,
      `What is the main objective of ${topic}? :: To ensure accuracy, structured decision-making, and effective organizational control.`,
      `Why is ${topic} frequently asked in exams? :: Examiners test clarity of definitions, key principles, and practical application.`,
      `What is the first step when analyzing ${topic}? :: Identify the underlying problem or objective and evaluate relevant parameters.`,
      `What are the major advantages of ${topic}? :: Better efficiency, minimized errors, improved transparency, and standard compliance.`,
      `What is a common limitation of ${topic}? :: Requires careful implementation and may involve time-intensive procedures.`,
      `How to present ${topic} in 10-mark questions? :: Start with introduction, list core characteristics, draw a diagram, and state conclusions.`,
      `What is the key takeaway for ${topic}? :: Thorough understanding of principles and accurate terminology ensures maximum scoring.`,
    ].join("\n");
  }

  if (mode === "quiz") {
    return [
      `Which of the following best defines ${topic}? :: A core principle in ${subjectName} | A casual optional guideline | An obsolete manual practice | None of the above :: A :: ${topic} forms an essential part of the standard syllabus curriculum.`,
      `What is the primary objective of studying ${topic}? :: Structured understanding and scoring in exams | Wasting preparation time | Avoiding syllabus topics | Guessing MCQ options :: A :: Systematic preparation and structured understanding is the goal.`,
      `In university exams, questions on ${topic} usually require :: Accurate definitions and structured points | Blank responses | Single word answers only | Unrelated trivia :: A :: Examiners reward well-structured points with clear headings.`,
      `Which aspect is crucial when explaining ${topic}? :: Core features and practical applications | Ignoring basic definitions | Memorizing unrelated topics | Skipping revision :: A :: Explaining features and applications secures high marks.`,
      `For ${topic}, diagrams or flowcharts help to :: Clarify concepts and score higher marks | Confuse the examiner | Exceed the word limit unnecessarily | Reduce presentation score :: A :: Clean diagrams improve clarity and examiner evaluation.`,
      `When revising ${topic}, students should focus on :: Key terms, definitions, and practice questions | Only reading once | Ignoring formulas and steps | Leaving choice questions :: A :: Revising definitions and past questions provides maximum retention.`,
    ].join("\n");
  }

  // mode === "audio-script"
  return `Welcome to your revision summary for ${topic} in ${subjectName}. As a ${programLabel} student in Semester ${semester}, mastering this topic is essential for your university exams. Focus on three main aspects: first, memorize the clear definition and standard terminology. Second, understand the major characteristics that examiners look for. Third, practice answering with structured bullet points and diagrams. Keeping these points in mind will help you answer both short notes and essay questions with high confidence and score top marks in your upcoming exams.`;
}
