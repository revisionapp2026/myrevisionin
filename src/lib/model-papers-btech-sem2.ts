/**
 * Authentic University Model Papers & Solved Solutions for B.Tech Semester 2.
 * Curricula: AICTE Model Curriculum / JNTU R22 / VTU 2022.
 *
 * Covers all 8 Subjects (Set 1 & Set 2):
 * 1. Engineering Mathematics II
 * 2. Object Oriented Programming (Java/C++)
 * 3. Basic Electronics
 * 4. Engineering Mechanics
 * 5. Workshop Practice
 * 6. Python Programming
 * 7. Chemical Process Calculations
 * 8. Biology for Engineers (Strictly ZERO LaTeX formulas)
 */

import type { DbQuestion } from "./content";

const sem2PapersData: Record<string, DbQuestion[]> = {
  "math_set1": [
    {
      "id": "m2-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Find the particular integral of $(D^2 + 4)y = \\sin 2x$.",
      "answer_lines": [
        "**Formula**: When $f(-a^2) = 0$, $P.I. = x \\frac{1}{f'(D^2)}\\sin ax$.",
        "**Evaluation**: Here $a = 2, f(D^2) = D^2 + 4$. Differentiating denominator with respect to $D$ gives $2D$.",
        "$$P.I. = x \\frac{1}{2D}\\sin 2x = \\frac{x}{2}\\left(-\\frac{\\cos 2x}{2}\\right) = -\\frac{x \\cos 2x}{4}$$"
      ]
    },
    {
      "id": "m2-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Evaluate $\\mathcal{L}\\{t^2 e^{3t}\\}$.",
      "answer_lines": [
        "**Base Transform**: $\\mathcal{L}\\{t^2\\} = \\frac{2!}{s^3} = \\frac{2}{s^3}$.",
        "**First Shifting Property**: $\\mathcal{L}\\{e^{at} f(t)\\} = F(s - a)$.",
        "$$\\mathcal{L}\\{t^2 e^{3t}\\} = \\frac{2}{(s - 3)^3}$$"
      ]
    },
    {
      "id": "m2-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Dirichlet's conditions for the existence of a Fourier series.",
      "answer_lines": [
        "A periodic function $f(x)$ with period $2\\pi$ can be expanded into a Fourier series if:",
        "1. $f(x)$ is single-valued and bounded in $(-\\pi, \\pi)$.",
        "2. $f(x)$ has at most a finite number of finite discontinuities in any one period.",
        "3. $f(x)$ has at most a finite number of maxima and minima in any one period."
      ]
    },
    {
      "id": "m2-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Cauchy-Riemann equations in Cartesian coordinates.",
      "answer_lines": [
        "For a complex function $f(z) = u(x, y) + i v(x, y)$ to be analytic at a point, its first partial derivatives must satisfy:",
        "$$\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y} \\quad \\text{and} \\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$$"
      ]
    },
    {
      "id": "m2-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define the normal probability distribution and state its probability density function.",
      "answer_lines": [
        "**Definition**: A continuous probability distribution symmetric about mean $\\mu$ with standard deviation $\\sigma$.",
        "**PDF**: $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left(-\\frac{(x - \\mu)^2}{2\\sigma^2}\\right)$ for $-\\infty < x < \\infty$."
      ]
    },
    {
      "id": "m2-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "m2-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "m2-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "m2-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "m2-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
  ],
  "math_set2": [
    {
      "id": "m2-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Find the complementary function of $(D^2 - 4D + 4)y = e^{2x}$.",
      "answer_lines": [
        "**Auxiliary Equation**: $m^2 - 4m + 4 = 0 \\implies (m - 2)^2 = 0$.",
        "**Roots**: $m = 2, 2$ (real and repeated).",
        "**Complementary Function**: $y_c = (c_1 + c_2 x)e^{2x}$."
      ]
    },
    {
      "id": "m2-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Find the Laplace transform of $f(t) = \\sin(3t) \\cos(2t)$.",
      "answer_lines": [
        "**Trigonometric Identity**: $\\sin(3t) \\cos(2t) = \\frac{1}{2}[\\sin(5t) + \\sin(t)]$.",
        "**Transform**: $\\mathcal{L}\\{f(t)\\} = \\frac{1}{2}\\left[\\frac{5}{s^2 + 25} + \\frac{1}{s^2 + 1}\\right]$."
      ]
    },
    {
      "id": "m2-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Parseval's identity for Fourier series.",
      "answer_lines": [
        "For a function $f(x)$ with Fourier coefficients $a_0, a_n, b_n$ over $(-\\pi, \\pi)$:",
        "$$\\frac{1}{\\pi}\\int_{-\\pi}^\\pi [f(x)]^2 dx = \\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2)$$"
      ]
    },
    {
      "id": "m2-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Cauchy's Integral Theorem.",
      "answer_lines": [
        "If $f(z)$ is analytic and $f'(z)$ is continuous inside and on a closed contour $C$, then:",
        "$$\\oint_C f(z) dz = 0$$"
      ]
    },
    {
      "id": "m2-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the probability density function of the standard normal distribution $Z \\sim \\mathcal{N}(0, 1)$.",
      "answer_lines": [
        "$$\\phi(z) = \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2} \\quad \\text{for } -\\infty < z < \\infty$$"
      ]
    },
    {
      "id": "m2-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "m2-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Solve the initial value problem using Laplace transforms: $y'' - 3y' + 2y = 4e^{2t}$ with $y(0) = -3, y'(0) = 5$.",
      "answer_lines": [
        "**Step 1**: $[s^2 Y(s) + 3s - 5] - 3[s Y(s) + 3] + 2 Y(s) = \\frac{4}{s - 2}$.",
        "$$(s - 1)(s - 2)Y(s) = \\frac{-3s^2 + 20s - 24}{s - 2} \\implies Y(s) = \\frac{-3s^2 + 20s - 24}{(s - 1)(s - 2)^2}$$",
        "**Step 2: Partial Fractions**: $Y(s) = -\\frac{7}{s - 1} + \\frac{4}{s - 2} + \\frac{4}{(s - 2)^2}$.",
        "**Step 3: Inverse Transform**: $y(t) = -7e^t + 4e^{2t} + 4t e^{2t}$."
      ]
    },
    {
      "id": "m2-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Find the half-range Fourier cosine series for $f(x) = x(\\pi - x)$ in $(0, \\pi)$.",
      "answer_lines": [
        "**Step 1: Compute $a_0$**: $a_0 = \\frac{2}{\\pi}\\int_0^\\pi (\\pi x - x^2) dx = \\frac{\\pi^2}{3}$.",
        "**Step 2: Compute $a_n$**: $a_n = \\frac{2}{\\pi}\\int_0^\\pi (\\pi x - x^2)\\cos nx dx = -\\frac{2}{n^2}[1 + (-1)^n]$.",
        "For odd $n$, $a_n = 0$; for even $n = 2m$, $a_{2m} = -\\frac{1}{m^2}$.",
        "**Fourier Series**: $f(x) = \\frac{\\pi^2}{6} - \\sum_{m=1}^\\infty \\frac{\\cos(2m x)}{m^2}$."
      ]
    },
    {
      "id": "m2-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Evaluate $\\oint_C \\frac{e^{2z}}{(z+1)^4} dz$ where $C$ is the circle $|z| = 2$ using Cauchy's Integral Formula.",
      "answer_lines": [
        "**Singularity**: $z_0 = -1$ is inside contour $|z| = 2$.",
        "**Formula**: $\\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz = \\frac{2\\pi i}{n!} f^{(n)}(z_0)$.",
        "With $f(z) = e^{2z}, n = 3, z_0 = -1$: $f'''(z) = 8e^{2z} \\implies f'''(-1) = 8e^{-2}$.",
        "$$\\oint_C \\frac{e^{2z}}{(z+1)^4} dz = \\frac{2\\pi i}{3!}(8e^{-2}) = \\frac{8\\pi i}{3 e^2}$$"
      ]
    },
    {
      "id": "m2-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "A continuous random variable $X$ has PDF $f(x) = k x e^{-\\lambda x}$ for $x \\ge 0$. Find $k$, $E[X]$, and $\\text{Var}(X)$.",
      "answer_lines": [
        "**Normalization**: $k \\int_0^\\infty x e^{-\\lambda x} dx = 1 \\implies k \\cdot \\frac{1}{\\lambda^2} = 1 \\implies k = \\lambda^2$.",
        "**Expectation**: $E[X] = \\lambda^2 \\int_0^\\infty x^2 e^{-\\lambda x} dx = \\lambda^2 \\cdot \\frac{2}{\\lambda^3} = \\frac{2}{\\lambda}$.",
        "**Variance**: $E[X^2] = \\lambda^2 \\frac{6}{\\lambda^4} = \\frac{6}{\\lambda^2} \\implies \\text{Var}(X) = \\frac{6}{\\lambda^2} - \\left(\\frac{2}{\\lambda}\\right)^2 = \\frac{2}{\\lambda^2}$."
      ]
    }
  ],
  "oop_set1": [
    {
      "id": "oop-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Encapsulation and explain how it is achieved in Object-Oriented Programming.",
      "answer_lines": [
        "**Definition**: Encapsulation is the mechanism of binding code and data together into a single unit (class) while restricting direct external access to internal state.",
        "**Implementation**: Achieved by declaring class member variables as `private` and exposing controlled access via public getter and setter methods with validation logic."
      ]
    },
    {
      "id": "oop-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between the `==` operator and the `.equals()` method in Java.",
      "answer_lines": [
        "**`==` Operator**: Compares primitive values directly; for reference types, it checks reference identity (whether both variables point to the exact same memory address in heap).",
        "**`.equals()` Method**: Compares the logical content/state of two objects. Classes like `String` and `Integer` override `.equals()` for deep value equality."
      ]
    },
    {
      "id": "oop-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Explain the difference between `final`, `finally`, and `finalize` in Java.",
      "answer_lines": [
        "**`final`**: Keyword used to declare constants (variables), prevent method overriding (methods), or prevent inheritance (classes).",
        "**`finally`**: Block accompanying `try-catch` that executes unconditionally for cleanup (e.g., closing file streams, DB connections).",
        "**`finalize()`**: Method invoked by Garbage Collector prior to object reclamation (deprecated in modern Java)."
      ]
    },
    {
      "id": "oop-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between compile-time polymorphism and runtime polymorphism.",
      "answer_lines": [
        "**Compile-Time (Static) Polymorphism**: Resolved during compilation; achieved through Method Overloading and Operator Overloading (e.g., same method name with differing parameter lists).",
        "**Runtime (Dynamic) Polymorphism**: Resolved during execution; achieved through Method Overriding using inheritance and dynamic method dispatch via base class references."
      ]
    },
    {
      "id": "oop-s1-q5",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the difference between `throw` and `throws` keywords in Java?",
      "answer_lines": [
        "**`throw`**: Used explicitly inside a method body to instantiate and throw a specific exception object: `throw new IOException(\"File missing\");`.",
        "**`throws`**: Used in a method signature to declare exceptions that the method might propagate to its caller: `public void readFile() throws IOException`."
      ]
    },
    {
      "id": "oop-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Runtime Polymorphism with a complete Java program featuring an abstract class `Shape` and subclasses `Circle` and `Rectangle`.",
      "answer_lines": [
        "**1. Theoretical Foundation**: Runtime polymorphism occurs when an overridden method is called through a superclass reference variable. Java resolves the call at runtime based on the actual object type (Dynamic Method Dispatch).",
        "**2. Code Implementation**:",
        "```java",
        "abstract class Shape {",
        "    String color;",
        "    Shape(String color) { this.color = color; }",
        "    abstract double calculateArea();",
        "    abstract double calculatePerimeter();",
        "}",
        "",
        "class Circle extends Shape {",
        "    double radius;",
        "    Circle(String color, double radius) {",
        "        super(color);",
        "        this.radius = radius;",
        "    }",
        "    @Override double calculateArea() { return Math.PI * radius * radius; }",
        "    @Override double calculatePerimeter() { return 2 * Math.PI * radius; }",
        "}",
        "",
        "class Rectangle extends Shape {",
        "    double length, width;",
        "    Rectangle(String color, double length, double width) {",
        "        super(color);",
        "        this.length = length; this.width = width;",
        "    }",
        "    @Override double calculateArea() { return length * width; }",
        "    @Override double calculatePerimeter() { return 2 * (length + width); }",
        "}",
        "",
        "public class ShapeDemo {",
        "    public static void main(String[] args) {",
        "        Shape s1 = new Circle(\"Red\", 5.0);",
        "        Shape s2 = new Rectangle(\"Blue\", 4.0, 6.0);",
        "        System.out.println(\"Circle Area: \" + s1.calculateArea());",
        "        System.out.println(\"Rectangle Area: \" + s2.calculateArea());",
        "    }",
        "}",
        "```",
        "**3. Key OOP Aspects**: `super(color)` demonstrates constructor chaining; `s1.calculateArea()` invokes `Circle.calculateArea()` via dynamic dispatch."
      ]
    },
    {
      "id": "oop-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Exception Handling hierarchy in Java. Create a custom checked exception `InsufficientFundsException` and show its usage in a `BankAccount` class.",
      "answer_lines": [
        "**1. Exception Hierarchy**: `Throwable` is the root, split into `Error` (irrecoverable system failures like `OutOfMemoryError`) and `Exception`. `Exception` is subdivided into Checked Exceptions (compile-time checked, e.g. `IOException`) and Unchecked Exceptions (`RuntimeException` subclasses like `NullPointerException`).",
        "**2. Custom Exception Implementation**:",
        "```java",
        "class InsufficientFundsException extends Exception {",
        "    private double deficit;",
        "    public InsufficientFundsException(double deficit) {",
        "        super(\"Withdrawal failed: deficit of $\" + deficit);",
        "        this.deficit = deficit;",
        "    }",
        "    public double getDeficit() { return deficit; }",
        "}",
        "",
        "class BankAccount {",
        "    private double balance;",
        "    public BankAccount(double initialBalance) { this.balance = initialBalance; }",
        "    public void withdraw(double amount) throws InsufficientFundsException {",
        "        if (amount > balance) {",
        "            throw new InsufficientFundsException(amount - balance);",
        "        }",
        "        balance -= amount;",
        "        System.out.println(\"Withdrew: \" + amount + \", Remaining: \" + balance);",
        "    }",
        "}",
        "```",
        "**3. Handling Demonstration**:",
        "```java",
        "public class BankTest {",
        "    public static void main(String[] args) {",
        "        BankAccount acc = new BankAccount(500.0);",
        "        try {",
        "            acc.withdraw(750.0);",
        "        } catch (InsufficientFundsException e) {",
        "            System.err.println(e.getMessage());",
        "        } finally {",
        "            System.out.println(\"Transaction audit complete.\");",
        "        }",
        "    }",
        "}",
        "```"
      ]
    },
    {
      "id": "oop-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Compare `ArrayList` vs `LinkedList` in Java Collections. Write a program to sort a list of `Student` objects using `Comparator` by GPA descending.",
      "answer_lines": [
        "**1. Performance Comparison**:",
        "\u2022 **Internal Representation**: `ArrayList` uses dynamic resizable arrays; `LinkedList` uses doubly-linked nodes.",
        "\u2022 **Random Access**: `ArrayList` is $O(1)$ (`get(index)`); `LinkedList` is $O(n)$ due to pointer traversal.",
        "\u2022 **Insert/Delete**: `ArrayList` is $O(n)$ in middle due to element shifting; `LinkedList` is $O(1)$ given node pointer.",
        "\u2022 **Memory Overhead**: `LinkedList` incurs significant overhead due to forward and backward pointers per element.",
        "**2. Sorting Implementation**:",
        "```java",
        "import java.util.*;",
        "",
        "class Student {",
        "    int id; String name; double gpa;",
        "    Student(int id, String name, double gpa) {",
        "        this.id = id; this.name = name; this.gpa = gpa;",
        "    }",
        "    public String toString() { return name + \" (\" + gpa + \")\"; }",
        "}",
        "",
        "public class SortDemo {",
        "    public static void main(String[] args) {",
        "        List<Student> students = new ArrayList<>();",
        "        students.add(new Student(101, \"Alice\", 3.85));",
        "        students.add(new Student(102, \"Bob\", 3.92));",
        "        students.add(new Student(103, \"Charlie\", 3.65));",
        "",
        "        // Sort descending by GPA using Comparator lambda",
        "        students.sort((s1, s2) -> Double.compare(s2.gpa, s1.gpa));",
        "        System.out.println(\"Ranked: \" + students);",
        "    }",
        "}",
        "```"
      ]
    },
    {
      "id": "oop-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the Producer-Consumer problem in Java multithreading and provide a thread-safe solution using `wait()`, `notify()`, and `synchronized` blocks.",
      "answer_lines": [
        "**1. Problem Statement**: A producer thread generates data items and deposits them into a bounded shared buffer. A consumer thread extracts items from the buffer. Synchronization is required so the producer does not add to a full buffer, and consumer does not remove from an empty buffer.",
        "**2. Bounded Buffer Code**:",
        "```java",
        "import java.util.LinkedList;",
        "",
        "class SharedQueue {",
        "    private final LinkedList<Integer> queue = new LinkedList<>();",
        "    private final int CAPACITY = 5;",
        "",
        "    public synchronized void produce(int value) throws InterruptedException {",
        "        while (queue.size() == CAPACITY) {",
        "            wait(); // Release lock and wait for consumer",
        "        }",
        "        queue.add(value);",
        "        System.out.println(\"Produced: \" + value);",
        "        notifyAll(); // Wake up waiting consumer threads",
        "    }",
        "",
        "    public synchronized int consume() throws InterruptedException {",
        "        while (queue.isEmpty()) {",
        "            wait(); // Release lock and wait for producer",
        "        }",
        "        int val = queue.removeFirst();",
        "        System.out.println(\"Consumed: \" + val);",
        "        notifyAll(); // Wake up waiting producer threads",
        "        return val;",
        "    }",
        "}",
        "```",
        "**3. Thread Execution**: Producer and Consumer implement `Runnable` and invoke `produce()` / `consume()`. The `while` loop prevents spurious wakeups."
      ]
    },
    {
      "id": "oop-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the architecture of the Java Virtual Machine (JVM). Describe its major memory areas and the garbage collection process.",
      "answer_lines": [
        "**1. JVM Architecture Components**:",
        "\u2022 **Class Loader Subsystem**: Loading (`.class` binary loading), Linking (Verification, Preparation of static variables, Resolution of symbolic references), and Initialization (static blocks).",
        "\u2022 **Execution Engine**: Bytecode Interpreter, JIT (Just-In-Time) Compiler (compiles hot loops into native assembly), and Garbage Collector.",
        "**2. JVM Runtime Data Areas**:",
        "\u2022 **Method Area (Metaspace)**: Stores class structure, method metadata, runtime constant pool, and static variables.",
        "\u2022 **Heap Memory**: Shared memory allocating all object instances and arrays. Partitioned into Young Generation (Eden, S0, S1) and Old (Tenured) Generation.",
        "\u2022 **Java Thread Stack**: Per-thread memory storing stack frames for active method calls (local variables, operand stack, frame data).",
        "\u2022 **PC Registers**: Per-thread register tracking the address of the currently executing JVM instruction.",
        "\u2022 **Native Method Stack**: Dedicated stack for invoking C/C++ native libraries via JNI.",
        "**3. Garbage Collection Mechanics**: GC identifies unreachable objects using Root Tracing (tracing from GC Roots like stack references, static variables, JNI handles). Generational collection uses Minor GC (copying live objects from Eden to Survivor spaces) and Major GC (compacting long-lived objects in Old Generation)."
      ]
    }
  ],
  "oop_set2": [
    {
      "id": "oop-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is a virtual destructor in C++ and why is it essential when using polymorphism?",
      "answer_lines": [
        "**Definition**: A destructor declared with `virtual` in a base class (`virtual ~Base();`).",
        "**Significance**: When deleting a derived class object through a base class pointer (`Base* p = new Derived(); delete p;`), a non-virtual destructor triggers undefined behavior and fails to invoke `~Derived()`, causing resource/memory leaks."
      ]
    },
    {
      "id": "oop-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Explain the diamond problem in C++ and how virtual base classes resolve it.",
      "answer_lines": [
        "**Problem**: Occurs when class $D$ inherits from classes $B$ and $C$, which both inherit from base class $A$. $D$ inherits two duplicate copies of $A$, causing ambiguity and redundancy.",
        "**Resolution**: Using `class B : virtual public A` and `class C : virtual public A` ensures that only a single shared instance of $A$ is present in $D$."
      ]
    },
    {
      "id": "oop-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between shallow copy and deep copy in object cloning.",
      "answer_lines": [
        "**Shallow Copy**: Copies primitive fields directly, but for object references, it only copies the memory address (both objects point to the exact same child object).",
        "**Deep Copy**: Recursively creates new instances of all referenced child objects, making the cloned object completely independent of the original."
      ]
    },
    {
      "id": "oop-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Explain RAII and differentiate between `std::unique_ptr` and `std::shared_ptr` in C++.",
      "answer_lines": [
        "**RAII**: Resource Acquisition Is Initialization binds resource lifecycle to object lifespan (acquired in constructor, released in destructor).",
        "**`unique_ptr`**: Sole owner of dynamic memory; cannot be copied, only moved (`std::move`).",
        "**`shared_ptr`**: Shared ownership using an atomic reference count; deallocates memory when reference count drops to zero."
      ]
    },
    {
      "id": "oop-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the difference between `Runnable` and `Callable` interfaces in Java.",
      "answer_lines": [
        "**`Runnable`**: Defines `public void run()`; cannot return a result and cannot throw checked exceptions directly.",
        "**`Callable<V>`**: Defines `public V call() throws Exception`; returns a parameterized computation result $V$ and can throw checked exceptions."
      ]
    },
    {
      "id": "oop-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Implement a generic `Stack<T>` class in Java or C++ supporting `push`, `pop`, `peek`, and `isEmpty` with dynamic array resizing and exception handling.",
      "answer_lines": [
        "**1. Generic Stack Implementation in Java**:",
        "```java",
        "import java.util.EmptyStackException;",
        "",
        "public class GenericStack<T> {",
        "    private Object[] elements;",
        "    private int size = 0;",
        "    private static final int DEFAULT_CAPACITY = 10;",
        "",
        "    public GenericStack() {",
        "        elements = new Object[DEFAULT_CAPACITY];",
        "    }",
        "",
        "    public void push(T item) {",
        "        if (size == elements.length) resize(2 * elements.length);",
        "        elements[size++] = item;",
        "    }",
        "",
        "    @SuppressWarnings(\"unchecked\")",
        "    public T pop() {",
        "        if (isEmpty()) throw new EmptyStackException();",
        "        T item = (T) elements[--size];",
        "        elements[size] = null; // Prevent memory leak",
        "        if (size > 0 && size == elements.length / 4) resize(elements.length / 2);",
        "        return item;",
        "    }",
        "",
        "    @SuppressWarnings(\"unchecked\")",
        "    public T peek() {",
        "        if (isEmpty()) throw new EmptyStackException();",
        "        return (T) elements[size - 1];",
        "    }",
        "",
        "    public boolean isEmpty() { return size == 0; }",
        "    public int size() { return size; }",
        "",
        "    private void resize(int newCapacity) {",
        "        Object[] temp = new Object[newCapacity];",
        "        System.arraycopy(elements, 0, temp, 0, size);",
        "        elements = temp;",
        "    }",
        "}",
        "```",
        "**2. Analysis**: Amortized time complexity for `push` and `pop` is $O(1)$. Dynamic doubling and quarter-shrinking maintain memory efficiency."
      ]
    },
    {
      "id": "oop-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Java 8 Interface enhancements. Discuss default methods, static methods, and functional interfaces with code examples.",
      "answer_lines": [
        "**1. Evolution of Interfaces**: Prior to Java 8, interfaces could only declare public abstract methods. Java 8 added:",
        "\u2022 **Default Methods**: Methods with default implementation using `default` keyword to ensure backward compatibility for API evolution.",
        "\u2022 **Static Methods**: Utility methods belonging to the interface directly, invoked without instantiating.",
        "\u2022 **Functional Interfaces**: Interfaces with exactly one abstract method, annotated with `@FunctionalInterface`, enabling Lambdas.",
        "**2. Implementation Code**:",
        "```java",
        "@FunctionalInterface",
        "interface Vehicle {",
        "    void drive(); // Single Abstract Method",
        "",
        "    default void turnAlarmOn() {",
        "        System.out.println(\"Turning the vehicle alarm on.\");",
        "    }",
        "",
        "    static int getHorsePower(int rpm, int torque) {",
        "        return (rpm * torque) / 5252;",
        "    }",
        "}",
        "",
        "class ElectricCar implements Vehicle {",
        "    @Override",
        "    public void drive() {",
        "        System.out.println(\"Silent electric motor engaged.\");",
        "    }",
        "    // Optionally override turnAlarmOn()",
        "}",
        "```"
      ]
    },
    {
      "id": "oop-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the internal architecture of `HashMap` in Java. Detail hashing, bucket array, collision resolution, and red-black tree conversion.",
      "answer_lines": [
        "**1. Structural Overview**: `HashMap` is an array of `Node<K,V>` buckets (default initial capacity 16, default load factor 0.75).",
        "**2. Index Calculation**:",
        "\u2022 Key hash is perturbed: `hash = (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16)` to spread bits.",
        "\u2022 Bucket index: `index = hash & (capacity - 1)` (equivalent to modulo when capacity is power of 2).",
        "**3. Collision Resolution**:",
        "\u2022 Separate chaining: When multiple keys map to the same index, they form a singly-linked list.",
        "\u2022 **Treeification (Java 8+)**: If a bucket's linked list length exceeds `TREEIFY_THRESHOLD = 8` and table capacity is $\\ge 64$, the bucket is converted into a balanced Red-Black Tree (`TreeNode`). This reduces search time from $O(n)$ to $O(\\log n)$.",
        "**4. Rehashing**: When `size > capacity * loadFactor`, capacity is doubled and elements are redistributed."
      ]
    },
    {
      "id": "oop-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Demonstrate the Java Concurrency Framework using `ExecutorService`, `Callable`, and `Future` to compute factorial asynchronously in parallel.",
      "answer_lines": [
        "**1. Concurrency Architecture**: `ExecutorService` abstracts thread management using thread pools (e.g., `FixedThreadPool`), eliminating the overhead of manual thread creation.",
        "**2. Implementation Code**:",
        "```java",
        "import java.util.concurrent.*;",
        "",
        "class FactorialTask implements Callable<Long> {",
        "    private final int number;",
        "    public FactorialTask(int number) { this.number = number; }",
        "",
        "    @Override",
        "    public Long call() {",
        "        long fact = 1;",
        "        for (int i = 2; i <= number; i++) fact *= i;",
        "        return fact;",
        "    }",
        "}",
        "",
        "public class ExecutorDemo {",
        "    public static void main(String[] args) throws Exception {",
        "        ExecutorService executor = Executors.newFixedThreadPool(3);",
        "        Future<Long> f1 = executor.submit(new FactorialTask(10));",
        "        Future<Long> f2 = executor.submit(new FactorialTask(15));",
        "",
        "        System.out.println(\"Computing in background...\");",
        "        System.out.println(\"Factorial 10: \" + f1.get()); // Blocks until done",
        "        System.out.println(\"Factorial 15: \" + f2.get());",
        "",
        "        executor.shutdown();",
        "    }",
        "}",
        "```"
      ]
    },
    {
      "id": "oop-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain File I/O in Java using modern NIO.2 / streams and write a program using try-with-resources to count word frequencies in a file.",
      "answer_lines": [
        "**1. Java I/O Streams**: Byte streams (`InputStream`/`OutputStream`) handle raw binary; Character streams (`Reader`/`Writer`) handle Unicode character encodings.",
        "**2. Word Frequency Counter Code**:",
        "```java",
        "import java.io.*;",
        "import java.util.*;",
        "",
        "public class WordFrequency {",
        "    public static void main(String[] args) {",
        "        Map<String, Integer> wordCount = new HashMap<>();",
        "        File inputFile = new File(\"input.txt\");",
        "",
        "        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {",
        "            String line;",
        "            while ((line = reader.readLine()) != null) {",
        "                String[] words = line.toLowerCase().split(\"[^a-zA-Z0-9]+\");",
        "                for (String word : words) {",
        "                    if (!word.isEmpty()) {",
        "                        wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);",
        "                    }",
        "                }",
        "            }",
        "        } catch (IOException e) {",
        "            System.err.println(\"I/O Error: \" + e.getMessage());",
        "        }",
        "        wordCount.forEach((k, v) -> System.out.println(k + \": \" + v));",
        "    }",
        "}",
        "```",
        "**3. Advantages**: Try-with-resources implements `AutoCloseable`, ensuring the stream closes safely even during exceptions."
      ]
    }
  ],
  "electronics_set1": [
    {
      "id": "be-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Shockley diode equation and define each term.",
      "answer_lines": [
        "$$I = I_0 \\left( e^{\\frac{V}{\\eta V_T}} - 1 \\right)$$",
        "Where $I$ is diode current, $I_0$ is reverse saturation current, $V$ is applied voltage, $\\eta$ is ideality factor ($1$ for Ge, $2$ for Si), and $V_T = \\frac{kT}{q} \\approx 26\\text{ mV}$ at $300\\text{ K}$ is thermal voltage."
      ]
    },
    {
      "id": "be-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Derive the mathematical relationship between transistor current gains $\\alpha$ and $\\beta$.",
      "answer_lines": [
        "Since $I_E = I_B + I_C$, divide by $I_C$: $\\frac{I_E}{I_C} = \\frac{I_B}{I_C} + 1$.",
        "Substituting $\\alpha = \\frac{I_C}{I_E}$ and $\\beta = \\frac{I_C}{I_B}$ gives $\\frac{1}{\\alpha} = \\frac{1}{\\beta} + 1 = \\frac{1 + \\beta}{\\beta}$, hence:",
        "$$\\beta = \\frac{\\alpha}{1 - \\alpha} \\quad \\text{and} \\quad \\alpha = \\frac{\\beta}{1 + \\beta}$$"
      ]
    },
    {
      "id": "be-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "List four ideal characteristics of an Operational Amplifier (Op-Amp).",
      "answer_lines": [
        "1. Infinite open-loop voltage gain ($A_{OL} = \\infty$).",
        "2. Infinite input impedance ($R_{in} = \\infty$), drawing zero input current ($I_+ = I_- = 0$).",
        "3. Zero output impedance ($R_{out} = 0$).",
        "4. Infinite bandwidth ($BW = \\infty$) and zero offset voltage ($V_{os} = 0$)."
      ]
    },
    {
      "id": "be-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State De Morgan's theorems in Boolean algebra.",
      "answer_lines": [
        "1. **First Theorem**: The complement of a product equals the sum of the complements: $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$.",
        "2. **Second Theorem**: The complement of a sum equals the product of the complements: $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$."
      ]
    },
    {
      "id": "be-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define ripple factor and state its values for half-wave and full-wave rectifiers.",
      "answer_lines": [
        "**Definition**: $\\gamma = \\frac{V_{ac,rms}}{V_{dc}} = \\sqrt{\\left(\\frac{V_{rms}}{V_{dc}}\\right)^2 - 1}$.",
        "\u2022 For Half-Wave Rectifier: $\\gamma = 1.21$.",
        "\u2022 For Full-Wave Rectifier: $\\gamma = 0.482$."
      ]
    },
    {
      "id": "be-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the working of a Full-Wave Bridge Rectifier with a neat circuit diagram. Derive expressions for DC voltage, RMS voltage, ripple factor, and efficiency.",
      "answer_lines": [
        "**1. Circuit Working**: Consists of 4 diodes ($D_1, D_2, D_3, D_4$) in a bridge. During positive half cycle of AC input, $D_1$ and $D_3$ are forward-biased, conducting current through load $R_L$. During negative half cycle, $D_2$ and $D_4$ conduct, maintaining unidirectional current through $R_L$.",
        "**2. Mathematical Derivations**:",
        "\u2022 **DC (Average) Output Voltage**: $V_{dc} = \\frac{1}{\\pi}\\int_0^\\pi V_m \\sin(\\omega t) d(\\omega t) = \\frac{2V_m}{\\pi} \\approx 0.636 V_m$.",
        "\u2022 **RMS Output Voltage**: $V_{rms} = \\sqrt{\\frac{1}{\\pi}\\int_0^\\pi V_m^2 \\sin^2(\\omega t) d(\\omega t)} = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m$.",
        "\u2022 **Ripple Factor**: $\\gamma = \\sqrt{\\left(\\frac{V_{rms}}{V_{dc}}\\right)^2 - 1} = \\sqrt{\\left(\\frac{V_m / \\sqrt{2}}{2V_m / \\pi}\\right)^2 - 1} = \\sqrt{\\left(\\frac{\\pi}{2\\sqrt{2}}\\right)^2 - 1} = \\sqrt{1.2337 - 1} = 0.482$.",
        "\u2022 **Efficiency**: $\\eta = \\frac{P_{dc}}{P_{ac}} = \\frac{I_{dc}^2 R_L}{I_{rms}^2 (R_L + 2r_f)} = \\frac{(2I_m/\\pi)^2}{(I_m/\\sqrt{2})^2} = \\frac{8}{\\pi^2} \\approx 81.2\\%$.",
        "**3. PIV**: Peak Inverse Voltage per diode is $V_m$ (half that of a center-tapped transformer design)."
      ]
    },
    {
      "id": "be-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the input and output characteristics of a BJT in Common Emitter (CE) configuration. Discuss the active, saturation, and cutoff regions.",
      "answer_lines": [
        "**1. Circuit Configuration**: The emitter terminal is common to both input (base-emitter) and output (collector-emitter) circuits.",
        "**2. Input Characteristics ($I_B$ vs $V_{BE}$ for constant $V_{CE}$)**: Resembles a forward-biased diode. As $V_{BE}$ exceeds knee voltage ($0.7\\text{ V}$ for Si), $I_B$ increases exponentially. Increasing $V_{CE}$ shifts curves slightly rightward due to Early effect (base width narrowing).",
        "**3. Output Characteristics ($I_C$ vs $V_{CE}$ for constant $I_B$)**:",
        "\u2022 **Active Region**: Emitter junction forward-biased, collector junction reverse-biased. $I_C = \\beta I_B$, curves are nearly horizontal (high dynamic output impedance). Ideal for linear amplification.",
        "\u2022 **Saturation Region**: Both junctions forward-biased ($V_{CE} < 0.2\\text{ V}$). Transistor acts as an ON switch with minimum resistance.",
        "\u2022 **Cutoff Region**: Both junctions reverse-biased ($I_B = 0$). Only tiny leakage current $I_{CEO}$ flows. Transistor acts as an OPEN switch.",
        "**4. DC Load Line**: Plotting $V_{CE} = V_{CC} - I_C R_C$ on output characteristics gives saturation point $(0, V_{CC}/R_C)$ and cutoff point $(V_{CC}, 0)$. The intersection with operating base current sets the Q-point."
      ]
    },
    {
      "id": "be-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the working of a Zener Diode as a shunt voltage regulator. Calculate the series resistance $R_S$ for a $10\\text{ V}$ Zener with $V_{in} = 20-30\\text{ V}, I_L = 10-50\\text{ mA}$, and $I_{Z,min} = 5\\text{ mA}$.",
      "answer_lines": [
        "**1. Operating Principle**: Operated in reverse breakdown (Zener breakdown). In this region, despite large variations in Zener current $I_Z$, the voltage across the diode remains practically constant at $V_Z$.",
        "**2. Circuit Analysis**: Unregulated voltage $V_{in}$ feeds series resistor $R_S$ in series with parallel combination of Zener diode and load $R_L$. Current relation: $I_S = I_Z + I_L$.",
        "**3. Design Formula**: $R_S = \\frac{V_{in,min} - V_Z}{I_{Z,min} + I_{L,max}}$.",
        "**4. Numerical Calculation**:",
        "\u2022 Given: $V_{in,min} = 20\\text{ V}, V_Z = 10\\text{ V}, I_{Z,min} = 5\\text{ mA} = 0.005\\text{ A}, I_{L,max} = 50\\text{ mA} = 0.050\\text{ A}$.",
        "\u2022 Total minimum supply current: $I_{S,min} = 0.005 + 0.050 = 0.055\\text{ A} = 55\\text{ mA}$.",
        "$$R_S = \\frac{20 - 10}{0.055} = \\frac{10}{0.055} = 181.82\\;\\Omega$$",
        "\u2022 Max power dissipation in Zener occurs at $V_{in,max} = 30\\text{ V}$ and $I_{L,min} = 10\\text{ mA}$:",
        "$$I_{S,max} = \\frac{30 - 10}{181.82} = \\frac{20}{181.82} = 110\\text{ mA} \\implies I_{Z,max} = 110 - 10 = 100\\text{ mA}$$",
        "$$P_Z = V_Z \\times I_{Z,max} = 10\\text{ V} \\times 0.1\\text{ A} = 1.0\\text{ W}$$"
      ]
    },
    {
      "id": "be-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Derive the closed-loop voltage gain for Inverting and Non-Inverting Op-Amp configurations using the concept of Virtual Ground.",
      "answer_lines": [
        "**1. Concept of Virtual Ground**: Because ideal open loop gain $A_{OL} = \\infty$, the differential input voltage $V_d = V_+ - V_- = \\frac{V_o}{A_{OL}} = 0$, meaning $V_- = V_+$. Since input impedance is infinite, no current enters the op-amp terminals ($I_+ = I_- = 0$).",
        "**2. Inverting Amplifier Derivation**:",
        "\u2022 Non-inverting terminal grounded: $V_+ = 0 \\implies V_- = 0$ (virtual ground).",
        "\u2022 Current from input through $R_1$: $I_1 = \\frac{V_{in} - V_-}{R_1} = \\frac{V_{in}}{R_1}$.",
        "\u2022 Current through feedback $R_f$: $I_f = \\frac{V_- - V_o}{R_f} = -\\frac{V_o}{R_f}$.",
        "\u2022 By KCL at inverting node: $I_1 = I_f \\implies \\frac{V_{in}}{R_1} = -\\frac{V_o}{R_f} \\implies A_v = \\frac{V_o}{V_{in}} = -\\frac{R_f}{R_1}$.",
        "**3. Non-Inverting Amplifier Derivation**:",
        "\u2022 Input connected to $V_+$: $V_+ = V_{in} \\implies V_- = V_{in}$.",
        "\u2022 Potential divider at inverting terminal: $V_- = V_o \\left( \\frac{R_1}{R_1 + R_f} \\right)$.",
        "\u2022 Equating $V_{in} = V_o \\left( \\frac{R_1}{R_1 + R_f} \\right) \\implies A_v = \\frac{V_o}{V_{in}} = 1 + \\frac{R_f}{R_1}$."
      ]
    },
    {
      "id": "be-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Design a Full Adder circuit using basic logic gates. Formulate the truth table, derive simplified Boolean expressions for Sum and Carry, and draw the gate layout.",
      "answer_lines": [
        "**1. Definition**: A combinational logic circuit that computes the arithmetic sum of three one-bit binary inputs: $A, B$, and carry-in $C_{in}$.",
        "**2. Truth Table Summary**:",
        "\u2022 $(0,0,0) \\implies S=0, C_o=0$; $(0,0,1) \\implies S=1, C_o=0$; $(0,1,0) \\implies S=1, C_o=0$; $(0,1,1) \\implies S=0, C_o=1$.",
        "\u2022 $(1,0,0) \\implies S=1, C_o=0$; $(1,0,1) \\implies S=0, C_o=1$; $(1,1,0) \\implies S=0, C_o=1$; $(1,1,1) \\implies S=1, C_o=1$.",
        "**3. Boolean Expressions**:",
        "\u2022 **Sum ($S$)**: $S = \\sum m(1, 2, 4, 7) = A \\oplus B \\oplus C_{in}$.",
        "\u2022 **Carry Out ($C_{out}$)**: $C_{out} = \\sum m(3, 5, 6, 7) = AB + BC_{in} + AC_{in} = AB + C_{in}(A \\oplus B)$.",
        "**4. Hardware Implementation**: Constructed using two Half Adders and one OR gate: First half adder takes $A, B$ to produce $S_1 = A \\oplus B$ and $C_1 = AB$. Second half adder takes $S_1$ and $C_{in}$ to produce final Sum $S = S_1 \\oplus C_{in}$ and carry $C_2 = S_1 C_{in}$. Final Carry $C_{out} = C_1 + C_2$."
      ]
    }
  ],
  "electronics_set2": [
    {
      "id": "be-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define pinch-off voltage $V_P$ in a JFET and write Shockley's equation.",
      "answer_lines": [
        "**Pinch-off Voltage ($V_P$)**: The value of drain-to-source voltage $V_{DS}$ at $V_{GS} = 0$ at which the depletion layers touch, causing drain current to saturate at $I_{DSS}$.",
        "**Shockley's Equation**: $I_D = I_{DSS} \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$ for $V_P \\le V_{GS} \\le 0$."
      ]
    },
    {
      "id": "be-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Barkhausen's criterion for sustained oscillations in feedback circuits.",
      "answer_lines": [
        "1. The magnitude of the loop gain must be equal to unity: $|A\\beta| = 1$.",
        "2. The total phase shift around the feedback loop must be $0^\\circ$ or an integer multiple of $360^\\circ$."
      ]
    },
    {
      "id": "be-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between Enhancement and Depletion MOSFETs.",
      "answer_lines": [
        "**Depletion MOSFET**: Has a physical conducting channel built during fabrication; conducts at $V_{GS} = 0$ (normally ON) and can operate in both depletion and enhancement modes.",
        "**Enhancement MOSFET**: Has no physical channel at $V_{GS} = 0$ (normally OFF); requires a gate threshold voltage $V_{GS} > V_{th}$ to induce an inversion channel."
      ]
    },
    {
      "id": "be-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Slew Rate of an Op-Amp and state its typical value for IC 741.",
      "answer_lines": [
        "**Definition**: The maximum rate of change of output voltage per unit time in response to a step input: $SR = \\left.\\frac{dv_o}{dt}\\right|_{max}$ in $\\text{V}/\\mu\\text{s}$.",
        "**Value**: For standard general-purpose Op-Amp IC 741, typical $SR = 0.5\\text{ V}/\\mu\\text{s}$."
      ]
    },
    {
      "id": "be-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Convert the binary number $(110101)_2$ into decimal and hexadecimal representations.",
      "answer_lines": [
        "\u2022 **Decimal**: $1\\cdot 2^5 + 1\\cdot 2^4 + 0\\cdot 2^3 + 1\\cdot 2^2 + 0\\cdot 2^1 + 1\\cdot 2^0 = 32 + 16 + 0 + 4 + 0 + 1 = 53_{10}$.",
        "\u2022 **Hexadecimal**: Group into 4 bits: $(0011\\;0101)_2 = 35_{16}$."
      ]
    },
    {
      "id": "be-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the construction and working principle of an N-Channel JFET. Plot drain and transfer characteristics and derive transconductance $g_m$.",
      "answer_lines": [
        "**1. Construction**: Consists of an N-type silicon bar with Ohmic contacts at two ends forming Drain and Source. Two heavily doped P-type regions ($P^+$) diffused on opposite sides are connected to form the Gate.",
        "**2. Working**: When $V_{DS}$ is applied (positive to drain), electrons flow from source to drain. Applying reverse bias $V_{GS}$ widens depletion layers into the channel, constricting the channel width and reducing current.",
        "**3. Characteristics**:",
        "\u2022 **Drain Characteristics ($I_D$ vs $V_{DS}$)**: Exhibits Ohmic region ($V_{DS} < V_P - V_{GS}$), Saturation / Pinch-off region ($V_{DS} \\ge V_P - V_{GS}$ where current saturates at constant level), and Breakdown region.",
        "\u2022 **Transfer Characteristics ($I_D$ vs $V_{GS}$)**: Governed by Shockley's equation $I_D = I_{DSS}(1 - V_{GS}/V_P)^2$.",
        "**4. Transconductance Derivation**:",
        "$$g_m = \\frac{dI_D}{dV_{GS}} = \\frac{d}{dV_{GS}}\\left[ I_{DSS} \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2 \\right] = -\\frac{2I_{DSS}}{V_P}\\left(1 - \\frac{V_{GS}}{V_P}\\right) = g_{m0}\\left(1 - \\frac{V_{GS}}{V_P}\\right)$$",
        "Where $g_{m0} = -\\frac{2I_{DSS}}{V_P}$ is the maximum transconductance at $V_{GS} = 0$."
      ]
    },
    {
      "id": "be-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Draw the circuit diagram of an RC Phase Shift Oscillator using an Op-Amp. Derive the frequency of oscillation and the minimum gain requirement.",
      "answer_lines": [
        "**1. Circuit Design**: An inverting Op-Amp provides $180^\\circ$ phase shift. A three-stage cascaded RC ladder feedback network provides the additional $180^\\circ$ phase shift ($60^\\circ$ per stage) at frequency $f_0$, satisfying Barkhausen's criterion.",
        "**2. Transfer Function Analysis**: Applying nodal analysis to the 3-mesh RC ladder network yields feedback attenuation factor $\\beta$:",
        "$$\\beta = \\frac{V_f}{V_o} = \\frac{1}{1 - 5\\alpha^2 + j(6\\alpha - \\alpha^3)} \\quad \\text{where } \\alpha = \\frac{1}{\\omega R C}$$",
        "**3. Frequency of Oscillation**: For zero imaginary phase shift, the imaginary denominator must vanish:",
        "$$6\\alpha - \\alpha^3 = 0 \\implies \\alpha^2 = 6 \\implies \\frac{1}{\\omega^2 R^2 C^2} = 6 \\implies \\omega = \\frac{1}{R C \\sqrt{6}}$$",
        "$$f_0 = \\frac{1}{2\\pi R C \\sqrt{6}}$$",
        "**4. Gain Requirement**: At resonance, $\\beta = \\frac{1}{1 - 5(6)} = -\\frac{1}{29}$. To satisfy $|A_v \\beta| = 1$:",
        "$$|A_v| = \\left|-\\frac{R_f}{R_1}\\right| = 29 \\implies R_f \\ge 29 R_1$$"
      ]
    },
    {
      "id": "be-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Op-Amp Integrator and Differentiator circuits. Derive the output voltage expressions and state practical circuit improvements.",
      "answer_lines": [
        "**1. Op-Amp Integrator**:",
        "\u2022 Circuit has input resistor $R$ and feedback capacitor $C$. Virtual ground at inverting input gives $V_- = 0$.",
        "\u2022 Current through resistor: $I = \\frac{V_{in}}{R}$. Current through capacitor: $I = -C \\frac{dV_o}{dt}$.",
        "\u2022 Equating currents gives output voltage: $V_o(t) = -\\frac{1}{RC}\\int_0^t V_{in}(t) dt + V_o(0)$.",
        "\u2022 **Practical Improvement**: Shunt resistor $R_f$ placed across $C$ to limit DC gain ($A_{dc} = R_f/R$) and prevent saturation due to offset drift.",
        "**2. Op-Amp Differentiator**:",
        "\u2022 Circuit has input capacitor $C$ and feedback resistor $R$.",
        "\u2022 Current through capacitor: $I = C \\frac{dV_{in}}{dt}$. Current through resistor: $I = -\\frac{V_o}{R}$.",
        "\u2022 Equating currents gives: $V_o(t) = -RC \\frac{dV_{in}}{dt}$.",
        "\u2022 **Practical Improvement**: High frequencies amplify input noise. Placing series resistor $R_s$ with $C$ and capacitor $C_f$ in parallel with $R$ ensures stability and limits high-frequency bandwidth."
      ]
    },
    {
      "id": "be-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the frequency response of a Common Emitter (CE) BJT amplifier. Discuss the low-frequency and high-frequency roll-offs and define bandwidth.",
      "answer_lines": [
        "**1. Frequency Response Curve**: A plot of voltage gain in decibels ($20\\log_{10} A_v$) versus log frequency. Divided into three regions: Low-Frequency, Mid-Frequency (constant gain $A_{mid}$), and High-Frequency.",
        "**2. Low-Frequency Roll-off**: At low frequencies, reactances of coupling capacitors ($C_1, C_2$) and emitter bypass capacitor ($C_E$) increase ($X_C = \\frac{1}{2\\pi f C}$). This creates voltage division and reduces voltage gain at $-20\\text{ dB/decade}$. Lower cutoff frequency $f_L$ is the frequency where gain falls to $\\frac{A_{mid}}{\\sqrt{2}}$ ($3\\text{ dB}$ below peak).",
        "**3. High-Frequency Roll-off**: At high frequencies, internal parasitic junction capacitances (base-emitter $C_{\\pi}$ and collector-base $C_\\mu$) offer low impedance, shunting signal to ground. Collector-base capacitance is magnified by Miller Effect ($C_M = C_\\mu(1 + A_v)$), setting upper cutoff frequency $f_H$.",
        "**4. Bandwidth ($BW$)**: The operational frequency span: $BW = f_H - f_L \\approx f_H$ (since $f_H \\gg f_L$)."
      ]
    },
    {
      "id": "be-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Demonstrate that NAND is a Universal Gate by implementing NOT, AND, OR, XOR, and XNOR logic gates exclusively using 2-input NAND gates.",
      "answer_lines": [
        "**1. Universal Gate Definition**: A logic gate capable of synthesizing any arbitrary Boolean function without requiring any other gate type.",
        "**2. Implementations using 2-input NAND gates**:",
        "\u2022 **NOT Gate (1 gate)**: Tie both inputs together: $\\overline{A \\cdot A} = \\overline{A}$.",
        "\u2022 **AND Gate (2 gates)**: Pass $A, B$ into NAND, then invert output through a NAND inverter: $\\overline{\\overline{A \\cdot B}} = A \\cdot B$.",
        "\u2022 **OR Gate (3 gates)**: Invert $A$ and $B$ individually using two NANDs, then feed outputs into a third NAND: $\\overline{\\overline{A} \\cdot \\overline{B}} = \\overline{\\overline{A}} + \\overline{\\overline{B}} = A + B$ (by De Morgan's Law).",
        "\u2022 **XOR Gate (4 gates)**: Output of first NAND $N_1 = \\overline{AB}$. Feed $N_1$ with $A$ into $N_2 = \\overline{A \\cdot \\overline{AB}}$, and $N_1$ with $B$ into $N_3 = \\overline{B \\cdot \\overline{AB}}$. Final NAND $N_4 = \\overline{N_2 \\cdot N_3} = A\\overline{B} + \\overline{A}B = A \\oplus B$.",
        "\u2022 **XNOR Gate (5 gates)**: Take XOR output (4 gates) and invert with a 5th NAND gate: $\\overline{A \\oplus B} = AB + \\overline{A}\\overline{B}$."
      ]
    }
  ],
  "mechanics_set1": [
    {
      "id": "em-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Lami's Theorem and state the condition for its application.",
      "answer_lines": [
        "**Statement**: If three coplanar, concurrent forces acting on a body keep it in static equilibrium, each force is proportional to the sine of the angle between the other two forces:",
        "$$\\frac{P}{\\sin \\alpha} = \\frac{Q}{\\sin \\beta} = \\frac{R}{\\sin \\gamma}$$",
        "**Condition**: The three forces must be strictly coplanar, concurrent, non-collinear, and in static equilibrium."
      ]
    },
    {
      "id": "em-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define angle of friction $\\phi$ and angle of repose $\\theta$, and state their relationship.",
      "answer_lines": [
        "**Angle of Friction ($\\phi$)**: The angle made by the resultant reaction with the normal to the contact plane when limiting friction occurs ($\\tan \\phi = \\mu$).",
        "**Angle of Repose ($\\theta$)**: The maximum angle of inclination of a rough plane with the horizontal at which a body placed on it remains in equilibrium without slipping.",
        "**Relationship**: Both are mathematically equal: $\\theta = \\phi = \\tan^{-1}(\\mu)$."
      ]
    },
    {
      "id": "em-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Varignon's Theorem of Moments.",
      "answer_lines": [
        "**Theorem**: The algebraic sum of the moments of any number of coplanar forces about any point in their plane is equal to the moment of their resultant force about the same point:",
        "$$\\sum M_O = M_R = R \\cdot d$$"
      ]
    },
    {
      "id": "em-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between Centroid and Center of Gravity.",
      "answer_lines": [
        "**Centroid**: The geometrical center of plane areas or figures (2D lines, surfaces, volumes) where the total area is assumed to be concentrated; independent of mass.",
        "**Center of Gravity (CG)**: The point through which the resultant gravitational force (weight) of a 3D physical body acts in any orientation."
      ]
    },
    {
      "id": "em-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Parallel Axis Theorem for planar area moments of inertia.",
      "answer_lines": [
        "**Statement**: The moment of inertia of a plane area about any axis $AB$ parallel to its centroidal axis $GG$ is given by:",
        "$$I_{AB} = I_G + A d^2$$",
        "Where $I_G$ is centroidal moment of inertia, $A$ is total area, and $d$ is perpendicular distance between the two parallel axes."
      ]
    },
    {
      "id": "em-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "A smooth sphere of weight $W = 1000\\text{ N}$ rests in a V-trough whose sides make angles of $30^\\circ$ and $60^\\circ$ with the horizontal. Calculate the normal reactions $R_A$ and $R_B$ exerted by the inclined surfaces.",
      "answer_lines": [
        "**1. Geometry and Free Body Diagram**:",
        "\u2022 Inclined plane $A$ makes $30^\\circ$ with horizontal; normal reaction $R_A$ makes $90^\\circ - 30^\\circ = 60^\\circ$ with horizontal.",
        "\u2022 Inclined plane $B$ makes $60^\\circ$ with horizontal; normal reaction $R_B$ makes $90^\\circ - 60^\\circ = 30^\\circ$ with horizontal.",
        "\u2022 Weight $W = 1000\\text{ N}$ acts vertically downwards.",
        "\u2022 Angle between plane normals: $\\theta_{AB} = 30^\\circ + 60^\\circ = 90^\\circ$.",
        "**2. Applying Lami's Theorem**:",
        "\u2022 Angle opposite to $W$: $90^\\circ$.",
        "\u2022 Angle opposite to $R_A$: $180^\\circ - 30^\\circ = 150^\\circ$.",
        "\u2022 Angle opposite to $R_B$: $180^\\circ - 60^\\circ = 120^\\circ$.",
        "$$\\frac{R_A}{\\sin 120^\\circ} = \\frac{R_B}{\\sin 150^\\circ} = \\frac{W}{\\sin 90^\\circ}$$",
        "**3. Evaluation**:",
        "$$R_A = 1000 \\cdot \\sin 120^\\circ = 1000 \\cdot \\frac{\\sqrt{3}}{2} = 866.03\\text{ N}$$",
        "$$R_B = 1000 \\cdot \\sin 150^\\circ = 1000 \\cdot 0.5 = 500\\text{ N}$$",
        "**Answers**: $R_A = 866.03\\text{ N}$ and $R_B = 500.00\\text{ N}$."
      ]
    },
    {
      "id": "em-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "A ladder of length $5\\text{ m}$ and weight $300\\text{ N}$ rests against a smooth vertical wall at an angle $\\theta$ to the horizontal. The floor is rough with $\\mu = 0.3$. A person of weight $700\\text{ N}$ climbs $4\\text{ m}$ along the ladder. Determine the minimum inclination angle $\\theta$ for equilibrium.",
      "answer_lines": [
        "**1. Equilibrium Equations**:",
        "\u2022 Smooth vertical wall: reaction $R_W$ is purely horizontal.",
        "\u2022 Rough floor: normal reaction $N_F$ upwards, limiting friction $F_F = \\mu N_F = 0.3 N_F$ towards the wall.",
        "\u2022 Vertical equilibrium: $\\sum F_y = 0 \\implies N_F - 300 - 700 = 0 \\implies N_F = 1000\\text{ N}$.",
        "\u2022 Limiting friction force: $F_F = 0.3 \\times 1000 = 300\\text{ N}$.",
        "\u2022 Horizontal equilibrium: $\\sum F_x = 0 \\implies R_W - F_F = 0 \\implies R_W = 300\\text{ N}$.",
        "**2. Moment Equilibrium about Base $A$**:",
        "$$\\sum M_A = 0$$",
        "$$R_W (5\\sin\\theta) - 300(2.5\\cos\\theta) - 700(4.0\\cos\\theta) = 0$$",
        "$$300(5\\sin\\theta) = 750\\cos\\theta + 2800\\cos\\theta = 3550\\cos\\theta$$",
        "$$1500\\sin\\theta = 3550\\cos\\theta \\implies \\tan\\theta = \\frac{3550}{1500} = 2.3667$$",
        "$$\\theta = \\tan^{-1}(2.3667) \\approx 67.1^\\circ$$",
        "**Conclusion**: The minimum safe angle of inclination with the horizontal is $67.1^\\circ$."
      ]
    },
    {
      "id": "em-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Find the centroid $(\\bar{x}, \\bar{y})$ and the moment of inertia about the centroidal $x$-axis ($I_{xx}$) for an inverted T-section: Flange $120\\text{ mm} \\times 20\\text{ mm}$, Web $20\\text{ mm} \\times 100\\text{ mm}$ standing centrally on the flange.",
      "answer_lines": [
        "**1. Area Calculation**:",
        "\u2022 Flange (1): $b_1 = 120\\text{ mm}, d_1 = 20\\text{ mm} \\implies A_1 = 2400\\text{ mm}^2, y_1 = 10\\text{ mm}$.",
        "\u2022 Web (2): $b_2 = 20\\text{ mm}, d_2 = 100\\text{ mm} \\implies A_2 = 2000\\text{ mm}^2, y_2 = 20 + 50 = 70\\text{ mm}$.",
        "\u2022 Total Area: $A = A_1 + A_2 = 2400 + 2000 = 4400\\text{ mm}^2$.",
        "\u2022 Due to vertical symmetry: $\\bar{x} = 60\\text{ mm}$.",
        "**2. Centroid Height $\\bar{y}$**:",
        "$$\\bar{y} = \\frac{A_1 y_1 + A_2 y_2}{A} = \\frac{2400(10) + 2000(70)}{4400} = \\frac{24000 + 140000}{4400} = \\frac{164000}{4400} = 37.27\\text{ mm}$$",
        "**3. Moment of Inertia $I_{xx}$**:",
        "\u2022 Flange: $I_{G1} = \\frac{120 \\times 20^3}{12} = 80000\\text{ mm}^4$. $h_1 = |10 - 37.27| = 27.27\\text{ mm}$.",
        "$$I_{x1} = 80000 + 2400(27.27)^2 = 80000 + 1784767 = 1864767\\text{ mm}^4$$",
        "\u2022 Web: $I_{G2} = \\frac{20 \\times 100^3}{12} = 1666667\\text{ mm}^4$. $h_2 = |70 - 37.27| = 32.73\\text{ mm}$.",
        "$$I_{x2} = 1666667 + 2000(32.73)^2 = 1666667 + 2142506 = 3809173\\text{ mm}^4$$",
        "\u2022 Total: $I_{xx} = I_{x1} + I_{x2} = 1864767 + 3809173 = 5.674 \\times 10^6\\text{ mm}^4$."
      ]
    },
    {
      "id": "em-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Determine the forces in all members of a plane triangular truss loaded with a vertical point load of $50\\text{ kN}$ at the apex using the Method of Joints.",
      "answer_lines": [
        "**1. Structural Details**: Triangle $ABC$ with base span $AB = 6\\text{ m}$ (supports $A$ pinned, $B$ roller) and apex $C$ at height $h = 4\\text{ m}$ symmetrically placed above midspan. A downward load of $50\\text{ kN}$ acts at $C$.",
        "\u2022 Member lengths: $AC = BC = \\sqrt{3^2 + 4^2} = 5\\text{ m}$.",
        "\u2022 Base angle $\\theta = \\tan^{-1}(4/3) \\implies \\cos\\theta = 0.6, \\sin\\theta = 0.8$.",
        "**2. Support Reactions**: By symmetry, $R_{Ay} = R_{By} = 25\\text{ kN}, R_{Ax} = 0$.",
        "**3. Joint $A$ Analysis**:",
        "\u2022 $\\sum F_y = 0 \\implies R_{Ay} + F_{AC}\\sin\\theta = 0 \\implies 25 + F_{AC}(0.8) = 0 \\implies F_{AC} = -31.25\\text{ kN}$ (Compression).",
        "\u2022 $\\sum F_x = 0 \\implies F_{AB} + F_{AC}\\cos\\theta = 0 \\implies F_{AB} + (-31.25)(0.6) = 0 \\implies F_{AB} = +18.75\\text{ kN}$ (Tension).",
        "**4. Joint $B$ Analysis**:",
        "\u2022 By symmetry: $F_{BC} = -31.25\\text{ kN}$ (Compression) and $F_{AB} = +18.75\\text{ kN}$ (Tension).",
        "**Summary**: $F_{AC} = 31.25\\text{ kN (C)}, F_{BC} = 31.25\\text{ kN (C)}, F_{AB} = 18.75\\text{ kN (T)}$."
      ]
    },
    {
      "id": "em-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Two masses $m_1 = 10\\text{ kg}$ and $m_2 = 15\\text{ kg}$ are connected by a light string over a frictionless pulley. $m_1$ is on a rough table ($\\mu_k = 0.2$) and $m_2$ hangs vertically. Using D'Alembert's Principle, find acceleration $a$ and tension $T$.",
      "answer_lines": [
        "**1. Dynamic Equilibrium using D'Alembert's Principle**:",
        "Add reverse effective inertia forces ($m a$) to free bodies.",
        "**2. Analysis of Hanging Mass $m_2$**:",
        "\u2022 Forces: Downward weight $m_2 g$, upward tension $T$, upward inertia force $m_2 a$.",
        "$$m_2 g - T - m_2 a = 0 \\implies T = m_2(g - a) = 15(9.81 - a)$$",
        "**3. Analysis of Table Mass $m_1$**:",
        "\u2022 Vertical equilibrium: $N = m_1 g = 10(9.81) = 98.1\\text{ N}$.",
        "\u2022 Friction force: $F_k = \\mu_k N = 0.2 \\times 98.1 = 19.62\\text{ N}$.",
        "\u2022 Horizontal equilibrium with inertia force $m_1 a$ opposite to motion:",
        "$$T - F_k - m_1 a = 0 \\implies T = F_k + m_1 a = 19.62 + 10a$$",
        "**4. Equating Tension Expressions**:",
        "$$15(9.81 - a) = 19.62 + 10a$$",
        "$$147.15 - 15a = 19.62 + 10a \\implies 25a = 127.53$$",
        "$$a = \\frac{127.53}{25} = 5.10\\text{ m/s}^2$$",
        "**5. String Tension**:",
        "$$T = 19.62 + 10(5.10) = 70.62\\text{ N}$$",
        "**Results**: Acceleration $a = 5.10\\text{ m/s}^2$ and Tension $T = 70.62\\text{ N}$."
      ]
    }
  ],
  "mechanics_set2": [
    {
      "id": "em-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Coefficient of Restitution $e$ and write its values for perfectly elastic and plastic collisions.",
      "answer_lines": [
        "**Definition**: The ratio of the relative velocity of separation to the relative velocity of approach along the common normal: $e = \\frac{v_2 - v_1}{u_1 - u_2}$.",
        "\u2022 For perfectly elastic collision: $e = 1$.",
        "\u2022 For perfectly plastic / inelastic collision: $e = 0$."
      ]
    },
    {
      "id": "em-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the conditions for identifying zero-force members in a truss by inspection.",
      "answer_lines": [
        "1. If two non-collinear members meet at an unloaded joint, both are zero-force members.",
        "2. If three members meet at an unloaded joint where two are collinear, the third non-collinear member is a zero-force member."
      ]
    },
    {
      "id": "em-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Radius of Gyration $k$ of a plane area.",
      "answer_lines": [
        "**Definition**: The distance from the reference axis at which the entire area could be concentrated into a strip without altering its moment of inertia: $k = \\sqrt{\\frac{I}{A}}$, so $I = A k^2$."
      ]
    },
    {
      "id": "em-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Principle of Virtual Work for rigid bodies.",
      "answer_lines": [
        "**Principle**: If a system of rigid bodies in static equilibrium is subjected to arbitrary consistent virtual displacements, the total virtual work done by all active forces is zero: $\\delta U = \\sum \\vec{F}_i \\cdot \\delta \\vec{r}_i = 0$."
      ]
    },
    {
      "id": "em-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Newton's Second Law of Motion in vector differential form.",
      "answer_lines": [
        "$$\\sum \\vec{F} = \\frac{d\\vec{p}}{dt} = \\frac{d(m\\vec{v})}{dt} = m\\vec{a} \\quad (\\text{for constant mass } m)$$"
      ]
    },
    {
      "id": "em-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "A simply supported beam of span $L = 6\\text{ m}$ carries a UDL of $10\\text{ kN/m}$ on the left half ($3\\text{ m}$) and a concentrated load of $30\\text{ kN}$ at $4.5\\text{ m}$ from left support. Determine support reactions and calculate maximum bending moment.",
      "answer_lines": [
        "**1. Support Reactions**:",
        "\u2022 Total UDL load: $W_{UDL} = 10\\text{ kN/m} \\times 3\\text{ m} = 30\\text{ kN}$ acting at $1.5\\text{ m}$ from $A$.",
        "\u2022 Concentrated load: $30\\text{ kN}$ at $4.5\\text{ m}$ from $A$.",
        "\u2022 Taking moments about $A$: $\\sum M_A = 0$:",
        "$$R_B(6) - 30(1.5) - 30(4.5) = 0 \\implies 6 R_B = 45 + 135 = 180 \\implies R_B = 30\\text{ kN}$$",
        "\u2022 Vertical equilibrium: $\\sum F_y = 0 \\implies R_A + R_B = 60 \\implies R_A = 30\\text{ kN}$.",
        "**2. Maximum Bending Moment**:",
        "\u2022 Shear Force at $x$ ($0 \\le x \\le 3$): $V(x) = R_A - 10x = 30 - 10x$.",
        "\u2022 Point of zero shear: $30 - 10x = 0 \\implies x = 3\\text{ m}$.",
        "\u2022 Bending moment at $x = 3\\text{ m}$:",
        "$$M_{max} = R_A(3) - 10(3)(1.5) = 30(3) - 45 = 90 - 45 = 45\\text{ kN}\\cdot\\text{m}$$",
        "**Results**: $R_A = 30\\text{ kN}, R_B = 30\\text{ kN}, M_{max} = 45\\text{ kN}\\cdot\\text{m}$ at midspan."
      ]
    },
    {
      "id": "em-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the Method of Sections for truss analysis. Describe when it is superior to the Method of Joints and state the maximum number of unknown members that can be cut in a single section.",
      "answer_lines": [
        "**1. Operating Principle**: An imaginary cutting plane passes completely through the truss, dividing it into two independent portions. The equilibrium of either portion is considered under the external forces and the internal forces in the exposed cut members.",
        "**2. Governing Equations**: For planar trusses, three independent static equilibrium equations are available: $\\sum F_x = 0, \\sum F_y = 0, \\sum M_O = 0$. Hence, a section can cut at most **three** non-concurrent, non-parallel unknown members.",
        "**3. Comparison with Method of Joints**:",
        "\u2022 In Method of Joints, calculating forces in central members of large trusses requires solving sequentially joint by joint from support inwards.",
        "\u2022 Method of Sections enables calculating the force in any internal member directly in 1-2 steps using moment equilibrium about the intersection of the other two cut members."
      ]
    },
    {
      "id": "em-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "A body of mass $m = 50\\text{ kg}$ rests on an incline of $\\theta = 30^\\circ$ with $\\mu_s = 0.40$. Find the minimum force $P$ acting parallel to the incline to: (i) prevent it from slipping down, (ii) move it up the incline.",
      "answer_lines": [
        "**1. Normal Reaction**: $N = m g \\cos 30^\\circ = 50(9.81)(0.866) = 424.79\\text{ N}$.",
        "**2. Limiting Friction**: $F_s = \\mu_s N = 0.40 \\times 424.79 = 169.92\\text{ N}$.",
        "**3. Downward Gravity Component**: $W_\\parallel = m g \\sin 30^\\circ = 50(9.81)(0.5) = 245.25\\text{ N}$.",
        "**Case (i): Preventing slip down** (friction acts up the plane):",
        "$$P_1 + F_s = W_\\parallel \\implies P_1 = 245.25 - 169.92 = 75.33\\text{ N}$$",
        "**Case (ii): Moving up the incline** (friction acts down the plane):",
        "$$P_2 = W_\\parallel + F_s = 245.25 + 169.92 = 415.17\\text{ N}$$"
      ]
    },
    {
      "id": "em-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "State the Work-Energy Theorem. An automobile of mass $1000\\text{ kg}$ travelling at $90\\text{ km/h}$ is brought to rest over $50\\text{ m}$. Using the Work-Energy Principle, compute the average braking force and work done.",
      "answer_lines": [
        "**1. Statement**: The net work done by all forces acting on a body equals the change in its kinetic energy: $W_{net} = \\Delta KE = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2$.",
        "**2. Velocity Conversion**: $v_i = 90\\text{ km/h} = 90 \\times \\frac{5}{18} = 25\\text{ m/s}, v_f = 0$.",
        "**3. Change in Kinetic Energy**:",
        "$$\\Delta KE = 0 - \\frac{1}{2}(1000)(25^2) = -312,500\\text{ J} = -312.5\\text{ kJ}$$",
        "**4. Work Done by Braking Force**:",
        "$$W = -F_b \\cdot d = -312,500\\text{ J} \\implies F_b(50) = 312,500 \\implies F_b = 6,250\\text{ N}$$",
        "**Results**: Braking force $F_b = 6.25\\text{ kN}$ and Work done $W = -312.5\\text{ kJ}$."
      ]
    },
    {
      "id": "em-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "A lift of mass $500\\text{ kg}$ carries a passenger of mass $70\\text{ kg}$. Find the tension in the cable when the lift is: (i) accelerating upwards at $2\\text{ m/s}^2$, (ii) accelerating downwards at $2\\text{ m/s}^2$, (iii) moving at constant velocity. ($g = 9.81\\text{ m/s}^2$).",
      "answer_lines": [
        "**Total Mass**: $M = 500 + 70 = 570\\text{ kg}$.",
        "**Case (i): Accelerating upwards ($a = +2\\text{ m/s}^2$)**:",
        "$$T - M g = M a \\implies T = M(g + a) = 570(9.81 + 2) = 570(11.81) = 6731.7\\text{ N}$$",
        "**Case (ii): Accelerating downwards ($a = -2\\text{ m/s}^2$)**:",
        "$$M g - T = M a \\implies T = M(g - a) = 570(9.81 - 2) = 570(7.81) = 4451.7\\text{ N}$$",
        "**Case (iii): Uniform velocity ($a = 0$)**:",
        "$$T = M g = 570 \\times 9.81 = 5591.7\\text{ N}$$"
      ]
    }
  ],
  "workshop_set1": [
    {
      "id": "wp-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State four primary Personal Protective Equipment (PPE) items required in an engineering workshop.",
      "answer_lines": [
        "1. Safety goggles / face shields for eye protection from flying chips and sparks.",
        "2. Steel-toe safety shoes to prevent crush injuries from heavy falling workpieces.",
        "3. Leather apron and welding gloves for thermal and radiation protection.",
        "4. Ear defenders / earplugs for noise attenuation around heavy machining tools."
      ]
    },
    {
      "id": "wp-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define least count and compute it for a Vernier Caliper where $1\\text{ MSD} = 1\\text{ mm}$ and 50 Vernier divisions coincide with 49 Main Scale divisions.",
      "answer_lines": [
        "**Definition**: The smallest measurement that can be measured accurately by an instrument.",
        "**Calculation**: $LC = 1\\text{ MSD} - 1\\text{ VSD} = 1\\text{ mm} - \\frac{49}{50}\\text{ mm} = \\frac{1}{50}\\text{ mm} = 0.02\\text{ mm}$."
      ]
    },
    {
      "id": "wp-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Name four types of files used in fitting based on their cross-sectional shape.",
      "answer_lines": [
        "1. Flat file (general surface filing).",
        "2. Hand file (safe edge for right-angle shoulder filing).",
        "3. Round file (enlarging circular holes).",
        "4. Triangular file (internal angles greater than $60^\\circ$)."
      ]
    },
    {
      "id": "wp-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between soldering and brazing based on filler metal melting point.",
      "answer_lines": [
        "**Soldering**: Operates below $450^\\circ\\text{C}$ using lead-tin alloy filler (soft solder, melting point $\\approx 180-250^\\circ\\text{C}$).",
        "**Brazing**: Operates above $450^\\circ\\text{C}$ (typically $600-850^\\circ\\text{C}$) using copper-zinc alloy (spelter) filler, providing far higher structural strength."
      ]
    },
    {
      "id": "wp-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the purpose of earthing in electrical installations?",
      "answer_lines": [
        "Earthing connects the exposed metallic body of electrical equipment to ground via low resistance conductor, diverting fault current safely to earth and tripping circuit breakers to protect humans from fatal electric shocks."
      ]
    },
    {
      "id": "wp-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Shielded Metal Arc Welding (SMAW). Describe equipment, electrode coating functions, and remedies for common welding defects.",
      "answer_lines": [
        "**1. Process Principle**: An electric arc is struck between a flux-coated consumable electrode and the workpiece. Intense arc heat ($3000-4000^\\circ\\text{C}$) melts base metal and electrode tip, creating a molten weld pool that solidifies into a joint.",
        "**2. Functions of Flux Coating**:",
        "\u2022 Generates gaseous shield ($\text{CO}_2$, $\text{CO}$) preventing molten pool oxidation from ambient air.",
        "\u2022 Produces protective slag covering cooling bead to retard cooling rate and prevent embrittlement.",
        "\u2022 Contains deoxidizers and arc stabilizers (potassium/sodium silicate) to maintain steady arc.",
        "**3. Defects & Remedies**:",
        "\u2022 **Porosity**: Gas entrapped in bead. *Remedy*: Use dry baked electrodes and clean oil/rust off joint.",
        "\u2022 **Undercut**: Groove melted into base metal edge. *Remedy*: Reduce welding current and travel speed.",
        "\u2022 **Slag Inclusion**: Trapped slag between weld passes. *Remedy*: Thoroughly chip and wire-brush slag between passes."
      ]
    },
    {
      "id": "wp-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the tools and sequence of operations for making a square step fitting joint in mild steel flat.",
      "answer_lines": [
        "**1. Essential Fitting Tools**:",
        "\u2022 Marking: Steel rule, try square, scriber, dot punch, ball peen hammer, surface plate, height gauge.",
        "\u2022 Holding & Cutting: Bench vice with soft jaws, hacksaw with high-speed steel (HSS) blade.",
        "\u2022 Finishing: Rough bastard file, smooth flat file, square file.",
        "**2. Step-by-Step Procedure**:",
        "\u2022 Step 1: Check raw stock dimensions and apply chalk/Prussian blue solution for marking.",
        "\u2022 Step 2: File one datum edge flat and check squareness with try square.",
        "\u2022 Step 3: File adjacent edge perpendicular to datum edge ($90^\\circ$).",
        "\u2022 Step 4: Mark step profile ($20\\text{ mm} \\times 20\\text{ mm}$) using height gauge and punch witness marks.",
        "\u2022 Step 5: Saw relief cuts with hacksaw and chisel excess material.",
        "\u2022 Step 6: File step surfaces flat and check dimensions with Vernier Caliper to $\\pm 0.05\\text{ mm}$ tolerance."
      ]
    },
    {
      "id": "wp-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain sheet metal fabrication. Describe common sheet metal operations, tools, and the construction of a rectangular tray.",
      "answer_lines": [
        "**1. Operations**:",
        "\u2022 **Shearing**: Cutting sheets using straight snips or squaring shears.",
        "\u2022 **Blanking & Piercing**: Cutting out outer shape (blanking) or punching interior holes (piercing).",
        "\u2022 **Bending**: Creating flanges or seams using folding machines and stakes (hatchet stake, blowhorn stake).",
        "**2. Construction of Rectangular Tray**:",
        "\u2022 Calculate sheet blank size: $L_{blank} = L_{tray} + 2h + 2w_{hem}$, where $h$ is tray depth and $w_{hem}$ is hem allowance.",
        "\u2022 Mark bend lines and corner relief notches ($45^\\circ$) using scriber.",
        "\u2022 Cut corners using straight and curved snips.",
        "\u2022 Fold single hem edges using mallet over hatchet stake for edge stiffness.",
        "\u2022 Bend four side flanges at $90^\\circ$ and solder/rivet lap joints at corners."
      ]
    },
    {
      "id": "wp-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the construction of a Mortise and Tenon joint in carpentry. Detail timber preparation, marking, cutting, and chiseling.",
      "answer_lines": [
        "**1. Structural Significance**: One of the strongest wood joints, connecting two members at $90^\\circ$ by inserting a projecting peg (tenon) into a corresponding rectangular cavity (mortise).",
        "**2. Sequence of Operations**:",
        "\u2022 Step 1: Plane wood pieces to true dimensions ($50\\text{ mm} \\times 50\\text{ mm}$) using jack plane.",
        "\u2022 Step 2: Set mortise gauge pins to $1/3$ wood thickness ($16.6\\text{ mm}$) and scribe lines along face.",
        "\u2022 Step 3: Cut Tenon cheeks using tenon saw and trim shoulders with fine crosscut saw.",
        "\u2022 Step 4: Bore mortise using auger bit or chop from both sides using mortise chisel and wooden mallet.",
        "\u2022 Step 5: Test fit, pare high spots with firmer chisel, apply wood glue, and clamp."
      ]
    },
    {
      "id": "wp-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Staircase Wiring using two 2-way SPDT switches. Draw circuit schematic and provide the switching truth table.",
      "answer_lines": [
        "**1. Purpose**: Allows controlling a single lamp independently from either the bottom or top of a staircase.",
        "**2. Circuit Architecture**:",
        "\u2022 Two Single-Pole Double-Throw (SPDT) 2-way switches: $S_1$ (bottom) and $S_2$ (top).",
        "\u2022 Phase (Live) wire connects to common terminal of $S_1$.",
        "\u2022 Neutral wire connects directly to lamp neutral terminal.",
        "\u2022 Two traveler wires connect terminal 1 of $S_1$ to terminal 1 of $S_2$, and terminal 2 of $S_1$ to terminal 2 of $S_2$.",
        "\u2022 Lamp live terminal connects to common terminal of $S_2$.",
        "**3. Switching Truth Table**:",
        "\u2022 $S_1$ at Pos 1, $S_2$ at Pos 1 $\\implies$ Circuit Closed $\\implies$ Lamp ON.",
        "\u2022 $S_1$ at Pos 1, $S_2$ at Pos 2 $\\implies$ Circuit Open $\\implies$ Lamp OFF.",
        "\u2022 $S_1$ at Pos 2, $S_2$ at Pos 1 $\\implies$ Circuit Open $\\implies$ Lamp OFF.",
        "\u2022 $S_1$ at Pos 2, $S_2$ at Pos 2 $\\implies$ Circuit Closed $\\implies$ Lamp ON."
      ]
    }
  ],
  "workshop_set2": [
    {
      "id": "wp-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Calculate the least count of an Outside Micrometer having a spindle screw pitch of $0.5\\text{ mm}$ and 50 circular thimble divisions.",
      "answer_lines": [
        "$$LC = \\frac{\\text{Pitch of Spindle Screw}}{\\text{Total Number of Thimble Divisions}} = \\frac{0.5\\text{ mm}}{50} = 0.01\\text{ mm}$$"
      ]
    },
    {
      "id": "wp-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Name the three types of Oxy-Acetylene gas flames and their approximate gas ratios.",
      "answer_lines": [
        "1. Neutral Flame ($\\text{O}_2 : \\text{C}_2\\text{H}_2 \\approx 1:1$, temperature $\\approx 3200^\\circ\\text{C}$).",
        "2. Oxidizing Flame ($\\text{O}_2 : \\text{C}_2\\text{H}_2 \\approx 1.5:1$, temperature $\\approx 3500^\\circ\\text{C}$).",
        "3. Carburizing / Reducing Flame ($\\text{O}_2 : \\text{C}_2\\text{H}_2 \\approx 0.9:1$, temperature $\\approx 3000^\\circ\\text{C}$)."
      ]
    },
    {
      "id": "wp-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the standard cylinder color codes for Oxygen and Dissolved Acetylene in gas welding.",
      "answer_lines": [
        "\u2022 **Oxygen Cylinder**: Black body with right-hand threaded valve.",
        "\u2022 **Dissolved Acetylene Cylinder**: Maroon / Red body with left-hand threaded valve."
      ]
    },
    {
      "id": "wp-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "List four common lathe operations performed on a cylindrical bar.",
      "answer_lines": [
        "1. Facing (flat surface perpendicular to spindle axis).",
        "2. Plain / Straight turning (reducing diameter uniformly).",
        "3. Taper turning (producing conical surfaces).",
        "4. Knurling (producing diamond or straight textured grip pattern)."
      ]
    },
    {
      "id": "wp-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between MCB and RCCB in electrical safety.",
      "answer_lines": [
        "**MCB (Miniature Circuit Breaker)**: Protects wiring from overcurrent and short circuits using bimetallic strip and magnetic coil.",
        "**RCCB (Residual Current Circuit Breaker)**: Detects earth leakage current (phase-neutral imbalance $>30\\text{ mA}$) to prevent human electrocution."
      ]
    },
    {
      "id": "wp-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the main parts of a Center Lathe and explain the Taper Turning method by swiveling the Compound Rest. Calculate swivel angle $\\alpha$ for a taper with $D = 50\\text{ mm}, d = 30\\text{ mm}$, and $L = 60\\text{ mm}$.",
      "answer_lines": [
        "**1. Principal Lathe Parts**:",
        "\u2022 **Bed**: Rigid cast-iron structure providing guideways.",
        "\u2022 **Headstock**: Houses drive spindle, gears, and chuck to hold workpiece.",
        "\u2022 **Tailstock**: Supports long workpieces via dead/live center and holds drill bits.",
        "\u2022 **Carriage**: Saddle, cross-slide, compound rest, and tool post for cutting tool feed.",
        "**2. Swiveling Compound Rest Method**: The compound rest base is calibrated in degrees and swiveled to half-taper angle $\\alpha$. Feed is given manually via compound rest handwheel.",
        "**3. Taper Angle Calculation**:",
        "$$\\tan \\alpha = \\frac{D - d}{2L} = \\frac{50 - 30}{2 \\times 60} = \\frac{20}{120} = \\frac{1}{6} \\approx 0.1667$$",
        "$$\\alpha = \\tan^{-1}(0.1667) \\approx 9.46^\\circ \\quad (9^\\circ 28')$$",
        "**Answer**: The compound rest must be swiveled by $9.46^\\circ$."
      ]
    },
    {
      "id": "wp-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the Oxy-Acetylene gas welding process. Discuss cylinder storage, pressure regulators, torch construction, and safety precautions.",
      "answer_lines": [
        "**1. Operating Principle**: Combustion of acetylene (fuel) with high-purity oxygen produces a high-temperature flame ($3200^\\circ\\text{C}$) to fuse metal edges with or without a filler rod.",
        "**2. Equipment Setup**:",
        "\u2022 Acetylene cylinder contains porous mass (calcium silicate) saturated with acetone to safely dissolve unstable acetylene gas under pressure.",
        "\u2022 Double-stage pressure regulators reduce cylinder pressure ($15\\text{ bar}$ for acetylene, $150\\text{ bar}$ for oxygen) to working pressure ($0.5\\text{ bar}$ and $2\\text{ bar}$).",
        "\u2022 Mixing torch blends gases and delivers them to nozzle orifice.",
        "**3. Safety Measures**:",
        "\u2022 Flashback arrestors installed on both fuel and oxygen lines to stop flame back-propagation into hoses.",
        "\u2022 Soap water test for hose leak checks (never use open flame). Always keep cylinders upright."
      ]
    },
    {
      "id": "wp-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe Green Sand Casting in a foundry. Explain pattern allowances, core making, and gating system components.",
      "answer_lines": [
        "**1. Sand Mold Preparation**: Molding sand mixture consists of silica sand ($85\\%$), bentonite clay binder ($10\\%$), and moisture ($5\\%$). Mold is prepared in two-part flask: Drag (bottom) and Cope (top).",
        "**2. Gating System Components**:",
        "\u2022 Pouring Basin: Receives molten metal stream smoothly.",
        "\u2022 Sprue: Tapered vertical passage preventing air aspiration.",
        "\u2022 Runner & Ingate: Horizontal channels distributing metal into mold cavity.",
        "\u2022 Riser: Reservoir supplying molten metal to compensate for liquid and solidification shrinkage.",
        "**3. Pattern Allowances**: Shrinkage allowance (pattern oversized to offset contraction), draft allowance ($1-2^\\circ$ taper for clean withdrawal), and machining allowance."
      ]
    },
    {
      "id": "wp-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the construction and reading of a Bevel Protractor and a Dial Test Indicator used in metrology.",
      "answer_lines": [
        "**1. Universal Bevel Protractor**:",
        "\u2022 Used for precision angular measurement with an accuracy of $5' (5\\text{ arc minutes})$.",
        "\u2022 Main scale graduated in degrees ($0-90^\\circ$ in 4 quadrants). Vernier scale divided into 12 parts on each side of zero, where 12 Vernier divisions equal 23 Main scale degrees ($LC = 1/12^\\circ = 5'$).",
        "**2. Dial Test Indicator (DTI)**:",
        "\u2022 Precision comparator detecting tiny linear displacements ($0.01\\text{ mm}$ or $0.001\\text{ mm}$).",
        "\u2022 Rack and pinion mechanism magnifies stylus motion onto a circular pointer dial.",
        "\u2022 Used for checking run-out, parallelism, alignment, and flatness on surface plates."
      ]
    },
    {
      "id": "wp-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain residential single-phase wiring standards. Draw wiring schematic for a fluorescent tube light fixture with choke and starter.",
      "answer_lines": [
        "**1. Standard Wire Color Codes (IS 732)**:",
        "\u2022 Phase / Live ($L$): Red (or Brown).",
        "\u2022 Neutral ($N$): Black (or Blue).",
        "\u2022 Earth ($E$): Green or Green-Yellow stripe.",
        "**2. Tube Light Circuit Operation**:",
        "\u2022 Consists of ballast (magnetic choke), glow starter with bimetallic contacts, and fluorescent glass tube coated with phosphor powder and filled with argon gas + mercury droplets.",
        "\u2022 When switch is turned on, starter conducts momentarily, heating tube filaments to emit electrons.",
        "\u2022 Starter contacts open suddenly, causing choke inductance to generate a high voltage surge ($800-1000\\text{ V}$), ionizing argon gas.",
        "\u2022 Mercury vapor emits UV radiation, which strikes phosphor coating, producing visible white light. Choke acts as current limiter during steady operation."
      ]
    }
  ],
  "python_set1": [
    {
      "id": "py-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between mutable and immutable data types in Python with examples.",
      "answer_lines": [
        "**Mutable Types**: Objects whose internal state or values can be modified in-place after creation without changing identity (`id()`). Examples: `list`, `dict`, `set`.",
        "**Immutable Types**: Objects whose state cannot be altered once created; any modification produces a new object in memory. Examples: `int`, `float`, `str`, `tuple`, `frozenset`."
      ]
    },
    {
      "id": "py-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Explain list comprehension syntax and compare its execution efficiency with a standard `for` loop.",
      "answer_lines": [
        "**Syntax**: `[expression for item in iterable if condition]`.",
        "**Efficiency**: List comprehensions execute at C-level speed inside Python bytecode without the runtime overhead of repeatedly looking up and calling `.append()` method."
      ]
    },
    {
      "id": "py-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the difference between `*args` and `**kwargs` in Python functions?",
      "answer_lines": [
        "**`*args`**: Captures a variable number of positional arguments into a `tuple`.",
        "**`**kwargs`**: Captures a variable number of keyword (named) arguments into a `dict`."
      ]
    },
    {
      "id": "py-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Explain Python's `with` statement and the context manager protocol.",
      "answer_lines": [
        "The `with` statement guarantees deterministic resource cleanup (closing files, releasing locks). It relies on context managers implementing `__enter__()` (allocating resource) and `__exit__()` (handling cleanup and exception suppression)."
      ]
    },
    {
      "id": "py-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between the `is` keyword and the `==` operator in Python.",
      "answer_lines": [
        "**`==` Operator**: Evaluates value equality (calls `__eq__()` to check if values are logically identical).",
        "**`is` Operator**: Evaluates identity equality (checks whether both operands reference the exact same memory address `id(a) == id(b)`)."
      ]
    },
    {
      "id": "py-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
        "\u2022 Generating 1,000,000 numbers as a list requires allocating $\\approx 8\\text{ MB}$ of contiguous memory (`sys.getsizeof([x for x in range(1000000)])`).",
        "\u2022 A generator consumes a constant $O(1)$ memory footprint (typically $\\approx 100$ bytes for generator object frame), generating values in streaming fashion."
      ]
    },
    {
      "id": "py-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "py-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "py-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "py-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
  ],
  "python_set2": [
    {
      "id": "py-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Explain Python's Global Interpreter Lock (GIL) and its consequence on CPU-bound multi-threading.",
      "answer_lines": [
        "**GIL**: A mutex lock in CPython ensuring only one native thread executes Python bytecode at any given instant.",
        "**Consequence**: CPU-bound multi-threading does not achieve true parallel execution across multi-core processors (multi-processing with separate memory spaces is required)."
      ]
    },
    {
      "id": "py-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is a Python decorator? Provide a simple syntax example.",
      "answer_lines": [
        "**Definition**: A higher-order function that takes another function as an argument, extends its behavior without modifying source code, and returns a callable.",
        "**Syntax Example**: `@my_decorator` placed directly above `def my_func(): pass` is syntactic sugar for `my_func = my_decorator(my_func)`."
      ]
    },
    {
      "id": "py-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between `.loc` and `.iloc` indexers in Pandas.",
      "answer_lines": [
        "**`.loc[]`**: Label-based indexing (selects rows/columns by explicit index names; includes endpoint in slices: `0:5` includes index `5`).",
        "**`.iloc[]`**: Integer position-based indexing (selects rows/columns by $0$-based integer offsets; excludes endpoint: `0:5` stops at index `4`)."
      ]
    },
    {
      "id": "py-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Explain `map()`, `filter()`, and `reduce()` functional programming primitives in Python.",
      "answer_lines": [
        "\u2022 `map(func, iterable)`: Applies `func` to every element, returning an iterator of transformed items.",
        "\u2022 `filter(func, iterable)`: Filters elements for which boolean predicate `func` evaluates to `True`.",
        "\u2022 `functools.reduce(func, iterable)`: Cumulatively applies binary function to reduce iterable into a single scalar value."
      ]
    },
    {
      "id": "py-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the difference between shallow copy and deep copy in Python's `copy` module?",
      "answer_lines": [
        "**`copy.copy()`**: Constructs a new compound object and inserts references to original objects.",
        "**`copy.deepcopy()`**: Constructs a new compound object and recursively copies all nested objects, eliminating shared references."
      ]
    },
    {
      "id": "py-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "py-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "py-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "py-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Python Memory Management. Describe reference counting, cyclic garbage collection, and the role of the `weakref` module.",
      "answer_lines": [
        "**1. Reference Counting**: Every Python object header contains `ob_refcnt`. Reference count increments on assignment, function passing, or list append; decrements on `del` or scope exit. When count reaches zero, memory deallocates instantly.",
        "**2. Cyclic Garbage Collector**: Reference counting cannot reclaim cyclic references ($A$ points to $B$ and $B$ points to $A$). CPython uses a generational cyclic GC (`gc` module with Gen 0, Gen 1, Gen 2) that detects isolated subgraphs via trial deletion.",
        "**3. Weak References (`weakref`)**:",
        "\u2022 Creates references to objects without increasing `ob_refcnt`.",
        "\u2022 When the target object is collected, weak reference callbacks automatically invalidate, preventing memory leaks in large caches or graph nodes."
      ]
    },
    {
      "id": "py-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
  ],
  "chemical_set1": [
    {
      "id": "cpc-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define mole fraction and average molecular weight of a multi-component gas mixture.",
      "answer_lines": [
        "**Mole Fraction ($y_i$)**: The ratio of the number of moles of component $i$ to the total moles in the mixture: $y_i = \\frac{n_i}{\\sum n_i}$.",
        "**Average Molecular Weight ($M_{avg}$)**: The sum of the products of mole fractions and molecular weights: $M_{avg} = \\sum y_i M_i$."
      ]
    },
    {
      "id": "cpc-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Dalton's Law of Partial Pressures and Amagat's Law of Partial Volumes.",
      "answer_lines": [
        "**Dalton's Law**: The total pressure exerted by an ideal gas mixture equals the sum of the partial pressures: $P = \\sum p_i = \\sum y_i P$.",
        "**Amagat's Law**: The total volume occupied by an ideal gas mixture equals the sum of the pure component volumes at identical $T$ and $P$: $V = \\sum v_i$."
      ]
    },
    {
      "id": "cpc-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Limiting Reactant and Excess Reactant.",
      "answer_lines": [
        "**Limiting Reactant**: The reactant present in the smallest stoichiometric proportion that would be completely consumed first if the reaction went to $100\\%$ completion.",
        "**Excess Reactant**: Any reactant present in quantities greater than required stoichiometrically to react with the limiting reactant."
      ]
    },
    {
      "id": "cpc-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Conversion, Selectivity, and Yield in reactor design.",
      "answer_lines": [
        "\u2022 **Fractional Conversion ($X$)**: $\\frac{\\text{Moles of limiting reactant consumed}}{\\text{Moles of limiting reactant fed}}$.",
        "\u2022 **Selectivity**: $\\frac{\\text{Moles of desired product formed}}{\\text{Moles of undesired by-product formed}}$.",
        "\u2022 **Yield**: $\\frac{\\text{Moles of desired product formed}}{\\text{Moles of limiting reactant fed}}$."
      ]
    },
    {
      "id": "cpc-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Hess's Law of Constant Heat Summation.",
      "answer_lines": [
        "**Statement**: The total enthalpy change for a chemical transformation is strictly independent of the reaction path or number of intermediate steps; it depends solely on the initial reactants and final products: $\\Delta H_{rxn}^\\circ = \\sum \\Delta H_{f,prod}^\\circ - \\sum \\Delta H_{f,react}^\\circ$."
      ]
    },
    {
      "id": "cpc-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "A fuel gas mixture has the molar composition: $\\text{CH}_4 = 70\\%, \\text{C}_2\\text{H}_6 = 20\\%, \\text{N}_2 = 10\\%$. Calculate: (i) Average molecular weight, (ii) Weight percent composition, (iii) Density at $27^\\circ\\text{C}$ and $2\\text{ atm}$. ($R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$).",
      "answer_lines": [
        "**1. Basis**: $100\\text{ mol}$ of fuel gas mixture.",
        "\u2022 $\\text{CH}_4: 70\\text{ mol} \\times 16.04\\text{ g/mol} = 1122.8\\text{ g}$.",
        "\u2022 $\\text{C}_2\\text{H}_6: 20\\text{ mol} \\times 30.07\\text{ g/mol} = 601.4\\text{ g}$.",
        "\u2022 $\\text{N}_2: 10\\text{ mol} \\times 28.01\\text{ g/mol} = 280.1\\text{ g}$.",
        "\u2022 Total mass $= 1122.8 + 601.4 + 280.1 = 2004.3\\text{ g}$.",
        "**2. Average Molecular Weight**:",
        "$$M_{avg} = \\frac{\\text{Total Mass}}{\\text{Total Moles}} = \\frac{2004.3\\text{ g}}{100\\text{ mol}} = 20.043\\text{ g/mol}$$",
        "**3. Weight Percent Composition**:",
        "\u2022 $\\text{wt}\\% \\text{ CH}_4 = \\frac{1122.8}{2004.3} \\times 100 = 56.02\\%$.",
        "\u2022 $\\text{wt}\\% \\text{ C}_2\\text{H}_6 = \\frac{601.4}{2004.3} \\times 100 = 30.01\\%$.",
        "\u2022 $\\text{wt}\\% \\text{ N}_2 = \\frac{280.1}{2004.3} \\times 100 = 13.97\\%$.",
        "**4. Gas Mixture Density**:",
        "$$P = 2\\text{ atm}, \\quad T = 27 + 273.15 = 300.15\\text{ K}$$",
        "$$\\rho = \\frac{P M_{avg}}{R T} = \\frac{2 \\times 20.043}{0.08206 \\times 300.15} = \\frac{40.086}{24.63} = 1.627\\text{ g/L} = 1.627\\text{ kg/m}^3$$"
      ]
    },
    {
      "id": "cpc-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "A distillation column separates $10,000\\text{ kg/h}$ of a mixture containing $40\\text{ wt}\\%$ benzene ($B$) and $60\\text{ wt}\\%$ toluene ($T$). The overhead distillate contains $96\\text{ wt}\\%$ benzene, and bottoms contain $95\\text{ wt}\\%$ toluene. Calculate distillate ($D$) and bottoms ($W$) flow rates and percent recovery of benzene.",
      "answer_lines": [
        "**1. Material Balance Equations**:",
        "\u2022 Total mass balance: $F = D + W \\implies 10000 = D + W$.",
        "\u2022 Benzene balance: $F x_{F,B} = D x_{D,B} + W x_{W,B}$ where $x_{W,B} = 1 - 0.95 = 0.05$.",
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
      "id": "cpc-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Methanol is synthesized via: $\\text{CO} + 2\\text{H}_2 \\to \\text{CH}_3\\text{OH}$. The reactor feed contains $100\\text{ mol CO}$ and $300\\text{ mol H}_2$. If CO conversion is $70\\%$, determine: (i) Limiting reactant, (ii) Percent excess of excess reactant, (iii) Effluent stream molar composition.",
      "answer_lines": [
        "**1. Stoichiometric Ratio**: Required $\\text{H}_2 / \\text{CO} = 2.0$. Fed ratio $= 300 / 100 = 3.0 > 2.0$.",
        "\u2022 **Limiting Reactant**: $\\text{CO}$.",
        "\u2022 **Excess Reactant**: $\\text{H}_2$.",
        "**2. Percent Excess of $\\text{H}_2$**:",
        "\u2022 Theoretical $\\text{H}_2$ required for $100\\text{ mol CO} = 2 \\times 100 = 200\\text{ mol}$.",
        "$$\\% \\text{ Excess} = \\frac{\\text{Fed} - \\text{Theoretical}}{\\text{Theoretical}} \\times 100 = \\frac{300 - 200}{200} \\times 100 = 50.0\\%$$",
        "**3. Reactor Effluent Composition (Conversion $X_{CO} = 0.70$)**:",
        "\u2022 $\\text{CO reacted} = 100 \\times 0.70 = 70\\text{ mol} \\implies \\text{CO remaining} = 100 - 70 = 30\\text{ mol}$.",
        "\u2022 $\\text{H}_2 \\text{ reacted} = 2 \\times 70 = 140\\text{ mol} \\implies \\text{H}_2 \\text{ remaining} = 300 - 140 = 160\\text{ mol}$.",
        "\u2022 $\\text{CH}_3\\text{OH formed} = 70\\text{ mol}$.",
        "\u2022 Total effluent moles $= 30 + 160 + 70 = 260\\text{ mol}$.",
        "\u2022 Mole fractions: $\\text{CO} = \\frac{30}{260} = 11.54\\%, \\quad \\text{H}_2 = \\frac{160}{260} = 61.54\\%, \\quad \\text{CH}_3\\text{OH} = \\frac{70}{260} = 26.92\\%$."
      ]
    },
    {
      "id": "cpc-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "cpc-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
  ],
  "chemical_set2": [
    {
      "id": "cpc-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Recycle stream and Purge stream in chemical flowsheets.",
      "answer_lines": [
        "**Recycle Stream**: Returns unreacted raw materials from downstream separation units back to the reactor inlet to maximize overall conversion and atom efficiency.",
        "**Purge Stream**: Bleeds a small fraction of the recycle stream to prevent the continuous accumulation and buildup of inert impurities in a closed loop."
      ]
    },
    {
      "id": "cpc-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between single-pass conversion and overall conversion in a reactor with recycle.",
      "answer_lines": [
        "**Single-Pass Conversion**: $X_{SP} = \\frac{\\text{Reactant consumed in reactor}}{\\text{Reactant entering reactor (fresh + recycle)}}$.",
        "**Overall Conversion**: $X_{overall} = \\frac{\\text{Reactant consumed across entire process}}{\\text{Reactant in fresh feed}}$."
      ]
    },
    {
      "id": "cpc-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the composition of standard atmospheric air on a molar and dry volume basis.",
      "answer_lines": [
        "\u2022 Nitrogen ($\\text{N}_2$): $79.0\\%$ mole (or volume).",
        "\u2022 Oxygen ($\\text{O}_2$): $21.0\\%$ mole (or volume).",
        "\u2022 Ratio: $\\text{N}_2 / \\text{O}_2 = 79/21 \\approx 3.76$."
      ]
    },
    {
      "id": "cpc-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Kirchhoff's law for the variation of heat of reaction with temperature.",
      "answer_lines": [
        "$$\\Delta H_{rxn}(T_2) = \\Delta H_{rxn}(T_1) + \\int_{T_1}^{T_2} \\Delta C_p dT \\quad \\text{where } \\Delta C_p = \\sum \\nu_i C_{p,i}$$"
      ]
    },
    {
      "id": "cpc-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define dry-bulb temperature and wet-bulb temperature.",
      "answer_lines": [
        "**Dry-Bulb Temperature (DBT)**: The true thermodynamic temperature of moist air measured by a standard thermometer shielded from radiation.",
        "**Wet-Bulb Temperature (WBT)**: The steady-state non-equilibrium temperature attained when a wet cloth-covered thermometer bulb is exposed to an airflow where evaporative cooling balances convective heat transfer."
      ]
    },
    {
      "id": "cpc-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "In a process with recycle, fresh feed contains $100\\text{ mol/h}$ of $A$. Single-pass conversion in the reactor is $20\\%$. Unreacted $A$ is separated and recycled. If overall conversion is $90\\%$, calculate: (i) Reactor feed rate, (ii) Recycle rate, (iii) Product flow rate.",
      "answer_lines": [
        "**1. Overall Process Balance for Reactant $A$**:",
        "\u2022 Fresh feed of $A$: $F = 100\\text{ mol/h}$.",
        "\u2022 Overall conversion: $X_O = 0.90$.",
        "\u2022 Total $A$ reacted across process $= 100 \\times 0.90 = 90\\text{ mol/h}$.",
        "\u2022 Product $B$ formed $= 90\\text{ mol/h}$.",
        "\u2022 $A$ lost in waste/purge $= 100 - 90 = 10\\text{ mol/h}$.",
        "**2. Reactor Balance**:",
        "\u2022 Single-pass conversion $X_{SP} = 0.20$.",
        "\u2022 Amount of $A$ reacted in reactor must equal total $A$ converted in process: $90\\text{ mol/h}$.",
        "$$\\text{Reactant consumed} = F_{reactor} \\times X_{SP} \\implies 90 = F_{reactor} \\times 0.20$$",
        "$$F_{reactor} = \\frac{90}{0.20} = 450\\text{ mol/h}$$",
        "**3. Recycle Flow Rate ($R$)**:",
        "\u2022 At mixing junction before reactor: $F_{reactor} = F + R$:",
        "$$450 = 100 + R \\implies R = 350\\text{ mol/h}$$",
        "\u2022 Recycle ratio: $\\frac{R}{F} = \\frac{350}{100} = 3.5$."
      ]
    },
    {
      "id": "cpc-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Pure methane is burned with $20\\%$ excess air. Complete combustion occurs: $\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O}$. For $100\\text{ mol}$ of methane fed, calculate: (i) Theoretical and actual air supplied, (ii) Orsat analysis (dry basis molar composition) of flue gases.",
      "answer_lines": [
        "**1. Air Requirements**:",
        "\u2022 Stoichiometric $\\text{O}_2$ required: $100 \\times 2 = 200\\text{ mol}$.",
        "\u2022 Excess $\\text{O}_2 = 20\\% \\implies \\text{Actual } \\text{O}_2 = 200 \\times 1.20 = 240\\text{ mol}$.",
        "\u2022 Excess $\\text{O}_2$ unreacted: $240 - 200 = 40\\text{ mol}$.",
        "\u2022 $\\text{N}_2$ accompanying air: $240 \\times \\frac{79}{21} = 902.86\\text{ mol}$.",
        "\u2022 Total air supplied: $240 + 902.86 = 1142.86\\text{ mol}$.",
        "**2. Combustion Products**:",
        "\u2022 $\\text{CO}_2$ produced: $100\\text{ mol}$.",
        "\u2022 $\\text{H}_2\\text{O}$ produced: $200\\text{ mol}$.",
        "\u2022 Unreacted $\\text{O}_2$: $40\\text{ mol}$.",
        "\u2022 Inerts $\\text{N}_2$: $902.86\\text{ mol}$.",
        "**3. Orsat Analysis (Excludes Water)**:",
        "\u2022 Dry flue gas total $= 100 (\\text{CO}_2) + 40 (\\text{O}_2) + 902.86 (\\text{N}_2) = 1042.86\\text{ mol}$.",
        "\u2022 $\\text{CO}_2 = \\frac{100}{1042.86} \\times 100 = 9.59\\%$.",
        "\u2022 $\\text{O}_2 = \\frac{40}{1042.86} \\times 100 = 3.84\\%$.",
        "\u2022 $\\text{N}_2 = \\frac{902.86}{1042.86} \\times 100 = 86.57\\%$."
      ]
    },
    {
      "id": "cpc-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "cpc-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "cpc-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "A crystallization unit produces Glauber's salt ($\\text{Na}_2\\text{SO}_4 \\cdot 10\\text{H}_2\\text{O}$) by cooling $1000\\text{ kg}$ of a $32\\text{ wt}\\%$ sodium sulfate solution from $70^\\circ\\text{C}$ to $20^\\circ\\text{C}$. Solubility at $20^\\circ\\text{C}$ is $19.4\\text{ g } \\text{Na}_2\\text{SO}_4 / 100\\text{ g water}$. Molecular weights: $\\text{Na}_2\\text{SO}_4 = 142.0, \\text{H}_2\\text{O} = 18.0$. Calculate the crystal yield and mother liquor mass.",
      "answer_lines": [
        "**1. Feed Breakdown ($1000\\text{ kg}$)**:",
        "\u2022 Pure $\\text{Na}_2\\text{SO}_4 = 0.32 \\times 1000 = 320\\text{ kg}$.",
        "\u2022 Water $= 1000 - 320 = 680\\text{ kg}$.",
        "**2. Molecular Proportions in Crystal**:",
        "\u2022 MW of $\\text{Na}_2\\text{SO}_4 \\cdot 10\\text{H}_2\\text{O} = 142.0 + 10(18.0) = 322.0\\text{ g/mol}$.",
        "\u2022 Anhydrous fraction in crystals: $x_c = \\frac{142}{322} = 0.4410$.",
        "**3. Mother Liquor ($L$) Composition at $20^\\circ\\text{C}$**:",
        "\u2022 $x_L = \\frac{19.4}{100 + 19.4} = \\frac{19.4}{119.4} = 0.1625$.",
        "**4. Material Balances ($C$ = crystals, $L$ = mother liquor)**:",
        "\u2022 Total: $C + L = 1000 \\implies L = 1000 - C$.",
        "\u2022 Salt balance: $320 = 0.4410 C + 0.1625(1000 - C) = 0.4410 C + 162.5 - 0.1625 C$.",
        "$$320 - 162.5 = 0.2785 C \\implies 157.5 = 0.2785 C$$",
        "$$C = \\frac{157.5}{0.2785} = 565.53\\text{ kg of Glauber's salt crystals}$$",
        "$$L = 1000 - 565.53 = 434.47\\text{ kg of mother liquor}$$"
      ]
    }
  ],
  "biology_set1": [
    {
      "id": "bio-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Compare prokaryotic and eukaryotic cells based on cellular compartmentalization and genetic material organization.",
      "answer_lines": [
        "Prokaryotic Cells: Lack a membrane-bound nucleus and membrane-enclosed organelles. DNA is circular, supercoiled, and located in an open nucleoid region (e.g., bacteria).",
        "Eukaryotic Cells: Contain a true membrane-bound nucleus housing linear chromosomes complexed with histone proteins, along with specialized membrane-bound organelles such as mitochondria and endoplasmic reticulum."
      ]
    },
    {
      "id": "bio-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Central Dogma of Molecular Biology and name its three core stages.",
      "answer_lines": [
        "The Central Dogma describes the directional flow of genetic information inside biological systems: DNA directs its own Replication, DNA is transcribed into messenger RNA (Transcription), and mRNA is translated into functional Polypeptide proteins (Translation)."
      ]
    },
    {
      "id": "bio-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between competitive and non-competitive enzyme inhibition.",
      "answer_lines": [
        "Competitive Inhibition: Inhibitor resembles substrate structurally and competes directly for the active site. Maximum velocity Vmax remains unchanged, but apparent Km increases.",
        "Non-Competitive Inhibition: Inhibitor binds to an allosteric site distinct from the active site, inducing a conformational change. Km remains unchanged, but Vmax decreases."
      ]
    },
    {
      "id": "bio-s1-q4",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the biochemical role of Adenosine Triphosphate (ATP) in living cells?",
      "answer_lines": [
        "ATP functions as the universal chemical energy currency of the cell. Hydrolysis of its high-energy phosphoanhydride bonds to ADP and inorganic phosphate releases free energy that couples to endergonic biosynthetic reactions, active transport pumps, and mechanical work."
      ]
    },
    {
      "id": "bio-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define a biosensor and state its two primary functional elements.",
      "answer_lines": [
        "A biosensor is an analytical device that combines a biological recognition element (enzymes, antibodies, aptamers, or whole cells) with a physical transducer (electrochemical, optical, or piezoelectric) to convert a biochemical reaction into a measurable electrical signal."
      ]
    },
    {
      "id": "bio-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "bio-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the biochemical pathway of Cellular Respiration. Detail Glycolysis, the Citric Acid Cycle, and the Electron Transport Chain with oxidative phosphorylation.",
      "answer_lines": [
        "1. Glycolysis: Takes place in the cytoplasm. One molecule of 6-carbon glucose is enzymatically converted through ten steps into two molecules of 3-carbon pyruvate, yielding a net gain of 2 ATP (via substrate-level phosphorylation) and 2 NADH.",
        "2. Pyruvate Oxidation and Citric Acid (Krebs) Cycle: In the mitochondrial matrix, pyruvate is decarboxylated by pyruvate dehydrogenase to form Acetyl-CoA, which enters the Krebs cycle. For each glucose molecule (two acetyl-CoA), the cycle yields 2 ATP, 6 NADH, 2 FADH2, and releases 4 CO2.",
        "3. Electron Transport Chain (ETC): Located on the inner mitochondrial cristae. High-energy electrons from NADH and FADH2 are transferred sequentially through protein Complexes I, II, III, and IV to molecular oxygen (the terminal electron acceptor), which is reduced to water.",
        "4. Chemiosmosis: Electron transfer pumps protons from the matrix into the intermembrane space, creating an electrochemical proton gradient. Protons diffuse back through ATP Synthase (rotary motor enzyme), phosphorylating ADP to generate approximately 30 to 32 ATP per glucose molecule."
      ]
    },
    {
      "id": "bio-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe DNA replication. Explain the functions of helicase, primase, DNA polymerase, and ligase, and detail leading versus lagging strand synthesis.",
      "answer_lines": [
        "1. Replication Origin and Unwinding: DNA Helicase unwinds the double helix at the replication fork, while Single-Strand DNA-Binding Proteins (SSBs) stabilize single strands, and Topoisomerase relieves torsional supercoiling strain.",
        "2. RNA Primer Synthesis: DNA polymerases cannot synthesize strands de novo. Primase synthesizes a short RNA primer providing a free 3-prime hydroxyl group for elongation.",
        "3. Leading vs. Lagging Strand Synthesis: Because DNA polymerase synthesizes exclusively in the 5-prime to 3-prime direction:",
        "\u2022 Leading Strand: Synthesized continuously toward the progressing replication fork using a single initial RNA primer.",
        "\u2022 Lagging Strand: Synthesized discontinuously away from the replication fork as short fragments known as Okazaki fragments, each requiring an independent RNA primer.",
        "4. Primer Removal and Ligation: DNA Polymerase I removes RNA primers via 5-prime to 3-prime exonuclease activity and fills gaps with deoxynucleotides. DNA Ligase catalyzes phosphodiester bond formation between adjacent fragments to complete an intact daughter strand."
      ]
    },
    {
      "id": "bio-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the architecture, sensing mechanisms, and engineering applications of Biosensors. Illustrate with the electrochemical glucose biosensor.",
      "answer_lines": [
        "1. Architecture: A biosensor integrates a biologically sensitive element immobilized on a physicochemical transducer connected to signal processing electronics and an output display.",
        "2. Recognition Elements: Include catalytic enzymes, affinity antibodies, nucleic acid aptamers, or live microbial cells.",
        "3. Electrochemical Glucose Biosensor Case Study:",
        "\u2022 Biocatalyst: Glucose Oxidase (GOx) immobilized on an electrode surface catalyzes the oxidation of glucose to gluconic acid and hydrogen peroxide using oxygen.",
        "\u2022 Transduction: Hydrogen peroxide is electrochemically oxidized at a platinum working electrode held at a positive potential, liberating electrons.",
        "\u2022 Signal: The resulting electric current is directly proportional to glucose concentration in the blood sample, providing rapid quantification in point-of-care finger-stick meters and continuous subcutaneous monitoring patches."
      ]
    },
    {
      "id": "bio-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Bio-inspired Engineering (Biomimicry). Provide case studies of the Lotus Effect, Shark Skin riblets, and the Kingfisher beak design in high-speed rail.",
      "answer_lines": [
        "1. Concept of Biomimicry: The conscious engineering emulation of nature's biological forms, materials, processes, and evolutionary strategies to develop sustainable technologies.",
        "2. The Lotus Leaf Effect (Superhydrophobicity): The leaves of Nelumbo nucifera exhibit extreme water repellency with contact angles greater than 150 degrees. Microscopic epidermal papillae covered in epicuticular hydrophobic wax crystals prevent droplet wetting; rolling water droplets carry away dirt. Engineers have replicated this micro-nano surface hierarchy in self-cleaning exterior facade paints and anti-fouling solar panel coatings.",
        "3. Shark Skin Riblets (Drag Reduction): Fast-swimming sharks possess placoid dermal scales with longitudinal micro-grooves (riblets). These riblets break up turbulent stream vortices along the boundary layer, reducing skin friction drag by up to 8 percent. Emulated in aerodynamic aircraft skins, competitive swimsuits, and wind turbine blades.",
        "4. Kingfisher Beak (Aerodynamic Acoustics): The nose cone of Japan's 500 Series Shinkansen bullet train was modeled after the slender, streamlined beak of the kingfisher bird, which dives silently into water. The biomimetic nose eliminated tunnel micro-pressure wave sonic booms, reduced aerodynamic drag by 30 percent, and cut power consumption by 15 percent."
      ]
    }
  ],
  "biology_set2": [
    {
      "id": "bio-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Mendel's Law of Segregation and Law of Independent Assortment.",
      "answer_lines": [
        "Law of Segregation: The two alleles for a heritable trait segregate during gamete formation so that each gamete carries only one allele for each gene.",
        "Law of Independent Assortment: Alleles of two or more different genes assort independently of one another into gametes during meiosis, provided they reside on non-homologous chromosomes."
      ]
    },
    {
      "id": "bio-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is CRISPR-Cas9 and how does it perform targeted genetic modification?",
      "answer_lines": [
        "CRISPR-Cas9 is a bacterial adaptive immune system repurposed for genome engineering. A single guide RNA (sgRNA) directs the Cas9 endonuclease to a complementary target DNA locus adjacent to a PAM sequence, where Cas9 introduces a site-specific double-strand break for gene knockout or gene insertion."
      ]
    },
    {
      "id": "bio-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between aerobic respiration and anaerobic fermentation.",
      "answer_lines": [
        "Aerobic Respiration: Employs molecular oxygen as the final electron acceptor, oxidizing glucose completely to carbon dioxide and water with high ATP yield (30 to 32 ATP per glucose).",
        "Anaerobic Fermentation: Occurs in the absence of oxygen; pyruvate is reduced to lactate or ethanol to regenerate NAD+ for glycolysis, yielding only 2 ATP per glucose."
      ]
    },
    {
      "id": "bio-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is a bioreactor and what are its primary monitored process parameters?",
      "answer_lines": [
        "A bioreactor is an enclosed vessel providing a controlled biochemical environment for cultivating microorganisms or mammalian cells to produce biological products. Primary monitored parameters include temperature, pH, dissolved oxygen (DO), agitation speed, nutrient feed rate, and foam level."
      ]
    },
    {
      "id": "bio-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Explain the three temperature steps in a Polymerase Chain Reaction (PCR) cycle.",
      "answer_lines": [
        "1. Denaturation (94 to 96 degrees Celsius): Thermal separation of double-stranded DNA into single strands.",
        "2. Annealing (50 to 65 degrees Celsius): Primer hybridization to complementary single-strand target sequences.",
        "3. Extension (72 degrees Celsius): Thermostable Taq DNA polymerase synthesizes new complementary DNA strands."
      ]
    },
    {
      "id": "bio-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "bio-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Industrial Bioreactor design and microbial growth kinetics. Describe batch growth phases and aeration-agitation systems for mass transfer.",
      "answer_lines": [
        "1. Microbial Growth Kinetics: In a closed batch culture, cell population follows four distinct phases:",
        "\u2022 Lag Phase: Cells adapt to medium, synthesizing enzymes without immediate cell division.",
        "\u2022 Exponential (Log) Phase: Cells divide at maximum specific growth rate, following first-order kinetics.",
        "\u2022 Stationary Phase: Nutrient depletion and toxic metabolite accumulation cause growth rate to equal death rate.",
        "\u2022 Death Phase: Viable cell count declines exponentially as lysis occurs.",
        "2. Bioreactor Hardware Systems:",
        "\u2022 Vessel Construction: Electropolished 316L stainless steel vessel with steam-in-place (SIP) and clean-in-place (CIP) ports.",
        "\u2022 Agitation: Top-driven Rushton turbine impellers break air bubbles, creating turbulent liquid shear to enhance mass transfer.",
        "\u2022 Sparging: Sterile air sparger bubbles oxygen into culture; oxygen transfer rate is governed by the volumetric oxygen transfer coefficient (kLa).",
        "\u2022 Heat Transfer: Cooling jacket dissipates biological metabolic heat and agitator viscous dissipation."
      ]
    },
    {
      "id": "bio-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
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
      "id": "bio-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe Biological Wastewater Treatment systems. Detail the Activated Sludge Process, trickling filters, and anaerobic digestion for biogas recovery.",
      "answer_lines": [
        "1. Primary vs. Secondary Treatment: Primary treatment mechanically screens grit and settles suspended solids. Secondary biological treatment utilizes diverse microbial consortia to metabolize dissolved and colloidal organic matter (measured as Biochemical Oxygen Demand, BOD).",
        "2. Activated Sludge Process (ASP):",
        "\u2022 Aeration Basin: Wastewater is aerated vigorously with compressed air in the presence of flocculating microorganisms (mixed liquor suspended solids, MLSS). Heterotrophic bacteria oxidize organic carbon to carbon dioxide, water, and new microbial biomass.",
        "\u2022 Secondary Clarifier: Biomass flocs settle out by gravity. A portion of settled sludge is recycled (Return Activated Sludge, RAS) to maintain microbial concentration, while excess sludge is wasted (Waste Activated Sludge, WAS).",
        "3. Trickling Filters: Fixed-bed biological reactors where wastewater is sprayed over crushed rock or structured plastic media covered with an active microbial biofilm (zoogloeal slime).",
        "4. Anaerobic Digestion: Thickened waste sludge is digested in an airtight reactor across four stages (hydrolysis, acidogenesis, acetogenesis, methanogenesis) by obligate anaerobic Archaea, converting sludge into stabilized fertilizer and biogas (65 percent methane, 35 percent carbon dioxide) for renewable energy."
      ]
    },
    {
      "id": "bio-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Tissue Engineering principles and stem cell therapeutics. Describe the tissue engineering triad and scaffold biomaterials.",
      "answer_lines": [
        "1. The Tissue Engineering Triad: Combines three foundational elements:",
        "\u2022 Living Cells: Autologous, allogeneic, or stem cells (induced pluripotent stem cells, iPSCs, or mesenchymal stem cells, MSCs) providing regenerative biological synthesis.",
        "\u2022 Extracellular Matrix Scaffolds: Three-dimensional porous matrices providing mechanical support and spatial cues for cell attachment, migration, and neo-tissue development.",
        "\u2022 Biochemical Signaling Factors: Growth factors and morphogens (e.g., VEGF for angiogenesis, BMP-2 for osteogenesis) and dynamic mechanical bioreactor stimulation promoting cellular differentiation.",
        "2. Scaffold Biomaterial Requirements:",
        "\u2022 Biocompatibility: Non-toxic without eliciting persistent adverse foreign body immune responses.",
        "\u2022 Controlled Biodegradability: Scaffold degrades into non-toxic metabolites at a rate matching native tissue regeneration.",
        "\u2022 High Porosity and Interconnectivity: Enables nutrient diffusion, metabolic waste removal, and vascular ingrowth.",
        "3. Materials and Clinical Applications: Synthetic polymers (polylactic acid PLA, polyglycolic acid PGA) and natural polymers (collagen, gelatin, chitosan) applied clinically in engineered skin substitutes (Apligraf), articular cartilage grafts, and vascular conduits."
      ]
    }
  ]
};

export function getBTechSem2PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase();
  const setSuffix = isSet1 ? "_set1" : "_set2";

  // 1. Engineering Mathematics II
  if (s.includes("mathematics") || s.includes("math")) {
    return sem2PapersData["math" + setSuffix] || null;
  }

  // 2. Object Oriented Programming (Java/C++)
  if (s.includes("object oriented") || s.includes("oop") || s.includes("java")) {
    return sem2PapersData["oop" + setSuffix] || null;
  }

  // 3. Basic Electronics
  if (s.includes("electronics")) {
    return sem2PapersData["electronics" + setSuffix] || null;
  }

  // 4. Engineering Mechanics
  if (s.includes("mechanics")) {
    return sem2PapersData["mechanics" + setSuffix] || null;
  }

  // 5. Workshop Practice
  if (s.includes("workshop")) {
    return sem2PapersData["workshop" + setSuffix] || null;
  }

  // 6. Python Programming
  if (s.includes("python")) {
    return sem2PapersData["python" + setSuffix] || null;
  }

  // 7. Chemical Process Calculations
  if (s.includes("chemical") || s.includes("process")) {
    return sem2PapersData["chemical" + setSuffix] || null;
  }

  // 8. Biology for Engineers
  if (s.includes("biology")) {
    return sem2PapersData["biology" + setSuffix] || null;
  }

  return null;
}
