import { subjects } from "../src/lib/mock-data";
import { getBScUnitPoints } from "../src/lib/content-bsc";

const bscSem1 = subjects.filter(s => s.program === "bsc" && s.semester === 1);
const uniqueSubjects = new Map<string, typeof bscSem1[0]>();
for (const s of bscSem1) {
  if (!uniqueSubjects.has(s.name)) {
    uniqueSubjects.set(s.name, s);
  }
}

console.log(`Auditing current state of all ${uniqueSubjects.size} B.Sc Semester 1 subjects...`);

const genericSignatures = [
  "Theoretical Foundations of",
  "Foundational Biological Principle of",
  "Core Conceptual Foundations of",
  "Constitutive Equations & State Relations",
  "primary analytical framework",
];

let totalUnits = 0;
let genericUnits = 0;
const unitFirstHighlights = new Map<string, string>();
let duplicates = 0;

for (const [name, sub] of uniqueSubjects.entries()) {
  console.log(`\nSubject: "${name}"`);
  for (const unit of sub.units) {
    totalUnits++;
    const points = getBScUnitPoints(unit.id);
    const hl = points.filter(p => p.kind === "highlight");
    const kp = points.filter(p => p.kind === "bookmark");
    const firstHl = hl[0]?.content || "";

    const isGeneric = genericSignatures.some(sig => firstHl.includes(sig));
    if (isGeneric) {
      genericUnits++;
      console.log(`  ❌ Unit ${unit.unit_number}: "${unit.title}" -> GENERIC!`);
    } else {
      console.log(`  ✅ Unit ${unit.unit_number}: "${unit.title}" (HL: ${hl.length}, KP: ${kp.length}) -> "${firstHl.slice(0, 60)}..."`);
    }

    if (unitFirstHighlights.has(firstHl)) {
      duplicates++;
      console.log(`     ⚠️ DUPLICATE with "${unitFirstHighlights.get(firstHl)}"`);
    } else {
      unitFirstHighlights.set(firstHl, `${name} U${unit.unit_number}`);
    }
  }
}

console.log("\n================ SUMMARY ================");
console.log(`Total Units: ${totalUnits}`);
console.log(`Generic Units: ${genericUnits}`);
console.log(`Duplicate Units: ${duplicates}`);
