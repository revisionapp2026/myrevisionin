import json

papers = {}

def add_set(subject_key, is_set1, questions):
    k = f"{subject_key}_{1 if is_set1 else 2}"
    papers[k] = questions

# =========================================================================
# 1. Engineering Mathematics II
# =========================================================================
add_set("math", True, [
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
            "**Definition**: Continuous probability distribution symmetric about mean $\\mu$ with standard deviation $\\sigma$.",
            "**PDF**: $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left(-\\frac{(x - \\mu)^2}{2\\sigma^2}\\right)$ for $-\\infty < x < \\infty$."
        ]
    },
    {
        "id": "m2-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Solve by the method of variation of parameters: $\\frac{d^2 y}{dx^2} + y = \\sec x$.",
        "answer_lines": [
            "**Step 1: Complementary Function**: $m^2 + 1 = 0 \\implies m = \\pm i$.",
            "$$y_c = c_1 \\cos x + c_2 \\sin x \\implies y_1 = \\cos x, \\quad y_2 = \\sin x$$",
            "**Step 2: Wronskian Determinant**:",
            "$$W = y_1 y_2' - y_2 y_1' = \\cos x(\\cos x) - \\sin x(-\\sin x) = \\cos^2 x + \\sin^2 x = 1$$",
            "**Step 3: Particular Integral**: $y_p = u y_1 + v y_2$ with $R(x) = \\sec x$:",
            "$$u = -\\int \\frac{y_2 R}{W} dx = -\\int \\sin x \\sec x dx = -\\int \\tan x dx = \\ln |\\cos x|$$",
            "$$v = \\int \\frac{y_1 R}{W} dx = \\int \\cos x \\sec x dx = \\int 1 dx = x$$",
            "$$y_p = \\cos x \\ln |\\cos x| + x \\sin x$$",
            "**General Solution**: $y = c_1 \\cos x + c_2 \\sin x + \\cos x \\ln |\\cos x| + x \\sin x$."
        ]
    },
    {
        "id": "m2-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Using the Convolution Theorem, evaluate $\\mathcal{L}^{-1}\\left\\{\\frac{s}{(s^2+1)(s^2+4)}\\right\\}$.",
        "answer_lines": [
            "**Step 1**: Let $F(s) = \\frac{s}{s^2 + 1} \\implies f(t) = \\cos t$, and $G(s) = \\frac{1}{s^2 + 4} \\implies g(t) = \\frac{1}{2}\\sin 2t$.",
            "**Step 2: Convolution Integral**:",
            "$$\\mathcal{L}^{-1}\\{F(s)G(s)\\} = \\int_0^t f(u) g(t - u) du = \\int_0^t \\cos u \\cdot \\frac{1}{2}\\sin(2(t - u)) du$$",
            "$$= \\frac{1}{4}\\int_0^t [\\sin(2t - u) + \\sin(2t - 3u)] du$$",
            "$$= \\frac{1}{4}\\left[ \\cos(2t - u) + \\frac{1}{3}\\cos(2t - 3u) \\right]_0^t = \\frac{1}{3}(\\cos t - \\cos 2t)$$",
            "**Final Answer**: $\\frac{1}{3}(\\cos t - \\cos 2t)$."
        ]
    },
    {
        "id": "m2-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Obtain the Fourier series expansion of $f(x) = x^2$ in $(-\\pi, \\pi)$ and deduce $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$.",
        "answer_lines": [
            "**Step 1**: $f(x) = x^2$ is an even function, so $b_n = 0$.",
            "$$a_0 = \\frac{2}{\\pi}\\int_0^\\pi x^2 dx = \\frac{2}{\\pi}\\left[\\frac{x^3}{3}\\right]_0^\\pi = \\frac{2\\pi^2}{3}$$",
            "$$a_n = \\frac{2}{\\pi}\\int_0^\\pi x^2 \\cos(nx) dx = \\frac{4(-1)^n}{n^2}$$",
            "**Fourier Series**: $x^2 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}\\cos(nx)$.",
            "**Deduction**: Putting $x = \\pi$: $\\pi^2 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{1}{n^2} \\implies \\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$."
        ]
    },
    {
        "id": "m2-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Find the analytic function $f(z) = u + iv$ whose real part is $u = e^x(x \\cos y - y \\sin y)$ using Milne-Thomson's method.",
        "answer_lines": [
            "**Step 1**: $\\phi_1(x, y) = \\frac{\\partial u}{\\partial x} = e^x(x \\cos y - y \\sin y) + e^x \\cos y$.",
            "$$\\phi_2(x, y) = \\frac{\\partial u}{\\partial y} = e^x(-x \\sin y - \\sin y - y \\cos y)$$",
            "**Step 2: Milne-Thomson condition ($x = z, y = 0$)**:",
            "$$\\phi_1(z, 0) = (z + 1)e^z, \\quad \\phi_2(z, 0) = 0$$",
            "$$f'(z) = \\phi_1(z, 0) - i\\phi_2(z, 0) = (z + 1)e^z$$",
            "$$f(z) = \\int (z + 1)e^z dz = z e^z + C$$"
        ]
    },
    {
        "id": "m2-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Derive the mean and variance of a Poisson distribution with parameter $\\lambda$.",
        "answer_lines": [
            "**PMF**: $P(X = k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}$ for $k = 0, 1, 2, \\dots$",
            "**Mean**: $E[X] = \\sum_{k=0}^\\infty k \\frac{e^{-\\lambda}\\lambda^k}{k!} = \\lambda e^{-\\lambda}\\sum_{k=1}^\\infty \\frac{\\lambda^{k-1}}{(k-1)!} = \\lambda e^{-\\lambda}e^\\lambda = \\lambda$.",
            "**Second Factorial Moment**: $E[X(X-1)] = \\lambda^2 e^{-\\lambda}\\sum_{k=2}^\\infty \\frac{\\lambda^{k-2}}{(k-2)!} = \\lambda^2$.",
            "**Variance**: $\\text{Var}(X) = E[X^2] - (E[X])^2 = (\\lambda^2 + \\lambda) - \\lambda^2 = \\lambda$.",
            "**Result**: $\\text{Mean} = \\text{Variance} = \\lambda$."
        ]
    }
])

