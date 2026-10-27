import { subjects } from "../src/lib/mock-data";

const bscSem2 = subjects.filter(s => s.program === "bsc" && s.semester === 2);
const uniqueSubs = new Map<string, typeof bscSem2[0]>();
for (const s of bscSem2) {
  if (!uniqueSubs.has(s.name)) uniqueSubs.set(s.name, s);
}

const mathCs = [
  "Real Analysis",
  "Problem Solving",
  "Data Structures",
  "Differential Equations & Geometry",
  "Differential Equations & Probability",
  "Data Structures using C",
  "Data Structures & Algorithms",
  "Statistics II / Database Basics",
  "Data Structures Lab",
  "DSA Lab"
];

const physChem = [
  "Waves & Optics",
  "Physics II: Waves & Optics / Statistics II",
  "Physics II / Statistics II",
  "Physics Lab II",
  "Physical & General Chemistry – II",
  "Physical Chemistry – II",
  "Chemistry II / Programming",
  "Chemistry Lab II (Qualitative Analysis)",
  "Chemistry Lab II",
  "Mathematics II / Botany II"
];

console.log("Group 3 Subjects:");
for (const [name, sub] of uniqueSubs.entries()) {
  if (!mathCs.includes(name) && !physChem.includes(name)) {
    console.log(`\nSubject: "${name}" [${sub.branch}] (${sub.units.length} units)`);
    sub.units.forEach(u => console.log(`  U${u.unit_number}: "${u.title}" (id: ${u.id})`));
  }
}
