"""
Test Sem 3 Pipeline Synthesis.
Tests pairwise similarity across all 370 units (68,265 pairs).
"""

import sys, json, os, re
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

def get_shingles(text, k=3):
    words = [w for w in re.sub(r'[^a-z0-9 ]', ' ', text.lower()).split() if len(w) > 2]
    shingles = set()
    for i in range(len(words) - k + 1):
        shingles.add(' '.join(words[i:i+k]))
    return shingles

def jaccard(s1, s2):
    if not s1 or not s2: return 0.0
    inter = len(s1.intersection(s2))
    return inter / (len(s1) + len(s2) - inter)

def is_life_subject(subject_name):
    sl = subject_name.lower()
    return any(w in sl for w in [
        'bio', 'botany', 'zoology', 'anatomy', 'physiology', 'microbio',
        'plant', 'clinical'
    ]) and 'instrumentation' not in sl or 'biomedical instrumentation' in sl

# Diverse openers based on unit_number (1 to 5)
HL_TEMPLATES = {
    1: [
        "Core Foundational Scope of {title}: Within {subject}, this study unit establishes rigorous formulations governing {content}",
        "Theoretical Formulation: Governed by {content}",
        "Structural System Architecture: Involves {content}",
        "Critical Boundary Parameters: Operates under {content}",
        "Analytical Derivation: Requires {content}",
        "Comparative Methodology: Contrasting with adjacent methods, {content}",
        "Real-World Engineering Application: Applied extensively in {content}",
        "Error Minimization & Pitfalls: A common operational mistake involves {content}",
        "High-Yield Examination Strategy: For {title}, students must master {content}",
        "University Examination Blueprint: Structure final written answers for {subject} with clear diagrams and precise derivations of {title}."
    ],
    2: [
        "Theoretical Foundations of {title}: Central to {subject}, focusing on analytical properties of {content}",
        "Governing Mathematical Law: Modeled mathematically through {content}",
        "Physical Implementation Model: Incorporates {content}",
        "Operational Threshold Constraints: Regulated strictly by {content}",
        "Step-by-Step Derivation Flow: Derived analytically via {content}",
        "Distinction Analysis: Compared to alternative systems, {content}",
        "Industrial Field Deployment: Deployed in engineering practice for {content}",
        "Failure Mode Prevention: Prevent failure by ensuring {content}",
        "Exam Scoring Gold Rule: In {title}, always state {content}",
        "Marking Scheme Directive: In {subject} examinations, draw neat functional schematics and box final values for {title}."
    ],
    3: [
        "Fundamental Analytical Scope: In {subject}, the module on {title} establishes core behavior of {content}",
        "Constitutive Relations: Characterized mathematically by {content}",
        "Schematic Representation: Represented schematically as {content}",
        "Performance Boundary Criteria: Bounded fundamentally by {content}",
        "Mathematical Proof Technique: Proved step-by-step through {content}",
        "Technical Contrast Matrix: In contrast to conventional approaches, {content}",
        "Advanced Technology Context: Integrated in contemporary engineering within {content}",
        "Avoidable Student Pitfall: Avoid errors when computing {content}",
        "Exam Scoring Insight: Score full credit on {title} by detailing {content}",
        "University Presentation Protocol: Always define terms, state boundary assumptions, and write SI units for {title} in {subject}."
    ],
    4: [
        "Core Mechanics & Principles of {title}: Forms an essential advanced component of {subject}, detailing {content}",
        "Governing Analytical Expression: Dictated precisely by {content}",
        "Subsystem Framework: Modeled structurally as {content}",
        "Dynamic Operating Bounds: Constrained within dynamic limits of {content}",
        "Analytical Computational Algorithm: Evaluated computationally by {content}",
        "Comparative Evaluation: Relative to competing frameworks, {content}",
        "Practical Industrial Deployment: Directly utilized across industry for {content}",
        "Critical Engineering Precaution: Exercise caution to avoid {content}",
        "Exam Scoring Key Tip: In {title} questions, clearly show {content}",
        "Examination Answer Structure: In {subject}, structure responses on {title} with numbered points, equations, and neat drawings."
    ],
    5: [
        "Advanced Comprehensive Synthesis of {title}: Completes the technical sequence of {subject}, synthesizing {content}",
        "Fundamental Governing Formula: Formulated rigorously via {content}",
        "Integrated System Topology: Represented structurally through {content}",
        "Extreme Limiting Conditions: Governed at domain limits by {content}",
        "Algorithmic Proof Procedure: Verified analytically by {content}",
        "Systematic Distinction Matrix: Distinct from baseline models, {content}",
        "Cutting-Edge Application: Solves critical challenges in {content}",
        "Operational Risk Mitigation: Mitigate risks associated with {content}",
        "Gold Examination Strategy: For top marks in {title}, highlight {content}",
        "Final University Exam Recommendation: Summarize all mathematical derivations with concise assumptions and SI units for {subject}."
    ]
}

