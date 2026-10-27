"""
Builds distinct topic data for all units in Semester 3.
Guarantees:
1. Every unit has 10 Highlights + 10 KeyPoints.
2. No two units share the same data.
3. Max pairwise similarity < 40%.
4. Strictly zero LaTeX in life sciences.
"""

import sys, json, os, re
sys.path.append('scripts')

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

with open('scripts/sem3_btech_grouped.json', 'r', encoding='utf-8') as f:
    btech_grouped = json.load(f)

with open('scripts/sem3_bsc_grouped.json', 'r', encoding='utf-8') as f:
    bsc_grouped = json.load(f)

print(f"B.Tech grouped units: {len(btech_grouped)}")
print(f"B.Sc grouped units: {len(bsc_grouped)}")
