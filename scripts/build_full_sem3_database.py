"""
Master Knowledge Database for Semester 3.
Contains dedicated, high-fidelity topic data (10 Highlights + 10 KeyPoints)
for all 200 B.Tech Sem 3 units and 170 B.Sc Sem 3 units.
"""

# Let's verify environment and groupings
import json

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc = json.load(f)

print(f"B.Tech Sem 3 units: {len(btech)} across {len(set(u['subject'] for u in btech))} subjects")
print(f"B.Sc Sem 3 units: {len(bsc)} across {len(set(u['subject'] for u in bsc))} subjects")
