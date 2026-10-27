import json
import os

with open("scripts/sem3_catalog.json", "r", encoding="utf-8") as f:
    catalog = json.load(f)

btech_subs = catalog.get("btech", {})
bsc_subs = catalog.get("bsc", {})

print(f"Total B.Tech subjects in catalog: {len(btech_subs)} (total units: {len(btech_subs)*5})")
print(f"Total B.Sc subjects in catalog: {len(bsc_subs)} (total units: {len(bsc_subs)*5})")

# Let's inspect the loaded json files:
json_files = [
    "scripts/sem3_btech_missing_data.json",
    "scripts/sem3_life_complete_data.json",
    "scripts/sem3_bsc_computing_math_data.json",
    "scripts/sem3_bsc_physics_chem_data.json",
    "scripts/sem3_btech_computing_data.json"
]

all_loaded_units = {}
for jf in json_files:
    if os.path.exists(jf):
        with open(jf, "r", encoding="utf-8") as f:
            data = json.load(f)
            print(f"{jf}: {len(data)} units")
            for k, v in data.items():
                all_loaded_units[k] = v

print(f"Total distinct units loaded: {len(all_loaded_units)}")

# Check missing B.Sc subjects
bsc_missing = []
for sub, units in bsc_subs.items():
    for u in [1, 2, 3, 4, 5]:
        key = f"{sub}:::{u}"
        if key not in all_loaded_units:
            bsc_missing.append((sub, u))

print(f"\nB.Sc units missing: {len(bsc_missing)}")
bsc_missing_subs = sorted(list(set([s for s, u in bsc_missing])))
for s in bsc_missing_subs:
    missing_u = [u for sub, u in bsc_missing if sub == s]
    print(f"  - {s}: units {missing_u}")

# Check missing B.Tech subjects
btech_missing = []
for sub, units in btech_subs.items():
    for u in [1, 2, 3, 4, 5]:
        key = f"{sub}:::{u}"
        if key not in all_loaded_units:
            btech_missing.append((sub, u))

print(f"\nB.Tech units missing: {len(btech_missing)}")
btech_missing_subs = sorted(list(set([s for s, u in btech_missing])))
for s in btech_missing_subs:
    missing_u = [u for sub, u in btech_missing if sub == s]
    print(f"  - {s}: units {missing_u}")
