import { subjects } from "../src/lib/mock-data";

console.log("=== SEMESTER INVENTORY FOR B.TECH & B.SC ===");

for (const program of ["btech", "bsc"]) {
  console.log(`\n=================== ${program.toUpperCase()} ===================`);
  for (let sem = 1; sem <= 8; sem++) {
    const list = subjects.filter(s => s.program === program && s.semester === sem);
    const uniqueNames = new Set(list.map(s => s.name));
    let totalUnits = 0;
    list.forEach(s => totalUnits += s.units.length);
    console.log(`Sem ${sem}: ${list.length} instances, ${uniqueNames.size} unique subjects, ${totalUnits} total unit instances.`);
  }
}
