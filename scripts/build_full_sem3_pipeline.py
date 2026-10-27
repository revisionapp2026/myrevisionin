"""
Comprehensive Semester 3 Pipeline:
Generates content-btech-sem3.ts, content-bsc-sem3.ts, model-papers-btech-sem3.ts, and model-papers-bsc-sem3.ts.
"""

import sys, json, os, re

# Load all prepared unit modules from scripts
sys.path.append('scripts')
from build_sem3_mappings import find_best_key
from generate_all_sem3_final import raw_modules

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech_grouped = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc_grouped = json.load(f)

# Also load mech_civil_data
from data_btech_sem3_mech_civil_full import mech_civil_data
for k, v in mech_civil_data.items():
    raw_modules[k] = v

# Also load civil_geo_survey_data
from data_btech_sem3_civil_geo_survey import civil_geo_survey_data
for k, v in civil_geo_survey_data.items():
    raw_modules[k] = v

print(f"Total raw modules ready: {len(raw_modules)}")
