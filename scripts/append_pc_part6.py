import json
import os

with open("scripts/build_bsc_sem2_physics_chem.py", "r", encoding="utf-8") as f:
    content = f.read()

part6 = r'''
# =========================================================================
# 7. CHEMISTRY II / PROGRAMMING (B.Sc Physics Sem 2)
# =========================================================================

add_unit(
    "bsc-chph: thermodynamics",
    [
        "Statistical Molecular Thermodynamics & Microstates: Ensembles in statistical mechanics; Boltzmann entropy postulate $S = k_B \ln \Omega$; Microcanonical, canonical, and grand canonical ensembles; Thermodynamic weight and probability distribution.",
        "Molecular Partition Function ($q$): Sum over all accessible quantum energy states: $q = \sum_i g_i e^{-\varepsilon_i / (k_B T)}$; Factorization of independent degrees of freedom: $q = q_{trans} q_{rot} q_{vib} q_{elec}$.",
        "Translational Partition Function & Sackur-Tetrode Equation: Particle in a 3D box energy quantization: $q_{trans} = \left(\frac{2 \pi m k_B T}{h^2}\right)^{3/2} V$; Sackur-Tetrode absolute entropy of monatomic ideal gas: $S = n R \left[ \ln\left(\frac{e^{5/2} V}{N_A \Lambda^3}\right) \right]$ where thermal de Broglie wavelength $\Lambda = \frac{h}{\sqrt{2 \pi m k_B T}}$.",
        "Rotational Partition Function of Diatomic Molecules: Rigid rotor approximation: energy levels $\varepsilon_J = J(J+1)\frac{\hbar^2}{2 I}$; High temperature limit ($T \gg \Theta_{rot}$): $q_{rot} = \frac{k_B T}{\sigma h c B} = \frac{T}{\sigma \Theta_{rot}}$; Symmetry number $\sigma = 1$ for heteronuclear (HCl), $\sigma = 2$ for homonuclear ($\text{N}_2$).",
        "Vibrational Partition Function: Quantum harmonic oscillator eigenvalues $\varepsilon_v = (v + 1/2)h \nu$; Zero-point vibrational energy (ZPVE) $E_0 = \frac{1}{2}h \nu$; Partition function relative to ground state: $q_{vib} = \frac{1}{1 - e^{-\Theta_{vib}/T}}$ where vibrational temperature $\Theta_{vib} = \frac{h \nu}{k_B}$.",
        "Electronic & Nuclear Partition Functions: Electronic states separated by large energy gaps; Ground state degeneracy $g_0$: $q_{elec} \approx g_0$; Singlet ground states have $q_{elec} = 1$; Triplet oxygen ground state $^3\Sigma_g^-$ has $g_0 = 3$.",
        "Statistical Evaluation of Thermodynamic Functions: Internal energy $U - U(0) = k_B T^2 \left(\frac{\partial \ln Q}{\partial T}\right)_V$; Helmholtz free energy $A - U(0) = -k_B T \ln Q$; Pressure $P = k_B T \left(\frac{\partial \ln Q}{\partial V}\right)_T$; Heat capacity $C_v = \left(\frac{\partial U}{\partial T}\right)_V$.",
        "Equipartition Theorem & Heat Capacity of Gases: Classical equipartition theorem: each quadratic degree of freedom contributes $\frac{1}{2}k_B T$ to internal energy; Monatomic gas $C_{v,m} = \frac{3}{2}R$; Linear diatomic gas $C_{v,m} = \frac{5}{2}R$ (translational + rotational, vibration frozen at room temperature); High-temperature vibrational limit $C_{v,m} = \frac{7}{2}R$.",
        "Residual Entropy & Third Law of Thermodynamics: Nernst Heat Theorem; Planck postulate: Absolute entropy approaches zero as $T \to 0\text{ K}$ for perfectly ordered crystalline substances; Residual zero-point entropy caused by frozen orientational disorder: $S_0 = k_B \ln(W_0)$ (e.g. ice $S_0 = R \ln(3/2)$, CO $S_0 = R \ln 2$).",
        "Computational Thermochemistry & State Algorithms: Numerical algorithm calculating molecular partition functions from DFT (Density Functional Theory) quantum chemical vibrational frequencies and optimized geometric coordinates."
    ],
    [
        "Boltzmann Entropy Formula: $S = k_B \ln \Omega$.",
        "Total Partition Function Product: $q = q_{trans} q_{rot} q_{vib} q_{elec}$.",
        "Thermal de Broglie Wavelength: $\Lambda = \frac{h}{\sqrt{2 \pi m k_B T}}$.",
        "Rotational Partition Function: $q_{rot} = \frac{k_B T}{\sigma B h c}$.",
        "Vibrational Partition Function: $q_{vib} = \frac{1}{1 - e^{-h \nu / k_B T}}$.",
        "Helmholtz Free Energy Link: $A = -k_B T \ln Q$.",
        "Monatomic Gas Heat Capacity: $C_{v,m} = \frac{3}{2}R$.",
        "Diatomic Gas Rigid Heat Capacity: $C_{v,m} = \frac{5}{2}R$.",
        "Residual Entropy of Ice: $S_0 = R \ln(3/2) \approx 3.37\text{ J/(mol K)}$.",
        "Exam Tip: In rotational partition function calculations, never forget the symmetry number $\sigma$ in the denominator: $\sigma = 2$ for homonuclear diatomic molecules like $\text{O}_2, \text{N}_2, \text{H}_2$ to prevent double-counting indistinguishable orientations."
    ]
)

add_unit(
    "bsc-chph: equilibrium",
    [
        "Chemical Potential ($\mu_i$) in Open Systems: Partial molar Gibbs free energy: $\mu_i = \left(\frac{\partial G}{\partial n_i}\right)_{T, P, n_{j \ne i}}$; Fundamental thermodynamic relation for multi-component open systems: $dG = -S dT + V dP + \sum \mu_i dn_i$.",
        "Gibbs-Duhem Equation: Fundamental constraint linking intensive thermodynamic variables at constant $T$ and $P$: $\sum n_i d\mu_i = 0$; For binary mixtures: $x_1 d\mu_1 + x_2 d\mu_2 = 0$; Shows that chemical potentials cannot vary independently.",
        "Fugacity ($f$) & Fugacity Coefficient ($\phi$): Real gas chemical potential formulated via fugacity: $\mu_i = \mu_i^\circ(T) + R T \ln\left(\frac{f_i}{P^\circ}\right)$; Fugacity coefficient $\phi_i = f_i / P_i$; Integrable from PVT equations of state: $\ln \phi = \int_0^P \left(\frac{Z - 1}{P}\right) dP$.",
        "Fugacity from Virial & van der Waals Equations: For van der Waals gas: $\ln \phi = \frac{b - a/(R T)}{R T} P$; Demonstrates attractive intermolecular forces ($a$) suppress fugacity ($\phi < 1$) while repulsive molecular core volume ($b$) elevates fugacity ($\phi > 1$).",
        "Chemical Affinity ($\mathcal{A}$) & de Donder Extent of Reaction ($\xi$): Reaction progress coordinate $dn_i = \nu_i d\xi$; Chemical affinity defined as negative driving potential: $\mathcal{A} = -\sum \nu_i \mu_i = -\left(\frac{\partial G}{\partial \xi}\right)_{T,P}$; Reaction proceeds spontaneously if $\mathcal{A} > 0$.",
        "General Criterion for Multi-Phase Equilibrium: For closed system with $P$ phases and $C$ components, thermodynamic equilibrium requires uniformity of $T$, $P$, and chemical potential across every phase: $\mu_i^{(\alpha)} = \mu_i^{(\beta)} = \dots = \mu_i^{(P)}$ for each component $i = 1, \dots, C$.",
        "Derivation of the Gibbs Phase Rule: Total variables: $T, P$, and $(C - 1)$ independent mole fractions per phase $= 2 + P(C - 1)$; Total equilibrium constraint equations: $C(P - 1)$; Variance or degrees of freedom: $F = [2 + P(C - 1)] - C(P - 1) = C - P + 2$.",
        "Clapeyron & Clausius-Clapeyron Equations: Phase boundary slope on $P\text{--}T$ diagram: $\frac{dP}{dT} = \frac{\Delta H_{tr}}{T \Delta V_{tr}}$; For liquid-vapor transitions neglecting liquid volume and assuming ideal vapor: $\frac{d \ln P}{dT} = \frac{\Delta H_{vap}}{R T^2}$.",
        "Integrated Clausius-Clapeyron Two-Point Equation: $\ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{vap}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$; Predicts vapor pressure elevation with temperature; Critical role in vacuum distillation and refrigeration cycles.",
        "Computational Phase Equilibrium Algorithms: Flash calculation algorithms; Rachford-Rice objective function solving vapor-liquid equilibrium (VLE) compositions iteratively for multi-component hydrocarbon mixtures using Newton-Raphson method."
    ],
    [
        "Chemical Potential Definition: $\mu_i = \left(\frac{\partial G}{\partial n_i}\right)_{T, P, n_{j \ne i}}$.",
        "Gibbs-Duhem Relation: $\sum x_i d\mu_i = 0$ at constant $T, P$.",
        "Fugacity Definition: $\mu = \mu^\circ + R T \ln(f / P^\circ)$.",
        "Fugacity from Compressibility: $\ln \phi = \int_0^P \frac{Z - 1}{P} dP$.",
        "Chemical Affinity: $\mathcal{A} = -\sum \nu_i \mu_i$.",
        "Spontaneity Condition: $\mathcal{A} d\xi > 0$ for irreversible progress.",
        "Phase Equilibrium Condition: $\mu_i^\alpha = \mu_i^\beta$.",
        "Clapeyron Equation: $\frac{dP}{dT} = \frac{\Delta H}{T \Delta V}$.",
        "Clausius-Clapeyron Form: $\ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{vap}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$.",
        "Exam Tip: In Clapeyron phase transitions, remember that water is an anomaly because $\Delta V_{fusion} < 0$ (ice is less dense than liquid water), resulting in a negative $dP/dT$ slope for the solid-liquid boundary."
    ]
)

add_unit(
    "bsc-chph: solutions",
    [
        "Debye-Hückel Theory of Strong Electrolytes: Assumption of complete dissociation of strong electrolytes in polar solvents; Deviations from ideality arise entirely from long-range Coulombic electrostatic interactions between hydrated ions.",
        "Ionic Atmosphere & Charge Density Distribution: Central reference ion of charge $z_j e$ surrounded by spherically symmetric cloud of counter-ions; Local electrical potential $\psi(r)$ governed by linearized Poisson-Boltzmann equation: $\nabla^2 \psi = \frac{1}{r^2}\frac{d}{dr}\left(r^2 \frac{d\psi}{dr}\right) = \kappa^2 \psi$.",
        "Debye Screening Parameter ($\kappa$) & Debye Length: Inverse Debye screening length: $\kappa = \sqrt{\frac{8 \pi e^2 N_A I}{1000 \varepsilon k_B T}}$; Screening radius $r_D = \kappa^{-1}$; Measures thickness of surrounding ionic shielding cloud; Decreases with increasing ionic strength.",
        "Ionic Strength ($I$) of Electrolyte Solutions: Quantifies electrical charge environment: $I = \frac{1}{2}\sum_i c_i z_i^2$; For 1:1 electrolyte ($\text{NaCl}$), $I = C$; For 2:1 electrolyte ($\text{CaCl}_2$), $I = 3 C$; For 2:2 electrolyte ($\text{CuSO}_4$), $I = 4 C$.",
        "Debye-Hückel Limiting Law (DHLL): Activity coefficient of single ion: $\log_{10} \gamma_i = -A z_i^2 \sqrt{I}$; Mean ionic activity coefficient: $\log_{10} \gamma_\pm = -A |z_+ z_-| \sqrt{I}$; Universal constant $A = 0.509\text{ mol}^{-1/2}\text{L}^{1/2}$ for water at $298\text{ K}$.",
        "Extended Debye-Hückel Equation for Finite Ion Size: Incorporates finite effective hydrated ionic diameter $a$: $\log_{10} \gamma_\pm = -\frac{A |z_+ z_-| \sqrt{I}}{1 + B a \sqrt{I}}$; Valid up to moderate ionic strengths ($I \approx 0.1\text{ M}$).",
        "Conductance of Electrolytes & Kohlrausch's Laws: Specific conductance $\kappa$; Molar conductance $\Lambda_m = 1000 \kappa / C$; Kohlrausch's law of independent ionic migration: $\Lambda_m^\circ = \nu_+ \lambda_+^\circ + \nu_- \lambda_-^\circ$; Empirical square-root law for strong electrolytes: $\Lambda_m = \Lambda_m^\circ - B \sqrt{C}$.",
        "Debye-Hückel-Onsager (DHO) Conductance Equation: Quantifies conductance retardation in strong electrolytes: $\Lambda_m = \Lambda_m^\circ - (A' + B' \Lambda_m^\circ)\sqrt{C}$; Explains two physical deceleration effects: Asymmetry (relaxation) effect and Electrophoretic drag effect.",
        "Transport (Transference) Numbers: Fraction of total electric current carried by specific ionic species: $t_+ = \frac{u_+}{u_+ + u_-} = \frac{\lambda_+^\circ}{\Lambda_m^\circ}$ and $t_- = 1 - t_+$; Absolute ionic mobility $u_i = \lambda_i / F$; Determined experimentally via Hittorf method or Moving Boundary method.",
        "Computational Simulation of Solution Conductivity: Python algorithms simulating ionic conductivity, Debye-Hückel activity coefficients, and buffer equilibrium curves via non-linear least squares parameter fitting."
    ],
    [
        "Ionic Strength Formula: $I = \frac{1}{2}\sum c_i z_i^2$.",
        "Debye-Hückel Limiting Law: $\log_{10}\gamma_\pm = -0.509 |z_+ z_-|\sqrt{I}$.",
        "Debye Length Scale: $\kappa^{-1} \propto 1/\sqrt{I}$.",
        "Kohlrausch's Law: $\Lambda_m^\circ = \nu_+ \lambda_+^\circ + \nu_- \lambda_-^\circ$.",
        "Kohlrausch Concentration Law: $\Lambda_m = \Lambda_m^\circ - b\sqrt{C}$.",
        "DHO Conductance Factors: Relaxation drag and electrophoretic retardation.",
        "Transport Number Relation: $t_+ + t_- = 1.0$.",
        "Transport Number & Mobility: $t_i = \frac{u_i}{\sum u_j}$.",
        "Water Solvent Constant $A$: $0.509\text{ mol}^{-1/2}\text{kg}^{1/2}$ at $25^\circ\text{C}$.",
        "Exam Tip: In Debye-Hückel limiting law problems, make sure to compute the ionic strength $I$ correctly: a $0.01\text{ M CaCl}_2$ solution has $I = \frac{1}{2}[(0.01 \times 2^2) + (0.02 \times 1^2)] = 0.03\text{ M}$."
    ]
)

add_unit(
    "bsc-chph: electrochemistry",
    [
        "Electrochemical Potential ($\tilde{\mu}_i$) & Phase Boundary Potentials: Total free energy of charged particle in electrostatic potential $\phi$: $\tilde{\mu}_i = \mu_i + z_i F \phi$; Equilibrium of charged species between two phases $\alpha$ and $\beta$: $\tilde{\mu}_i^\alpha = \tilde{\mu}_i^\beta$.",
        "Galvani & Volta Potential Differences: Galvani internal electrical potential $\phi$; Outer Volta potential $\psi$; Surface dipole layer potential $\chi$ where $\phi = \psi + \chi$; Galvani potential difference across liquid-metal interface $\Delta \phi$ is fundamentally non-measurable directly.",
        "Concentration Cells Without Transference: Two identical half-cells with electrodes reversible to one of the ions, operating at different electrolyte activities $a_1$ and $a_2$; Cell potential: $E = \frac{R T}{n F}\ln\left(\frac{a_2}{a_1}\right)$; Driven purely by entropy of dilution.",
        "Concentration Cells With Transference & Liquid Junction Potential ($E_{lj}$): Direct liquid junction between two electrolyte solutions of different concentrations; Unequal ionic mobilities ($u_+ \ne u_-$) establish interfacial charge separation: $E_{lj} = (t_- - t_+)\frac{R T}{F}\ln\left(\frac{a_2}{a_1}\right)$.",
        "Elimination of Liquid Junction Potential: Insertion of saturated potassium chloride ($\text{KCl}$) or ammonium nitrate ($\text{NH}_4\text{NO}_3$) salt bridge; Mobilities of $\text{K}^+$ ($u = 7.62 \times 10^{-4}$) and $\text{Cl}^-$ ($u = 7.91 \times 10^{-4}$) are nearly equal ($t_+ \approx t_- \approx 0.50$), reducing $E_{lj}$ to $< 1\text{ mV}$.",
        "Butler-Volmer Equation for Charge Transfer Kinetics: $i = i_0 \left[ \exp\left(\frac{(1 - \alpha) F \eta}{R T}\right) - \exp\left(-\frac{\alpha F \eta}{R T}\right) \right]$; Symmetry factor $\alpha \approx 0.5$; Exchange current density $i_0$ reflects electrocatalytic activity.",
        "Low Overpotential Approximation (Linear Polarizability): For small perturbations ($\eta \ll \frac{R T}{F} \approx 25\text{ mV}$), exponential terms linearize via Taylor expansion: $i = i_0 \frac{F \eta}{R T}$; Charge transfer resistance $R_{ct} = \frac{\eta}{i} = \frac{R T}{F i_0}$.",
        "Tafel Behavior & Corrosion Kinetics: High overpotentials yield linear $\eta$ vs $\log i$ Tafel lines; Mixed Potential Theory: Spontaneous metal corrosion occurs at mixed corrosion potential $E_{corr}$ where total anodic oxidation rate equals total cathodic reduction rate: $i_a = |i_c| = i_{corr}$.",
        "Stern-Geary Equation & Polarization Resistance: Non-destructive determination of corrosion rate: $i_{corr} = \frac{B}{R_p}$ where $R_p = \left(\frac{d\eta}{di}\right)_{\eta \to 0}$ and Stern-Geary constant $B = \frac{b_a b_c}{2.303(b_a + b_c)}$; Used extensively in industrial pipeline corrosion monitoring.",
        "Computational Potentiometry & Instrumentation: Digital potentiostat architecture; Operational amplifier virtual ground circuit; Precision current-to-voltage converter (transimpedance amplifier) and computerized cyclic voltammetry digital acquisition."
    ],
    [
        "Electrochemical Potential: $\tilde{\mu}_i = \mu_i + z_i F \phi$.",
        "Concentration Cell Potential: $E = \frac{R T}{n F}\ln(a_2 / a_1)$.",
        "Liquid Junction Potential: $E_{lj} = (t_- - t_+)\frac{R T}{F}\ln(a_2 / a_1)$.",
        "Salt Bridge Criterion: Near-identical cation and anion mobilities ($t_+ \approx t_-$).",
        "Butler-Volmer Equation: $i = i_0 [e^{(1-\alpha) F \eta / RT} - e^{-\alpha F \eta / RT}]$.",
        "Charge Transfer Resistance: $R_{ct} = \frac{R T}{F i_0}$.",
        "Stern-Geary Equation: $i_{corr} = \frac{B}{R_p}$.",
        "Corrosion Steady State: Total anodic current equals total cathodic current ($i_a = |i_c|$).",
        "Galvani Potential Equation: $\phi = \psi + \chi$.",
        "Exam Tip: In concentration cell calculations, remember that the spontaneous direction always transfers solute from higher activity $a_2$ to lower activity $a_1$, so $E > 0$ requires $\ln(a_2 / a_1) > 0$."
    ]
)

add_unit(
    "bsc-chph: kinetics",
    [
        "Collision Theory of Bimolecular Gas Reactions: Hard sphere collision frequency $Z_{AB} = n_A n_B \sigma_{AB}^2 \sqrt{\frac{8 \pi k_B T}{\mu_{AB}}}$; Reaction rate $v = Z_{AB} e^{-E_0 / (R T)}$; Introduction of steric factor $P$: $k = P Z_{AB} e^{-E_0 / (R T)}$; Explains orientation requirements for non-spherical molecules.",
        "Transition State Theory (Eyring-Polanyi Formulation): Elementary reaction proceeds through quasi-equilibrium activated complex: $\text{A} + \text{B} \rightleftharpoons \text{AB}^\ddagger \to \text{Products}$; Reaction velocity $v = \kappa \nu^\ddagger [\text{AB}^\ddagger]$ where transmission coefficient $\kappa \approx 1$.",
        "Eyring Equation & Thermodynamic Activation Parameters: Rate constant formulation: $k = \kappa \frac{k_B T}{h} \frac{q^\ddagger}{q_A q_B} e^{-E_0 / (R T)} = \frac{k_B T}{h} e^{-\Delta G^\ddagger / (R T)}$; Decomposition into enthalpy and entropy of activation: $k = \frac{k_B T}{h} e^{\Delta S^\ddagger / R} e^{-\Delta H^\ddagger / (R T)}$.",
        "Relationship Between Arrhenius $E_a$ and Eyring $\Delta H^\ddagger$: For unimolecular gas reaction: $E_a = \Delta H^\ddagger + R T$; For bimolecular gas-phase reaction: $E_a = \Delta H^\ddagger + 2 R T$; For reactions in condensed liquid solution: $E_a = \Delta H^\ddagger + R T$.",
        "Physical Significance of Activation Entropy ($\Delta S^\ddagger$): Positive $\Delta S^\ddagger$ indicates loose, dissociative activated complex with increased rotational/vibrational freedom; Large negative $\Delta S^\ddagger$ reflects rigid, highly ordered associative transition state (e.g. Diels-Alder cycloaddition).",
        "Potential Energy Surfaces (PES) & Reaction Coordinates: Born-Oppenheimer potential energy plotted against nuclear coordinates; Collinear reaction $\text{H} + \text{H}_2 \to \text{H}_2 + \text{H}$; London-Eyring-Polanyi-Sato (LEPS) semi-empirical surface; Transition state identified as saddle point (first-order saddle point with exactly one imaginary vibrational frequency).",
        "Unimolecular Reactions & Lindemann-Hinshelwood Mechanism: Collision activation: $\text{A} + \text{M} \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} \text{A}^* + \text{M}$; Unimolecular decay: $\text{A}^* \xrightarrow{k_2} \text{Products}$; Overall rate $v = \frac{k_1 k_2 [\text{A}][\text{M}]}{k_{-1}[\text{M}] + k_2}$; High pressure limit yields first order: $k_\infty = \frac{k_1 k_2}{k_{-1}}$; Low pressure limit yields second order: $k_{low} = k_1 [\text{M}]$.",
        "Hinshelwood & RRKM Refinements of Unimolecular Theory: Hinshelwood distribution of energy across $s$ internal vibrational modes: $k = \frac{k_1 k_2}{k_{-1}}\left(\frac{E^*}{k_B T}\right)^{s-1}$; Rice-Ramsperger-Kassel-Marcus (RRKM) quantum microcanonical transition state formulation calculating energy-dependent rate constant $k(E) = \frac{N^\ddagger(E - E_0)}{h \rho(E)}$.",
        "Femtochemistry & Pump-Probe Spectroscopy: Ahmed Zewail's femtosecond laser spectroscopy ($10^{-15}\text{ s}$); Real-time observation of transition state bond breaking and formation in sodium iodide ($\text{NaI} \to \text{Na} + \text{I}$) crossing avoided curve crossings.",
        "Numerical Algorithms for Stiff Kinetic ODE Systems: Multi-step chemical reaction networks; Stiff differential equations caused by vastly disparate rate constants; Explicit Euler fails due to numerical instability; Implicit Gear's method and Rosenbrock solvers in computational chemical kinetics."
    ],
    [
        "Eyring Rate Equation: $k = \frac{k_B T}{h} e^{\Delta S^\ddagger / R} e^{-\Delta H^\ddagger / RT}$.",
        "Arrhenius to Eyring Link: $E_a = \Delta H^\ddagger + 2 R T$ (bimolecular gas).",
        "Associative Transition State Sign: $\Delta S^\ddagger < 0$ (loss of translational entropy).",
        "Transition State Saddle Point: Point of maximum energy along reaction path, minimum along all transverse coordinates.",
        "Lindemann High Pressure Limit: First-order kinetics ($v = k_\infty [\text{A}]$).",
        "Lindemann Low Pressure Limit: Second-order kinetics ($v = k_1 [\text{A}][\text{M}]$).",
        "Steric Factor Definition: $P = \sigma_{reactive} / \sigma_{geometric}$.",
        "RRKM Microcanonical Rate: $k(E) = \frac{N^\ddagger(E - E_0)}{h \rho(E)}$.",
        "Femtosecond Time Scale: $1\text{ fs} = 10^{-15}\text{ seconds}$.",
        "Exam Tip: In unimolecular kinetics, remember that at high pressures collisions are so frequent that collisional deactivation dominates unimolecular decay ($k_{-1}[\text{M}] \gg k_2$), causing the reaction order to collapse from second-order to first-order."
    ]
)
'''

content += part6

with open("scripts/build_bsc_sem2_physics_chem.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subject 7 (Chemistry II / Programming).")
