import json

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech3 = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc3 = json.load(f)

# Collect unique subjects
btech_subs = {}
for u in btech3:
    s = u['subject']
    if s not in btech_subs:
        btech_subs[s] = []
    btech_subs[s].append((u['unitNumber'], u['unitTitle']))

bsc_subs = {}
for u in bsc3:
    s = u['subject']
    if s not in bsc_subs:
        bsc_subs[s] = []
    bsc_subs[s].append((u['unitNumber'], u['unitTitle']))

print(f"Total B.Tech Sem 3 subjects: {len(btech_subs)}")
with open('scripts/sem3_btech_subjects_list.txt', 'w', encoding='utf-8') as f:
    for s, units in sorted(btech_subs.items()):
        f.write(f"\nSubject: {s}\n")
        for num, title in sorted(units):
            f.write(f"  Unit {num}: {title}\n")

print(f"Total B.Sc Sem 3 subjects: {len(bsc_subs)}")
with open('scripts/sem3_bsc_subjects_list.txt', 'w', encoding='utf-8') as f:
    for s, units in sorted(bsc_subs.items()):
        f.write(f"\nSubject: {s}\n")
        for num, title in sorted(units):
            f.write(f"  Unit {num}: {title}\n")
print("Done writing lists!")
