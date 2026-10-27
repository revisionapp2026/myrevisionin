import json

subjects_data = {}

def add_paper(sub_key, set_num, q_list):
    key = f"{sub_key}_set{set_num}"
    subjects_data[key] = q_list

# =========================================================================
# 4. ENGINEERING MECHANICS
# =========================================================================
add_paper("mechanics", 1, [
    {
        "id": "em-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Lami's Theorem and state the condition for its application.",
        "answer_lines": [
            "**Statement**: If three coplanar, concurrent forces acting on a body keep it in static equilibrium, each force is proportional to the sine of the angle between the other two forces:",
            "$$\\frac{P}{\\sin \\alpha} = \\frac{Q}{\\sin \\beta} = \\frac{R}{\\sin \\gamma}$$",
            "**Condition**: The three forces must be strictly coplanar, concurrent, non-collinear, and in static equilibrium."
        ]
    },
    {
        "id": "em-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define angle of friction $\\phi$ and angle of repose $\\theta$, and state their relationship.",
        "answer_lines": [
            "**Angle of Friction ($\\phi$)**: The angle made by the resultant reaction with the normal to the contact plane when limiting friction occurs ($\\tan \\phi = \\mu$).",
            "**Angle of Repose ($\\theta$)**: The maximum angle of inclination of a rough plane with the horizontal at which a body placed on it remains in equilibrium without slipping.",
            "**Relationship**: Both are mathematically equal: $\\theta = \\phi = \\tan^{-1}(\\mu)$."
        ]
    },
    {
        "id": "em-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Varignon's Theorem of Moments.",
        "answer_lines": [
            "**Theorem**: The algebraic sum of the moments of any number of coplanar forces about any point in their plane is equal to the moment of their resultant force about the same point:",
            "$$\\sum M_O = M_R = R \\cdot d$$"
        ]
    },
    {
        "id": "em-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between Centroid and Center of Gravity.",
        "answer_lines": [
            "**Centroid**: The geometrical center of plane areas or figures (2D lines, surfaces, volumes) where the total area is assumed to be concentrated; independent of mass.",
            "**Center of Gravity (CG)**: The point through which the resultant gravitational force (weight) of a 3D physical body acts in any orientation."
        ]
    },
    {
        "id": "em-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the Parallel Axis Theorem for planar area moments of inertia.",
        "answer_lines": [
            "**Statement**: The moment of inertia of a plane area about any axis $AB$ parallel to its centroidal axis $GG$ is given by:",
            "$$I_{AB} = I_G + A d^2$$",
            "Where $I_G$ is centroidal moment of inertia, $A$ is total area, and $d$ is perpendicular distance between the two parallel axes."
        ]
    },
    {
        "id": "em-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "A smooth sphere of weight $W = 1000\\text{ N}$ rests in a V-trough whose sides make angles of $30^\\circ$ and $60^\\circ$ with the horizontal. Calculate the normal reactions $R_A$ and $R_B$ exerted by the inclined surfaces.",
        "answer_lines": [
            "**1. Geometry and Free Body Diagram**:",
            "• Inclined plane $A$ makes $30^\\circ$ with horizontal; normal reaction $R_A$ makes $90^\\circ - 30^\\circ = 60^\\circ$ with horizontal.",
            "• Inclined plane $B$ makes $60^\\circ$ with horizontal; normal reaction $R_B$ makes $90^\\circ - 60^\\circ = 30^\\circ$ with horizontal.",
            "• Weight $W = 1000\\text{ N}$ acts vertically downwards.",
            "• Angle between plane normals: $\\theta_{AB} = 30^\\circ + 60^\\circ = 90^\\circ$.",
            "**2. Applying Lami's Theorem**:",
            "• Angle opposite to $W$: $90^\\circ$.",
            "• Angle opposite to $R_A$: $180^\\circ - 30^\\circ = 150^\\circ$.",
            "• Angle opposite to $R_B$: $180^\\circ - 60^\\circ = 120^\\circ$.",
            "$$\\frac{R_A}{\\sin 120^\\circ} = \\frac{R_B}{\\sin 150^\\circ} = \\frac{W}{\\sin 90^\\circ}$$",
            "**3. Evaluation**:",
            "$$R_A = 1000 \\cdot \\sin 120^\\circ = 1000 \\cdot \\frac{\\sqrt{3}}{2} = 866.03\\text{ N}$$",
            "$$R_B = 1000 \\cdot \\sin 150^\\circ = 1000 \\cdot 0.5 = 500\\text{ N}$$",
            "**Answers**: $R_A = 866.03\\text{ N}$ and $R_B = 500.00\\text{ N}$."
        ]
    },
    {
        "id": "em-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "A ladder of length $5\\text{ m}$ and weight $300\\text{ N}$ rests against a smooth vertical wall at an angle $\\theta$ to the horizontal. The floor is rough with $\\mu = 0.3$. A person of weight $700\\text{ N}$ climbs $4\\text{ m}$ along the ladder. Determine the minimum inclination angle $\\theta$ for equilibrium.",
        "answer_lines": [
            "**1. Equilibrium Equations**:",
            "• Smooth vertical wall: reaction $R_W$ is purely horizontal.",
            "• Rough floor: normal reaction $N_F$ upwards, limiting friction $F_F = \\mu N_F = 0.3 N_F$ towards the wall.",
            "• Vertical equilibrium: $\\sum F_y = 0 \\implies N_F - 300 - 700 = 0 \\implies N_F = 1000\\text{ N}$.",
            "• Limiting friction force: $F_F = 0.3 \\times 1000 = 300\\text{ N}$.",
            "• Horizontal equilibrium: $\\sum F_x = 0 \\implies R_W - F_F = 0 \\implies R_W = 300\\text{ N}$.",
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
        "id": "em-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Find the centroid $(\\bar{x}, \\bar{y})$ and the moment of inertia about the centroidal $x$-axis ($I_{xx}$) for an inverted T-section: Flange $120\\text{ mm} \\times 20\\text{ mm}$, Web $20\\text{ mm} \\times 100\\text{ mm}$ standing centrally on the flange.",
        "answer_lines": [
            "**1. Area Calculation**:",
            "• Flange (1): $b_1 = 120\\text{ mm}, d_1 = 20\\text{ mm} \\implies A_1 = 2400\\text{ mm}^2, y_1 = 10\\text{ mm}$.",
            "• Web (2): $b_2 = 20\\text{ mm}, d_2 = 100\\text{ mm} \\implies A_2 = 2000\\text{ mm}^2, y_2 = 20 + 50 = 70\\text{ mm}$.",
            "• Total Area: $A = A_1 + A_2 = 2400 + 2000 = 4400\\text{ mm}^2$.",
            "• Due to vertical symmetry: $\\bar{x} = 60\\text{ mm}$.",
            "**2. Centroid Height $\\bar{y}$**:",
            "$$\\bar{y} = \\frac{A_1 y_1 + A_2 y_2}{A} = \\frac{2400(10) + 2000(70)}{4400} = \\frac{24000 + 140000}{4400} = \\frac{164000}{4400} = 37.27\\text{ mm}$$",
            "**3. Moment of Inertia $I_{xx}$**:",
            "• Flange: $I_{G1} = \\frac{120 \\times 20^3}{12} = 80000\\text{ mm}^4$. $h_1 = |10 - 37.27| = 27.27\\text{ mm}$.",
            "$$I_{x1} = 80000 + 2400(27.27)^2 = 80000 + 1784767 = 1864767\\text{ mm}^4$$",
            "• Web: $I_{G2} = \\frac{20 \\times 100^3}{12} = 1666667\\text{ mm}^4$. $h_2 = |70 - 37.27| = 32.73\\text{ mm}$.",
            "$$I_{x2} = 1666667 + 2000(32.73)^2 = 1666667 + 2142506 = 3809173\\text{ mm}^4$$",
            "• Total: $I_{xx} = I_{x1} + I_{x2} = 1864767 + 3809173 = 5.674 \\times 10^6\\text{ mm}^4$."
        ]
    },
    {
        "id": "em-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Determine the forces in all members of a plane triangular truss loaded with a vertical point load of $50\\text{ kN}$ at the apex using the Method of Joints.",
        "answer_lines": [
            "**1. Structural Details**: Triangle $ABC$ with base span $AB = 6\\text{ m}$ (supports $A$ pinned, $B$ roller) and apex $C$ at height $h = 4\\text{ m}$ symmetrically placed above midspan. A downward load of $50\\text{ kN}$ acts at $C$.",
            "• Member lengths: $AC = BC = \\sqrt{3^2 + 4^2} = 5\\text{ m}$.",
            "• Base angle $\\theta = \\tan^{-1}(4/3) \\implies \\cos\\theta = 0.6, \\sin\\theta = 0.8$.",
            "**2. Support Reactions**: By symmetry, $R_{Ay} = R_{By} = 25\\text{ kN}, R_{Ax} = 0$.",
            "**3. Joint $A$ Analysis**:",
            "• $\\sum F_y = 0 \\implies R_{Ay} + F_{AC}\\sin\\theta = 0 \\implies 25 + F_{AC}(0.8) = 0 \\implies F_{AC} = -31.25\\text{ kN}$ (Compression).",
            "• $\\sum F_x = 0 \\implies F_{AB} + F_{AC}\\cos\\theta = 0 \\implies F_{AB} + (-31.25)(0.6) = 0 \\implies F_{AB} = +18.75\\text{ kN}$ (Tension).",
            "**4. Joint $B$ Analysis**:",
            "• By symmetry: $F_{BC} = -31.25\\text{ kN}$ (Compression) and $F_{AB} = +18.75\\text{ kN}$ (Tension).",
            "**Summary**: $F_{AC} = 31.25\\text{ kN (C)}, F_{BC} = 31.25\\text{ kN (C)}, F_{AB} = 18.75\\text{ kN (T)}$."
        ]
    },
    {
        "id": "em-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Two masses $m_1 = 10\\text{ kg}$ and $m_2 = 15\\text{ kg}$ are connected by a light string over a frictionless pulley. $m_1$ is on a rough table ($\\mu_k = 0.2$) and $m_2$ hangs vertically. Using D'Alembert's Principle, find acceleration $a$ and tension $T$.",
        "answer_lines": [
            "**1. Dynamic Equilibrium using D'Alembert's Principle**:",
            "Add reverse effective inertia forces ($m a$) to free bodies.",
            "**2. Analysis of Hanging Mass $m_2$**:",
            "• Forces: Downward weight $m_2 g$, upward tension $T$, upward inertia force $m_2 a$.",
            "$$m_2 g - T - m_2 a = 0 \\implies T = m_2(g - a) = 15(9.81 - a)$$",
            "**3. Analysis of Table Mass $m_1$**:",
            "• Vertical equilibrium: $N = m_1 g = 10(9.81) = 98.1\\text{ N}$.",
            "• Friction force: $F_k = \\mu_k N = 0.2 \\times 98.1 = 19.62\\text{ N}$.",
            "• Horizontal equilibrium with inertia force $m_1 a$ opposite to motion:",
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
])

add_paper("mechanics", 2, [
    {
        "id": "em-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define Coefficient of Restitution $e$ and write its values for perfectly elastic and plastic collisions.",
        "answer_lines": [
            "**Definition**: The ratio of the relative velocity of separation to the relative velocity of approach along the common normal: $e = \\frac{v_2 - v_1}{u_1 - u_2}$.",
            "• For perfectly elastic collision: $e = 1$.",
            "• For perfectly plastic / inelastic collision: $e = 0$."
        ]
    },
    {
        "id": "em-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the conditions for identifying zero-force members in a truss by inspection.",
        "answer_lines": [
            "1. If two non-collinear members meet at an unloaded joint, both are zero-force members.",
            "2. If three members meet at an unloaded joint where two are collinear, the third non-collinear member is a zero-force member."
        ]
    },
    {
        "id": "em-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define Radius of Gyration $k$ of a plane area.",
        "answer_lines": [
            "**Definition**: The distance from the reference axis at which the entire area could be concentrated into a strip without altering its moment of inertia: $k = \\sqrt{\\frac{I}{A}}$, so $I = A k^2$."
        ]
    },
    {
        "id": "em-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the Principle of Virtual Work for rigid bodies.",
        "answer_lines": [
            "**Principle**: If a system of rigid bodies in static equilibrium is subjected to arbitrary consistent virtual displacements, the total virtual work done by all active forces is zero: $\\delta U = \\sum \\vec{F}_i \\cdot \\delta \\vec{r}_i = 0$."
        ]
    },
    {
        "id": "em-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Newton's Second Law of Motion in vector differential form.",
        "answer_lines": [
            "$$\\sum \\vec{F} = \\frac{d\\vec{p}}{dt} = \\frac{d(m\\vec{v})}{dt} = m\\vec{a} \\quad (\\text{for constant mass } m)$$"
        ]
    },
    {
        "id": "em-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "A simply supported beam of span $L = 6\\text{ m}$ carries a UDL of $10\\text{ kN/m}$ on the left half ($3\\text{ m}$) and a concentrated load of $30\\text{ kN}$ at $4.5\\text{ m}$ from left support. Determine support reactions and calculate maximum bending moment.",
        "answer_lines": [
            "**1. Support Reactions**:",
            "• Total UDL load: $W_{UDL} = 10\\text{ kN/m} \\times 3\\text{ m} = 30\\text{ kN}$ acting at $1.5\\text{ m}$ from $A$.",
            "• Concentrated load: $30\\text{ kN}$ at $4.5\\text{ m}$ from $A$.",
            "• Taking moments about $A$: $\\sum M_A = 0$:",
            "$$R_B(6) - 30(1.5) - 30(4.5) = 0 \\implies 6 R_B = 45 + 135 = 180 \\implies R_B = 30\\text{ kN}$$",
            "• Vertical equilibrium: $\\sum F_y = 0 \\implies R_A + R_B = 60 \\implies R_A = 30\\text{ kN}$.",
            "**2. Maximum Bending Moment**:",
            "• Shear Force at $x$ ($0 \\le x \\le 3$): $V(x) = R_A - 10x = 30 - 10x$.",
            "• Point of zero shear: $30 - 10x = 0 \\implies x = 3\\text{ m}$.",
            "• Bending moment at $x = 3\\text{ m}$:",
            "$$M_{max} = R_A(3) - 10(3)(1.5) = 30(3) - 45 = 90 - 45 = 45\\text{ kN}\\cdot\\text{m}$$",
            "**Results**: $R_A = 30\\text{ kN}, R_B = 30\\text{ kN}, M_{max} = 45\\text{ kN}\\cdot\\text{m}$ at midspan."
        ]
    },
    {
        "id": "em-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain the Method of Sections for truss analysis. Describe when it is superior to the Method of Joints and state the maximum number of unknown members that can be cut in a single section.",
        "answer_lines": [
            "**1. Operating Principle**: An imaginary cutting plane passes completely through the truss, dividing it into two independent portions. The equilibrium of either portion is considered under the external forces and the internal forces in the exposed cut members.",
            "**2. Governing Equations**: For planar trusses, three independent static equilibrium equations are available: $\\sum F_x = 0, \\sum F_y = 0, \\sum M_O = 0$. Hence, a section can cut at most **three** non-concurrent, non-parallel unknown members.",
            "**3. Comparison with Method of Joints**:",
            "• In Method of Joints, calculating forces in central members of large trusses requires solving sequentially joint by joint from support inwards.",
            "• Method of Sections enables calculating the force in any internal member directly in 1-2 steps using moment equilibrium about the intersection of the other two cut members."
        ]
    },
    {
        "id": "em-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
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
        "id": "em-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
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
        "id": "em-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
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
])

# =========================================================================
# 5. WORKSHOP PRACTICE
# =========================================================================
add_paper("workshop", 1, [
    {
        "id": "wp-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State four primary Personal Protective Equipment (PPE) items required in an engineering workshop.",
        "answer_lines": [
            "1. Safety goggles / face shields for eye protection from flying chips and sparks.",
            "2. Steel-toe safety shoes to prevent crush injuries from heavy falling workpieces.",
            "3. Leather apron and welding gloves for thermal and radiation protection.",
            "4. Ear defenders / earplugs for noise attenuation around heavy machining tools."
        ]
    },
    {
        "id": "wp-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define least count and compute it for a Vernier Caliper where $1\\text{ MSD} = 1\\text{ mm}$ and 50 Vernier divisions coincide with 49 Main Scale divisions.",
        "answer_lines": [
            "**Definition**: The smallest measurement that can be measured accurately by an instrument.",
            "**Calculation**: $LC = 1\\text{ MSD} - 1\\text{ VSD} = 1\\text{ mm} - \\frac{49}{50}\\text{ mm} = \\frac{1}{50}\\text{ mm} = 0.02\\text{ mm}$."
        ]
    },
    {
        "id": "wp-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Name four types of files used in fitting based on their cross-sectional shape.",
        "answer_lines": [
            "1. Flat file (general surface filing).",
            "2. Hand file (safe edge for right-angle shoulder filing).",
            "3. Round file (enlarging circular holes).",
            "4. Triangular file (internal angles greater than $60^\\circ$)."
        ]
    },
    {
        "id": "wp-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between soldering and brazing based on filler metal melting point.",
        "answer_lines": [
            "**Soldering**: Operates below $450^\\circ\\text{C}$ using lead-tin alloy filler (soft solder, melting point $\\approx 180-250^\\circ\\text{C}$).",
            "**Brazing**: Operates above $450^\\circ\\text{C}$ (typically $600-850^\\circ\\text{C}$) using copper-zinc alloy (spelter) filler, providing far higher structural strength."
        ]
    },
    {
        "id": "wp-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "What is the purpose of earthing in electrical installations?",
        "answer_lines": [
            "Earthing connects the exposed metallic body of electrical equipment to ground via low resistance conductor, diverting fault current safely to earth and tripping circuit breakers to protect humans from fatal electric shocks."
        ]
    },
    {
        "id": "wp-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Shielded Metal Arc Welding (SMAW). Describe equipment, electrode coating functions, and remedies for common welding defects.",
        "answer_lines": [
            "**1. Process Principle**: An electric arc is struck between a flux-coated consumable electrode and the workpiece. Intense arc heat ($3000-4000^\\circ\\text{C}$) melts base metal and electrode tip, creating a molten weld pool that solidifies into a joint.",
            "**2. Functions of Flux Coating**:",
            "• Generates gaseous shield ($\text{CO}_2$, $\text{CO}$) preventing molten pool oxidation from ambient air.",
            "• Produces protective slag covering cooling bead to retard cooling rate and prevent embrittlement.",
            "• Contains deoxidizers and arc stabilizers (potassium/sodium silicate) to maintain steady arc.",
            "**3. Defects & Remedies**:",
            "• **Porosity**: Gas entrapped in bead. *Remedy*: Use dry baked electrodes and clean oil/rust off joint.",
            "• **Undercut**: Groove melted into base metal edge. *Remedy*: Reduce welding current and travel speed.",
            "• **Slag Inclusion**: Trapped slag between weld passes. *Remedy*: Thoroughly chip and wire-brush slag between passes."
        ]
    },
    {
        "id": "wp-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Describe the tools and sequence of operations for making a square step fitting joint in mild steel flat.",
        "answer_lines": [
            "**1. Essential Fitting Tools**:",
            "• Marking: Steel rule, try square, scriber, dot punch, ball peen hammer, surface plate, height gauge.",
            "• Holding & Cutting: Bench vice with soft jaws, hacksaw with high-speed steel (HSS) blade.",
            "• Finishing: Rough bastard file, smooth flat file, square file.",
            "**2. Step-by-Step Procedure**:",
            "• Step 1: Check raw stock dimensions and apply chalk/Prussian blue solution for marking.",
            "• Step 2: File one datum edge flat and check squareness with try square.",
            "• Step 3: File adjacent edge perpendicular to datum edge ($90^\\circ$).",
            "• Step 4: Mark step profile ($20\\text{ mm} \\times 20\\text{ mm}$) using height gauge and punch witness marks.",
            "• Step 5: Saw relief cuts with hacksaw and chisel excess material.",
            "• Step 6: File step surfaces flat and check dimensions with Vernier Caliper to $\\pm 0.05\\text{ mm}$ tolerance."
        ]
    },
    {
        "id": "wp-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain sheet metal fabrication. Describe common sheet metal operations, tools, and the construction of a rectangular tray.",
        "answer_lines": [
            "**1. Operations**:",
            "• **Shearing**: Cutting sheets using straight snips or squaring shears.",
            "• **Blanking & Piercing**: Cutting out outer shape (blanking) or punching interior holes (piercing).",
            "• **Bending**: Creating flanges or seams using folding machines and stakes (hatchet stake, blowhorn stake).",
            "**2. Construction of Rectangular Tray**:",
            "• Calculate sheet blank size: $L_{blank} = L_{tray} + 2h + 2w_{hem}$, where $h$ is tray depth and $w_{hem}$ is hem allowance.",
            "• Mark bend lines and corner relief notches ($45^\\circ$) using scriber.",
            "• Cut corners using straight and curved snips.",
            "• Fold single hem edges using mallet over hatchet stake for edge stiffness.",
            "• Bend four side flanges at $90^\\circ$ and solder/rivet lap joints at corners."
        ]
    },
    {
        "id": "wp-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Describe the construction of a Mortise and Tenon joint in carpentry. Detail timber preparation, marking, cutting, and chiseling.",
        "answer_lines": [
            "**1. Structural Significance**: One of the strongest wood joints, connecting two members at $90^\\circ$ by inserting a projecting peg (tenon) into a corresponding rectangular cavity (mortise).",
            "**2. Sequence of Operations**:",
            "• Step 1: Plane wood pieces to true dimensions ($50\\text{ mm} \\times 50\\text{ mm}$) using jack plane.",
            "• Step 2: Set mortise gauge pins to $1/3$ wood thickness ($16.6\\text{ mm}$) and scribe lines along face.",
            "• Step 3: Cut Tenon cheeks using tenon saw and trim shoulders with fine crosscut saw.",
            "• Step 4: Bore mortise using auger bit or chop from both sides using mortise chisel and wooden mallet.",
            "• Step 5: Test fit, pare high spots with firmer chisel, apply wood glue, and clamp."
        ]
    },
    {
        "id": "wp-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Staircase Wiring using two 2-way SPDT switches. Draw circuit schematic and provide the switching truth table.",
        "answer_lines": [
            "**1. Purpose**: Allows controlling a single lamp independently from either the bottom or top of a staircase.",
            "**2. Circuit Architecture**:",
            "• Two Single-Pole Double-Throw (SPDT) 2-way switches: $S_1$ (bottom) and $S_2$ (top).",
            "• Phase (Live) wire connects to common terminal of $S_1$.",
            "• Neutral wire connects directly to lamp neutral terminal.",
            "• Two traveler wires connect terminal 1 of $S_1$ to terminal 1 of $S_2$, and terminal 2 of $S_1$ to terminal 2 of $S_2$.",
            "• Lamp live terminal connects to common terminal of $S_2$.",
            "**3. Switching Truth Table**:",
            "• $S_1$ at Pos 1, $S_2$ at Pos 1 $\\implies$ Circuit Closed $\\implies$ Lamp ON.",
            "• $S_1$ at Pos 1, $S_2$ at Pos 2 $\\implies$ Circuit Open $\\implies$ Lamp OFF.",
            "• $S_1$ at Pos 2, $S_2$ at Pos 1 $\\implies$ Circuit Open $\\implies$ Lamp OFF.",
            "• $S_1$ at Pos 2, $S_2$ at Pos 2 $\\implies$ Circuit Closed $\\implies$ Lamp ON."
        ]
    }
])

add_paper("workshop", 2, [
    {
        "id": "wp-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Calculate the least count of an Outside Micrometer having a spindle screw pitch of $0.5\\text{ mm}$ and 50 circular thimble divisions.",
        "answer_lines": [
            "$$LC = \\frac{\\text{Pitch of Spindle Screw}}{\\text{Total Number of Thimble Divisions}} = \\frac{0.5\\text{ mm}}{50} = 0.01\\text{ mm}$$"
        ]
    },
    {
        "id": "wp-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Name the three types of Oxy-Acetylene gas flames and their approximate gas ratios.",
        "answer_lines": [
            "1. Neutral Flame ($\\text{O}_2 : \\text{C}_2\\text{H}_2 \\approx 1:1$, temperature $\\approx 3200^\\circ\\text{C}$).",
            "2. Oxidizing Flame ($\\text{O}_2 : \\text{C}_2\\text{H}_2 \\approx 1.5:1$, temperature $\\approx 3500^\\circ\\text{C}$).",
            "3. Carburizing / Reducing Flame ($\\text{O}_2 : \\text{C}_2\\text{H}_2 \\approx 0.9:1$, temperature $\\approx 3000^\\circ\\text{C}$)."
        ]
    },
    {
        "id": "wp-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the standard cylinder color codes for Oxygen and Dissolved Acetylene in gas welding.",
        "answer_lines": [
            "• **Oxygen Cylinder**: Black body with right-hand threaded valve.",
            "• **Dissolved Acetylene Cylinder**: Maroon / Red body with left-hand threaded valve."
        ]
    },
    {
        "id": "wp-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "List four common lathe operations performed on a cylindrical bar.",
        "answer_lines": [
            "1. Facing (flat surface perpendicular to spindle axis).",
            "2. Plain / Straight turning (reducing diameter uniformly).",
            "3. Taper turning (producing conical surfaces).",
            "4. Knurling (producing diamond or straight textured grip pattern)."
        ]
    },
    {
        "id": "wp-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between MCB and RCCB in electrical safety.",
        "answer_lines": [
            "**MCB (Miniature Circuit Breaker)**: Protects wiring from overcurrent and short circuits using bimetallic strip and magnetic coil.",
            "**RCCB (Residual Current Circuit Breaker)**: Detects earth leakage current (phase-neutral imbalance $>30\\text{ mA}$) to prevent human electrocution."
        ]
    },
    {
        "id": "wp-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Describe the main parts of a Center Lathe and explain the Taper Turning method by swiveling the Compound Rest. Calculate swivel angle $\\alpha$ for a taper with $D = 50\\text{ mm}, d = 30\\text{ mm}$, and $L = 60\\text{ mm}$.",
        "answer_lines": [
            "**1. Principal Lathe Parts**:",
            "• **Bed**: Rigid cast-iron structure providing guideways.",
            "• **Headstock**: Houses drive spindle, gears, and chuck to hold workpiece.",
            "• **Tailstock**: Supports long workpieces via dead/live center and holds drill bits.",
            "• **Carriage**: Saddle, cross-slide, compound rest, and tool post for cutting tool feed.",
            "**2. Swiveling Compound Rest Method**: The compound rest base is calibrated in degrees and swiveled to half-taper angle $\\alpha$. Feed is given manually via compound rest handwheel.",
            "**3. Taper Angle Calculation**:",
            "$$\\tan \\alpha = \\frac{D - d}{2L} = \\frac{50 - 30}{2 \\times 60} = \\frac{20}{120} = \\frac{1}{6} \\approx 0.1667$$",
            "$$\\alpha = \\tan^{-1}(0.1667) \\approx 9.46^\\circ \\quad (9^\\circ 28')$$",
            "**Answer**: The compound rest must be swiveled by $9.46^\\circ$."
        ]
    },
    {
        "id": "wp-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain the Oxy-Acetylene gas welding process. Discuss cylinder storage, pressure regulators, torch construction, and safety precautions.",
        "answer_lines": [
            "**1. Operating Principle**: Combustion of acetylene (fuel) with high-purity oxygen produces a high-temperature flame ($3200^\\circ\\text{C}$) to fuse metal edges with or without a filler rod.",
            "**2. Equipment Setup**:",
            "• Acetylene cylinder contains porous mass (calcium silicate) saturated with acetone to safely dissolve unstable acetylene gas under pressure.",
            "• Double-stage pressure regulators reduce cylinder pressure ($15\\text{ bar}$ for acetylene, $150\\text{ bar}$ for oxygen) to working pressure ($0.5\\text{ bar}$ and $2\\text{ bar}$).",
            "• Mixing torch blends gases and delivers them to nozzle orifice.",
            "**3. Safety Measures**:",
            "• Flashback arrestors installed on both fuel and oxygen lines to stop flame back-propagation into hoses.",
            "• Soap water test for hose leak checks (never use open flame). Always keep cylinders upright."
        ]
    },
    {
        "id": "wp-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Describe Green Sand Casting in a foundry. Explain pattern allowances, core making, and gating system components.",
        "answer_lines": [
            "**1. Sand Mold Preparation**: Molding sand mixture consists of silica sand ($85\\%$), bentonite clay binder ($10\\%$), and moisture ($5\\%$). Mold is prepared in two-part flask: Drag (bottom) and Cope (top).",
            "**2. Gating System Components**:",
            "• Pouring Basin: Receives molten metal stream smoothly.",
            "• Sprue: Tapered vertical passage preventing air aspiration.",
            "• Runner & Ingate: Horizontal channels distributing metal into mold cavity.",
            "• Riser: Reservoir supplying molten metal to compensate for liquid and solidification shrinkage.",
            "**3. Pattern Allowances**: Shrinkage allowance (pattern oversized to offset contraction), draft allowance ($1-2^\\circ$ taper for clean withdrawal), and machining allowance."
        ]
    },
    {
        "id": "wp-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain the construction and reading of a Bevel Protractor and a Dial Test Indicator used in metrology.",
        "answer_lines": [
            "**1. Universal Bevel Protractor**:",
            "• Used for precision angular measurement with an accuracy of $5' (5\\text{ arc minutes})$.",
            "• Main scale graduated in degrees ($0-90^\\circ$ in 4 quadrants). Vernier scale divided into 12 parts on each side of zero, where 12 Vernier divisions equal 23 Main scale degrees ($LC = 1/12^\\circ = 5'$).",
            "**2. Dial Test Indicator (DTI)**:",
            "• Precision comparator detecting tiny linear displacements ($0.01\\text{ mm}$ or $0.001\\text{ mm}$).",
            "• Rack and pinion mechanism magnifies stylus motion onto a circular pointer dial.",
            "• Used for checking run-out, parallelism, alignment, and flatness on surface plates."
        ]
    },
    {
        "id": "wp-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain residential single-phase wiring standards. Draw wiring schematic for a fluorescent tube light fixture with choke and starter.",
        "answer_lines": [
            "**1. Standard Wire Color Codes (IS 732)**:",
            "• Phase / Live ($L$): Red (or Brown).",
            "• Neutral ($N$): Black (or Blue).",
            "• Earth ($E$): Green or Green-Yellow stripe.",
            "**2. Tube Light Circuit Operation**:",
            "• Consists of ballast (magnetic choke), glow starter with bimetallic contacts, and fluorescent glass tube coated with phosphor powder and filled with argon gas + mercury droplets.",
            "• When switch is turned on, starter conducts momentarily, heating tube filaments to emit electrons.",
            "• Starter contacts open suddenly, causing choke inductance to generate a high voltage surge ($800-1000\\text{ V}$), ionizing argon gas.",
            "• Mercury vapor emits UV radiation, which strikes phosphor coating, producing visible white light. Choke acts as current limiter during steady operation."
        ]
    }
])

with open("scripts/btech_sem2_part3.json", "w", encoding="utf-8") as f:
    json.dump(subjects_data, f, indent=2)

print("Part 3 (Mechanics + Workshop) written successfully.")
