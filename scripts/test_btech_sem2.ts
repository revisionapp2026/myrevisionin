import { subjects } from "../src/lib/mock-data";
import { getBTechUnitPoints } from "../src/lib/content-btech";

const btechSem2 = subjects.filter(s => s.program === "btech" && s.semester === 2);
const uniqueSubs = new Map<string, typeof btechSem2[0]>();
btechSem2.forEach(s => { if (!uniqueSubs.has(s.name)) uniqueSubs.set(s.name, s); });

console.log(`Auditing ${uniqueSubs.size} B.Tech Sem 2 Subjects (40 Units total)...`);

let totalUnits = 0;
let genericCount = 0;
const unitContents = new Map<string, string>();
const duplicates: string[] = [];

for (const [subName, sub] of uniqueSubs.entries()) {
  console.log(`\n--- Subject: ${subName} ---`);
  for (const unit of sub.units) {
    totalUnits++;
    const points = getBTechUnitPoints(unit.id);
    const highlights = points.filter(p => p.kind === "highlight");
    const bookmarks = points.filter(p => p.kind === "bookmark");
    
    // Check points count
    if (highlights.length !== 10 || bookmarks.length !== 10) {
      console.error(`❌ Unit ${unit.id} has invalid count: ${highlights.length} HL, ${bookmarks.length} BM`);
    }

    // Check for generic template strings
    const firstHL = highlights[0]?.content || "";
    const isGeneric = firstHL.includes("Foundational Scientific Principle") || 
                      firstHL.includes("Core Conceptual Foundations") ||
                      firstHL.includes("Foundational Biological Principle of");
    
    if (isGeneric) {
      genericCount++;
      console.error(`❌ Unit ${unit.id} ("${unit.title}") is using GENERIC FALLBACK!`);
    }

    // Check formula presence
    const hasLatex = points.some(p => p.content.includes("$") || p.content.includes("\\"));
    const isBio = subName.toLowerCase().includes("biology");
    if (isBio && hasLatex) {
      console.warn(`⚠️ Unit ${unit.id} is Biology but contains LaTeX formulas: should be pure qualitative.`);
    } else if (!isBio && !hasLatex) {
      console.warn(`⚠️ Unit ${unit.id} is STEM (${subName}) but has no LaTeX formulas!`);
    }

    // Check duplicate content
    const fullText = points.map(p => p.content).join(" ");
    for (const [prevId, prevText] of unitContents.entries()) {
      if (prevText === fullText) {
        duplicates.push(`${unit.id} is identical to ${prevId}`);
      }
    }
    unitContents.set(unit.id, fullText);

    console.log(`  U${unit.unit_number}: "${unit.title}" -> ${highlights.length} HL, ${bookmarks.length} BM, LaTeX: ${hasLatex ? "Yes" : "No"}`);
  }
}

console.log("\n================ SUMMARY ================");
console.log(`Total Units Checked: ${totalUnits}`);
console.log(`Generic Units: ${genericCount}`);
console.log(`Duplicate Units: ${duplicates.length}`);
if (duplicates.length > 0) {
  duplicates.forEach(d => console.log(`  - ${d}`));
}
if (genericCount === 0 && duplicates.length === 0 && totalUnits === 40) {
  console.log("✅ B.TECH SEMESTER 2 STATUS: 100% PERFECT!");
} else {
  console.error("❌ B.TECH SEMESTER 2 HAS ISSUES!");
  process.exit(1);
}
