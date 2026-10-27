import { subjects } from "../src/lib/mock-data";

const btech = subjects.filter(s => s.program === "btech" && s.semester === 2);
const map = new Map();
btech.forEach(s => { if (!map.has(s.name)) map.set(s.name, s); });
for (const [name, s] of map.entries()) {
  console.log(`\nSubject: "${name}"`);
  s.units.forEach(u => console.log(`  U${u.unit_number}: "${u.title}" (id: ${u.id})`));
}
