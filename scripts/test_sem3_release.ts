import { subjects } from "../src/lib/mock-data";
import { getBTechUnitPoints } from "../src/lib/content-btech";
import { getBScUnitPoints } from "../src/lib/content-bsc";
import { getBTechPaperDetail, getBTechSubjectPapers } from "../src/lib/model-papers-btech";
import { getBScPaperDetail, getBScSubjectPapers } from "../src/lib/model-papers-bsc";

console.log("=== TESTING LIVE SEMESTER 3 RELEASE ===");

// 1. Test B.Tech Semester 3
const btechSem3Subs = subjects.filter((s) => s.program === "btech" && s.semester === 3);
console.log(`Found ${btechSem3Subs.length} B.Tech Sem 3 subject instances.`);

let btechUnitsChecked = 0;
let btechUnitsPassed = 0;
let btechPapersChecked = 0;
let btechPapersPassed = 0;

for (const sub of btechSem3Subs) {
  for (const unit of sub.units) {
    btechUnitsChecked++;
    const pts = getBTechUnitPoints(unit.id);
    if (pts.length === 20) {
      const hl = pts.filter((p) => p.kind === "highlight");
      const bm = pts.filter((p) => p.kind === "bookmark");
      if (hl.length === 10 && bm.length === 10) {
        btechUnitsPassed++;
      }
    }
  }

  const papers = getBTechSubjectPapers(sub.id);
  for (const p of papers) {
    btechPapersChecked++;
    const detail = getBTechPaperDetail(p.id);
    if (detail && detail.questions.length === 10) {
      btechPapersPassed++;
    }
  }
}

console.log(`B.Tech Sem 3 Units: ${btechUnitsPassed} / ${btechUnitsChecked} valid (20 pts each).`);
console.log(`B.Tech Sem 3 Papers: ${btechPapersPassed} / ${btechPapersChecked} valid (10 Qs each).`);

// 2. Test B.Sc Semester 3
const bscSem3Subs = subjects.filter((s) => s.program === "bsc" && s.semester === 3);
console.log(`\nFound ${bscSem3Subs.length} B.Sc Sem 3 subject instances.`);

let bscUnitsChecked = 0;
let bscUnitsPassed = 0;
let bscPapersChecked = 0;
let bscPapersPassed = 0;
let bscLatexErrors = 0;

for (const sub of bscSem3Subs) {
  const isPureLife = (sub.name.toLowerCase().includes("botany") ||
                      sub.name.toLowerCase().includes("zoology") ||
                      sub.name.toLowerCase().includes("biotech") ||
                      sub.name.toLowerCase().includes("microbio") ||
                      sub.name.toLowerCase().includes("life")) &&
                     !sub.name.toLowerCase().includes("mathematics");

  const isDualMathLife = sub.name.toLowerCase().includes("mathematics") && sub.name.toLowerCase().includes("botany");

  for (const unit of sub.units) {
    bscUnitsChecked++;
    const pts = getBScUnitPoints(unit.id);
    if (pts.length === 20) {
      const hl = pts.filter((p) => p.kind === "highlight");
      const bm = pts.filter((p) => p.kind === "bookmark");
      if (hl.length === 10 && bm.length === 10) {
        bscUnitsPassed++;
      }
    }
    const checkNoLatex = isPureLife || (isDualMathLife && unit.unit_number >= 4);
    if (checkNoLatex) {
      for (const p of pts) {
        if (p.content.includes("$")) {
          bscLatexErrors++;
        }
      }
    }
  }

  const papers = getBScSubjectPapers(sub.id);
  for (const p of papers) {
    bscPapersChecked++;
    const detail = getBScPaperDetail(p.id);
    if (detail && detail.questions.length === 10) {
      bscPapersPassed++;
    }
    if (isPureLife && detail) {
      for (const q of detail.questions) {
        if (q.question.includes("$") || q.answer_lines.some((a) => a.includes("$"))) {
          bscLatexErrors++;
        }
      }
    }
  }
}

console.log(`B.Sc Sem 3 Units: ${bscUnitsPassed} / ${bscUnitsChecked} valid (20 pts each).`);
console.log(`B.Sc Sem 3 Papers: ${bscPapersPassed} / ${bscPapersChecked} valid (10 Qs each).`);
console.log(`B.Sc Sem 3 LaTeX in Life Sciences: ${bscLatexErrors} errors.`);

if (
  btechUnitsPassed === btechUnitsChecked &&
  btechPapersPassed === btechPapersChecked &&
  bscUnitsPassed === bscUnitsChecked &&
  bscPapersPassed === bscPapersChecked &&
  bscLatexErrors === 0
) {
  console.log("\n>>> SEMESTER 3 RELEASE IS 100% VERIFIED AND PASSING! <<<");
} else {
  console.error("\n>>> VERIFICATION FAILED! <<<");
}
