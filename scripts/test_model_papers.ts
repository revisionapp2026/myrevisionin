import { subjects } from "../src/lib/mock-data";
import { getBTechPaperDetail } from "../src/lib/model-papers-btech";
import { getBScPaperDetail } from "../src/lib/model-papers-bsc";

const btechM1 = subjects.find(s => s.program === "btech" && s.semester === 1 && s.name.includes("Mathematics"));
console.log("Found BTech M1 Subject ID:", btechM1?.id);
if (btechM1) {
  const p1 = getBTechPaperDetail(`${btechM1.id}--set1`);
  console.log("Set 1 Title:", p1?.paper.title);
  console.log("Questions count:", p1?.questions.length);
  console.log("Q1:", p1?.questions[0]?.question);
  console.log("Q5 (Part B):", p1?.questions[4]?.question);

  const p2 = getBTechPaperDetail(`${btechM1.id}--set2`);
  console.log("\nSet 2 Title:", p2?.paper.title);
  console.log("Questions count:", p2?.questions.length);
  console.log("Q1:", p2?.questions[0]?.question);
  console.log("Q5 (Part B):", p2?.questions[4]?.question);
}

const btechPhy = subjects.find(s => s.program === "btech" && s.semester === 1 && s.name.includes("Physics"));
if (btechPhy) {
  const p = getBTechPaperDetail(`${btechPhy.id}--set1`);
  console.log("\nPhysics Q1:", p?.questions[0]?.question);
  console.log("Physics Q5 (Part B):", p?.questions[4]?.question);
}

const bscMath = subjects.find(s => s.program === "bsc" && s.semester === 1 && s.name.includes("Calculus"));
console.log("\nFound BSc Subject ID:", bscMath?.id);
if (bscMath) {
  const p = getBScPaperDetail(`${bscMath.id}--set1`);
  console.log("Set 1 Title:", p?.paper.title);
  console.log("Questions count:", p?.questions.length);
  console.log("Q1:", p?.questions[0]?.question);
  console.log("Q5 (Part B):", p?.questions[4]?.question);
}
