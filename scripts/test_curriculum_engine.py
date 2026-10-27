"""
Prototype Curriculum Engine Test.
Validates generation logic, KaTeX vs zero-LaTeX compliance, and pairwise similarity.
"""

import json
import re

def is_life_science_subject(subject_name: str) -> bool:
    s = subject_name.lower()
    return any(w in s for w in [
        'bio', 'botany', 'zoology', 'anatomy', 'physiology', 'microbio',
        'genetics', 'cell', 'molecular biology', 'immunology', 'embryology',
        'herbal', 'clinical', 'pathology', 'plant', 'animal', 'biomaterial',
        'biomechanic', 'bioprocess', 'biosignal', 'tissue', 'biomedical waste'
    ]) and not ('biomedical instrumentation' in s and 'circuit' in s)

def is_qualitative_subject(subject_name: str) -> bool:
    s = subject_name.lower()
    return any(w in s for w in [
        'english', 'communication', 'ethics', 'constitution', 'management',
        'law', 'governance', 'ipr', 'intellectual property', 'humanities',
        'entrepreneurship', 'sociology', 'environmental studies'
    ])

print("Helper defined.")
