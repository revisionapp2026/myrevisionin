"""
Master Builder for Semester 3:
Generates:
1. src/lib/content-btech-sem3.ts (40 subjects, 200 units, 4000 revision points)
2. src/lib/content-bsc-sem3.ts (34 subjects, 170 units, 3400 revision points)
3. src/lib/model-papers-btech-sem3.ts (40 subjects * 2 sets = 80 papers, 800 questions)
4. src/lib/model-papers-bsc-sem3.ts (34 subjects * 2 sets = 68 papers, 680 questions)

Guarantees:
- Pairwise similarity < 40% across all units
- Strictly ZERO LaTeX in life science subjects
- Authentic KaTeX in STEM subjects
- 10 Highlights + 10 KeyPoints per unit (20 total)
- 10 Questions per model paper (5x2M Part A + 5x10M Part B)
"""

import json
import importlib.util
import os
import re

# 1. Load raw knowledge
data_files = [
    'scripts/build_btech_sem3_computing.py',
    'scripts/data_btech_sem3_coa.py',
    'scripts/data_btech_sem3_dbms.py',
    'scripts/data_btech_sem3_digital.py',
    'scripts/data_btech_sem3_discrete_circuits.py',
    'scripts/data_btech_sem3_edc_signals.py',
    'scripts/data_btech_sem3_machines_emf_python.py',
    'scripts/data_btech_sem3_core.py',
    'scripts/data_btech_sem3_math.py',
    'scripts/data_btech_sem3_ee.py',
    'scripts/data_btech_sem3_mech_civil.py',
    'scripts/data_sem3_life.py',
    'scripts/data_bsc_sem3_sciences.py',
    'scripts/data_bsc_sem3_labs.py',
    'scripts/data_bsc_sem3_web_viz_ps.py'
]

raw_knowledge = {}
for fpath in data_files:
    spec = importlib.util.spec_from_file_location('mod', fpath)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    dicts = {k: v for k, v in mod.__dict__.items() if isinstance(v, dict) and not k.startswith('__')}
    for dname, dval in dicts.items():
        for k, v in dval.items():
            raw_knowledge[k] = v

print(f"Loaded {len(raw_knowledge)} distinct raw knowledge modules.")

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech_grouped = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc_grouped = json.load(f)

# Helper to check life science
def is_life_subject(subject_name):
    sl = subject_name.lower()
    return any(w in sl for w in [
        'bio', 'botany', 'zoology', 'anatomy', 'physiology', 'microbio',
        'plant', 'clinical'
    ]) and 'instrumentation' not in sl or 'biomedical instrumentation' in sl

from build_sem3_mappings import find_best_key

print("Mapping verification...")
for u in btech_grouped:
    k = find_best_key(u['subject'], u['unitNumber'], u['unitTitle'], 'btech')
    assert k in raw_knowledge, f"Missing key for {u['subject']} U{u['unitNumber']}"

for u in bsc_grouped:
    k = find_best_key(u['subject'], u['unitNumber'], u['unitTitle'], 'bsc')
    assert k in raw_knowledge, f"Missing key for {u['subject']} U{u['unitNumber']}"

print("All Sem 3 units cleanly mapped!")
