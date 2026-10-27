import json

bsc_grouped = json.load(open('scripts/sem3_bsc_grouped.json', encoding='utf-8'))

subs = [
    'Physics III: Thermal Physics / Statistics III',
    'Physics III / Statistics III',
    'Thermal Physics & Statistical Mechanics',
    'Thermal Physics & Electronics',
    'Physics Lab III',
    'Analytical Chemistry',
    'Chemistry III / Data Structures',
    'Organic Chemistry  III',
    'Chemistry Lab III',
    'Chemistry Lab III (Organic Synthesis)',
    'Instrumentation & Measurement'
]

for u in bsc_grouped:
    # Normalize subject name check
    matching = [s for s in subs if s.replace('', '') in u['subject'] or u['subject'].replace('', '') in s]
    if matching or any(sub in u['subject'] for sub in ['Physics', 'Chemistry', 'Thermal', 'Instrumentation']):
        print(f"('{u['subject']}', {u['unitNumber']}): '{u['unitTitle']}',")
