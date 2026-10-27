import json

all_data = {}

for part in [1, 2, 3, 4]:
    with open(f"scripts/btech_sem2_part{part}.json", "r", encoding="utf-8") as f:
        data = json.load(f)
        all_data.update(data)

print(f"Loaded {len(all_data)} paper sets.")
# 8 subjects * 2 sets = 16 sets!
assert len(all_data) == 16, f"Expected 16 sets, got {len(all_data)}"

ts_code = []
ts_code.append("/**")
ts_code.append(" * Authentic University Model Papers & Solved Solutions for B.Tech Semester 2.")
ts_code.append(" * Curricula: AICTE Model Curriculum / JNTU R22 / VTU 2022.")
ts_code.append(" *")
ts_code.append(" * Covers all 8 Subjects (Set 1 & Set 2):")
ts_code.append(" * 1. Engineering Mathematics II")
ts_code.append(" * 2. Object Oriented Programming (Java/C++)")
ts_code.append(" * 3. Basic Electronics")
ts_code.append(" * 4. Engineering Mechanics")
ts_code.append(" * 5. Workshop Practice")
ts_code.append(" * 6. Python Programming")
ts_code.append(" * 7. Chemical Process Calculations")
ts_code.append(" * 8. Biology for Engineers (Strictly ZERO LaTeX formulas)")
ts_code.append(" */\n")
ts_code.append('import type { DbQuestion } from "./content";\n')

# We can store the data in an internal map or direct switch
ts_code.append("const sem2PapersData: Record<string, DbQuestion[]> = " + json.dumps(all_data, indent=2) + ";\n")

ts_code.append("""export function getBTechSem2PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase();
  const setSuffix = isSet1 ? "_set1" : "_set2";

  // 1. Engineering Mathematics II
  if (s.includes("mathematics") || s.includes("math")) {
    return sem2PapersData["math" + setSuffix] || null;
  }

  // 2. Object Oriented Programming (Java/C++)
  if (s.includes("object oriented") || s.includes("oop") || s.includes("java")) {
    return sem2PapersData["oop" + setSuffix] || null;
  }

  // 3. Basic Electronics
  if (s.includes("electronics")) {
    return sem2PapersData["electronics" + setSuffix] || null;
  }

  // 4. Engineering Mechanics
  if (s.includes("mechanics")) {
    return sem2PapersData["mechanics" + setSuffix] || null;
  }

  // 5. Workshop Practice
  if (s.includes("workshop")) {
    return sem2PapersData["workshop" + setSuffix] || null;
  }

  // 6. Python Programming
  if (s.includes("python")) {
    return sem2PapersData["python" + setSuffix] || null;
  }

  // 7. Chemical Process Calculations
  if (s.includes("chemical") || s.includes("process")) {
    return sem2PapersData["chemical" + setSuffix] || null;
  }

  // 8. Biology for Engineers
  if (s.includes("biology")) {
    return sem2PapersData["biology" + setSuffix] || null;
  }

  return null;
}
""")

output_path = "src/lib/model-papers-btech-sem2.ts"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(ts_code))

print(f"Successfully assembled {output_path}!")
