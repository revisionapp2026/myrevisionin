import json
from generate_all_sem3_final import raw_modules
from data_sem3_btech_missing import btech_missing_data
from data_sem3_life_complete import life_complete_data

print("Initial raw_modules size:", len(raw_modules))

# Add btech_missing_data
for k, v in btech_missing_data.items():
    raw_modules[k] = v

# Add life_complete_data
for k, v in life_complete_data.items():
    raw_modules[k] = v

print("Updated raw_modules size with missing & life:", len(raw_modules))

btech_grouped = json.load(open('scripts/sem3_btech_grouped.json', encoding='utf-8'))
bsc_grouped = json.load(open('scripts/sem3_bsc_grouped.json', encoding='utf-8'))

btech_found = 0
btech_missing = []
for u in btech_grouped:
    s = u['subject']
    num = u['unitNumber']
    if (s, num) in raw_modules:
        btech_found += 1
    else:
        btech_missing.append((s, num, u['unitTitle']))

print(f"\nB.Tech units in raw_modules: {btech_found}/200")
if btech_missing:
    print(f"Missing B.Tech units ({len(btech_missing)}):")
    for s, num, t in btech_missing:
        print(f"  {s} U{num}: {t}")

bsc_found = 0
bsc_missing = []
for u in bsc_grouped:
    s = u['subject']
    num = u['unitNumber']
    if (s, num) in raw_modules:
        bsc_found += 1
    else:
        bsc_missing.append((s, num, u['unitTitle']))

print(f"\nB.Sc units in raw_modules: {bsc_found}/170")
if bsc_missing:
    print(f"Missing B.Sc units ({len(bsc_missing)}):")
    for s, num, t in bsc_missing:
        print(f"  {s} U{num}: {t}")
