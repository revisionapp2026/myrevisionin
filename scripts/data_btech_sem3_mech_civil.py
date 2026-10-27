"""
B.Tech Semester 3: Mechanical, Civil, Chemical & Aerospace Engineering
Covers:
- Aerospace Materials & Material Science
- Building Materials & Construction
- Chemical Engineering Thermodynamics - I
- Engineering Geology
- Fluid Mechanics & Momentum Transfer
- Machine Drawing
- Manufacturing Technology - I
- Solar Energy
- Strength of Materials
- Surveying & Geomatics
"""

btech_sem3_mech_civil_units = {
    # -------------------------------------------------------------
    # AEROSPACE MATERIALS & MATERIAL SCIENCE
    # -------------------------------------------------------------
    "btech-aero: metals & alloys": {
        "highlights": [
            "Aluminum Alloys in Aerospace: 2xxx (Al-Cu, high strength, aircraft skin), 7xxx (Al-Zn-Mg-Cu, ultra-high strength, wing spars and upper skin), and Al-Li alloys (reduced density by $10\\%$, increased elastic modulus by $10-15\\%$).",
            "Titanium Alloys for Jet Engines: Alpha-beta alloy Ti-6Al-4V; Exceptional strength-to-weight ratio, corrosion resistance, and operational capability up to $450^\\circ\\text{C}$; Used in fan blades, compressor disks, and airframe structural forgings.",
            "Nickel-Based Superalloys: Inconel 718, Waspaloy, and single-crystal CMSX-4; Exceptional creep resistance and surface stability at turbine gas temperatures $>1000^\\circ\\text{C}$; Strengthened by coherent $\\gamma'$ precipitates $\\text{Ni}_3(\\text{Al, Ti})$.",
            "Precipitation Hardening Heat Treatment: Three-stage metallurgical processing: Solution treatment at elevated temperature, rapid water quenching to obtain supersaturated solid solution (SSSS), and artificial aging to precipitate coherent GP zones.",
            "Directional Solidification & Single Crystal Blades: Eliminates grain boundaries transverse to loading axis (DS) or eliminates all grain boundaries (SX); Completely prevents high-temperature grain boundary sliding and creep cavitation.",
            "High-Strength Low-Alloy (HSLA) Steels: 300M and Maraging steels (18Ni-Co-Mo); Yield strengths $>2000\\text{ MPa}$ with fracture toughness; Employed in military and commercial aircraft landing gear forgings.",
            "Corrosion Mechanisms in Airframes: Galvanic corrosion between carbon composites and aluminum, pitting corrosion in marine environments, stress corrosion cracking (SCC), and exfoliation corrosion along rolled grain boundaries.",
            "Anodizing and Protective Surface Coatings: Chromic acid and sulfuric acid anodization of aluminum; Thermal Barrier Coatings (TBC, yttria-stabilized zirconia YSZ) applied by electron-beam physical vapor deposition (EB-PVD) on turbine blades.",
            "Refractory Metals and High-Temperature Alloys: Niobium, molybdenum, and tungsten alloys; Utilized in rocket nozzle extensions, thruster combustion chambers, and hypersonic leading edge structures.",
            "University Examination Strategy: Draw the precipitation hardening temperature-time cycle, sketch microstructure showing $\\gamma-\\gamma'$ coherent matrix, and compare mechanical properties of 2024-T3 vs 7075-T6 in aerospace structures."
        ],
        "keyPoints": [
            "Al-Li Aerospace Benefit: $1\\%$ Lithium addition reduces alloy density by $3\\%$ and raises elastic modulus by $6\\%$.",
            "Ti-6Al-4V Microstructure: Dual-phase $\\alpha+\\beta$ alloy with aluminum as $\\alpha$-stabilizer and vanadium as $\\beta$-stabilizer.",
            "Superalloy Strengthening Phase: $\\gamma'$ precipitate ($\text{Ni}_3\text{Al}$) with ordered $L1_2$ cubic crystal structure.",
            "Single Crystal Advantage: Eliminates high-angle grain boundaries, preventing Coble diffusion creep.",
            "Thermal Barrier Coating (TBC): 7-8 wt% Yttria-Stabilized Zirconia (YSZ) drops substrate metal temperature by $100-150^\\circ\\text{C}$.",
            "Maraging Steel Hardening: Iron-nickel martensite hardened through intermetallic precipitates (not carbon martensite).",
            "Galvanic Aviation Hazard: Carbon fiber reinforced polymers (CFRP) are highly cathodic relative to aluminum; requires fiberglass or titanium barrier layers.",
            "Fatigue Critical Zone: Wing lower skin experiences sustained cyclic tensile stresses during aerodynamic lift.",
            "Exfoliation Corrosion: Layer-by-layer delamination corrosion along elongated grain boundaries in rolled aluminum plate.",
            "Exam Scoring Tip: Always mention that TBC requires a MCrAlY metallic bond coat to accommodate thermal expansion mismatch and provide oxidation resistance."
        ]
    },
    "btech-aero: fatigue & fracture": {
        "highlights": [
            "Mechanisms of Fatigue Failure: Progressive structural damage under cyclic loading below yield strength; Three distinct stages: Fatigue crack initiation at microstructural stress concentrators, Stage II striation crack propagation, and final catastrophic rapid fracture.",
            "S-N Curve & Endurance Limit: Wöhler curve plotting cyclic stress amplitude $S$ vs cycles to failure $N$; Ferrous alloys exhibit true endurance limit ($S_e \\approx 0.5 S_{ut}$); Non-ferrous aerospace aluminum alloys exhibit continuous decay requiring specified fatigue strength at $10^7$ or $10^8$ cycles.",
            "Mean Stress Corrections for Fatigue: Goodman relation $\\frac{\\sigma_a}{S_e} + \\frac{\\sigma_m}{S_{ut}} = 1$; Soderberg relation $\\frac{\\sigma_a}{S_e} + \\frac{\\sigma_m}{S_y} = 1$ (conservative design); Gerber parabolic relation $\\frac{\\sigma_a}{S_e} + \\left(\\frac{\\sigma_m}{S_{ut}}\\right)^2 = 1$.",
            "Stress Concentration & Notch Sensitivity: Theoretical stress concentration factor $K_t = \\sigma_{max}/\\sigma_{nom}$; Fatigue notch factor $K_f = 1 + q(K_t - 1)$ where notch sensitivity index $0 \\le q \\le 1$.",
            "Linear Elastic Fracture Mechanics (LEFM): Griffith energy balance criterion for brittle fracture $\\sigma_f = \\sqrt{\\frac{2 E \\gamma_s}{\\pi a}}$; Stress Intensity Factor $K_I = Y \\sigma \\sqrt{\\pi a}$ governing stress singularity at crack tip.",
            "Plane Strain Fracture Toughness ($K_{IC}$): Intrinsic material resistance to brittle crack extension under Mode I tensile opening in thick sections; Standardized ASTM E399 testing requiring specimen thickness $B \\ge 2.5(K_{IC}/S_y)^2$.",
            "Paris Law for Fatigue Crack Propagation: Steady-state crack growth rate $\\frac{da}{dN} = C (\\Delta K)^m$ where $\\Delta K = K_{max} - K_{min} = Y \\Delta\\sigma \\sqrt{\\pi a}$; Material constants $C$ and $m$ (typically $m \\approx 2-4$ for aerospace metals).",
            "Damage Tolerance Philosophy: FAA certification standard assuming initial undetected flaws exist in safety-critical airframe components; Enforces inspectable crack growth intervals before flaw reaches critical length $a_c = \\frac{1}{\\pi}\\left(\\frac{K_{IC}}{Y \\sigma_{max}}\\right)^2$.",
            "Cumulative Fatigue Damage (Miner's Rule): Palmgren-Miner linear damage accumulation $\\sum_{i=1}^k \\frac{n_i}{N_i} = 1$; Predicts fatigue exhaustion under variable amplitude flight mission loading profiles.",
            "University Examination Strategy: Draw the three-stage fatigue crack growth rate curve ($\\log da/dN$ vs $\\log \\Delta K$) labeling threshold $\\Delta K_{th}$, Paris regime, and unstable fracture, and integrate Paris law to compute flight cycles."
        ],
        "keyPoints": [
            "Griffith Fracture Stress: $\\sigma_f = \\sqrt{\\frac{2 E \\gamma_s}{\\pi a}}$.",
            "Mode I Stress Intensity: $K_I = Y \\sigma \\sqrt{\\pi a}$ ($\text{MPa}\\sqrt{\text{m}}$).",
            "Critical Crack Length: $a_c = \\frac{1}{\\pi}\\left(\\frac{K_{IC}}{Y \\sigma}\\right)^2$.",
            "Paris Power Law: $\\frac{da}{dN} = C(\\Delta K)^m$.",
            "Miner's Cumulative Rule: $\\sum \\frac{n_i}{N_i} = 1$ (Failure predicted when damage sum reaches 1.0).",
            "Goodman Diagram Formula: $\\frac{\\sigma_a}{S_e} + \\frac{\\sigma_m}{S_{ut}} = 1$.",
            "Soderberg Line Formula: $\\frac{\\sigma_a}{S_e} + \\frac{\\sigma_m}{S_y} = 1$.",
            "Plastic Zone Size (Plane Strain): $r_p = \\frac{1}{6\\pi}\\left(\\frac{K_I}{S_y}\\right)^2$.",
            "Fatigue Striations: Microscopic lines on fracture surface corresponding to individual cyclic crack advancements.",
            "Exam Scoring Tip: For crack life integration $\\int_{a_0}^{a_c} \\frac{da}{[Y \\Delta\\sigma \\sqrt{\\pi a}]^m}$, treat $Y$ as constant unless geometry-dependent $Y(a)$ function is explicitly supplied."
        ]
    },

    # -------------------------------------------------------------
    # BUILDING MATERIALS & CONSTRUCTION
    # -------------------------------------------------------------
    "btech-civil: cement & concrete": {
        "highlights": [
            "Chemical Composition of Portland Cement: Raw materials (calcareous $\\text{CaO} \\approx 62\\%$ and argillaceous $\\text{SiO}_2 \\approx 22\\%$, $\\text{Al}_2\\text{O}_3 \\approx 5\\%$, $\\text{Fe}_2\\text{O}_3 \\approx 3\\%$); Gypsum ($\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O} \\approx 3-4\\%$) added to retard flash setting of tricalcium aluminate.",
            "Bogue's Compounds in Cement: Tricalcium silicate ($C_3S$, rapid hydration, early 7-day strength), Dicalcium silicate ($C_2S$, slow hydration, progressive ultimate 1-year strength), Tricalcium aluminate ($C_3A$, rapid heat evolution, vulnerable to sulfates), Tetracalcium aluminoferrite ($C_4AF$).",
            "Hydration Mechanism & Gel Formation: Reaction of $C_3S$ and $C_2S$ with water yields Calcium Silicate Hydrate (C-S-H gel / tobermorite gel) providing structural matrix binding, and crystalline Calcium Hydroxide $\\text{Ca(OH)}_2$ maintaining alkaline passivating pH ($>12.5$).",
            "Water-Cement Ratio Law (Abrams' Law): Compressive strength of fully compacted concrete at given age is inversely proportional to water-cement ratio: $f_c = \\frac{A}{B^{w/c}}$; Optimal $w/c$ typically $0.40$ to $0.45$ for balance of strength and complete workability.",
            "Workability Testing Methods: Slump cone test (true slump, shear slump, collapse slump), Compacting Factor test (ideal for low-workability paving mixes), Vee-Bee consistometer test, and Flow table test for self-compacting concrete (SCC).",
            "Concrete Mix Design (IS 10262 Method): Target mean compressive strength $f_{ck}' = f_{ck} + 1.65 s$; Selection of water content, aggregate-cement ratio, fine-to-coarse aggregate proportioning, and moisture corrections.",
            "Properties of Hardened Concrete: Modulus of elasticity $E_c = 5000\\sqrt{f_{ck}}\\text{ MPa}$ (IS 456); Flexural tensile strength (modulus of rupture) $f_{cr} = 0.7\\sqrt{f_{ck}}\\text{ MPa}$; Creep coefficient and drying shrinkage strains.",
            "Chemical Admixtures in Concrete: Plasticizers and superplasticizers (polycarboxylate ethers, steric repulsion reducing water requirement by $20-30\\%$), air-entraining agents (freeze-thaw protection), retarders (sugar, gypsum), accelerators ($\\text{CaCl}_2$).",
            "Durability & Deterioration Mechanisms: Alkali-Silica Reaction (ASR, expansive silicate gel), Carbonation ($\text{CO}_2$ neutralization of $\text{Ca(OH)}_2$ dropping pH $<9$ and depassivating steel rebar), Sulfate attack, and chloride-induced rebar corrosion.",
            "University Examination Strategy: Draw Bogue's compounds strength development curves over 365 days, sketch slump cone dimensions ($100\\text{ mm} \\times 200\\text{ mm} \\times 300\\text{ mm}$), and solve complete IS 10262 mix proportioning calculations."
        ],
        "keyPoints": [
            "IS 456 Elastic Modulus: $E_c = 5000\\sqrt{f_{ck}}$ MPa.",
            "IS 456 Flexural Strength: $f_{cr} = 0.7\\sqrt{f_{ck}}$ MPa.",
            "Target Mean Strength: $f_{ck}' = f_{ck} + 1.65\\sigma$ (where $\\sigma$ is standard deviation).",
            "Bogue's High Heat Phase: $C_3A$ produces maximum heat of hydration ($865\\text{ J/g}$).",
            "Bogue's Ultimate Strength Phase: $C_2S$ provides steady strength gain beyond 28 days.",
            "Slump Cone Dimensions: Base diameter $200\\text{ mm}$, Top diameter $100\\text{ mm}$, Height $300\\text{ mm}$.",
            "Compacting Factor: Ratio of weight of partially compacted concrete to fully compacted concrete.",
            "Abrams' Law: $f_c = \\frac{A}{B^{w/c}}$ (Strength depends strictly on water-cement ratio for fully compacted mix).",
            "C-S-H Gel Contribution: Accounts for $\\approx 70\\%$ of paste volume and delivers primary compressive load resistance.",
            "Exam Scoring Tip: For concrete durability, explain that carbonation depth $d = k\\sqrt{t}$ reaches the reinforcing steel when the alkaline protective oxide layer ($\gamma-\\text{Fe}_2\\text{O}_3$) breaks down."
        ]
    },

    # -------------------------------------------------------------
    # CHEMICAL ENGINEERING THERMODYNAMICS — I
    # -------------------------------------------------------------
    "btech-chem: chemical thermo": {
        "highlights": [
            "First Law of Thermodynamics in Open Systems: Steady-state flow process: $\\Delta H + \\frac{\\Delta u^2}{2} + g \\Delta z = Q - W_s$; General energy balance for open chemical reactors with mass influx and efflux.",
            "Volumetric Properties of Pure Fluids (PVT Equations of State): Ideal gas law $P V = R T$; Van der Waals equation $\\left(P + \\frac{a}{V^2}\\right)(V - b) = R T$ accounting for intermolecular attraction ($a$) and molecular co-volume ($b$); Redlich-Kwong (RK), Soave-Redlich-Kwong (SRK), and Peng-Robinson (PR) equations.",
            "Critical State & Theorem of Corresponding States: Critical point where $\\left(\\frac{\\partial P}{\\partial V}\\right)_{T_c} = 0$ and $\\left(\\frac{\\partial^2 P}{\\partial V^2}\\right)_{T_c} = 0$; Reduced properties $P_r = P/P_c, T_r = T/T_c, V_r = V/V_c$; Compressibility factor $Z = \\frac{P V}{R T} = f(P_r, T_r, \\omega)$ using Pitzer's acentric factor $\\omega = -\\log_{10}(P_r^{sat})_{T_r=0.7} - 1.000$.",
            "Second Law and Entropy Calculations: Clausius inequality $\\oint \\frac{\\delta Q}{T} \\le 0$; Entropy change for ideal gas $\\Delta S = C_p \\ln\\left(\\frac{T_2}{T_1}\\right) - R \\ln\\left(\\frac{P_2}{P_1}\\right)$; Entropy of mixing for ideal solutions $\\Delta S_{mix} = -R \\sum x_i \\ln x_i > 0$.",
            "Thermodynamic Potentials & Maxwell's Relations: Internal energy $dU = T dS - P dV$, Enthalpy $dH = T dS + V dP$, Helmholtz energy $dA = -S dT - P dV$, Gibbs free energy $dG = -S dT + V dP$; Fundamental Maxwell relations: $\\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V$ and $\\left(\\frac{\\partial V}{\\partial T}\\right)_P = -\\left(\\frac{\\partial S}{\\partial P}\\right)_T$.",
            "Residual Properties: Difference between actual fluid property and ideal gas property at same $T$ and $P$: $M^R(T, P) = M(T, P) - M^{ig}(T, P)$; Residual Gibbs free energy $G^R/RT = \\int_0^P (Z - 1) \\frac{dP}{P}$; Residual enthalpy and entropy derived via Maxwell differentials.",
            "Fugacity and Fugacity Coefficient: Escaping tendency of real fluid: $dG = R T d\\ln f$; Fugacity coefficient $\\phi = f/P$; In ideal gas, $\\phi = 1$; Evaluated from equation of state via $\\ln\\phi = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
            "Joule-Thomson Expansion: Isenthalpic throttling process ($dH = 0$); Joule-Thomson coefficient $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_H = \\frac{1}{C_p}\\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]$; Inversion temperature where $\\mu_{JT} = 0$ separating cooling ($\\mu_{JT} > 0$) from heating.",
            "Carnot Engine & Refrigeration Cycles: Maximum reversible thermal efficiency $\\eta = 1 - \\frac{T_C}{T_H}$; Coefficient of Performance (COP) of Carnot refrigerator $COP_R = \\frac{T_C}{T_H - T_C}$; COP of heat pump $COP_{HP} = COP_R + 1$.",
            "University Examination Strategy: Derive Maxwell's four thermodynamic relations from exact differentials, evaluate $\\Delta S$ and $\\Delta H$ for gas expansion, and solve residual property integrals using Van der Waals constants."
        ],
        "keyPoints": [
            "Van der Waals Constants: $a = \\frac{27 R^2 T_c^2}{64 P_c}, \\quad b = \\frac{R T_c}{8 P_c}$.",
            "Critical Compressibility: Van der Waals predicts universal $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$.",
            "Pitzer Acentric Factor: $\\omega = -\\log_{10}(P_r^{sat}) - 1.0$ evaluated at $T_r = 0.7$.",
            "Maxwell Relation 1: $\\left(\\frac{\\partial T}{\\partial P}\\right)_S = \\left(\\frac{\\partial V}{\\partial S}\\right)_P$.",
            "Maxwell Relation 2: $\\left(\\frac{\\partial S}{\\partial P}\\right)_T = -\\left(\\frac{\\partial V}{\\partial T}\\right)_P$.",
            "Fugacity Coefficient Formula: $\\ln\\phi = \\int_0^P \\frac{Z - 1}{P} dP$.",
            "Joule-Thomson Coefficient: $\\mu_{JT} = \\frac{1}{C_p}\\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]$.",
            "Carnot Efficiency: $\\eta = 1 - \\frac{T_C}{T_H}$.",
            "Entropy of Ideal Gas: $\\Delta S = C_p \\ln(T_2/T_1) - R \\ln(P_2/P_1)$.",
            "Exam Scoring Tip: For throttling of an ideal gas, $\\left(\\frac{\\partial V}{\\partial T}\\right)_P = \\frac{R}{P} = \\frac{V}{T}$, so $\\mu_{JT} = 0$ strictly; temperature never changes upon throttling an ideal gas."
        ]
    },

    # -------------------------------------------------------------
    # MANUFACTURING TECHNOLOGY — I
    # -------------------------------------------------------------
    "btech-mech: manufacturing": {
        "highlights": [
            "Metal Casting Fundamentals: Patterns (allowances for shrinkage, draft, machining, distortion), Molding sand properties (permeability, green strength, dry strength, refractoriness, collapsibility).",
            "Gating System Design: Pouring basin, sprue, runner, ingates, and riser; Choke area determines pouring time; Gating ratio $A_{\\text{sprue}} : A_{\\text{runner}} : A_{\\text{ingates}}$ (Pressurized $1:2:1$ vs Unpressurized $1:2:4$).",
            "Chvorinov's Rule for Solidification: Total solidification time $t_s = C \\left(\\frac{V}{A}\\right)^n$ where $n \\approx 2$; Riser must solidify after casting, enforcing modulus condition $\\left(\\frac{V}{A}\\right)_{\\text{riser}} > \\left(\\frac{V}{A}\\right)_{\\text{casting}}$.",
            "Special Casting Processes: Investment (lost-wax) casting for intricate net-shape components, Die casting (hot-chamber for low melting zinc/lead alloys, cold-chamber for aluminum/magnesium), Centrifugal casting (pipes and cylindrical bushings).",
            "Fusion Welding Principles: Shielded Metal Arc Welding (SMAW), Gas Metal Arc Welding (GMAW / MIG, consumable wire electrode, argon shielding), Gas Tungsten Arc Welding (GTAW / TIG, non-consumable tungsten, helium/argon shield, high-integrity aerospace welds).",
            "Welding Heat Input & Heat Affected Zone (HAZ): Net heat input per unit length $H_{net} = \\eta \\frac{V I}{v}$ where $\\eta$ is arc efficiency and $v$ is travel speed; HAZ experiences grain growth, phase transformation, and residual thermal stresses.",
            "Resistance Welding Processes: Electric resistance spot and seam welding; Joule heating $H = I^2 R t$; Heat concentrated at sheet interface due to high contact contact resistance; Nugget formation without external filler.",
            "Metal Forming Mechanics: Flow stress $\\sigma_f = K \\epsilon^n$; True stress $\\sigma = s(1+e)$ vs True strain $\\epsilon = \\ln(1+e)$; Tresca maximum shear stress criterion vs Von Mises distortion energy yield criterion.",
            "Bulk Deformation Operations: Hot rolling (angle of bite $\\tan\\alpha = \\mu$, maximum draft $\\Delta h_{max} = \\mu^2 R$), Forging (open die, closed-die impression forging with flash), Extrusion (direct forward, indirect backward extrusion).",
            "University Examination Strategy: Draw gating system schematic with parabolic sprue to avoid air aspiration, calculate solidification time using Chvorinov's formula, and sketch resistance spot welding thermal cycle."
        ],
        "keyPoints": [
            "Chvorinov's Solidification Law: $t_s = C \\left(\\frac{V}{A}\\right)^2$.",
            "Riser Design Condition: $\\left(\\frac{V}{A}\\right)_{\\text{riser}} = 1.2 \\left(\\frac{V}{A}\\right)_{\\text{casting}}$.",
            "Maximum Draft in Rolling: $\\Delta h_{max} = \\mu^2 R$.",
            "True Strain Formula: $\\epsilon = \\ln\\left(\\frac{L}{L_0}\\right) = \\ln(1 + e)$.",
            "True Stress Formula: $\\sigma = s(1 + e)$ up to onset of necking.",
            "Welding Heat Input: $H = \\eta \\frac{V I}{v}$ ($\text{J/mm}$).",
            "Resistance Heat Equation: $Q = I^2 R t$ Joules.",
            "Sprue Profile Requirement: Parabolic taper prevents air aspiration and oxide skin entrapment.",
            "Die Casting Limitation: Hot chamber die casting cannot cast aluminum due to iron attack on injection piston.",
            "Exam Tip: In rolling calculations, the neutral point is the location where roll surface speed equals strip velocity; strip speeds up after neutral point due to forward slip."
        ]
    },

    # -------------------------------------------------------------
    # SOLAR ENERGY & RENEWABLES
    # -------------------------------------------------------------
    "btech-solar: solar fundamentals": {
        "highlights": [
            "Solar Radiation Physics: Solar constant $I_{sc} = 1367\\text{ W/m}^2$ outside Earth atmosphere; Extra-terrestrial solar spectrum matches blackbody at $5778\\text{ K}$; Beam (direct) radiation, Diffuse (scattered) radiation, and Albedo (ground reflected).",
            "Solar Geometry & Position Angles: Solar altitude angle $\\alpha$, Zenith angle $\\theta_z = 90^\\circ - \\alpha$, Declination angle $\\delta = 23.45^\\circ \\sin\\left[\\frac{360}{365}(284 + n)\\right]$, Hour angle $\\omega = 15^\\circ(\\text{Solar Time} - 12)$, and Solar azimuth angle $\\gamma_s$.",
            "Solar Radiation Measurement Instruments: Pyranometer (measures global direct + diffuse horizontal irradiance), Pyrheliometer (collimated tube tracking sun measuring direct beam normal irradiance $I_{bn}$), Sunshine recorder (Campbell-Stokes).",
            "Flat Plate Solar Collectors (FPC): Glazed insulated box containing absorber plate with fluid riser tubes; Useful thermal energy gain described by Hottel-Whillier-Bliss equation $Q_u = A_c F_R [I_t (\\tau \\alpha) - U_L (T_i - T_a)]$.",
            "Collector Performance Metrics: Collector heat removal factor $F_R$, Overall heat loss coefficient $U_L$ (top, bottom, and edge losses); Instantaneous thermal efficiency $\\eta = F_R (\\tau\\alpha) - F_R U_L \\left(\\frac{T_i - T_a}{I_t}\\right)$.",
            "Concentrating Solar Power (CSP) Collectors: Parabolic Trough Collectors (PTC, linear line focus, concentration ratio $C = 10-50$, $400^\\circ\\text{C}$), Solar Power Tower (central receiver heliostat field, $C = 500-1000$, $1000^\\circ\\text{C}$), Parabolic Dish Stirling engines.",
            "Photovoltaic (PV) Cell Physics: P-N junction operating in photovoltaic quadrant; Equivalent single-diode circuit model: $I = I_{ph} - I_0 \\left[\\exp\\left(\\frac{q(V + I R_s)}{n k T}\\right) - 1\\right] - \\frac{V + I R_s}{R_{sh}}$.",
            "PV I-V and P-V Characteristics: Short-circuit current $I_{sc} \\approx I_{ph}$, Open-circuit voltage $V_{oc} = \\frac{n k T}{q}\\ln\\left(\\frac{I_{sc}}{I_0} + 1\\right)$, Maximum Power Point ($P_{mp} = V_{mp} I_{mp}$), and Fill Factor $FF = \\frac{V_{mp} I_{mp}}{V_{oc} I_{sc}}$.",
            "Maximum Power Point Tracking (MPPT): Perturb and Observe (P&O), Incremental Conductance ($\\frac{dI}{dV} = -\\frac{I}{V}$ at peak power point); Matches solar array operating impedance to load via DC-DC buck/boost converter.",
            "University Examination Strategy: Derive the hour angle from solar noon, calculate angle of incidence on tilted surface $\\cos\\theta$, draw equivalent circuit of PV cell, and plot I-V curves under varying irradiance and temperature."
        ],
        "keyPoints": [
            "Solar Constant: $I_{sc} = 1367\\text{ W/m}^2$.",
            "Hottel-Whillier-Bliss Equation: $Q_u = A_c F_R [I_t (\\tau \\alpha) - U_L (T_{in} - T_a)]$.",
            "Collector Efficiency: $\\eta = \\frac{Q_u}{A_c I_t} = F_R (\\tau \\alpha) - F_R U_L \\left(\\frac{T_{in} - T_a}{I_t}\\right)$.",
            "PV Fill Factor: $FF = \\frac{V_{mp} I_{mp}}{V_{oc} I_{sc}}$ (typically $0.75-0.85$ for commercial silicon cells).",
            "PV Conversion Efficiency: $\\eta = \\frac{P_{max}}{A \\cdot G} = \\frac{V_{oc} I_{sc} FF}{A \\cdot G}$.",
            "Incremental Conductance MPPT Condition: $\\frac{dP}{dV} = 0 \\iff \\frac{dI}{dV} = -\\frac{I}{V}$.",
            "Temperature Effect on Silicon PV: $V_{oc}$ drops by approximately $-2.2\\text{ mV}/^\\circ\\text{C}$, reducing power output by $0.4-0.5\\%/^\\circ\\text{C}$.",
            "Optical Concentration Ratio: $C = \\frac{A_{\\text{aperture}}}{A_{\\text{receiver}}}$.",
            "Solar Declination Angle: $\\delta = 23.45^\\circ \\sin\\left[\\frac{360}{365}(284 + n)\\right]$.",
            "Exam Scoring Tip: Flat plate collectors collect both beam and diffuse radiation, whereas concentrating collectors (PTC, Heliostats) can utilize only direct beam radiation."
        ]
    }
}
