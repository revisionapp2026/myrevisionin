import sys

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

for mod_name in btech_files:
    try:
        mod = __import__(mod_name)
        vars = [a for a in dir(mod) if not a.startswith("__")]
        print(f"{mod_name}: vars = {vars}")
        for v in vars:
            obj = getattr(mod, v)
            if isinstance(obj, dict):
                print(f"   dict '{v}' has {len(obj)} items, sample key: {next(iter(obj.keys())) if obj else None}")
    except Exception as e:
        print(f"Error {mod_name}: {e}")
