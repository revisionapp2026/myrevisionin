import { subjects } from "../src/lib/mock-data";

const bscSem1 = subjects.filter(s => s.program === "bsc" && s.semester === 1);
const uniqueSubjects = new Map<string, typeof bscSem1[0]>();
for (const s of bscSem1) {
  if (!uniqueSubjects.has(s.name)) uniqueSubjects.set(s.name, s);
}

for (const [name, sub] of uniqueSubjects.entries()) {
  console.log(`\n"${name}":`);
  sub.units.forEach(u => console.log(`  U${u.unit_number}: "${u.title}"`));
}
