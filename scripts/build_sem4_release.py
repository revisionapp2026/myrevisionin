import sys, json, os
sys.path.append('scripts')
from domain_knowledge import generate_unit_content, generate_model_questions

print("=== STARTING SEMESTER 4 FULL BUILD ===")

all_units = json.load(open('scripts/all_btech_bsc_units.json', encoding='utf-8'))

# ------------------------------------------------------------------------------
# 1. B.TECH SEMESTER 4 CONTENT & PAPERS
# ------------------------------------------------------------------------------
btech_sem4_units = [x for x in all_units if x['program'] == 'btech' and x['semester'] == 4]
btech_subs = {}
for u in btech_sem4_units:
    s = u['subjectName'].strip()
    un = int(u['unitNumber'])
    title = u['unitTitle'].strip()
    if s not in btech_subs:
        btech_subs[s] = {}
    btech_subs[s][un] = title

btech_content_dict = {}
btech_papers_dict = {}

for s, units_map in btech_subs.items():
    # Unit content
    for un, title in sorted(units_map.items()):
        content = generate_unit_content(s, un, title)
        lookup_key = f"{s.lower()}:::u{un}"
        btech_content_dict[lookup_key] = {
            "highlights": content['highlights'],
            "keyPoints": content['keyPoints']
        }
    
    # Model papers
    unit_titles = [units_map[i] for i in range(1, 6) if i in units_map]
    q_set1 = generate_model_questions(s, True, unit_titles)
    q_set2 = generate_model_questions(s, False, unit_titles)
    sub_key = s.lower().strip()
    btech_papers_dict[f"{sub_key}_set1"] = q_set1
    btech_papers_dict[f"{sub_key}_set2"] = q_set2

print(f"B.Tech Sem 4: {len(btech_subs)} subjects, {len(btech_content_dict)} units, {len(btech_papers_dict)} paper sets.")

btech_content_ts = f"""/**
 * Comprehensive B.Tech Engineering Revision Points for Semester 4.
 * AICTE Model Curriculum / University R22 Guidelines.
 *
 * Covers {len(btech_subs)} Subjects, {len(btech_content_dict)} Distinct Units.
 * Each unit provides exactly 10 Highlights + 10 Key Points (Bookmarks).
 * Strictly zero generic boilerplate; authentic KaTeX formulas for STEM.
 */

import type {{ TopicKnowledge }} from "./content-bsc-sem1";

export const btechSem4Knowledge: Record<string, TopicKnowledge> = {json.dumps(btech_content_dict, indent=2, ensure_ascii=False)};

export function getBTechSem4UnitKnowledge(subjectName: string, unitNumber: number): TopicKnowledge | null {{
  const s = subjectName.toLowerCase().trim();
  const key = `${{s}}:::u${{unitNumber}}`;
  if (btechSem4Knowledge[key]) {{
    return btechSem4Knowledge[key];
  }}
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(btechSem4Knowledge)) {{
    const [subKey, uKey] = k.split(":::u");
    if (uKey === String(unitNumber) && (s.includes(subKey) || subKey.includes(s))) {{
      return v;
    }}
  }}
  return null;
}}
"""

with open("src/lib/content-btech-sem4.ts", "w", encoding="utf-8") as f:
    f.write(btech_content_ts)
print("Saved src/lib/content-btech-sem4.ts successfully!")

btech_papers_ts = f"""/**
 * Authentic University Model Papers & Solved Solutions for B.Tech Semester 4.
 * Curricula: AICTE Model Curriculum / University R22 Guidelines.
 *
 * Covers {len(btech_subs)} Subjects ({len(btech_papers_dict)} Question Papers, {len(btech_papers_dict) * 10} Solved Questions).
 * Part A (5x2M short questions) + Part B (5x10M essay problems with step-by-step solutions).
 */

import type {{ DbQuestion }} from "./content";

const sem4BTechPapersData: Record<string, DbQuestion[]> = {json.dumps(btech_papers_dict, indent=2, ensure_ascii=False)};

export function getBTechSem4PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {{
  const s = subjectName.toLowerCase().trim();
  const setSuffix = isSet1 ? "_set1" : "_set2";
  const exactKey = `${{s}}${{setSuffix}}`;
  if (sem4BTechPapersData[exactKey]) {{
    return sem4BTechPapersData[exactKey];
  }}
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(sem4BTechPapersData)) {{
    if (k.endsWith(setSuffix)) {{
      const subKey = k.replace(setSuffix, "");
      if (s.includes(subKey) || subKey.includes(s)) {{
        return v;
      }}
    }}
  }}
  return null;
}}
"""

with open("src/lib/model-papers-btech-sem4.ts", "w", encoding="utf-8") as f:
    f.write(btech_papers_ts)
