import json

with open('scripts/sem3_bsc_computing_math_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

print(f"Loaded {len(raw)} units from sem3_bsc_computing_math_data.json")

with open('scripts/data_sem3_bsc_sciences_missing.py', 'w', encoding='utf-8') as f:
    f.write('"""\nB.Sc Semester 3: Computing, Mathematics, Web Design & Data Visualization Dataset.\n70 Units (14 subjects * 5 units)\n"""\n\n')
    f.write('bsc_computing_math_data = {\n')
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

print("Successfully written scripts/data_sem3_bsc_sciences_missing.py")
