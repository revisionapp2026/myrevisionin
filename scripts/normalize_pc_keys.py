import json

with open("scripts/sem3_catalog.json", "r", encoding="utf-8") as f:
    catalog = json.load(f)

with open("scripts/sem3_bsc_physics_chem_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Check all catalog B.Sc subjects vs keys in data
bsc_subs = catalog["bsc"]
fixed = {}
for k, v in data.items():
    sub, u = k.split(":::")
    matched_sub = sub
    # Check if sub is in bsc_subs or if minor normalization is needed
    if sub not in bsc_subs:
        if "Organic Chemistry" in sub and "III" in sub and "Lab" not in sub:
            for cs in bsc_subs:
                if "Organic Chemistry" in cs and "III" in cs and "Lab" not in cs:
                    print(f"Normalizing key '{sub}' -> '{cs}'")
                    matched_sub = cs
                    break
        else:
            for cs in bsc_subs:
                if cs.replace("\u2013", "-").replace("–", "-").strip() == sub.replace("\u2013", "-").replace("–", "-").strip() or \
                   cs.replace(" ", "") == sub.replace(" ", ""):
                    print(f"Normalizing key '{sub}' -> '{cs}'")
                    matched_sub = cs
                    break
    fixed[f"{matched_sub}:::{u}"] = v

with open("scripts/sem3_bsc_physics_chem_data.json", "w", encoding="utf-8") as f:
    json.dump(fixed, f, indent=2)

print("Saved updated sem3_bsc_physics_chem_data.json with normalized keys.")
