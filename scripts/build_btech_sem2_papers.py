import json

subjects_data = {}

def add_paper(sub_key, set_num, q_list):
    key = f"{sub_key}_set{set_num}"
    subjects_data[key] = q_list

# =========================================================================
# 1. ENGINEERING MATHEMATICS II
# =========================================================================
add_paper("math", 1, [
    {
        "id": "m2-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Find the particular integral of $(D^2 + 4)y = \\sin 2x$.",
        "answer_lines": [
            "**Formula**: When $f(-a^2) = 0$, $P.I. = x \\frac{1}{f'(D^2)}\\sin ax$.",
            "**Evaluation**: Here $a = 2, f(D^2) = D^2 + 4$. Differentiating denominator with respect to $D$ gives $2D$.",
            "$$P.I. = x \\frac{1}{2D}\\sin 2x = \\frac{x}{2}\\left(-\\frac{\\cos 2x}{2}\\right) = -\\frac{x \\cos 2x}{4}$$"
        ]
    },
    {
        "id": "m2-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Evaluate $\\mathcal{L}\\{t^2 e^{3t}\\}$.",
        "answer_lines": [
            "**Base Transform**: $\\mathcal{L}\\{t^2\\} = \\frac{2!}{s^3} = \\frac{2}{s^3}$.",
            "**First Shifting Property**: $\\mathcal{L}\\{e^{at} f(t)\\} = F(s - a)$.",
            "$$\\mathcal{L}\\{t^2 e^{3t}\\} = \\frac{2}{(s - 3)^3}$$"
        ]
    },
    {
        "id": "m2-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Dirichlet's conditions for the existence of a Fourier series.",
        "answer_lines": [
            "A periodic function $f(x)$ with period $2\\pi$ can be expanded into a Fourier series if:",
            "1. $f(x)$ is single-valued and bounded in $(-\\pi, \\pi)$.",
            "2. $f(x)$ has at most a finite number of finite discontinuities in any one period.",
            "3. $f(x)$ has at most a finite number of maxima and minima in any one period."
        ]
    },
    {
        "id": "m2-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the Cauchy-Riemann equations in Cartesian coordinates.",
        "answer_lines": [
            "For a complex function $f(z) = u(x, y) + i v(x, y)$ to be analytic at a point, its first partial derivatives must satisfy:",
            "$$\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y} \\quad \\text{and} \\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$$"
        ]
    },
    {
        "id": "m2-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define the normal probability distribution and state its probability density function.",
        "answer_lines": [
            "**Definition**: A continuous probability distribution symmetric about mean $\\mu$ with standard deviation $\\sigma$.",
            "**PDF**: $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left(-\\frac{(x - \\mu)^2}{2\\sigma^2}\\right)$ for $-\\infty < x < \\infty$."
        ]
    },
    {
        "id": "m2-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Solve by the method of variation of parameters: $\\frac{d^2 y}{dx^2} + y = \\sec x$.",
        "answer_lines": [
            "**Step 1: Complementary Function**: Auxiliary equation $m^2 + 1 = 0 \\implies m = \\pm i$.",
            "$$y_c = c_1 \\cos x + c_2 \\sin x$$",
            "Here $y_1 = \\cos x$ and $y_2 = \\sin x$.",
            "**Step 2: Wronskian**: $W(y_1, y_2) = \\begin{vmatrix} \\cos x & \\sin x \\\\ -\\sin x & \\cos x \\end{vmatrix} = \\cos^2 x + \\sin^2 x = 1$.",
            "**Step 3: Particular Integral**: $y_p = u(x) y_1 + v(x) y_2$ where $R = \\sec x$.",
            "$$u(x) = -\\int \\frac{y_2 R}{W} dx = -\\int \\sin x \\sec x dx = -\\int \\tan x dx = \\ln|\\cos x|$$",
            "$$v(x) = \\int \\frac{y_1 R}{W} dx = \\int \\cos x \\sec x dx = \\int 1 dx = x$$",
            "$$y_p = (\\cos x)\\ln|\\cos x| + x \\sin x$$",
            "**General Solution**: $y = c_1 \\cos x + c_2 \\sin x + (\\cos x)\\ln|\\cos x| + x \\sin x$."
        ]
    },
    {
        "id": "m2-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Using Laplace transforms, solve the initial value problem: $y'' + 4y = 9t$ with $y(0) = 0, y'(0) = 7$.",
        "answer_lines": [
            "**Step 1: Apply Laplace Transform**:",
            "$$\\mathcal{L}\\{y''\\} + 4\\mathcal{L}\\{y\\} = 9\\mathcal{L}\\{t\\}$$",
            "$$[s^2 Y(s) - s y(0) - y'(0)] + 4 Y(s) = \\frac{9}{s^2}$$",
            "Substitute $y(0) = 0, y'(0) = 7$:",
            "$$(s^2 + 4)Y(s) - 7 = \\frac{9}{s^2} \\implies (s^2 + 4)Y(s) = 7 + \\frac{9}{s^2} = \\frac{7s^2 + 9}{s^2}$$",
            "$$Y(s) = \\frac{7s^2 + 9}{s^2(s^2 + 4)}$$",
            "**Step 2: Partial Fractions**:",
            "$$\\frac{7s^2 + 9}{s^2(s^2 + 4)} = \\frac{A}{s^2} + \\frac{B}{s^2 + 4}$$",
            "$$7s^2 + 9 = A(s^2 + 4) + B s^2 = (A + B)s^2 + 4A$$",
            "Equating coefficients: $4A = 9 \\implies A = 9/4$, and $A + B = 7 \\implies B = 7 - 9/4 = 19/4$.",
            "$$Y(s) = \\frac{9}{4}\\frac{1}{s^2} + \\frac{19}{4}\\frac{1}{s^2 + 4}$$",
            "**Step 3: Inverse Laplace Transform**:",
            "$$y(t) = \\frac{9}{4} t + \\frac{19}{8} \\sin(2t)$$"
        ]
    },
    {
        "id": "m2-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Obtain the Fourier series expansion of $f(x) = x^2$ in the interval $(-\\pi, \\pi)$ and deduce that $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$.",
        "answer_lines": [
            "**Step 1: Check Symmetry**: $f(-x) = (-x)^2 = x^2 = f(x)$ is an even function. Hence $b_n = 0$.",
            "**Step 2: Fourier Coefficients**:",
            "$$a_0 = \\frac{2}{\\pi}\\int_0^\\pi x^2 dx = \\frac{2}{\\pi}\\left[\\frac{x^3}{3}\\right]_0^\\pi = \\frac{2\\pi^2}{3}$$",
            "$$a_n = \\frac{2}{\\pi}\\int_0^\\pi x^2 \\cos nx dx = \\frac{2}{\\pi}\\left[ x^2 \\frac{\\sin nx}{n} - 2x\\left(-\\frac{\\cos nx}{n^2}\\right) + 2\\left(-\\frac{\\sin nx}{n^3}\\right) \\right]_0^\\pi$$",
            "$$= \\frac{2}{\\pi}\\left[ \\frac{2\\pi \\cos n\\pi}{n^2} \\right] = \\frac{4(-1)^n}{n^2}$$",
            "**Step 3: Fourier Series**:",
            "$$f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty a_n \\cos nx = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}\\cos nx$$",
            "**Step 4: Deduction at $x = \\pi$**:",
            "At $x = \\pi$, $f(\\pi) = \\pi^2$:",
            "$$\\pi^2 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n (-1)^n}{n^2} = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{1}{n^2}$$",
            "$$\\frac{2\\pi^2}{3} = 4\\sum_{n=1}^\\infty \\frac{1}{n^2} \\implies \\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$"
        ]
    },
    {
        "id": "m2-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Show that $u(x, y) = x^3 - 3xy^2 + 3x^2 - 3y^2$ is harmonic and find its harmonic conjugate $v(x, y)$ such that $f(z) = u + iv$ is analytic.",
        "answer_lines": [
            "**Step 1: Verify Laplace's Equation**:",
            "$$\\frac{\\partial u}{\\partial x} = 3x^2 - 3y^2 + 6x, \\quad \\frac{\\partial^2 u}{\\partial x^2} = 6x + 6$$",
            "$$\\frac{\\partial u}{\\partial y} = -6xy - 6y, \\quad \\frac{\\partial^2 u}{\\partial y^2} = -6x - 6$$",
            "$$\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = (6x + 6) + (-6x - 6) = 0$$",
            "Hence $u(x, y)$ is harmonic.",
            "**Step 2: Milne-Thomson Method**:",
            "$$f'(z) = \\frac{\\partial u}{\\partial x}(z, 0) - i \\frac{\\partial u}{\\partial y}(z, 0) = (3z^2 + 6z) - i(0) = 3z^2 + 6z$$",
            "$$f(z) = \\int (3z^2 + 6z) dz = z^3 + 3z^2 + C$$",
            "**Step 3: Finding $v(x, y)$**:",
            "Substitute $z = x + iy$: $f(z) = (x + iy)^3 + 3(x + iy)^2 + C$",
            "$$= (x^3 - 3xy^2 + 3x^2 - 3y^2) + i(3x^2 y - y^3 + 6xy) + C$$",
            "Harmonic conjugate: $v(x, y) = 3x^2 y - y^3 + 6xy + c$."
        ]
    },
    {
        "id": "m2-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "In a test on $2000$ electric bulbs, the life of a bulb was found to be normally distributed with an average life of $2040$ hours and standard deviation of $60$ hours. Estimate the number of bulbs likely to burn for: (i) more than $2150$ hours, (ii) between $1920$ and $2100$ hours. (Given $P(0 < Z < 1.83) = 0.4664, P(0 < Z < 2) = 0.4772, P(0 < Z < 1) = 0.3413)$.",
        "answer_lines": [
            "**Parameters**: Mean $\\mu = 2040$ hrs, $\\sigma = 60$ hrs, $N = 2000$.",
            "**Case (i): Life more than $2150$ hours**:",
            "$$Z = \\frac{X - \\mu}{\\sigma} = \\frac{2150 - 2040}{60} = \\frac{110}{60} = 1.83$$",
            "$$P(X > 2150) = P(Z > 1.83) = 0.5 - P(0 < Z < 1.83) = 0.5 - 0.4664 = 0.0336$$",
            "Expected number of bulbs $= 2000 \\times 0.0336 = 67.2 \\approx 67$ bulbs.",
            "**Case (ii): Life between $1920$ and $2100$ hours**:",
            "$$Z_1 = \\frac{1920 - 2040}{60} = -2.0, \\quad Z_2 = \\frac{2100 - 2040}{60} = 1.0$$",
            "$$P(-2 < Z < 1) = P(0 < Z < 2) + P(0 < Z < 1) = 0.4772 + 0.3413 = 0.8185$$",
            "Expected number of bulbs $= 2000 \\times 0.8185 = 1637$ bulbs."
        ]
    }
])

