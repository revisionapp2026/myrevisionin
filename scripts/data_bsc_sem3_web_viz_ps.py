"""
B.Sc Semester 3: Web Design, Data Visualization, and Computational Problem Solving
Covers:
- Web Design (HTML/CSS, Forms, Layouts, Responsive Design)
- Data Visualization (Tableau, Power BI, Dashboards, Visual Storytelling)
- Computational Problem Solving & Algorithmic Methods
"""

bsc_sem3_web_viz_units = {
    # -------------------------------------------------------------
    # WEB DESIGN (HTML/CSS)
    # -------------------------------------------------------------
    "bsc-web: html fundamentals": {
        "highlights": [
            "HTML5 Document Object Model (DOM) Architecture: Standard document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`); Semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) enhancing accessibility and SEO indexing.",
            "Text Formatting & Hyperlinks: Heading hierarchy (`<h1>` to `<h6>`), paragraphs (`<p>`), formatting tags (`<strong>`, `<em>`, `<code>`), and anchor tags (`<a href=\"...\" target=\"_blank\" rel=\"noopener noreferrer\">`) establishing absolute and relative navigation paths.",
            "HTML Forms & Advanced Input Controls: Form submission mechanisms (`<form action=\"...\" method=\"POST\">`); Input types (`text`, `email`, `password`, `number`, `date`, `file`, `checkbox`, `radio`); Input validation attributes (`required`, `pattern`, `min`, `max`, `placeholder`).",
            "Multimedia Integration & Embedded Content: Native HTML5 audio and video playback (`<audio controls>`, `<video poster=\"...\" controls>`) with fallback sources; Inline scalable vector graphics (`<svg>`) and dynamic raster rendering using `<canvas>` API.",
            "Semantic Tables & Accessibility Standards: Structured data tables using `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>` (with `scope=\"col/row\"`), and `<td>`; WAI-ARIA roles (`aria-label`, `aria-expanded`, `role=\"navigation\"`) supporting screen readers."
        ],
        "keyPoints": [
            "HTML5 Doctype Declaration: Simple case-insensitive declaration `<!DOCTYPE html>` triggering standards rendering mode in modern web browsers.",
            "Semantic Tag Accessibility: Using `<article>` and `<section>` tags provides structural meaning to search engine crawlers and assistive technology.",
            "Form GET vs POST: `GET` appends form payload directly to URL query string (limited payload, insecure for passwords); `POST` sends payload in HTTP request body.",
            "SVG vs Canvas: SVG represents vector XML DOM nodes (scalable without pixelation, DOM event listeners); Canvas is pixel-based raster bitmap immediate-mode drawing.",
            "Target Blank Security: Always append `rel=\"noopener noreferrer\"` to `<a target=\"_blank\">` links to prevent reverse tab-nabbing vulnerabilities."
        ]
    },
    "bsc-web: css & responsive design": {
        "highlights": [
            "CSS Box Model Architecture: Core layout foundation comprising Content box, Padding, Border, and Margin; Box-sizing property (`box-sizing: border-box` vs `content-box`) governing dimension calculations.",
            "CSS Selectors and Specificity Hierarchy: Type, class (`.btn`), ID (`#main`), attribute (`[type=\"text\"]`), pseudo-classes (`:hover`, `:focus`, `:nth-child()`), and pseudo-elements (`::before`, `::after`); Specificity scoring vector (Inline, ID, Class, Type).",
            "CSS Flexbox Layout Model: One-dimensional layout along main and cross axes; Container properties (`display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`); Item properties (`flex-grow`, `flex-shrink`, `flex-basis`).",
            "CSS Grid Layout Model: Two-dimensional layout system with explicit grid tracks; Grid container properties (`display: grid`, `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`, `grid-gap`); Placement using `grid-column` and `grid-row` spans.",
            "Responsive Web Design & CSS Media Queries: Fluid grid systems, responsive image handling (`max-width: 100%`), and CSS media queries (`@media (max-width: 768px)`); Mobile-first responsive development paradigms."
        ],
        "keyPoints": [
            "Border-Box Advantage: Setting `box-sizing: border-box` includes padding and borders inside specified element width, eliminating unexpected overflow.",
            "Specificity Calculation: Inline style ($1000$) > ID selector ($100$) > Class/attribute/pseudo-class ($10$) > Type selector ($1$).",
            "Flexbox Main Axis Alignment: `justify-content` controls spacing along main axis (`center`, `space-between`, `space-around`).",
            "Grid Fractional Unit: `1fr` allocates one fraction of available free space in the grid container.",
            "Mobile-First Media Query: Employs `min-width` queries starting from smallest smartphone screen dimensions and progressively enhancing layouts."
        ]
    },

    # -------------------------------------------------------------
    # DATA VISUALIZATION (TABLEAU / POWER BI)
    # -------------------------------------------------------------
    "bsc-viz: visualization principles": {
        "highlights": [
            "Grammar of Graphics & Visual Encoding: Mapping data dimensions to aesthetic graphical channels (position, length, angle, area, color hue, color saturation, shape); Position along common scale provides highest human perceptual precision (Cleveland-McGill hierarchy).",
            "Chart Type Selection & Best Practices: Bar charts for discrete categorical comparisons, Line charts for continuous temporal trends, Scatter plots for bivariate correlation analysis, Histograms for frequency distributions, and Box plots for statistical quartile comparisons.",
            "Visual Clutter Elimination & Data-Ink Ratio: Edward Tufte principles; Maximizing data-ink ratio ($= \\frac{\\text{Data-Ink}}{\\text{Total Ink Used}}$); Eliminating non-essential grid lines, heavy decorative borders, 3D chart distortions, and distracting background textures.",
            "Color Theory & Accessible Visual Palettes: Using sequential color scales for ordered numeric data, diverging palettes with neutral midpoint for zero-centered data, and categorical palettes with high contrast; Designing for color vision deficiency (color blindness safety).",
            "Exploratory vs Explanatory Visualization: Exploratory data analysis (uncovering hidden patterns, anomalies, and hypothesis generation) vs Explanatory data presentation (delivering focused insights, executive takeaways, and targeted calls to action)."
        ],
        "keyPoints": [
            "Cleveland-McGill Perceptual Hierarchy: Position on common scale > Length > Direction/Slope > Angle > Area > Volume > Color Saturation.",
            "Tufte Data-Ink Rule: Remove all ink that does not convey direct information; Eliminate chartjunk and redundant legends.",
            "Avoid 3D Pie Charts: 3D perspective distortion severely misrepresents underlying quantitative wedge angles and surface areas.",
            "Lie Factor Metric: Ratio of size of effect shown in graphic to size of effect in data; Must equal unity ($1.0$) for honest visualization.",
            "Accessible Color Palettes: Avoid red-green contrasting palettes; Use blue-orange or viridis palettes for accessibility."
        ]
    },
    "bsc-viz: dashboards & storytelling": {
        "highlights": [
            "Business Intelligence Architecture in Tableau and Power BI: Data connection and modeling (Star schema, Snowflake schema, fact and dimension tables), data preparation, calculated fields, DAX (Data Analysis Expressions), and interactive report design.",
            "Interactive Dashboard Features: Cross-filtering, drill-down hierarchies, dynamic slicers, parameters, tooltips, and URL actions enabling multi-dimensional data exploration.",
            "Key Performance Indicator (KPI) Design: Single-value scorecards displaying current metrics against benchmark targets, accompanied by sparklines and conditional color status indicators.",
            "Visual Storytelling Frameworks: Structuring analytical presentations using narrative arcs (Setting the Context $\\to$ Rising Conflict/Problem Discovery $\\to$ Climax/Root Cause Insight $\\to$ Resolution/Actionable Strategy).",
            "Dashboard Usability & Human Cognitive Load: Organizing layout following natural reading patterns (F-pattern or Z-pattern, most important KPI in top-left quadrant); Enforcing consistent typography, padding, and alignment."
        ],
        "keyPoints": [
            "DAX Measures vs Calculated Columns: Measures are computed dynamically on the fly based on user filter context; Calculated columns are computed once during refresh and stored in memory.",
            "Star Schema Advantage: Central fact table connected directly to denormalized dimension tables; Provides optimal query performance in Power BI.",
            "Tableau LOD Expressions: Level of Detail expressions (`{FIXED}`, `{INCLUDE}`, `{EXCLUDE}`) calculate aggregations independent of view shelf dimensions.",
            "F-Pattern Layout: Users naturally scan web dashboards starting from top-left, moving horizontally, then down the left margin.",
            "Drill-Down Interactivity: Allows executive users to click a high-level summary category and navigate seamlessly to granular transactional records."
        ]
    },

    # -------------------------------------------------------------
    # PROBLEM SOLVING
    # -------------------------------------------------------------
    "bsc-ps: problem solving methodologies": {
        "highlights": [
            "Algorithmic Thinking & Problem Formulation: Deconstructing complex real-world challenges into structured computational subproblems; Problem definition, input-output specification, boundary conditions, and invariant identification.",
            "Top-Down Modular Decomposition: Stepwise refinement breaking monolithic problems into cohesive, loosely coupled modular functions and subroutines; Enhances debugging, testability, and code reuse.",
            "Core Algorithmic Design Paradigms: Divide-and-Conquer (dividing into subproblems, e.g. Merge Sort), Greedy approach (locally optimal choices, e.g. Dijkstra, Huffman coding), and Dynamic Programming (memoization and tabulation for overlapping subproblems, e.g. Knapsack problem).",
            "Asymptotic Complexity & Algorithm Evaluation: Big-O upper bound notation ($O(1), O(\\log n), O(n), O(n\\log n), O(n^2), O(2^n)$); Space-time trade-off analysis evaluating memory footprint against CPU execution latency.",
            "Verification, Boundary Testing & Edge Cases: Structured test case design including nominal inputs, zero/null cases, extreme boundary values, and malicious corner cases; Formal assertions and invariant loop checking."
        ],
        "keyPoints": [
            "Polya Problem Solving Stages: (1) Understand the problem, (2) Devise a plan, (3) Carry out the plan, (4) Look back and reflect.",
            "Divide-and-Conquer Master Theorem: $T(n) = a T(n/b) + f(n)$ evaluating recursion runtimes.",
            "Greedy Choice Property: A globally optimal solution can be arrived at by making locally optimal choices without backtracking.",
            "Dynamic Programming Hallmarks: Requires optimal substructure and overlapping subproblems.",
            "Loop Invariant Criterion: Condition that is true before loop begins, remains true after each iteration, and proves algorithm correctness upon termination."
        ]
    }
}
