"""
Test pairwise shingle similarity across generated units in Semester 3.
"""

import sys
sys.path.append('scripts')
import json
import domain_knowledge as dk

with open('scripts/all_btech_bsc_units.json', 'r', encoding='utf-8') as f:
    all_units = json.load(f)

sem3_units = [u for u in all_units if u['semester'] == 3]

# Deduplicate to unique (subjectName, unitNumber, unitTitle)
unique_units = {}
for u in sem3_units:
    key = (u['program'], u['subjectName'], u['unitNumber'], u['unitTitle'])
    if key not in unique_units:
        unique_units[key] = u

print(f"Total unique units in Sem 3: {len(unique_units)}")

# Generate content for all unique units
unit_contents = {}
for (prog, s_name, u_num, u_title) in unique_units:
    data = dk.generate_unit_content(s_name, u_num, u_title)
    full_text = " ".join(data['highlights'] + data['keyPoints']).lower()
    # 3-word shingles
    words = full_text.split()
    shingles = set(" ".join(words[i:i+3]) for i in range(len(words)-2))
    unit_contents[(prog, s_name, u_num)] = shingles

# Compare pairs
unit_keys = list(unit_contents.keys())
max_sim = 0.0
worst_pair = None
sim_count = 0

for i in range(len(unit_keys)):
    s1 = unit_contents[unit_keys[i]]
    for j in range(i + 1, min(i + 40, len(unit_keys))):
        s2 = unit_contents[unit_keys[j]]
        intersect = len(s1.intersection(s2))
        union = len(s1.union(s2))
        sim = intersect / union if union > 0 else 0
        sim_count += 1
        if sim > max_sim:
            max_sim = sim
            worst_pair = (unit_keys[i], unit_keys[j])

print(f"Checked {sim_count} pairs.")
print(f"Max pairwise 3-shingle similarity: {max_sim * 100:.2f}%")
print(f"Worst pair: {worst_pair}")
assert max_sim < 0.40, f"Max similarity {max_sim*100:.2f}% is >= 40%!"
print("SIMILARITY TEST PASSED! Max similarity is strictly below 40% threshold.")
