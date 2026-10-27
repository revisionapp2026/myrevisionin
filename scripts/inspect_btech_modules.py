import sys
import glob
import os

btech_files = [
    "data_btech_sem3_coa",
    "data_btech_sem3_core",
    "data_btech_sem3_dbms",
    "data_btech_sem3_digital",
    "data_btech_sem3_discrete_circuits",
    "data_btech_sem3_edc_signals",
    "data_btech_sem3_ee",
    "data_btech_sem3_machines_emf_python",
    "data_btech_sem3_math",
    "data_btech_sem3_mech_civil_full",
    "data_btech_sem3_civil_geo_survey"
]

sys.path.append("scripts")

total_units = 0
found_units = {}
for mod_name in btech_files:
    try:
        mod = __import__(mod_name)
        # find dicts in mod
        for attr in dir(mod):
            val = getattr(mod, attr)
            if isinstance(val, dict):
                # check if it looks like unit data
                sample_k = next(iter(val.keys())) if val else None
                if sample_k and (isinstance(sample_k, tuple) or ":::" in str(sample_k) or "__" in str(sample_k)):
                    print(f"Mod {mod_name}.{attr}: {len(val)} units, sample: {sample_k}")
                    for k, v in val.items():
                        found_units[k] = v
    except Exception as e:
        print(f"Error importing {mod_name}: {e}")

print(f"Total found units in existing modules: {len(found_units)}")
