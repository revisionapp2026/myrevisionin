import { subjects } from "../src/lib/mock-data";
import { bscSem2Knowledge } from "../src/lib/content-bsc-sem2";

const bscSem2 = subjects.filter(s => s.program === "bsc" && s.semester === 2);
const uniqueSubs = new Map<string, typeof bscSem2[0]>();
for (const s of bscSem2) {
  if (!uniqueSubs.has(s.name)) uniqueSubs.set(s.name, s);
}

console.log(`Found ${uniqueSubs.size} unique B.Sc Sem 2 subjects.`);

// Let's create the routing map from subject + unitNumber to bscSem2Knowledge key:
export function getBscSem2Key(subjectName: string, unitNumber: number): string | null {
  const s = subjectName.toLowerCase().trim();
  
  // Group 1: Math & CS (10 subjects)
  if (s === "real analysis") {
    const keys = ["bsc-ra: sequences", "bsc-ra: series", "bsc-ra: limits & continuity", "bsc-ra: differentiation", "bsc-ra: integration"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("differential equations & geometry")) {
    const keys = ["bsc-deg: first order odes", "bsc-deg: higher order odes", "bsc-deg: laplace transforms", "bsc-deg: 2d geometry", "bsc-deg: 3d geometry"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("differential equations & probability")) {
    const keys = ["bsc-dep: odes", "bsc-dep: laplace transforms", "bsc-dep: probability", "bsc-dep: random variables", "bsc-dep: distributions"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "problem solving") {
    const keys = ["bsc-ps: core concepts & principles", "bsc-ps: theoretical formulations & modeling", "bsc-ps: analytical & computational methods", "bsc-ps: practical engineering & industrial applications", "bsc-ps: modern trends, case studies & problem solving"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("data structures using c")) {
    const keys = ["bsc-dsc: arrays & linked lists", "bsc-dsc: stacks & queues", "bsc-dsc: trees", "bsc-dsc: sorting & searching", "bsc-dsc: hashing"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("data structures & algorithms")) {
    const keys = ["bsc-dsa: lists & arrays", "bsc-dsa: stacks & queues", "bsc-dsa: trees", "bsc-dsa: sorting", "bsc-dsa: searching & hashing"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "data structures") {
    const keys = ["bsc-dsm: arrays & lists", "bsc-dsm: stacks & queues", "bsc-dsm: trees", "bsc-dsm: sorting", "bsc-dsm: searching"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("statistics ii / database basics")) {
    const keys = ["bsc-sdb: sampling", "bsc-sdb: estimation", "bsc-sdb: hypothesis testing", "bsc-sdb: correlation", "bsc-sdb: regression"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "data structures lab") {
    const keys = ["bsc-dslab: safety & instrumentation", "bsc-dslab: standard preparations", "bsc-dslab: experimental procedures", "bsc-dslab: data verification", "bsc-dslab: record & viva"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "dsa lab") {
    const keys = ["bsc-dsalab: safety & instrumentation", "bsc-dsalab: standard preparations", "bsc-dsalab: experimental procedures", "bsc-dsalab: data verification", "bsc-dsalab: record & viva"];
    return keys[unitNumber - 1] || null;
  }

  // Group 2: Physical Sciences & Chemistry (10 subjects)
  if (s === "waves & optics") {
    const keys = ["bsc-ph-wo: wave equation", "bsc-ph-wo: superposition", "bsc-ph-wo: interference", "bsc-ph-wo: diffraction", "bsc-ph-wo: polarization"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("physics ii: waves & optics / statistics ii")) {
    const keys = ["bsc-phcs: oscillations", "bsc-phcs: wave optics", "bsc-phcs: interference", "bsc-phcs: diffraction", "bsc-phcs: polarization"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("physics ii / statistics ii")) {
    const keys = ["bsc-phm: oscillations", "bsc-phm: wave optics", "bsc-phm: interference", "bsc-phm: diffraction", "bsc-phm: polarization"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "physics lab ii") {
    const keys = ["bsc-phlab: safety & instrumentation", "bsc-phlab: standard preparations", "bsc-phlab: experimental procedures", "bsc-phlab: data verification", "bsc-phlab: record & viva"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("physical & general chemistry – ii") || s.includes("physical & general chemistry - ii")) {
    const keys = ["bsc-chls: thermodynamics", "bsc-chls: chemical equilibrium", "bsc-chls: solutions", "bsc-chls: electrochemistry", "bsc-chls: reaction kinetics"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("physical chemistry – ii") || s.includes("physical chemistry - ii")) {
    const keys = ["bsc-chbt: thermodynamics", "bsc-chbt: equilibrium", "bsc-chbt: solutions", "bsc-chbt: electrochemistry", "bsc-chbt: kinetics"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("chemistry ii / programming")) {
    const keys = ["bsc-chph: thermodynamics", "bsc-chph: equilibrium", "bsc-chph: solutions", "bsc-chph: electrochemistry", "bsc-chph: kinetics"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("chemistry lab ii (qualitative analysis)")) {
    const keys = ["bsc-chlab-qa: safety & instrumentation", "bsc-chlab-qa: standard preparations", "bsc-chlab-qa: experimental procedures", "bsc-chlab-qa: data verification", "bsc-chlab-qa: record & viva"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "chemistry lab ii") {
    const keys = ["bsc-chlab-bt: safety & instrumentation", "bsc-chlab-bt: standard preparations", "bsc-chlab-bt: experimental procedures", "bsc-chlab-bt: data verification", "bsc-chlab-bt: record & viva"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("mathematics ii / botany ii")) {
    const keys = ["bsc-chm: odes", "bsc-chm: laplace transforms", "bsc-chm: 3d geometry", "bsc-chm: plant anatomy", "bsc-chm: physiology"];
    return keys[unitNumber - 1] || null;
  }

  // Group 3: Life Sciences, Biotechnology & Environmental Science (8 subjects)
  if (s.includes("microbial diversity of lower plants – ii") || s.includes("microbial diversity of lower plants - ii")) {
    const keys = ["bsc-bot-mdlp: pteridophytes", "bsc-bot-mdlp: gymnosperms", "bsc-bot-mdlp: paleobotany", "bsc-bot-mdlp: plant diversity", "bsc-bot-mdlp: economic importance"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "botany lab ii") {
    const keys = ["bsc-botlab: safety & instrumentation", "bsc-botlab: standard preparations", "bsc-botlab: experimental procedures", "bsc-botlab: data verification", "bsc-botlab: record & viva"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("biology of chordates, embryology & ecology") || s.includes("biology of chordates, embryology and ecology")) {
    const keys = ["bsc-zoo-bce: protochordates", "bsc-zoo-bce: vertebrates", "bsc-zoo-bce: embryology", "bsc-zoo-bce: ecology", "bsc-zoo-bce: zoogeography"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "zoology lab ii") {
    const keys = ["bsc-zoolab: safety & instrumentation", "bsc-zoolab: standard preparations", "bsc-zoolab: experimental procedures", "bsc-zoolab: data verification", "bsc-zoolab: record & viva"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("microbial physiology & genetics") || s.includes("microbial physiology and genetics")) {
    const keys = ["bsc-micro-mpg: microbial growth", "bsc-micro-mpg: metabolism", "bsc-micro-mpg: bacterial genetics", "bsc-micro-mpg: transformation", "bsc-micro-mpg: conjugation"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "microbiology lab ii") {
    const keys = ["bsc-microlab: safety & instrumentation", "bsc-microlab: standard preparations", "bsc-microlab: experimental procedures", "bsc-microlab: data verification", "bsc-microlab: record & viva"];
    return keys[unitNumber - 1] || null;
  }
  if (s.includes("botany ii / zoology ii")) {
    const keys = ["bsc-botzoo: plant anatomy", "bsc-botzoo: plant physiology", "bsc-botzoo: animal diversity", "bsc-botzoo: comparative anatomy", "bsc-botzoo: ecology"];
    return keys[unitNumber - 1] || null;
  }
  if (s === "environmental science") {
    const keys = ["bsc-es: ecosystems", "bsc-es: natural resources", "bsc-es: pollution", "bsc-es: biodiversity", "bsc-es: sustainability"];
    return keys[unitNumber - 1] || null;
  }

  return null;
}

let mappedCount = 0;
let missing = 0;

for (const [name, sub] of uniqueSubs.entries()) {
  for (let u = 1; u <= sub.units.length; u++) {
    const key = getBscSem2Key(name, u);
    if (!key) {
      console.error(`MISSING KEY: ${name} Unit ${u}`);
      missing++;
    } else if (!bscSem2Knowledge[key]) {
      console.error(`KEY NOT IN KNOWLEDGE BASE: ${key} for ${name} Unit ${u}`);
      missing++;
    } else {
      mappedCount++;
    }
  }
}

console.log(`\nMapping Results:`);
console.log(`Successfully mapped: ${mappedCount} / 140 units.`);
console.log(`Missing / invalid keys: ${missing}`);
if (missing === 0) {
  console.log("PERFECT 140/140 MAPPING ACHIEVED!");
}
