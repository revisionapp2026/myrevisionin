import { subjects } from "../src/lib/mock-data";
import { getBScUnitPoints } from "../src/lib/content-bsc";

const bscSem2 = subjects.filter(s => s.program === "bsc" && s.semester === 2);
console.log(`Auditing B.Sc Semester 2: Found ${bscSem2.length} subject entries in mock-data.`);

let totalUnits = 0;
let genericCount = 0;
let formulaViolations = 0;
let missingKaTeXCount = 0;
let invalidCounts = 0;

const lifeKeywords = [
  "microbial",
  "botany",
  "chordates",
  "zoology",
  "environmental",
  "plant",
  "physiology",
];

for (const sub of bscSem2) {
  for (const unit of sub.units) {
    totalUnits++;
    const points = getBScUnitPoints(unit.id);
    const highlights = points.filter(p => p.kind === "highlight");
    const keypoints = points.filter(p => p.kind === "bookmark");

    if (highlights.length !== 10 || keypoints.length !== 10) {
      console.error(`Unit ${unit.id} has invalid point count: ${highlights.length} HL, ${keypoints.length} KP`);
      invalidCounts++;
    }

    const allText = points.map(p => p.content).join(" ");

    // Check for generic fallback indicators
    if (
      allText.includes("Serves as Unit") ||
      allText.includes("Theoretical Foundations of") ||
      allText.includes("Governing Analytical Formulation:")
    ) {
      console.error(`GENERIC FALLBACK DETECTED: ${unit.id} in ${sub.name}`);
      genericCount++;
    }

    // Determine if unit is Life Science / Allied (must have ZERO LaTeX formulas)
    let isLifeOrQual = false;
    const subLower = sub.name.toLowerCase();

    if (
      subLower.includes("microbial") ||
      subLower.includes("microbiology") ||
      subLower.includes("botany lab") ||
      subLower.includes("chordates") ||
      subLower.includes("zoology") ||
      subLower.includes("environmental") ||
      subLower.includes("botany ii / zoology ii")
    ) {
      isLifeOrQual = true;
    } else if (sub.name.includes("Mathematics II / Botany II")) {
      // In Math II / Botany II, Units 1-3 are Math (STEM), Units 4-5 are Botany (Life Science)
      if (unit.unit_number >= 4) {
        isLifeOrQual = true;
      }
    }

    if (isLifeOrQual) {
      if (allText.includes("$") || allText.includes("\\")) {
        console.error(`FORMULA VIOLATION IN LIFE/QUAL UNIT: ${unit.id} in ${sub.name}`);
        formulaViolations++;
      }
    } else {
      // STEM units should have authentic KaTeX formulas
      if (!allText.includes("$")) {
        console.warn(`STEM unit without KaTeX formula: ${unit.id} in ${sub.name}`);
        missingKaTeXCount++;
      }
    }
  }
}

console.log("\n=======================================================");
console.log(`B.SC SEMESTER 2 COMPREHENSIVE AUDIT REPORT:`);
console.log(`Total Units Audited: ${totalUnits}`);
console.log(`Generic Fallback Units: ${genericCount}`);
console.log(`Invalid Point Counts (!= 10+10): ${invalidCounts}`);
console.log(`Formula Violations in Life/Qualitative: ${formulaViolations}`);
console.log(`STEM Units Missing KaTeX: ${missingKaTeXCount}`);
console.log("=======================================================");

if (genericCount === 0 && invalidCounts === 0 && formulaViolations === 0) {
  console.log("STATUS: ALL B.SC SEMESTER 2 UNITS 100% VERIFIED & COMPLIANT!");
} else {
  process.exit(1);
}
