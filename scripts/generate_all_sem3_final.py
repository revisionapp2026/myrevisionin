"""
Semester 3 Master Synthesizer:
Constructs high-density curriculum points and solved model papers for all
40 B.Tech Sem 3 subjects and 34 B.Sc Sem 3 subjects.
"""

import sys, json, os, re
sys.path.append('scripts')

# Load all unit definition modules
data_files = [
    'build_btech_sem3_computing',
    'data_btech_sem3_coa',
    'data_btech_sem3_dbms',
    'data_btech_sem3_digital',
    'data_btech_sem3_discrete_circuits',
    'data_btech_sem3_edc_signals',
    'data_btech_sem3_machines_emf_python',
    'data_btech_sem3_core',
    'data_btech_sem3_math',
    'data_btech_sem3_ee',
    'data_btech_sem3_mech_civil',
    'data_btech_sem3_mech_civil_full',
    'data_btech_sem3_civil_geo_survey',
    'data_sem3_life',
    'data_bsc_sem3_sciences',
    'data_bsc_sem3_labs',
    'data_bsc_sem3_web_viz_ps'
]

raw_modules = {}
for m in data_files:
    try:
        mod = __import__(m)
        dicts = {k: v for k, v in mod.__dict__.items() if isinstance(v, dict) and not k.startswith('__')}
        for dname, dval in dicts.items():
            for k, v in dval.items():
                raw_modules[k] = v
    except Exception as e:
        print(f"Error loading {m}: {e}")

print(f"Total raw curriculum modules loaded: {len(raw_modules)}")

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech_grouped = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc_grouped = json.load(f)

print(f"B.Tech Sem 3 units to synthesize: {len(btech_grouped)}")
print(f"B.Sc Sem 3 units to synthesize: {len(bsc_grouped)}")
