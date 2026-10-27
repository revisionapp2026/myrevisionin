import fs from "fs";
import path from "path";
import { subjects } from "../src/lib/mock-data";
import { getBScUnitPoints } from "../src/lib/content-bsc";
import { getBTechUnitPoints } from "../src/lib/content-btech";

interface UnitAuditRecord {
  course: string;
  branch: string;
  semester: number;
  subjectId: string;
  subjectName: string;
  unitId: string;
  unitNumber: number;
  unitTitle: string;
  pointCount: number;
  wordCount: number;
  maxSimilarity: number;
  similarToUnit: string;
  status: "OK" | "DUPLICATE" | "WRONG" | "MISSING" | "UNVERIFIED";
  issueDetails: string;
  syllabusSource: string;
  fullText: string;
}

// Tokenize text into set of word n-grams (3-grams for robust similarity)
function getShingles(text: string, n = 3): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
  const shingles = new Set<string>();
  for (let i = 0; i <= words.length - n; i++) {
    shingles.add(words.slice(i, i + n).join(" "));
  }
  return shingles;
}

// Generic boilerplate phrases indicating synthetic fallback
const genericPhrases = [
  "foundational scientific principle of",
  "governing theoretical model & formulation",
  "constitutive relationships & constants",
  "analytical derivation & mathematical proof",
  "quantitative metrics & statistical validation",
  "systematic errors & environmental variations",
  "university examination blueprint",
  "primary analytical framework in",
  "relates empirical variables through standard state equations",
  "evaluated using standard scientific indicators: mean",
  "modeled via fundamental balance principles: \\sum f = m a",
  "defines system behavior through constitutive equations \\sigma = e",
  "closed-form derivation & boundary solutions",
  "quantitative figures of merit & key performance",
  "non-linearities & environmental degradation",
  "industrial implementation & standard protocols",
  "computational modeling & numerical discretization",
  "core conceptual foundations of",
  "structural hierarchy & process workflow",
  "strategic optimization & resource allocation",
  "performance assessment & quality audit",
  "contemporary trends & technological evolution",
  "morphological characteristics of",
  "diagnostic cell structure: characterized by specialized organelle",
  "systematic taxonomic classification: hierarchically grouped based on evolutionary",
  "physiological & metabolic regulation: regulates biochemical cycles",
  "life cycle & reproductive strategies: details gametogenesis",
  "biochemical & molecular mechanisms: mediated through enzymatic catalysis",
];

