import json

subjects_data = {}

def add_paper(sub_key, set_num, q_list):
    key = f"{sub_key}_set{set_num}"
    subjects_data[key] = q_list

# =========================================================================
# 6. PYTHON PROGRAMMING
# =========================================================================
add_paper("python", 1, [
    {
        "id": "py-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between mutable and immutable data types in Python with examples.",
        "answer_lines": [
            "**Mutable Types**: Objects whose internal state or values can be modified in-place after creation without changing identity (`id()`). Examples: `list`, `dict`, `set`.",
            "**Immutable Types**: Objects whose state cannot be altered once created; any modification produces a new object in memory. Examples: `int`, `float`, `str`, `tuple`, `frozenset`."
        ]
    },
    {
        "id": "py-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Explain list comprehension syntax and compare its execution efficiency with a standard `for` loop.",
        "answer_lines": [
            "**Syntax**: `[expression for item in iterable if condition]`.",
            "**Efficiency**: List comprehensions execute at C-level speed inside Python bytecode without the runtime overhead of repeatedly looking up and calling `.append()` method."
        ]
    },
    {
        "id": "py-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "What is the difference between `*args` and `**kwargs` in Python functions?",
        "answer_lines": [
            "**`*args`**: Captures a variable number of positional arguments into a `tuple`.",
            "**`**kwargs`**: Captures a variable number of keyword (named) arguments into a `dict`."
        ]
    },
    {
        "id": "py-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Explain Python's `with` statement and the context manager protocol.",
        "answer_lines": [
            "The `with` statement guarantees deterministic resource cleanup (closing files, releasing locks). It relies on context managers implementing `__enter__()` (allocating resource) and `__exit__()` (handling cleanup and exception suppression)."
        ]
    },
    {
        "id": "py-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between the `is` keyword and the `==` operator in Python.",
        "answer_lines": [
            "**`==` Operator**: Evaluates value equality (calls `__eq__()` to check if values are logically identical).",
            "**`is` Operator**: Evaluates identity equality (checks whether both operands reference the exact same memory address `id(a) == id(b)`)."
        ]
    },
    {
        "id": "py-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Python Generators and the `yield` statement. Implement an infinite Fibonacci generator and demonstrate memory advantages over list generation.",
        "answer_lines": [
            "**1. Theoretical Mechanics**: A generator function uses `yield` instead of `return`. When called, it returns a generator iterator without executing immediately. Each `next()` call executes code up to `yield`, suspends execution state (local variables, instruction pointer), and produces the value lazily on-demand.",
            "**2. Code Implementation**:",
            "```python",
            "import itertools",
            "import sys",
            "",
            "def fibonacci_generator():",
            "    a, b = 0, 1",
            "    while True:",
            "        yield a",
            "        a, b = b, a + b",
            "",
            "# Extract first 10 numbers lazily",
            "fib_gen = fibonacci_generator()",
            "first_ten = list(itertools.islice(fib_gen, 10))",
            "print(\"First 10 Fibonacci:\", first_ten)",
            "```",
            "**3. Memory Analysis**:",
            "• Generating 1,000,000 numbers as a list requires allocating $\\approx 8\\text{ MB}$ of contiguous memory (`sys.getsizeof([x for x in range(1000000)])`).",
            "• A generator consumes a constant $O(1)$ memory footprint (typically $\\approx 100$ bytes for generator object frame), generating values in streaming fashion."
        ]
    },
    {
        "id": "py-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Demonstrate Object-Oriented Programming in Python. Implement an `Employee` and `Manager` class hierarchy using inheritance, `@property`, `super()`, and dunder methods.",
        "answer_lines": [
            "**1. Python OOP Architecture**: Supports class hierarchies, single and multiple inheritance, method resolution order (C3 Linearization MRO), encapsulation via name mangling (`__var`), and operator overloading through dunder methods.",
            "**2. Implementation Code**:",
            "```python",
            "class Employee:",
            "    def __init__(self, emp_id: int, name: str, salary: float):",
            "        self.emp_id = emp_id",
            "        self.name = name",
            "        self._salary = salary # Protected attribute",
            "",
            "    @property",
            "    def salary(self) -> float:",
            "        return self._salary",
            "",
            "    @salary.setter",
            "    def salary(self, value: float):",
            "        if value < 0:",
            "            raise ValueError(\"Salary cannot be negative\")",
            "        self._salary = value",
            "",
            "    def calculate_bonus(self) -> float:",
            "        return self._salary * 0.10",
            "",
            "    def __str__(self):",
            "        return f\"Employee({self.emp_id}, {self.name}, ${self._salary:.2f})\"",
            "",
            "class Manager(Employee):",
            "    def __init__(self, emp_id: int, name: str, salary: float, department: str):",
            "        super().__init__(emp_id, name, salary)",
            "        self.department = department",
            "",
            "    def calculate_bonus(self) -> float:",
            "        # Managers get base bonus plus department incentive",
            "        return super().calculate_bonus() + 5000.0",
            "```"
        ]
    },
    {
        "id": "py-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Exception Handling in Python. Create a custom exception `InvalidScoreError` and write a robust function to process student score dictionaries.",
        "answer_lines": [
            "**1. Error Handling Workflow**: Uses `try` (code under test), `except` (catch specific exceptions), `else` (executes only if no exception occurred), and `finally` (unconditional execution).",
            "**2. Custom Exception Implementation**:",
            "```python",
            "class InvalidScoreError(Exception):",
            "    def __init__(self, score, message=\"Score must be between 0 and 100\"):",
            "        self.score = score",
            "        super().__init__(f\"{message}: Received {score}\")",
            "",
            "def calculate_grade_average(scores_dict: dict) -> float:",
            "    if not scores_dict:",
            "        raise ValueError(\"Score dictionary cannot be empty\")",
            "",
            "    total = 0.0",
            "    for subject, score in scores_dict.items():",
            "        if not isinstance(score, (int, float)):",
            "            raise TypeError(f\"Score for {subject} must be numeric\")",
            "        if not (0 <= score <= 100):",
            "            raise InvalidScoreError(score)",
            "        total += score",
            "",
            "    return total / len(scores_dict)",
            "",
            "# Usage Demonstration",
            "try:",
            "    grades = {'Math': 95, 'Physics': 105} # Triggers custom error",
            "    avg = calculate_grade_average(grades)",
            "except InvalidScoreError as e:",
            "    print(f\"Validation Error: {e}\")",
            "finally:",
            "    print(\"Grading audit completed.\")",
            "```"
        ]
    },
    {
        "id": "py-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain NumPy Broadcasting rules with examples. Write a Python script to standardize a 2D matrix (zero mean, unit variance per column) without explicit loops.",
        "answer_lines": [
            "**1. Broadcasting Rules**: Two dimensions are compatible when: (1) they are equal, or (2) one of them is $1$. If trailing dimensions match or one is 1, NumPy stretches the dimension of size 1 across the other array without making memory copies.",
            "**2. Normalization Program**:",
            "```python",
            "import numpy as np",
            "",
            "# Create synthetic dataset: 5 samples, 3 features",
            "data = np.array([",
            "    [10.0, 200.0, 0.5],",
            "    [12.0, 220.0, 0.6],",
            "    [9.0,  190.0, 0.4],",
            "    [11.0, 210.0, 0.55],",
            "    [8.0,  180.0, 0.35]",
            "])",
            "",
            "# Compute mean and standard deviation along column axis (axis=0)",
            "mean = np.mean(data, axis=0) # Shape: (3,)",
            "std = np.std(data, axis=0)   # Shape: (3,)",
            "",
            "# Broadcasted standardization: (5, 3) - (3,) -> (5, 3)",
            "standardized_data = (data - mean) / std",
            "",
            "print(\"Original Shape:\", data.shape)",
            "print(\"Standardized Mean (approx 0):\", np.round(standardized_data.mean(axis=0), 4))",
            "print(\"Standardized Std (approx 1):\", standardized_data.std(axis=0))",
            "```"
        ]
    },
    {
        "id": "py-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Demonstrate Pandas Data Analysis. Write a complete script to clean a sales DataFrame, impute missing values, and calculate region-wise total and average revenue.",
        "answer_lines": [
            "**1. Core Pandas Concepts**: `Series` (1D labeled array) and `DataFrame` (2D tabular structure). Key operations include missing data handling (`fillna`, `dropna`) and split-apply-combine aggregations (`groupby`).",
            "**2. Data Processing Script**:",
            "```python",
            "import pandas as pd",
            "import numpy as np",
            "",
            "# Sample sales raw dataframe",
            "raw_data = {",
            "    'Region': ['North', 'South', 'North', 'East', 'South', 'East', np.nan],",
            "    'Units': [15, 25, np.nan, 30, 45, 10, 20],",
            "    'UnitPrice': [100.0, 120.0, 100.0, 80.0, np.nan, 85.0, 95.0]",
            "}",
            "df = pd.DataFrame(raw_data)",
            "",
            "# Step 1: Clean missing values",
            "df['Region'] = df['Region'].fillna('Unknown')",
            "df['Units'] = df['Units'].fillna(df['Units'].median())",
            "df['UnitPrice'] = df['UnitPrice'].fillna(df['UnitPrice'].mean())",
            "",
            "# Step 2: Compute revenue",
            "df['Revenue'] = df['Units'] * df['UnitPrice']",
            "",
            "# Step 3: GroupBy aggregation",
            "summary = df.groupby('Region').agg(",
            "    Total_Revenue=('Revenue', 'sum'),",
            "    Avg_Revenue=('Revenue', 'mean'),",
            "    Total_Units=('Units', 'sum')",
            ").reset_index()",
            "",
            "print(summary.to_string(index=False))",
            "```"
        ]
    }
])

