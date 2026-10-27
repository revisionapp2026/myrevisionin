import { subjects } from "../src/lib/mock-data";

const bscSem2 = subjects.filter(s => s.program === "bsc" && s.semester === 2);
const uniqueSubs = new Map<string, typeof bscSem2[0]>();
for (const s of bscSem2) {
  if (!uniqueSubs.has(s.name)) uniqueSubs.set(s.name, s);
}

console.log(`Total Unique B.Sc Sem 2 Subjects: ${uniqueSubs.size}`);
let unitCount = 0;
for (const [name, sub] of uniqueSubs.entries()) {
  console.log(`\nSubject: "${name}" [${sub.branch}] (${sub.units.length} units)`);
  sub.units.forEach(u => {
    unitCount++;
    console.log(`  U${u.unit_number}: "${u.title}" (id: ${u.id})`);
  });
}
console.log(`\nTotal Units across unique subjects: ${unitCount}`);
