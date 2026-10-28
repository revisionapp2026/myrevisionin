import json

transcript_path = r'C:\Users\nanda\.gemini\antigravity-ide\brain\bd337a77-4011-4331-87cf-04371367b31f\.system_generated\logs\transcript_full.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i == 9600:
            print(line[:500])
