/**
 * B.Sc Semester 2 Coordinator Knowledge Base.
 * Aggregates all 28 Subjects (140 Units total) across:
 * 1. Mathematical Sciences & Computer Science (50 Units)
 * 2. Physical Sciences & Chemistry (50 Units)
 * 3. Life Sciences, Biotechnology & Environmental Science (40 Units)
 *
 * Source of truth: UGC CBCS / NEP 2020 Model Curriculum.
 */

import type { TopicKnowledge } from "./content-bsc-sem1";
import { bscSem2MathCsKnowledge } from "./content-bsc-sem2-math-cs";
import { bscSem2PhysicsChemKnowledge } from "./content-bsc-sem2-physics-chem";
import { bscSem2LifeKnowledge } from "./content-bsc-sem2-life";

export const bscSem2Knowledge: Record<string, TopicKnowledge> = {
  ...bscSem2MathCsKnowledge,
  ...bscSem2PhysicsChemKnowledge,
  ...bscSem2LifeKnowledge,
};
