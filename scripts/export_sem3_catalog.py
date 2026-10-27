import json

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc = json.load(f)

catalog = {'btech': {}, 'bsc': {}}

for u in btech:
    s = u['subject']
    num = u['unitNumber']
    t = u['unitTitle']
    catalog['btech'].setdefault(s, {})[num] = t

for u in bsc:
    s = u['subject']
    num = u['unitNumber']
    t = u['unitTitle']
    catalog['bsc'].setdefault(s, {})[num] = t

with open('scripts/sem3_catalog.json', 'w', encoding='utf-8') as f:
    json.dump(catalog, f, indent=2)

print(f"B.Tech subjects: {len(catalog['btech'])}")
print(f"B.Sc subjects: {len(catalog['bsc'])}")
