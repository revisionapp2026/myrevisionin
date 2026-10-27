import json

with open('scripts/all_btech_bsc_units.json', 'r', encoding='utf-8') as f:
    units = json.load(f)

print('Total unit instances:', len(units))
sems = {}
for u in units:
    prog = u.get('program', 'unknown')
    sem = u.get('semester', 'unknown')
    key = (prog, sem)
    if key not in sems:
        sems[key] = {'instances': 0, 'unique_units': set(), 'unique_subjects': set()}
    sems[key]['instances'] += 1
    sems[key]['unique_units'].add((u['subjectName'], u['unitNumber'], u['unitTitle']))
    sems[key]['unique_subjects'].add(u['subjectName'])

for (prog, sem) in sorted(sems.keys(), key=lambda x: (x[0], int(x[1]) if str(x[1]).isdigit() else 99)):
    data = sems[(prog, sem)]
    print(f"{prog.upper()} Semester {sem}: {data['instances']} instances, {len(data['unique_units'])} unique units across {len(data['unique_subjects'])} subjects")
