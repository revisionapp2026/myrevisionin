import json

for fname in ["scripts/sem3_btech_missing_data.json", "scripts/sem3_life_complete_data.json", "scripts/sem3_bsc_computing_math_data.json", "scripts/sem3_bsc_physics_chem_data.json"]:
    with open(fname, "r", encoding="utf-8") as f:
        d = json.load(f)
        keys = list(d.keys())[:5]
        print(fname, "len:", len(d), "sample keys:", keys)
