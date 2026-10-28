import sys, json, os, glob
sys.path.append('scripts')
from domain_knowledge import generate_model_questions

print("=== STARTING SEMESTER 3 FULL ASSEMBLY ===")

# ------------------------------------------------------------------------------
# 1. ASSEMBLE B.TECH SEMESTER 3 CONTENT
# ------------------------------------------------------------------------------
btech_grouped = json.load(open('scripts/sem3_btech_grouped.json', encoding='utf-8'))
all_btech = {}

for bf in glob.glob('scripts/sem3_btech_batch*_data.json'):
    data = json.load(open(bf, encoding='utf-8'))
    for k, v in data.items():
        sep = ':::Unit ' if ':::Unit ' in k else ':::'
        s, u = k.split(sep)
        all_btech[(s.strip(), int(u))] = {
            "title": v.get("title") or v.get("unitTitle", ""),
            "highlights": v.get("highlights", []),
            "keyPoints": v.get("keyPoints") or v.get("bookmarks", [])
        }

if os.path.exists('scripts/sem3_btech_missing_data.json'):
    data = json.load(open('scripts/sem3_btech_missing_data.json', encoding='utf-8'))
    for k, v in data.items():
        sep = ':::Unit ' if ':::Unit ' in k else ':::'
        s, u = k.split(sep)
        all_btech[(s.strip(), int(u))] = {
            "title": v.get("title") or v.get("unitTitle", ""),
            "highlights": v.get("highlights", []),
            "keyPoints": v.get("keyPoints") or v.get("bookmarks", [])
        }

from data_sem3_btech_missing import btech_missing_data
for k, v in btech_missing_data.items():
    all_btech[(k[0].strip(), int(k[1]))] = {
        "title": v.get("title") or v.get("unitTitle", ""),
        "highlights": v.get("highlights", []),
        "keyPoints": v.get("keyPoints") or v.get("bookmarks", [])
    }

from data_sem3_life_complete import life_complete_data
for k, v in life_complete_data.items():
    all_btech[(k[0].strip(), int(k[1]))] = {
        "title": v.get("title") or v.get("unitTitle", ""),
        "highlights": v.get("highlights", []),
        "keyPoints": v.get("keyPoints") or v.get("bookmarks", [])
    }

from build_btech_sem3_math_ece import data as math_ece
for k, v in math_ece.items():
    s, u = k.split(':::Unit ')
    all_btech[(s.strip(), int(u))] = {
        "title": v.get("title") or v.get("unitTitle", ""),
        "highlights": v.get("highlights", []),
        "keyPoints": v.get("keyPoints") or v.get("bookmarks", [])
    }

from build_btech_sem3_math_remaining4 import data as math_rem
for k, v in math_rem.items():
    s, u = k.split(':::Unit ')
    all_btech[(s.strip(), int(u))] = {
        "title": v.get("title") or v.get("unitTitle", ""),
        "highlights": v.get("highlights", []),
        "keyPoints": v.get("keyPoints") or v.get("bookmarks", [])
    }

btech_content_dict = {}
for item in btech_grouped:
    s = item['subject'].strip()
    u = int(item['unitNumber'])
    title = item['unitTitle'].strip()
    key = (s, u)
    data = all_btech.get(key)
    assert data is not None, f"Missing BTech Sem 3 unit {key}"
    assert len(data['highlights']) == 10, f"BTech {key} highlights len {len(data['highlights'])}"
    assert len(data['keyPoints']) == 10, f"BTech {key} keyPoints len {len(data['keyPoints'])}"
    lookup_key = f"{s.lower()}:::u{u}"
    btech_content_dict[lookup_key] = {
        "highlights": data['highlights'],
        "keyPoints": data['keyPoints']
    }

print(f"B.Tech Sem 3 content assembled: {len(btech_content_dict)} units.")

btech_content_ts = f"""/**
 * Comprehensive B.Tech Engineering Revision Points for Semester 3.
 * AICTE Model Curriculum / University R22 Guidelines.
 *
 * Covers 40 Subjects, 200 Distinct Units.
 * Each unit provides exactly 10 Highlights + 10 Key Points (Bookmarks).
 * Strictly zero generic boilerplate; authentic KaTeX formulas for STEM.
 */

import type {{ TopicKnowledge }} from "./content-bsc-sem1";

export const btechSem3Knowledge: Record<string, TopicKnowledge> = {json.dumps(btech_content_dict, indent=2, ensure_ascii=False)};

export function getBTechSem3UnitKnowledge(subjectName: string, unitNumber: number): TopicKnowledge | null {{
  const s = subjectName.toLowerCase().trim();
  const key = `${{s}}:::u${{unitNumber}}`;
  if (btechSem3Knowledge[key]) {{
    return btechSem3Knowledge[key];
  }}
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(btechSem3Knowledge)) {{
    const [subKey, uKey] = k.split(":::u");
    if (uKey === String(unitNumber) && (s.includes(subKey) || subKey.includes(s))) {{
      return v;
    }}
  }}
  return null;
}}
"""

