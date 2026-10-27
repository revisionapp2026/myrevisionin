import json

bsc_grouped = json.load(open('scripts/sem3_bsc_grouped.json', encoding='utf-8'))
from data_sem3_life_complete import life_complete_data

done_subs = set(k[0] for k in life_complete_data.keys())

all_bsc_subs = []
for u in bsc_grouped:
    s = u['subject']
    if s not in all_bsc_subs:
        all_bsc_subs.append(s)

rem_bsc_subs = [s for s in all_bsc_subs if s not in done_subs]

print(f"Total B.Sc subjects: {len(all_bsc_subs)}")
print(f"Life B.Sc subjects done: {len(all_bsc_subs) - len(rem_bsc_subs)}")
print(f"Remaining B.Sc subjects: {len(rem_bsc_subs)}")
print("\n=== REMAINING B.SC SUBJECTS ===")
for i, s in enumerate(rem_bsc_subs):
    print(f"{i+1}. {s}")
