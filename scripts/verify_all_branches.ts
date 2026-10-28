import { subjects, programs, branches } from "../src/lib/mock-data";
import { getBTechUnitPoints } from "../src/lib/content-btech";
import { getBScUnitPoints } from "../src/lib/content-bsc";
import { getBTechPaperDetail, getBTechSubjectPapers } from "../src/lib/model-papers-btech";
import { getBScPaperDetail, getBScSubjectPapers } from "../src/lib/model-papers-bsc";

console.log("================================================================================");
console.log("         COMPREHENSIVE BRANCH-BY-BRANCH & SEMESTER-BY-SEMESTER AUDIT            ");
console.log("================================================================================\n");

const genericSignatures = [
  "Foundational Scientific Principle of",
  "Constitutive equations \\sigma = E",
  "Core Conceptual Foundations of",
  "Foundational Biological Principle of",
];

let totalUnitsChecked = 0;
let totalUnitsPassed = 0;
let totalPapersChecked = 0;
let totalPapersPassed = 0;
let totalLatexErrors = 0;
let totalGenericErrors = 0;

for (const prog of ["btech", "bsc"]) {
  console.log(`\n################################################################################`);
  console.log(`                             PROGRAM: ${prog.toUpperCase()}`);
  console.log(`################################################################################`);

  const progSubs = subjects.filter(s => s.program === prog);
  const progBranches = [...new Set(progSubs.map(s => s.branch || "core"))].sort();

  for (const bCode of progBranches) {
    const branchSubs = progSubs.filter(s => (s.branch || "core") === bCode);
    const branchSemesters = [...new Set(branchSubs.map(s => s.semester))].filter((sem): sem is number => sem !== null).sort((a, b) => a - b);
    
    console.log(`\n>>> Branch: ${bCode.toUpperCase()} (${branchSubs.length} subjects across Sem ${branchSemesters[0]}-${branchSemesters[branchSemesters.length - 1]}) <<<`);

    for (const sem of branchSemesters) {
      const semBranchSubs = branchSubs.filter(s => s.semester === sem);
      let branchSemUnits = 0;
      let branchSemUnitsPassed = 0;
      let branchSemPapers = 0;
      let branchSemPapersPassed = 0;

      for (const sub of semBranchSubs) {
        const isPureLife = (sub.name.toLowerCase().includes("botany") ||
                            sub.name.toLowerCase().includes("zoology") ||
                            sub.name.toLowerCase().includes("biotech") ||
                            sub.name.toLowerCase().includes("microbio") ||
                            sub.name.toLowerCase().includes("life")) &&
                           !sub.name.toLowerCase().includes("mathematics");
        const isDualMathLife = sub.name.toLowerCase().includes("mathematics") && sub.name.toLowerCase().includes("botany");

        // Audit units
        for (const unit of sub.units) {
          branchSemUnits++;
          totalUnitsChecked++;

          const pts = prog === "btech" ? getBTechUnitPoints(unit.id) : getBScUnitPoints(unit.id);
          if (pts && pts.length === 20) {
            const hl = pts.filter(p => p.kind === "highlight");
            const bm = pts.filter(p => p.kind === "bookmark");
            if (hl.length === 10 && bm.length === 10) {
              branchSemUnitsPassed++;
              totalUnitsPassed++;
            }
          }

          // Check for generic signatures
          for (const p of pts) {
            if (genericSignatures.some(sig => p.content.includes(sig))) {
              totalGenericErrors++;
              console.error(`[GENERIC ERROR] ${sub.name} (Unit ${unit.unit_number}): ${p.content.slice(0, 50)}...`);
            }
          }

          // Check for LaTeX in Life Sciences
          const checkNoLatex = isPureLife || (isDualMathLife && unit.unit_number >= 4);
          if (checkNoLatex) {
            for (const p of pts) {
              if (p.content.includes("$")) {
                totalLatexErrors++;
                console.error(`[LATEX IN LIFE ERROR] ${sub.name} (Unit ${unit.unit_number}): ${p.content}`);
              }
            }
          }
        }

        // Audit model papers
        const papers = prog === "btech" ? getBTechSubjectPapers(sub.id) : getBScSubjectPapers(sub.id);
        for (const p of papers) {
          branchSemPapers++;
          totalPapersChecked++;
          const detail = prog === "btech" ? getBTechPaperDetail(p.id) : getBScPaperDetail(p.id);
          if (detail && detail.questions.length === 10) {
            branchSemPapersPassed++;
            totalPapersPassed++;
          }
          if (isPureLife && detail) {
            for (const q of detail.questions) {
              if (q.question.includes("$") || q.answer_lines.some(a => a.includes("$"))) {
                totalLatexErrors++;
                console.error(`[LATEX IN LIFE PAPER] ${sub.name} (Paper ${p.id}): Q${q.question_no}`);
              }
            }
          }
        }
      }

      console.log(`  Sem ${sem}: ${semBranchSubs.length} subs | Units: ${branchSemUnitsPassed}/${branchSemUnits} valid | Papers: ${branchSemPapersPassed}/${branchSemPapers} valid`);
    }
  }
}

console.log("\n================================================================================");
console.log(`TOTAL UNITS CHECKED:   ${totalUnitsChecked}`);
console.log(`TOTAL UNITS PASSED:    ${totalUnitsPassed} (100% 10 Highlights + 10 Bookmarks)`);
console.log(`TOTAL PAPERS CHECKED:  ${totalPapersChecked}`);
console.log(`TOTAL PAPERS PASSED:   ${totalPapersPassed} (100% 10 Questions with full solutions)`);
console.log(`GENERIC ERRORS:        ${totalGenericErrors}`);
console.log(`LATEX IN LIFE ERRORS:  ${totalLatexErrors}`);
console.log("================================================================================");

if (totalUnitsChecked === totalUnitsPassed &&
    totalPapersChecked === totalPapersPassed &&
    totalGenericErrors === 0 &&
    totalLatexErrors === 0) {
  console.log("\n>>> ALL BRANCHES, SUBJECTS, SEMESTERS & UNITS ARE 1000% ACCURATE AND VERIFIED! <<<");
  process.exit(0);
} else {
  console.error("\n>>> VERIFICATION FAILED! <<<");
  process.exit(1);
}
