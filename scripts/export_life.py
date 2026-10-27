import json
import sys
sys.path.insert(0, ".")
import scripts.build_bsc_sem2_life as m

header = '''/**
 * B.Sc Semester 2: Life Sciences, Biotechnology & Environmental Science
 * Curricula: UGC CBCS / NEP 2020 Model Curriculum.
 *
 * Covers 8 Subjects (40 Units total):
 * 1. Microbial Diversity of Lower Plants – II (Life Sciences)
 * 2. Botany Lab II (Life Sciences)
 * 3. Biology of Chordates, Embryology & Ecology (Life Sciences)
 * 4. Zoology Lab II (Life Sciences)
 * 5. Microbial Physiology & Genetics (Biotech / Microbiology)
 * 6. Microbiology Lab II (Biotech / Microbiology)
 * 7. Botany II / Zoology II (Biotech / Microbiology)
 * 8. Environmental Science (CS)
 *
 * Strictly contains ZERO LaTeX formulas across all units so that the KaTeX formulas tab is hidden.
 */

import type { TopicKnowledge } from "./content-bsc-sem1";

export const bscSem2LifeKnowledge: Record<string, TopicKnowledge> = '''

json_str = json.dumps(m.data, indent=2)

footer = ''';\n'''

full_ts = header + json_str + footer

with open('src/lib/content-bsc-sem2-life.ts', 'w', encoding='utf-8') as f:
    f.write(full_ts)

print(f"Wrote {len(m.data)} units to src/lib/content-bsc-sem2-life.ts")
