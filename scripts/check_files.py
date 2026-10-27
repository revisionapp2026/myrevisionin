import os

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

for f in data_files:
    path = os.path.join('scripts', f + '.py')
    print(f"{f}: {os.path.exists(path)}")
