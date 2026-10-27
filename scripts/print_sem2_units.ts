import { subjects } from "../src/lib/mock-data";

const bsc = subjects.filter(s => s.program === "bsc" && s.semester === 2);
const map = new Map<string, typeof bsc[0]>();
bsc.forEach(s => { if (!map.has(s.name)) map.set(s.name, s); });

for (const [name, s] of map.entries()) {
  console.log(`\n=== Subject: "${name}" (${s.branch}) ===`);
  s.units.forEach(u => console.log(`  U${u.unit_number}: "${u.title}"`));
}
