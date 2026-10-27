import { subjects } from "../src/lib/mock-data";

console.log("=== B.TECH SEMESTER 2 SUBJECTS & UNITS ===");
const btechSem2 = subjects.filter(s => s.program === "btech" && s.semester === 2);
const uniqueBTechSem2 = new Map<string, typeof btechSem2[0]>();
for (const s of btechSem2) {
  if (!uniqueBTechSem2.has(s.name)) uniqueBTechSem2.set(s.name, s);
}
console.log(`Unique B.Tech Sem 2 Subjects (${uniqueBTechSem2.size}):`);
for (const [name, sub] of uniqueBTechSem2.entries()) {
  console.log(`\nSubject: "${name}" (${sub.branch || "all"})`);
  sub.units.forEach(u => console.log(`  U${u.unit_number}: "${u.title}" (id: ${u.id})`));
}

console.log("\n\n=== B.SC SEMESTER 2 SUBJECTS & UNITS ===");
const bscSem2 = subjects.filter(s => s.program === "bsc" && s.semester === 2);
const uniqueBScSem2 = new Map<string, typeof bscSem2[0]>();
for (const s of bscSem2) {
  if (!uniqueBScSem2.has(s.name)) uniqueBScSem2.set(s.name, s);
}
console.log(`Unique B.Sc Sem 2 Subjects (${uniqueBScSem2.size}):`);
for (const [name, sub] of uniqueBScSem2.entries()) {
  console.log(`\nSubject: "${name}" (${sub.branch || "all"})`);
  sub.units.forEach(u => console.log(`  U${u.unit_number}: "${u.title}" (id: ${u.id})`));
}
