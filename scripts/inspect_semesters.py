import json

with open('scripts/all_btech_bsc_units.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print('Total entries in all_btech_bsc_units:', len(data))

sem_groups = {}
for entry in data:
    key = (entry['program'], entry['semester'])
    if key not in sem_groups:
        sem_groups[key] = {}
    sub = entry['subjectName']
    if sub not in sem_groups[key]:
        sem_groups[key][sub] = []
    sem_groups[key][sub].append(entry)

for (program, sem), subs in sorted(sem_groups.items()):
    total_instances = sum(len(units) for units in subs.values())
    unique_units = len(subs) * 5
    print(f"{program.upper()} Sem {sem}: {len(subs)} unique subjects, {unique_units} unique units, {total_instances} unit instances")