add_paper("python", 2, [
    {
        "id": "py-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Explain Python's Global Interpreter Lock (GIL) and its consequence on CPU-bound multi-threading.",
        "answer_lines": [
            "**GIL**: A mutex lock in CPython ensuring only one native thread executes Python bytecode at any given instant.",
            "**Consequence**: CPU-bound multi-threading does not achieve true parallel execution across multi-core processors (multi-processing with separate memory spaces is required)."
        ]
    },
    {
        "id": "py-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "What is a Python decorator? Provide a simple syntax example.",
        "answer_lines": [
            "**Definition**: A higher-order function that takes another function as an argument, extends its behavior without modifying source code, and returns a callable.",
            "**Syntax Example**: `@my_decorator` placed directly above `def my_func(): pass` is syntactic sugar for `my_func = my_decorator(my_func)`."
        ]
    },
    {
        "id": "py-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between `.loc` and `.iloc` indexers in Pandas.",
        "answer_lines": [
            "**`.loc[]`**: Label-based indexing (selects rows/columns by explicit index names; includes endpoint in slices: `0:5` includes index `5`).",
            "**`.iloc[]`**: Integer position-based indexing (selects rows/columns by $0$-based integer offsets; excludes endpoint: `0:5` stops at index `4`)."
        ]
    },
    {
        "id": "py-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Explain `map()`, `filter()`, and `reduce()` functional programming primitives in Python.",
        "answer_lines": [
            "• `map(func, iterable)`: Applies `func` to every element, returning an iterator of transformed items.",
            "• `filter(func, iterable)`: Filters elements for which boolean predicate `func` evaluates to `True`.",
            "• `functools.reduce(func, iterable)`: Cumulatively applies binary function to reduce iterable into a single scalar value."
        ]
    },
    {
        "id": "py-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "What is the difference between shallow copy and deep copy in Python's `copy` module?",
        "answer_lines": [
            "**`copy.copy()`**: Constructs a new compound object and inserts references to original objects.",
            "**`copy.deepcopy()`**: Constructs a new compound object and recursively copies all nested objects, eliminating shared references."
        ]
    },
    {
        "id": "py-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Write a custom function decorator `@execution_timer` that logs elapsed time, arguments, and return value of any function using `functools.wraps`.",
        "answer_lines": [
            "**1. Mechanics of Decorators**: When decorating a function, the wrapper replaces the original function reference. `functools.wraps` copies docstrings, function name, and signature metadata to the wrapper to preserve introspection.",
            "**2. Implementation Code**:",
            "```python",
            "import functools",
            "import time",
            "",
            "def execution_timer(func):",
            "    @functools.wraps(func)",
            "    def wrapper(*args, **kwargs):",
            "        start_time = time.perf_counter()",
            "        result = func(*args, **kwargs)",
            "        end_time = time.perf_counter()",
            "        elapsed = (end_time - start_time) * 1000 # in ms",
            "        print(f\"[TIMING] {func.__name__} took {elapsed:.3f} ms to execute.\")",
            "        return result",
            "    return wrapper",
            "",
            "@execution_timer",
            "def compute_heavy_sum(n: int) -> int:",
            "    \"\"\"Calculates sum of squares up to n.\"\"\"",
            "    return sum(i * i for i in range(n))",
            "",
            "# Demonstration",
            "val = compute_heavy_sum(1_000_000)",
            "print(\"Result:\", val)",
            "print(\"Preserved Docstring:\", compute_heavy_sum.__doc__)",
            "```"
        ]
    },
    {
        "id": "py-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Multiprocessing in Python to bypass the GIL. Implement a parallel prime number checker across multiple worker processes using `multiprocessing.Pool`.",
        "answer_lines": [
            "**1. Multiprocessing Architecture**: Spawns independent operating system processes with separate Python interpreter instances and distinct virtual memory address spaces, allowing CPU-bound tasks to execute across physical cores simultaneously.",
            "**2. Parallel Implementation**:",
            "```python",
            "import multiprocessing",
            "import math",
            "",
            "def is_prime(n: int) -> bool:",
            "    if n < 2: return False",
            "    if n == 2: return True",
            "    if n % 2 == 0: return False",
            "    for i in range(3, int(math.isqrt(n)) + 1, 2):",
            "        if n % i == 0:",
            "            return False",
            "    return True",
            "",
            "if __name__ == '__main__':",
            "    numbers = [10_000_019, 10_000_079, 10_000_100, 10_000_103, 10_000_121]",
            "    # Utilize available CPU cores",
            "    with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as pool:",
            "        results = pool.map(is_prime, numbers)",
            "    ",
            "    for num, prime in zip(numbers, results):",
            "        print(f\"{num}: {'Prime' if prime else 'Composite'}\")",
            "```"
        ]
    },
    {
        "id": "py-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Regular Expressions in Python (`re` module). Write a program to extract and validate email addresses, URLs, and phone numbers from unstructured text.",
        "answer_lines": [
            "**1. Regex Engine**: Uses deterministic finite automata (DFA) / NFA pattern matching. Common meta-characters include `^` (start), `$` (end), `\\d` (digit), `\\w` (alphanumeric), `+` (1 or more), `*` (0 or more).",
            "**2. Parsing Code**:",
            "```python",
            "import re",
            "",
            "text = \"\"\"",
            "Contact admin at support@university.edu or sales.desk@company.co.in.",
            "Visit our portal https://www.portal.ac.in/portal or http://test.org.",
            "Helpline: +91-9876543210 or 040-23456789.",
            "\"\"\"",
            "",
            "# Patterns",
            "email_pattern = r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+'",
            "url_pattern = r'https?://(?:[-\\w.]|(?:%[\\da-fA-F]{2}))+[\\w/.-]*'",
            "phone_pattern = r'(?:\\+?\\d{1,3}[- ]?)?\\d{3,5}[- ]?\\d{6,8}'",
            "",
            "emails = re.findall(email_pattern, text)",
            "urls = re.findall(url_pattern, text)",
            "phones = re.findall(phone_pattern, text)",
            "",
            "print(\"Extracted Emails:\", emails)",
            "print(\"Extracted URLs:\", urls)",
            "print(\"Extracted Phones:\", phones)",
            "```"
        ]
    },
    {
        "id": "py-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Python Memory Management. Describe reference counting, cyclic garbage collection, and the role of the `weakref` module.",
        "answer_lines": [
            "**1. Reference Counting**: Every Python object header contains `ob_refcnt`. Reference count increments on assignment, function passing, or list append; decrements on `del` or scope exit. When count reaches zero, memory deallocates instantly.",
            "**2. Cyclic Garbage Collector**: Reference counting cannot reclaim cyclic references ($A$ points to $B$ and $B$ points to $A$). CPython uses a generational cyclic GC (`gc` module with Gen 0, Gen 1, Gen 2) that detects isolated subgraphs via trial deletion.",
            "**3. Weak References (`weakref`)**:",
            "• Creates references to objects without increasing `ob_refcnt`.",
            "• When the target object is collected, weak reference callbacks automatically invalidate, preventing memory leaks in large caches or graph nodes."
        ]
    },
    {
        "id": "py-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Write a Matplotlib and Seaborn script to create a professional publication-quality visualization featuring subplots with customized styling and annotations.",
        "answer_lines": [
            "**1. Visualization Architecture**: Matplotlib provides object-oriented hierarchy: `Figure` (canvas), `Axes` (coordinate systems for plots), and `Artist` elements (lines, texts, ticks).",
            "**2. Complete Plot Script**:",
            "```python",
            "import matplotlib.pyplot as plt",
            "import numpy as np",
            "",
            "x = np.linspace(0, 10, 100)",
            "y1 = np.sin(x)",
            "y2 = np.cos(x)",
            "",
            "fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(8, 6), sharex=True)",
            "fig.suptitle(\"Harmonic Signal Response\", fontsize=14, fontweight='bold')",
            "",
            "# First Subplot",
            "ax1.plot(x, y1, color='royalblue', lw=2, label='Sine Wave')",
            "ax1.set_ylabel(\"Amplitude (V)\")",
            "ax1.grid(True, linestyle='--', alpha=0.6)",
            "ax1.legend(loc='upper right')",
            "",
            "# Second Subplot",
            "ax2.plot(x, y2, color='crimson', lw=2, linestyle='--', label='Cosine Wave')",
            "ax2.set_xlabel(\"Time (s)\")",
            "ax2.set_ylabel(\"Amplitude (V)\")",
            "ax2.grid(True, linestyle='--', alpha=0.6)",
            "ax2.legend(loc='upper right')",
            "",
            "plt.tight_layout()",
            "plt.savefig('signals.png', dpi=300)",
            "```"
        ]
    }
])

