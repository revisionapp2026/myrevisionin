"""
Automated Curriculum Engine for Semester 3.
Defines authentic, textbook-level curriculum units across all subjects in B.Tech and B.Sc.
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

print("Curriculum engine initialized.")
