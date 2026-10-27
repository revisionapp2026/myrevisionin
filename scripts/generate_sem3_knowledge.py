import json
import importlib.util
import os
import re

# Load all unit definition modules
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
    'scripts/data_bsc_sem3_labs.py'
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

print(f"B.Tech Sem 3 items: {len(btech_grouped)}")
print(f"B.Sc Sem 3 items: {len(bsc_grouped)}")
