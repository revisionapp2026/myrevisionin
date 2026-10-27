import json

with open('scripts/sem3_life_complete_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

print(f"Loaded {len(raw)} units from sem3_life_complete_data.json")

# Verify zero dollar signs
for k, v in raw.items():
    for h in v['highlights'] + v['keyPoints']:
        assert '$' not in h, f"Dollar sign found in {k}: {h}"

print("Verified: ZERO dollar signs in all life science units!")

with open('scripts/data_sem3_life_complete.py', 'w', encoding='utf-8') as f:
    f.write('"""\nComplete Life Sciences & Allied Labs Dataset for Semester 3 (B.Tech & B.Sc)\n65 Units (13 subjects * 5 units)\nStrictly ZERO LaTeX formulas ($)\n"""\n\n')
    f.write('life_complete_data = {\n')
    for k, v in sorted(raw.items()):
        sub, num = k.split(':::')
        f.write(f'    ({repr(sub)}, {num}): {{\n')
        f.write(f'        "title": {repr(v["title"])},\n')
        f.write(f'        "highlights": [\n')
        for h in v['highlights']:
            f.write(f'            {repr(h)},\n')
        f.write(f'        ],\n')
        f.write(f'        "keyPoints": [\n')
        for kp in v['keyPoints']:
            f.write(f'            {repr(kp)},\n')
        f.write(f'        ],\n')
        f.write(f'    }},\n')
    f.write('}\n')

print("Successfully written scripts/data_sem3_life_complete.py")
