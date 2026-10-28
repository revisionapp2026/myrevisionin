import json
cat = json.load(open('scripts/sem3_btech_grouped.json', encoding='utf-8'))
targets = ['Engineering Mathematics III', 'Linear Algebra & Probability', 'Numerical Methods', 'Statistics & Probability']
for item in cat:
    if item['subject'] in targets:
        print(f"{item['subject']} | Unit {item['unitNumber']}: {item['unitTitle']} (IDs: {len(item['ids'])})")
