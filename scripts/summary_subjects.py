import json

with open('scripts/all_btech_bsc_units.json', 'r', encoding='utf-8') as f:
    units = json.load(f)

for sem in range(3, 9):
    btech_subs = {}
    bsc_subs = {}
    for u in units:
        if u['semester'] == sem:
            if u['program'] == 'btech':
                if u['subjectName'] not in btech_subs:
                    btech_subs[u['subjectName']] = []
                btech_subs[u['subjectName']].append(u['unitTitle'])
            elif u['program'] == 'bsc':
                if u['subjectName'] not in bsc_subs:
                    bsc_subs[u['subjectName']] = []
                bsc_subs[u['subjectName']].append(u['unitTitle'])
    
    print(f"\n==================== SEMESTER {sem} ====================")
    print(f"B.Tech ({len(btech_subs)} subjects):")
    for s_name in sorted(btech_subs.keys())[:10]:
        print(f"  - {s_name}")
    if len(btech_subs) > 10:
        print(f"  ... and {len(btech_subs) - 10} more subjects")
    
    print(f"B.Sc ({len(bsc_subs)} subjects):")
    for s_name in sorted(bsc_subs.keys())[:10]:
        print(f"  - {s_name}")
    if len(bsc_subs) > 10:
        print(f"  ... and {len(bsc_subs) - 10} more subjects")
