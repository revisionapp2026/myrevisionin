import { subjects } from "../src/lib/mock-data";
import { bscSem1Knowledge } from "../src/lib/content-bsc-sem1";
import { bscSem1ScienceKnowledge } from "../src/lib/content-bsc-sem1-science";
import { bscSem1LifeKnowledge } from "../src/lib/content-bsc-sem1-life";
import { bscSem1CoreKnowledge } from "../src/lib/content-bsc-sem1-core";

const allMap = {
  ...bscSem1Knowledge,
  ...bscSem1ScienceKnowledge,
  ...bscSem1LifeKnowledge,
  ...bscSem1CoreKnowledge
};

console.log("Total entries in 4 modules:", Object.keys(allMap).length);

const bscSem1 = subjects.filter(s => s.program === "bsc" && s.semester === 1);
const uniqueSubjects = new Map<string, typeof bscSem1[0]>();
for (const s of bscSem1) {
  if (!uniqueSubjects.has(s.name)) uniqueSubjects.set(s.name, s);
}

let matched = 0;
let unmatched = 0;

for (const [name, sub] of uniqueSubjects.entries()) {
  console.log(`\nSubject: "${name}"`);
  for (const u of sub.units) {
    const title = u.title.toLowerCase().trim();
    let foundKey = "";
    if (allMap[title]) {
      foundKey = title;
    } else {
      for (const k of Object.keys(allMap)) {
        if (title.includes(k) || k.includes(title)) {
          foundKey = k;
          break;
        }
      }
    }

    if (foundKey) {
      matched++;
      console.log(`  [OK] Unit ${u.unit_number}: "${u.title}" -> matched key "${foundKey}"`);
    } else {
      unmatched++;
      console.log(`  [MISSING] Unit ${u.unit_number}: "${u.title}"`);
    }
  }
}
console.log(`\n================================`);
console.log(`Total Matched: ${matched}`);
console.log(`Total Unmatched: ${unmatched}`);