# =========================================================================
# 7. CHEMICAL PROCESS CALCULATIONS
# =========================================================================
add_paper("chemical", 1, [
    {
        "id": "cpc-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define mole fraction and average molecular weight of a multi-component gas mixture.",
        "answer_lines": [
            "**Mole Fraction ($y_i$)**: The ratio of the number of moles of component $i$ to the total moles in the mixture: $y_i = \\frac{n_i}{\\sum n_i}$.",
            "**Average Molecular Weight ($M_{avg}$)**: The sum of the products of mole fractions and molecular weights: $M_{avg} = \\sum y_i M_i$."
        ]
    },
    {
        "id": "cpc-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Dalton's Law of Partial Pressures and Amagat's Law of Partial Volumes.",
        "answer_lines": [
            "**Dalton's Law**: The total pressure exerted by an ideal gas mixture equals the sum of the partial pressures: $P = \\sum p_i = \\sum y_i P$.",
            "**Amagat's Law**: The total volume occupied by an ideal gas mixture equals the sum of the pure component volumes at identical $T$ and $P$: $V = \\sum v_i$."
        ]
    },
    {
        "id": "cpc-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define Limiting Reactant and Excess Reactant.",
        "answer_lines": [
            "**Limiting Reactant**: The reactant present in the smallest stoichiometric proportion that would be completely consumed first if the reaction went to $100\\%$ completion.",
            "**Excess Reactant**: Any reactant present in quantities greater than required stoichiometrically to react with the limiting reactant."
        ]
    },
    {
        "id": "cpc-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define Conversion, Selectivity, and Yield in reactor design.",
        "answer_lines": [
            "• **Fractional Conversion ($X$)**: $\\frac{\\text{Moles of limiting reactant consumed}}{\\text{Moles of limiting reactant fed}}$.",
            "• **Selectivity**: $\\frac{\\text{Moles of desired product formed}}{\\text{Moles of undesired by-product formed}}$.",
            "• **Yield**: $\\frac{\\text{Moles of desired product formed}}{\\text{Moles of limiting reactant fed}}$."
        ]
    },
    {
        "id": "cpc-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Hess's Law of Constant Heat Summation.",
        "answer_lines": [
            "**Statement**: The total enthalpy change for a chemical transformation is strictly independent of the reaction path or number of intermediate steps; it depends solely on the initial reactants and final products: $\\Delta H_{rxn}^\\circ = \\sum \\Delta H_{f,prod}^\\circ - \\sum \\Delta H_{f,react}^\\circ$."
        ]
    },
    {
        "id": "cpc-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "A fuel gas mixture has the molar composition: $\\text{CH}_4 = 70\\%, \\text{C}_2\\text{H}_6 = 20\\%, \\text{N}_2 = 10\\%$. Calculate: (i) Average molecular weight, (ii) Weight percent composition, (iii) Density at $27^\\circ\\text{C}$ and $2\\text{ atm}$. ($R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$).",
        "answer_lines": [
            "**1. Basis**: $100\\text{ mol}$ of fuel gas mixture.",
            "• $\\text{CH}_4: 70\\text{ mol} \\times 16.04\\text{ g/mol} = 1122.8\\text{ g}$.",
            "• $\\text{C}_2\\text{H}_6: 20\\text{ mol} \\times 30.07\\text{ g/mol} = 601.4\\text{ g}$.",
            "• $\\text{N}_2: 10\\text{ mol} \\times 28.01\\text{ g/mol} = 280.1\\text{ g}$.",
            "• Total mass $= 1122.8 + 601.4 + 280.1 = 2004.3\\text{ g}$.",
            "**2. Average Molecular Weight**:",
            "$$M_{avg} = \\frac{\\text{Total Mass}}{\\text{Total Moles}} = \\frac{2004.3\\text{ g}}{100\\text{ mol}} = 20.043\\text{ g/mol}$$",
            "**3. Weight Percent Composition**:",
            "• $\\text{wt}\\% \\text{ CH}_4 = \\frac{1122.8}{2004.3} \\times 100 = 56.02\\%$.",
            "• $\\text{wt}\\% \\text{ C}_2\\text{H}_6 = \\frac{601.4}{2004.3} \\times 100 = 30.01\\%$.",
            "• $\\text{wt}\\% \\text{ N}_2 = \\frac{280.1}{2004.3} \\times 100 = 13.97\\%$.",
            "**4. Gas Mixture Density**:",
            "$$P = 2\\text{ atm}, \\quad T = 27 + 273.15 = 300.15\\text{ K}$$",
            "$$\\rho = \\frac{P M_{avg}}{R T} = \\frac{2 \\times 20.043}{0.08206 \\times 300.15} = \\frac{40.086}{24.63} = 1.627\\text{ g/L} = 1.627\\text{ kg/m}^3$$"
        ]
    },
    {
        "id": "cpc-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "A distillation column separates $10,000\\text{ kg/h}$ of a mixture containing $40\\text{ wt}\\%$ benzene ($B$) and $60\\text{ wt}\\%$ toluene ($T$). The overhead distillate contains $96\\text{ wt}\\%$ benzene, and bottoms contain $95\\text{ wt}\\%$ toluene. Calculate distillate ($D$) and bottoms ($W$) flow rates and percent recovery of benzene.",
        "answer_lines": [
            "**1. Material Balance Equations**:",
            "• Total mass balance: $F = D + W \\implies 10000 = D + W$.",
            "• Benzene balance: $F x_{F,B} = D x_{D,B} + W x_{W,B}$ where $x_{W,B} = 1 - 0.95 = 0.05$.",
            "$$10000(0.40) = D(0.96) + W(0.05) \\implies 4000 = 0.96 D + 0.05 W$$",
            "**2. Solving System of Equations**:",
            "Substitute $W = 10000 - D$ into benzene equation:",
            "$$4000 = 0.96 D + 0.05(10000 - D) = 0.96 D + 500 - 0.05 D$$",
            "$$3500 = 0.91 D \\implies D = \\frac{3500}{0.91} = 3846.15\\text{ kg/h}$$",
            "$$W = 10000 - 3846.15 = 6153.85\\text{ kg/h}$$",
            "**3. Benzene Recovery in Distillate**:",
            "$$\\text{Recovery} = \\frac{\\text{Benzene in Distillate}}{\\text{Benzene in Feed}} \\times 100 = \\frac{3846.15 \\times 0.96}{4000} \\times 100 = \\frac{3692.3}{4000} \\times 100 = 92.31\\%$$",
            "**Results**: $D = 3846.15\\text{ kg/h}, W = 6153.85\\text{ kg/h}$, Recovery $= 92.31\\%$."
        ]
    },
    {
        "id": "cpc-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Methanol is synthesized via: $\\text{CO} + 2\\text{H}_2 \\to \\text{CH}_3\\text{OH}$. The reactor feed contains $100\\text{ mol CO}$ and $300\\text{ mol H}_2$. If CO conversion is $70\\%$, determine: (i) Limiting reactant, (ii) Percent excess of excess reactant, (iii) Effluent stream molar composition.",
        "answer_lines": [
            "**1. Stoichiometric Ratio**: Required $\\text{H}_2 / \\text{CO} = 2.0$. Fed ratio $= 300 / 100 = 3.0 > 2.0$.",
            "• **Limiting Reactant**: $\\text{CO}$.",
            "• **Excess Reactant**: $\\text{H}_2$.",
            "**2. Percent Excess of $\\text{H}_2$**:",
            "• Theoretical $\\text{H}_2$ required for $100\\text{ mol CO} = 2 \\times 100 = 200\\text{ mol}$.",
            "$$\\% \\text{ Excess} = \\frac{\\text{Fed} - \\text{Theoretical}}{\\text{Theoretical}} \\times 100 = \\frac{300 - 200}{200} \\times 100 = 50.0\\%$$",
            "**3. Reactor Effluent Composition (Conversion $X_{CO} = 0.70$)**:",
            "• $\\text{CO reacted} = 100 \\times 0.70 = 70\\text{ mol} \\implies \\text{CO remaining} = 100 - 70 = 30\\text{ mol}$.",
            "• $\\text{H}_2 \\text{ reacted} = 2 \\times 70 = 140\\text{ mol} \\implies \\text{H}_2 \\text{ remaining} = 300 - 140 = 160\\text{ mol}$.",
            "• $\\text{CH}_3\\text{OH formed} = 70\\text{ mol}$.",
            "• Total effluent moles $= 30 + 160 + 70 = 260\\text{ mol}$.",
            "• Mole fractions: $\\text{CO} = \\frac{30}{260} = 11.54\\%, \\quad \\text{H}_2 = \\frac{160}{260} = 61.54\\%, \\quad \\text{CH}_3\\text{OH} = \\frac{70}{260} = 26.92\\%$."
        ]
    },
    {
        "id": "cpc-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Calculate standard heat of reaction $\\Delta H_{rxn}^\\circ$ at $25^\\circ\\text{C}$ for: $\\text{C}_2\\text{H}_6(g) \\to \\text{C}_2\\text{H}_4(g) + \\text{H}_2(g)$, given heats of combustion $\\Delta H_c^\\circ$: $\\text{C}_2\\text{H}_6 = -1560.7\\text{ kJ/mol}, \\text{C}_2\\text{H}_4 = -1411.2\\text{ kJ/mol}, \\text{H}_2 = -285.8\\text{ kJ/mol}$.",
        "answer_lines": [
            "**1. Principle**: By Hess's law, heat of reaction can be calculated from heats of combustion as:",
            "$$\\Delta H_{rxn}^\\circ = \\sum (\\Delta H_c^\\circ)_{reactants} - \\sum (\\Delta H_c^\\circ)_{products}$$",
            "**2. Evaluation**:",
            "$$\\Delta H_{rxn}^\\circ = \\Delta H_c^\\circ(\\text{C}_2\\text{H}_6) - [\\Delta H_c^\\circ(\\text{C}_2\\text{H}_4) + \\Delta H_c^\\circ(\\text{H}_2)]$$",
            "$$\\Delta H_{rxn}^\\circ = (-1560.7) - [(-1411.2) + (-285.8)]$$",
            "$$\\Delta H_{rxn}^\\circ = -1560.7 - [-1697.0] = -1560.7 + 1697.0 = +136.3\\text{ kJ/mol}$$",
            "**Conclusion**: Since $\\Delta H_{rxn}^\\circ > 0$, the dehydrogenation of ethane is **endothermic**, absorbing $136.3\\text{ kJ}$ of thermal energy per mole of ethane converted."
        ]
    },
    {
        "id": "cpc-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "A single-effect evaporator concentrates $5000\\text{ kg/h}$ of a $10\\text{ wt}\\%$ caustic soda solution to $50\\text{ wt}\\%$. Steam is fed at $200\\text{ kPa}$ ($\\lambda_s = 2201.9\\text{ kJ/kg}$). Feed enters at boiling point ($100^\\circ\\text{C}$, $\\lambda = 2257\\text{ kJ/kg}$). Calculate: (i) Evaporated vapor flow rate, (ii) Thick liquor flow rate, (iii) Steam requirement and steam economy.",
        "answer_lines": [
            "**1. Solid (Solute) Balance**:",
            "$$F x_F = L x_L \\implies 5000(0.10) = L(0.50) \\implies L = \\frac{500}{0.50} = 1000\\text{ kg/h}$$",
            "**2. Overall Mass Balance**:",
            "$$F = L + V \\implies V = F - L = 5000 - 1000 = 4000\\text{ kg/h}$$",
            "Evaporated water vapor rate $= 4000\\text{ kg/h}$.",
            "**3. Energy Balance (Feed enters at $100^\\circ\\text{C}$)**:",
            "Heat required for evaporation: $Q = V \\cdot \\lambda = 4000\\text{ kg/h} \\times 2257\\text{ kJ/kg} = 9,028,000\\text{ kJ/h}$.",
            "Steam requirement: $Q = S \\cdot \\lambda_s$:",
            "$$S = \\frac{Q}{\\lambda_s} = \\frac{9,028,000}{2201.9} = 4100.1\\text{ kg/h}$$",
            "**4. Steam Economy**:",
            "$$\\text{Steam Economy} = \\frac{V}{S} = \\frac{4000\\text{ kg/h}}{4100.1\\text{ kg/h}} = 0.976\\text{ kg vapor / kg steam}$$"
        ]
    }
])

