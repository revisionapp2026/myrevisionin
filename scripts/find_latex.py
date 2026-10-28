import re

with open('src/lib/content-bsc-sem3.ts', encoding='utf-8') as f:
    s = f.read()

keywords = ['botany', 'zoology', 'biotech', 'microbio', 'life']

# Check content
content_matches = re.findall(r'"([^"]+:::u\d+)":\s*\{\s*"highlights":\s*\[(.*?)\]', s, re.DOTALL)
for k, chunk in content_matches:
    if any(w in k for w in keywords):
        if '$' in chunk:
            print("LaTeX in content:", k)

with open('src/lib/model-papers-bsc-sem3.ts', encoding='utf-8') as f:
    s2 = f.read()

# Check papers
paper_keys = re.findall(r'"([^"]+_set[12])":\s*\[', s2)
for k in paper_keys:
    if any(w in k for w in keywords):
        start = s2.find(f'"{k}":')
        end = s2.find('\n  ],', start)
        chunk = s2[start:end]
        if '$' in chunk:
            print("LaTeX in paper:", k)
