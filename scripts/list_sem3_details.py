import json

with open("scripts/all_btech_bsc_units.json", "r", encoding="utf-8") as f:
    units = json.load(f)

for prog in ["btech", "bsc"]:
    sem3 = [u for u in units if u["program"] == prog and u["semester"] == 3]
    unique_subs = {}
    for u in sem3:
        s_name = u["subjectName"]
        if s_name not in unique_subs:
            unique_subs[s_name] = []
        unique_subs[s_name].append((u["unitNumber"], u["unitTitle"], u["unitId"]))
    
    print(f"\n=================== {prog.upper()} SEMESTER 3 ({len(unique_subs)} subjects) ===================")
    idx = 1
    for s_name, u_list in sorted(unique_subs.items()):
        # sort by unit number
        u_list.sort(key=lambda x: x[0])
        print(f"\n{idx}. Subject: \"{s_name}\"")
        idx += 1
        for num, title, uid in u_list[:5]:
            print(f"   U{num}: \"{title}\" (id: {uid})")
