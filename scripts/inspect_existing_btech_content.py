import sys
sys.path.append('scripts')

mods = [
    ("data_btech_sem3_coa", "coa_units"),
    ("data_btech_sem3_dbms", "dbms_digital_units"),
    ("data_btech_sem3_digital", "digital_units"),
    ("data_btech_sem3_discrete_circuits", "discrete_circuits_units"),
    ("data_btech_sem3_edc_signals", "edc_signals_units"),
    ("data_btech_sem3_ee", "btech_sem3_ee_units"),
    ("data_btech_sem3_machines_emf_python", "machines_emf_python_units"),
    ("data_btech_sem3_math", "btech_sem3_math_units"),
    ("data_btech_sem3_core", "core_units"),
]

for mod_name, var_name in mods:
    mod = __import__(mod_name)
    d = getattr(mod, var_name)
    print(f"=== {mod_name}.{var_name} ({len(d)} units) ===")
    for k in d.keys():
        print(f"  key: {k}")
