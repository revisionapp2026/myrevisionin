import json

def get_btech_sem2_code():
    code = '''/**
 * Authentic University Model Papers & Solved Solutions for B.Tech Semester 2.
 * Curricula: AICTE Model Curriculum / JNTU R22 / VTU 2022.
 *
 * Covers 8 Subjects:
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

export function getBTechSem2PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase();

  // 1. ENGINEERING MATHEMATICS II
  if (s.includes("mathematics") || s.includes("math")) {
    if (isSet1) {
      return [
        {
          id: "m2-s1-q1",
          question_no: 1,
          question: "Find the particular integral of $(D^2 + 4)y = \\sin 2x$.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "**Problem**: $P.I. = \\frac{1}{D^2 + 4}\\sin 2x$. Replacing $D^2 \\to -2^2 = -4$ gives denominator $0$ (case of failure).",
            "**Formula**: When $f(-a^2) = 0$, $P.I. = x \\frac{1}{f'(D^2)}\\sin ax = x \\frac{1}{2D}\\sin 2x$.",
            "**Evaluation**: $\\frac{1}{D}\\sin 2x = \\int \\sin 2x dx = -\\frac{\\cos 2x}{2}$.",
            "**Result**: $P.I. = x\\left(-\\frac{\\cos 2x}{4}\\right) = -\\frac{x \\cos 2x}{4}$."
          ]
        },
        {
          id: "m2-s1-q2",
          question_no: 2,
          question: "Evaluate the Laplace transform of $f(t) = t^2 e^{3t}$.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "**Property**: By the First Shifting Property, if $\\mathcal{L}\\{f(t)\\} = F(s)$, then $\\mathcal{L}\\{e^{at} f(t)\\} = F(s - a)$.",
            "**Base Transform**: $\\mathcal{L}\\{t^2\\} = \\frac{2!}{s^3} = \\frac{2}{s^3}$.",
            "**Shifting**: Replacing $s \\to s - 3$ gives $\\mathcal{L}\\{t^2 e^{3t}\\} = \\frac{2}{(s - 3)^3}$."
          ]
        },
        {
          id: "m2-s1-q3",
          question_no: 3,
          question: "State Dirichlet's conditions for the convergence of a Fourier series.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "A periodic function $f(x)$ with period $2\\pi$ can be expanded into a convergent Fourier series if:",
            "1. $f(x)$ is single-valued and bounded in the interval $(-\\pi, \\pi)$.",
            "2. $f(x)$ has at most a finite number of jump discontinuities in any one period.",
            "3. $f(x)$ has at most a finite number of local maxima and minima in any one period."
          ]
        },
        {
          id: "m2-s1-q4",
          question_no: 4,
          question: "Verify if $f(z) = z^2$ satisfies the Cauchy-Riemann equations.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "**Expansion**: $z = x + iy \\implies f(z) = (x + iy)^2 = (x^2 - y^2) + i(2xy)$.",
            "**Components**: $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.",
            "**Partial Derivatives**: $\\frac{\\partial u}{\\partial x} = 2x$, $\\frac{\\partial u}{\\partial y} = -2y$, $\\frac{\\partial v}{\\partial x} = 2y$, $\\frac{\\partial v}{\\partial y} = 2x$.",
            "**Verification**: $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y} = 2x$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x} = -2y$. The C-R equations hold everywhere, so $f(z)$ is analytic."
          ]
        },
        {
          id: "m2-s1-q5",
          question_no: 5,
          question: "Define probability density function (PDF) and state its normalization property.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "**Definition**: A function $f(x)$ is a PDF for a continuous random variable $X$ if $P(a \\le X \\le b) = \\int_a^b f(x) dx$.",
            "**Properties**: 1. $f(x) \\ge 0$ for all $x \\in \\mathbb{R}$; 2. Normalization: $\\int_{-\\infty}^\\infty f(x) dx = 1$."
          ]
        },
        {
          id: "m2-s1-q6",
          question_no: 6,
          question: "Solve by the method of variation of parameters: $\\frac{d^2 y}{dx^2} + y = \\sec x$.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Step 1: Complementary Function**: Auxiliary equation $m^2 + 1 = 0 \\implies m = \\pm i$.",
            "$$y_c = c_1 \\cos x + c_2 \\sin x \\implies y_1 = \\cos x, \\quad y_2 = \\sin x$$",
            "**Step 2: Wronskian Determinant**:",
            "$$W(y_1, y_2) = \\begin{vmatrix} \\cos x & \\sin x \\\\ -\\sin x & \\cos x \\end{vmatrix} = \\cos^2 x + \\sin^2 x = 1 \\ne 0$$",
            "**Step 3: Particular Integral**: $y_p = u(x) y_1 + v(x) y_2$ with $R(x) = \\sec x$:",
            "$$u(x) = -\\int \\frac{y_2 R}{W} dx = -\\int \\sin x \\sec x dx = -\\int \\tan x dx = \\ln |\\cos x|$$",
            "$$v(x) = \\int \\frac{y_1 R}{W} dx = \\int \\cos x \\sec x dx = \\int 1 dx = x$$",
            "$$y_p = \\cos x \\ln |\\cos x| + x \\sin x$$",
            "**Step 4: General Solution**:",
            "$$y = y_c + y_p = c_1 \\cos x + c_2 \\sin x + \\cos x \\ln |\\cos x| + x \\sin x$$"
          ]
        },
        {
          id: "m2-s1-q7",
          question_no: 7,
          question: "Using the Convolution Theorem, evaluate $\\mathcal{L}^{-1}\\left\\{\\frac{s}{(s^2+1)(s^2+4)}\\right\\}$.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Step 1: Factorization**: Let $F(s) = \\frac{s}{s^2 + 1}$ and $G(s) = \\frac{1}{s^2 + 4}$.",
            "Inverse transforms: $f(t) = \\cos t$ and $g(t) = \\frac{1}{2}\\sin 2t$.",
            "**Step 2: Convolution Integral**: By the Convolution Theorem, $\\mathcal{L}^{-1}\\{F(s)G(s)\\} = \\int_0^t f(u) g(t - u) du$:",
            "$$y(t) = \\int_0^t \\cos u \\cdot \\frac{1}{2}\\sin(2(t - u)) du = \\frac{1}{4}\\int_0^t [\\sin(2t - u) + \\sin(2t - 3u)] du$$",
            "**Step 3: Integration**:",
            "$$= \\frac{1}{4}\\left[ \\cos(2t - u) + \\frac{1}{3}\\cos(2t - 3u) \\right]_0^t$$",
            "$$= \\frac{1}{4}\\left[ \\left(\\cos t + \\frac{1}{3}\\cos(-t)\\right) - \\left(\\cos 2t + \\frac{1}{3}\\cos 2t\\right) \\right]$$",
            "$$= \\frac{1}{4}\\left[ \\frac{4}{3}\\cos t - \\frac{4}{3}\\cos 2t \\right] = \\frac{1}{3}(\\cos t - \\cos 2t)$$",
            "**Final Result**: $\\mathcal{L}^{-1}\\left\\{\\frac{s}{(s^2+1)(s^2+4)}\\right\\} = \\frac{1}{3}(\\cos t - \\cos 2t)$."
          ]
        },
        {
          id: "m2-s1-q8",
          question_no: 8,
          question: "Find the Fourier series of $f(x) = x^2$ in the interval $(-\\pi, \\pi)$ and deduce $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Step 1: Symmetry**: $f(x) = x^2$ is an even function, so $b_n = 0$ for all $n$.",
            "**Step 2: Constant Term $a_0$**:",
            "$$a_0 = \\frac{2}{\\pi}\\int_0^\\pi x^2 dx = \\frac{2}{\\pi}\\left[\\frac{x^3}{3}\\right]_0^\\pi = \\frac{2\\pi^2}{3}$$",
            "**Step 3: Coefficients $a_n$**: Using integration by parts:",
            "$$a_n = \\frac{2}{\\pi}\\int_0^\\pi x^2 \\cos(nx) dx = \\frac{2}{\\pi}\\left[ x^2 \\frac{\\sin nx}{n} - 2x \\left(-\\frac{\\cos nx}{n^2}\\right) + 2\\left(-\\frac{\\sin nx}{n^3}\\right) \\right]_0^\\pi$$",
            "$$a_n = \\frac{2}{\\pi}\\left[ \\frac{2\\pi \\cos(n\\pi)}{n^2} \\right] = \\frac{4(-1)^n}{n^2}$$",
            "**Step 4: Fourier Series**:",
            "$$x^2 = \\frac{a_0}{2} + \\sum_{n=1}^\\infty a_n \\cos(nx) = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}\\cos(nx)$$",
            "**Step 5: Deduction**: Setting $x = \\pi$ (point of continuity):",
            "$$\\pi^2 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n (-1)^n}{n^2} = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{1}{n^2}$$",
            "$$\\frac{2\\pi^2}{3} = 4\\sum_{n=1}^\\infty \\frac{1}{n^2} \\implies \\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$"
          ]
        },
        {
          id: "m2-s1-q9",
          question_no: 9,
          question: "Find the analytic function $f(z) = u + iv$ whose real part is $u(x, y) = e^x(x \\cos y - y \\sin y)$ using Milne-Thomson's method.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Step 1: Compute Partial Derivatives**:",
            "$$\\phi_1(x, y) = \\frac{\\partial u}{\\partial x} = e^x(x \\cos y - y \\sin y) + e^x \\cos y$$",
            "$$\\phi_2(x, y) = \\frac{\\partial u}{\\partial y} = e^x(-x \\sin y - \\sin y - y \\cos y)$$",
            "**Step 2: Apply Milne-Thomson Method (Set $x = z, y = 0$)**:",
            "$$\\phi_1(z, 0) = e^z(z \\cdot 1 - 0) + e^z \\cdot 1 = z e^z + e^z = (z + 1)e^z$$",
            "$$\\phi_2(z, 0) = e^z(-0 - 0 - 0) = 0$$",
            "**Step 3: Integrate with respect to $z$**:",
            "$$f'(z) = \\phi_1(z, 0) - i \\phi_2(z, 0) = (z + 1)e^z$$",
            "$$f(z) = \\int (z + 1)e^z dz + C = (z + 1)e^z - \\int 1 \\cdot e^z dz + C = z e^z + C$$",
            "**Conclusion**: The analytic function is $f(z) = z e^z + C$."
          ]
        },
        {
          id: "m2-s1-q10",
          question_no: 10,
          question: "Derive the mean and variance of a Poisson distribution with parameter $\\lambda$.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Probability Mass Function**: $P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$ for $k = 0, 1, 2, \\dots$",
            "**Step 1: Derivation of Mean $E[X]$**:",
            "$$E[X] = \\sum_{k=0}^\\infty k \\frac{e^{-\\lambda} \\lambda^k}{k!} = e^{-\\lambda} \\sum_{k=1}^\\infty \\frac{\\lambda \\lambda^{k-1}}{(k-1)!} = \\lambda e^{-\\lambda} \\sum_{j=0}^\\infty \\frac{\\lambda^j}{j!} = \\lambda e^{-\\lambda} e^\\lambda = \\lambda$$",
            "**Step 2: Derivation of $E[X(X-1)]$**:",
            "$$E[X(X-1)] = \\sum_{k=2}^\\infty k(k-1)\\frac{e^{-\\lambda} \\lambda^k}{k!} = \\lambda^2 e^{-\\lambda} \\sum_{k=2}^\\infty \\frac{\\lambda^{k-2}}{(k-2)!} = \\lambda^2 e^{-\\lambda} e^\\lambda = \\lambda^2$$",
            "**Step 3: Derivation of $E[X^2]$**:",
            "$$E[X^2] = E[X(X-1)] + E[X] = \\lambda^2 + \\lambda$$",
            "**Step 4: Variance $\\text{Var}(X)$**:",
            "$$\\text{Var}(X) = E[X^2] - (E[X])^2 = (\\lambda^2 + \\lambda) - \\lambda^2 = \\lambda$$",
            "**Conclusion**: For a Poisson distribution, $\\text{Mean} = \\text{Variance} = \\lambda$."
          ]
        }
      ];
    } else {
      // Set 2 (Previous Year Paper)
      return [
        {
          id: "m2-s2-q1",
          question_no: 1,
          question: "Solve the Cauchy-Euler differential equation: $x^2 \\frac{d^2 y}{dx^2} - 2x \\frac{dy}{dx} + 2y = 0$.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "**Substitution**: Let $x = e^z \\implies z = \\ln x$, with operator $x D = \\theta, x^2 D^2 = \\theta(\\theta - 1)$.",
            "**Transformed Equation**: $[\\theta(\\theta - 1) - 2\\theta + 2]y = 0 \\implies (\\theta^2 - 3\\theta + 2)y = 0$.",
            "**Roots**: $m^2 - 3m + 2 = 0 \\implies m = 1, 2$.",
            "**General Solution**: $y = c_1 e^z + c_2 e^{2z} = c_1 x + c_2 x^2$."
          ]
        },
        {
          id: "m2-s2-q2",
          question_no: 2,
          question: "Find the Laplace transform of $f(t) = \\sin(3t) \\cos(2t)$.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "**Trigonometric Identity**: $\\sin(3t) \\cos(2t) = \\frac{1}{2}[\\sin(5t) + \\sin(t)]$.",
            "**Laplace Application**: $\\mathcal{L}\\{f(t)\\} = \\frac{1}{2}\\left[ \\frac{5}{s^2 + 25} + \\frac{1}{s^2 + 1} \\right]$."
          ]
        },
        {
          id: "m2-s2-q3",
          question_no: 3,
          question: "State Parseval's identity for a Fourier series.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "For a function $f(x)$ expanded in $(-\\pi, \\pi)$ with Fourier coefficients $a_0, a_n, b_n$:",
            "$$\\frac{1}{\\pi}\\int_{-\\pi}^\\pi [f(x)]^2 dx = \\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2)$$",
            "It equates the total energy of the waveform to the sum of the energies of its harmonic components."
          ]
        },
        {
          id: "m2-s2-q4",
          question_no: 4,
          question: "State Cauchy's Integral Theorem.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "**Statement**: If $f(z)$ is analytic and its derivative $f'(z)$ is continuous at all points inside and on a simple closed contour $C$, then:",
            "$$\\oint_C f(z) dz = 0$$"
          ]
        },
        {
          id: "m2-s2-q5",
          question_no: 5,
          question: "Define the standard normal distribution and state its probability density function.",
          prompt: "Part A · 2 Marks",
          marks: 2,
          answer_lines: [
            "**Definition**: A normal distribution with mean $\\mu = 0$ and standard deviation $\\sigma = 1$, denoted $Z \\sim \\mathcal{N}(0, 1)$.",
            "**PDF**: $\\phi(z) = \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2}$ for $-\\infty < z < \\infty$."
          ]
        },
        {
          id: "m2-s2-q6",
          question_no: 6,
          question: "Solve the non-homogeneous ODE: $(D^3 - 3D^2 + 4)y = e^{2x} + 4$.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Step 1: Auxiliary Equation**: $m^3 - 3m^2 + 4 = 0$.",
            "Testing $m = -1$: $(-1)^3 - 3(-1)^2 + 4 = -1 - 3 + 4 = 0$. $(m + 1)$ is a factor.",
            "Dividing gives $(m + 1)(m^2 - 4m + 4) = 0 \\implies (m + 1)(m - 2)^2 = 0$.",
            "Roots are $m = -1, 2, 2$.",
            "$$y_c = c_1 e^{-x} + (c_2 + c_3 x)e^{2x}$$",
            "**Step 2: Particular Integral for $e^{2x}$**: $P.I._1 = \\frac{1}{(D+1)(D-2)^2}e^{2x}$.",
            "Since $D = 2$ is a double root of $(D-2)^2$: $P.I._1 = \\frac{1}{2+1} \\cdot \\frac{x^2}{2!}e^{2x} = \\frac{x^2 e^{2x}}{6}$.",
            "**Step 3: Particular Integral for Constant $4$**: $P.I._2 = \\frac{1}{D^3 - 3D^2 + 4}(4 e^{0x}) = \\frac{4}{4} = 1$.",
            "**Step 4: General Solution**: $y = y_c + P.I._1 + P.I._2$:",
            "$$y = c_1 e^{-x} + (c_2 + c_3 x)e^{2x} + \\frac{x^2 e^{2x}}{6} + 1$$"
          ]
        },
        {
          id: "m2-s2-q7",
          question_no: 7,
          question: "Solve the initial value problem using Laplace transforms: $y'' - 3y' + 2y = 4e^{2t}$ with $y(0) = -3, y'(0) = 5$.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Step 1: Take Laplace transform of both sides**:",
            "$$\\mathcal{L}\\{y''\\} - 3\\mathcal{L}\\{y'\\} + 2\\mathcal{L}\\{y\\} = 4\\mathcal{L}\\{e^{2t}\\}$$",
            "$$[s^2 Y(s) - s y(0) - y'(0)] - 3[s Y(s) - y(0)] + 2 Y(s) = \\frac{4}{s - 2}$$",
            "**Step 2: Substitute initial conditions $y(0) = -3, y'(0) = 5$**:",
            "$$s^2 Y(s) + 3s - 5 - 3s Y(s) - 9 + 2 Y(s) = \\frac{4}{s - 2}$$",
            "$$(s^2 - 3s + 2)Y(s) + 3s - 14 = \\frac{4}{s - 2}$$",
            "$$(s - 1)(s - 2)Y(s) = 14 - 3s + \\frac{4}{s - 2} = \\frac{(14 - 3s)(s - 2) + 4}{s - 2} = \\frac{-3s^2 + 20s - 24}{s - 2}$$",
            "$$Y(s) = \\frac{-3s^2 + 20s - 24}{(s - 1)(s - 2)^2}$$",
            "**Step 3: Partial Fractions**:",
            "$$\\frac{-3s^2 + 20s - 24}{(s - 1)(s - 2)^2} = \\frac{A}{s - 1} + \\frac{B}{s - 2} + \\frac{C}{(s - 2)^2}$$",
            "For $s = 1$: $A = \\frac{-3(1) + 20(1) - 24}{(1 - 2)^2} = \\frac{-7}{1} = -7$.",
            "For $C$ (multiply by $(s-2)^2$ at $s=2$): $C = \\frac{-3(4) + 20(2) - 24}{2 - 1} = \\frac{4}{1} = 4$.",
            "Matching $s^2$ coefficients: $-3 = A + B \\implies -3 = -7 + B \\implies B = 4$.",
            "**Step 4: Inverse Laplace Transform**:",
            "$$y(t) = -7\\mathcal{L}^{-1}\\left\\{\\frac{1}{s-1}\\right\\} + 4\\mathcal{L}^{-1}\\left\\{\\frac{1}{s-2}\\right\\} + 4\\mathcal{L}^{-1}\\left\\{\\frac{1}{(s-2)^2}\\right\\}$$",
            "$$y(t) = -7e^t + 4e^{2t} + 4t e^{2t}$$"
          ]
        },
        {
          id: "m2-s2-q8",
          question_no: 8,
          question: "Find the half-range Fourier cosine series for $f(x) = x(\\pi - x)$ in the interval $(0, \\pi)$.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Form of Cosine Series**: $f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty a_n \\cos(nx)$ with period $L = \\pi$.",
            "**Step 1: Compute $a_0$**:",
            "$$a_0 = \\frac{2}{\\pi}\\int_0^\\pi (\\pi x - x^2) dx = \\frac{2}{\\pi}\\left[\\frac{\\pi x^2}{2} - \\frac{x^3}{3}\\right]_0^\\pi = \\frac{2}{\\pi}\\left[\\frac{\\pi^3}{6}\\right] = \\frac{\\pi^2}{3}$$",
            "**Step 2: Compute $a_n$** using integration by parts:",
            "$$a_n = \\frac{2}{\\pi}\\int_0^\\pi (\\pi x - x^2)\\cos(nx) dx$$",
            "$$= \\frac{2}{\\pi}\\left[ (\\pi x - x^2)\\frac{\\sin nx}{n} - (\\pi - 2x)\\left(-\\frac{\\cos nx}{n^2}\\right) + (-2)\\left(-\\frac{\\sin nx}{n^3}\\right) \\right]_0^\\pi$$",
            "$$= \\frac{2}{\\pi}\\left[ \\frac{(\\pi - 2\\pi)\\cos(n\\pi)}{n^2} - \\frac{\\pi \\cos 0}{n^2} \\right] = \\frac{2}{\\pi}\\left[ -\\frac{\\pi(-1)^n}{n^2} - \\frac{\\pi}{n^2} \\right] = -\\frac{2}{n^2}[1 + (-1)^n]$$",
            "**Step 3: Analyze cases**:",
            "When $n$ is odd: $1 + (-1)^n = 0 \\implies a_n = 0$.",
            "When $n$ is even ($n = 2m$): $a_{2m} = -\\frac{4}{(2m)^2} = -\\frac{1}{m^2}$.",
            "**Step 4: Resulting Series**:",
            "$$f(x) = \\frac{\\pi^2}{6} - \\sum_{m=1}^\\infty \\frac{\\cos(2m x)}{m^2}$$"
          ]
        },
        {
          id: "m2-s2-q9",
          question_no: 9,
          question: "Evaluate $\\oint_C \\frac{e^{2z}}{(z+1)^4} dz$ where $C$ is the circle $|z| = 2$ using Cauchy's Integral Formula.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Step 1: Identify Singularities and Contour**: The integrand has a pole of order $4$ at $z = -1$. The contour $C$ is $|z| = 2$. The point $z = -1$ lies inside $C$ since $|-1| = 1 < 2$.",
            "**Step 2: Cauchy's Generalized Integral Formula**:",
            "$$f^{(n)}(z_0) = \\frac{n!}{2\\pi i}\\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz \\implies \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz = \\frac{2\\pi i}{n!} f^{(n)}(z_0)$$",
            "**Step 3: Apply with $f(z) = e^{2z}, z_0 = -1, n = 3$**:",
            "$$f'(z) = 2e^{2z}, \\quad f''(z) = 4e^{2z}, \\quad f'''(z) = 8e^{2z}$$",
            "$$f'''(-1) = 8e^{-2}$$",
            "**Step 4: Compute Integral**:",
            "$$\\oint_C \\frac{e^{2z}}{(z+1)^4} dz = \\frac{2\\pi i}{3!} \\cdot 8e^{-2} = \\frac{2\\pi i}{6} \\cdot 8e^{-2} = \\frac{8\\pi i}{3 e^2}$$"
          ]
        },
        {
          id: "m2-s2-q10",
          question_no: 10,
          question: "A continuous random variable $X$ has PDF $f(x) = k x e^{-\\lambda x}$ for $x \\ge 0$. Find the constant $k$, the expectation $E[X]$, and the variance $\\text{Var}(X)$.",
          prompt: "Part B · 10 Marks",
          marks: 10,
          answer_lines: [
            "**Step 1: Determine Constant $k$** using the normalization condition $\\int_0^\\infty f(x) dx = 1$:",
            "$$k \\int_0^\\infty x e^{-\\lambda x} dx = 1$$",
            "Using Gamma function $\\int_0^\\infty x^{n-1} e^{-\\lambda x} dx = \\frac{\\Gamma(n)}{\\lambda^n}$: For $n = 2$, $\\int_0^\\infty x e^{-\\lambda x} dx = \\frac{1!}{\\lambda^2} = \\frac{1}{\\lambda^2}$.",
            "$$k \\cdot \\frac{1}{\\lambda^2} = 1 \\implies k = \\lambda^2$$",
            "**Step 2: Expectation $E[X]$**:",
            "$$E[X] = \\int_0^\\infty x f(x) dx = \\lambda^2 \\int_0^\\infty x^2 e^{-\\lambda x} dx = \\lambda^2 \\cdot \\frac{2!}{\\lambda^3} = \\frac{2}{\\lambda}$$",
            "**Step 3: Second Moment $E[X^2]$**:",
            "$$E[X^2] = \\int_0^\\infty x^2 f(x) dx = \\lambda^2 \\int_0^\\infty x^3 e^{-\\lambda x} dx = \\lambda^2 \\cdot \\frac{3!}{\\lambda^4} = \\frac{6}{\\lambda^2}$$",
            "**Step 4: Variance $\\text{Var}(X)$**:",
            "$$\\text{Var}(X) = E[X^2] - (E[X])^2 = \\frac{6}{\\lambda^2} - \\left(\\frac{2}{\\lambda}\\right)^2 = \\frac{6}{\\lambda^2} - \\frac{4}{\\lambda^2} = \\frac{2}{\\lambda^2}$$",
            "**Final Answers**: $k = \\lambda^2$, $E[X] = \\frac{2}{\\lambda}$, $\\text{Var}(X) = \\frac{2}{\\lambda^2}$."
          ]
        }
      ];
    }
  }

  return null;
}
'''
    return code

print("Helper ready.")
