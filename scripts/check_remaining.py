import json

data = json.load(open('scripts/sem3_bsc_grouped.json', encoding='utf-8'))
subs = [
    'Zoology Lab III',
    'Bio-fertilizers / Herbal Technology',
    'Molecular Biology & Genetic Engineering',
    'Molecular Biology Lab',
    'Botany III / Zoology III',
    'Bioinformatics Basics'
]
for u in data:
    if u['subject'] in subs:
        print(f"{u['subject']} U{u['unitNumber']}: {u['unitTitle']}")
