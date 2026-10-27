import json

papers = {}

def add_paper(key, q_list):
    papers[key] = q_list

# =========================================================================
# 3. DIFFERENTIAL EQUATIONS & GEOMETRY (B.Sc CS, DS-AI, Chemistry)
# =========================================================================
add_paper("diff_eq_set1", [
    {"id": "bsc-de-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the condition for the differential equation $M(x, y) dx + N(x, y) dy = 0$ to be exact.",
     "answer_lines": ["The necessary and sufficient condition for exactness is $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$."]},
    {"id": "bsc-de-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Find the integrating factor of the linear differential equation $\\frac{dy}{dx} + P(x) y = Q(x)$.",
     "answer_lines": ["$$\\text{I.F.} = e^{\\int P(x) dx}$$"]},
    {"id": "bsc-de-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Write the general equation of a plane in intercept form.",
     "answer_lines": ["$$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$ where $a, b, c$ are intercepts made on the coordinate axes."]},
    {"id": "bsc-de-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Find the orthogonal trajectories of the family of parabolas $y^2 = 4ax$.",
     "answer_lines": [
         "Differentiating: $2y y' = 4a = \\frac{y^2}{x} \\implies y' = \\frac{y}{2x}$.",
         "Replace $y' \\to -\\frac{1}{y'}$: $-\\frac{dx}{dy} = \\frac{y}{2x} \\implies 2x dx + y dy = 0$.",
         "Integrating gives orthogonal trajectories: $2x^2 + y^2 = C$ (family of ellipses)."
     ]},
    {"id": "bsc-de-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the equation of a sphere with center $(u, v, w)$ and radius $r$.",
     "answer_lines": ["$$(x - u)^2 + (y - v)^2 + (z - w)^2 = r^2$$"]},
    {"id": "bsc-de-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Solve the second-order differential equation by method of variation of parameters: $\\frac{d^2 y}{dx^2} + y = \\csc x$.",
     "answer_lines": [
         "**1. Complementary Function**: $m^2 + 1 = 0 \\implies y_c = c_1 \\cos x + c_2 \\sin x$. ($y_1 = \\cos x, y_2 = \\sin x$).",
         "**2. Wronskian**: $W = y_1 y_2' - y_2 y_1' = \\cos^2 x + \\sin^2 x = 1$.",
         "**3. Particular Integral**: $y_p = u y_1 + v y_2$ with $R = \\csc x$:",
         "$$u = -\\int \\frac{y_2 R}{W} dx = -\\int \\sin x \\csc x dx = -\\int 1 dx = -x$$",
         "$$v = \\int \\frac{y_1 R}{W} dx = \\int \\cos x \\csc x dx = \\int \\cot x dx = \\ln|\\sin x|$$",
         "$$y_p = -x \\cos x + (\\sin x)\\ln|\\sin x|$$",
         "**General Solution**: $y = c_1 \\cos x + c_2 \\sin x - x \\cos x + (\\sin x)\\ln|\\sin x|$."
     ]},
    {"id": "bsc-de-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Solve the Cauchy-Euler differential equation: $x^2 \\frac{d^2 y}{dx^2} - 2x \\frac{dy}{dx} - 4y = x^2$.",
     "answer_lines": [
         "**1. Transformation**: Let $x = e^z \\implies z = \\ln x$ and $D = \\frac{d}{dz}$.",
         "Equation becomes: $[D(D - 1) - 2D - 4]y = (e^z)^2 \\implies (D^2 - 3D - 4)y = e^{2z}$.",
         "**2. Auxiliary Equation**: $m^2 - 3m - 4 = 0 \\implies (m - 4)(m + 1) = 0 \\implies m = 4, -1$.",
         "$$y_c = c_1 e^{4z} + c_2 e^{-z} = c_1 x^4 + c_2 x^{-1}$$",
         "**3. Particular Integral**:",
         "$$y_p = \\frac{1}{D^2 - 3D - 4}e^{2z} = \\frac{1}{2^2 - 3(2) - 4}e^{2z} = \\frac{e^{2z}}{-6} = -\\frac{x^2}{6}$$",
         "**General Solution**: $y(x) = c_1 x^4 + \\frac{c_2}{x} - \\frac{x^2}{6}$."
     ]},
    {"id": "bsc-de-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Find the shortest distance between the two skew lines: $\\frac{x - 3}{1} = \\frac{y - 5}{-2} = \\frac{z - 7}{1}$ and $\\frac{x + 1}{7} = \\frac{y + 1}{-6} = \\frac{z + 1}{1}$.",
     "answer_lines": [
         "**1. Line 1**: Point $A = (3, 5, 7)$, direction $\\vec{b}_1 = \\hat{i} - 2\\hat{j} + \\hat{k}$.",
         "**2. Line 2**: Point $B = (-1, -1, -1)$, direction $\\vec{b}_2 = 7\\hat{i} - 6\\hat{j} + \\hat{k}$.",
         "**3. Cross Product of Directions**:",
         "$$\\vec{b}_1 \\times \\vec{b}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -2 & 1 \\\\ 7 & -6 & 1 \\end{vmatrix} = \\hat{i}(-2 + 6) - \\hat{j}(1 - 7) + \\hat{k}(-6 + 14) = 4\\hat{i} + 6\\hat{j} + 8\\hat{k}$$",
         "Magnitude: $\\|\\vec{b}_1 \\times \\vec{b}_2\\| = \\sqrt{4^2 + 6^2 + 8^2} = \\sqrt{16 + 36 + 64} = \\sqrt{116} = 2\\sqrt{29}$.",
         "**4. Displacement Vector**: $\\vec{AB} = (-1 - 3)\\hat{i} + (-1 - 5)\\hat{j} + (-1 - 7)\\hat{k} = -4\\hat{i} - 6\\hat{j} - 8\\hat{k}$.",
         "**5. Shortest Distance**:",
         "$$d = \\frac{|\\vec{AB} \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{\\|\\vec{b}_1 \\times \\vec{b}_2\\|} = \\frac{|(-4)(4) + (-6)(6) + (-8)(8)|}{2\\sqrt{29}} = \\frac{|-16 - 36 - 64|}{2\\sqrt{29}} = \\frac{116}{2\\sqrt{29}} = \\frac{116}{10.77} = 2\\sqrt{29}$$",
         "Shortest distance $= 2\\sqrt{29} \\approx 10.77$ units."
     ]},
    {"id": "bsc-de-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Find the equation of the sphere passing through the four points $(0,0,0), (a,0,0), (0,b,0), (0,0,c)$.",
     "answer_lines": [
         "**1. General Sphere Equation**: $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$.",
         "• Passes through $(0,0,0) \\implies d = 0$.",
         "• Passes through $(a,0,0) \\implies a^2 + 2ua = 0 \\implies u = -a/2$.",
         "• Passes through $(0,b,0) \\implies b^2 + 2vb = 0 \\implies v = -b/2$.",
         "• Passes through $(0,0,c) \\implies c^2 + 2wc = 0 \\implies w = -c/2$.",
         "**2. Resulting Equation**:",
         "$$x^2 + y^2 + z^2 - ax - by - cz = 0$$",
         "Center is $(a/2, b/2, c/2)$ and radius is $r = \\frac{1}{2}\\sqrt{a^2 + b^2 + c^2}$."
     ]},
    {"id": "bsc-de-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Solve the total differential equation: $(y + z) dx + (z + x) dy + (x + y) dz = 0$.",
     "answer_lines": [
         "**1. Condition of Integrability**: Check $P(Q_z - R_y) + Q(R_x - P_z) + R(P_y - Q_x) = 0$:",
         "• $P = y + z, Q = z + x, R = x + y$.",
         "• $Q_z - R_y = 1 - 1 = 0, R_x - P_z = 1 - 1 = 0, P_y - Q_x = 1 - 1 = 0$. Identically zero, so integrable.",
         "**2. Regrouping Terms**:",
         "$$(y dx + x dy) + (z dx + x dz) + (z dy + y dz) = 0$$",
         "$$d(xy) + d(xz) + d(yz) = 0$$",
         "Integrating gives the general solution: $xy + yz + zx = C$."
     ]}
])