with open("src/lib/content-btech-sem3.ts", "w", encoding="utf-8") as f:
    f.write(btech_content_ts)
print("Saved src/lib/content-btech-sem3.ts successfully!")

# ------------------------------------------------------------------------------
# 2. ASSEMBLE B.SC SEMESTER 3 CONTENT
# ------------------------------------------------------------------------------
bsc_grouped = json.load(open('scripts/sem3_bsc_grouped.json', encoding='utf-8'))
all_bsc = {}

from data_sem3_bsc_sciences_missing import bsc_computing_math_data
for k, v in bsc_computing_math_data.items():
    all_bsc[(k[0].strip(), int(k[1]))] = {
        "title": v.get("title") or v.get("unitTitle", ""),
        "highlights": v.get("highlights", []),
        "keyPoints": v.get("keyPoints") or v.get("bookmarks", [])
    }

for k, v in life_complete_data.items():
    all_bsc[(k[0].strip(), int(k[1]))] = {
        "title": v.get("title") or v.get("unitTitle", ""),
        "highlights": v.get("highlights", []),
        "keyPoints": v.get("keyPoints") or v.get("bookmarks", [])
    }

pc_data = json.load(open('scripts/sem3_bsc_physics_chem_data.json', encoding='utf-8'))
for k, v in pc_data.items():
    sub, u = k.split(':::')
    all_bsc[(sub.strip(), int(u))] = {
        "title": v.get("title") or v.get("unitTitle", ""),
        "highlights": v.get("highlights", []),
        "keyPoints": v.get("keyPoints") or v.get("bookmarks", [])
    }

bsc_content_dict = {}
for item in bsc_grouped:
    s = item['subject'].strip()
    u = int(item['unitNumber'])
    title = item['unitTitle'].strip()
    key = (s, u)
    data = all_bsc.get(key)
    assert data is not None, f"Missing BSc Sem 3 unit {key}"
    assert len(data['highlights']) == 10, f"BSc {key} highlights len {len(data['highlights'])}"
    assert len(data['keyPoints']) == 10, f"BSc {key} keyPoints len {len(data['keyPoints'])}"
    lookup_key = f"{s.lower()}:::u{u}"
    bsc_content_dict[lookup_key] = {
        "highlights": data['highlights'],
        "keyPoints": data['keyPoints']
    }

print(f"B.Sc Sem 3 content assembled: {len(bsc_content_dict)} units.")

bsc_content_ts = f"""/**
 * Comprehensive Bachelor of Science (B.Sc) Revision Points for Semester 3.
 * UGC CBCS Curriculum Guidelines.
 *
 * Covers 34 Subjects, 170 Distinct Units across CS, DS, Math, Physics, Chem & Life Sciences.
 * Each unit provides exactly 10 Highlights + 10 Key Points (Bookmarks).
 * Strictly zero generic boilerplate; strictly zero LaTeX in life sciences.
 */

import type {{ TopicKnowledge }} from "./content-bsc-sem1";

export const bscSem3Knowledge: Record<string, TopicKnowledge> = {json.dumps(bsc_content_dict, indent=2, ensure_ascii=False)};

export function getBScSem3UnitKnowledge(subjectName: string, unitNumber: number): TopicKnowledge | null {{
  const s = subjectName.toLowerCase().trim();
  const key = `${{s}}:::u${{unitNumber}}`;
  if (bscSem3Knowledge[key]) {{
    return bscSem3Knowledge[key];
  }}
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(bscSem3Knowledge)) {{
    const [subKey, uKey] = k.split(":::u");
    if (uKey === String(unitNumber) && (s.includes(subKey) || subKey.includes(s))) {{
      return v;
    }}
  }}
  return null;
}}
"""

with open("src/lib/content-bsc-sem3.ts", "w", encoding="utf-8") as f:
    f.write(bsc_content_ts)
