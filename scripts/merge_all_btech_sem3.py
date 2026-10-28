import json
import os

files = [
    "scripts/sem3_btech_missing_data.json",
    "scripts/sem3_btech_batch1_data.json",
    "scripts/sem3_btech_batch2_data.json",
    "scripts/sem3_btech_batch3_data.json",
    "scripts/sem3_btech_batch4_data.json",
]

merged = {}
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        data = json.load(fp)
        print(f"Loaded {len(data)} units from {f}")
        for k, v in data.items():
            if k in merged:
                print(f"WARNING: duplicate key {k}")
            merged[k] = v

with open("scripts/sem3_btech_grouped.json", "r", encoding="utf-8") as cat_f:
    cat = json.load(cat_f)
    expected_subs = set(cat.keys())

found_subs = set()
for k in merged.keys():
    found_subs.add(k.split(":::Unit ")[0])

missing_subs = expected_subs - found_subs
print(f"Expected {len(expected_subs)} subjects, found {len(found_subs)}, missing {len(missing_subs)}:")
for s in sorted(missing_subs):
    print(" - ", s)

# Verify all subjects and units
subjects = set()
for k, v in merged.items():
    sub, num_str = k.split(":::Unit ")
    num = int(num_str)
    subjects.add(sub)
    assert len(v["highlights"]) == 10, f"Error highlights {k}"
    assert len(v["bookmarks"]) == 10, f"Error bookmarks {k}"

print(f"Total unique B.Tech subjects: {len(subjects)}")
assert len(subjects) == 40, f"Expected 40 subjects, got {len(subjects)}"

# Verify every subject has units 1..5
for s in subjects:
    for u in range(1, 6):
        key = f"{s}:::Unit {u}"
        assert key in merged, f"Missing {key}"

print("All 40 B.Tech subjects have exactly units 1..5 with 10 highlights + 10 bookmarks!")

with open("scripts/sem3_btech_complete_200.json", "w", encoding="utf-8") as out:
    json.dump(merged, out, indent=2, ensure_ascii=False)

print("Saved scripts/sem3_btech_complete_200.json successfully!")
