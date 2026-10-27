import json

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc = json.load(f)

with open('scripts/sem3_titles.txt', 'w', encoding='utf-8') as out:
    out.write('=== BTECH SUBJECTS AND UNITS ===\n')
    cur = None
    for u in btech:
        if u['subject'] != cur:
            cur = u['subject']
            out.write(f'\n{cur}:\n')
        out.write(f"  U{u['unitNumber']}: {u['unitTitle']}\n")

    out.write('\n=== BSC SUBJECTS AND UNITS ===\n')
    cur = None
    for u in bsc:
        if u['subject'] != cur:
            cur = u['subject']
            out.write(f'\n{cur}:\n')
        out.write(f"  U{u['unitNumber']}: {u['unitTitle']}\n")

print("Dumped sem3_titles.txt successfully!")
