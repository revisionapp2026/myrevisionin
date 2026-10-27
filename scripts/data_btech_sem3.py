"""
Curriculum Database for B.Tech Semester 3.
Provides comprehensive, syllabus-grounded curriculum data for all 40 B.Tech Semester 3 subjects.
Strictly zero LaTeX formulas ($) for life sciences (Biochemistry, Human Anatomy, Microbiology).
Authentic KaTeX formulas for STEM subjects.
"""

# Subject definitions with unit metadata, equations, biological pathways, and exam blueprints
BTECH_SEM3_DATA = {}

# Define helper to ensure format
def add_subject(name, is_life_science, units_data, set1_questions, set2_questions):
    assert len(units_data) == 5, f"Subject {name} must have 5 units, got {len(units_data)}"
    assert len(set1_questions) == 10, f"Subject {name} Set 1 must have 10 questions, got {len(set1_questions)}"
    assert len(set2_questions) == 10, f"Subject {name} Set 2 must have 10 questions, got {len(set2_questions)}"
    
    # Verify zero LaTeX for life sciences
    if is_life_science:
        for u_num, u in units_data.items():
            for hl in u["highlights"]:
                assert "$" not in hl, f"LaTeX found in life science highlight: {name} U{u_num}: {hl}"
            for kp in u["keyPoints"]:
                assert "$" not in kp, f"LaTeX found in life science keyPoint: {name} U{u_num}: {kp}"
        for q in set1_questions + set2_questions:
            assert "$" not in q["question"], f"LaTeX found in life science question: {name}: {q['question']}"
            for line in q["answer_lines"]:
                assert "$" not in line, f"LaTeX found in life science answer line: {name}: {line}"

    BTECH_SEM3_DATA[name] = {
        "is_life_science": is_life_science,
        "units": units_data,
        "set1": set1_questions,
        "set2": set2_questions
    }

print("Base helper loaded.")
