import json

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech3 = json.load(f)

subs = {}
for u in btech3:
    s = u['subject']
    if s not in subs:
        subs[s] = []
    subs[s].append((u['unitNumber'], u['unitTitle']))

print(f"Total B.Tech Sem 3 subjects: {len(subs)}")
for s, units in sorted(subs.items()):
    titles = [t for n, t in sorted(units)]
    print(f"{s}: {titles}")
