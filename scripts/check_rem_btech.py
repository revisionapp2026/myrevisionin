import json

btech_grouped = json.load(open('scripts/sem3_btech_grouped.json', encoding='utf-8'))
from data_sem3_btech_missing import btech_missing_data
from data_sem3_life_complete import life_complete_data

done_subs = set(k[0] for k in btech_missing_data.keys()).union(set(k[0] for k in life_complete_data.keys()))

all_btech_subs = []
for u in btech_grouped:
    s = u['subject']
    if s not in all_btech_subs:
        all_btech_subs.append(s)

rem_btech_subs = [s for s in all_btech_subs if s not in done_subs]

print(f"Total B.Tech subjects: {len(all_btech_subs)}")
print(f"B.Tech subjects done: {len(all_btech_subs) - len(rem_btech_subs)}")
print(f"Remaining B.Tech subjects: {len(rem_btech_subs)}")
print("\n=== REMAINING B.TECH SUBJECTS ===")
for i, s in enumerate(rem_btech_subs):
    print(f"{i+1}. {s}")
