import json

cat = json.load(open('scripts/sem3_btech_grouped.json', encoding='utf-8'))
targets = ['Engineering Mathematics III', 'Linear Algebra & Probability', 'Mathematics for ECE', 'Numerical Methods', 'Statistics & Probability']
for x in cat:
    if x['subject'] in targets:
        print(f"{x['subject']} U{x['unitNumber']}: {x['unitTitle']}")
