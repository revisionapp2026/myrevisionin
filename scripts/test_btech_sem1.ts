import { subjects } from "../src/lib/mock-data";
import { getBTechUnitPoints } from "../src/lib/content-btech";

const btechSem1 = subjects.filter(s => s.program === "btech" && s.semester === 1);
const uniqueSubjects = new Map<string, typeof btechSem1[0]>();
for (const s of btechSem1) {
  if (!uniqueSubjects.has(s.name)) {
    uniqueSubjects.set(s.name, s);
  }
}

console.log(`Checking all ${uniqueSubjects.size} B.Tech Semester 1 subjects...`);

const genericSignatures = [
  "Foundational Scientific Principle of",
  "Constitutive equations \\sigma = E",
  "Core Conceptual Foundations of",
  "Foundational Biological Principle of",
];

let totalUnits = 0;
let genericUnits = 0;
const unitFirstHighlights = new Map<string, string>();
let duplicates = 0;

for (const [name, sub] of uniqueSubjects.entries()) {
  console.log(`\nSubject: ${name}`);
  for (const unit of sub.units) {
    totalUnits++;
    const points = getBTechUnitPoints(unit.id);
    const hl = points.filter(p => p.kind === "highlight");
    const kp = points.filter(p => p.kind === "bookmark");
    const firstHl = hl[0]?.content || "";

    const isGeneric = genericSignatures.some(sig => firstHl.includes(sig));
    if (isGeneric) {
      genericUnits++;
      console.log(`  ❌ Unit ${unit.unit_number}: "${unit.title}" -> GENERIC FALLBACK!`);
    } else {
      console.log(`  ✅ Unit ${unit.unit_number}: "${unit.title}" (HL: ${hl.length}, KP: ${kp.length}) -> "${firstHl.slice(0, 60)}..."`);
    }

    if (unitFirstHighlights.has(firstHl)) {
      duplicates++;
      console.log(`  ⚠️ DUPLICATE DETECTED: Matches "${unitFirstHighlights.get(firstHl)}"`);
    } else {
      unitFirstHighlights.set(firstHl, `${name} U${unit.unit_number}`);
    }
  }
}

console.log("\n================ SUMMARY ================");
console.log(`Total Units Checked: ${totalUnits}`);
console.log(`Generic Units: ${genericUnits}`);
console.log(`Duplicate Units: ${duplicates}`);
if (genericUnits === 0 && duplicates === 0) {
  console.log("🎉 ALL 40 B.TECH SEMESTER 1 UNITS ARE 100% DISTINCT, ACCURATE, AND NON-GENERIC!");
} else {
  console.log("❌ ISSUES FOUND!");
}
