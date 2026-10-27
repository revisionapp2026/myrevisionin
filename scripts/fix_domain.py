with open('scripts/domain_knowledge.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix boolean -> bool
content = content.replace('is_set1: boolean', 'is_set1: bool')

# Fix line 191
old_191 = 'f"Error Analysis & Tolerance Verification: Computes absolute error $E_a = |x_{exp} - x_{true}|$ and percentage error $E_p = \\\\frac{|x_{exp} - x_{true}|}{x_{true}} \\\\times 100\\\\%$.",'
new_191 = 'f"Error Analysis & Tolerance Verification: Computes absolute error $E_a = |x_{{exp}} - x_{{true}}|$ and percentage error $E_p = \\\\frac{{|x_{{exp}} - x_{{true}}|}}{{x_{{true}}}} \\\\times 100\\\\%$.",'
content = content.replace(old_191, new_191)

with open('scripts/domain_knowledge.py', 'w', encoding='utf-8') as f:
    f.write(content)

print("domain_knowledge.py patched.")
