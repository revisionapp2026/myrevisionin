import { subjects } from "../src/lib/mock-data";
import { getBTechUnitPoints } from "../src/lib/content-btech";
import { getBScUnitPoints } from "../src/lib/content-bsc";

function getShingles(text: string, k: number = 3): Set<string> {
  const words = text.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(w => w.length > 2);
  const shingles = new Set<string>();
  for (let i = 0; i <= words.length - k; i++) {
    shingles.add(words.slice(i, i + k).join(" "));
  }
  return shingles;
}

function jaccardSimilarity(s1: Set<string>, s2: Set<string>): number {
  if (s1.size === 0 || s2.size === 0) return 0;
  let intersection = 0;
  for (const item of s1) {
    if (s2.has(item)) intersection++;
  }
  return intersection / (s1.size + s2.size - intersection);
}

console.log("Auditing Pairwise Similarity across Semester 2 Units (B.Tech & B.Sc)...");

const sem2Units: { id: string; subject: string; unitNumber: number; title: string; text: string; shingles: Set<string> }[] = [];

// 1. Gather all unique B.Tech Sem 2 units
const btechSem2 = subjects.filter(s => s.program === "btech" && s.semester === 2);
const uniqueBTechSubs = new Map<string, typeof btechSem2[0]>();
for (const s of btechSem2) {
  if (!uniqueBTechSubs.has(s.name)) uniqueBTechSubs.set(s.name, s);
}
for (const [name, sub] of uniqueBTechSubs.entries()) {
  for (const unit of sub.units) {
    const points = getBTechUnitPoints(unit.id);
    const fullText = points.map(p => p.content).join(" ");
    sem2Units.push({
      id: unit.id,
      subject: name,
      unitNumber: unit.unit_number,
      title: unit.title,
      text: fullText,
      shingles: getShingles(fullText),
    });
  }
}

// 2. Gather all unique B.Sc Sem 2 units
const bscSem2 = subjects.filter(s => s.program === "bsc" && s.semester === 2);
const uniqueBScSubs = new Map<string, typeof bscSem2[0]>();
for (const s of bscSem2) {
  if (!uniqueBScSubs.has(s.name)) uniqueBScSubs.set(s.name, s);
}
for (const [name, sub] of uniqueBScSubs.entries()) {
  for (const unit of sub.units) {
    const points = getBScUnitPoints(unit.id);
    const fullText = points.map(p => p.content).join(" ");
    sem2Units.push({
      id: unit.id,
      subject: name,
      unitNumber: unit.unit_number,
      title: unit.title,
      text: fullText,
      shingles: getShingles(fullText),
    });
  }
}

console.log(`Total unique Semester 2 units gathered: ${sem2Units.length}`);

let maxSim = 0;
let maxPair = ["", ""];
let violations = 0;
let comparisons = 0;

for (let i = 0; i < sem2Units.length; i++) {
  for (let j = i + 1; j < sem2Units.length; j++) {
    comparisons++;
    const u1 = sem2Units[i];
    const u2 = sem2Units[j];
    const sim = jaccardSimilarity(u1.shingles, u2.shingles);

    if (sim > maxSim) {
      maxSim = sim;
      maxPair = [`${u1.subject} (U${u1.unitNumber}: ${u1.title})`, `${u2.subject} (U${u2.unitNumber}: ${u2.title})`];
    }

    if (sim >= 0.40) {
      console.error(`SIMILARITY VIOLATION (>= 40%): ${(sim * 100).toFixed(2)}% between:`);
      console.error(`  - ${u1.id} [${u1.subject}]`);
      console.error(`  - ${u2.id} [${u2.subject}]`);
      violations++;
    }
  }
}

console.log(`\n========================================`);
console.log(`Total pairwise comparisons: ${comparisons}`);
console.log(`Maximum pairwise similarity found: ${(maxSim * 100).toFixed(2)}%`);
console.log(`Between:\n  1. ${maxPair[0]}\n  2. ${maxPair[1]}`);
console.log(`Violations (>= 40%): ${violations}`);

if (violations === 0 && maxSim < 0.40) {
  console.log("\nSTATUS: 100% COMPLIANT! All pairwise similarities are strictly below 40%.");
} else {
  console.error("\nSTATUS: FAILED SIMILARITY AUDIT!");
  process.exit(1);
}
