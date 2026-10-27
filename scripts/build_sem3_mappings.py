import json
import importlib.util

# Load raw knowledge
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
    'scripts/data_bsc_sem3_labs.py',
    'scripts/data_bsc_sem3_web_viz_ps.py'
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

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech_grouped = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc_grouped = json.load(f)

print(f"Loaded {len(raw_knowledge)} distinct raw knowledge modules.")

def find_best_key(subject, u_num, title, prog):
    s = subject.lower()
    t = title.lower()

    # Direct match in raw_knowledge keys
    for k in raw_knowledge:
        if t in k or k in t:
            return k

    # Subject specific mappings
    if 'data structure' in s or 'dsa' in s:
        if u_num == 1: return "btech-dsa: arrays & linked lists"
        if u_num == 2: return "btech-dsa: stacks & queues"
        if u_num == 3: return "btech-dsa: trees & graphs"
        if u_num == 4: return "btech-dsa: sorting & searching"
        if u_num == 5: return "btech-dsa: hashing & algorithm analysis"

    if 'computer organization' in s or 'coa' in s:
        if u_num == 1: return "btech-coa: basic computer organization"
        if u_num == 2: return "btech-coa: instruction sets & addressing"
        if u_num == 3: return "btech-coa: arithmetic & logic unit"
        if u_num == 4: return "btech-coa: memory hierarchy"
        if u_num == 5: return "btech-coa: i/o organization & pipelining"

    if 'database' in s or 'dbms' in s:
        if u_num == 1: return "btech-dbms: er model"
        if u_num == 2: return "btech-dbms: relational model & sql"
        if u_num == 3: return "btech-dbms: normalization"
        if u_num == 4: return "btech-dbms: transactions"
        if u_num == 5: return "btech-dbms: indexing & storage"

    if 'digital logic' in s or 'dld' in s or 'digital electronic' in s:
        if u_num == 1: return "btech-dld: number systems & codes" if 'number' in t else "btech-de: logic gates"
        if u_num == 2: return "btech-dld: boolean algebra" if 'boolean' in t else "btech-de: combinational circuits"
        if u_num == 3: return "btech-de: combinational circuits" if 'combinational' in t else "btech-de: sequential circuits"
        if u_num == 4: return "btech-de: sequential circuits" if 'sequential' in t else "btech-de: counters & registers"
        if u_num == 5: return "btech-de: memory & plds"

    if 'discrete' in s:
        if u_num == 1: return "btech-dm: set theory & logic"
        if u_num == 2: return "btech-dm: relations & functions"
        if u_num == 3: return "btech-dm: graph theory"
        if u_num == 4: return "btech-dm: combinatorics"
        if u_num == 5: return "btech-dm: algebraic structures"

    if 'circuit' in s or 'network' in s:
        if u_num == 1: return "btech-circuits: network theorems"
        if u_num == 2: return "btech-circuits: transient analysis"
        if u_num == 3: return "btech-circuits: ac analysis & two-port networks"
        if u_num == 4: return "btech-circuits: ac analysis & two-port networks"
        if u_num == 5: return "btech-circuits: network theorems"

    if 'electronic devices' in s or 'edc' in s:
        if u_num == 1: return "btech-edc: semiconductor physics"
        if u_num == 2: return "btech-edc: diodes & applications"
        if u_num == 3: return "btech-edc: bjt & fet"
        if u_num == 4: return "btech-edc: bjt & fet"
        if u_num == 5: return "btech-edc: diodes & applications"

    if 'signals & systems' in s or 'signals' in s:
        if u_num == 1: return "btech-signals: signal classification & lti systems"
        if u_num == 2: return "btech-signals: signal classification & lti systems"
        if u_num == 3: return "btech-signals: fourier & laplace transforms"
        if u_num == 4: return "btech-signals: fourier & laplace transforms"
        if u_num == 5: return "btech-signals: fourier & laplace transforms"

    if 'sensor' in s or 'transducer' in s:
        if u_num == 1: return "btech-sensor: sensor fundamentals"
        if u_num == 2: return "btech-sensor: displacement sensors"
        if u_num == 3: return "btech-sensor: temperature sensors"
        if u_num == 4: return "btech-sensor: optical sensors"
        if u_num == 5: return "btech-sensor: smart sensors"

    if 'machine' in s and ('electrical' in s or 'machines' in s):
        if u_num == 1: return "btech-machines: transformers"
        if u_num == 2: return "btech-machines: dc machines"
        if u_num == 3: return "btech-machines: induction machines"
        if u_num == 4: return "btech-machines: synchronous machines" if 'synchronous' in t else "btech-machines: dc machines testing"
        if u_num == 5: return "btech-machines: induction machines"

    if 'electromagnetic' in s or 'emf' in s:
        if u_num == 1: return "btech-emf: vector analysis & electrostatics"
        if u_num == 2: return "btech-emf: vector analysis & electrostatics"
        if u_num == 3: return "btech-emf: magnetostatics & maxwell equations"
        if u_num == 4: return "btech-emf: magnetostatics & maxwell equations"
        if u_num == 5: return "btech-emf: wave propagation"

    if 'numerical' in s:
        if u_num == 1: return "btech-num: error analysis"
        if u_num == 2: return "btech-num: roots of equations"
        if u_num == 3: return "btech-num: linear systems"
        if u_num == 4: return "btech-num: interpolation & integration"
        if u_num == 5: return "btech-num: ode solutions"

    if 'statistic' in s or 'probability' in s:
        if u_num == 1: return "btech-stat: descriptive statistics"
        if u_num == 2: return "btech-stat: probability distributions"
        if u_num == 3: return "btech-stat: hypothesis testing"
        if u_num == 4: return "btech-stat: hypothesis testing"
        if u_num == 5: return "btech-stat: regression"

    if 'mathematics' in s or 'math' in s:
        if u_num == 1: return "btech-num: roots of equations" if 'linear' not in t else "btech-num: linear systems"
        if u_num == 2: return "btech-m3: partial differential equations" if 'partial' in t else "btech-m3: complex analysis"
        if u_num == 3: return "btech-m3: complex analysis" if 'complex' in t else "btech-stat: probability distributions"
        if u_num == 4: return "btech-m3: random processes" if 'random' in t else "btech-stat: probability distributions"
        if u_num == 5: return "btech-stat: hypothesis testing" if 'stat' in t else "btech-num: ode solutions"

    if 'aerospace' in s or 'material' in s:
        if u_num == 1: return "btech-aero: metals & alloys" if 'metal' in t else "btech-materials: crystal structure & properties"
        if u_num == 2: return "btech-materials: crystal structure & properties"
        if u_num == 3: return "btech-materials: crystal structure & properties"
        if u_num == 4: return "btech-aero: fatigue & fracture"
        if u_num == 5: return "btech-aero: fatigue & fracture"

    if 'building' in s or 'civil' in s or 'surveying' in s or 'geology' in s:
        if u_num == 1: return "btech-civil: materials & surveying"
        if u_num == 2: return "btech-civil: cement & concrete"
        if u_num == 3: return "btech-civil: cement & concrete"
        if u_num == 4: return "btech-civil: materials & surveying"
        if u_num == 5: return "btech-civil: materials & surveying"

    if 'fluid' in s:
        return "btech-fluid: properties & statics"

    if 'thermodynamic' in s:
        return "btech-thermo: basic concepts & laws" if u_num in [1, 3] else "btech-chem: chemical thermo"

    if 'manufacturing' in s or 'machine drawing' in s:
        return "btech-mech: manufacturing"

    if 'solar' in s:
        return "btech-solar: solar fundamentals"

    if 'python' in s:
        return "btech-python: data science foundations"

    if 'oop' in s or 'object oriented' in s:
        return "btech-oop: design patterns & advanced principles"

    # Life Sciences
    if any(w in s for w in ['biochem', 'bio-fertilizer', 'bioinformatic', 'botany', 'zoology', 'anatomy', 'microbio', 'molecular', 'plant']):
        if 'biochem' in s or 'bio-fertilizer' in s or 'bioinformatic' in s:
            if u_num == 1: return "sem3-life: biomolecules"
            if u_num == 2: return "sem3-life: enzymes"
            if u_num == 3: return "sem3-life: metabolism"
            if u_num == 4: return "sem3-life: molecular biology"
            if u_num == 5: return "sem3-life: biomolecules"
        if 'anatomy' in s or 'physiology' in s:
            return "sem3-life: anatomy & physiology"
        if 'microbio' in s:
            return "sem3-life: microbiology"
        if 'molecular' in s:
            return "sem3-life: molecular biology"
        if 'plant' in s or 'botany' in s:
            return "sem3-life: plant anatomy"
        return "sem3-life: biomolecules"

    # BSc Sciences
    if 'analytical' in s or 'titrimetry' in t:
        return "bsc-chem: titrimetry"
    if 'chromatography' in t or 'spectroscopy' in t or 'instrumentation' in s:
        return "bsc-chem: chromatography & spectroscopy"
    if 'organic' in s or 'carbonyl' in t:
        return "bsc-chem: carbonyls & amines"
    if 'real analysis' in s or 'analysis' in s:
        return "bsc-math: real analysis"
    if 'calculus' in s:
        return "bsc-math: multivariable calculus"
    if 'thermal physics' in s:
        return "bsc-ph: thermal & statistical"

    # BSc Labs
    if 'botany lab' in s:
        return "bsc-lab-bot3: procedures & identification"
    if 'zoology lab' in s:
        return "bsc-lab-zoo3: procedures & mounts"
    if 'molecular biology lab' in s:
        return "bsc-lab-molbio: protocols & assays"
    if 'physics lab' in s:
        return "bsc-lab-ph3: safety & calibration"
    if 'dbms lab' in s:
        return "bsc-lab-dbms: sql & procedures"
    if 'oop lab' in s:
        return "bsc-lab-oop: java cpp programs"
    if 'chemistry lab' in s:
        return "bsc-chem: titrimetry"

    # Web, Viz & PS
    if 'web design' in s:
        return "bsc-web: html fundamentals" if u_num in [1, 3] else "bsc-web: css & responsive design"
    if 'data visualization' in s:
        return "bsc-viz: visualization principles" if u_num in [1, 2] else "bsc-viz: dashboards & storytelling"
    if 'problem solving' in s:
        return "bsc-ps: problem solving methodologies"

    return None

btech_mapped = 0
for u in btech_grouped:
    k = find_best_key(u['subject'], u['unitNumber'], u['unitTitle'], 'btech')
    if k and k in raw_knowledge:
        btech_mapped += 1
    else:
        print(f"[UNMAPPED BTECH] {u['subject']} U{u['unitNumber']}: {u['unitTitle']} -> got {k}")

bsc_mapped = 0
for u in bsc_grouped:
    k = find_best_key(u['subject'], u['unitNumber'], u['unitTitle'], 'bsc')
    if k and k in raw_knowledge:
        bsc_mapped += 1
    else:
        print(f"[UNMAPPED BSC] {u['subject']} U{u['unitNumber']}: {u['unitTitle']} -> got {k}")

print(f"\nResult: B.Tech mapped {btech_mapped} / {len(btech_grouped)} units.")
print(f"Result: B.Sc mapped {bsc_mapped} / {len(bsc_grouped)} units.")
