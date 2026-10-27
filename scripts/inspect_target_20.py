import json

with open("scripts/sem3_catalog.json", "r", encoding="utf-8") as f:
    catalog = json.load(f)

btech_subs = catalog["btech"]
target_subs = [
    "Circuit Analysis & Synthesis",
    "Computer Organization & Architecture",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Digital Electronics",
    "Digital Logic Design",
    "Discrete Mathematics",
    "Electrical Machines",
    "Electrical Machines \u2013 I",
    "Electromagnetic Fields",
    "Electronic Devices & Circuits",
    "Engineering Mathematics III",
    "Linear Algebra & Probability",
    "Material Science & Engineering",
    "Mathematics for ECE",
    "Network Theory",
    "Numerical Methods",
    "Sensors & Transducers",
    "Signals & Systems",
    "Statistics & Probability"
]

for s in target_subs:
    # find match in catalog
    matched = None
    for cs in btech_subs:
        if cs.replace("\u2013", "-").replace("–", "-").strip() == s.replace("\u2013", "-").replace("–", "-").strip():
            matched = cs
            break
    print(f"Subject: {matched}")
    for u_num, u_title in btech_subs[matched].items():
        print(f"   Unit {u_num}: {u_title}")