add_paper("chemical", 2, [
    {
        "id": "cpc-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define Recycle stream and Purge stream in chemical flowsheets.",
        "answer_lines": [
            "**Recycle Stream**: Returns unreacted raw materials from downstream separation units back to the reactor inlet to maximize overall conversion and atom efficiency.",
            "**Purge Stream**: Bleeds a small fraction of the recycle stream to prevent the continuous accumulation and buildup of inert impurities in a closed loop."
        ]
    },
    {
        "id": "cpc-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between single-pass conversion and overall conversion in a reactor with recycle.",
        "answer_lines": [
            "**Single-Pass Conversion**: $X_{SP} = \\frac{\\text{Reactant consumed in reactor}}{\\text{Reactant entering reactor (fresh + recycle)}}$.",
            "**Overall Conversion**: $X_{overall} = \\frac{\\text{Reactant consumed across entire process}}{\\text{Reactant in fresh feed}}$."
        ]
    },
    {
        "id": "cpc-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the composition of standard atmospheric air on a molar and dry volume basis.",
        "answer_lines": [
            "• Nitrogen ($\\text{N}_2$): $79.0\\%$ mole (or volume).",
            "• Oxygen ($\\text{O}_2$): $21.0\\%$ mole (or volume).",
            "• Ratio: $\\text{N}_2 / \\text{O}_2 = 79/21 \\approx 3.76$."
        ]
    },
    {
        "id": "cpc-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Kirchhoff's law for the variation of heat of reaction with temperature.",
        "answer_lines": [
            "$$\\Delta H_{rxn}(T_2) = \\Delta H_{rxn}(T_1) + \\int_{T_1}^{T_2} \\Delta C_p dT \\quad \\text{where } \\Delta C_p = \\sum \\nu_i C_{p,i}$$"
        ]
    },
    {
        "id": "cpc-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define dry-bulb temperature and wet-bulb temperature.",
        "answer_lines": [
            "**Dry-Bulb Temperature (DBT)**: The true thermodynamic temperature of moist air measured by a standard thermometer shielded from radiation.",
            "**Wet-Bulb Temperature (WBT)**: The steady-state non-equilibrium temperature attained when a wet cloth-covered thermometer bulb is exposed to an airflow where evaporative cooling balances convective heat transfer."
        ]
    },
    {
        "id": "cpc-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "In a process with recycle, fresh feed contains $100\\text{ mol/h}$ of $A$. Single-pass conversion in the reactor is $20\\%$. Unreacted $A$ is separated and recycled. If overall conversion is $90\\%$, calculate: (i) Reactor feed rate, (ii) Recycle rate, (iii) Product flow rate.",
        "answer_lines": [
            "**1. Overall Process Balance for Reactant $A$**:",
            "• Fresh feed of $A$: $F = 100\\text{ mol/h}$.",
            "• Overall conversion: $X_O = 0.90$.",
            "• Total $A$ reacted across process $= 100 \\times 0.90 = 90\\text{ mol/h}$.",
            "• Product $B$ formed $= 90\\text{ mol/h}$.",
            "• $A$ lost in waste/purge $= 100 - 90 = 10\\text{ mol/h}$.",
            "**2. Reactor Balance**:",
            "• Single-pass conversion $X_{SP} = 0.20$.",
            "• Amount of $A$ reacted in reactor must equal total $A$ converted in process: $90\\text{ mol/h}$.",
            "$$\\text{Reactant consumed} = F_{reactor} \\times X_{SP} \\implies 90 = F_{reactor} \\times 0.20$$",
            "$$F_{reactor} = \\frac{90}{0.20} = 450\\text{ mol/h}$$",
            "**3. Recycle Flow Rate ($R$)**:",
            "• At mixing junction before reactor: $F_{reactor} = F + R$:",
            "$$450 = 100 + R \\implies R = 350\\text{ mol/h}$$",
            "• Recycle ratio: $\\frac{R}{F} = \\frac{350}{100} = 3.5$."
        ]
    },
    {
        "id": "cpc-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Pure methane is burned with $20\\%$ excess air. Complete combustion occurs: $\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O}$. For $100\\text{ mol}$ of methane fed, calculate: (i) Theoretical and actual air supplied, (ii) Orsat analysis (dry basis molar composition) of flue gases.",
        "answer_lines": [
            "**1. Air Requirements**:",
            "• Stoichiometric $\\text{O}_2$ required: $100 \\times 2 = 200\\text{ mol}$.",
            "• Excess $\\text{O}_2 = 20\\% \\implies \\text{Actual } \\text{O}_2 = 200 \\times 1.20 = 240\\text{ mol}$.",
            "• Excess $\\text{O}_2$ unreacted: $240 - 200 = 40\\text{ mol}$.",
            "• $\\text{N}_2$ accompanying air: $240 \\times \\frac{79}{21} = 902.86\\text{ mol}$.",
            "• Total air supplied: $240 + 902.86 = 1142.86\\text{ mol}$.",
            "**2. Combustion Products**:",
            "• $\\text{CO}_2$ produced: $100\\text{ mol}$.",
            "• $\\text{H}_2\\text{O}$ produced: $200\\text{ mol}$.",
            "• Unreacted $\\text{O}_2$: $40\\text{ mol}$.",
            "• Inerts $\\text{N}_2$: $902.86\\text{ mol}$.",
            "**3. Orsat Analysis (Excludes Water)**:",
            "• Dry flue gas total $= 100 (\\text{CO}_2) + 40 (\\text{O}_2) + 902.86 (\\text{N}_2) = 1042.86\\text{ mol}$.",
            "• $\\text{CO}_2 = \\frac{100}{1042.86} \\times 100 = 9.59\\%$.",
            "• $\\text{O}_2 = \\frac{40}{1042.86} \\times 100 = 3.84\\%$.",
            "• $\\text{N}_2 = \\frac{902.86}{1042.86} \\times 100 = 86.57\\%$."
        ]
    },
    {
        "id": "cpc-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Adiabatic Flame Temperature (AFT). Calculate theoretical AFT when carbon monoxide is burned with stoichiometric oxygen at $298\\text{ K}$, given $\\Delta H_c^\\circ = -283.0\\text{ kJ/mol}$ and mean $C_{p}(\\text{CO}_2) = 52.0\\text{ J}/(\\text{mol}\\cdot\\text{K})$.",
        "answer_lines": [
            "**1. Concept**: The maximum theoretical temperature achieved by combustion products when a fuel burns completely under adiabatic conditions ($Q = 0, W = 0$) with no heat loss to surroundings.",
            "**2. Energy Balance**: In an adiabatic combustor, enthalpy of products at flame temperature $T_f$ equals enthalpy of reactants at $T_0 = 298\\text{ K}$:",
            "$$\\Delta H_{rxn}^\\circ(298\\text{ K}) + \\int_{298}^{T_f} n_{CO_2} C_p(\\text{CO}_2) dT = 0$$",
            "**3. Evaluation for $1\\text{ mol CO}$**:",
            "Reaction: $\\text{CO} + \\frac{1}{2}\\text{O}_2 \\to \\text{CO}_2$. Produces $1\\text{ mol } \\text{CO}_2$.",
            "$$-\\Delta H_c^\\circ = n_{CO_2} C_{p,m} (T_f - 298)$$",
            "$$283,000\\text{ J} = 1\\text{ mol} \\times 52.0\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times (T_f - 298)$$",
            "$$T_f - 298 = \\frac{283,000}{52.0} = 5442.3\\text{ K}$$",
            "$$T_f = 298 + 5442.3 = 5740.3\\text{ K} \\approx 5467^\\circ\\text{C}$$",
            "*(Note: In reality, chemical dissociation of $\\text{CO}_2$ at temperatures above $2000\\text{ K}$ limits the practical flame temperature to $\\approx 2700-3000\\text{ K}$)*."
        ]
    },
    {
        "id": "cpc-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "A psychrometric chamber contains moist air at $30^\\circ\\text{C}$ and $101.325\\text{ kPa}$ with relative humidity $60\\%$. Vapor pressure of water at $30^\\circ\\text{C}$ is $4.246\\text{ kPa}$. Calculate: (i) Partial pressure of water vapor, (ii) Absolute humidity (humidity ratio), (iii) Humid volume.",
        "answer_lines": [
            "**1. Partial Pressure of Water Vapor ($p_w$)**:",
            "$$RH = \\frac{p_w}{p_w^*} \\implies p_w = 0.60 \\times 4.246\\text{ kPa} = 2.548\\text{ kPa}$$",
            "Partial pressure of dry air: $p_a = P_{total} - p_w = 101.325 - 2.548 = 98.777\\text{ kPa}$.",
            "**2. Absolute Humidity ($Y$)**:",
            "$$Y = \\frac{M_w}{M_a} \\frac{p_w}{P - p_w} = \\frac{18.02}{28.97} \\frac{2.548}{98.777} = 0.622 \\times 0.02579 = 0.01604\\text{ kg water / kg dry air}$$",
            "**3. Humid Volume ($V_H$)**:",
            "$$V_H = \\left( \\frac{1}{M_a} + \\frac{Y}{M_w} \\right) \\frac{R T}{P} = \\left( \\frac{1}{28.97} + \\frac{0.01604}{18.02} \\right) \\frac{8.314 \\times (30 + 273.15)}{101.325}$$",
            "$$V_H = (0.03452 + 0.00089) \\times \\frac{2520.1}{101.325} = 0.03541 \\times 24.87 = 0.8806\\text{ m}^3 / \\text{kg dry air}$$"
        ]
    },
    {
        "id": "cpc-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "A crystallization unit produces Glauber's salt ($\\text{Na}_2\\text{SO}_4 \\cdot 10\\text{H}_2\\text{O}$) by cooling $1000\\text{ kg}$ of a $32\\text{ wt}\\%$ sodium sulfate solution from $70^\\circ\\text{C}$ to $20^\\circ\\text{C}$. Solubility at $20^\\circ\\text{C}$ is $19.4\\text{ g } \\text{Na}_2\\text{SO}_4 / 100\\text{ g water}$. Molecular weights: $\\text{Na}_2\\text{SO}_4 = 142.0, \\text{H}_2\\text{O} = 18.0$. Calculate the crystal yield and mother liquor mass.",
        "answer_lines": [
            "**1. Feed Breakdown ($1000\\text{ kg}$)**:",
            "• Pure $\\text{Na}_2\\text{SO}_4 = 0.32 \\times 1000 = 320\\text{ kg}$.",
            "• Water $= 1000 - 320 = 680\\text{ kg}$.",
            "**2. Molecular Proportions in Crystal**:",
            "• MW of $\\text{Na}_2\\text{SO}_4 \\cdot 10\\text{H}_2\\text{O} = 142.0 + 10(18.0) = 322.0\\text{ g/mol}$.",
            "• Anhydrous fraction in crystals: $x_c = \\frac{142}{322} = 0.4410$.",
            "**3. Mother Liquor ($L$) Composition at $20^\\circ\\text{C}$**:",
            "• $x_L = \\frac{19.4}{100 + 19.4} = \\frac{19.4}{119.4} = 0.1625$.",
            "**4. Material Balances ($C$ = crystals, $L$ = mother liquor)**:",
            "• Total: $C + L = 1000 \\implies L = 1000 - C$.",
            "• Salt balance: $320 = 0.4410 C + 0.1625(1000 - C) = 0.4410 C + 162.5 - 0.1625 C$.",
            "$$320 - 162.5 = 0.2785 C \\implies 157.5 = 0.2785 C$$",
            "$$C = \\frac{157.5}{0.2785} = 565.53\\text{ kg of Glauber's salt crystals}$$",
            "$$L = 1000 - 565.53 = 434.47\\text{ kg of mother liquor}$$"
        ]
    }
])

