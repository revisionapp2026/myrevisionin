import json
import importlib.util

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc = json.load(f)

# Load already created units from python data files
existing_units = {}
files = [
    'scripts/build_btech_sem3_computing.py',
    'scripts/data_btech_sem3_coa.py',
    'scripts/data_btech_sem3_dbms.py',
    'scripts/data_btech_sem3_digital.py',
    'scripts/data_btech_sem3_discrete_circuits.py',
    'scripts/data_btech_sem3_edc_signals.py',
    'scripts/data_btech_sem3_machines_emf_python.py',
    'scripts/data_btech_sem3_core.py'
]

for fpath in files:
    spec = importlib.util.spec_from_file_location('mod', fpath)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    dicts = {k: v for k, v in mod.__dict__.items() if isinstance(v, dict) and not k.startswith('__')}
    for dname, dval in dicts.items():
        for k, v in dval.items():
            existing_units[k] = v

print(f"Loaded {len(existing_units)} existing units.")

btech_subjects = {}
for u in btech:
    s = u['subject']
    num = u['unitNumber']
    t = u['unitTitle']
    btech_subjects.setdefault(s, {})[num] = t

print(f"\nB.Tech Sem 3: {len(btech_subjects)} subjects, {sum(len(v) for v in btech_subjects.values())} units.")

bsc_subjects = {}
for u in bsc:
    s = u['subject']
    num = u['unitNumber']
    t = u['unitTitle']
    bsc_subjects.setdefault(s, {})[num] = t

print(f"B.Sc Sem 3: {len(bsc_subjects)} subjects, {sum(len(v) for v in bsc_subjects.values())} units.")
