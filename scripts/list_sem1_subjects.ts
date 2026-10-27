import { subjects } from "../src/lib/mock-data";

console.log("=== B.TECH SEMESTER 1 SUBJECTS ===");
const btechSem1 = subjects.filter(s => s.program === "btech" && s.semester === 1);
const btechSubMap = new Map<string, { id: string; name: string; branches: string[]; units: { id: string; title: string; num: number }[] }>();

for (const s of btechSem1) {
  if (!btechSubMap.has(s.name)) {
    btechSubMap.set(s.name, {
      id: s.id,
      name: s.name,
      branches: [s.branch],
      units: s.units.map(u => ({ id: u.id, title: u.title, num: u.unit_number }))
    });
  } else {
    btechSubMap.get(s.name)!.branches.push(s.branch);
  }
}

console.log(`Unique B.Tech Sem 1 Subjects: ${btechSubMap.size}`);
for (const [name, data] of btechSubMap.entries()) {
  console.log(`\n[${name}] (Branches: ${data.branches.join(", ")})`);
  data.units.forEach(u => console.log(`  Unit ${u.num}: ${u.title}`));
}

console.log("\n\n=== B.SC SEMESTER 1 SUBJECTS ===");
const bscSem1 = subjects.filter(s => s.program === "bsc" && s.semester === 1);
const bscSubMap = new Map<string, { id: string; name: string; branches: string[]; units: { id: string; title: string; num: number }[] }>();

for (const s of bscSem1) {
  if (!bscSubMap.has(s.name)) {
    bscSubMap.set(s.name, {
      id: s.id,
      name: s.name,
      branches: [s.branch],
      units: s.units.map(u => ({ id: u.id, title: u.title, num: u.unit_number }))
    });
  } else {
    bscSubMap.get(s.name)!.branches.push(s.branch);
  }
}

console.log(`Unique B.Sc Sem 1 Subjects: ${bscSubMap.size}`);
for (const [name, data] of bscSubMap.entries()) {
  console.log(`\n[${name}] (Branches: ${data.branches.join(", ")})`);
  data.units.forEach(u => console.log(`  Unit ${u.num}: ${u.title}`));
}