# =========================================================================
# 8. BIOLOGY FOR ENGINEERS (STRICTLY ZERO LATEX FORMULAS)
# =========================================================================
add_paper("biology", 1, [
    {
        "id": "bio-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Compare prokaryotic and eukaryotic cells based on cellular compartmentalization and genetic material organization.",
        "answer_lines": [
            "Prokaryotic Cells: Lack a membrane-bound nucleus and membrane-enclosed organelles. DNA is circular, supercoiled, and located in an open nucleoid region (e.g., bacteria).",
            "Eukaryotic Cells: Contain a true membrane-bound nucleus housing linear chromosomes complexed with histone proteins, along with specialized membrane-bound organelles such as mitochondria and endoplasmic reticulum."
        ]
    },
    {
        "id": "bio-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the Central Dogma of Molecular Biology and name its three core stages.",
        "answer_lines": [
            "The Central Dogma describes the directional flow of genetic information inside biological systems: DNA directs its own Replication, DNA is transcribed into messenger RNA (Transcription), and mRNA is translated into functional Polypeptide proteins (Translation)."
        ]
    },
    {
        "id": "bio-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between competitive and non-competitive enzyme inhibition.",
        "answer_lines": [
            "Competitive Inhibition: Inhibitor resembles substrate structurally and competes directly for the active site. Maximum velocity Vmax remains unchanged, but apparent Km increases.",
            "Non-Competitive Inhibition: Inhibitor binds to an allosteric site distinct from the active site, inducing a conformational change. Km remains unchanged, but Vmax decreases."
        ]
    },
    {
        "id": "bio-s1-q4", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "What is the biochemical role of Adenosine Triphosphate (ATP) in living cells?",
        "answer_lines": [
            "ATP functions as the universal chemical energy currency of the cell. Hydrolysis of its high-energy phosphoanhydride bonds to ADP and inorganic phosphate releases free energy that couples to endergonic biosynthetic reactions, active transport pumps, and mechanical work."
        ]
    },
    {
        "id": "bio-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define a biosensor and state its two primary functional elements.",
        "answer_lines": [
            "A biosensor is an analytical device that combines a biological recognition element (enzymes, antibodies, aptamers, or whole cells) with a physical transducer (electrochemical, optical, or piezoelectric) to convert a biochemical reaction into a measurable electrical signal."
        ]
    },
    {
        "id": "bio-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Describe the four levels of protein structure and explain the non-covalent forces and covalent bonds stabilizing each level. Discuss protein denaturation.",
        "answer_lines": [
            "1. Primary Structure: The linear sequence of amino acids joined covalently by peptide (amide) bonds synthesized during translation.",
            "2. Secondary Structure: Local spatial folding of the polypeptide backbone into regular recurring conformations, primarily alpha-helices and beta-pleated sheets, stabilized entirely by hydrogen bonding between peptide carbonyl oxygen and amino hydrogen atoms.",
            "3. Tertiary Structure: The full three-dimensional folding of a single polypeptide chain into compact globular or fibrous domains. Stabilized by interactions between amino acid side-chains (R-groups): hydrophobic interactions, van der Waals forces, ionic salt bridges, hydrogen bonds, and covalent disulfide cross-links formed between cysteine residues.",
            "4. Quaternary Structure: The non-covalent assembly of two or more independent polypeptide subunits into a multi-subunit functional protein complex (e.g., the tetrameric structure of hemoglobin).",
            "5. Protein Denaturation: Disruption of secondary, tertiary, and quaternary conformations by elevated temperature, extreme pH, organic solvents, or heavy metals without breaking covalent peptide bonds, resulting in loss of biological catalytic activity."
        ]
    },
    {
        "id": "bio-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain the biochemical pathway of Cellular Respiration. Detail Glycolysis, the Citric Acid Cycle, and the Electron Transport Chain with oxidative phosphorylation.",
        "answer_lines": [
            "1. Glycolysis: Takes place in the cytoplasm. One molecule of 6-carbon glucose is enzymatically converted through ten steps into two molecules of 3-carbon pyruvate, yielding a net gain of 2 ATP (via substrate-level phosphorylation) and 2 NADH.",
            "2. Pyruvate Oxidation and Citric Acid (Krebs) Cycle: In the mitochondrial matrix, pyruvate is decarboxylated by pyruvate dehydrogenase to form Acetyl-CoA, which enters the Krebs cycle. For each glucose molecule (two acetyl-CoA), the cycle yields 2 ATP, 6 NADH, 2 FADH2, and releases 4 CO2.",
            "3. Electron Transport Chain (ETC): Located on the inner mitochondrial cristae. High-energy electrons from NADH and FADH2 are transferred sequentially through protein Complexes I, II, III, and IV to molecular oxygen (the terminal electron acceptor), which is reduced to water.",
            "4. Chemiosmosis: Electron transfer pumps protons from the matrix into the intermembrane space, creating an electrochemical proton gradient. Protons diffuse back through ATP Synthase (rotary motor enzyme), phosphorylating ADP to generate approximately 30 to 32 ATP per glucose molecule."
        ]
    },
    {
        "id": "bio-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Describe DNA replication. Explain the functions of helicase, primase, DNA polymerase, and ligase, and detail leading versus lagging strand synthesis.",
        "answer_lines": [
            "1. Replication Origin and Unwinding: DNA Helicase unwinds the double helix at the replication fork, while Single-Strand DNA-Binding Proteins (SSBs) stabilize single strands, and Topoisomerase relieves torsional supercoiling strain.",
            "2. RNA Primer Synthesis: DNA polymerases cannot synthesize strands de novo. Primase synthesizes a short RNA primer providing a free 3-prime hydroxyl group for elongation.",
            "3. Leading vs. Lagging Strand Synthesis: Because DNA polymerase synthesizes exclusively in the 5-prime to 3-prime direction:",
            "• Leading Strand: Synthesized continuously toward the progressing replication fork using a single initial RNA primer.",
            "• Lagging Strand: Synthesized discontinuously away from the replication fork as short fragments known as Okazaki fragments, each requiring an independent RNA primer.",
            "4. Primer Removal and Ligation: DNA Polymerase I removes RNA primers via 5-prime to 3-prime exonuclease activity and fills gaps with deoxynucleotides. DNA Ligase catalyzes phosphodiester bond formation between adjacent fragments to complete an intact daughter strand."
        ]
    },
    {
        "id": "bio-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain the architecture, sensing mechanisms, and engineering applications of Biosensors. Illustrate with the electrochemical glucose biosensor.",
        "answer_lines": [
            "1. Architecture: A biosensor integrates a biologically sensitive element immobilized on a physicochemical transducer connected to signal processing electronics and an output display.",
            "2. Recognition Elements: Include catalytic enzymes, affinity antibodies, nucleic acid aptamers, or live microbial cells.",
            "3. Electrochemical Glucose Biosensor Case Study:",
            "• Biocatalyst: Glucose Oxidase (GOx) immobilized on an electrode surface catalyzes the oxidation of glucose to gluconic acid and hydrogen peroxide using oxygen.",
            "• Transduction: Hydrogen peroxide is electrochemically oxidized at a platinum working electrode held at a positive potential, liberating electrons.",
            "• Signal: The resulting electric current is directly proportional to glucose concentration in the blood sample, providing rapid quantification in point-of-care finger-stick meters and continuous subcutaneous monitoring patches."
        ]
    },
    {
        "id": "bio-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Bio-inspired Engineering (Biomimicry). Provide case studies of the Lotus Effect, Shark Skin riblets, and the Kingfisher beak design in high-speed rail.",
        "answer_lines": [
            "1. Concept of Biomimicry: The conscious engineering emulation of nature's biological forms, materials, processes, and evolutionary strategies to develop sustainable technologies.",
            "2. The Lotus Leaf Effect (Superhydrophobicity): The leaves of Nelumbo nucifera exhibit extreme water repellency with contact angles greater than 150 degrees. Microscopic epidermal papillae covered in epicuticular hydrophobic wax crystals prevent droplet wetting; rolling water droplets carry away dirt. Engineers have replicated this micro-nano surface hierarchy in self-cleaning exterior facade paints and anti-fouling solar panel coatings.",
            "3. Shark Skin Riblets (Drag Reduction): Fast-swimming sharks possess placoid dermal scales with longitudinal micro-grooves (riblets). These riblets break up turbulent stream vortices along the boundary layer, reducing skin friction drag by up to 8 percent. Emulated in aerodynamic aircraft skins, competitive swimsuits, and wind turbine blades.",
            "4. Kingfisher Beak (Aerodynamic Acoustics): The nose cone of Japan's 500 Series Shinkansen bullet train was modeled after the slender, streamlined beak of the kingfisher bird, which dives silently into water. The biomimetic nose eliminated tunnel micro-pressure wave sonic booms, reduced aerodynamic drag by 30 percent, and cut power consumption by 15 percent."
        ]
    }
])

