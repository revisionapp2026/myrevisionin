"""
B.Sc Semester 3: Physical Sciences, Mathematics & Computing
Covers:
- Analytical Chemistry
- Organic Chemistry - III
- Real Analysis
- Differential & Integral Calculus
- Thermal Physics & Statistical Mechanics
- Data Visualization (Tableau / Power BI)
- Web Design (HTML / CSS)
"""

bsc_sem3_science_units = {
    # -------------------------------------------------------------
    # ANALYTICAL CHEMISTRY
    # -------------------------------------------------------------
    "bsc-chem: titrimetry": {
        "highlights": [
            "Titrimetric Analysis Principles: Quantitative volumetric determination of analyte concentration by stoichiometric reaction with standard titrant; Primary standards (e.g. anhydrous $\\text{Na}_2\\text{CO}_3$, potassium hydrogen phthalate KHP, $\\text{K}_2\\text{Cr}_2\\text{O}_7$) requiring high purity ($>99.9\\%$) and air stability.",
            "Neutralization (Acid-Base) Titration Curves: Equivalence point pH depends on salt hydrolysis; Strong acid - Strong base ($pH = 7$ at inflection); Weak acid - Strong base ($pH > 7$ due to basic conjugate anion hydrolysis, Henderson-Hasselbalch equation $pH = pK_a + \\log([A^-]/[HA])$); Weak base - Strong acid ($pH < 7$).",
            "Acid-Base Indicators & Transition Range: Weak organic acids or bases exhibiting distinct color changes between ionized and unionized forms: $pH = pK_{In} \\pm 1$; Phenolphthalein (colorless to pink, transition $8.2-10.0$); Methyl orange (red to yellow, transition $3.1-4.4$).",
            "Complexometric Titrations with EDTA: Disodium salt of ethylenediaminetetraacetic acid ($\text{Na}_2\text{H}_2\text{Y}$) forms stable $1:1$ octahedral chelate complexes with metal cations regardless of charge; Conditional formation constant $K_f' = \\alpha_4 K_f$ governed by pH buffer.",
            "Metal Ion Indicators (Metallochromic): Eriochrome Black T (EBT), Murexide, and Xylenol orange; Metal-indicator complex ($M-In$, wine-red) has lower stability than metal-EDTA complex ($M-EDTA$), freeing indicator to blue color at equivalence point.",
            "Redox Titrimetry (Permanganometry & Dichromatometry): Potassium permanganate ($\text{KMnO}_4$) acts as self-indicator in dilute $\\text{H}_2\\text{SO}_4$ media (reduced to colorless $\\text{Mn}^{2+}$); Potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) uses diphenylamine internal indicator; Nernst equation describes redox potential curve $E = E^0 - \\frac{0.0591}{n}\\log([\\text{Red}]/[\\text{Ox}])$.",
            "Iodometry and Iodimetry: Iodimetry (direct titration with standard iodine in neutral/weakly alkaline pH); Iodometry (indirect titration of liberated iodine $I_2$ with standard sodium thiosulfate $\\text{Na}_2\\text{S}_2\\text{O}_3$ using starch indicator near endpoint, starch-iodine blue complex fades).",
            "Precipitation Titrimetry (Argentometry): Titration of halides with standard silver nitrate ($\\text{AgNO}_3$); Mohr's method (potassium chromate $\\text{K}_2\\text{CrO}_4$ indicator forming red $\\text{Ag}_2\\text{CrO}_4$ precipitate at pH $7-10$); Volhard's method (back-titration in acidic media with $\\text{KSCN}$ using ferric alum indicator forming blood-red $[\text{Fe(SCN)}]^{2+}$); Fajans method (fluorescein adsorption indicator).",
            "Titration Errors and Blank Corrections: Difference between theoretical stoichiometric equivalence point and observable physical endpoint; Determinate errors corrected via reagent blanks and indicator correction factors.",
            "University Examination Strategy: Sketch the neutralization titration curves for strong acid vs strong base and weak acid vs strong base, show chemical equations for Mohr and Volhard methods, and derive the conditional formation constant equation."
        ],
        "keyPoints": [
            "Henderson-Hasselbalch Equation: $pH = pK_a + \\log\\frac{[\\text{Salt}]}{[\\text{Acid}]}$.",
            "Indicator Working pH Range: $pH = pK_{In} \\pm 1$.",
            "EDTA Chelation Ratio: Forms strictly $1:1$ stoichiometric complexes with divalent ($\text{Ca}^{2+}, \text{Mg}^{2+}$) and trivalent metal cations.",
            "Mohr's Method pH Limit: Must be performed in neutral or slightly alkaline pH ($6.5-9$); In acidic pH, $\\text{CrO}_4^{2-}$ converts to dichromate; In strongly basic pH, silver precipitates as $\\text{AgOH}$.",
            "Volhard's Method Principle: Indirect back-titration performed strictly in dilute $\\text{HNO}_3$ acid media.",
            "Starch Indicator Rule: Starch must be added strictly near the endpoint when yellow iodine color fades to pale straw, preventing irreversible iodine-starch occlusion.",
            "Permanganate Half-Reaction: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ ($E^0 = +1.51\\text{ V}$).",
            "Primary Standard Requisite: Extremely high molecular weight to minimize weighing errors, non-hygroscopic, stable in atmosphere, and readily soluble.",
            "Adsorption Indicator (Fajans): Operates by surface adsorption of organic dye anions onto positively charged colloidal silver halide precipitate at equivalence point.",
            "Exam Scoring Tip: Never use hydrochloric acid ($\\text{HCl}$) to acidify permanganate titrations because $\\text{KMnO}_4$ oxidizes chloride to chlorine gas, introducing severe positive error."
        ]
    },
    "bsc-chem: chromatography & spectroscopy": {
        "highlights": [
            "Chromatographic Separation Principles: Differential partitioning of analyte components between stationary phase (solid or immobilized liquid) and mobile phase (liquid or gas); Distribution constant $K_D = C_s / C_m$; Retention factor $k' = \\frac{t_r - t_0}{t_0}$.",
            "Van Deemter Equation for Column Efficiency: Height Equivalent to a Theoretical Plate $HETP = A + \\frac{B}{u} + C u$; $A$ represents Eddy diffusion, $B/u$ represents longitudinal molecular diffusion, $C u$ represents mass transfer resistance in stationary and mobile phases; Optimal mobile phase velocity $u_{opt} = \\sqrt{B/C}$.",
            "Thin Layer Chromatography (TLC) & Retention Factor: Planar technique using silica gel or alumina stationary phase on glass/aluminum plates; Retention factor $R_f = \\frac{\\text{Distance traveled by solute}}{\\text{Distance traveled by solvent front}}$; Non-destructive UV visualization or iodine vapor staining.",
            "Gas Chromatography (GC): Separation of volatile, thermally stable compounds using carrier gas ($\text{He}, \text{N}_2$) and capillary wall-coated open tubular (WCOT) columns; Detectors include Flame Ionization Detector (FID, sensitive to hydrocarbons) and Thermal Conductivity Detector (TCD, universal non-destructive).",
            "High-Performance Liquid Chromatography (HPLC): High pressure ($100-400\\text{ bar}$) liquid mobile phase through sub-5-micron packed micro-particulate columns; Normal-phase (polar stationary phase, non-polar mobile phase) vs Reverse-phase (RP-HPLC: non-polar C18 silica stationary phase, polar aqueous-organic mobile phase, most widely utilized).",
            "Beer-Lambert Absorption Law: $A = \\log_{10}(I_0/I) = \\epsilon c b$ where $A$ is absorbance (optical density), $\\epsilon$ is molar absorptivity ($\text{L}/(\\text{mol}\\cdot\\text{cm})$), $c$ is molar concentration, and $b$ is cuvette optical path length (typically $1.0\\text{ cm}$).",
            "Deviations from Beer-Lambert Law: Chemical deviations (analyte association, dissociation, tautomerism, or pH shifts alters absorbing species), Real deviations (electrostatic interactions at high concentrations $>0.01\\text{ M}$ shifting refractive index), and Instrumental deviations (polychromatic radiation, stray light).",
            "UV-Visible Molecular Spectroscopy: Electronic transitions in valence electrons: $\\sigma \\to \\sigma^*$, $n \\to \\sigma^*$, $\\pi \\to \\pi^*$ (conjugated polyenes), and $n \\to \\pi^*$ (carbonyls); Chromophores (covalently unsaturated light-absorbing groups, e.g. $\\text{C=C}, \\text{C=O}$) and Auxochromes (substituents shifting absorption, e.g. $-\\text{OH}, -\\text{NH}_2$).",
            "Infrared (IR) Vibrational Spectroscopy: Absorption of IR photons matching vibrational frequency of chemical bonds; Requires net change in permanent dipole moment ($d\\mu/dx \\ne 0$); Fundamental Hooke's law wave number $\\bar{\\nu} = \\frac{1}{2\\pi c}\\sqrt{\\frac{k}{\\mu}}$; Diagnostic functional group regions ($4000-1500\\text{ cm}^{-1}$) and fingerprint region ($1500-600\\text{ cm}^{-1}$).",
            "University Examination Strategy: Plot the Van Deemter curve labeling plate height vs linear flow velocity with individual $A, B, C$ terms, verify Beer-Lambert law calculations with molar extinction coefficient, and identify key IR vibrational absorption peaks for alcohols and carbonyls."
        ],
        "keyPoints": [
            "Beer-Lambert Equation: $A = \\epsilon \\cdot b \\cdot c = -\\log_{10}(T)$.",
            "Van Deemter Equation: $H = A + \\frac{B}{u} + C u$.",
            "Chromatographic Resolution: $R_s = \\frac{2(t_{r2} - t_{r1})}{W_1 + W_2}$; Baseline separation achieved when $R_s \\ge 1.5$.",
            "Reverse-Phase HPLC Order: Polar compounds elute first, non-polar compounds are retained longest on hydrophobic C18 alkyl chains.",
            "Bathochromic (Red) Shift: Shift of absorption maximum $\\lambda_{max}$ to longer wavelength; Hypsochromic (blue) shift moves toward shorter wavelength.",
            "Hyperchromic Effect: Increase in absorption intensity (absorptivity $\\epsilon$); Hypochromic effect refers to decrease.",
            "IR Selection Rule: Vibration must produce a periodic change in dipole moment; Homonuclear diatomic molecules ($\text{N}_2, \text{O}_2$) are strictly IR inactive.",
            "Reduced Mass in Hooke's Law: $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$; Lighter atoms (C-H, O-H) vibrate at substantially higher wave numbers ($>3000\\text{ cm}^{-1}$).",
            "Carbonyl IR Diagnostic Peak: Intense sharp stretching absorption at $1700-1750\\text{ cm}^{-1}$ uniquely diagnostic of $\\text{C=O}$.",
            "Exam Scoring Tip: In UV-Vis problems, remember that absorbance $A$ is strictly dimensionless and linear with concentration, whereas transmittance $T = I/I_0$ varies exponentially."
        ]
    },

    # -------------------------------------------------------------
    # ORGANIC CHEMISTRY — III
    # -------------------------------------------------------------
    "bsc-chem: carbonyls & amines": {
        "highlights": [
            "Structure and Reactivity of Carbonyl Group: Strongly polarized planar $sp^2$ hybridized carbonyl carbon ($\delta^+$) vulnerable to nucleophilic attack, while carbonyl oxygen ($\delta^-$) undergoes electrophilic protonation; Aldehydes generally more reactive than ketones due to steric accessibility and lesser electron donation.",
            "Nucleophilic Addition Reactions: Addition of hydrogen cyanide forming cyanohydrins, sodium bisulfite forming crystalline bisulfite adducts, Grignard reagents ($R\\text{MgX}$) yielding primary, secondary, or tertiary alcohols, and alcohols forming hemiacetals and stable acetals under anhydrous acid catalysis.",
            "Nucleophilic Addition-Elimination with Nitrogen Nucleophiles: Reaction with primary amines forming imines (Schiff bases, $\\text{C=N}$); Reaction with hydroxylamine (oximes), hydrazine (hydrazones), phenylhydrazine (phenylhydrazones), and semicarbazide (semicarbazones); Acid-catalyzed at optimum pH $4-5$.",
            "Aldol Condensation & Cross-Aldol: Enolate anion formed by alpha-hydrogen deprotonation attacks adjacent carbonyl carbon forming beta-hydroxy aldehyde (aldol); Subsequent dehydration under heating yields alpha,beta-unsaturated conjugated enone; Directed cross-aldol achieved using lithium diisopropylamide (LDA).",
            "Cannizzaro Reaction: Non-enolizable aldehydes lacking alpha-hydrogens (e.g. benzaldehyde, formaldehyde) undergo base-induced self-redox disproportionation in concentrated $\\text{NaOH}$ into equimolar alcohol and carboxylate salt.",
            "Named Carbonyl Reactions: Perkin reaction (aromatic aldehyde with acid anhydride producing cinnamic acid), Knoevenagel condensation with active methylene compounds, Benzoin condensation catalyzed by cyanide ions, and Wittig reaction using phosphonium ylides to form alkenes with defined regiochemistry.",
            "Reduction and Oxidation of Carbonyls: Clemmensen reduction ($\\text{Zn-Hg} / \\text{HCl}$ converting carbonyl to methylene $-\\text{CH}_2-$ under acidic conditions); Wolff-Kishner reduction ($\\text{NH}_2\\text{NH}_2 / \\text{KOH}$ in ethylene glycol under basic conditions); MPV reduction; Tollens silver mirror test and Fehling test.",
            "Basicity of Aliphatic and Aromatic Amines: Nitrogen lone pair availability; Aliphatic amines are stronger bases than ammonia due to inductive $+I$ alkyl stabilization; In aqueous solution, secondary amines are most basic ($2^\\circ > 1^\\circ > 3^\\circ$ due to solvation balance); Aromatic amines (aniline) are far weaker bases due to resonance delocalization of lone pair into benzene pi system.",
            "Diazotization & Synthetic Versatility of Arenediazonium Salts: Reaction of primary aromatic amines with nitrous acid ($\\text{NaNO}_2 + \\text{HCl}$) at ice-cold temperature ($0-5^\\circ\\text{C}$) forming arenediazonium chloride ($\\text{Ar}-\\text{N}_2^+ \\text{Cl}^-$); Sandmeyer reaction ($\text{CuCl}, \text{CuBr}, \text{CuCN}$), Schiemann reaction ($\text{HBF}_4$ yielding aryl fluorides), and azo dye coupling reactions with phenols/naphthols.",
            "University Examination Strategy: Write detailed step-by-step curved arrow reaction mechanisms for base-catalyzed Aldol condensation, Cannizzaro hydride shift, and show synthetic routes converting nitrobenzene to aniline to benzenediazonium salt to chlorobenzene."
        ],
        "keyPoints": [
            "Optimum pH for Imine Formation: Narrow buffer range around pH $4.5$; At lower pH, amine is completely protonated; At higher pH, carbonyl oxygen is insufficiently protonated.",
            "Cannizzaro Hydride Shift: Rate-determining step is direct intermolecular transfer of hydride ion ($H^-$) from dianionic tetrahedral intermediate to second aldehyde.",
            "Clemmensen vs Wolff-Kishner Choice: Clemmensen for base-sensitive molecules; Wolff-Kishner for acid-sensitive substrates.",
            "Tollens Reagent Formula: Ammoniacal silver nitrate $[\\text{Ag}(\\text{NH}_3)_2]^+$; Produces elemental silver mirror on inner glass wall upon oxidation of aldehydes.",
            "Hinsberg Test for Amine Distinction: Benzenesulfonyl chloride reagent: Primary amine yields sulfonamide soluble in aqueous $\\text{NaOH}$; Secondary yields insoluble precipitate; Tertiary does not react.",
            "Sandmeyer Reaction: Replacement of diazonium group with $-\\text{Cl}, -\\text{Br}, -\\text{CN}$ using corresponding cuprous salts ($\\text{CuX}$).",
            "Gattermann Reaction: Alternative to Sandmeyer using copper powder and halogen acid ($\text{Cu} / \\text{HCl}$).",
            "Azo Coupling Reaction: Electrophilic aromatic substitution of diazonium cation onto electron-rich phenols at para-position forming brightly colored azo dyes ($-\\text{N=N}-$).",
            "Aniline Bromination: Extremely activating amino group causes uncontrolled substitution with bromine water, precipitating 2,4,6-tribromoaniline instantly without Lewis acid catalyst.",
            "Exam Tip: In Aldol condensation mechanisms, the enolate anion is resonance-stabilized between alpha-carbanion and oxygen enolate; always show both resonance structures."
        ]
    },

    # -------------------------------------------------------------
    # REAL ANALYSIS & CALCULUS
    # -------------------------------------------------------------
    "bsc-math: real analysis": {
        "highlights": [
            "Completeness Axiom of Real Numbers: Every non-empty subset of real numbers bounded above possesses a least upper bound (supremum) in $\\mathbb{R}$; Archimedian property of real numbers; Density of rational and irrational numbers in real continuum.",
            "Sequences of Real Numbers: Limit of a sequence: $\\lim_{n \\to \\infty} a_n = L$ if for every $\\epsilon > 0$ there exists $N \\in \\mathbb{N}$ such that $|a_n - L| < \\epsilon$ for all $n \\ge N$; Monotone Convergence Theorem: Every bounded monotonic sequence is convergent.",
            "Cauchy Sequences & Cauchy Convergence Criterion: Sequence $(a_n)$ is Cauchy if for all $\\epsilon > 0$, there exists $N$ such that $|a_n - a_m| < \\epsilon$ for all $n, m \\ge N$; Sequence of real numbers converges if and only if it is a Cauchy sequence (completeness of $\\mathbb{R}$).",
            "Infinite Series Convergence Tests: Positive term series $\\sum a_n$; Comparison tests (direct and limit comparison); D'Alembert's Ratio Test ($\lim |a_{n+1}/a_n| = L$, converges if $L < 1$); Cauchy's Root Test ($\lim (a_n)^{1/n} = L$); Cauchy's Integral Test.",
            "Alternating Series & Leibniz Rule: Series $\\sum (-1)^{n-1} u_n$ where $u_n > 0$; Converges if $u_{n+1} \\le u_n$ for all $n$ and $\\lim_{n \\to \\infty} u_n = 0$; Absolute convergence ($\\sum |a_n|$ converges) implies conditional convergence; Riemann rearrangement theorem.",
            "Continuity and Uniform Continuity: Function $f$ continuous at $c$ if $\\lim_{x \\to c} f(x) = f(c)$ via $\\epsilon-\\delta$ definition; Bolzano's Intermediate Value Theorem; Weierstrass Extreme Value Theorem (continuous function on compact interval $[a, b]$ attains absolute maximum and minimum); Heine-Borel theorem.",
            "Uniform Continuity on Intervals: $f$ is uniformly continuous on $I$ if $\\delta$ depends strictly on $\\epsilon$, independent of evaluation point $x$; Continuous function on closed, bounded interval $[a, b]$ is uniformly continuous.",
            "Differentiability & Mean Value Theorems: Differentiability implies continuity; Rolle's Theorem; Lagrange's Mean Value Theorem $f'(c) = \\frac{f(b) - f(a)}{b - a}$; Cauchy's Generalized Mean Value Theorem $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$.",
            "Riemann Integral Foundations: Partition $P$ of $[a, b]$; Lower Darboux sum $L(P, f)$ and Upper Darboux sum $U(P, f)$; Upper integral equals lower integral for Riemann integrable functions; Continuous and monotonic functions on $[a, b]$ are Riemann integrable.",
            "Fundamental Theorem of Calculus: First form: If $f$ is Riemann integrable and $F(x) = \\int_a^x f(t) dt$, then $F$ is continuous on $[a, b]$ and differentiable at points of continuity of $f$, with $F'(x) = f(x)$; Second form: $\\int_a^b f(x) dx = F(b) - F(a)$ where $F'(x) = f(x)$."
        ],
        "keyPoints": [
            "Supremum Property: Non-empty $S \\subset \\mathbb{R}$ bounded above has supremum $u = \\sup S$ such that for any $\\epsilon > 0$, there exists $s \\in S$ with $s > u - \\epsilon$.",
            "Cauchy Criterion: Series $\\sum a_n$ converges iff for every $\\epsilon > 0$, there exists $N$ such that $|\\sum_{k=n+1}^m a_k| < \\epsilon$ for all $m > n \\ge N$.",
            "D'Alembert Ratio Limit: $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$; $L < 1$ converges, $L > 1$ diverges, $L = 1$ test fails.",
            "Cauchy Root Limit: $L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}$; Converges absolutely if $L < 1$.",
            "p-Series Benchmark: $\\sum \\frac{1}{n^p}$ converges strictly for $p > 1$, diverges for $p \\le 1$.",
            "Leibniz Alternating Rule: $\\sum (-1)^{n-1} a_n$ converges if $a_n$ monotonically decreases to zero.",
            "Uniform Continuity Theorem: If $f: [a, b] \\to \\mathbb{R}$ is continuous on closed and bounded interval, then $f$ is uniformly continuous on $[a, b]$.",
            "Intermediate Value Theorem: If $f$ is continuous on $[a, b]$ and $k$ is between $f(a)$ and $f(b)$, there exists $c \\in (a, b)$ with $f(c) = k$.",
            "Riemann Integrability Condition: $f$ is integrable on $[a, b]$ iff for every $\\epsilon > 0$, there exists partition $P$ such that $U(P, f) - L(P, f) < \\epsilon$.",
            "Exam Scoring Tip: In epsilon-delta proofs, explicitly establish the algebraic inequality linking $|f(x) - L| < \\epsilon$ to $|x - c| < \\delta$ and state $\\delta = \\min(1, \\epsilon/M)$."
        ]
    },
    "bsc-math: multivariable calculus": {
        "highlights": [
            "Functions of Several Variables & Limits: Limits in $\\mathbb{R}^2$: $\\lim_{(x,y) \\to (x_0, y_0)} f(x, y) = L$; Non-existence proven by two-path test (testing along lines $y = m x$ or parabolas $y = k x^2$ yielding path-dependent limits).",
            "Partial Differentiation & Euler's Theorem on Homogeneous Functions: First and higher partial derivatives; Schwarz's Clairaut theorem on equality of mixed partials $f_{xy} = f_{yx}$ for $C^2$ functions; Euler's theorem: For homogeneous function of degree $n$, $x \\frac{\\partial f}{\\partial x} + y \\frac{\\partial f}{\\partial y} = n f(x, y)$.",
            "Total Differential & Chain Rule: Total differential $d z = \\frac{\\partial z}{\\partial x} dx + \\frac{\\partial z}{\\partial y} dy$; Chain rules for composite functions $z = f(u(t), v(t))$ and $z = f(u(s, t), v(s, t))$; Directional derivative $D_{\\hat{u}} f = \\nabla f \\cdot \\hat{u}$.",
            "Taylor's Theorem for Two Variables: Expands $f(a+h, b+k) = f(a,b) + (h f_x + k f_y) + \\frac{1}{2!}(h^2 f_{xx} + 2hk f_{xy} + k^2 f_{yy}) + \\dots$; Used for local polynomial approximations.",
            "Maxima, Minima and Saddle Points: Critical points where $f_x = 0$ and $f_y = 0$; Hessian determinant discriminant $D = f_{xx} f_{yy} - (f_{xy})^2$; Local minimum if $D > 0$ and $f_{xx} > 0$; Local maximum if $D > 0$ and $f_{xx} < 0$; Saddle point if $D < 0$; Test inconclusive if $D = 0$.",
            "Lagrange Multipliers for Constrained Extrema: Optimizes objective function $f(x, y, z)$ subject to constraint $g(x, y, z) = 0$; Formulates system of equations $\\nabla f = \\lambda \\nabla g$ along with constraint $g = 0$.",
            "Double Integrals in Cartesian and Polar Coordinates: $\\iint_R f(x, y) dA$; Fubini's theorem for iterated integrals; Change of variables to polar coordinates: $x = r\\cos\\theta, y = r\\sin\\theta, dx dy = r dr d\\theta$; Area and volume calculations.",
            "Triple Integrals & Coordinate Transformations: $\\iiint_V f(x, y, z) dV$; Cylindrical coordinates ($x = r\\cos\\theta, y = r\\sin\\theta, z = z, dV = r dr d\\theta dz$); Spherical coordinates ($x = \\rho\\sin\\phi\\cos\\theta, y = \\rho\\sin\\phi\\sin\\theta, z = \\rho\\cos\\phi, dV = \\rho^2 \\sin\\phi d\\rho d\\phi d\\theta$).",
            "Vector Integral Theorems: Green's Theorem in the plane connecting line integral to double integral: $\\oint_C (P dx + Q dy) = \\iint_R \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$; Gauss Divergence Theorem relating surface integral of flux to volume integral of divergence: $\\iint_S \\vec{F} \\cdot \\hat{n} dS = \\iiint_V (\\nabla \\cdot \\vec{F}) dV$; Stokes' Theorem connecting surface integral of curl to bounding line integral: $\\iint_S (\\nabla \\times \\vec{F}) \\cdot \\hat{n} dS = \\oint_C \\vec{F} \\cdot d\\vec{r}$.",
            "University Examination Strategy: Verify Green's and Stokes' theorems by evaluating both the left-hand line integral and right-hand surface/double integral independently to show identical numerical outcomes."
        ],
        "keyPoints": [
            "Euler's Homogeneous Formula: $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u(x, y)$.",
            "Directional Derivative: $D_{\\hat{u}} f = \\nabla f \\cdot \\frac{\\vec{u}}{|\\vec{u}|}$; Maximum in direction of gradient $\\nabla f$ with magnitude $|\\nabla f|$.",
            "Hessian Discriminant: $D = r t - s^2$ where $r = f_{xx}, s = f_{xy}, t = f_{yy}$.",
            "Lagrange Multiplier System: $\\nabla f = \\lambda \\nabla g$ subject to $g(x, y, z) = 0$.",
            "Polar Area Element: $dA = r dr d\\theta$ (Jacobian determinant is $r$).",
            "Spherical Volume Element: $dV = \\rho^2 \\sin\\phi d\\rho d\\phi d\\theta$ (Jacobian is $\\rho^2\\sin\\phi$).",
            "Green's Theorem in Plane: $\\oint_C (M dx + N dy) = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) dx dy$.",
            "Divergence Theorem: $\\iint_S \\vec{F} \\cdot \\hat{n} dS = \\iiint_V (\\nabla \\cdot \\vec{F}) dV$.",
            "Stokes' Theorem: $\\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot \\hat{n} dS$.",
            "Exam Scoring Tip: In changing order of integration in double integrals, always sketch the bounding region $R$ showing vertical vs horizontal representative strips before writing new integral limits."
        ]
    },

    # -------------------------------------------------------------
    # THERMAL PHYSICS & STATISTICAL MECHANICS
    # -------------------------------------------------------------
    "bsc-ph: thermal & statistical": {
        "highlights": [
            "Kinetic Theory of Gases: Assumptions of ideal gas; Derivation of pressure $P = \\frac{1}{3}\\rho \\overline{c^2} = \\frac{1}{3}\\frac{m N}{V} \\overline{c^2}$; Root-mean-square speed $c_{rms} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 R T}{M}}$; Equipartition theorem allocating $\\frac{1}{2}k_B T$ energy per quadratic degree of freedom.",
            "Maxwell-Boltzmann Molecular Speed Distribution: $f(v) dv = 4\\pi \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} v^2 e^{-\\frac{m v^2}{2 k_B T}} dv$; Most probable speed $v_{mp} = \\sqrt{\\frac{2 k_B T}{m}}$, Mean speed $\\bar{v} = \\sqrt{\\frac{8 k_B T}{\\pi m}}$, Root-mean-square speed $v_{rms} = \\sqrt{\\frac{3 k_B T}{m}}$; Ratio $v_{mp} : \\bar{v} : v_{rms} = 1 : 1.128 : 1.224$.",
            "Real Gases & Transport Phenomena in Gases: Mean free path $\\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2}$; Viscosity of gases $\\eta = \\frac{1}{3}\\rho \\bar{v} \\lambda$ (independent of pressure over moderate range); Thermal conductivity $K = \\frac{1}{3}\\rho \\bar{v} \\lambda c_v = \\eta c_v$; Self-diffusion coefficient $D = \\frac{1}{3}\\bar{v}\\lambda$.",
            "Laws of Thermodynamics & Reversible Processes: First law $dQ = dU + dW$; Enthalpy and specific heats $C_p - C_v = R$ (Mayer's relation); Adiabatic process $P V^\\gamma = \\text{constant}$; Second law (Kelvin-Planck and Clausius statements); Carnot theorem proving no engine can be more efficient than reversible Carnot engine.",
            "Entropy & Thermodynamic Potentials: Clausius theorem $\\oint \\frac{dQ}{T} \\le 0$; Entropy as state function $dS = dQ_{rev}/T$; Principle of entropy increase for isolated systems ($dS \\ge 0$); Helmholtz free energy $F = U - T S$ (minimum at constant $T, V$), Gibbs free energy $G = H - T S$ (minimum at constant $T, P$).",
            "Maxwell's Thermodynamic Relations: Derived from exact differentials of $U, H, F, G$: (1) $(\\partial T / \\partial V)_S = -(\\partial P / \\partial S)_V$; (2) $(\\partial T / \\partial P)_S = (\\partial V / \\partial S)_P$; (3) $(\\partial P / \\partial T)_V = (\\partial S / \\partial V)_T$; (4) $(\\partial V / \\partial T)_P = -(\\partial S / \\partial P)_T$; Used to evaluate latent heat equations.",
            "Clapeyron-Clausius Latent Heat Equation: First-order phase transition rate of change of vapor pressure with temperature: $\\frac{dP}{dT} = \\frac{L}{T(V_2 - V_1)}$; For liquid-gas vaporization neglecting liquid volume ($V_2 \\gg V_1$): $\\frac{d\\ln P}{dT} = \\frac{L}{R T^2}$.",
            "Statistical Ensembles & Phase Space: Microstate (quantum state of individual particles) vs Macrostate (specified by macroscopic variables $N, V, E$); Microcanonical ensemble (isolated, constant $N, V, E$), Canonical ensemble (thermal bath, constant $N, V, T$, Boltzmann factor $e^{-E_i/k_B T}$), Grand Canonical ensemble (chemical exchange, constant $\\mu, V, T$).",
            "Partition Function ($Z$): Central bridge between microscopic quantum mechanics and macroscopic thermodynamics: $Z = \\sum_i g_i e^{-\\beta E_i}$ where $\\beta = 1/(k_B T)$; Helmholtz free energy $F = -k_B T \\ln Z$; Internal energy $U = -\\frac{\\partial \\ln Z}{\\partial \\beta}$; Entropy $S = -\\left(\\frac{\\partial F}{\\partial T}\\right)_V$.",
            "Quantum Statistics (Bose-Einstein and Fermi-Dirac): Indistinguishable particles; Bose-Einstein statistics for bosons (integer spin $0, 1, 2$, symmetric wavefunctions, no Pauli exclusion, photon gas, Planck's radiation law, BEC condensation): $n(\\epsilon) = \\frac{1}{e^{(\\epsilon - \\mu)/k_B T} - 1}$; Fermi-Dirac statistics for fermions (half-integer spin $1/2, 3/2$, anti-symmetric wavefunctions, Pauli exclusion principle, conduction electrons in metals, Fermi energy $E_F$): $n(\\epsilon) = \\frac{1}{e^{(\\epsilon - \\mu)/k_B T} + 1}$."
        ],
        "keyPoints": [
            "Molecular Speed Ratios: $v_{mp} : \\bar{v} : v_{rms} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1 : 1.128 : 1.224$.",
            "Mayer's Heat Relation: $C_p - C_v = R$ for ideal gas; For general substance $C_p - C_v = T V \\frac{\\alpha^2}{\\kappa_T}$.",
            "Mean Free Path Formula: $\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2}$.",
            "Clapeyron Latent Heat Formula: $\\frac{dP}{dT} = \\frac{L}{T(v_2 - v_1)}$.",
            "Clausius-Clapeyron Vapor Pressure: $\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{L}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.",
            "Boltzmann Entropy Formula: $S = k_B \\ln\\Omega$ (where $\\Omega$ is thermodynamic probability).",
            "Canonical Partition Function: $Z = \\sum e^{-E_i / (k_B T)}$.",
            "Helmholtz Free Energy: $F = -k_B T \\ln Z$.",
            "Bose-Einstein Distribution: $n_i = \\frac{g_i}{e^{(\\epsilon_i - \\mu)/k_B T} - 1}$ ($\mu \\le 0$ strictly).",
            "Fermi-Dirac Distribution: $n_i = \\frac{g_i}{e^{(\\epsilon_i - \\mu)/k_B T} + 1}$; At absolute zero ($T=0\\text{ K}$), $n_i = 1$ for $\\epsilon \\le E_F$ and $n_i = 0$ for $\\epsilon > E_F$."
        ]
    }
}
