import { subjects } from "../src/lib/mock-data";
import * as fs from "fs";

interface UnitEntry {
  program: string;
  semester: number;
  branch: string;
  subjectId: string;
  subjectName: string;
  unitNumber: number;
  unitId: string;
  unitTitle: string;
}

const allUnits: UnitEntry[] = [];

for (const s of subjects) {
  if (s.program === "btech" || s.program === "bsc") {
    for (const u of s.units) {
      allUnits.push({
        program: s.program,
        semester: s.semester,
        branch: s.branch,
        subjectId: s.id,
        subjectName: s.name,
        unitNumber: u.unit_number,
        unitId: u.id,
        unitTitle: u.title,
      });
    }
  }
}

fs.writeFileSync("scripts/all_btech_bsc_units.json", JSON.stringify(allUnits, null, 2), "utf-8");
console.log(`Exported ${allUnits.length} total unit instances to scripts/all_btech_bsc_units.json`);

// Also summarize by semester and unique subject
for (let sem = 3; sem <= 8; sem++) {
  const btechInSem = allUnits.filter(u => u.program === "btech" && u.semester === sem);
  const bscInSem = allUnits.filter(u => u.program === "bsc" && u.semester === sem);
  
  const btechUniqueSubs = new Set(btechInSem.map(u => u.subjectName));
  const bscUniqueSubs = new Set(bscInSem.map(u => u.subjectName));

  console.log(`\n--- SEMESTER ${sem} ---`);
  console.log(`B.Tech: ${btechUniqueSubs.size} unique subjects, ${btechInSem.length} unit instances.`);
  console.log(`B.Sc:   ${bscUniqueSubs.size} unique subjects, ${bscInSem.length} unit instances.`);
}
