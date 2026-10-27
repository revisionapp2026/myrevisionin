import json

with open("scripts/all_btech_bsc_units.json", "r", encoding="utf-8") as f:
    all_units = json.load(f)

btech_sem3 = [u for u in all_units if u["program"] == "btech" and u["semester"] == 3]
bsc_sem3 = [u for u in all_units if u["program"] == "bsc" and u["semester"] == 3]

print(f"B.Tech Sem 3: {len(btech_sem3)} unit entries.")
print(f"B.Sc Sem 3: {len(bsc_sem3)} unit entries.")

# Group unique units by subject name and unit number
def group_units(unit_list):
    groups = {}
    for u in unit_list:
        sub = u["subjectName"]
        un = u["unitNumber"]
        ut = u["unitTitle"]
        uid = u["unitId"]
        k = (sub, un)
        if k not in groups:
            groups[k] = {"subject": sub, "unitNumber": un, "unitTitle": ut, "ids": []}
        groups[k]["ids"].append(uid)
    return groups

btech_groups = group_units(btech_sem3)
bsc_groups = group_units(bsc_sem3)

print(f"B.Tech Sem 3 unique (subject, unitNumber) pairs: {len(btech_groups)}")
print(f"B.Sc Sem 3 unique (subject, unitNumber) pairs: {len(bsc_groups)}")

# Save to json for reference
with open("scripts/sem3_btech_grouped.json", "w", encoding="utf-8") as f:
    json.dump(list(btech_groups.values()), f, indent=2)

with open("scripts/sem3_bsc_grouped.json", "w", encoding="utf-8") as f:
    json.dump(list(bsc_groups.values()), f, indent=2)

print("Saved grouped units to JSON.")
