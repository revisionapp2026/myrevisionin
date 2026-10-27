import json
import sys
sys.path.insert(0, ".")
import scripts.build_bsc_sem2_physics_chem as m

header = '''/**
 * B.Sc Semester 2: Physical Sciences & Chemical Sciences
 * Curricula: UGC CBCS / NEP 2020 Model Curriculum.
 *
 * Covers 10 Subjects (50 Units total):
 * 1. Waves & Optics (Physics)
 * 2. Physics II: Waves & Optics / Statistics II (CS)
 * 3. Physics II / Statistics II (Math)
 * 4. Physics Lab II (Physics)
 * 5. Physical & General Chemistry – II (Life Sciences)
 * 6. Physical Chemistry – II (Biotech / Microbiology)
 * 7. Chemistry II / Programming (Physics)
 * 8. Chemistry Lab II (Qualitative Analysis) (Life Sciences)
 * 9. Chemistry Lab II (Biotech / Microbiology)
 * 10. Mathematics II / Botany II (Chemistry)
 *
 * Physical sciences and chemistry units contain authentic KaTeX formulas.
 * Botany II units contain ZERO LaTeX formulas.
 */

import type { TopicKnowledge } from "./content-bsc-sem1";

export const bscSem2PhysicsChemKnowledge: Record<string, TopicKnowledge> = '''

json_str = json.dumps(m.data, indent=2)

footer = ''';\n'''

full_ts = header + json_str + footer

with open('src/lib/content-bsc-sem2-physics-chem.ts', 'w', encoding='utf-8') as f:
    f.write(full_ts)

print(f"Wrote {len(m.data)} units to src/lib/content-bsc-sem2-physics-chem.ts")
