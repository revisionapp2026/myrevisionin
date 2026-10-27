import json

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc3 = json.load(f)

subs = {}
for u in bsc3:
    s = u['subject']
    if s not in subs:
        subs[s] = []
    subs[s].append((u['unitNumber'], u['unitTitle']))

print(f"Total B.Sc Sem 3 subjects: {len(subs)}")
for s, units in sorted(subs.items()):
    titles = [t for n, t in sorted(units)]
    print(f"{s}: {titles}")
