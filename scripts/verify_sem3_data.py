import sys, json, os, glob
sys.path.append('scripts')

# Check B.Sc Sem 3
bsc_grouped = json.load(open('scripts/sem3_bsc_grouped.json', encoding='utf-8'))
from data_sem3_bsc_sciences_missing import bsc_computing_math_data
from data_sem3_life_complete import life_complete_data
pc_data = json.load(open('scripts/sem3_bsc_physics_chem_data.json', encoding='utf-8'))

all_bsc_sem3 = {}
for k, v in bsc_computing_math_data.items():
    all_bsc_sem3[(k[0].strip(), int(k[1]))] = v
for k, v in life_complete_data.items():
    all_bsc_sem3[(k[0].strip(), int(k[1]))] = v
for k, v in pc_data.items():
    sub, u = k.split(':::')
    all_bsc_sem3[(sub.strip(), int(u))] = v

print('B.Sc Sem 3 units collected:', len(all_bsc_sem3))
bad_bsc = []
for item in bsc_grouped:
    key = (item['subject'].strip(), int(item['unitNumber']))
    u_data = all_bsc_sem3.get(key)
    if not u_data:
        bad_bsc.append((key, 'missing'))
    elif len(u_data.get('highlights', [])) != 10 or len(u_data.get('keyPoints', [])) != 10:
        bad_bsc.append((key, f"counts: {len(u_data.get('highlights', []))} / {len(u_data.get('keyPoints', []))}"))

print('B.Sc Sem 3 issues:', len(bad_bsc))
if bad_bsc:
    print('Sample B.Sc issues:', bad_bsc[:5])

# Check B.Tech Sem 3
btech_grouped = json.load(open('scripts/sem3_btech_grouped.json', encoding='utf-8'))
all_btech_sem3 = {}

for bf in glob.glob('scripts/sem3_btech_batch*_data.json'):
    data = json.load(open(bf, encoding='utf-8'))
    for k, v in data.items():
        sep = ':::Unit ' if ':::Unit ' in k else ':::'
        s, u = k.split(sep)
        all_btech_sem3[(s.strip(), int(u))] = v

if os.path.exists('scripts/sem3_btech_missing_data.json'):
    data = json.load(open('scripts/sem3_btech_missing_data.json', encoding='utf-8'))
    for k, v in data.items():
        sep = ':::Unit ' if ':::Unit ' in k else ':::'
        s, u = k.split(sep)
        all_btech_sem3[(s.strip(), int(u))] = v

from data_sem3_btech_missing import btech_missing_data
for k, v in btech_missing_data.items():
    all_btech_sem3[(k[0].strip(), int(k[1]))] = v

for k, v in life_complete_data.items():
    all_btech_sem3[(k[0].strip(), int(k[1]))] = v

from build_btech_sem3_math_ece import data as math_ece
for k, v in math_ece.items():
    s, u = k.split(':::Unit ')
    all_btech_sem3[(s.strip(), int(u))] = v

from build_btech_sem3_math_remaining4 import data as math_rem
for k, v in math_rem.items():
    s, u = k.split(':::Unit ')
    all_btech_sem3[(s.strip(), int(u))] = v

print('B.Tech Sem 3 units collected:', len(all_btech_sem3))
bad_btech = []
for item in btech_grouped:
    key = (item['subject'].strip(), int(item['unitNumber']))
    u_data = all_btech_sem3.get(key)
    if not u_data:
        bad_btech.append((key, 'missing'))
    elif len(u_data.get('highlights', [])) != 10 or len(u_data.get('keyPoints', [])) != 10:
        bad_btech.append((key, f"counts: {len(u_data.get('highlights', []))} / {len(u_data.get('keyPoints', []))}"))

print('B.Tech Sem 3 issues:', len(bad_btech))
if bad_btech:
    print('Sample B.Tech issues:', bad_btech[:5])
