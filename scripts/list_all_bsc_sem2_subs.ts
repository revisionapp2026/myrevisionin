import { subjects } from "../src/lib/mock-data";

const bscSem2 = subjects.filter(s => s.program === "bsc" && s.semester === 2);
const uniqueSubs = new Map<string, typeof bscSem2[0]>();
for (const s of bscSem2) {
  if (!uniqueSubs.has(s.name)) uniqueSubs.set(s.name, s);
}

let idx = 1;
for (const [name, sub] of uniqueSubs.entries()) {
  console.log(`${idx++}. [${sub.branch}] "${name}" (ID prefix: ${sub.id})`);
}
