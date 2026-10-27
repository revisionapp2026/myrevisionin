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

console.log("Auditing Pairwise Similarity across Semester 1 Units (B.Tech & B.Sc)...");

const sem1Units: { id: string; subject: string; unitNumber: number; title: string; text: string; shingles: Set<string> }[] = [];

// 1. Gather all unique B.Tech Sem 1 units
const btechSem1 = subjects.filter(s => s.program === "btech" && s.semester === 1);
const uniqueBTechSubs = new Map<string, typeof btechSem1[0]>();
for (const s of btechSem1) {
  if (!uniqueBTechSubs.has(s.name)) uniqueBTechSubs.set(s.name, s);
}
for (const [name, sub] of uniqueBTechSubs.entries()) {
  for (const unit of sub.units) {
    const points = getBTechUnitPoints(unit.id);
    const fullText = points.map(p => p.content).join(" ");
    sem1Units.push({
      id: unit.id,
      subject: name,
      unitNumber: unit.unit_number,
      title: unit.title,
      text: fullText,
      shingles: getShingles(fullText),
    });
  }
}

// 2. Gather all unique B.Sc Sem 1 units
const bscSem1 = subjects.filter(s => s.program === "bsc" && s.semester === 1);
const uniqueBScSubs = new Map<string, typeof bscSem1[0]>();
for (const s of bscSem1) {
  if (!uniqueBScSubs.has(s.name)) uniqueBScSubs.set(s.name, s);
}
for (const [name, sub] of uniqueBScSubs.entries()) {
  for (const unit of sub.units) {
    const points = getBScUnitPoints(unit.id);
    const fullText = points.map(p => p.content).join(" ");
    sem1Units.push({
      id: unit.id,
      subject: name,
      unitNumber: unit.unit_number,
      title: unit.title,
      text: fullText,
      shingles: getShingles(fullText),
    });
  }
}

console.log(`Total unique units evaluated: ${sem1Units.length} (${uniqueBTechSubs.size * 5} B.Tech + ${uniqueBScSubs.size * 5} B.Sc)`);

let maxSim = 0;
let highestPair = { u1: "", u2: "", sim: 0 };
let overThreshold = 0;

for (let i = 0; i < sem1Units.length; i++) {
  for (let j = i + 1; j < sem1Units.length; j++) {
    const u1 = sem1Units[i]!;
    const u2 = sem1Units[j]!;
    const sim = jaccardSimilarity(u1.shingles, u2.shingles);
    if (sim > maxSim) {
      maxSim = sim;
      highestPair = {
        u1: `${u1.subject} U${u1.unitNumber} ("${u1.title}")`,
        u2: `${u2.subject} U${u2.unitNumber} ("${u2.title}")`,
        sim,
      };
    }
    if (sim > 0.40) {
      overThreshold++;
      console.log(`⚠️ Similarity > 40%: ${(sim * 100).toFixed(1)}% between ${u1.subject} U${u1.unitNumber} and ${u2.subject} U${u2.unitNumber}`);
    }
  }
}

console.log("\n================ PAIRWISE SIMILARITY REPORT ================");
console.log(`Total Unit Pairs Evaluated: ${(sem1Units.length * (sem1Units.length - 1)) / 2}`);
console.log(`Pairs with >40% Similarity: ${overThreshold}`);
console.log(`Maximum Observed Pairwise Similarity: ${(maxSim * 100).toFixed(2)}%`);
console.log(`Highest Pair: ${highestPair.u1} <--> ${highestPair.u2}`);
if (overThreshold === 0) {
  console.log("✅ SUCCESS: Strictly 0 pairs exceed 40% similarity! All units are unique and distinct.");
} else {
  console.log("❌ FAILURE: Units exceed 40% similarity threshold.");
}