add_paper("math", 2, [
    {
        "id": "m2-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Find the complementary function of $(D^2 - 4D + 4)y = e^{2x}$.",
        "answer_lines": [
            "**Auxiliary Equation**: $m^2 - 4m + 4 = 0 \\implies (m - 2)^2 = 0$.",
            "**Roots**: $m = 2, 2$ (real and repeated).",
            "**Complementary Function**: $y_c = (c_1 + c_2 x)e^{2x}$."
        ]
    },
    {
        "id": "m2-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Find the Laplace transform of $f(t) = \\sin(3t) \\cos(2t)$.",
        "answer_lines": [
            "**Trigonometric Identity**: $\\sin(3t) \\cos(2t) = \\frac{1}{2}[\\sin(5t) + \\sin(t)]$.",
            "**Transform**: $\\mathcal{L}\\{f(t)\\} = \\frac{1}{2}\\left[\\frac{5}{s^2 + 25} + \\frac{1}{s^2 + 1}\\right]$."
        ]
    },
    {
        "id": "m2-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Parseval's identity for Fourier series.",
        "answer_lines": [
            "For a function $f(x)$ with Fourier coefficients $a_0, a_n, b_n$ over $(-\\pi, \\pi)$:",
            "$$\\frac{1}{\\pi}\\int_{-\\pi}^\\pi [f(x)]^2 dx = \\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2)$$"
        ]
    },
    {
        "id": "m2-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Cauchy's Integral Theorem.",
        "answer_lines": [
            "If $f(z)$ is analytic and $f'(z)$ is continuous inside and on a closed contour $C$, then:",
            "$$\\oint_C f(z) dz = 0$$"
        ]
    },
    {
        "id": "m2-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the probability density function of the standard normal distribution $Z \\sim \\mathcal{N}(0, 1)$.",
        "answer_lines": [
            "$$\\phi(z) = \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2} \\quad \\text{for } -\\infty < z < \\infty$$"
        ]
    },
    {
        "id": "m2-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Solve the non-homogeneous ODE: $(D^3 - 3D^2 + 4)y = e^{2x} + 4$.",
        "answer_lines": [
            "**Step 1: Complementary Function**: $m^3 - 3m^2 + 4 = 0 \\implies (m + 1)(m - 2)^2 = 0$.",
            "$$y_c = c_1 e^{-x} + (c_2 + c_3 x)e^{2x}$$",
            "**Step 2: Particular Integrals**:",
            "$$P.I._1 = \\frac{1}{(D+1)(D-2)^2}e^{2x} = \\frac{1}{2+1}\\frac{x^2}{2!}e^{2x} = \\frac{x^2 e^{2x}}{6}$$",
            "$$P.I._2 = \\frac{1}{D^3 - 3D^2 + 4}(4) = \\frac{4}{4} = 1$$",
            "**General Solution**: $y = c_1 e^{-x} + (c_2 + c_3 x)e^{2x} + \\frac{x^2 e^{2x}}{6} + 1$."
        ]
    },
    {
        "id": "m2-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Solve the initial value problem using Laplace transforms: $y'' - 3y' + 2y = 4e^{2t}$ with $y(0) = -3, y'(0) = 5$.",
        "answer_lines": [
            "**Step 1**: $[s^2 Y(s) + 3s - 5] - 3[s Y(s) + 3] + 2 Y(s) = \\frac{4}{s - 2}$.",
            "$$(s - 1)(s - 2)Y(s) = \\frac{-3s^2 + 20s - 24}{s - 2} \\implies Y(s) = \\frac{-3s^2 + 20s - 24}{(s - 1)(s - 2)^2}$$",
            "**Step 2: Partial Fractions**: $Y(s) = -\\frac{7}{s - 1} + \\frac{4}{s - 2} + \\frac{4}{(s - 2)^2}$.",
            "**Step 3: Inverse Transform**: $y(t) = -7e^t + 4e^{2t} + 4t e^{2t}$."
        ]
    },
    {
        "id": "m2-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Find the half-range Fourier cosine series for $f(x) = x(\\pi - x)$ in $(0, \\pi)$.",
        "answer_lines": [
            "**Step 1: Compute $a_0$**: $a_0 = \\frac{2}{\\pi}\\int_0^\\pi (\\pi x - x^2) dx = \\frac{\\pi^2}{3}$.",
            "**Step 2: Compute $a_n$**: $a_n = \\frac{2}{\\pi}\\int_0^\\pi (\\pi x - x^2)\\cos nx dx = -\\frac{2}{n^2}[1 + (-1)^n]$.",
            "For odd $n$, $a_n = 0$; for even $n = 2m$, $a_{2m} = -\\frac{1}{m^2}$.",
            "**Fourier Series**: $f(x) = \\frac{\\pi^2}{6} - \\sum_{m=1}^\\infty \\frac{\\cos(2m x)}{m^2}$."
        ]
    },
    {
        "id": "m2-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Evaluate $\\oint_C \\frac{e^{2z}}{(z+1)^4} dz$ where $C$ is the circle $|z| = 2$ using Cauchy's Integral Formula.",
        "answer_lines": [
            "**Singularity**: $z_0 = -1$ is inside contour $|z| = 2$.",
            "**Formula**: $\\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz = \\frac{2\\pi i}{n!} f^{(n)}(z_0)$.",
            "With $f(z) = e^{2z}, n = 3, z_0 = -1$: $f'''(z) = 8e^{2z} \\implies f'''(-1) = 8e^{-2}$.",
            "$$\\oint_C \\frac{e^{2z}}{(z+1)^4} dz = \\frac{2\\pi i}{3!}(8e^{-2}) = \\frac{8\\pi i}{3 e^2}$$"
        ]
    },
    {
        "id": "m2-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "A continuous random variable $X$ has PDF $f(x) = k x e^{-\\lambda x}$ for $x \\ge 0$. Find $k$, $E[X]$, and $\\text{Var}(X)$.",
        "answer_lines": [
            "**Normalization**: $k \\int_0^\\infty x e^{-\\lambda x} dx = 1 \\implies k \\cdot \\frac{1}{\\lambda^2} = 1 \\implies k = \\lambda^2$.",
            "**Expectation**: $E[X] = \\lambda^2 \\int_0^\\infty x^2 e^{-\\lambda x} dx = \\lambda^2 \\cdot \\frac{2}{\\lambda^3} = \\frac{2}{\\lambda}$.",
            "**Variance**: $E[X^2] = \\lambda^2 \\frac{6}{\\lambda^4} = \\frac{6}{\\lambda^2} \\implies \\text{Var}(X) = \\frac{6}{\\lambda^2} - \\left(\\frac{2}{\\lambda}\\right)^2 = \\frac{2}{\\lambda^2}$."
        ]
    }
])

with open("scripts/btech_sem2_part1.json", "w", encoding="utf-8") as f:
    json.dump(subjects_data, f, indent=2)

print("Part 1 (Math) written successfully.")