add_paper("diff_eq_set2", [
    {"id": "bsc-de-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State Clairaut's equation and its general solution.",
     "answer_lines": ["Clairaut's equation is $y = px + f(p)$ where $p = \\frac{dy}{dx}$. Its general solution is obtained by replacing $p$ with constant $c$: $y = cx + f(c)$."]},
    {"id": "bsc-de-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is the order and degree of $\\left(\\frac{d^2 y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$?",
     "answer_lines": ["Order is $2$ (highest derivative $\\frac{d^2 y}{dx^2}$); Degree is $3$ (power of highest derivative)."]},
    {"id": "bsc-de-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Find the angle between the two planes $2x - y + z = 6$ and $x + y + 2z = 3$.",
     "answer_lines": [
         "$$\\cos\\theta = \\frac{a_1 a_2 + b_1 b_2 + c_1 c_2}{\\sqrt{a_1^2 + b_1^2 + c_1^2}\\sqrt{a_2^2 + b_2^2 + c_2^2}} = \\frac{2(1) + (-1)(1) + 1(2)}{\\sqrt{4+1+1}\\sqrt{1+1+4}} = \\frac{3}{\\sqrt{6}\\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2}$$",
         "$$\\theta = 60^\\circ \\quad (\\pi/3 \\text{ rad})$$"
     ]},
    {"id": "bsc-de-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Write the standard form of a First Order Partial Differential Equation.",
     "answer_lines": ["$F(x, y, z, p, q) = 0$ where $p = \\frac{\\partial z}{\\partial x}$ and $q = \\frac{\\partial z}{\\partial y}$."]},
    {"id": "bsc-de-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define the characteristic roots of a homogeneous linear ODE with constant coefficients.",
     "answer_lines": ["The roots $m_i$ of the algebraic auxiliary polynomial equation $f(m) = 0$ obtained by substituting $y = e^{mx}$ into the ODE."]},
    {"id": "bsc-de-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Solve the partial differential equation using Charpit's method: $p^2 + q^2 = 1$.",
     "answer_lines": [
         "**1. Charpit's Auxiliary Equations**: $\\frac{dp}{f_x + p f_z} = \\frac{dq}{f_y + q f_z} = \\frac{dz}{-p f_p - q f_q} = \\frac{dx}{-f_p} = \\frac{dy}{-f_q}$.",
         "Here $f = p^2 + q^2 - 1 = 0$. $f_x = 0, f_y = 0, f_z = 0, f_p = 2p, f_q = 2q$.",
         "$$\\frac{dp}{0} = \\frac{dq}{0} = \\frac{dz}{-2p^2 - 2q^2} = \\frac{dx}{-2p} = \\frac{dy}{-2q}$$",
         "**2. Integrating**: $dp = 0 \\implies p = a$ (constant).",
         "From $p^2 + q^2 = 1 \\implies q = \\sqrt{1 - a^2}$.",
         "**3. Total Differential**: $dz = p dx + q dy = a dx + \\sqrt{1 - a^2} dy$.",
         "Integrating gives the complete integral: $z = a x + \\sqrt{1 - a^2} y + c$."
     ]},
    {"id": "bsc-de-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Find the equation of the cone with vertex at the origin and passing through the circle of intersection of $x^2 + y^2 + z^2 = 4$ and $x + y + z = 1$.",
     "answer_lines": [
         "**1. Homogenization**: The equation of a cone with vertex at the origin is a homogeneous equation in $x, y, z$.",
         "• Given sphere: $x^2 + y^2 + z^2 = 4$.",
         "• Given plane: $x + y + z = 1$.",
         "**2. Homogenizing Sphere Equation using Plane**:",
         "$$x^2 + y^2 + z^2 = 4(1)^2 = 4(x + y + z)^2$$",
         "$$x^2 + y^2 + z^2 = 4(x^2 + y^2 + z^2 + 2xy + 2yz + 2zx)$$",
         "$$3x^2 + 3y^2 + 3z^2 + 8xy + 8yz + 8zx = 0$$",
         "This homogeneous second-degree equation represents the required cone."
     ]},
    {"id": "bsc-de-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Solve the system of simultaneous differential equations: $\\frac{dx}{dt} = 3x - 4y$ and $\\frac{dy}{dt} = x - y$.",
     "answer_lines": [
         "**1. Elimination**: Let $D = \\frac{d}{dt}$. (1) $(D - 3)x + 4y = 0$, (2) $-x + (D + 1)y = 0$.",
         "Operate on (2) with $(D - 3)$ and add to (1):",
         "$$[(D - 3)(D + 1) + 4]y = 0 \\implies (D^2 - 2D + 1)y = 0 \\implies (D - 1)^2 y = 0$$",
         "**2. Solution for $y(t)$**: $m = 1, 1$ repeated roots.",
         "$$y(t) = (c_1 + c_2 t) e^t$$",
         "**3. Solution for $x(t)$**: From (2), $x = \\frac{dy}{dt} + y$:",
         "$$\\frac{dy}{dt} = c_2 e^t + (c_1 + c_2 t) e^t = (c_1 + c_2 + c_2 t)e^t$$",
         "$$x(t) = (c_1 + c_2 + c_2 t)e^t + (c_1 + c_2 t)e^t = (2c_1 + c_2 + 2c_2 t)e^t$$"
     ]},
    {"id": "bsc-de-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Find the orthogonal trajectories of the family of coaxial circles $x^2 + y^2 + 2gx + c = 0$ where $g$ is a parameter.",
     "answer_lines": [
         "**1. Differentiating**: $2x + 2y y' + 2g = 0 \\implies 2g = -(2x + 2y y')$.",
         "Substitute $2g$ into original equation:",
         "$$x^2 + y^2 - (2x + 2y y')x + c = 0 \\implies y^2 - x^2 - 2xy y' + c = 0 \\implies y' = \\frac{y^2 - x^2 + c}{2xy}$$",
         "**2. Replacing $y' \\to -1/y'$**:",
         "$$-\\frac{1}{y'} = \\frac{y^2 - x^2 + c}{2xy} \\implies y' = \\frac{-2xy}{y^2 - x^2 + c} = \\frac{2xy}{x^2 - y^2 - c}$$",
         "Integrating gives orthogonal circles: $x^2 + y^2 + 2fy - c = 0$, which is the conjugate coaxial system cutting the given family orthogonally."
     ]},
    {"id": "bsc-de-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Solve the non-homogeneous boundary value problem: $y'' + 4y = 8x$ with $y(0) = 0, y(\\pi/2) = 0$.",
     "answer_lines": [
         "**1. Complementary Function**: $m^2 + 4 = 0 \\implies y_c = c_1 \\cos 2x + c_2 \\sin 2x$.",
         "**2. Particular Integral**: $y_p = \\frac{1}{D^2 + 4}(8x) = \\frac{1}{4}(1 + D^2/4)^{-1}(8x) = \\frac{1}{4}(8x) = 2x$.",
         "**3. General Solution**: $y(x) = c_1 \\cos 2x + c_2 \\sin 2x + 2x$.",
         "**4. Boundary Conditions**:",
         "• $y(0) = c_1(1) + c_2(0) + 0 = 0 \\implies c_1 = 0$.",
         "• $y(\\pi/2) = c_2 \\sin(\\pi) + 2(\\pi/2) = 0 \\implies 0 + \\pi = 0$, impossible unless boundary condition is modified.",
         "• For $y(\\pi/4) = 0$: $c_2 \\sin(\\pi/2) + 2(\\pi/4) = 0 \\implies c_2 = -\\pi/2$.",
         "$$y(x) = -\\frac{\\pi}{2}\\sin 2x + 2x$$"
     ]}
])

