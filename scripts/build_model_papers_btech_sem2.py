import json
import os

papers = {}

def add_paper(subject_name, is_set1, questions):
    key = f"{subject_name}__set1" if is_set1 else f"{subject_name}__set2"
    assert len(questions) >= 8, f"Paper {key} has only {len(questions)} questions"
    papers[key] = questions

print("Builder initialized for B.Tech Sem 2 Model Papers.")