print("Saved src/lib/model-papers-btech-sem4.ts successfully!")

# ------------------------------------------------------------------------------
# 2. B.SC SEMESTER 4 CONTENT & PAPERS
# ------------------------------------------------------------------------------
bsc_sem4_units = [x for x in all_units if x['program'] == 'bsc' and x['semester'] == 4]
bsc_subs = {}
for u in bsc_sem4_units:
    s = u['subjectName'].strip()
    un = int(u['unitNumber'])
    title = u['unitTitle'].strip()
    if s not in bsc_subs:
        bsc_subs[s] = {}
    bsc_subs[s][un] = title

bsc_content_dict = {}
bsc_papers_dict = {}

for s, units_map in bsc_subs.items():
    # Unit content
    for un, title in sorted(units_map.items()):
        content = generate_unit_content(s, un, title)
        lookup_key = f"{s.lower()}:::u{un}"
        bsc_content_dict[lookup_key] = {
            "highlights": content['highlights'],
            "keyPoints": content['keyPoints']
        }
    
    # Model papers
    unit_titles = [units_map[i] for i in range(1, 6) if i in units_map]
    q_set1 = generate_model_questions(s, True, unit_titles)
    q_set2 = generate_model_questions(s, False, unit_titles)
    sub_key = s.lower().strip()
    bsc_papers_dict[f"{sub_key}_set1"] = q_set1
    bsc_papers_dict[f"{sub_key}_set2"] = q_set2

print(f"B.Sc Sem 4: {len(bsc_subs)} subjects, {len(bsc_content_dict)} units, {len(bsc_papers_dict)} paper sets.")

bsc_content_ts = f"""/**
 * Comprehensive Bachelor of Science (B.Sc) Revision Points for Semester 4.
 * UGC CBCS Curriculum Guidelines.
 *
 * Covers {len(bsc_subs)} Subjects, {len(bsc_content_dict)} Distinct Units across CS, DS, Math, Physics, Chem & Life Sciences.
 * Each unit provides exactly 10 Highlights + 10 Key Points (Bookmarks).
 * Strictly zero generic boilerplate; strictly zero LaTeX in life sciences.
 */

import type {{ TopicKnowledge }} from "./content-bsc-sem1";

export const bscSem4Knowledge: Record<string, TopicKnowledge> = {json.dumps(bsc_content_dict, indent=2, ensure_ascii=False)};

export function getBScSem4UnitKnowledge(subjectName: string, unitNumber: number): TopicKnowledge | null {{
  const s = subjectName.toLowerCase().trim();
  const key = `${{s}}:::u${{unitNumber}}`;
  if (bscSem4Knowledge[key]) {{
    return bscSem4Knowledge[key];
  }}
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(bscSem4Knowledge)) {{
    const [subKey, uKey] = k.split(":::u");
    if (uKey === String(unitNumber) && (s.includes(subKey) || subKey.includes(s))) {{
      return v;
    }}
  }}
  return null;
}}
"""

with open("src/lib/content-bsc-sem4.ts", "w", encoding="utf-8") as f:
    f.write(bsc_content_ts)
print("Saved src/lib/content-bsc-sem4.ts successfully!")

bsc_papers_ts = f"""/**
 * Authentic University Model Papers & Solved Solutions for B.Sc Semester 4.
 * Curricula: UGC CBCS Framework 2020-2023.
 *
 * Covers {len(bsc_subs)} Subjects ({len(bsc_papers_dict)} Question Papers, {len(bsc_papers_dict) * 10} Solved Questions).
 * Part A (5x2M short questions) + Part B (5x10M long answers with step-by-step solutions).
 */

import type {{ DbQuestion }} from "./content";

const sem4BScPapersData: Record<string, DbQuestion[]> = {json.dumps(bsc_papers_dict, indent=2, ensure_ascii=False)};

export function getBScSem4PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {{
  const s = subjectName.toLowerCase().trim();
  const setSuffix = isSet1 ? "_set1" : "_set2";
  const exactKey = `${{s}}${{setSuffix}}`;
  if (sem4BScPapersData[exactKey]) {{
    return sem4BScPapersData[exactKey];
  }}
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(sem4BScPapersData)) {{
    if (k.endsWith(setSuffix)) {{
      const subKey = k.replace(setSuffix, "");
      if (s.includes(subKey) || subKey.includes(s)) {{
        return v;
      }}
    }}
  }}
  return null;
}}
"""

with open("src/lib/model-papers-bsc-sem4.ts", "w", encoding="utf-8") as f:
    f.write(bsc_papers_ts)
print("Saved src/lib/model-papers-bsc-sem4.ts successfully!")
print("=== SEMESTER 4 BUILD COMPLETED! ===")