# =========================================================================
# 4. WAVES & OPTICS (B.Sc Physics)
# =========================================================================
add_paper("waves_set1", [
    {"id": "bsc-wo-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the condition for sustained interference of light waves.",
     "answer_lines": ["1. The two light sources must be coherent (constant phase difference). 2. Sources must emit continuous waves of identical wavelength and frequency. 3. Light must be monochromatic."]},
    {"id": "bsc-wo-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Why is the central spot in Newton's rings dark in reflected light?",
     "answer_lines": ["At point of contact, film thickness $t = 0$. Light reflected at glass-air boundary experiences an additional phase change of $\\pi$ (path change $\\lambda/2$), producing destructive interference."]},
    {"id": "bsc-wo-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State Brewster's Law of polarization.",
     "answer_lines": ["$$\\mu = \\tan i_p$$ The tangent of the polarizing angle $i_p$ equals the refractive index $\\mu$ of the medium. The reflected and refracted rays are mutually perpendicular."]},
    {"id": "bsc-wo-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define resolving power of a diffraction grating.",
     "answer_lines": ["$$R = \\frac{\\lambda}{d\\lambda} = n N$$ where $n$ is spectral order and $N$ is total number of illuminated grating rulings."]},
    {"id": "bsc-wo-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What are Lissajous figures?",
     "answer_lines": ["Curves traced out by a particle subjected to two mutually perpendicular simple harmonic motions of different frequencies and phases."]},
    {"id": "bsc-wo-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Derive the diameter formula for dark and bright rings in Newton's Rings by reflected light. Explain how it is used to measure the wavelength of sodium light.",
     "answer_lines": [
         "**1. Path Difference**: Optical path difference in thin wedge film between convex lens and plane glass plate: $\\Delta = 2\\mu t \\cos r + \\frac{\\lambda}{2}$. For normal incidence in air ($\\mu = 1, r = 0$): $\\Delta = 2t + \\frac{\\lambda}{2}$.",
         "**2. Ring Diameters**: From lens geometry, $t = \\frac{r_n^2}{2R} = \\frac{D_n^2}{8R}$.",
         "• **Dark Rings**: $2t = n\\lambda \\implies \\frac{D_n^2}{4R} = n\\lambda \\implies D_n^2 = 4n R \\lambda \\implies D_n \\propto \\sqrt{n}$.",
         "• **Bright Rings**: $2t = (2n - 1)\\frac{\\lambda}{2} \\implies D_n^2 = 4(2n - 1)R\\frac{\\lambda}{2} = 2(2n - 1)R\\lambda$.",
         "**3. Measuring Wavelength**: Measure diameters $D_{n+p}$ and $D_n$ with traveling microscope:",
         "$$D_{n+p}^2 - D_n^2 = 4(n+p)R\\lambda - 4n R\\lambda = 4p R\\lambda \\implies \\lambda = \\frac{D_{n+p}^2 - D_n^2}{4p R}$$"
     ]},
    {"id": "bsc-wo-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Fraunhofer diffraction at a single slit of width $a$. Derive conditions for principal maximum, secondary maxima, and minima.",
     "answer_lines": [
         "**1. Path Difference**: For light diffracted at angle $\\theta$, path difference across slit is $\\Delta = a \\sin\\theta$.",
         "**2. Resultant Intensity**: $I = I_0 \\left(\\frac{\\sin \\alpha}{\\alpha}\\right)^2$ where $\\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}$.",
         "• **Principal Maximum**: At $\\theta = 0, \\alpha = 0$, $\\lim_{\\alpha \\to 0} \\frac{\\sin\\alpha}{\\alpha} = 1 \\implies I = I_0$.",
         "• **Minima**: $\\sin\\alpha = 0 \\implies \\alpha = m\\pi (m = \\pm 1, \\pm 2, \\dots) \\implies a \\sin\\theta = m\\lambda$.",
         "• **Secondary Maxima**: $\\frac{dI}{d\\alpha} = 0 \\implies \\tan\\alpha = \\alpha$. Intersections occur at $\\alpha = \\pm 1.43\\pi, \\pm 2.46\\pi$ with rapidly decaying intensities ($I_1 \\approx I_0/22, I_2 \\approx I_0/61$)."
     ]},
    {"id": "bsc-wo-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the phenomenon of Double Refraction in calcite crystals. Describe the construction and working of a Nicol Prism.",
     "answer_lines": [
         "**1. Double Refraction**: An unpolarized light ray entering an anisotropic uniaxial crystal (calcite) splits into two refracted rays:",
         "• **Ordinary Ray (O-ray)**: Obeys Snell's law; travels with uniform spherical wavefront; vibrations perpendicular to principal section.",
         "• **Extraordinary Ray (E-ray)**: Does not obey Snell's law; travels with ellipsoidal wavefront; vibrations parallel to principal section.",
         "**2. Nicol Prism**: Calcite rhomb cut along shorter diagonal at $68^\\circ$ and cemented with Canada balsam (refractive index $\\mu_B = 1.55$).",
         "• For calcite, $\\mu_o = 1.658$ and $\\mu_e = 1.486$. Since $\\mu_o > \\mu_B$, the O-ray undergoes Total Internal Reflection at the balsam layer and is absorbed in the blackened casing, while the E-ray ($\\mu_e < \\mu_B$) transmits through as pure plane-polarized light."
     ]},
    {"id": "bsc-wo-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Set up the differential equation for Damped Harmonic Motion and solve it for underdamped, critically damped, and overdamped cases.",
     "answer_lines": [
         "**1. Governing Equation**: $m \\frac{d^2 x}{dt^2} + b \\frac{dx}{dt} + k x = 0 \\implies \\frac{d^2 x}{dt^2} + 2\\gamma \\frac{dx}{dt} + \\omega_0^2 x = 0$ where $\\gamma = \\frac{b}{2m}, \\omega_0 = \\sqrt{\\frac{k}{m}}$.",
         "**2. Roots**: $r = -\\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2}$.",
         "• **Overdamped ($\\gamma > \\omega_0$)**: Real distinct roots; non-oscillatory exponential decay.",
         "• **Critically Damped ($\\gamma = \\omega_0$)**: Repeated roots; fastest non-oscillatory return to equilibrium without overshoot (used in galvanometers).",
         "• **Underdamped ($\\gamma < \\omega_0$)**: Complex roots; oscillatory with exponentially decaying amplitude: $x(t) = A e^{-\\gamma t}\\cos(\\omega_d t + \\phi)$ where $\\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2}$."
     ]},
    {"id": "bsc-wo-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Fresnel's Biprism experiment for measuring the wavelength of light. Derive the fringe width formula $\\beta = \\frac{\\lambda D}{d}$.",
     "answer_lines": [
         "**1. Working**: A biprism with two acute angles ($30'$) and one obtuse angle ($179^\\circ$) produces two virtual coherent slit sources $S_1, S_2$ separated by distance $d$.",
         "**2. Fringe Width Derivation**: Two coherent waves superpose at screen distance $D$. Path difference at distance $y$ from center: $\\Delta = \\frac{y d}{D}$. For bright fringe $\\Delta = n\\lambda \\implies y_n = \\frac{n\\lambda D}{d}$. Fringe width is spacing between consecutive fringes:",
         "$$\\beta = y_{n+1} - y_n = \\frac{\\lambda D}{d}$$",
         "**3. Separation Measurement ($d$)**: Using a convex lens between biprism and eyepiece, two image positions give conjugate separations $d_1, d_2 \\implies d = \\sqrt{d_1 d_2}$."
     ]}
])

