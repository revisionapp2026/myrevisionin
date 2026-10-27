import { subjects } from "../src/lib/mock-data";
const bscSem1 = subjects.filter(s => s.program === "bsc" && s.semester === 1);
for (const s of bscSem1) {
  console.log(`[${s.branch}] ${s.name} (${s.id})`);
}
