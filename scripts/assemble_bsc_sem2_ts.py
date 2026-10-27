import json
import os

all_data = {}

for part in range(1, 8):
    path = f"scripts/bsc_sem2_part{part}.json"
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
            all_data.update(data)
            print(f"Loaded {len(data)} sets from part {part}")

print(f"Total paper sets: {len(all_data)}")

# For sets that only have set 1 (like labs), create set 2 as well or mirror
for k in list(all_data.keys()):
    if k.endswith("_set1"):
        base = k[:-5]
        s2 = f"{base}_set2"
        if s2 not in all_data:
            all_data[s2] = all_data[k]

ts_code = []
ts_code.append("/**")
ts_code.append(" * Authentic University Model Papers & Solved Solutions for B.Sc Semester 2.")
ts_code.append(" * Curricula: UGC LOCF / CBCS Model Curriculum.")
ts_code.append(" *")
ts_code.append(" * Covers all 28 B.Sc Semester 2 Subjects across:")
ts_code.append(" * - Computer Science & Data Science")
ts_code.append(" * - Mathematics & Statistics")
ts_code.append(" * - Physics & Chemistry")
ts_code.append(" * - Life Sciences (Botany, Zoology, Microbiology) - Strictly ZERO LaTeX")
ts_code.append(" * - Environmental Science - Strictly ZERO LaTeX")
ts_code.append(" * - Practical Laboratories")
ts_code.append(" */\n")
ts_code.append('import type { DbQuestion } from "./content";\n')
ts_code.append("const sem2BscPapers: Record<string, DbQuestion[]> = " + json.dumps(all_data, indent=2) + ";\n")

ts_code.append("""export function getBScSem2PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase();
  const setSuffix = isSet1 ? "_set1" : "_set2";

  // 1. Data Structures (Theory & Lab)
  if (s.includes("data structure") || s.includes("dsa")) {
    if (s.includes("lab")) {
      return sem2BscPapers["ds_lab" + setSuffix] || sem2BscPapers["ds_lab_set1"] || null;
    }
    return sem2BscPapers["ds" + setSuffix] || null;
  }

  // 2. Real Analysis
  if (s.includes("real analysis")) {
    return sem2BscPapers["ra" + setSuffix] || null;
  }

  // 3. Problem Solving
  if (s.includes("problem solving")) {
    return sem2BscPapers["ps" + setSuffix] || null;
  }

  // 4. Differential Equations & Geometry / Probability / Math II
  if (s.includes("differential equation") || (s.includes("mathematics") && !s.includes("botany"))) {
    return sem2BscPapers["diff_eq" + setSuffix] || null;
  }

  // 5. Mathematics II / Botany II (Hybrid: Math paper)
  if (s.includes("mathematics ii") || (s.includes("mathematics") && s.includes("botany"))) {
    return sem2BscPapers["diff_eq" + setSuffix] || null;
  }

  // 6. Statistics / Database Basics
  if (s.includes("database") || s.includes("statistics ii")) {
    return sem2BscPapers["stat_db" + setSuffix] || null;
  }

  // 7. Waves & Optics / Physics II
  if (s.includes("waves") || s.includes("optics") || (s.includes("physics ii") && !s.includes("lab"))) {
    return sem2BscPapers["waves" + setSuffix] || null;
  }
  if (s.includes("physics") && s.includes("lab")) {
    return sem2BscPapers["physics_lab" + setSuffix] || sem2BscPapers["physics_lab_set1"] || null;
  }

  // 8. Physical Chemistry II / Chemistry II
  if (s.includes("physical chemistry") || s.includes("physical & general chemistry") || (s.includes("chemistry ii") && !s.includes("lab"))) {
    return sem2BscPapers["chem" + setSuffix] || null;
  }
  if (s.includes("chemistry") && s.includes("lab")) {
    return sem2BscPapers["chem_lab" + setSuffix] || sem2BscPapers["chem_lab_set1"] || null;
  }

  // 9. Environmental Science (Strictly ZERO LaTeX)
  if (s.includes("environmental")) {
    return sem2BscPapers["env_sci" + setSuffix] || null;
  }

  // 10. Microbial Diversity of Lower Plants II (Strictly ZERO LaTeX)
  if (s.includes("microbial diversity")) {
    return sem2BscPapers["microbial_div" + setSuffix] || null;
  }

  // 11. Microbial Physiology & Genetics (Strictly ZERO LaTeX)
  if (s.includes("microbial physiology") || s.includes("physiology & genetics")) {
    return sem2BscPapers["micro_physio" + setSuffix] || null;
  }

  // 12. Biology of Chordates, Embryology & Ecology (Strictly ZERO LaTeX)
  if (s.includes("chordates") || s.includes("embryology") || s.includes("ecology")) {
    return sem2BscPapers["chordates" + setSuffix] || null;
  }

  // 13. Botany II / Zoology II (Strictly ZERO LaTeX)
  if (s.includes("botany ii") || s.includes("zoology ii")) {
    return sem2BscPapers["botany_zoology" + setSuffix] || null;
  }

  // 14. Life Science Labs (Strictly ZERO LaTeX)
  if (s.includes("botany lab") || s.includes("zoology lab") || s.includes("microbiology lab")) {
    return sem2BscPapers["life_labs" + setSuffix] || sem2BscPapers["life_labs_set1"] || null;
  }

  return null;
}
""")

output_path = "src/lib/model-papers-bsc-sem2.ts"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(ts_code))

print(f"Successfully generated {output_path}!")
