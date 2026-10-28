import { subjects } from "../src/lib/mock-data";
import { getBTechUnitPoints } from "../src/lib/content-btech";
import { getBScUnitPoints } from "../src/lib/content-bsc";
import { getBTechPaperDetail, getBTechSubjectPapers } from "../src/lib/model-papers-btech";
import { getBScPaperDetail, getBScSubjectPapers } from "../src/lib/model-papers-bsc";

console.log("================================================================================");
console.log("            COMPREHENSIVE AUDIT OF ALL SEMESTERS (B.TECH 1-8 & B.SC 1-6)        ");
console.log("================================================================================\n");

let grandTotalUnitsChecked = 0;
let grandTotalUnitsPassed = 0;
let grandTotalPapersChecked = 0;
let grandTotalPapersPassed = 0;
let grandTotalLatexErrors = 0;

// -----------------------------------------------------------------------------
// 1. AUDIT B.TECH (Semesters 1 to 8)
// -----------------------------------------------------------------------------
console.log(">>> AUDITING B.TECH (SEMESTERS 1 - 8) <<<");
for (let sem = 1; sem <= 8; sem++) {
  const semSubs = subjects.filter((s) => s.program === "btech" && s.semester === sem);
  let unitsChecked = 0;
  let unitsPassed = 0;
  let papersChecked = 0;
  let papersPassed = 0;

  for (const sub of semSubs) {
    for (const unit of sub.units) {
      unitsChecked++;
      const pts = getBTechUnitPoints(unit.id);
      if (pts.length === 20) {
        const hl = pts.filter((p) => p.kind === "highlight");
        const bm = pts.filter((p) => p.kind === "bookmark");
        if (hl.length === 10 && bm.length === 10) {
          unitsPassed++;
        }
      }
    }

    const papers = getBTechSubjectPapers(sub.id);
    for (const p of papers) {
      papersChecked++;
      const detail = getBTechPaperDetail(p.id);
      if (detail && detail.questions.length === 10) {
        papersPassed++;
      }
    }
  }

  grandTotalUnitsChecked += unitsChecked;
  grandTotalUnitsPassed += unitsPassed;
  grandTotalPapersChecked += papersChecked;
  grandTotalPapersPassed += papersPassed;

  console.log(`  Sem ${sem}: Units ${unitsPassed}/${unitsChecked} valid | Papers ${papersPassed}/${papersChecked} valid (${semSubs.length} subs)`);
}

// -----------------------------------------------------------------------------
// 2. AUDIT B.SC (Semesters 1 to 6)
// -----------------------------------------------------------------------------
console.log("\n>>> AUDITING B.SC (SEMESTERS 1 - 6) <<<");
for (let sem = 1; sem <= 6; sem++) {
  const semSubs = subjects.filter((s) => s.program === "bsc" && s.semester === sem);
  let unitsChecked = 0;
  let unitsPassed = 0;
  let papersChecked = 0;
  let papersPassed = 0;
  let latexErrors = 0;

  for (const sub of semSubs) {
    const isPureLife = (sub.name.toLowerCase().includes("botany") ||
                        sub.name.toLowerCase().includes("zoology") ||
                        sub.name.toLowerCase().includes("biotech") ||
                        sub.name.toLowerCase().includes("microbio") ||
                        sub.name.toLowerCase().includes("life")) &&
                       !sub.name.toLowerCase().includes("mathematics");

    const isDualMathLife = sub.name.toLowerCase().includes("mathematics") && sub.name.toLowerCase().includes("botany");

    for (const unit of sub.units) {
      unitsChecked++;
      const pts = getBScUnitPoints(unit.id);
      if (pts.length === 20) {
        const hl = pts.filter((p) => p.kind === "highlight");
        const bm = pts.filter((p) => p.kind === "bookmark");
        if (hl.length === 10 && bm.length === 10) {
          unitsPassed++;
        }
      }

      const checkNoLatex = isPureLife || (isDualMathLife && unit.unit_number >= 4);
      if (checkNoLatex) {
        for (const p of pts) {
          if (p.content.includes("$")) {
            latexErrors++;
          }
        }
      }
    }

    const papers = getBScSubjectPapers(sub.id);
    for (const p of papers) {
      papersChecked++;
      const detail = getBScPaperDetail(p.id);
      if (detail && detail.questions.length === 10) {
        papersPassed++;
      }
      if (isPureLife && detail) {
        for (const q of detail.questions) {
          if (q.question.includes("$") || q.answer_lines.some((a) => a.includes("$"))) {
            latexErrors++;
          }
        }
      }
    }
  }

  grandTotalUnitsChecked += unitsChecked;
  grandTotalUnitsPassed += unitsPassed;
  grandTotalPapersChecked += papersChecked;
  grandTotalPapersPassed += papersPassed;
  grandTotalLatexErrors += latexErrors;

  console.log(`  Sem ${sem}: Units ${unitsPassed}/${unitsChecked} valid | Papers ${papersPassed}/${papersChecked} valid | LaTeX errors: ${latexErrors} (${semSubs.length} subs)`);
}

console.log("\n================================================================================");
console.log(`GRAND TOTAL UNITS:  ${grandTotalUnitsPassed} / ${grandTotalUnitsChecked} (100% with 20 points each)`);
console.log(`GRAND TOTAL PAPERS: ${grandTotalPapersPassed} / ${grandTotalPapersChecked} (100% with 10 questions each)`);
console.log(`TOTAL LATEX IN LIFE SCIENCES ERRORS: ${grandTotalLatexErrors}`);
console.log("================================================================================");

if (grandTotalUnitsPassed === grandTotalUnitsChecked &&
    grandTotalPapersPassed === grandTotalPapersChecked &&
    grandTotalLatexErrors === 0) {
  console.log("\n>>> ALL UNITS AND SEMESTERS ARE 100% CHECKED, CORRECTED AND VERIFIED! <<<");
  process.exit(0);
} else {
  console.error("\n>>> VERIFICATION FAILED! <<<");
  process.exit(1);
}
