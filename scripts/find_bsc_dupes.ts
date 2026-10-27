import { subjects } from "../src/lib/mock-data";
import { getBScUnitPoints } from "../src/lib/content-bsc";

const bscSem1 = subjects.filter(s => s.program === "bsc" && s.semester === 1);
const uniqueSubjects = new Map<string, typeof bscSem1[0]>();
for (const s of bscSem1) {
  if (!uniqueSubjects.has(s.name)) uniqueSubjects.set(s.name, s);
}

const seen = new Map<string, string>();
const dupes: { sub1: string; sub2: string; u1: number; u2: number; title: string }[] = [];

for (const [name, sub] of uniqueSubjects.entries()) {
  for (const unit of sub.units) {
    const points = getBScUnitPoints(unit.id);
    const firstHl = points[0]?.content || "";
    if (seen.has(firstHl)) {
      const prev = seen.get(firstHl)!;
      dupes.push({ sub1: prev, sub2: `${name} U${unit.unit_number}`, u1: 0, u2: unit.unit_number, title: unit.title });
    } else {
      seen.set(firstHl, `${name} U${unit.unit_number}`);
    }
  }
}

console.log(`Found ${dupes.length} duplicates:`);
dupes.forEach(d => console.log(`  ${d.sub2} ("${d.title}") === ${d.sub1}`));
