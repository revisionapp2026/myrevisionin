import json
import re

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

# Let's inspect how many pairs there will be
# 370 units -> 370 * 369 / 2 = 68,265 pairs.
# Computing 68k pairs in Python takes only 2-3 seconds!
print("Shingle and Jaccard utilities ready.")