add_paper("biology", 2, [
    {
        "id": "bio-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Mendel's Law of Segregation and Law of Independent Assortment.",
        "answer_lines": [
            "Law of Segregation: The two alleles for a heritable trait segregate during gamete formation so that each gamete carries only one allele for each gene.",
            "Law of Independent Assortment: Alleles of two or more different genes assort independently of one another into gametes during meiosis, provided they reside on non-homologous chromosomes."
        ]
    },
    {
        "id": "bio-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "What is CRISPR-Cas9 and how does it perform targeted genetic modification?",
        "answer_lines": [
            "CRISPR-Cas9 is a bacterial adaptive immune system repurposed for genome engineering. A single guide RNA (sgRNA) directs the Cas9 endonuclease to a complementary target DNA locus adjacent to a PAM sequence, where Cas9 introduces a site-specific double-strand break for gene knockout or gene insertion."
        ]
    },
    {
        "id": "bio-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between aerobic respiration and anaerobic fermentation.",
        "answer_lines": [
            "Aerobic Respiration: Employs molecular oxygen as the final electron acceptor, oxidizing glucose completely to carbon dioxide and water with high ATP yield (30 to 32 ATP per glucose).",
            "Anaerobic Fermentation: Occurs in the absence of oxygen; pyruvate is reduced to lactate or ethanol to regenerate NAD+ for glycolysis, yielding only 2 ATP per glucose."
        ]
    },
    {
        "id": "bio-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "What is a bioreactor and what are its primary monitored process parameters?",
        "answer_lines": [
            "A bioreactor is an enclosed vessel providing a controlled biochemical environment for cultivating microorganisms or mammalian cells to produce biological products. Primary monitored parameters include temperature, pH, dissolved oxygen (DO), agitation speed, nutrient feed rate, and foam level."
        ]
    },
    {
        "id": "bio-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Explain the three temperature steps in a Polymerase Chain Reaction (PCR) cycle.",
        "answer_lines": [
            "1. Denaturation (94 to 96 degrees Celsius): Thermal separation of double-stranded DNA into single strands.",
            "2. Annealing (50 to 65 degrees Celsius): Primer hybridization to complementary single-strand target sequences.",
            "3. Extension (72 degrees Celsius): Thermostable Taq DNA polymerase synthesizes new complementary DNA strands."
        ]
    },
    {
        "id": "bio-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Describe Recombinant DNA Technology. Explain the steps of gene cloning: vector preparation, restriction digestion, ligation, transformation, and screening.",
        "answer_lines": [
            "1. Isolation of Target Gene: The gene of interest is amplified from genomic DNA via PCR or synthesized as complementary DNA (cDNA) from mRNA using reverse transcriptase.",
            "2. Restriction Endonuclease Cleavage: The target gene and cloning plasmid vector (e.g., pBR322 or pUC19) are digested using identical restriction enzymes (such as EcoRI) to create compatible cohesive sticky ends.",
            "3. Ligation: DNA Ligase joins the target insert into the open plasmid vector by catalyzing covalent phosphodiester bonds, yielding a recombinant chimeric plasmid.",
            "4. Transformation: Recombinant plasmids are introduced into competent bacterial host cells (e.g., Escherichia coli) using heat-shock treatment (42 degrees Celsius) or high-voltage electroporation.",
            "5. Selection and Screening: Transformed colonies are selected on agar plates containing antibiotics (such as ampicillin) via plasmid-encoded resistance genes, followed by blue-white colony screening based on beta-galactosidase insertional inactivation."
        ]
    },
    {
        "id": "bio-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Industrial Bioreactor design and microbial growth kinetics. Describe batch growth phases and aeration-agitation systems for mass transfer.",
        "answer_lines": [
            "1. Microbial Growth Kinetics: In a closed batch culture, cell population follows four distinct phases:",
            "• Lag Phase: Cells adapt to medium, synthesizing enzymes without immediate cell division.",
            "• Exponential (Log) Phase: Cells divide at maximum specific growth rate, following first-order kinetics.",
            "• Stationary Phase: Nutrient depletion and toxic metabolite accumulation cause growth rate to equal death rate.",
            "• Death Phase: Viable cell count declines exponentially as lysis occurs.",
            "2. Bioreactor Hardware Systems:",
            "• Vessel Construction: Electropolished 316L stainless steel vessel with steam-in-place (SIP) and clean-in-place (CIP) ports.",
            "• Agitation: Top-driven Rushton turbine impellers break air bubbles, creating turbulent liquid shear to enhance mass transfer.",
            "• Sparging: Sterile air sparger bubbles oxygen into culture; oxygen transfer rate is governed by the volumetric oxygen transfer coefficient (kLa).",
            "• Heat Transfer: Cooling jacket dissipates biological metabolic heat and agitator viscous dissipation."
        ]
    },
    {
        "id": "bio-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain the molecular regulation of the lac Operon in Escherichia coli under varying concentrations of lactose and glucose.",
        "answer_lines": [
            "1. Structure of the lac Operon: An inducible bacterial operon containing regulatory gene lacI, promoter, operator, and structural genes lacZ (beta-galactosidase), lacY (lactose permease), and lacA (transacetylase).",
            "2. Scenario 1: Glucose Present, Lactose Absent:",
            "The constitutively expressed LacI repressor protein binds tightly to the operator, physically blocking RNA polymerase from transcribing the structural genes, keeping basal expression completely repressed.",
            "3. Scenario 2: Glucose and Lactose Both Present:",
            "Allolactose (inducer) binds to the LacI repressor, inducing an allosteric conformational change that releases it from the operator. However, high glucose maintains low cyclic AMP (cAMP) levels; Catabolite Activator Protein (CAP) remains inactive, resulting in low transcription efficiency.",
            "4. Scenario 3: Glucose Absent, Lactose Present (Maximal Expression):",
            "Adenylate cyclase generates high cAMP, which complexes with CAP. The CAP-cAMP complex binds to the promoter, bending the DNA and recruiting RNA polymerase to transcribe structural genes at maximum rate, allowing the bacteria to utilize lactose as sole carbon source."
        ]
    },
    {
        "id": "bio-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Describe Biological Wastewater Treatment systems. Detail the Activated Sludge Process, trickling filters, and anaerobic digestion for biogas recovery.",
        "answer_lines": [
            "1. Primary vs. Secondary Treatment: Primary treatment mechanically screens grit and settles suspended solids. Secondary biological treatment utilizes diverse microbial consortia to metabolize dissolved and colloidal organic matter (measured as Biochemical Oxygen Demand, BOD).",
            "2. Activated Sludge Process (ASP):",
            "• Aeration Basin: Wastewater is aerated vigorously with compressed air in the presence of flocculating microorganisms (mixed liquor suspended solids, MLSS). Heterotrophic bacteria oxidize organic carbon to carbon dioxide, water, and new microbial biomass.",
            "• Secondary Clarifier: Biomass flocs settle out by gravity. A portion of settled sludge is recycled (Return Activated Sludge, RAS) to maintain microbial concentration, while excess sludge is wasted (Waste Activated Sludge, WAS).",
            "3. Trickling Filters: Fixed-bed biological reactors where wastewater is sprayed over crushed rock or structured plastic media covered with an active microbial biofilm (zoogloeal slime).",
            "4. Anaerobic Digestion: Thickened waste sludge is digested in an airtight reactor across four stages (hydrolysis, acidogenesis, acetogenesis, methanogenesis) by obligate anaerobic Archaea, converting sludge into stabilized fertilizer and biogas (65 percent methane, 35 percent carbon dioxide) for renewable energy."
        ]
    },
    {
        "id": "bio-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Tissue Engineering principles and stem cell therapeutics. Describe the tissue engineering triad and scaffold biomaterials.",
        "answer_lines": [
            "1. The Tissue Engineering Triad: Combines three foundational elements:",
            "• Living Cells: Autologous, allogeneic, or stem cells (induced pluripotent stem cells, iPSCs, or mesenchymal stem cells, MSCs) providing regenerative biological synthesis.",
            "• Extracellular Matrix Scaffolds: Three-dimensional porous matrices providing mechanical support and spatial cues for cell attachment, migration, and neo-tissue development.",
            "• Biochemical Signaling Factors: Growth factors and morphogens (e.g., VEGF for angiogenesis, BMP-2 for osteogenesis) and dynamic mechanical bioreactor stimulation promoting cellular differentiation.",
            "2. Scaffold Biomaterial Requirements:",
            "• Biocompatibility: Non-toxic without eliciting persistent adverse foreign body immune responses.",
            "• Controlled Biodegradability: Scaffold degrades into non-toxic metabolites at a rate matching native tissue regeneration.",
            "• High Porosity and Interconnectivity: Enables nutrient diffusion, metabolic waste removal, and vascular ingrowth.",
            "3. Materials and Clinical Applications: Synthetic polymers (polylactic acid PLA, polyglycolic acid PGA) and natural polymers (collagen, gelatin, chitosan) applied clinically in engineered skin substitutes (Apligraf), articular cartilage grafts, and vascular conduits."
        ]
    }
])

with open("scripts/btech_sem2_part4.json", "w", encoding="utf-8") as f:
    json.dump(subjects_data, f, indent=2)

print("Part 4 (Python, Chemical, Biology) written successfully.")
