"""
Curriculum Synthesis Engine & Pairwise Similarity Validator for Semester 3.
"""

import json
import re

with open('scripts/all_btech_bsc_units.json', 'r', encoding='utf-8') as f:
    all_units = json.load(f)

sem3_units = [u for u in all_units if u['semester'] == 3]

# Group by unique (program, subjectName, unitNumber)
unique_units = {}
for u in sem3_units:
    key = (u['program'], u['subjectName'], u['unitNumber'], u['unitTitle'])
    if key not in unique_units:
        unique_units[key] = []
    unique_units[key].append(u['unitId'])

print(f"Total unique (program, subject, unit) tuples in Sem 3: {len(unique_units)}")