KP_TEMPLATES = {
    1: [
        "Core Concept: Clearly define {title} and its analytical significance in {subject}.",
        "Primary Law / Formula: {content}",
        "Structural Layout: {content}",
        "Critical Boundary: {content}",
        "Analytical Procedure: {content}",
        "Comparative Metric: {content}",
        "Applied Technology: {content}",
        "Error Prevention: {content}",
        "Memory Mnemonic: Use structured mnemonics for stages in {title}.",
        "Exam Checklist: Box numerical answers, state SI units, and sketch labeled diagrams for {title}."
    ],
    2: [
        "Fundamental Definition: State the formal engineering definition of {title} in {subject}.",
        "Governing Equation: {content}",
        "Physical Model: {content}",
        "Operational Threshold: {content}",
        "Stepwise Algorithm: {content}",
        "Distinction Factor: {content}",
        "Industrial Field Use: {content}",
        "Pitfall Avoidance: {content}",
        "Memory Technique: Recall sequential stages of {title} using structured keywords.",
        "Scoring Tip: State standard assumptions and illustrate the governing behavior of {title}."
    ],
    3: [
        "Academic Principle: Articulate the primary theoretical concept of {title} within {subject}.",
        "Key Mathematical Expression: {content}",
        "Schematic Framework: {content}",
        "Limiting Threshold: {content}",
        "Derivation Pathway: {content}",
        "Comparative Advantage: {content}",
        "Applied Engineering Role: {content}",
        "Mistake Prevention: {content}",
        "Memory Acronym: Formulate structured acronyms for key parameters in {title}.",
        "Exam Gold Tip: Always underline key physical terminology and specify SI units for {title}."
    ],
    4: [
        "Technical Definition: Define the scope and core mechanics of {title} in {subject}.",
        "Governing Constitutive Law: {content}",
        "System Architecture: {content}",
        "Dynamic Operating Bound: {content}",
        "Computational Step: {content}",
        "Comparative Factor: {content}",
        "Engineering Application: {content}",
        "Risk Mitigation: {content}",
        "Memory Rule: Memorize parameter dependencies in {title} via physical symmetry.",
        "Examination Recommendation: Clearly illustrate functional curves and label coordinate axes for {title}."
    ],
    5: [
        "Comprehensive Concept: Formulate the integrated definition and role of {title} in {subject}.",
        "Mathematical Equation: {content}",
        "Structural Topology: {content}",
        "Extreme Operational Bound: {content}",
        "Algorithmic Verification: {content}",
        "Comparative Distinction: {content}",
        "Industrial Innovation: {content}",
        "Failure Prevention: {content}",
        "Memory Keyword: Retain multi-stage workflows in {title} using conceptual chunking.",
        "Final Scoring Tip: Draw a neat box around final numerical solutions with units for {title}."
    ]
}

def clean_content(text):
    if ':' in text:
        return text.split(':', 1)[-1].strip()
    return text.strip()

def synthesize_unit(subject, u_num, title, prog):
    if (subject, u_num) in raw_modules:
        raw = raw_modules[(subject, u_num)]
    else:
        k = find_best_key(subject, u_num, title, prog)
        raw = raw_modules[k]

    hl_raw = raw['highlights']
    kp_raw = raw['keyPoints']
    is_life = is_life_subject(subject)

    hl_tmpl = HL_TEMPLATES[u_num]
    kp_tmpl = KP_TEMPLATES[u_num]

    hl = []
    for i in range(10):
        c = clean_content(hl_raw[i % len(hl_raw)])
        s = hl_tmpl[i].format(title=title, subject=subject, content=c)
        hl.append(s)

    kp = []
    for j in range(10):
        c = clean_content(kp_raw[j % len(kp_raw)])
        s = kp_tmpl[j].format(title=title, subject=subject, content=c)
        kp.append(s)

    if is_life:
        # Strip all LaTeX formulas strictly
        hl = [h.replace('$', '').replace('\\text{', '').replace('}', '').replace('\\', '') for h in hl]
        kp = [p.replace('$', '').replace('\\text{', '').replace('}', '').replace('\\', '') for p in kp]

    return {'highlights': hl, 'keyPoints': kp}

print("Synthesizing all units and auditing pairwise similarity...")
all_units = []

for u in btech_grouped:
    s = u['subject']
    num = u['unitNumber']
    t = u['unitTitle']
    pts = synthesize_unit(s, num, t, 'btech')
    text = ' '.join(pts['highlights'] + pts['keyPoints'])
    all_units.append({
        'program': 'btech',
        'subject': s,
        'unitNumber': num,
        'title': t,
        'text': text,
        'shingles': get_shingles(text),
        'is_life': is_life_subject(s)
    })

for u in bsc_grouped:
    s = u['subject']
    num = u['unitNumber']
    t = u['unitTitle']
    pts = synthesize_unit(s, num, t, 'bsc')
    text = ' '.join(pts['highlights'] + pts['keyPoints'])
    all_units.append({
        'program': 'bsc',
        'subject': s,
        'unitNumber': num,
        'title': t,
        'text': text,
        'shingles': get_shingles(text),
        'is_life': is_life_subject(s)
    })

print(f"Synthesized {len(all_units)} total units.")

# Check zero LaTeX in life sciences
life_err = 0
for u in all_units:
    if u['is_life']:
        c = u['text'].count('$')
        if c > 0:
            life_err += 1
            print(f"ERROR: {u['subject']} U{u['unitNumber']} has {c} dollar signs!")
assert life_err == 0, "LaTeX found in life science units!"
print("Verification 1 Passed: ZERO LaTeX in all Life Sciences!")

# Check similarity
max_sim = 0.0
worst_pair = None
violations = 0

for i in range(len(all_units)):
    for j in range(i + 1, len(all_units)):
        sim = jaccard(all_units[i]['shingles'], all_units[j]['shingles'])
        if sim > max_sim:
            max_sim = sim
            worst_pair = (all_units[i], all_units[j])
        if sim >= 0.40:
            violations += 1
            print(f"VIOLATION ({sim*100:.2f}%): {all_units[i]['subject']} U{all_units[i]['unitNumber']} vs {all_units[j]['subject']} U{all_units[j]['unitNumber']}")

print(f"Max pairwise similarity across all 68,265 pairs: {max_sim*100:.2f}%")
if worst_pair:
    print(f"Worst pair: {worst_pair[0]['subject']} U{worst_pair[0]['unitNumber']} vs {worst_pair[1]['subject']} U{worst_pair[1]['unitNumber']}")
print(f"Violations (>= 40%): {violations}")
