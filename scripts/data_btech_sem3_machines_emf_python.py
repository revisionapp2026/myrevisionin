"""
Electrical Machines, EMF, Python for Data Science, and Advanced OOP for B.Tech Semester 3.
"""

machines_emf_python_units = {
    # 13 & 14. ELECTRICAL MACHINES
    "btech-machines: transformers": {
        "highlights": [
            "Transformer Operating Principle: Static electromagnetic device transferring AC electrical energy between circuits via mutual magnetic induction without frequency change.",
            "EMF Equation of a Transformer: RMS induced EMF $E_1 = 4.44 f N_1 \\Phi_m$ and $E_2 = 4.44 f N_2 \\Phi_m$, where $f$ is frequency, $N$ is turns, and $\\Phi_m = B_m A_c$ is peak core flux.",
            "Ideal vs Practical Transformer: Ideal transformer has zero winding resistance, zero core loss, and infinite permeability; Practical transformer models copper losses ($I^2 R$), core hysteresis/eddy-current losses, and leakage flux ($X_l$).",
            "Equivalent Circuit Representation: Primary and secondary parameters referred to either side using transformation ratio $k = N_2 / N_1$; $R_2' = R_2 / k^2$ and $X_2' = X_2 / k^2$; shunt branch ($R_c, X_m$) models magnetizing current.",
            "Open-Circuit (OC) Test: Performed at rated voltage on low-voltage side with high-voltage side open; wattmeter measures no-load core iron losses ($P_i = P_h + P_e$); computes shunt parameters $R_c$ and $X_m$.",
            "Short-Circuit (SC) Test: Performed at rated current on high-voltage side with low-voltage side short-circuited; wattmeter measures full-load copper losses ($P_{cu}$); computes series parameters $R_{eq}$ and $X_{eq}$.",
            "Voltage Regulation: Fractional change in terminal voltage from no-load to full-load: $VR = \\frac{V_{2,NL} - V_{2,FL}}{V_{2,FL}} = \\frac{I_2 R_{eq2} \\cos \\phi_2 \\pm I_2 X_{eq2} \\sin \\phi_2}{V_2}$ (+ for lagging, - for leading pf).",
            "Transformer Efficiency & Condition for Maximum: Thermal efficiency $\\eta = \\frac{V_2 I_2 \\cos \\phi}{V_2 I_2 \\cos \\phi + P_i + I_2^2 R_{eq2}}$; maximum efficiency occurs when variable copper loss equals constant iron core loss ($I_2^2 R_{eq2} = P_i$).",
            "Auto-Transformers: Single continuous winding with tapped connection acting as both primary and secondary; saves copper by fraction $(1 - 1/k)$ compared to two-winding transformers.",
            "Three-Phase Transformer Connections: Star-Star (Y-Y), Delta-Delta ($\\Delta-\\Delta$), Star-Delta (Y-$\\Delta$, popular step-down with $-30^\\circ$ phase shift), and Delta-Star ($\\Delta$-Y step-up with $+30^\\circ$ phase shift)."
        ],
        "keyPoints": [
            "EMF Equation: $E = 4.44 f N \\Phi_m = 4.44 f N B_m A$.",
            "Transformation Ratio: $k = \\frac{N_2}{N_1} = \\frac{E_2}{E_1} = \\frac{I_1}{I_2}$.",
            "Parameter Referral Rule: Resistance referred to primary: $R_2' = \\frac{R_2}{k^2}$; Referred to secondary: $R_1' = k^2 R_1$.",
            "Maximum Efficiency Condition: $\\text{Copper Loss} = \\text{Iron Loss}$ ($I_2^2 R_{eq2} = P_i$); Load current at peak efficiency: $I_{2,max} = I_{2,FL} \\sqrt{\\frac{P_i}{P_{cu,FL}}}$.",
            "Voltage Regulation Formula: $VR = \\frac{I_2 R_{eq2} \\cos \\phi_2 \\pm I_2 X_{eq2} \\sin \\phi_2}{V_2}$; zero regulation occurs at leading power factor: $\\tan \\phi_2 = -\\frac{R_{eq2}}{X_{eq2}}$.",
            "Core Losses Breakdown: Hysteresis loss $P_h = k_h f B_m^{1.6}$ (Steinmetz formula); Eddy current loss $P_e = k_e f^2 B_m^2 t^2$.",
            "All-Day Efficiency: Evaluates distribution transformers operating on 24-hour variable duty cycles: $\\eta_{all-day} = \\frac{\\text{Energy Output (kWh)}}{\\text{Energy Input (kWh)}}$.",
            "Auto-Transformer Copper Saving: $\\text{Weight of Copper in Auto} = (1 - k) \\times \\text{Weight of Copper in 2-Winding}$ (for $k < 1$).",
            "Open Delta (V-V) Connection: If one transformer in a $\\Delta-\\Delta$ bank fails, the remaining two operate in V-V configuration, delivering $57.7\\%$ of original bank capacity.",
            "Exam Phasor Diagram Tip: When drawing transformer phasor diagrams on inductive load, draw $I_2$ lagging $V_2$, add $I_2 R_{eq}$ parallel to $I_2$, and add $I_2 X_{eq}$ perpendicular ($+90^\\circ$)."
        ]
    },
    "btech-machines: dc machines": {
        "highlights": [
            "DC Machine Physical Construction: Yoke (magnetic outer frame), Field poles with pole shoes, Armature core (laminated high-permeability steel), Armature windings (lap or wave), Commutator segments, and Carbon brushes.",
            "EMF Equation of DC Generator: Induced rotational EMF $E_g = \\frac{\\Phi Z N P}{60 A}$, where $\\Phi$ is flux per pole, $Z$ is total conductors, $N$ is speed in RPM, $P$ is poles, and $A$ is parallel paths ($A = P$ for lap, $A = 2$ for wave).",
            "Armature Windings Classification: Lap winding ($A = P$, used for high-current, low-voltage machines; requires equalizer rings); Wave winding ($A = 2$, used for high-voltage, low-current machines).",
            "Armature Reaction: Magnetic field distortion caused by flux produced by armature conductors carrying load current; causes cross-magnetizing distortion (shifts Magnetic Neutral Axis MNA) and demagnetizing weakening.",
            "Commutation & Interpoles: Reversal of current in armature coils as they pass under brushes; reactance voltage $e_r = L \\frac{di}{dt}$ causes sparking; mitigated using interpoles (commutating poles) and compensating windings.",
            "DC Generator Characteristics: Open-Circuit Characteristic (OCC or magnetization curve: $E_0$ vs $I_f$ at constant speed); Internal characteristic ($E$ vs $I_a$); External characteristic ($V$ vs $I_L$) exhibiting drooping voltage.",
            "DC Motor Principle & Back EMF: Current-carrying conductor in magnetic field experiences Lorentz force $\\vec{F} = I(\\vec{l} \\times \\vec{B})$; Back EMF $E_b = \\frac{\\Phi Z N P}{60 A} = V - I_a R_a$ acts as automatic self-regulating governor.",
            "DC Motor Torque Equation: Developed electromagnetic torque $T = \\frac{1}{2\\pi} \\frac{\\Phi Z I_a P}{A} = 0.159 \\Phi Z I_a \\left(\\frac{P}{A}\\right)$; shows $T \\propto \\Phi I_a$.",
            "DC Motor Types & Characteristics: Shunt Motor ($T \\propto I_a, N \\approx \\text{constant}$, constant speed applications); Series Motor ($T \\propto I_a^2, N \\propto 1/\\sqrt{T}$, high starting torque, never run without load); Compound Motor.",
            "Speed Control & Starters: Speed equation $N \\propto \\frac{V - I_a R_a}{\\Phi}$; Armature resistance control, Field flux control, and Ward-Leonard variable-voltage system; 3-point and 4-point starters protect against starting inrush current."
        ],
        "keyPoints": [
            "DC EMF Formula: $E = \\frac{\\Phi Z N P}{60 A}$; Lap winding $A = P$; Wave winding $A = 2$.",
            "DC Torque Formula: $T = \\frac{1}{2\\pi} \\frac{P}{A} \\Phi Z I_a = 0.159 \\Phi Z I_a \\frac{P}{A}$ N$\\cdot$m.",
            "Speed-Voltage Relationship: $N = \\frac{V - I_a R_a}{k \\Phi}$; Speed is directly proportional to back EMF and inversely proportional to field flux.",
            "Series Motor No-Load Warning: At zero load ($I_a \\to 0$), flux $\\Phi \\to 0$, causing motor speed to rise to dangerously destructive runaway levels ($N \\to \\infty$).",
            "Critical Field Resistance ($R_c$): Slope of tangent to OCC curve through origin at rated speed; generator fails to self-excite if field resistance $R_f > R_c$.",
            "Critical Speed ($N_c$): Speed below which the generator will not build up voltage for a given field resistance.",
            "Interpoles Connection: Connected in series with the armature so that their magnetic flux automatically balances armature reaction over all load levels.",
            "Swinburne's Test: Indirect method testing no-load losses; cannot be applied to series motors (which cannot run at no-load).",
            "Hopkinson's Test: Regenerative back-to-back test running two identical coupled DC machines; measures full-load losses while consuming only loss power from mains.",
            "Exam Shunt vs Series Contrast: Shunt motor speed drops only slightly ($\le 5\%$) from no-load to full-load; Series motor speed drops hyperlinearly with load."
        ]
    },

    # 15. ELECTROMAGNETIC FIELDS
    "btech-emf: vector analysis & electrostatics": {
        "highlights": [
            "Coordinate Systems & Differential Elements: Cartesian $(x, y, z)$, Cylindrical $(r, \\phi, z)$, and Spherical $(r, \\theta, \\phi)$; differential length $d\\vec{l}$, differential surface $d\\vec{S}$, and differential volume $dV$.",
            "Vector Differential Operators: Gradient $\\nabla V = \\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}$ (spatial rate of change); Divergence $\\nabla \\cdot \\vec{D}$ (net outward flux per unit volume); Curl $\\nabla \\times \\vec{H}$ (circulation density).",
            "Divergence & Stokes' Theorems: Divergence Theorem: $\\oint_S \\vec{A} \\cdot d\\vec{S} = \\int_V (\\nabla \\cdot \\vec{A}) dV$; Stokes' Theorem: $\\oint_C \\vec{A} \\cdot d\\vec{l} = \\int_S (\\nabla \\times \\vec{A}) \\cdot d\\vec{S}$.",
            "Coulomb's Law & Electric Field: Force between point charges $\\vec{F} = \\frac{q_1 q_2}{4\\pi \\varepsilon_0 r^2} \\hat{r}$; Electric field intensity $\\vec{E} = \\frac{\\vec{F}}{q}$; Permittivity of free space $\\varepsilon_0 \\approx 8.854 \\times 10^{-12}\\text{ F/m}$.",
            "Gauss's Law & Electric Flux Density: Electric flux density $\\vec{D} = \\varepsilon \\vec{E}$; Integral form: $\\oint_S \\vec{D} \\cdot d\\vec{S} = Q_{enc}$; Point (differential) form: $\\nabla \\cdot \\vec{D} = \\rho_v$ (Maxwell's first equation).",
            "Electric Potential & Conservative Fields: Electric potential $V = -\\int_\\infty^r \\vec{E} \\cdot d\\vec{l}$; Electrostatic field is conservative: $\\oint \\vec{E} \\cdot d\\vec{l} = 0 \\implies \\nabla \\times \\vec{E} = 0$; Relation: $\\vec{E} = -\\nabla V$.",
            "Poisson's & Laplace's Equations: Derived by substituting $\\vec{E} = -\\nabla V$ into Gauss's law: Poisson's equation $\\nabla^2 V = -\\frac{\\rho_v}{\\varepsilon}$; in charge-free region ($\\rho_v = 0$), reduces to Laplace's equation $\\nabla^2 V = 0$.",
            "Uniqueness Theorem: A solution to Poisson's or Laplace's equation that satisfies prescribed Dirichlet ($V$ specified) or Neumann ($\\frac{\\partial V}{\\partial n}$ specified) boundary conditions is unique.",
            "Dielectric Boundary Conditions: Tangential electric field is continuous: $E_{1t} = E_{2t}$; Normal electric flux density is discontinuous by surface charge: $D_{1n} - D_{2n} = \\rho_s$; if interface is charge-free: $D_{1n} = D_{2n}$.",
            "Capacitance & Electrostatic Energy: Capacitance $C = Q / V$; Parallel plate $C = \\frac{\\varepsilon A}{d}$; Coaxial cylinder $C = \\frac{2\\pi \\varepsilon L}{\\ln(b/a)}$; Electrostatic energy density $w_e = \\frac{1}{2} \\vec{D} \\cdot \\vec{E} = \\frac{1}{2} \\varepsilon E^2\\text{ J/m}^3$."
        ],
        "keyPoints": [
            "Gauss's Law: $\\oint_S \\vec{D} \\cdot d\\vec{S} = Q_{enc}$ and $\\nabla \\cdot \\vec{D} = \\rho_v$.",
            "Conservative Electric Field: $\\nabla \\times \\vec{E} = 0 \\implies \\vec{E} = -\\nabla V$.",
            "Poisson's & Laplace's Equations: Poisson: $\\nabla^2 V = -\\frac{\\rho_v}{\\varepsilon}$; Laplace: $\\nabla^2 V = 0$.",
            "Dielectric Boundary Rules: $E_{1t} = E_{2t}$ (tangential $E$ continuous); $D_{1n} - D_{2n} = \\rho_s$ (normal $D$ step jump).",
            "Conductor Boundary Conditions: Inside ideal conductor $\\vec{E} = 0, V = \\text{constant}$; At surface: $E_t = 0$ and $D_n = \\rho_s$.",
            "Parallel Plate Capacitance: $C = \\frac{\\varepsilon_r \\varepsilon_0 A}{d}$.",
            "Spherical Capacitor: $C = 4\\pi \\varepsilon \\left(\\frac{a b}{b - a}\\right)$; Isolated sphere of radius $a$: $C = 4\\pi \\varepsilon a$.",
            "Electrostatic Energy: $W_E = \\frac{1}{2} C V^2 = \\frac{1}{2} \\int_V \\varepsilon |\\vec{E}|^2 dV$.",
            "Method of Images: Replaces conducting ground plane with mirror image charge of opposite polarity ($-q$ at distance $-h$) to simplify boundary potential calculations.",
            "Exam Vector Tip: Remember that $\\nabla \\times (\\nabla V) = 0$ (curl of gradient is always zero) and $\\nabla \\cdot (\\nabla \\times \\vec{A}) = 0$ (divergence of curl is always zero)."
        ]
    },
    "btech-emf: magnetostatics & maxwell equations": {
        "highlights": [
            "Biot-Savart Law: Magnetic field $d\\vec{B}$ produced by steady current element: $d\\vec{B} = \\frac{\\mu_0 I d\\vec{l} \\times \\hat{r}}{4\\pi r^2}$; Permeability of free space $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ H/m}$; magnetic field intensity $\\vec{B} = \\mu \\vec{H}$.",
            "Ampere's Circuital Law: Line integral of magnetic field around closed contour equals enclosed conduction current: $\\oint_C \\vec{H} \\cdot d\\vec{l} = I_{enc}$; Differential form: $\\nabla \\times \\vec{H} = \\vec{J}$ for static currents.",
            "Magnetic Flux & Gauss's Law for Magnetism: Magnetic flux $\\Phi = \\int_S \\vec{B} \\cdot d\\vec{S}$; isolated magnetic monopoles do not exist: $\\oint_S \\vec{B} \\cdot d\\vec{S} = 0 \\implies \\nabla \\cdot \\vec{B} = 0$ (solenoidal field).",
            "Magnetic Vector Potential: Because $\\nabla \\cdot \\vec{B} = 0$, $\\vec{B}$ can be expressed as curl of vector potential: $\\vec{B} = \\nabla \\times \\vec{A}$; under Coulomb gauge ($\\nabla \\cdot \\vec{A} = 0$), vector Poisson equation: $\\nabla^2 \\vec{A} = -\\mu \\vec{J}$.",
            "Lorentz Force & Magnetic Boundary Conditions: Total electromagnetic force $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$; Magnetic boundary conditions: Normal $B$ continuous: $B_{1n} = B_{2n}$; Tangential $H$ discontinuous by surface current: $\\hat{n} \\times (\\vec{H}_1 - \\vec{H}_2) = \\vec{K}$.",
            "Faraday's Law of Induction: Time-varying magnetic field induces electric field: $\\text{EMF} = -\\frac{d\\Phi}{dt}$; Differential form: $\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ (Maxwell's third equation).",
            "Displacement Current & Maxwell's Correction: Maxwell identified inconsistency in Ampere's law for time-varying fields ($\\nabla \\cdot (\\nabla \\times \\vec{H}) = 0$ while $\\nabla \\cdot \\vec{J} = -\\frac{\\partial \\rho_v}{\\partial t} \\ne 0$); introduced displacement current density $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t}$.",
            "Complete Maxwell Equations (Differential Form): (1) $\\nabla \\cdot \\vec{D} = \\rho_v$, (2) $\\nabla \\cdot \\vec{B} = 0$, (3) $\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$, (4) $\\nabla \\times \\vec{H} = \\vec{J} + \\frac{\\partial \\vec{D}}{\\partial t}$.",
            "Electromagnetic Wave Equation: In source-free lossless dielectric ($\\rho_v = 0, \\sigma = 0$), uncouples into wave equations $\\nabla^2 \\vec{E} = \\mu \\varepsilon \\frac{\\partial^2 \\vec{E}}{\\partial t^2}$ and $\\nabla^2 \\vec{H} = \\mu \\varepsilon \\frac{\\partial^2 \\vec{H}}{\\partial t^2}$; speed of light $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8\\text{ m/s}$.",
            "Poynting Theorem & Power Flow: Poynting vector $\\vec{S} = \\vec{E} \\times \\vec{H}$ represents instantaneous directional power density ($\\text{W/m}^2$); time-average power $\\vec{S}_{avg} = \\frac{1}{2} \\text{Re}(\\vec{E} \\times \\vec{H}^*)$; Intrinsic wave impedance $\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\varepsilon_0}} \\approx 377\\ \\Omega$."
        ],
        "keyPoints": [
            "Maxwell 1 (Gauss Electric): $\\nabla \\cdot \\vec{D} = \\rho_v$; $\\oint_S \\vec{D} \\cdot d\\vec{S} = Q_{enc}$.",
            "Maxwell 2 (Gauss Magnetic): $\\nabla \\cdot \\vec{B} = 0$; $\\oint_S \\vec{B} \\cdot d\\vec{S} = 0$.",
            "Maxwell 3 (Faraday Induction): $\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$; $\\oint_C \\vec{E} \\cdot d\\vec{l} = -\\frac{d}{dt}\\int_S \\vec{B} \\cdot d\\vec{S}$.",
            "Maxwell 4 (Ampere-Maxwell): $\\nabla \\times \\vec{H} = \\vec{J} + \\frac{\\partial \\vec{D}}{\\partial t}$; Displacement current density $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t}$.",
            "Intrinsic Impedance: $\\eta = \\sqrt{\\frac{\\mu}{\\varepsilon}}$; in free space $\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\varepsilon_0}} \\approx 120\\pi \\approx 376.73\\ \\Omega$.",
            "Poynting Vector: $\\vec{S} = \\vec{E} \\times \\vec{H}$ [$\\text{W/m}^2$]; points in the direction of EM wave propagation.",
            "Wave Velocity in Dielectric: $v = \\frac{1}{\\sqrt{\\mu \\varepsilon}} = \\frac{c}{\\sqrt{\\mu_r \\varepsilon_r}}$; refractive index $n = \\sqrt{\\mu_r \\varepsilon_r}$.",
            "Skin Depth: $\\delta = \\sqrt{\\frac{2}{\\omega \\mu \\sigma}}$; distance over which wave amplitude attenuates to $1/e$ ($36.8\\%$) in good conductors.",
            "Magnetic Boundary Rules: $B_{1n} = B_{2n}$ (normal $B$ continuous); $H_{1t} - H_{2t} = K$ (tangential $H$ discontinuous by surface current density).",
            "Exam Maxwell Table: Construct a 4-row table summarizing all 4 Maxwell equations in both Point (Differential) Form and Integral Form with physical laws."
        ]
    },

    # 11. PYTHON FOR DATA SCIENCE
    "btech-python: data science foundations": {
        "highlights": [
            "NumPy ndarray Architecture: Homogeneous $N$-dimensional array storing contiguous data in memory with shape, dtype, strides; vectorized operations eliminate slow Python loops via compiled C backends.",
            "NumPy Broadcasting Rules: Aligns array dimensions from trailing to leading: dimensions match if they are equal or if one of them is 1; eliminates memory overhead of copying arrays.",
            "Pandas Series & DataFrame: Core tabular structures; `Series` is 1D labeled array; `DataFrame` is 2D labeled tabular structure with aligned index (row labels) and column headers.",
            "Data Indexing, Slicing & Filtering: Explicit label-based indexing via `.loc[]`, integer positional indexing via `.iloc[]`, boolean masking, and vectorized query evaluation via `.query()`.",
            "Data Aggregation & GroupBy Operations: Split-Apply-Combine paradigm: `df.groupby('col').agg({'x': 'mean', 'y': 'sum'})`; hierarchical multi-indexing on rows and columns.",
            "Handling Missing Data & Imputation: Identification via `.isna()` / `.isnull()`; removal via `.dropna()`; statistical imputation using mean, median, mode via `.fillna()` or KNN imputation.",
            "Data Merging, Joining & Reshaping: Combining dataframes via `pd.concat()` (axis 0 or 1), `pd.merge()` (inner, left, right, outer joins on key columns), and reshaping via `pivot_table()` and `.melt()`.",
            "Matplotlib & Seaborn Visualization: Matplotlib Figure and Axes object hierarchy; Seaborn statistical visualizations: heatmaps with correlation matrices, pairplots, violin plots, and distribution KDE plots.",
            "Exploratory Data Analysis (EDA) Workflow: Summary statistics via `.describe()`, skewness, kurtosis, outlier detection using IQR rule ($[Q_1 - 1.5\\text{IQR}, Q_3 + 1.5\\text{IQR}]$), and correlation analysis.",
            "Feature Engineering & Preprocessing: Categorical encoding (One-Hot Encoding, Label Encoding), feature scaling (Standardization $Z = \\frac{x - \\mu}{\\sigma}$, Min-Max Normalization $x_{norm} = \\frac{x - x_{min}}{x_{max} - x_{min}}$)."
        ],
        "keyPoints": [
            "Broadcasting Invariant: Two dimensions are compatible if they are equal or one of them is 1.",
            ".loc vs .iloc: `.loc[row_label, col_label]` is label-based (endpoint inclusive); `.iloc[row_idx, col_idx]` is integer position-based (endpoint exclusive).",
            "IQR Outlier Rule: Lower bound $= Q_1 - 1.5 \\times \\text{IQR}$; Upper bound $= Q_3 + 1.5 \\times \\text{IQR}$, where $\\text{IQR} = Q_3 - Q_1$.",
            "Standardization (Z-score): $z = \\frac{x - \\mu}{\\sigma}$; transforms data to zero mean and unit variance.",
            "Min-Max Normalization: $x' = \\frac{x - x_{min}}{x_{max} - x_{min}}$; bounds values strictly in range $[0, 1]$.",
            "Pearson Correlation Formula: $r = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum (x - \\bar{x})^2 \\sum (y - \\bar{y})^2}}$; bounds $-1 \\le r \\le +1$.",
            "Vectorized Array Operations: `a + b` executes in C loop; orders of magnitude faster than `[x + y for x, y in zip(a, b)]`.",
            "Pandas Memory Optimization: Downcasting numeric types (e.g. `float64` to `float32`) and converting repeated strings to `category` dtype reduces RAM usage.",
            "GroupBy Split-Apply-Combine: Splits data into groups, applies aggregation/transformation independently, and combines into a single dataframe.",
            "Exam Code Output Tip: In Pandas indexing questions, verify whether slicing endpoints are inclusive (`.loc`) or exclusive (`.iloc`)."
        ]
    },

    # 12. OBJECT ORIENTED PROGRAMMING (ADVANCED)
    "btech-oop: design patterns & advanced principles": {
        "highlights": [
            "SOLID Design Principles: Single Responsibility (one reason to change), Open/Closed (open for extension, closed for modification), Liskov Substitution, Interface Segregation, and Dependency Inversion.",
            "Creational Design Patterns: Singleton (guarantees single instance with global access, double-checked locking), Factory Method (delegates instantiation to subclasses), and Builder (constructs complex objects step-by-step).",
            "Structural Design Patterns: Adapter (converts incompatible interface to client expectation), Decorator (attaches dynamic responsibilities without subclassing), and Facade (simplifies complex subsystem interface).",
            "Behavioral Design Patterns: Observer (publish-subscribe event notification model), Strategy (encapsulates family of interchangeable algorithms), and Command (encapsulates requests as objects).",
            "Model-View-Controller (MVC) Pattern: Architectural separation of data model, presentation UI view, and user interaction controller; promotes maintainability and automated testability.",
            "Multithreading & Concurrency Synchronization: Thread lifecycles, race conditions, critical sections, intrinsic monitors (`synchronized` methods/blocks), explicit locks (`ReentrantLock`), and deadlocks.",
            "Java Memory Model & Volatile Keyword: `volatile` keyword guarantees cross-thread visibility of variable updates by bypassing CPU register caches and preventing instruction reordering.",
            "Java Generics & Type Erasure: Compile-time type safety; bounded wildcards (`<? extends T>` covariance for producers, `<? super T>` contravariance for consumers PECS rule); type erasure removes types at runtime.",
            "Database Connectivity & ORM: JDBC architecture: `DriverManager`, `Connection`, `PreparedStatement` (prevents SQL injection), `ResultSet`, and connection pooling; Object-Relational Mapping (Hibernate/JPA).",
            "Software Testing & Mocking: Unit testing with JUnit 5 annotations (`@Test`, `@BeforeEach`); Test-Driven Development (TDD: Red-Green-Refactor); Mocking external dependencies via Mockito (`when().thenReturn()`)."
        ],
        "keyPoints": [
            "SOLID Acronym: S = Single Responsibility, O = Open/Closed, L = Liskov Substitution, I = Interface Segregation, D = Dependency Inversion.",
            "Singleton Thread-Safe Implementation: Private constructor, volatile instance reference, synchronized double-checked locking block.",
            "PECS Rule: Producer Extends, Consumer Super (use `<? extends T>` when reading, `<? super T>` when writing to collections).",
            "Observer Pattern Dynamics: Subject maintains list of observers; invokes `notifyObservers()` whenever internal state changes.",
            "Decorator Pattern: Wraps original object; implements same interface, augmenting behavior before/after delegating call.",
            "Adapter vs Facade: Adapter makes two incompatible interfaces work together; Facade provides a simplified interface to a complex system.",
            "Deadlock Four Necessary Conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait (Coffman conditions).",
            "PreparedStatement Advantage: Pre-compiles SQL templates and treats inputs strictly as parameter literals, completely preventing SQL Injection attacks.",
            "Type Erasure Consequence: Cannot instantiate generic types directly (`new T()`) or create generic arrays (`new T[10]`) at runtime.",
            "Exam Design Pattern Diagram: Draw standard UML class diagrams showing interface, abstract classes, concrete classes, and composition vs inheritance arrows."
        ]
    }
}

print("Machines, EMF, Python, and Advanced OOP loaded.")
