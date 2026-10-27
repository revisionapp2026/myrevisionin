import sys, os
sys.path.append('scripts')

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
    'data_bsc_sem3_web_viz_ps',
    'data_sem3_btech_missing',
    'data_sem3_life_complete'
]

all_units = {}
for m in data_files:
    try:
        mod = __import__(m)
        dicts = {k: v for k, v in mod.__dict__.items() if isinstance(v, dict) and not k.startswith('__')}
        count = 0
        sample_keys = []
        for dname, dval in dicts.items():
            for k, v in dval.items():
                all_units[k] = (m, dname)
                count += 1
                if len(sample_keys) < 3:
                    sample_keys.append(str(k))
        print(f"{m}: loaded {count} units | samples: {', '.join(sample_keys)}")
    except Exception as e:
        print(f"ERROR {m}: {e}")

print(f"\nTotal unique keys in all_units: {len(all_units)}")
