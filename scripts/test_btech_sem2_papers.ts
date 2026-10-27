import { subjects } from "../src/lib/mock-data";
import { getBTechPaperDetail } from "../src/lib/model-papers-btech";

const btechSem2 = subjects.filter(s => s.program === "btech" && s.semester === 2);
console.log(`Found ${btechSem2.length} B.Tech Semester 2 subject instances.`);

let totalAudited = 0;
let errors = 0;

for (const sub of btechSem2) {
  for (const setKey of ["set1", "set2"]) {
    totalAudited++;
    const paperId = `${sub.id}--${setKey}`;
    const detail = getBTechPaperDetail(paperId);

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

    const isBiology = sub.name.toLowerCase().includes("biology");
    for (const q of questions) {
      // Check if it's fallback
      if (q.question.includes("Define Foundations") || q.question.includes("primary significance in")) {
        console.error(`ERROR: Fallback question detected in ${paperId}: "${q.question}"`);
        errors++;
      }

      // Check Biology for zero LaTeX
      if (isBiology) {
        if (q.question.includes("$")) {
          console.error(`ERROR: LaTeX formula in Biology question: ${paperId} - "${q.question}"`);
          errors++;
        }
        for (const line of q.answer_lines) {
          if (line.includes("$")) {
            console.error(`ERROR: LaTeX formula in Biology answer: ${paperId} - "${line}"`);
            errors++;
          }
        }
      }
    }
  }
}

console.log(`\n========================================`);
console.log(`Audited: ${totalAudited} B.Tech Sem 2 papers.`);
console.log(`Errors: ${errors}`);
if (errors === 0) {
  console.log("STATUS: ALL B.TECH SEMESTER 2 MODEL PAPERS 100% VERIFIED & COMPLIANT!");
} else {
  console.error("STATUS: ERRORS FOUND!");
  process.exit(1);
}
