"""
Master Assembler for Semester 3 Curriculum and Model Papers.
Builds:
1. src/lib/content-btech-sem3.ts
2. src/lib/content-bsc-sem3.ts
3. src/lib/model-papers-btech-sem3.ts
4. src/lib/model-papers-bsc-sem3.ts
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

print("Master Assembler initialized.")