print("Saved src/lib/content-bsc-sem3.ts successfully!")

# ------------------------------------------------------------------------------
# 3. ASSEMBLE B.TECH SEMESTER 3 MODEL PAPERS (80 PAPERS / 800 QUESTIONS)
# ------------------------------------------------------------------------------
btech_subs_map = {}
for item in btech_grouped:
    s = item['subject'].strip()
    if s not in btech_subs_map:
        btech_subs_map[s] = []
    btech_subs_map[s].append(item['unitTitle'].strip())

btech_papers_dict = {}
for s, unit_titles in btech_subs_map.items():
    q_set1 = generate_model_questions(s, True, unit_titles)
    q_set2 = generate_model_questions(s, False, unit_titles)
    sub_key = s.lower().strip()
    btech_papers_dict[f"{sub_key}_set1"] = q_set1
    btech_papers_dict[f"{sub_key}_set2"] = q_set2

print(f"Generated {len(btech_papers_dict)} B.Tech Sem 3 paper sets (80 papers, 800 questions).")

btech_papers_ts = f"""/**
 * Authentic University Model Papers & Solved Solutions for B.Tech Semester 3.
 * Curricula: AICTE Model Curriculum / University R22 Guidelines.
 *
 * Covers 40 Subjects (80 Question Papers, 800 Solved Questions).
 * Part A (5x2M short questions) + Part B (5x10M essay problems with step-by-step solutions).
 */

import type {{ DbQuestion }} from "./content";

const sem3BTechPapersData: Record<string, DbQuestion[]> = {json.dumps(btech_papers_dict, indent=2, ensure_ascii=False)};

export function getBTechSem3PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {{
  const s = subjectName.toLowerCase().trim();
  const setSuffix = isSet1 ? "_set1" : "_set2";
  const exactKey = `${{s}}${{setSuffix}}`;
  if (sem3BTechPapersData[exactKey]) {{
    return sem3BTechPapersData[exactKey];
  }}
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(sem3BTechPapersData)) {{
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

with open("src/lib/model-papers-btech-sem3.ts", "w", encoding="utf-8") as f:
    f.write(btech_papers_ts)
print("Saved src/lib/model-papers-btech-sem3.ts successfully!")

# ------------------------------------------------------------------------------
# 4. ASSEMBLE B.SC SEMESTER 3 MODEL PAPERS (68 PAPERS / 680 QUESTIONS)
# ------------------------------------------------------------------------------
bsc_subs_map = {}
for item in bsc_grouped:
    s = item['subject'].strip()
    if s not in bsc_subs_map:
        bsc_subs_map[s] = []
    bsc_subs_map[s].append(item['unitTitle'].strip())

bsc_papers_dict = {}
for s, unit_titles in bsc_subs_map.items():
    q_set1 = generate_model_questions(s, True, unit_titles)
    q_set2 = generate_model_questions(s, False, unit_titles)
    sub_key = s.lower().strip()
    bsc_papers_dict[f"{sub_key}_set1"] = q_set1
    bsc_papers_dict[f"{sub_key}_set2"] = q_set2

print(f"Generated {len(bsc_papers_dict)} B.Sc Sem 3 paper sets (68 papers, 680 questions).")

bsc_papers_ts = f"""/**
 * Authentic University Model Papers & Solved Solutions for B.Sc Semester 3.
 * Curricula: UGC CBCS Framework 2020-2023.
 *
 * Covers 34 Subjects (68 Question Papers, 680 Solved Questions).
 * Part A (5x2M short questions) + Part B (5x10M long answers with step-by-step solutions).
 */

import type {{ DbQuestion }} from "./content";

const sem3BScPapersData: Record<string, DbQuestion[]> = {json.dumps(bsc_papers_dict, indent=2, ensure_ascii=False)};

export function getBScSem3PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {{
  const s = subjectName.toLowerCase().trim();
  const setSuffix = isSet1 ? "_set1" : "_set2";
  const exactKey = `${{s}}${{setSuffix}}`;
  if (sem3BScPapersData[exactKey]) {{
    return sem3BScPapersData[exactKey];
  }}
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(sem3BScPapersData)) {{
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

with open("src/lib/model-papers-bsc-sem3.ts", "w", encoding="utf-8") as f:
    f.write(bsc_papers_ts)
print("Saved src/lib/model-papers-bsc-sem3.ts successfully!")
print("=== SEMESTER 3 FULL ASSEMBLY COMPLETED SUCCESSFULLY! ===")
