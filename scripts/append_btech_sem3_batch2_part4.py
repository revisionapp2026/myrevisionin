import json, os

with open('scripts/sem3_btech_batch2_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[f"{sub}:::{num}"] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 10. NETWORK THEORY (B.Tech)
# =========================================================================
add("Network Theory", 1, "Circuit Elements & Laws", [
    "Ideal and Practical Circuit Elements: Independent and dependent voltage and current sources (VCVS, VCCS, CCVS, CCCS); Active vs passive components; Linear vs non-linear elements; Bilateral vs unilateral elements; Lumped vs distributed parameter networks.",
    "Kirchhoff's Laws in Systematic Analysis: Kirchhoff's Current Law (KCL: $\\sum i_k = 0$ at any node) based on conservation of electric charge; Kirchhoff's Voltage Law (KVL: $\\sum v_k = 0$ around any closed loop) based on conservation of energy; Matrix formulation.",
    "Graph Theoretic Topological Matrices: Connected linear graph $G$; Nodes $N$, Branches $B$; Oriented graphs; Complete incidence matrix $A_a$ and Reduced incidence matrix $A$ (rank $N-1$); Tree branches (twigs) and Co-tree chords (links $L = B - N + 1$).",
    "Fundamental Cut-Set and Tie-Set Matrices: Fundamental Cut-Set matrix $Q_f = [I_{N-1} \\mid Q_{12}]$ (each cutset contains exactly one tree branch); Fundamental Tie-Set / Loop matrix $B_f = [B_{11} \\mid I_L]$ (each loop contains exactly one link); Orthogonality relationship: $B_f Q_f^T = 0$ and $A B_f^T = 0$.",
    "Topological Equilibrium Equations: Branch voltage vector $\\mathbf{V}_b = A^T \\mathbf{V}_n$; Node admittance equation matrix: $A Y_b A^T \\mathbf{V}_n = -A (\\mathbf{I}_s - Y_b \\mathbf{V}_s)$; Loop impedance equation matrix: $B_f Z_b B_f^T \\mathbf{I}_l = -B_f (\\mathbf{V}_s - Z_b \\mathbf{I}_s)$.",
    "Source Transformation & Star-Delta Equivalence: Norton-Thevenin source transformations ($V_s = I_s R_s$); Delta-to-Wye ($\\Delta \\to Y$) transformation ($R_1 = \\frac{R_b R_c}{R_a + R_b + R_c}$) and Wye-to-Delta ($Y \\to \\Delta$) transformation ($R_a = R_1 + R_2 + \\frac{R_1 R_2}{R_3}$).",
    "Nodal Analysis with Supernodes: Treatment of ideal voltage sources connected between two non-reference nodes; Supernode boundary construction; Combining KCL node equations with internal constraint voltage equations.",
    "Mesh Analysis with Supermeshes: Treatment of ideal current sources shared between two adjacent meshes; Supermesh boundary construction by conceptually opening current source; Combining KVL loop equations with branch current constraint equations.",
    "Duality in Electrical Networks: Concept of dual networks; Dual pairs (Node $\\leftrightarrow$ Mesh, Tree $\\leftrightarrow$ Co-tree, Twig $\\leftrightarrow$ Link, Impedance $\\leftrightarrow$ Admittance, Series $\\leftrightarrow$ Parallel, KCL $\\leftrightarrow$ KVL); Geometric construction of dual graphs for planar networks.",
    "University Examination Strategy: Construct fundamental cutset and tieset matrices for 5-node 8-branch planar circuits, derive node equations in matrix format using graph matrices, and solve circuits containing multiple controlled sources using supernode techniques."
], [
    "KCL Charge Conservation: $\\sum_{k} I_k = 0$ at every isolated topological boundary.",
    "KVL Energy Conservation: $\\sum_{k} V_k = 0$ around any closed loop.",
    "Number of Tree Twigs: Exactly $N - 1$, where $N$ is total node count.",
    "Number of Fundamental Loops: $L = B - N + 1$, where $B$ is total branch count.",
    "Orthogonality of Loops and Cutsets: $B_f Q_f^T = 0$ and $Q_f B_f^T = 0$.",
    "Branch Voltage from Node Voltage: $\\mathbf{V}_b = A^T \\mathbf{V}_n$.",
    "Delta-to-Star Conversion: $R_1 = \\frac{R_{12} R_{31}}{R_{12} + R_{23} + R_{31}}$.",
    "Star-to-Delta Conversion: $R_{12} = R_1 + R_2 + \\frac{R_1 R_2}{R_3}$.",
    "Dual Network Principle: A planar graph with $M$ meshes has a dual graph with $M+1$ nodes.",
    "Exam Gold Tip: When forming fundamental cut-sets, remember that each cut-set must contain strictly one tree branch and a unique set of links."
])

add("Network Theory", 2, "Network Theorems", [
    "Axiomatic Foundations of Network Theorems: Linear time-invariant (LTI) lumped parameter networks; Homogeneity and Additivity; S-domain representation of linear networks.",
    "Superposition Theorem in Multi-Source Networks: Branch current/voltage calculation by summing contributions from individual independent sources; Handling dependent sources (controlled sources remain connected and active throughout all calculation stages); Power non-linearity caveat (power cannot be found by superposition).",
    "Thevenin's Theorem with Dependent Sources: Equivalent voltage source $V_{th}$ (open-circuit voltage across terminals $A-B$); Equivalent resistance $R_{th}$: Method 1 (open-circuit/short-circuit ratio $R_{th} = V_{oc} / I_{sc}$), Method 2 (deactivate independent sources and apply 1 V test voltage or 1 A test current source: $R_{th} = V_{test} / I_{test}$).",
    "Norton's Theorem & Dual Formulations: Norton short-circuit current source $I_N = I_{sc}$; Norton equivalent conductance $G_N = 1 / R_{th}$; Equivalence and conversion between Thevenin and Norton representations.",
    "Maximum Power Transfer Theorem in Complex Networks: DC maximum power condition: $R_L = R_{th}$; AC maximum power transfer with variable load impedance: $Z_L = Z_{th}^*$ (complex conjugate match); Variable load resistance with fixed reactance: $R_L = \\sqrt{R_{th}^2 + (X_{th} + X_L)^2}$; Load angle adjustment.",
    "Reciprocity Theorem and S-Parameters: Verification of reciprocity in two-port passive networks: $Z_{12} = Z_{21}$ and $Y_{12} = Y_{21}$; Physical interpretation in terms of electromagnetic Lorentz reciprocity; Failure of reciprocity in the presence of controlled sources, gyrators, or magnetized ferrites.",
    "Millman's Network Reduction Theorem: Parallel voltage source branch reduction: $V_m = \\frac{\\sum_{k=1}^n V_k Y_k}{\\sum_{k=1}^n Y_k}$; Series current source branch reduction: $I_m = \\frac{\\sum_{k=1}^n I_k Z_k}{\\sum_{k=1}^n Z_k}$; Fast solution of three-phase unbalanced star-connected neutral displacement voltages.",
    "Tellegen's Generalized Theorem: Power conservation in topological networks: $\\sum_{k=1}^B v_k(t) i_k(t) = 0$; Quasi-Tellegen theorem: if two networks $N$ and $\\hat{N}$ have identical topological graphs, then $\\sum_{k=1}^B v_k \\hat{i}_k = 0$ and $\\sum_{k=1}^B \\hat{v}_k i_k = 0$; Proof of reciprocity and sensitivity analysis using adjoint networks.",
    "Compensation and Substitution Theorems: Compensation Theorem: change in branch impedance $\\Delta Z$ produces branch current changes identical to inserting an opposing series voltage generator $V_c = I \\Delta Z$; Substitution Theorem: any branch carrying known current and voltage may be replaced by an independent source.",
    "University Examination Strategy: Solve complex transistor biasing networks using Thevenin equivalent with dependent source test generators, apply Maximum Power Transfer theorem to AC transformer-coupled circuits, and verify Tellegen's theorem on multi-branch networks."
], [
    "Thevenin Test Source Method: $R_{th} = \\frac{V_{test}}{I_{test}}$ with all independent sources killed.",
    "Norton Current Identity: $I_N = I_{sc} = \\frac{V_{oc}}{R_{th}}$.",
    "Max Power Pure Resistive Load: $R_L = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}$.",
    "Max Power Transfer Efficiency: Maximum power transfer yields strictly $50\\%$ efficiency.",
    "Reciprocity Parameter Test: $Z_{12} = Z_{21}$ and $Y_{12} = Y_{21}$ in linear bilateral passive networks.",
    "Millman Neutral Displacement: $V_{n'n} = \\frac{V_{an} Y_a + V_{bn} Y_b + V_{cn} Y_c}{Y_a + Y_b + Y_c}$.",
    "Tellegen Invariant Formula: $\\sum_{k=1}^B v_k(t) i_k(t) = 0$ (independent of linearity or time-invariance).",
    "Quasi-Tellegen Relation: $\\sum_{k=1}^B v_k \\hat{\\imath}_k = 0$ for networks sharing identical digraph topology.",
    "Compensation Voltage Generator: $V_c = -I \\Delta Z$ (series voltage source opposing original current).",
    "Exam Gold Tip: Superposition cannot be applied directly to calculate power ($P \\ne P_1 + P_2$); you must find total current or voltage first, then calculate $P = I^2 R$."
])

add("Network Theory", 3, "Transient Analysis", [
    "Physical Mechanics of Switching Transients: Energy storage in magnetic fields ($E_L = \\frac{1}{2} L i^2$) and electric fields ($E_C = \\frac{1}{2} C v^2$); Mathematical justification of boundary continuity conditions: $i_L(0^+) = i_L(0^-)$ and $v_C(0^+) = v_C(0^-)$; Evaluation of higher derivatives $\\frac{di_L}{dt}(0^+), \\frac{dv_C}{dt}(0^+)$ via differential equations.",
    "Classical Differential Equation Transient Solutions: Homogeneous complementary function (transient / natural response) and particular integral (steady-state / forced response); Complete solution $x(t) = x_c(t) + x_p(t)$; Determination of arbitrary constants from boundary initial values.",
    "First-Order RL and RC Switching Responses: Step, pulse, and impulse excitation; Growth and decay of current in RL circuits ($i(t) = \\frac{V}{R}(1 - e^{-t/\\tau})$ where $\\tau = L/R$); Charging and discharging of capacitors ($v(t) = V(1 - e^{-t/\\tau})$ where $\\tau = R C$); Transient energy dissipation balance.",
    "Second-Order Series RLC Circuits: Characteristic equation $s^2 + \\frac{R}{L} s + \\frac{1}{LC} = 0$; Attenuation constant $\\alpha = R / (2L)$; Resonant undamped frequency $\\omega_0 = 1 / \\sqrt{LC}$; Damping ratio $\\zeta = \\alpha / \\omega_0 = \\frac{R}{2} \\sqrt{\\frac{C}{L}}$; Analysis of Overdamped, Critically Damped, and Underdamped waveforms.",
    "Second-Order Parallel RLC Circuits: Dual characteristic equation $s^2 + \\frac{1}{RC} s + \\frac{1}{LC} = 0$; Attenuation constant $\\alpha = 1 / (2RC)$; Quality factor $Q = \\omega_0 R C$; Damping ratio $\\zeta = 1 / (2\\omega_0 R C) = \\frac{1}{2R}\\sqrt{\\frac{L}{C}}$.",
    "Transients in Magnetically Coupled Circuits: Coupled differential equations with mutual inductance $M$; Reflected impedance transients; Current growth in primary and secondary coils under sudden DC step voltage switching.",
    "Laplace Transform in Network Transient Synthesis: S-domain equivalent circuit representations; Inductor model: series impedance $s L$ with initial flux source $L i_L(0^-)$; Capacitor model: impedance $1/(s C)$ with initial charge source $v_C(0^-)/s$; Systematic nodal and loop formulation in $s$-domain.",
    "State-Space Modeling of Dynamic Networks: Selection of independent state vector $\\mathbf{x}(t) = [v_C(t), i_L(t)]^T$; Standard matrix form: $\\mathbf{\\dot{x}} = A \\mathbf{x} + B \\mathbf{u}$; Output equation: $\\mathbf{y} = C \\mathbf{x} + D \\mathbf{u}$; System poles as eigenvalues of matrix $A$ ($\\det(s I - A) = 0$).",
    "State Transition Matrix and Closed-Form Solution: State transition matrix $\\Phi(t) = e^{A t} = \\mathcal{L}^{-1}\\{(s I - A)^{-1}\\}$; Cayley-Hamilton theorem method for matrix exponential evaluation; Complete state trajectory: $\\mathbf{x}(t) = \\Phi(t) \\mathbf{x}(0) + \\int_0^t \\Phi(t - \\tau) B \\mathbf{u}(\\tau) d\\tau$.",
    "University Examination Strategy: Calculate immediate post-switching derivatives $\\frac{d^2 i}{dt^2}(0^+)$ in multi-loop RLC networks, solve second-order RLC transient differential equations with non-zero initial energy storage, and compute state transition matrices using Cayley-Hamilton theorem."
], [
    "Capacitor Voltage Continuity: $v_C(0^+) = v_C(0^-)$ (infinite current required to alter charge instantaneously).",
    "Inductor Current Continuity: $i_L(0^+) = i_L(0^-)$ (infinite voltage required to alter flux instantaneously).",
    "Series RLC Damping Factor: $\\alpha = \\frac{R}{2L}$, $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$.",
    "Parallel RLC Damping Factor: $\\alpha = \\frac{1}{2RC}$, $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, $\\zeta = \\frac{1}{2R}\\sqrt{\\frac{L}{C}}$.",
    "Underdamped Oscillatory Frequency: $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$.",
    "Critically Damped Condition: $\\alpha = \\omega_0 \\implies R = 2\\sqrt{\\frac{L}{C}}$ (series RLC).",
    "S-Domain Inductor Model: $V(s) = s L I(s) - L i(0^-)$.",
    "S-Domain Capacitor Model: $I(s) = s C V(s) - C v(0^-)$.",
    "State-Space Standard Form: $\\mathbf{\\dot{x}}(t) = A \\mathbf{x}(t) + B \\mathbf{u}(t)$.",
    "Exam Gold Tip: In state variable formulation, the number of independent state variables equals the number of reactive elements ($L$ and $C$) that do not form all-capacitor loops or all-inductor cutsets."
])

add("Network Theory", 4, "AC Circuit Analysis", [
    "Sinusoidal Steady-State Phasor Analysis: Phasor domain transformations; Impedance and admittance triangles; Voltage and current divider rules in phasor notation; Steady-state AC nodal and mesh analysis.",
    "Resonance Phenomena in Complex Networks: Series resonance ($Z = R$, unity power factor, minimum impedance, maximum current); Parallel resonance ($Y = G$, anti-resonance, maximum impedance, minimum line current); Selectivity curve; Quality factor ($Q = 2\\pi \\frac{\\text{Max energy stored}}{\\text{Energy dissipated per cycle}}$); Half-power bandwidth $BW = f_0 / Q$.",
    "Magnetically Coupled Circuits: Faraday's and Lenz's laws; Coefficient of coupling $k = \\frac{M}{\\sqrt{L_1 L_2}}$ ($0 \\le k \\le 1$); Dot convention rules for establishing mutual voltage polarities; Mesh analysis of circuits containing air-core and iron-core coupled coils.",
    "Equivalent Conductive T and $\\pi$ Models of Coupled Coils: Conductive T-equivalent circuit for coupled inductor pair sharing common reference terminal: arms $L_1 - M, L_2 - M$, and shunt leg $M$; Ideal transformer relationships ($V_1/V_2 = N_1/N_2 = a, I_1/I_2 = 1/a$, impedance reflection $Z_{in} = a^2 Z_L$).",
    "Polyphase Balanced Three-Phase Systems: Generation of balanced 3-phase voltages ($120^\\circ$ phase separation); Phase sequence ($R-Y-B$ positive sequence vs $R-B-Y$ negative sequence); Star (Wye) connection: line voltage $V_L = \\sqrt{3} V_{ph} \\angle +30^\\circ$, line current $I_L = I_{ph}$; Delta (Mesh) connection: line voltage $V_L = V_{ph}$, line current $I_L = \\sqrt{3} I_{ph} \\angle -30^\\circ$.",
    "Power Measurement in Three-Phase Circuits: Total 3-phase active power $P = \\sqrt{3} V_L I_L \\cos\\theta$; Total reactive power $Q = \\sqrt{3} V_L I_L \\sin\\theta$; Total apparent power $S = \\sqrt{3} V_L I_L$; Three-wattmeter method for 4-wire unbalanced systems.",
    "Two-Wattmeter Method for 3-Phase Power Measurement: Applicable to balanced and unbalanced 3-wire star or delta loads; Wattmeter readings: $W_1 = V_L I_L \\cos(30^\\circ - \\theta)$, $W_2 = V_L I_L \\cos(30^\\circ + \\theta)$; Total active power $P = W_1 + W_2$; Total reactive power $Q = \\sqrt{3}(W_1 - W_2)$; Load power factor angle: $\\tan\\theta = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$.",
    "Power Factor Cases in Two-Wattmeter Method: (1) Unity PF ($\\theta = 0^\\circ$): $W_1 = W_2 > 0$; (2) $\\text{PF} = 0.5$ lagging ($\\theta = 60^\\circ$): $W_2 = 0, W_1 = P$; (3) $\\text{PF} < 0.5$ ($\\theta > 60^\\circ$): $W_2$ reads negative (requires current-coil reversal); (4) Zero PF ($\\theta = 90^\\circ$): $W_1 = -W_2$.",
    "Unbalanced Three-Phase Load Analysis: Star-connected unbalanced load with floating neutral: Millman's neutral displacement voltage method $V_{n'n} = \\frac{\\sum V_k Y_k}{\\sum Y_k}$; Delta-connected unbalanced load: direct line voltage phase-by-phase application; Mesh current method for 3-wire unbalanced systems.",
    "University Examination Strategy: Solve coupled inductor mesh equations with exact dot polarity markings, calculate load power factor and reactive power from two-wattmeter readings including negative meter reading conditions, and compute neutral displacement voltage in unbalanced star loads."
], [
    "Star Line-Phase Voltage: $V_L = \\sqrt{3} V_{ph} \\angle 30^\\circ$ with $I_L = I_{ph}$.",
    "Delta Line-Phase Current: $I_L = \\sqrt{3} I_{ph} \\angle -30^\\circ$ with $V_L = V_{ph}$.",
    "Total Three-Phase Power: $P_{3\\phi} = \\sqrt{3} V_L I_L \\cos\\theta = 3 V_{ph} I_{ph} \\cos\\theta$.",
    "Two-Wattmeter Sum: $W_1 + W_2 = \\sqrt{3} V_L I_L \\cos\\theta = P_{total}$.",
    "Two-Wattmeter Difference: $W_1 - W_2 = V_L I_L \\sin\\theta$.",
    "Two-Wattmeter Power Factor Angle: $\\tan\\theta = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$.",
    "Two-Wattmeter PF = 0.5 Criterion: $W_2 = 0$ and $W_1 = P$ (one wattmeter reads zero).",
    "Two-Wattmeter PF < 0.5 Criterion: One wattmeter deflects backwards and yields a negative reading.",
    "Coupling Coefficient Formula: $k = \\frac{M}{\\sqrt{L_1 L_2}} \\le 1$.",
    "Exam Gold Tip: In the two-wattmeter method, if power factor is less than 0.5 lagging, the reading of the second wattmeter is negative; record it as $-W_2$ when summing total power."
])

add("Network Theory", 5, "Two-Port Networks", [
    "Two-Port Network Parameter Formulations: Port condition verification; Terminal relationships: Impedance parameters $[Z]$ ($V_1, V_2$ in terms of $I_1, I_2$); Admittance parameters $[Y]$ ($I_1, I_2$ in terms of $V_1, V_2$); Hybrid parameters $[h]$ ($V_1, I_2$ in terms of $I_1, V_2$); Inverse hybrid parameters $[g]$ ($I_1, V_2$ in terms of $V_1, I_2$).",
    "Transmission ABCD Parameters: Transmission parameters $[T]$: $\\begin{bmatrix} V_1 \\\\ I_1 \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} V_2 \\\\ -I_2 \\end{bmatrix}$; Inverse transmission parameters $[T']$: $V_2 = A' V_1 - B' I_1, I_2 = C' V_1 - D' I_1$; Cascaded two-port networks.",
    "Conditions for Reciprocity and Symmetry: Reciprocity: $Z_{12} = Z_{21}$, $Y_{12} = Y_{21}$, $h_{12} = -h_{21}$, $g_{12} = -g_{21}$, $A D - B C = 1$; Symmetry: $Z_{11} = Z_{22}$, $Y_{11} = Y_{22}$, $h_{11} h_{22} - h_{12} h_{21} = 1$, $A = D$.",
    "Two-Port Parameter Matrix Conversions: Comprehensive inter-parameter formulas: $[Y] = [Z]^{-1}$; $A = Z_{11}/Z_{21}$, $B = \\Delta Z / Z_{21}$, $C = 1 / Z_{21}$, $D = Z_{22} / Z_{21}$; $h_{11} = \\Delta Z / Z_{22}$, $h_{12} = Z_{12} / Z_{22}$, $h_{21} = -Z_{21} / Z_{22}$, $h_{22} = 1 / Z_{22}$.",
    "Equivalent Networks (T and $\\pi$ Representations): Conversion of arbitrary reciprocal two-port network into equivalent T-network ($Z_a = Z_{11} - Z_{12}, Z_b = Z_{22} - Z_{12}, Z_c = Z_{12}$) and equivalent $\\pi$-network ($Y_a = Y_{11} + Y_{12}, Y_b = Y_{22} + Y_{12}, Y_c = -Y_{12}$).",
    "Interconnection of Two-Port Networks: (1) Series-series connection: $[Z] = [Z_1] + [Z_2]$; (2) Parallel-parallel connection: $[Y] = [Y_1] + [Y_2]$; (3) Series-parallel connection: $[h] = [h_1] + [h_2]$; (4) Parallel-series connection: $[g] = [g_1] + [g_2]$; (5) Cascade connection: $[T] = [T_1] [T_2]$; Brune's test for port condition validity.",
    "Lattice Networks and Bridge-T Networks: Symmetrical lattice network: series arms $Z_a$, diagonal cross arms $Z_b$; Open-circuit and short-circuit impedances: $Z_{11} = \\frac{Z_a + Z_b}{2}, Z_{12} = \\frac{Z_b - Z_a}{2}$; Bartlett's Bisection Theorem: bisection of symmetrical networks into half-circuits.",
    "Terminated Two-Port Network Transfer Functions: Operating with source impedance $Z_s$ and load impedance $Z_L$; Driving point input impedance $Z_{in} = \\frac{A Z_L + B}{C Z_L + D}$; Driving point output impedance $Z_{out} = \\frac{D Z_s + B}{C Z_s + A}$; Voltage transfer ratio $A_v = \\frac{V_2}{V_1} = \\frac{Z_L}{A Z_L + B}$; Current transfer ratio $A_i = \\frac{-I_2}{I_1} = \\frac{1}{C Z_L + D}$.",
    "Scattering ($S$) Parameters in High-Frequency Networks: Incident normalized power waves $a_1, a_2$ and reflected power waves $b_1, b_2$; Characteristic reference impedance $Z_0$; $S$-matrix: $b_1 = S_{11} a_1 + S_{12} a_2, b_2 = S_{21} a_1 + S_{22} a_2$; Return loss $RL = -20\\log_{10}|S_{11}|$; Insertion loss $IL = -20\\log_{10}|S_{21}|$; Unitary property of lossless networks ($S^H S = I$).",
    "University Examination Strategy: Determine $Z, Y$, and $ABCD$ parameters for symmetrical bridged-T networks, verify network reciprocity and symmetry from parameter definitions, evaluate cascade transmission matrices, and apply Bartlett's bisection theorem to convert ladder sections into equivalent lattices."
], [
    "Z-Parameter Reciprocity: $Z_{12} = Z_{21}$; Symmetry: $Z_{11} = Z_{22}$.",
    "Y-Parameter Reciprocity: $Y_{12} = Y_{21}$; Symmetry: $Y_{11} = Y_{22}$.",
    "ABCD Reciprocity: $A D - B C = 1$; Symmetry: $A = D$.",
    "h-Parameter Reciprocity: $h_{12} = -h_{21}$; Symmetry: $\\Delta h = 1$.",
    "Series-Series Matrix Addition: $[Z]_{total} = [Z_A] + [Z_B]$.",
    "Parallel-Parallel Matrix Addition: $[Y]_{total} = [Y_A] + [Y_B]$.",
    "Cascade Chain Multiplication: $[T]_{total} = [T_A] [T_B]$.",
    "Symmetrical Lattice Z-Parameters: $Z_{11} = \\frac{Z_a + Z_b}{2}$, $Z_{12} = \\frac{Z_b - Z_a}{2}$.",
    "Terminated Two-Port Voltage Gain: $A_v = \\frac{Z_L}{A Z_L + B}$.",
    "Exam Gold Tip: For cascade connections, the overall transmission matrix is obtained by matrix multiplication in strictly left-to-right signal flow order: $[T]_{total} = [T_1] [T_2]$."
])

# Save completed batch 2
with open('scripts/sem3_btech_batch2_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 2 COMPLETE: total units now: {len(data)}")
