import json

with open('scripts/sem3_btech_missing_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

lines = []
lines.append('"""')
lines.append('Dedicated Unit Data for B.Tech Semester 3: Missing Core Subjects.')
lines.append('All units have authentic 10 Highlights + 10 Bookmarks with KaTeX formulas.')
lines.append('"""\n')
lines.append('btech_missing_data = {')

for k_str, val in raw.items():
    sub, num = k_str.split(':::')
    lines.append(f'    ({repr(sub)}, {int(num)}): {json.dumps(val, indent=8)},')

lines.append('}\n')

with open('scripts/data_sem3_btech_missing.py', 'w', encoding='utf-8') as out:
    out.write('\n'.join(lines))

print(f"Exported scripts/data_sem3_btech_missing.py with {len(raw)} units!")
