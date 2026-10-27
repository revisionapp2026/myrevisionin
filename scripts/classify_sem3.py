import json

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc = json.load(f)

def get_unique_subs(grouped):
    subs = {}
    for item in grouped:
        s = item['subject']
        if s not in subs:
            subs[s] = []
        subs[s].append((item['unitNumber'], item['unitTitle']))
    return subs

btech_subs = get_unique_subs(btech)
bsc_subs = get_unique_subs(bsc)

def classify(s, program):
    sl = s.lower()
    is_life = any(w in sl for w in [
        'bio', 'botany', 'zoology', 'anatomy', 'physiology', 'microbio',
        'herbal', 'cell', 'molecular biology', 'plant', 'animal', 'clinical'
    ])
    # Except bioinformatics or biomedical if heavy engineering
    if 'bioinformatics' in sl or 'biomedical instrumentation' in sl:
        # Biomedical instrumentation has circuits, but let's check
        pass

    is_lab = 'lab' in sl or 'practical' in sl
    
    if is_lab:
        domain = 'lab'
    elif is_life:
        domain = 'life'
    elif any(w in sl for w in ['data structure', 'database', 'dbms', 'algorithm', 'computer organization', 'oop', 'python', 'web design', 'data visualization', 'sql']):
        domain = 'cs'
    elif any(w in sl for w in ['circuit', 'network', 'digital', 'electronic', 'electrical', 'electromagnetic', 'signal', 'sensor', 'instrumentation']):
        domain = 'ee'
    elif any(w in sl for w in ['thermodynamic', 'fluid', 'aerospace', 'machine', 'manufacturing', 'material', 'strength of materials', 'solar', 'building', 'geology', 'surveying']):
        domain = 'mech_civil'
    elif any(w in sl for w in ['math', 'calculus', 'algebra', 'numerical', 'statistic', 'probability', 'discrete', 'analysis']):
        domain = 'math'
    elif any(w in sl for w in ['chemistry', 'chemical']):
        domain = 'chem'
    else:
        domain = 'general'
    return domain, is_life, is_lab

print("--- B.TECH SEM 3 CLASSIFICATION ---")
for s in sorted(btech_subs.keys()):
    dom, life, lab = classify(s, 'btech')
    print(f"{s} -> domain: {dom}, is_life: {life}, is_lab: {lab}")

print("\n--- B.SC SEM 3 CLASSIFICATION ---")
for s in sorted(bsc_subs.keys()):
    dom, life, lab = classify(s, 'bsc')
    print(f"{s} -> domain: {dom}, is_life: {life}, is_lab: {lab}")
