import { subjects } from "../src/lib/mock-data";
import { getBScPaperDetail } from "../src/lib/model-papers-bsc";

const bscSem2 = subjects.filter(s => s.program === "bsc" && s.semester === 2);
console.log(`Found ${bscSem2.length} B.Sc Semester 2 subject instances.`);

let totalAudited = 0;
let errors = 0;

const lifeKeywords = [
  "microbial diversity",
  "botany",
  "zoology",
  "chordates",
  "environmental",
  "microbiology"
];

for (const sub of bscSem2) {
  const isLifeSubject = lifeKeywords.some(k => sub.name.toLowerCase().includes(k)) && !sub.name.toLowerCase().includes("mathematics ii");

  for (const setKey of ["set1", "set2"]) {
    totalAudited++;
    const paperId = `${sub.id}--${setKey}`;
    const detail = getBScPaperDetail(paperId);

    if (!detail) {
      console.error(`ERROR: Failed to load paper for ${paperId}`);
      errors++;
      continue;
    }

    const { paper, questions } = detail;
    if (questions.length !== 10) {
      console.error(`ERROR: Question count for ${paperId} is ${questions.length}, expected 10!`);
      errors++;
    }

    for (const q of questions) {
      // Check fallback
      if (q.question.includes("Define Foundational Concepts") || q.question.includes("fundamental significance in")) {
        console.error(`ERROR: Fallback question detected in ${paperId}: "${q.question}"`);
        errors++;
      }

      // Check life science formula invariant
      if (isLifeSubject) {
        if (q.question.includes("$")) {
          console.error(`ERROR: LaTeX formula in life science question: ${paperId} - "${q.question}"`);
          errors++;
        }
        for (const line of q.answer_lines) {
          if (line.includes("$")) {
            console.error(`ERROR: LaTeX formula in life science answer: ${paperId} - "${line}"`);
            errors++;
          }
        }
      }
    }
  }
}

console.log(`\n========================================`);
console.log(`Audited: ${totalAudited} B.Sc Sem 2 papers.`);
console.log(`Errors: ${errors}`);
if (errors === 0) {
  console.log("STATUS: ALL B.SC SEMESTER 2 MODEL PAPERS 100% VERIFIED & COMPLIANT!");
} else {
  console.error("STATUS: ERRORS FOUND IN B.SC SEMESTER 2 MODEL PAPERS!");
  process.exit(1);
}