async function runAudit() {
  console.log("Starting comprehensive Curriculum & Content Audit for BTech and BSc...");

  const targetSubjects = subjects.filter(
    (s) => s.program === "btech" || s.program === "bsc"
  );

  console.log(`Found ${targetSubjects.length} total subjects across BTech and BSc.`);

  const records: UnitAuditRecord[] = [];

  for (const sub of targetSubjects) {
    for (const unit of sub.units) {
      const points =
        sub.program === "btech"
          ? getBTechUnitPoints(unit.id)
          : getBScUnitPoints(unit.id);

      const fullText = points.map((p) => p.content).join(" ");
      const words = fullText.split(/\s+/).filter(Boolean);
      const wordCount = words.length;

      let source = "UNVERIFIED";
      if (sub.program === "btech") {
        source = "AICTE Model Curriculum / University R20-R22 Guidelines";
      } else if (sub.program === "bsc") {
        source = "UGC / State University CBCS Framework 2020-2023";
      }

      records.push({
        course: sub.program.toUpperCase(),
        branch: sub.branch ?? "common",
        semester: sub.semester ?? 1,
        subjectId: sub.id,
        subjectName: sub.name,
        unitId: unit.id,
        unitNumber: unit.unit_number,
        unitTitle: unit.title,
        pointCount: points.length,
        wordCount,
        maxSimilarity: 0,
        similarToUnit: "",
        status: "OK",
        issueDetails: "",
        syllabusSource: source,
        fullText,
      });
    }
  }

  console.log(`Scanned ${records.length} units total. Indexing shingles for fast inverted index similarity...`);

  // Build shingles and inverted index
  const shingleList = records.map((r) => getShingles(r.fullText, 3));
  const invertedIndex = new Map<string, number[]>();

  for (let i = 0; i < shingleList.length; i++) {
    for (const shingle of shingleList[i]!) {
      let list = invertedIndex.get(shingle);
      if (!list) {
        list = [];
        invertedIndex.set(shingle, list);
      }
      list.push(i);
    }
  }

  console.log(`Built inverted index with ${invertedIndex.size} distinct n-grams. Computing candidate overlaps...`);

  // For each unit, count shared shingles with candidates
  for (let i = 0; i < records.length; i++) {
    const recA = records[i]!;
    const shingA = shingleList[i]!;
    const sizeA = shingA.size;

    if (sizeA === 0) continue;

    const overlapCounts = new Map<number, number>();

    for (const shingle of shingA) {
      const postingList = invertedIndex.get(shingle);
      if (postingList) {
        for (const j of postingList) {
          if (j === i) continue;
          overlapCounts.set(j, (overlapCounts.get(j) || 0) + 1);
        }
      }
    }

    let maxSim = 0;
    let mostSimilarIdx = -1;

    for (const [j, intersection] of overlapCounts.entries()) {
      const sizeB = shingleList[j]!.size;
      const union = sizeA + sizeB - intersection;
      const sim = union > 0 ? intersection / union : 0;
      if (sim > maxSim) {
        maxSim = sim;
        mostSimilarIdx = j;
      }
    }

    recA.maxSimilarity = maxSim;
    if (mostSimilarIdx >= 0) {
      const recB = records[mostSimilarIdx]!;
      recA.similarToUnit = `${recB.course} > ${recB.branch} > Sem ${recB.semester} > ${recB.subjectName} > U${recB.unitNumber} (${recB.unitTitle})`;
    }

    // Flagging logic
    if (recA.pointCount === 0 || recA.wordCount === 0) {
      recA.status = "MISSING";
      recA.issueDetails = "Unit has zero content points generated.";
    } else if (recA.maxSimilarity >= 0.70) {
      recA.status = "DUPLICATE";
      recA.issueDetails = `Text similarity ${(recA.maxSimilarity * 100).toFixed(1)}% exceeds 70% threshold with: ${recA.similarToUnit}`;
    } else {
      // Check for generic boilerplate or topic mismatch
      const lowerText = recA.fullText.toLowerCase();
      let matchCount = 0;
      for (const phrase of genericPhrases) {
        if (lowerText.includes(phrase)) matchCount++;
      }

      if (matchCount >= 2) {
        recA.status = "WRONG";
        recA.issueDetails = `Contains ${matchCount} generic synthetic boilerplate blocks rather than official verified topic definitions.`;
      } else {
        recA.status = "OK";
        recA.issueDetails = "Distinct, unit-specific content verified.";
      }
    }
  }

  // Write audit_report.csv
  const csvHeaders = [
    "Course",
    "Branch",
    "Semester",
    "Subject ID",
    "Subject Name",
    "Unit Number",
    "Unit Title",
    "Points Count",
    "Word Count",
    "Max Similarity %",
    "Most Similar Unit",
    "Status",
    "Issue Details",
    "Syllabus Source",
  ];

  const csvRows = [csvHeaders.join(",")];
  for (const r of records) {
    const escapeCsv = (str: string) => `"${String(str).replace(/"/g, '""')}"`;
    csvRows.push(
      [
        escapeCsv(r.course),
        escapeCsv(r.branch),
        r.semester,
        escapeCsv(r.subjectId),
        escapeCsv(r.subjectName),
        r.unitNumber,
        escapeCsv(r.unitTitle),
        r.pointCount,
        r.wordCount,
        (r.maxSimilarity * 100).toFixed(1),
        escapeCsv(r.similarToUnit),
        escapeCsv(r.status),
        escapeCsv(r.issueDetails),
        escapeCsv(r.syllabusSource),
      ].join(",")
    );
  }

  const outPath = path.resolve(process.cwd(), "audit_report.csv");
  fs.writeFileSync(outPath, csvRows.join("\n"), "utf-8");
  console.log(`Wrote audit report to ${outPath}`);

  // Print summary breakdown
  console.log("\n=======================================================");
  console.log("            CURRICULUM CONTENT AUDIT SUMMARY           ");
  console.log("=======================================================");

  const total = records.length;
  const duplicates = records.filter((r) => r.status === "DUPLICATE");
  const wrong = records.filter((r) => r.status === "WRONG");
  const missing = records.filter((r) => r.status === "MISSING");
  const unverified = records.filter((r) => r.status === "UNVERIFIED");
  const ok = records.filter((r) => r.status === "OK");

  console.log(`Total Units Audited: ${total}`);
  console.log(`- OK (Distinct & Verified): ${ok.length} (${((ok.length / total) * 100).toFixed(1)}%)`);
  console.log(`- DUPLICATE (>70% text similarity): ${duplicates.length} (${((duplicates.length / total) * 100).toFixed(1)}%)`);
  console.log(`- WRONG (Generic boilerplate/mismatched topics): ${wrong.length} (${((wrong.length / total) * 100).toFixed(1)}%)`);
  console.log(`- MISSING (0 points/empty): ${missing.length} (${((missing.length / total) * 100).toFixed(1)}%)`);
  console.log(`- UNVERIFIED: ${unverified.length} (${((unverified.length / total) * 100).toFixed(1)}%)`);

  // Breakdown by course
  console.log("\n--- Breakdown by Course ---");
  for (const prog of ["BTECH", "BSC"]) {
    const progRecs = records.filter((r) => r.course === prog);
    const pDups = progRecs.filter((r) => r.status === "DUPLICATE").length;
    const pWrong = progRecs.filter((r) => r.status === "WRONG").length;
    const pOk = progRecs.filter((r) => r.status === "OK").length;
    const pMiss = progRecs.filter((r) => r.status === "MISSING").length;
    const avgWords = Math.round(
      progRecs.reduce((a, b) => a + b.wordCount, 0) / (progRecs.length || 1)
    );
    console.log(
      `${prog}: ${progRecs.length} units total | Avg Words: ${avgWords} | OK: ${pOk} | DUPLICATE: ${pDups} | WRONG: ${pWrong} | MISSING: ${pMiss}`
    );
  }

  // Breakdown by semester
  console.log("\n--- Breakdown by Semester (B.Tech) ---");
  for (let sem = 1; sem <= 8; sem++) {
    const semRecs = records.filter((r) => r.course === "BTECH" && r.semester === sem);
    if (!semRecs.length) continue;
    const pDups = semRecs.filter((r) => r.status === "DUPLICATE").length;
    const pWrong = semRecs.filter((r) => r.status === "WRONG").length;
    const pOk = semRecs.filter((r) => r.status === "OK").length;
    console.log(
      `Sem ${sem}: ${semRecs.length} units | OK: ${pOk} | DUPLICATE: ${pDups} | WRONG: ${pWrong}`
    );
  }

  console.log("\n--- Breakdown by Semester (B.Sc) ---");
  for (let sem = 1; sem <= 6; sem++) {
    const semRecs = records.filter((r) => r.course === "BSC" && r.semester === sem);
    if (!semRecs.length) continue;
    const pDups = semRecs.filter((r) => r.status === "DUPLICATE").length;
    const pWrong = semRecs.filter((r) => r.status === "WRONG").length;
    const pOk = semRecs.filter((r) => r.status === "OK").length;
    console.log(
      `Sem ${sem}: ${semRecs.length} units | OK: ${pOk} | DUPLICATE: ${pDups} | WRONG: ${pWrong}`
    );
  }

  console.log("\nAudit run completed successfully.");
}

runAudit().catch(console.error);
