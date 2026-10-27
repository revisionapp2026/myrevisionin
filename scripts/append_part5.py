import json
import os

with open("scripts/build_bsc_sem2_math_cs.py", "r", encoding="utf-8") as f:
    content = f.read()

part5 = '''
# =========================================================================
# 8. STATISTICS II / DATABASE BASICS (B.Sc DS-AI Sem 2)
# =========================================================================

add_unit(
    "bsc-sdb: sampling",
    [
        "Population vs Sample Concepts: Finite vs infinite populations; Parameter (fixed population quantity $\\\\mu, \\\\sigma^2$) vs Statistic (sample function $\\\\bar{X}, S^2$); Sampling frame and sampling bias.",
        "Simple Random Sampling (SRS): SRS with replacement (SRSWR) vs without replacement (SRSWOR); Total possible samples $\\\\binom{N}{n}$; Probability of selecting any specific unit is $n/N$.",
        "Sample Mean Unbiasedness: In SRSWOR, sample mean is an unbiased estimator of population mean: $E[\\\\bar{x}] = \\\\mu$; Sample variance of mean: $\\\\text{Var}(\\\\bar{x}) = \\\\frac{\\\\sigma^2}{n} \\\\left(\\\\frac{N - n}{N - 1}\\\\right)$.",
        "Finite Population Correction (FPC): Correction factor $FPC = \\\\frac{N - n}{N - 1}$; Negligible when sampling fraction $n/N < 0.05$; Standard error $\\\\sigma_{\\\\bar{x}} = \\\\frac{\\\\sigma}{\\\\sqrt{n}} \\\\sqrt{\\\\frac{N - n}{N - 1}}$.",
        "Stratified Random Sampling: Homogeneous strata partition; Reduces within-stratum variance $\\\\sigma_i^2$; Proportional allocation $n_i = n \\\\frac{N_i}{N}$; Neyman optimal allocation $n_i = n \\\\frac{N_i \\\\sigma_i}{\\\\sum N_j \\\\sigma_j}$.",
        "Systematic Sampling: Selection of every $k$-th unit following random start $r \\\\in [1, k]$ where $k = N/n$; Efficient execution; Vulnerable to periodic hidden cyclic variations.",
        "Cluster & Multi-Stage Sampling: Heterogeneous clusters sampled as primary units; Cost-effective when traveling to geographically dispersed elements; Intra-class correlation coefficient $\\\\rho$.",
        "Sampling Distribution of Mean & Variance: Sampling distribution of $\\\\bar{X}$ approaches normal $\\\\mathcal{N}(\\\\mu, \\\\sigma^2/n)$ by Central Limit Theorem; Distribution of $\\\\frac{(n-1) S^2}{\\\\sigma^2} \\\\sim \\\\chi^2_{n-1}$.",
        "Standard Error (SE) Formulation: Precision metric: $SE(\\\\bar{x}) = \\\\sigma/\\\\sqrt{n}$; Measures standard deviation of sampling distribution of a statistic; Halving standard error requires quadrupling sample size ($4n$).",
        "Non-Sampling Errors & Survey Protocols: Response bias, non-response attrition, questionnaire framing bias; Mitigated through pilot surveys and post-stratification weighting adjustments."
    ],
    [
        "SRSWOR Variance of Mean: $\\\\text{Var}(\\\\bar{x}) = \\\\frac{\\\\sigma^2}{n} \\\\frac{N - n}{N - 1}$.",
        "Finite Population Multiplier: $\\\\sqrt{\\\\frac{N - n}{N - 1}}$.",
        "Neyman Allocation Formula: $n_i \\\\propto N_i \\\\sigma_i$.",
        "Standard Error of Mean: $SE = \\\\frac{\\\\sigma}{\\\\sqrt{n}}$.",
        "Proportional Allocation: $n_i = n \\\\frac{N_i}{N}$.",
        "Chi-Square Sample Variance: $\\\\frac{(n-1)S^2}{\\\\sigma^2} \\\\sim \\\\chi^2_{n-1}$.",
        "Quadrupling Rule: To reduce standard error by $50\\\\%$, sample size must increase by factor of 4.",
        "Systematic Interval: $k = N/n$.",
        "Parameter vs Statistic: Parameters describe populations; statistics describe samples.",
        "Exam Tip: In Neyman allocation, allocate larger sample sizes to strata with larger size $N_i$ AND higher variability $\\\\sigma_i$."
    ]
)

add_unit(
    "bsc-sdb: estimation",
    [
        "Statistical Estimation Foundations: Unknown population parameter $\\\\theta \\\\in \\\\Theta$; Point estimator $\\\\hat{\\\\theta} = T(X_1, \\\\dots, X_n)$ yields single estimate; Interval estimator provides bounded range $[L, U]$.",
        "Unbiasedness Criterion: Estimator $T_n$ is unbiased for $\\\\theta$ if $E[T_n] = \\\\theta$ for all $\\\\theta$; Bias defined as $\\\\text{Bias}(T) = E[T] - \\\\theta$; Sample mean $\\\\bar{X}$ is unbiased for $\\\\mu$; Sample variance $S^2 = \\\\frac{1}{n-1}\\\\sum(X_i - \\\\bar{X})^2$ is unbiased for $\\\\sigma^2$.",
        "Consistency Criterion: Estimator converges in probability to true parameter: $\\\\lim_{n \\\\to \\\\infty} P(|T_n - \\\\theta| < \\\\varepsilon) = 1$; Sufficient condition: $\\\\lim E[T_n] = \\\\theta$ and $\\\\lim \\\\text{Var}(T_n) = 0$.",
        "Efficiency & Mean Squared Error (MSE): $\\\\text{MSE}(T) = E[(T - \\\\theta)^2] = \\\\text{Var}(T) + [\\\\text{Bias}(T)]^2$; Relative efficiency of $T_1$ versus $T_2$ is $\\\\text{Var}(T_2)/\\\\text{Var}(T_1)$.",
        "Cramer-Rao Lower Bound (CRLB): Minimal variance bound for any unbiased estimator: $\\\\text{Var}(\\\\hat{\\\\theta}) \\ge \\\\frac{1}{I(\\\\theta)}$ where Fisher Information is $I(\\\\theta) = E\\\\left[\\\\left(\\\\frac{\\\\partial \\\\ln f(X; \\\\theta)}{\\\\partial \\\\theta}\\\\right)^2\\\\right]$; Uniformly Minimum Variance Unbiased Estimator (UMVUE).",
        "Sufficiency & Factorization Theorem: $T(X)$ captures all sample information regarding $\\\\theta$; Fisher-Neyman Factorization Criterion: Likelihood factors as $L(x; \\\\theta) = g(T(x); \\\\theta) \\\\cdot h(x)$.",
        "Maximum Likelihood Estimation (MLE): Maximizes log-likelihood function: $\\\\frac{\\\\partial \\\\ln L(\\\\theta)}{\\\\partial \\\\theta} = 0$; Invariance property: MLE of $g(\\\\theta)$ is $g(\\\\hat{\\\\theta}_{MLE})$; Asymptotically normal, consistent, and efficient.",
        "Method of Moments Estimation (MME): Equates population theoretical moments $\\\\mu_k\\'(\\\\theta)$ to sample moments $m_k\\' = \\\\frac{1}{n}\\\\sum X_i^k$; Solves resulting algebraic system for parameters.",
        "Confidence Intervals (CI): Interval $[L, U]$ capturing $\\\\theta$ with confidence level $1 - \\\\alpha$; For normal mean with known $\\\\sigma$: $\\\\bar{x} \\\\pm Z_{\\\\alpha/2} \\\\frac{\\\\sigma}{\\\\sqrt{n}}$; With unknown $\\\\sigma$: $\\\\bar{x} \\\\pm t_{\\\\alpha/2, n-1} \\\\frac{S}{\\\\sqrt{n}}$.",
        "Confidence Interval for Variance: $(1 - \\\\alpha)$ confidence interval for $\\\\sigma^2$ derived from Chi-Square distribution: $\\\\left[\\\\frac{(n-1)S^2}{\\\\chi^2_{\\\\alpha/2, n-1}}, \\\\; \\\\frac{(n-1)S^2}{\\\\chi^2_{1-\\\\alpha/2, n-1}}\\\\right]$."
    ],
    [
        "Unbiased Condition: $E[\\\\hat{\\\\theta}] = \\\\theta$.",
        "MSE Decomposition: $\\\\text{MSE}(\\\\hat{\\\\theta}) = \\\\text{Var}(\\\\hat{\\\\theta}) + \\\\text{Bias}^2$.",
        "Fisher Information: $I(\\\\theta) = -E\\\\left[\\\\frac{\\\\partial^2 \\\\ln f}{\\\\partial \\\\theta^2}\\\\right]$.",
        "Cramer-Rao Lower Bound: $\\\\text{Var}(\\\\hat{\\\\theta}) \\ge 1/[n I(\\\\theta)]$.",
        "Factorization Criterion: $L(x; \\\\theta) = g(T(x), \\\\theta) \\\\cdot h(x)$ confirms sufficiency.",
        "MLE Invariance: $\\\\hat{g(\\\\theta)} = g(\\\\hat{\\\\theta})$.",
        "Z-Confidence Interval: $\\\\bar{x} \\\\pm 1.96 \\\\frac{\\\\sigma}{\\\\sqrt{n}}$ for $95\\\\%$ confidence.",
        "t-Confidence Interval: $\\\\bar{x} \\\\pm t_{\\\\alpha/2, n-1} \\\\frac{s}{\\\\sqrt{n}}$ when variance unknown.",
        "Sample Variance Denominator: Divided by $n-1$ (Bessel\\'s correction) to ensure unbiasedness.",
        "Exam Tip: In MLE derivation, always verify that the second derivative $\\\\frac{\\\\partial^2 \\\\ln L}{\\\\partial \\\\theta^2} < 0$ at the critical point to confirm maximum."
    ]
)

add_unit(
    "bsc-sdb: hypothesis testing",
    [
        "Hypothesis Testing Framework: Statistical decision making; Null hypothesis $H_0$ (status quo / no effect) vs Alternative hypothesis $H_1$ (research claim); Simple vs composite hypotheses; One-tailed vs two-tailed tests.",
        "Decision Errors & Power of Test: Type I error ($\\alpha$): Rejecting $H_0$ when $H_0$ is true (significance level); Type II error ($\\beta$): Failing to reject $H_0$ when $H_0$ is false; Power of test: $1 - \\beta = P(\\text{Reject } H_0 | H_1 \\text{ true})$.",
        "Neyman-Pearson Lemma: For testing simple $H_0: \\theta = \\theta_0$ versus simple $H_1: \\theta = \\theta_1$, the most powerful critical region is defined by likelihood ratio test: $\\Lambda(x) = \\frac{L(x; \\theta_0)}{L(x; \\theta_1)} \\le k$.",
        "Large-Sample Tests ($Z$-Tests): Sample size $n \\ge 30$; Test for single mean: $Z = \\frac{\\\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}}$; Test for difference of means: $Z = \\frac{\\\\bar{X}_1 - \\\\bar{X}_2}{\\sqrt{\\sigma_1^2/n_1 + \\sigma_2^2/n_2}}$; Two-tailed critical values: $Z = \\pm 1.96$ at $\\alpha = 0.05$.",
        "Small-Sample $t$-Tests (Student\\'s $t$): Normal population with unknown $\\sigma$; Single mean: $t = \\frac{\\\\bar{X} - \\mu_0}{S/\\sqrt{n}}$ with $n-1$ degrees of freedom; Independent two-sample pooled $t$-test: $t = \\frac{\\\\bar{X}_1 - \\\\bar{X}_2}{S_p \\sqrt{1/n_1 + 1/n_2}}$ with degrees of freedom $n_1 + n_2 - 2$.",
        "Paired $t$-Test for Dependent Samples: Pre-treatment vs post-treatment on identical subjects; Difference variable $d_i = x_{1i} - x_{2i}$; Test statistic: $t = \\frac{\\\\bar{d} - 0}{s_d / \\sqrt{n}}$ with $n-1$ degrees of freedom.",
        "Snedecor\\'s $F$-Test for Equality of Variances: Test $H_0: \\sigma_1^2 = \\sigma_2^2$; Test statistic: $F = \\frac{S_1^2}{S_2^2} \\sim F_{(n_1-1, n_2-1)}$ where $S_1^2 > S_2^2$; Basis for Analysis of Variance (ANOVA).",
        "Chi-Square ($\\chi^2$) Goodness-of-Fit Test: Tests conformity of observed frequencies $O_i$ to theoretical distribution $E_i$: $\\chi^2 = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i} \\sim \\chi^2_{k - 1 - m}$; Requires expected frequencies $E_i \\ge 5$.",
        "Chi-Square Test of Independence in Contingency Tables: $r \\times c$ contingency table; Expected frequency $E_{ij} = \\frac{R_i C_j}{N}$; Degrees of freedom $df = (r - 1)(c - 1)$; Tests association between categorical attributes.",
        "$p$-Value Concept & Statistical Interpretation: Smallest significance level at which $H_0$ would be rejected; If $p \\le \\alpha$, reject $H_0$; If $p > \\alpha$, fail to reject $H_0$; Distinguish statistical significance from practical significance."
    ],
    [
        "Type I Error ($\\alpha$): $P(\\text{Reject } H_0 | H_0 \\text{ true})$.",
        "Type II Error ($\\beta$): $P(\\text{Accept } H_0 | H_1 \\text{ true})$.",
        "Power of Test: $1 - \\beta$.",
        "Large-Sample Z Statistic: $Z = \\frac{\\\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}$.",
        "Student t Statistic: $t = \\frac{\\\\bar{X} - \\mu_0}{s / \\sqrt{n}}$ ($df = n-1$).",
        "Pooled Sample Variance: $S_p^2 = \\frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1 + n_2 - 2}$.",
        "Chi-Square Goodness-of-Fit: $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$.",
        "Contingency Table DF: $(r - 1)(c - 1)$.",
        "F-Test Ratio: $F = S_1^2 / S_2^2$ ($S_1^2 \\ge S_2^2$).",
        "Exam Tip: In Chi-square tests, if any cell has $E_i < 5$, pool it with an adjacent cell and decrease the degrees of freedom accordingly."
    ]
)

add_unit(
    "bsc-sdb: correlation",
    [
        "Bivariate Data & Association: Simultaneous measurement of two quantitative variables $(X_i, Y_i)$; Scatter diagram visual inspection: positive, negative, linear, non-linear, or zero correlation.",
        "Covariance Formulation: Measure of joint linear variability: $\\\\text{Cov}(X, Y) = \\sigma_{xy} = \\frac{1}{n}\\sum (X_i - \\bar{X})(Y_i - \\bar{Y}) = E[X Y] - E[X] E[Y]$; Dependent upon measurement units.",
        "Karl Pearson\\'s Linear Correlation Coefficient ($r$): Normalized scale-free index: $r = \\frac{\\\\text{Cov}(X, Y)}{\\sigma_x \\sigma_y} = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{\\sqrt{\\sum (X - \\bar{X})^2 \\sum (Y - \\bar{Y})^2}}$.",
        "Mathematical Properties of Correlation ($r$): Strictly bounded: $-1 \\le r \\le +1$; Cauchy-Schwarz inequality proof: $|\\sum a_i b_i| \\le \\sqrt{\\sum a_i^2} \\sqrt{\\sum b_i^2}$; Invariant under linear shifts and positive scale transformations: $r(aX + b, cY + d) = r(X, Y)$ for $a c > 0$.",
        "Interpretation of Extreme Values: $r = +1$ (perfect positive linear colinearity); $r = -1$ (perfect negative linear colinearity); $r = 0$ (absence of linear association; non-linear dependencies may still exist).",
        "Spearman\\'s Rank Correlation Coefficient ($\\rho$): Non-parametric measure of monotonic relationship for ranked data: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$ where $d_i = R_{x,i} - R_{y,i}$; Robust against outliers.",
        "Rank Ties Correction in Spearman: Tied ranks assigned average rank; Correction term $\\frac{m(m^2 - 1)}{12}$ added to $\\sum d_i^2$ for each tie of length $m$.",
        "Kendall\\'s Tau ($\\tau$) Rank Correlation: Measures concordant and discordant pairs among $\\binom{n}{2}$ observations: $\\tau = \\frac{C - D}{\\frac{1}{2} n (n - 1)}$; Bounded between $-1$ and $+1$.",
        "Hypothesis Test for Significance of $r$: Testing $H_0: \\rho = 0$; Test statistic: $t = r \\sqrt{\\frac{n - 2}{1 - r^2}} \\sim t_{n-2}$; Standard error $SE(r) = \\frac{1 - r^2}{\\sqrt{n}}$.",
        "Spurious (Nonsense) Correlation: High numerical correlation driven by a shared confounding third variable (lurking variable) without causal connection (e.g. ice cream sales and drowning incidents)."
    ],
    [
        "Pearson Correlation Formula: $r = \\frac{\\\\text{Cov}(X, Y)}{\\sigma_x \\sigma_y}$.",
        "Correlation Limits: $-1 \\le r \\le 1$.",
        "Spearman Rank Formula: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$.",
        "Invariance Property: $r$ is unchanged by changes of origin and scale.",
        "Significance Test for r: $t = \\frac{r \\sqrt{n-2}}{\\sqrt{1 - r^2}}$ with $n-2$ df.",
        "Zero Correlation Note: $r = 0$ implies no LINEAR relationship (variables may be non-linearly dependent).",
        "Kendall Tau Formula: $\\tau = \\frac{C - D}{n(n-1)/2}$.",
        "Covariance Product Form: $\\\\text{Cov}(X, Y) = \\frac{1}{n}\\sum X Y - \\bar{X} \\bar{Y}$.",
        "Coefficient of Determination: $r^2$ represents proportion of variance shared between variables.",
        "Exam Tip: In Spearman\\'s formula, verify that $\\sum d_i = 0$; if the sum of rank differences is non-zero, an error occurred in ranking."
    ]
)

add_unit(
    "bsc-sdb: regression",
    [
        "Linear Regression Mathematical Concept: Modeling functional dependency of dependent variable $Y$ on independent explanatory variable $X$; Principle of Ordinary Least Squares (OLS) minimizing sum of squared residuals $\\sum e_i^2 = \\sum (Y_i - \\hat{Y}_i)^2$.",
        "Regression Equations of Lines: Line of $Y$ on $X$: $Y - \\bar{Y} = b_{yx}(X - \\bar{X})$; Line of $X$ on $Y$: $X - \\bar{X} = b_{xy}(Y - \\bar{Y})$; Both regression lines intersect at the point of sample means $(\\bar{X}, \\bar{Y})$.",
        "Regression Coefficients ($b_{yx}, b_{xy}$): Slope coefficients: $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x} = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{\\sum (X - \\bar{X})^2}$; $b_{xy} = r \\frac{\\sigma_x}{\\sigma_y} = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{\\sum (Y - \\bar{Y})^2}$.",
        "Properties of Regression Coefficients: (1) Geometric mean: $r = \\pm \\sqrt{b_{yx} \\cdot b_{xy}}$; (2) Identical signs: $b_{yx}, b_{xy}$, and $r$ must share the exact same sign; (3) If one coefficient exceeds unity ($|b_{yx}| > 1$), the other must be less than unity ($|b_{xy}| < 1$); (4) Arithmetic mean $\\frac{b_{yx} + b_{xy}}{2} \\ge r$.",
        "Angle Between Regression Lines: Acute angle $\\theta$ between regression lines: $\\tan\\theta = \\left|\\frac{1 - r^2}{r}\\right| \\left(\\frac{\\sigma_x \\sigma_y}{\\sigma_x^2 + \\sigma_y^2}\\right)$; If $r = \\pm 1$, $\\tan\\theta = 0 \\implies \\theta = 0$ (coincident lines); If $r = 0$, $\\tan\\theta = \\infty \\implies \\theta = 90^\\circ$ (perpendicular lines).",
        "Standard Error of Estimate: Residual variance metric: $S_{y.x} = \\sigma_y \\sqrt{1 - r^2}$; Quantifies dispersion of actual $Y$ values around predicted regression line $\\hat{Y}$.",
        "Decomposition of Sum of Squares (ANOVA in Regression): Total Sum of Squares $SST = \\sum (Y_i - \\bar{Y})^2 = SSR + SSE$; Regression Sum of Squares $SSR = \\sum (\\hat{Y}_i - \\bar{Y})^2$; Error Sum of Squares $SSE = \\sum (Y_i - \\hat{Y}_i)^2$.",
        "Coefficient of Determination ($R^2$): $R^2 = \\frac{SSR}{SST} = r^2$; Represents fraction of variance in dependent variable explained by linear regression model; Adjusted $R^2$ penalizes addition of non-informative regressors.",
        "Multiple Linear Regression Overview: Model $Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\dots + \\beta_k X_k + \\varepsilon$; Vector matrix OLS solution: $\\hat{\\beta} = (X^T X)^{-1} X^T Y$; Gauss-Markov Theorem: OLS estimator is Best Linear Unbiased Estimator (BLUE).",
        "Residual Diagnostics & Assumptions: OLS assumptions: linearity, zero error mean $E[\\varepsilon] = 0$, homoscedasticity (constant error variance $\\text{Var}(\\varepsilon) = \\sigma^2$), no autocorrelation $\\text{Cov}(\\varepsilon_i, \\varepsilon_j) = 0$, and normal distribution of residuals."
    ],
    [
        "Regression Line Y on X: $Y - \\bar{Y} = b_{yx}(X - \\bar{X})$.",
        "Slope Formula: $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x} = \\frac{\\\\text{Cov}(X, Y)}{\\sigma_x^2}$.",
        "Geometric Mean Property: $r = \\pm \\sqrt{b_{yx} \\cdot b_{xy}}$.",
        "Point of Intersection: Regression lines always intersect at $(\\bar{X}, \\bar{Y})$.",
        "Same Sign Rule: $b_{yx}, b_{xy}$, and $r$ always possess the identical sign.",
        "Orthogonal Condition: If $r = 0$, lines are perpendicular ($\\theta = 90^\\circ$).",
        "Coincident Condition: If $r = \\pm 1$, lines coincide ($\\theta = 0^\\circ$).",
        "Standard Error of Estimate: $S_{y.x} = \\sigma_y \\sqrt{1 - r^2}$.",
        "Coefficient of Determination: $R^2 = r^2 = \\frac{SSR}{SST}$.",
        "Exam Tip: If calculations yield $b_{yx} = 1.6$ and $b_{xy} = 0.8$, then $b_{yx} b_{xy} = 1.28 > 1$, which makes $r > 1$ (impossible!); check for arithmetic mistakes immediately."
    ]
)

# =========================================================================
# 9. DATA STRUCTURES LAB (B.Sc CS Sem 2)
# =========================================================================

add_unit(
    "bsc-dslab: safety & instrumentation",
    [
        "Computer Laboratory Environmental Safety: Electrical safety standards, surge protection protocols, static electricity discharge (ESD) wristbands when handling hardware, uninterruptible power supply (UPS) systems.",
        "GNU C Compiler Toolchain (`gcc`): Compiler flags and optimization levels: `gcc -Wall -Wextra -pedantic -std=c11 -g -O2 main.c -o app`; `-Wall` enables standard warnings; `-g` generates DWARF debug symbol tables.",
        "Dynamic Memory Profiling with Valgrind: Memory leak detection via `valgrind --leak-check=full --track-origins=yes ./app`; Detects heap blocks not freed at exit, uninitialized value reads, and invalid pointer writes.",
        "GNU Debugger (`gdb`) Instrumentation: Terminal debugging commands: `break` (set breakpoint), `run` (launch program), `next` (step over line), `step` (step into function), `print` (inspect variable), `backtrace` (view call stack frames).",
        "Address Space Layout Randomization (ASLR) & Memory Protection: Virtual memory segmentation: text segment (code), data segment (initialized globals), BSS segment (uninitialized globals), heap (dynamically allocated, grows upward), stack (local scope, grows downward).",
        "Static Code Analysis Tools: Static verification using `cppcheck` and `clang-tidy`; Detects potential null-pointer dereferences, memory allocation mismatches, and boundary array overruns prior to compilation.",
        "Standard C Diagnostic Assertion Framework: Header `<assert.h>`; Macro `assert(condition)` aborts program execution with filename and line number if invariant fails; Suppressed in release builds via `#define NDEBUG`.",
        "Input Sanitization & Buffer Overflow Prevention: Replacing vulnerable functions (`gets`, `scanf(\\\"%s\\\")`) with memory-bounded alternatives (`fgets(buf, sizeof(buf), stdin)`, `snprintf`); Protecting against stack smashing.",
        "Code Formatting & Style Standards: Automated code formatting via `.clang-format`; Indentation rules, pointer alignment `int *ptr`, descriptive variable naming, and function header documentation.",
        "Version Control with Git in Practical Labs: Local repository setup: `git init`, `git add`, `git commit -m \\\"message\\\"`; Branching workflows, diff tracking, and clean laboratory submission repository hygiene."
    ],
    [
        "GCC Debug Flag: `-g` embeds symbol tables required for GDB source line mapping.",
        "Valgrind Command: `valgrind --leak-check=full ./program` checks all heap blocks.",
        "GDB Backtrace: Command `bt` prints the complete call stack on segmentation faults.",
        "Virtual Memory Layout: Stack grows downward; Heap grows upward toward each other.",
        "Assert Macro: `#include <assert.h>`; aborts if condition evaluates to false.",
        "Safe String Input: `fgets(buf, sizeof(buf), stdin)` prevents buffer overrun.",
        "BSS Segment Role: Stores uninitialized global and static variables, zero-filled at launch.",
        "GCC Warning Flags: `-Wall -Wextra` flags suspicious syntax and implicit casts.",
        "Dangling Pointer Fix: Setting `ptr = NULL` post `free()` prevents use-after-free faults.",
        "Exam Tip: In lab viva, explain that `-Wall` does not fix errors automatically; it turns on compiler warnings for potential runtime bugs."
    ]
)

add_unit(
    "bsc-dslab: standard preparations",
    [
        "Header File Architecture & Modular C Design: Separation of interface (`list.h`) and implementation (`list.c`); Include guards `#ifndef LIST_H #define LIST_H ... #endif` preventing circular redeclaration errors.",
        "Abstract Data Type (ADT) Encapsulation: Opaque pointer idiom in C: declaring incomplete struct `typedef struct Stack_t* Stack;` in header, hiding internal array/pointer fields within `.c` file to preserve strict encapsulation.",
        "Makefile Build Automation: Rule syntax: `target: dependencies <TAB> command`; Macro variables `CC=gcc`, `CFLAGS=-Wall -g`; Target automation: clean target `rm -f *.o app` for clean rebuilds.",
        "Benchmarking Time Measurement API: Header `<time.h>`; High-precision CPU timing via `clock_t start = clock(); ... clock_t end = clock(); double cpu_time = (double)(end - start) / CLOCKS_PER_SEC;`.",
        "Wall-Clock Time Measurement (`gettimeofday`): Header `<sys/time.h>`; Struct `timeval` recording seconds and microseconds for measuring wall-clock duration of concurrent or file I/O operations.",
        "Test Data Synthesis & Randomization: Generating uniform random sequences with `rand()` and `srand(time(NULL))`; Creating pre-sorted, reverse-sorted, and partially sorted integer benchmark arrays.",
        "File I/O for Large Datasets: Binary file stream access via `fopen`, `fread`, `fwrite`, and `fclose`; Benchmarking algorithm performance on $10^5$ to $10^6$ integer datasets stored on disk.",
        "Command-Line Argument Parsing: Function signature `int main(int argc, char *argv[])`; Converting string inputs via `atoi` and `strtol` with error validation to configure benchmark test sizes dynamically.",
        "Standard Macro Definitions & Utility Headers: Implementing macro definitions for `SWAP(a, b, type)`, `MIN(a, b)`, `MAX(a, b)`; Checking macro hygiene with outer and inner parentheses.",
        "Memory Allocation Wrappers: Writing safe memory helper functions `void *safe_malloc(size_t size)` that check for `NULL` return and terminate with diagnostic message to prevent unchecked null pointer faults."
    ],
    [
        "Include Guard Syntax: `#ifndef FILENAME_H`, `#define FILENAME_H`, `#endif`.",
        "Makefile Rule Format: Target line followed by a TAB-indented recipe command.",
        "CPU Clock Timing: `(double)(end - start) / CLOCKS_PER_SEC` yields seconds.",
        "PRNG Seeding: `srand((unsigned)time(NULL))` initializes random sequence generator.",
        "Safe Malloc Pattern: Terminate with `perror()` immediately if `malloc` returns `NULL`.",
        "Opaque Struct Benefit: Prevents external client code from directly mutating internal struct attributes.",
        "Wall-Clock vs CPU Time: `clock()` tracks CPU cycles used; `gettimeofday()` tracks elapsed wall time.",
        "Binary I/O Speed: `fread()` and `fwrite()` are significantly faster than textual `fscanf()`/`fprintf()`.",
        "Command-Line Indexing: `argv[0]` holds executable name; `argv[1]` is first argument.",
        "Exam Tip: In Makefile writing, using spaces instead of a hard TAB character before the command triggers a syntax error."
    ]
)

add_unit(
    "bsc-dslab: experimental procedures",
    [
        "Lab 1: Dynamic Array & Matrix Operations: Implementing dynamically allocated resizable array in C; Matrix addition and multiplication using double pointers `int **matrix`; Verifying row-major indexing formulas.",
        "Lab 2: Singly & Doubly Linked List Operations: Writing complete CRUD procedures: `insert_head`, `insert_tail`, `insert_after`, `delete_key`, `reverse_list`; Testing pointer updates using diagrams.",
        "Lab 3: Stack ADT & Shunting-Yard Parser: Implementing fixed array and linked list stack; Writing full infix-to-postfix conversion program; Evaluating postfix expression with integer operands and arithmetic operators.",
        "Lab 4: Circular Queue & Priority Queue: Coding circular queue with modulo indexing; Handling queue full and empty edge conditions; Implementing array-based priority queue ordered by numeric priority keys.",
        "Lab 5: Binary Search Tree (BST) Construction: Implementing recursive `insert`, `search`, and `delete` functions; Writing recursive and iterative inorder, preorder, and postorder traversals.",
        "Lab 6: Quicksort & Mergesort Comparative Study: Implementing Hoare partition Quicksort and standard Merge sort; Counting comparison and swap operations across random, sorted, and reverse-sorted arrays.",
        "Lab 7: Heap Sort & Max-Heap Implementation: Implementing `build_max_heap` and `heapify` procedures in 1D array; Demonstrating in-place extraction to sort an array of $n$ random integers.",
        "Lab 8: Hash Table with Separate Chaining: Writing hash function using division method; Creating linked list buckets for collision resolution; Implementing `insert_key`, `search_key`, and `delete_key`.",
        "Lab 9: Hash Table with Open Addressing: Implementing linear probing and double hashing collision schemes; Handling tombstone `DELETED` markers to preserve search continuity across subsequent deletions.",
        "Lab 10: Graph Traversals (BFS & DFS): Representing directed and undirected graphs via adjacency matrix and adjacency list; Implementing Breadth-First Search using queue and Depth-First Search using recursion."
    ],
    [
        "List Reversal Pointer Step: Three pointers required: `prev = NULL`, `curr = head`, `next = NULL`.",
        "BST Inorder Successor Step: Locate smallest element in right subtree: `curr = node->right; while(curr->left) curr = curr->left;`.",
        "Quicksort Swap Step: Swaps out-of-order elements across pivot boundary.",
        "Merge Sort Merge Buffer: Allocates temporary array of size $R - L + 1$ to merge sorted halves.",
        "Queue Modulo Advance: `rear = (rear + 1) % capacity`.",
        "DFS Recursive Step: Mark vertex as visited, then iterate through all unvisited adjacent neighbors.",
        "BFS Queue Step: Enqueue start vertex and mark visited; dequeue vertex and enqueue all unvisited neighbors.",
        "Heapify Index Math: Left child index $= 2i + 1$, Right child $= 2i + 2$ (0-indexed).",
        "Hash Tombstone Marker: Marks deleted slot as available for insertions while preserving search traversal.",
        "Exam Tip: In linked list reversal, always draw the three-pointer pointer-swapping diagram (`next = curr->next; curr->next = prev; prev = curr; curr = next;`) step-by-step."
    ]
)

add_unit(
    "bsc-dslab: data verification",
    [
        "Empirical Time Complexity Verification: Measuring execution time $T(n)$ for varying input sizes $n \\in [10^3, 10^6]$; Comparing observed time growth against theoretical asymptotic curves $\\mathcal{O}(n), \\mathcal{O}(n \\log n), \\mathcal{O}(n^2)$.",
        "Linear Regression Log-Log Analysis: Model $\\ln T(n) = c + k \\ln n$; Slope $k$ represents empirical growth exponent (e.g. $k \\approx 1$ confirms linear time, $k \\approx 2$ confirms quadratic time).",
        "Comparison & Operation Counter Tracking: Instrumenting sorting routines with comparison counter `comp_count++` and movement counter `swap_count++`; Verifying that Selection sort comparison count matches theoretical $\\frac{n(n-1)}{2}$.",
        "Best, Average, and Worst-Case Input Stress Testing: Benchmarking Quicksort on: (1) Random permutation (average-case $\\mathcal{O}(n \\log n)$); (2) Sorted array (worst-case $\\mathcal{O}(n^2)$ for deterministic first-element pivot); (3) All-equal element array.",
        "Sorting Correctness Verification: Writing validation assertion function `bool is_sorted(int arr[], int n)` that confirms $A[i] \\le A[i+1]$ for all $0 \\le i < n-1$; Automated test harnesses validating output integrity.",
        "BST Invariant Integrity Checker: Writing recursive function `bool is_bst(Node *root, int min_val, int max_val)` validating that every node satisfies the strict inequality range $(min\\_val, max\\_val)$.",
        "Memory Leak Zero-Tolerance Audit: Running test suites under Valgrind; Ensuring output reports: `definitely lost: 0 bytes in 0 blocks`, `indirectly lost: 0 bytes`, `ERROR SUMMARY: 0 errors from 0 contexts`.",
        "Stack Overflow Guarding in Recursion: Determining recursion depth limit; Replacing deep recursion with explicit heap-allocated stack when $n > 10^5$ to prevent operating system stack overflow crash (segmentation fault).",
        "Hash Table Distribution Uniformity Audit: Calculating load factor $\\alpha = n/m$; Computing Chi-square goodness-of-fit test on bucket lengths: $\\chi^2 = \\frac{m}{n}\\sum (n_i - n/m)^2$ to verify hash function uniformity.",
        "Statistical Confidence Intervals for Run Times: Repeating each benchmark $k = 10$ times; Discarding highest and lowest outliers; Reporting sample mean run time $\\bar{x}$ and standard deviation $s$ with $95\\%$ confidence error bars."
    ],
    [
        "Log-Log Slope Meaning: Slope of $\\log T$ vs $\\log n$ yields empirical algorithmic complexity degree.",
        "Selection Sort Invariant: Exactly $\\frac{n(n-1)}{2}$ comparisons performed on any input of size $n$.",
        "Is-Sorted Validation: Single pass in $\\mathcal{O}(n)$ verifying $A[i] \\le A[i+1]$.",
        "BST Range Invariant: Root must satisfy $min < \\text{key} < max$; children inherit updated bounds.",
        "Valgrind Success Standard: Zero bytes definitely lost; zero error contexts.",
        "Outlier Mitigation: Execute minimum 5 to 10 trials per input size to filter OS context-switching noise.",
        "Hash Bucket Chi-Square: Tests whether hash function distributes keys uniformly across slots.",
        "Quicksort Adversary Input: Pre-sorted array triggers worst-case $\\mathcal{O}(n^2)$ when first element is pivot.",
        "Recursion Stack Limit: Default Linux stack is 8 MB; unbounded recursion crashes with SIGSEGV.",
        "Exam Tip: In lab record tables, show input size $N$, theoretical operation count, observed time in milliseconds, and calculated ratio $T(n)/f(n)$."
    ]
)

add_unit(
    "bsc-dslab: record & viva",
    [
        "Comprehensive Laboratory Manual Documentation: Professional report structure: Aim, Algorithm Theory, Flowchart, C Source Code, Input Test Cases, Formatted Output Tables, Complexity Analysis, Conclusions.",
        "Viva Voce Core Question: Array vs Linked List: Arrays have contiguous allocation and $\\mathcal{O}(1)$ random access, but fixed size and expensive $\\mathcal{O}(n)$ insertion; Linked lists have dynamic sizing and $\\mathcal{O}(1)$ insertion, but $\\mathcal{O}(n)$ sequential access and pointer overhead.",
        "Viva Voce Core Question: Stack vs Queue: Stack operates under Last-In First-Out (LIFO); Queue operates under First-In First-Out (FIFO); Real-world applications of each.",
        "Viva Voce Core Question: Quicksort vs Merge Sort: Quicksort is in-place and faster in practice ($\\\\mathcal{O}(1)$ auxiliary space), but worst-case $\\\\mathcal{O}(n^2)$; Merge sort is stable and guarantees $\\\\mathcal{O}(n \\\\log n)$ in all cases, but requires $\\\\mathcal{O}(n)$ extra memory.",
        "Viva Voce Core Question: BST vs Hash Table: BST maintains elements in sorted order supporting range queries ($\\\\mathcal{O}(\\\\log n)$); Hash table provides faster average search ($\\\\mathcal{O}(1)$), but does not maintain order and suffers from worst-case collisions.",
        "Viva Voce Core Question: Linear Probing vs Double Hashing: Linear probing suffers from primary clustering blocks; Double hashing eliminates primary and secondary clustering by utilizing second hash function as stride step.",
        "Viva Voce Core Question: Recursion Call Stack Mechanics: Explaining activation record pushed onto system stack (return address, parameters, local frame); Base case prevents infinite recursion stack overflow.",
        "Viva Voce Core Question: Time Complexity of Build-Heap: Explaining why `BuildMaxHeap` runs in $\\\\mathcal{O}(n)$ time rather than $\\\\mathcal{O}(n \\\\log n)$ using series summation $\\\\sum_{h=0}^{\\\\infty} \\\\frac{h}{2^h} = 2$.",
        "Viva Voce Core Question: Memory Management (`malloc` vs `calloc`): `malloc` allocates raw uninitialized bytes; `calloc` clears and zeros memory; `free` releases heap segment back to runtime memory allocator.",
        "Lab Examination Marking Rubric: Evaluation components: Written algorithm and logic ($20\\\\%$), Syntax-free compilable C code ($30\\\\%$), Execution and test case validation ($20\\\\%$), Lab record notebook ($10\\\\%$), Oral viva voce performance ($20\\\\%$)."
    ],
    [
        "Array vs List Trade-Off: Contiguous $\\\\mathcal{O}(1)$ access vs dynamic $\\\\mathcal{O}(1)$ splicing.",
        "Stack vs Queue: LIFO (Stack) vs FIFO (Queue).",
        "Quicksort vs Merge Sort: In-place but conditional worst-case vs guaranteed $\\\\mathcal{O}(n \\\\log n)$ but $\\\\mathcal{O}(n)$ memory.",
        "BST Sorted Order: Inorder traversal visits keys in ascending order.",
        "Hash Average Time: $\\\\mathcal{O}(1)$ average lookup under Simple Uniform Hashing Assumption.",
        "Build-Heap Linearity: Summation of heights series yields $\\\\mathcal{O}(n)$ time bound.",
        "Stack Overflow Cause: Exceeding call stack memory due to missing base case in recursion.",
        "Calloc Cleared Memory: Initializes all allocated memory bytes to zero.",
        "Valgrind Clean Exit: Necessary proof that all dynamically allocated memory blocks were freed.",
        "Exam Tip: In oral viva, always open by stating the time complexity (Best, Average, Worst) and auxiliary space complexity before detailing the algorithm logic."
    ]
)

# =========================================================================
# 10. DSA LAB (B.Sc DS-AI Sem 2)
# =========================================================================

add_unit(
    "bsc-dsalab: safety & instrumentation",
    [
        "Data Science & AI Laboratory Protocols: Computational hygiene, virtual environments (`venv`, `conda`), environment reproducibility (`requirements.txt`), GPU resource monitoring (`nvidia-smi`), cluster queue etiquette.",
        "Python Performance Profiling Suite (`cProfile`): Profiling function execution time and call counts via `python -m cProfile -s tottime script.py`; Identifies computational bottlenecks in algorithmic code.",
        "Micro-Benchmarking with `timeit`: Measuring sub-millisecond execution times: `timeit.timeit(stmt, setup, number=1000)`; Disables garbage collection during runs to yield consistent timing measurements.",
        "Memory Profiling (`memory_profiler`): Tracking per-line heap allocation via `@profile` decorator; Identifies memory leaks, unbounded object retention, and inefficient data copy operations in scientific pipelines.",
        "Automated Unit Testing with `pytest`: Writing unit test suites; Asserting algorithmic invariants (`assert sorted_arr == sorted(arr)`); Parametrized testing across edge cases: empty lists, singletons, reverse sorted, large arrays.",
        "Benchmarking Visualization via Matplotlib & Seaborn: Plotting empirical run times vs theoretical asymptotic curves; Using logarithmic axis scales (`plt.xscale('log')`, `plt.yscale('log')`) to reveal power-law growth exponents.",
        "Algorithmic Complexity Curve Fitting (`scipy.optimize`): Fitting empirical timing pairs $(n_i, t_i)$ to theoretical models $f(n) = c \\cdot n \\log_2 n$ using non-linear least squares (`curve_fit`); Computing $R^2$ goodness-of-fit.",
        "Reproducibility & Seed Setting: Enforcing deterministic pseudo-random benchmarks via `numpy.random.seed(42)` and `random.seed(42)`; Ensures peer verification of empirical benchmarking results.",
        "Vectorized vs Iterative Benchmarking: Profiling pure Python nested loops vs optimized NumPy C-backend vectorization; Quantifying 10x to 100x performance acceleration from SIMD instruction utilization.",
        "Interactive Notebook Best Practices: Jupyter notebook workflow: resetting runtime kernels, avoiding hidden global state variables, organizing reproducible pipelines from raw benchmark generation to plotted charts."
    ],
    [
        "cProfile Usage: `python -m cProfile -s cumulative main.py` identifies slowest functions.",
        "Timeit Utility: Runs micro-benchmarks across thousands of iterations to eliminate clock noise.",
        "Memory Profiler Decorator: `@profile` displays line-by-line RAM consumption.",
        "Pytest Invariant: Automated test assertions fail visibly on edge case violations.",
        "Log-Log Plot Utility: Turns polynomial power curves $y = c n^k$ into straight lines with slope $k$.",
        "SciPy Curve Fit: `curve_fit(model_func, n_data, t_data)` computes empirical constants.",
        "Random Seed Setting: Guarantees reproducible random arrays across experimental trials.",
        "Vectorization Speedup: Replaces interpreted bytecode loops with native contiguous C buffers.",
        "Nvidia-SMI Monitoring: Tracks GPU compute utilization, memory allocation, and thermal limits.",
        "Exam Tip: In lab viva, explain that micro-benchmarking single iterations is noisy; you must average multiple runs using `timeit` for reliable data."
    ]
)

add_unit(
    "bsc-dsalab: standard preparations",
    [
        "Data Generator Pipeline Architecture: Writing modular test data synthesis modules; Generating synthetic input distributions: uniform integer distributions, Gaussian distributions, Zipfian power-law distributions.",
        "Adversarial Input Case Preparation: Crafting adversarial input cases to stress-test algorithms: Median-of-3 Quicksort killer sequences, hash collision attacks generating identical bucket hash codes.",
        "Graph Dataset Generation: Generating synthetic graphs using NetworkX: Erdos-Renyi random graphs $G(n, p)$, Barabasi-Albert scale-free networks, complete graphs $K_n$, bipartite graphs, and sparse planar road maps.",
        "Benchmarking Harness Class: Creating Python benchmark harness tracking execution time, peak memory, and comparison operations across parameterized input lists $N = [10^2, 10^3, 10^4, 10^5]$.",
        "Data Structure Serialization: Exporting and importing large benchmark structures using `pickle`, JSON, and HDF5 binary storage for persistent reproducible test benches.",
        "Standard Algorithmic Interfaces: Designing abstract base classes (`abc.ABC`) defining unified method contracts (`insert`, `delete`, `search`) to benchmark disparate data structure implementations transparently.",
        "Garbage Collection Control: Temporarily disabling automatic generational garbage collection (`gc.disable()`) during performance measurement loops to prevent GC latency spikes from biasing benchmark timings.",
        "Warm-Up Iterations: Executing unrecorded preliminary warm-up passes to populate CPU instruction caches, TLB caches, and JIT caches prior to recording timing measurements.",
        "Statistical Metric Aggregation: Computing median, mean, interquartile range (IQR), and standard error of timing trials; Using median rather than mean to provide robust metrics resistant to OS background interrupts.",
        "Automated Markdown / LaTeX Table Generation: Formatting experimental results directly into publication-ready Markdown tables and LaTeX `tabular` source code for laboratory report documentation."
    ],
    [
        "Zipfian Input Distribution: Models real-world non-uniform skewed query frequency patterns.",
        "Adversarial Inputs Purpose: Exposes worst-case algorithmic complexity in non-randomized implementations.",
        "NetworkX Random Graph: `nx.erdos_renyi_graph(n, p)` generates random graph with edge probability $p$.",
        "GC Disable Pattern: Call `gc.disable()` before benchmark and `gc.enable()` immediately after.",
        "Warm-Up Phase Need: Populates hardware L1/L2 caches and memory pages to prevent initial cold-start spikes.",
        "Median Runtime Benefit: Robust against CPU background task context-switching outliers.",
        "JSON vs Pickle: JSON is human-readable and secure; Pickle serializes arbitrary complex Python objects.",
        "Abstract Base Class: `from abc import ABC, abstractmethod` enforces standardized class interfaces.",
        "Benchmarking Input Array Sizes: Geometric progression (e.g. $1000, 2000, 4000, 8000$) provides even spacing on log plots.",
        "Exam Tip: In empirical benchmarks, explain why warm-up iterations are mandatory to eliminate operating system file caching and page fault artifacts."
    ]
)

add_unit(
    "bsc-dsalab: experimental procedures",
    [
        "Lab 1: Empirical Verification of Master Theorem: Implementing divide-and-conquer algorithms representing all three Master Theorem cases; Benchmarking run time scaling against input size $n$.",
        "Lab 2: Dynamic Array Amortization Benchmarking: Instrumenting dynamic array appends; Measuring single-append time spikes at reallocation boundaries vs running average; Plotting potential function $\\\\Phi(D_i)$.",
        "Lab 3: AVL Tree vs Unbalanced BST Performance: Implementing AVL tree rotations; Comparing search and insertion times against standard BST on pre-sorted sequential inputs; Demonstrating $\\\\mathcal{O}(\\\\log n)$ vs $\\\\mathcal{O}(n)$ degradation.",
        "Lab 4: Sorting Benchmarking Suite: Implementing Randomized Quicksort, Merge Sort, Heap Sort, and Timsort; Plotting runtime vs input size $n$ across random, sorted, and reverse-sorted arrays.",
        "Lab 5: Linear-Time Sorting Implementation: Implementing Counting Sort and Radix Sort; Comparing runtime scaling against comparison-based Quick Sort on integer keys with bounded range $k$.",
        "Lab 6: Bloom Filter False Positive Analysis: Implementing Bloom Filter bit array; Measuring empirical false positive rates across varying filter capacities $m$, item counts $n$, and hash function counts $k$; Comparing with theoretical formula.",
        "Lab 7: Dijkstra vs Bellman-Ford Shortest Paths: Implementing Dijkstra\\'s algorithm with binary heap priority queue vs Bellman-Ford; Benchmarking execution time on graphs with varying edge densities; Detecting negative cycles.",
        "Lab 8: Minimum Spanning Trees (Kruskal vs Prim): Implementing Kruskal\\'s algorithm using Disjoint Set Union with path compression; Implementing Prim\\'s algorithm; Benchmarking performance on sparse vs dense graphs.",
        "Lab 9: Dynamic Programming vs Memoized Recursion: Implementing 0/1 Knapsack and Longest Common Subsequence (LCS); Profiling memory footprint and execution speed of top-down memoization vs bottom-up tabulation.",
        "Lab 10: PageRank Power Iteration Algorithm: Constructing web graph transition matrix; Implementing power iteration to compute dominant eigenvector; Measuring iteration count to reach convergence threshold $\\\\varepsilon = 10^{-6}$."
    ],
    [
        "Master Theorem Case 1 Test: Strassen\\'s matrix multiplication $\\\\mathcal{O}(n^{\\\\log_2 7}) \\\\approx \\\\mathcal{O}(n^{2.81})$.",
        "Dynamic Array Spike Observation: Shows periodic $\\\\mathcal{O}(n)$ spikes at powers of 2, with flat $\\\\mathcal{O}(1)$ baseline.",
        "AVL Sorted Test: Proves AVL remains $\\\\mathcal{O}(\\\\log n)$ on sorted inputs while standard BST collapses to $\\\\mathcal{O}(n)$.",
        "Radix Sort Advantage: Outperforms comparison sorts when key bit-width $b \\ll \\\\log_2 n$.",
        "Bloom Filter Optimal Parameter: Experimental minimum error matches theoretical $k = (m/n) \\\\ln 2$.",
        "Dijkstra Heap Optimization: Achieves $\\\\mathcal{O}((V + E) \\\\log V)$ using min-priority queue.",
        "Bellman-Ford Utility: Detects negative weight cycles when $V$-th relaxation reduces distance.",
        "Kruskal DSU Speed: Nearly linear $\\\\mathcal{O}(E \\\\log V)$ using path compression.",
        "DP Tabulation Memory Advantage: Bottom-up DP eliminates call stack overhead and enables space reduction to $\\\\mathcal{O}(W)$.",
        "Exam Tip: In the Bloom filter experiment, verify that false negatives NEVER occur; even a single false negative indicates a code implementation bug."
    ]
)

add_unit(
    "bsc-dsalab: data verification",
    [
        "Asymptotic Power-Law Regression Analysis: Fitting empirical run times to power model $T(n) = a \\cdot n^b$; Logarithmic linearization $\\\\ln T(n) = \\\\ln a + b \\\\ln n$; Extracted slope $b$ confirms empirical complexity degree ($b \\approx 1$ for linear, $b \\approx 2$ for quadratic).",
        "Coefficient of Determination ($R^2$) Goodness-of-Fit: Evaluating regression fit quality: $R^2 = 1 - \\\\frac{\\\\sum(t_i - \\\\hat{t}_i)^2}{\\\\sum(t_i - \\\\bar{t})^2}$; Values $R^2 > 0.98$ confirm that empirical timings conform tightly to theoretical complexity models.",
        "Residual Plot Analysis: Plotting residuals $e_i = t_i - \\\\hat{t}_i$ against input size $n$; Uniform random scatter confirms correct model specification; Systematic curvature indicates missing lower-order or logarithmic terms.",
        "Operation Count Ratio Tests: Calculating normalized ratio $R(n) = \\\\frac{\\\\text{Observed Operations}}{f(n)}$; As $n \\to \\\\infty$, ratio converging to non-zero constant $c$ provides mathematical verification of $f(n)$ bound.",
        "Cache Hierarchy Footprint Thresholds: Identifying performance inflection points where dataset size exceeds CPU cache tiers: L1 cache ($32\\\\text{ KB}$), L2 cache ($512\\\\text{ KB}$), L3 cache ($16\\\\text{ MB}$); Explaining timing slope increases due to RAM latency.",
        "Automated Test Coverage Verification: Running `pytest --cov` to measure code line and branch coverage; Requiring $100\\\\%$ branch coverage across data structure methods before conducting performance benchmarks.",
        "Profiling Memory Allocations & Peak RSS: Measuring peak Resident Set Size (RSS) using `resource.getrusage(resource.RUSAGE_SELF).ru_maxrss`; Verifying that dynamic programming auxiliary space adheres to theoretical memory bounds.",
        "Cross-Language Benchmark Comparisons: Comparing Python implementation performance against compiled C++ implementations across identical input datasets; Quantifying interpreter overhead vs compiler optimization.",
        "Bloom Filter Empirical Error vs Theory Validation: Conducting two-sample Kolmogorov-Smirnov test comparing observed false positive rate distribution against theoretical binomial error probability.",
        "Statistical Significance of Performance Claims: Conducting paired Student\\'s $t$-test ($p < 0.01$) to determine whether a newly optimized algorithm is statistically significantly faster than baseline implementations."
    ],
    [
        "Power-Law Linearization: $\\\\ln T = \\\\ln a + b \\\\ln n$; slope $b$ indicates polynomial power.",
        "R-Squared Acceptance: $R^2 > 0.95$ validates model conformance.",
        "Residual Scatter Sign: Random scatter around zero validates model; curved residuals reveal incorrect model.",
        "Normalized Ratio Test: $\\\\lim_{n \\to \\\\infty} T(n)/f(n) = c$ confirms tight asymptotic bound $\\\\Theta(f(n))$.",
        "Cache Miss Inflection: Run time per element spikes when dataset exceeds L3 cache capacity.",
        "Peak RSS Measurement: Tracks maximum physical RAM consumed during benchmark run.",
        "Test Coverage Standard: High branch coverage ensures edge cases are tested before timing.",
        "Cross-Language Factor: Compiled C++ typically runs 20x to 100x faster than interpreted pure Python.",
        "Paired T-Test in Benchmarks: Confirms algorithm speedups are statistically significant and not noise.",
        "Exam Tip: In presentation graphs, always plot both empirical measurement points AND the theoretical fitted line on the same axes."
    ]
)

add_unit(
    "bsc-dsalab: record & viva",
    [
        "Professional Data Science Report Architecture: Documentation sections: Problem Statement, Theoretical Asymptotics, Experimental Setup, Benchmark Charts, Tabular Empirical Data, Curve Fitting Equations, Conclusions.",
        "Viva Voce Core Question: Amortized Analysis Methods: Aggregate method (averaging total cost over sequence), Accounting method (assigning credits to cheap operations to pay for expensive ones), Potential method (tracking state energy function $\\\\Phi$).",
        "Viva Voce Core Question: AVL Tree vs Red-Black Tree: AVL trees are more strictly balanced ($h \\approx 1.44 \\\\log_2 n$), making them faster for lookup-intensive workloads; Red-Black trees are more loosely balanced ($h \\le 2 \\\\log_2 n$), requiring fewer rotations and running faster for insertion/deletion-heavy workloads.",
        "Viva Voce Core Question: Why Quicksort Outperforms Merge Sort in Practice: Quicksort exhibits superior spatial cache locality and operates in-place without dynamic memory allocation overhead; Merge sort requires $\\\\mathcal{O}(n)$ auxiliary array copies.",
        "Viva Voce Core Question: Bloom Filter Guarantees: Explaining why false positives are possible (unrelated keys can accidentally set all $k$ hash bits) but false negatives are impossible (if key was inserted, its $k$ bits were definitely set to 1).",
        "Viva Voce Core Question: Dijkstra vs Bellman-Ford: Dijkstra uses greedy exploration with priority queue in $\\\\mathcal{O}((V + E) \\\\log V)$, requiring non-negative weights; Bellman-Ford uses dynamic programming in $\\\\mathcal{O}(V E)$, handling negative weights and detecting negative cycles.",
        "Viva Voce Core Question: Dynamic Programming (Memoization vs Tabulation): Top-down memoization solves subproblems on-demand via recursion + cache; Bottom-up tabulation iteratively builds table, saving recursion stack space and enabling memory compression.",
        "Viva Voce Core Question: Caching & Cache-Oblivious Algorithms: Algorithms optimized to perform efficiently across all levels of memory hierarchy without knowing specific hardware cache line sizes $B$ or cache capacities $M$.",
        "Viva Voce Core Question: Master Theorem Limitations: Explaining cases where Master Theorem cannot be applied: non-polynomial difference between $f(n)$ and $n^{\\\\log_b a}$ (e.g. $T(n) = 2 T(n/2) + n \\\\log n$), non-constant $a$ or $b$.",
        "Comprehensive Examination Marking Rubric: Evaluation parameters: Algorithmic correctness ($25\\\\%$), Empirical benchmarking methodology and code quality ($25\\\\%$), Data visualization and regression analysis ($20\\\\%$), Laboratory record documentation ($15\\\\%$), Oral viva voce mastery ($15\\\\%$)."
    ],
    [
        "Amortized Analysis Three Methods: Aggregate method, Accounting method, Potential method.",
        "AVL vs Red-Black Trade-Off: Faster lookups (AVL) vs faster insertions/deletions (Red-Black).",
        "Cache Locality Advantage: Sequential contiguous array access minimizes CPU cache misses.",
        "Bloom Filter Invariant: Zero false negatives guaranteed.",
        "Dijkstra Non-Negative Rule: Greedy choice fails with negative edge weights.",
        "Bellman-Ford Cycle Detection: If edge relaxation succeeds on $V$-th pass, negative cycle exists.",
        "Tabulation Space Optimization: Often allows reducing space from $\\\\mathcal{O}(n^2)$ to $\\\\mathcal{O}(n)$.",
        "Master Theorem Failure Case: Cannot solve recurrences where subproblems are not equal division (e.g. $T(n) = T(n-1) + 1$).",
        "Curve Fit R-Squared Interpretation: Measures proportion of runtime variation explained by asymptotic formula.",
        "Exam Tip: In oral viva, always lead with concrete big-O bounds, explain the trade-off axis (time vs space vs implementation complexity), and cite a real-world system application."
    ]
)

# Output final TypeScript module
output_path = os.path.join(os.path.dirname(__file__), "../src/lib/content-bsc-sem2-math-cs.ts")

ts_content = f"""/**
 * B.Sc Semester 2: Mathematical Sciences, Computer Science & Data Science
 * Curricula: UGC CBCS / NEP 2020 Model Curriculum.
 *
 * Covers 10 Subjects (50 Units total):
 * 1. Real Analysis (Math)
 * 2. Differential Equations & Geometry (CS)
 * 3. Differential Equations & Probability (DS-AI)
 * 4. Problem Solving (Math)
 * 5. Data Structures using C (CS)
 * 6. Data Structures & Algorithms (DS-AI)
 * 7. Data Structures (Math)
 * 8. Statistics II / Database Basics (DS-AI)
 * 9. Data Structures Lab (CS)
 * 10. DSA Lab (DS-AI)
 *
 * All STEM units contain authentic mathematical KaTeX formulas and algorithmic complexities.
 */

import type { TopicKnowledge } from "./content-bsc-sem1";

export const bscSem2MathCsKnowledge: Record<string, TopicKnowledge> = {json.dumps(data, indent=2)};
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully generated {len(data)} units in {output_path}!")
'''

content += part5

with open("scripts/build_bsc_sem2_math_cs.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subjects 8, 9, 10 and configured final TS output.")