add_set("math", False, [
    {
        "id": "m2-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Solve the Cauchy-Euler differential equation: $x^2 \\frac{d^2 y}{dx^2} - 2x \\frac{dy}{dx} + 2y = 0$.",
        "answer_lines": [
            "**Substitution**: $x = e^z, x D = \\theta, x^2 D^2 = \\theta(\\theta - 1)$.",
            "**Auxiliary Equation**: $\\theta^2 - 3\\theta + 2 = 0 \\implies \\theta = 1, 2$.",
            "**Solution**: $y = c_1 e^z + c_2 e^{2z} = c_1 x + c_2 x^2$."
        ]
    },
    {
        "id": "m2-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Find the Laplace transform of $f(t) = \\sin(3t) \\cos(2t)$.",
        "answer_lines": [
            "**Identity**: $\\sin(3t)\\cos(2t) = \\frac{1}{2}[\\sin(5t) + \\sin(t)]$.",
            "**Transform**: $\\mathcal{L}\\{f(t)\\} = \\frac{1}{2}\\left[ \\frac{5}{s^2 + 25} + \\frac{1}{s^2 + 1} \\right]$."
        ]
    },
    {
        "id": "m2-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Parseval's identity for a Fourier series.",
        "answer_lines": [
            "For $f(x)$ with Fourier coefficients $a_0, a_n, b_n$ in $(-\\pi, \\pi)$:",
            "$$\\frac{1}{\\pi}\\int_{-\\pi}^\\pi [f(x)]^2 dx = \\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2)$$"
        ]
    },
    {
        "id": "m2-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Cauchy's Integral Theorem.",
        "answer_lines": [
            "If $f(z)$ is analytic and $f'(z)$ is continuous inside and on a closed contour $C$, then $\\oint_C f(z) dz = 0$."
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

print("Math done.")
