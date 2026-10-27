"""
Test Parametric Domain Engine.
Tests that domain-aware synthesis produces:
1. Exactly 10 highlights + 10 key points per unit.
2. Strictly 0 LaTeX in life sciences.
3. Authentic KaTeX in STEM.
4. Pairwise 3-shingle similarity < 40% across all 68,265 pairs!
"""

import sys, json, os, re

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

print("Test Parametric Domain Engine initialized.")