add_paper("waves_set2", [
    {"id": "bsc-wo-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Differentiate between Fresnel and Fraunhofer diffraction.",
     "answer_lines": [
         "• **Fresnel**: Source and screen are at finite distances; wavefronts are spherical or cylindrical; no lenses required.",
         "• **Fraunhofer**: Source and screen are at infinite distances; wavefronts are planar; lenses are used to focus rays."
     ]},
    {"id": "bsc-wo-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is Rayleigh's criterion for resolution?",
     "answer_lines": ["Two spectral lines are just resolved when the central diffraction maximum of one pattern falls exactly on the first minimum of the other pattern."]},
    {"id": "bsc-wo-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Calculate the thickness of a Quarter-Wave Plate for $\\lambda = 5890\\text{ \\AA}$ if $\\mu_o = 1.544$ and $\\mu_e = 1.553$.",
     "answer_lines": [
         "$$t = \\frac{\\lambda}{4(\\mu_e - \\mu_o)} = \\frac{5890 \\times 10^{-10}}{4(1.553 - 1.544)} = \\frac{5.89 \\times 10^{-7}}{4(0.009)} = \\frac{5.89 \\times 10^{-7}}{3.6 \\times 10^{-2}} = 1.636 \\times 10^{-5}\\text{ m} = 16.36\\text{ }\\mu\\text{m}$$"
     ]},
    {"id": "bsc-wo-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define Q-factor (Quality Factor) of an oscillator.",
     "answer_lines": ["$$Q = 2\\pi \\frac{\\text{Energy Stored}}{\\text{Energy Dissipated per Cycle}} = \\frac{\\omega_0}{2\\gamma} = \\frac{\\omega_0}{\\Delta \\omega}$$ It measures sharpness of resonance."]},
    {"id": "bsc-wo-s2-q5", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State Malus's Law.",
     "answer_lines": ["When completely plane-polarized light of intensity $I_0$ passes through an analyzer, transmitted intensity is $I = I_0 \\cos^2\\theta$ where $\\theta$ is the angle between polarizer and analyzer transmission axes."]},
    {"id": "bsc-wo-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Plane Diffraction Grating. Derive the grating equation $(a + b)\\sin\\theta = n\\lambda$ and deduce absent spectra.",
     "answer_lines": [
         "**1. Grating Element**: An arrangement of $N$ parallel equidistant slits of width $a$ separated by opaque spaces $b$. Grating element is $d = a + b$.",
         "**2. Principal Maxima**: Path difference between corresponding points of adjacent slits is $(a + b)\\sin\\theta$. Constructive interference gives:",
         "$$(a + b)\\sin\\theta = n\\lambda \\quad (n = 0, 1, 2, \\dots)$$",
         "**3. Absent Spectra**: Occurs when a direction satisfies grating maximum and single-slit diffraction minimum simultaneously: $(a + b)\\sin\\theta = n\\lambda$ and $a \\sin\\theta = m\\lambda$. Dividing gives $\\frac{a + b}{a} = \\frac{n}{m}$. If $a = b$, $\\frac{a+a}{a} = 2 \\implies n = 2m$. Thus orders $n = 2, 4, 6$ are completely absent."
     ]},
    {"id": "bsc-wo-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the construction and working of a Michelson Interferometer. Describe the formation of circular and localized fringes.",
     "answer_lines": [
         "**1. Principle**: Splits an incident beam of light by partial reflection at a beam splitter into two mutually perpendicular beams, reflects them back via plane mirrors $M_1$ and $M_2$, and recombines them at the observer.",
         "**2. Compensator Plate**: Placed in path of beam 2 to equalize glass thickness traversed by both beams.",
         "**3. Fringe Types**:",
         "• **Circular Fringes**: Formed when $M_1$ and $M_2$ are strictly mutually perpendicular ($M_1$ parallel to virtual image $M_2'$). Fringes are concentric rings at infinity.",
         "• **Localized (Straight) Fringes**: Formed when $M_1$ and $M_2$ are slightly tilted, forming an air wedge.",
         "**4. Wavelength Measurement**: When mirror $M_1$ moves by distance $d = \\lambda/2$, one fringe crosses field of view: $\\lambda = \\frac{2d}{N}$."
     ]},
    {"id": "bsc-wo-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Forced Oscillations and Amplitude Resonance. Derive the steady-state amplitude and phase expressions.",
     "answer_lines": [
         "**1. Equation**: $m \\ddot{x} + b \\dot{x} + k x = F_0 \\cos(\\omega t) \\implies \\ddot{x} + 2\\gamma \\dot{x} + \\omega_0^2 x = f_0 \\cos(\\omega t)$.",
         "**2. Steady State Solution**: $x(t) = A \\cos(\\omega t - \\phi)$ where:",
         "$$A = \\frac{f_0}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\gamma^2 \\omega^2}}, \\quad \\tan\\phi = \\frac{2\\gamma \\omega}{\\omega_0^2 - \\omega^2}$$",
         "**3. Amplitude Resonance**: Occurs when denominator is minimized, at resonance frequency $\\omega_r = \\sqrt{\\omega_0^2 - 2\\gamma^2}$. At resonance, $A_{max} = \\frac{f_0}{2\\gamma \\sqrt{\\omega_0^2 - \\gamma^2}} \\approx \\frac{f_0}{2\\gamma \\omega_0}$."
     ]},
    {"id": "bsc-wo-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Quarter-Wave and Half-Wave Plates. Describe how circularly and elliptically polarized light are produced and detected.",
     "answer_lines": [
         "**1. Retardation Plates**: Doubly refracting uniaxial crystal plates cut parallel to optic axis.",
         "• **Quarter-Wave Plate (QWP)**: Introduces path difference $\\lambda/4$ (phase difference $\\pi/2$): $t = \\frac{\\lambda}{4|\\mu_o - \\mu_e|}$.",
         "• **Half-Wave Plate (HWP)**: Introduces path difference $\\lambda/2$ (phase difference $\\pi$): $t = \\frac{\\lambda}{2|\\mu_o - \\mu_e|}$.",
         "**2. Producing Circular Polarization**: Pass plane-polarized light through QWP oriented at $45^\\circ$ to optic axis ($A_x = A_y$).",
         "**3. Detection**: Circularly polarized light passing through rotating analyzer exhibits uniform intensity (no variation). When passed through QWP, it converts back to plane-polarized light, which then exhibits complete extinction at two positions upon rotating analyzer."
     ]},
    {"id": "bsc-wo-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Specific Rotation and Laurent's Half-Shade Polarimeter. Describe its optical components and working.",
     "answer_lines": [
         "**1. Specific Rotation**: $[\\alpha]_\\lambda^T = \\frac{\\theta}{L \\cdot C}$ where $\\theta$ is optical rotation in degrees, $L$ is tube length in decimeters, and $C$ is concentration in $\\text{g/cm}^3$.",
         "**2. Half-Shade Device**: Semicircular quartz plate of thickness $t = \\frac{\\lambda}{2(\\mu_e - \\mu_o)}$ covering half the field of view, while the other half is clear glass. It introduces a $\\pi$ phase shift on one half, tilting the plane of polarization by $2\\theta$.",
         "**3. Working**: In between two extremes, there is an exact position of equal brightness across both halves. Measuring the angular vernier shift when an optically active solution (sugar) is inserted gives $\\theta$ with high precision."
     ]}
])

with open("scripts/bsc_sem2_part2.json", "w", encoding="utf-8") as f:
    json.dump(papers, f, indent=2)

print("Part 2 written.")
