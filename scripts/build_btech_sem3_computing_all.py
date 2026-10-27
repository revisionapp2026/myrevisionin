"""
Comprehensive Generator for B.Tech Semester 3 Computing, Circuits & Electrical Subjects (15 subjects, 75 units).
Includes:
1. Data Structures & Algorithms
2. Computer Organization & Architecture
3. Database Management Systems
4. Digital Electronics
5. Digital Logic Design
6. Discrete Mathematics
7. Circuit Analysis & Synthesis
8. Network Theory
9. Electronic Devices & Circuits
10. Signals & Systems
11. Python for Data Science
12. Object Oriented Programming (Advanced)
13. Electrical Machines
14. Electrical Machines — I
15. Electromagnetic Fields
"""

import json

data = {}

def add_unit(key, highlights, keypoints):
    assert len(highlights) == 10, f"Unit {key} highlights count is {len(highlights)}"
    assert len(keypoints) == 10, f"Unit {key} keypoints count is {len(keypoints)}"
    data[key] = {
        "highlights": highlights,
        "keyPoints": keypoints
    }

# Load DSA and COA
import scripts.build_btech_sem3_computing as dsa_mod
import scripts.data_btech_sem3_coa as coa_mod

for k, v in dsa_mod.data.items():
    data[k] = v
for k, v in coa_mod.coa_units.items():
    data[k] = v

print(f"Loaded {len(data)} units so far (DSA + COA).")
