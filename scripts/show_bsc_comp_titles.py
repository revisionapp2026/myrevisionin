import json

bsc_grouped = json.load(open('scripts/sem3_bsc_grouped.json', encoding='utf-8'))

def show_titles(subs):
    for u in bsc_grouped:
        if u['subject'] in subs:
            print(f"('{u['subject']}', {u['unitNumber']}): '{u['unitTitle']}',")

print("=== PART 1: OOP & OOP Lab ===")
show_titles(['Object Oriented Programming (Java/C++)', 'OOP Lab'])

print("\n=== PART 2: DBMS & DBMS Lab ===")
show_titles(['Database Management & SQL', 'DBMS Lab'])

print("\n=== PART 3: Numerical & Stat Inference ===")
show_titles(['Numerical Methods & Optimization', 'Statistical Inference / OOP'])

print("\n=== PART 4: Problem Solving & Python ===")
show_titles(['Problem Solving', 'Python Programming'])

print("\n=== PART 5: OOP/DBMS & Real Analysis ===")
show_titles(['OOP / DBMS', 'Real Analysis'])

print("\n=== PART 6: Calculus & Math III / Botany III ===")
show_titles(['Differential & Integral Calculus', 'Mathematics III / Botany III'])

print("\n=== PART 7: Web Design & Data Viz ===")
show_titles(['Web Design (HTML/CSS)', 'Data Visualization (Tableau/Power BI)'])
