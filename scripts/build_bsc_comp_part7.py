import json, os

with open('scripts/sem3_bsc_computing_math_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

data = {}
for k, v in raw.items():
    sub, num = k.split(":::")
    data[(sub, int(num))] = v

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    for s in hl + kp:
        assert '$' not in s, f"Dollar sign found in {sub} U{num}: {s}"
    data[(sub, num)] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 13. WEB DESIGN (HTML/CSS) (B.Sc)
# =========================================================================
add("Web Design (HTML/CSS)", 1, "HTML Basics", [
    "World Wide Web Architecture & Client-Server Fundamentals: HTTP/HTTPS communication protocol, web servers (Apache, Nginx), and user agent web browsers; W3C web standards and modern HTML5 specifications.",
    "Document Object Model (DOM) Tree Structure: Hierarchical tree representation of web pages; Root html element branching into head and body tags; Element nodes, attribute nodes, text nodes, and parent-child-sibling relationships.",
    "Standard HTML5 Document Skeleton: Strict DOCTYPE html declaration; html lang='en' attribute; Essential head metadata tags: meta charset='UTF-8', viewport meta tag for responsive scaling, title, and link rel='stylesheet'.",
    "Semantic HTML5 Structural Elements: Replacing generic div soup with semantic landmarks: header, nav (navigation links), main (unique primary content), article (self-contained syndicatable entry), section (thematic grouping), aside (sidebar content), and footer.",
    "Text Formatting & Heading Hierarchies: Strict heading levels h1 through h6 (enforcing single h1 per page for SEO); Paragraphs p, line breaks br, horizontal rules hr; Semantic text formatting: strong (importance), em (emphasis), mark (highlight), code, blockquote, and cite.",
    "Hyperlinks & Anchor Navigation: The anchor a tag and href attribute; Absolute URLs (external domains) vs Relative URLs (local file paths); Target attribute (_blank with rel='noopener noreferrer' for security); Anchor fragment identifiers (#section-id) for smooth in-page jumping.",
    "Multimedia Elements Integration: Embedding images via img tag with required alt attribute (web accessibility WCAG compliance), loading='lazy' for performance optimization; Native audio and video tags with controls, autoplay, loop, and nested source tags.",
    "Unordered, Ordered & Definition Lists: Bulleted lists (ul, li), numbered lists (ol with type and start attributes), and description definition lists (dl, dt term, dd description); Constructing semantic multi-level navigation menus.",
    "Semantic Data Tables: Constructing accessible tabular structures: table, caption, thead, tbody, tfoot; Header cells th with scope='col' or scope='row' attributes; Spanning cells across dimensions using colspan and rowspan.",
    "University Examination Strategy: Write a valid semantic HTML5 webpage structure adhering to W3C guidelines, create an accessible data table using colspan and rowspan, and explain the security implications of target='_blank' with rel='noopener noreferrer'."
], [
    "HTML5 DOCTYPE: Case-insensitive declaration <!DOCTYPE html> triggering standard standards-compliant rendering mode in modern browsers.",
    "Viewport Meta Tag: meta name='viewport' content='width=device-width, initial-scale=1.0' ensures proper mobile device scaling.",
    "Semantic Main Rule: Only one unique main element permitted per document; must not be nested inside header, nav, or footer.",
    "Alt Attribute Mandate: Screen readers rely on descriptive img alt text to convey non-decorative image content to visually impaired users.",
    "Noopener Security Defense: rel='noopener' prevents newly opened tab from hijacking window.opener reference to execute phishing redirects.",
    "Lazy Loading Images: loading='lazy' instructs the browser to defer off-screen image network requests until user scrolls near them.",
    "Scope Attribute in Tables: th scope='col' explicitly binds header cells to corresponding data columns for assistive technologies.",
    "Block vs Inline Elements: Block elements (div, p, h1) begin on a fresh line and span full width; Inline elements (span, a, strong) hug content.",
    "Character Encoding Standard: meta charset='UTF-8' standardizes universal Unicode character representation across all languages.",
    "Exam Gold Tip: Emphasize that semantic HTML directly boosts organic search engine ranking (SEO) and complies with global accessibility laws."
])

add("Web Design (HTML/CSS)", 2, "CSS", [
    "Cascading Style Sheets (CSS3) Foundational Architecture: Separation of presentation styling from document HTML structure; Syntax anatomy: Selector, property, value, and declaration block; Vendor prefixes (-webkit-, -moz-).",
    "Three Methods of CSS Application: Inline styles (style attribute; high specificity, difficult maintenance), Internal stylesheet (style tag inside head), and External stylesheet (link rel='stylesheet' href='styles.css'; enables browser caching and site-wide reusability).",
    "CSS Selectors Spectrum: Basic selectors: Universal (*), Type/Tag, Class (.class-name), and ID (#id-name); Combinators: Descendant (space), Direct Child (>), Adjacent Sibling (+), and General Sibling (~); Attribute selectors ([type='text'], [href^='https']).",
    "Pseudo-Classes & Pseudo-Elements: Pseudo-classes styling dynamic states: :hover, :active, :focus, :focus-visible, and structural :first-child, :last-child, :nth-child(2n+1); Pseudo-elements injecting cosmetic elements: ::before and ::after (requiring content: '').",
    "The CSS Cascade, Specificity & Inheritance: Resolving property conflicts: Importance (!important), Specificity calculation (Inline = 1000, ID = 100, Class/Attribute/Pseudo-class = 10, Type/Pseudo-element = 1), and Source Order; Naturally inherited properties (color, font-family).",
    "The CSS Box Model Geometry: Fundamental dimensional model: Content box (width/height), Padding (internal clearance), Border, and Margin (external clearance); Negative margins; Margin collapsing between adjacent vertical block siblings.",
    "Box-Sizing Property: Standard content-box (width equals content alone, padding and border expand total outer size) vs box-sizing: border-box (width includes content, padding, and border); Universal reset * { box-sizing: border-box; }.",
    "Typography & Web Fonts Integration: Font families, web-safe fallbacks, font-size (px, em, rem; why rem is superior for accessibility), font-weight, line-height, text-align, and text-transform; Loading Google Web Fonts via link or @import.",
    "CSS Colors, Gradients & Backgrounds: Color models: Named colors, Hexadecimal (#rrggbb, #rrggbbaa), RGB/RGBA (rgba(255, 0, 0, 0.5)), and HSL/HSLA; Linear gradients (linear-gradient(45deg, #f06, #4a9)) and radial gradients; Background images and background-size: cover.",
    "University Examination Strategy: Calculate the specificity score for conflicting CSS selectors, explain the box model with neat labeled diagrams comparing content-box vs border-box, and demonstrate vertical margin collapsing."
], [
    "Border-Box Reset: box-sizing: border-box forces padding and border widths inside declared element width, preventing layout breakage.",
    "Specificity Hierarchy: Inline style (1,0,0,0) overrides ID (0,1,0,0), which overrides Class (0,0,1,0), which overrides Tag element (0,0,0,1).",
    "Margin Collapsing Rule: Adjacent vertical margins of two block elements collapse into a single margin equal to the maximum of the two.",
    "REM Unit Superiority: 1rem equals root html font-size (default 16px), scaling seamlessly when users adjust browser font preferences.",
    "EM Cascading Compound: 1em equals current parent font-size, compounding exponentially when nested inside multiple container levels.",
    "Pseudo-Element Content Rule: ::before and ::after pseudo-elements remain invisible unless the content: '' property is explicitly defined.",
    "Focus-Visible Accessibility: Highlights interactive controls when navigated via keyboard while suppressing outline during mouse clicks.",
    "Linear Gradient Angle: 0deg points upward; 90deg points to the right; default gradient direction flows top-to-bottom (180deg).",
    "Inherited Properties List: Font and text properties inherit down the DOM tree; box-model dimensions, borders, and margins never inherit.",
    "Exam Gold Tip: Never abuse !important to override styling; refactor selector specificity to maintain a clean, maintainable stylesheet."
])

add("Web Design (HTML/CSS)", 3, "Forms", [
    "HTML Form Architecture & Submissions: The form container tag; Attributes: action (target server processing URL), method (GET appending parameters to URL query string vs POST transmitting data securely in HTTP request body), and enctype.",
    "Input Controls Spectrum: Versatile input element governed by type attribute: text, password (masked input), email, number (min, max, step), date, tel, url, checkbox (multiple selections), radio (mutually exclusive group sharing name attribute), and file.",
    "Semantic Labels & Accessibility: Explicit label element binding via for attribute matching child input id attribute; Expanding clickable touch targets; Screen reader association; Implicit wrapping nesting input inside label.",
    "Multi-Line Text & Dropdown Menus: textarea element (rows, cols attributes; resizable text box); Dropdown select menus with nested option elements; Grouping related choices via optgroup with label; select multiple attribute.",
    "Button Elements & Action Types: button element vs input type='button'; Button types: type='submit' (submits enclosing form), type='reset' (resets fields to default initial values), and type='button' (neutral hook for JavaScript event handlers).",
    "Grouping Form Fields: fieldset element semantically grouping related input controls (e.g. billing address vs shipping address); legend element providing descriptive caption header for fieldset group.",
    "HTML5 Native Client-Side Validation: Built-in validation attributes: required (prohibits empty submission), minlength and maxlength, pattern (regular expression matching), min and max; Automatic browser validation tooltips.",
    "User Interface Form Pseudoclasses: CSS styling based on input validation state: :focus, :valid, :invalid, :required, :optional, :disabled, and :checked; Designing custom accessible checkboxes using sibling combinators (input:checked + label).",
    "File Uploads & Security Precautions: input type='file' with accept attribute filtering MIME types (.pdf, image/*); Mandatory enctype='multipart/form-data' attribute on parent form tag; File size limitations and CSRF protection.",
    "University Examination Strategy: Build a complete registration form with text, radio, select, and file inputs incorporating HTML5 validation, style custom radio buttons using CSS pseudo-classes, and contrast GET vs POST submission methods."
], [
    "GET vs POST Difference: GET exposes form parameters in URL query string (insecure for passwords); POST transmits payload in HTTP body.",
    "Radio Group Name Binding: Radio buttons must share an identical name attribute to ensure strict mutual exclusion in single choice groups.",
    "Multipart Form-Data Rule: Submitting binary file uploads strictly requires enctype='multipart/form-data' on the parent form tag.",
    "Explicit Label For Binding: label for='user-email' connects directly to input id='user-email', focusing field when label is clicked.",
    "Pattern Attribute Regex: pattern='[0-9]{10}' validates 10-digit telephone numbers natively in the browser without JavaScript.",
    "Required Attribute Validation: Prevents form submission and triggers native browser alert tooltip if the input field remains blank.",
    "Button Default Type Warning: An unadorned button tag inside a form defaults to type='submit', causing unintentional form submissions.",
    "Optgroup Accessibility: Organizes long dropdown select lists into categorized visual groups using unselectable bold headers.",
    "Placeholder vs Label: Placeholders disappear upon typing and must never replace permanent visible label elements.",
    "Exam Scoring Tip: In form design questions, always include appropriate input types (e.g. email, tel, date) to trigger proper mobile keyboards."
])

add("Web Design (HTML/CSS)", 4, "Layouts", [
    "Traditional Web Layout Mechanisms: Normal document flow (block vs inline); CSS float property (float: left / right) wrapping text around images; The Clearfix Hack (clearfix::after { content: ''; display: table; clear: both; }) to prevent parent container height collapse.",
    "CSS Positioning Scheme: Static positioning (default normal flow); Relative positioning (offset via top, right, bottom, left relative to normal position without disturbing adjacent elements); Absolute positioning (removed from normal flow, positioned relative to nearest positioned ancestor); Fixed positioning (anchored to viewport); Sticky positioning.",
    "Stacking Context & The Z-Index Property: 3D stacking order along the z-axis; z-index integer values; Requirements for z-index activation: Element must have a position value other than static (relative, absolute, fixed, sticky) or be a flex/grid child; Stacking context formation.",
    "CSS Display Property Spectrum: display: none (removes element from DOM rendering tree; contrasts with visibility: hidden which retains whitespace footprint); display: inline-block (inline flow with custom width and height); Modern layout systems: Flexbox and Grid.",
    "Flexbox One-Dimensional Layout Architecture: Display: flex declaring flex container; Main axis vs Cross axis; flex-direction (row, row-reverse, column, column-reverse); flex-wrap (nowrap, wrap); justify-content (main axis alignment: flex-start, center, space-between, space-around, space-evenly).",
    "Flexbox Cross-Axis Alignment & Item Properties: align-items (cross-axis alignment of all items: stretch, center, flex-start, baseline); align-content (multi-line row spacing); Flex item properties: flex-grow (distribution of excess space), flex-shrink (rate of contraction), flex-basis (initial size), and shorthand flex: 1 1 auto; align-self.",
    "CSS Grid Two-Dimensional Layout Architecture: Display: grid declaring grid container; Explicit columns and rows: grid-template-columns and grid-template-rows; The flexible fractional unit (fr); repeat() helper function and minmax(min, max); grid-gap / gap spacing.",
    "Grid Item Placement & Named Template Areas: Placing items via line numbers: grid-column: 1 / 3, grid-row: 2 / 4; Shorthand span notation; Visual layout modeling via grid-template-areas: defining ASCII-like template areas (header, sidebar, content, footer) and assigning grid-area: header.",
    "Auto-Fit vs Auto-Fill Dynamic Grids: Responsive multi-column layout without media queries: grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); auto-fit expands cards to fill empty space, while auto-fill reserves empty ghost tracks.",
    "University Examination Strategy: Construct a full responsive Holy Grail layout using CSS Grid with named grid areas, explain the difference between absolute vs fixed positioning with stacking context rules, and demonstrate Flexbox alignment properties."
], [
    "Clearfix Technique: Injects pseudo-element with clear: both to force parent container to expand and encompass floated child elements.",
    "Absolute Position Anchor: An absolute element positions itself relative to the closest ancestor possessing position: relative/absolute/fixed.",
    "Sticky Positioning Hybrid: Acts as relative positioning until viewport scroll threshold is crossed, whereupon it locks like fixed positioning.",
    "Z-Index Prerequisite: z-index has zero effect on standard elements unless position is set to relative, absolute, fixed, or sticky.",
    "Flex Main vs Cross Axis: justify-content aligns items along the primary main axis; align-items aligns items along perpendicular cross axis.",
    "Fractional Unit (fr): Represents a fraction of the leftover free space in the grid container after allocating fixed pixel/rem tracks.",
    "Flex-Grow Proportion: Defines how remaining empty container space is proportionally distributed among expanding flex items.",
    "Auto-Fit Responsive Power: repeat(auto-fit, minmax(250px, 1fr)) creates fully responsive auto-wrapping card grids without media queries.",
    "Visibility Hidden vs Display None: visibility: hidden conceals element while reserving space; display: none eliminates element footprint entirely.",
    "Exam Gold Tip: Use Flexbox for one-dimensional layouts (menus, toolbars) and CSS Grid for two-dimensional structural page layouts (rows and columns)."
])

add("Web Design (HTML/CSS)", 5, "Responsive Design", [
    "The Responsive Web Design (RWD) Paradigm: Ethan Marcotte (2010); Design methodology ensuring web applications deliver optimal viewing, reading, and interaction experiences across smartphones, tablets, laptops, and ultra-wide desktops.",
    "Three Pillars of Responsive Web Design: (1) Fluid flexible grid layouts based on proportional percentages or fractional units; (2) Flexible responsive images and multimedia scaling within fluid bounds; (3) CSS3 Media Queries tailoring layouts to viewport dimensions.",
    "Mobile-First Design Philosophy: Progressive Enhancement: Designing the core user experience for resource-constrained mobile screens first; Utilizing min-width media queries to progressively layer on desktop enhancements as screen real estate expands.",
    "CSS3 Media Queries Syntax: @media screen and (min-width: 768px) { ... }; Combining features with logical operators: and, not, only, comma (OR); Modern range syntax: @media (width >= 768px); Testing orientation: (orientation: portrait / landscape).",
    "Standard Responsive Breakpoint Architecture: Industry standard viewport ranges: Mobile (< 576px), Small Tablets / Phablets (576px - 767px), Tablets / Small Desktops (768px - 991px), Large Desktops (992px - 1199px), and Extra Large Screens (>= 1200px).",
    "Fluid Responsive Images & Art Direction: CSS rule: img { max-width: 100%; height: auto; } preventing image container overflow; HTML5 picture element with source media queries providing art direction (different cropped image ratios for mobile vs desktop).",
    "Responsive Image Resolution Switching: img srcset attribute supplying multiple image resolutions (e.g. image-400w.jpg 400w, image-800w.jpg 800w); sizes attribute informing browser of rendered display slot width; Browser downloads minimal required bytes.",
    "Modern Fluid Typography with clamp(): Fluid scaling without media query jumps: font-size: clamp(min, preferred, max); Utilizing viewport units (vw, vh); Example: font-size: clamp(1rem, 2.5vw + 0.5rem, 2.5rem); Fluid spacing and padding.",
    "Testing & Responsive Developer Tools: Emulating device viewports in Chrome DevTools / Firefox Developer Edition; Simulating network throttling (3G/4G), device pixel ratios (Retina 2x/3x), touch events, and user accessibility preferences (@media (prefers-color-scheme: dark)).",
    "University Examination Strategy: Write a complete mobile-first responsive layout utilizing min-width media queries at 768px and 1024px breakpoints, demonstrate fluid typography using clamp(), and implement the picture element for responsive art direction."
], [
    "Max-Width 100% Image Rule: Setting max-width: 100% and height: auto ensures images shrink gracefully without distorting aspect ratio.",
    "Mobile-First Min-Width: Mobile-first stylesheets place mobile styles at base level and layer desktop complexity inside @media (min-width: ...).",
    "Clamp() Function Parameters: Takes three values: minimum lower bound, preferred fluid scaling expression, and maximum upper ceiling bound.",
    "Picture Element Art Direction: Serves completely different cropped image compositions to small mobile screens compared to wide landscapes.",
    "Srcset and Sizes Synergy: Informs browser about image file source widths and intended layout slots, letting browser pick optimal resolution.",
    "Desktop-First Hazard: Max-width media queries load heavy desktop CSS rules onto resource-constrained mobile processors first.",
    "Prefers-Color-Scheme Query: Media query detecting user operating system preference for light mode or dark mode themes.",
    "Device Pixel Ratio (DPR): High-density Retina displays pack 2 to 3 physical screen pixels per CSS pixel, requiring higher resolution assets.",
    "Container Queries Revolution: @container queries evaluate the dimensions of a parent card container rather than the global browser viewport.",
    "Exam Scoring Tip: In responsive design questions, always write the viewport meta tag first; without it, mobile browsers render desktop pages zoomed out."
])

# =========================================================================
# 14. DATA VISUALIZATION (TABLEAU/POWER BI) (B.Sc)
# =========================================================================
add("Data Visualization (Tableau/Power BI)", 1, "Visualization Principles", [
    "Data Visualization Foundational Purpose: Translating complex raw numeric and relational data into graphical representations; Amplifying human cognitive bandwidth, facilitating rapid pattern recognition, trend discovery, and anomaly detection.",
    "Jacques Bertin's Semiology of Graphics: Seminal framework (1967); Visual variables: Position (X, Y coordinates), Size (length, area), Shape, Orientation, Color Hue, Color Value (lightness/saturation), and Texture; Effectiveness rankings for quantitative vs categorical data.",
    "Preattentive Visual Processing: Visual attributes processed by human sensory memory in less than 250 milliseconds prior to conscious attention; Preattentive attributes: 2D spatial position, length, width, size, color hue, color intensity, and motion.",
    "Edward Tufte's Design Principles: Data-Ink Ratio maximization: Proportion of graphic's ink devoted to non-redundant data content; Eliminating Chartjunk (extraneous decorative elements, unnecessary 3D effects, moiré vibrations); Lie Factor formula: Size of effect shown in graphic divided by size of effect in data (must equal 1.0).",
    "Data Types & Measurement Scales: Nominal / Categorical (discrete categories lacking intrinsic rank: country, gender), Ordinal (ordered categories lacking fixed interval: small, medium, large), Interval (quantitative, fixed scale, arbitrary zero: temperature Celsius), and Ratio (true zero: revenue, age).",
    "Cognitive Load Theory in Interface Design: Minimizing extraneous cognitive load; Gestalt Principles of visual perception: Proximity (objects close together perceived as group), Similarity (shared color/shape grouped), Enclosure, Continuity, and Closure.",
    "Color Theory & Palette Selection in Visualization: Categorical / Qualitative palettes (distinct hues for nominal categories), Sequential palettes (monochromatic gradients of lightness for ordered quantities), and Diverging palettes (two contrasting hues diverging from neutral midpoint).",
    "Color Accessibility & Universal Design: Designing for color vision deficiency (deuteranopia, protanopia, tritanopia); Avoiding red-green conflict pairings; Utilizing accessible palettes (ColorBrewer, Viridis); Enforcing minimum WCAG text contrast ratios (4.5:1).",
    "Common Visual Deceptions & Misleading Charts: Truncated Y-axes exaggerating small differences in bar charts (bar charts must always start at zero), Dual axes with incompatible scaling factors, Distorted area/volume representations of linear quantities, and Cherry-picked time intervals.",
    "University Examination Strategy: Calculate the Data-Ink Ratio and Lie Factor for a given chart, explain Bertin's visual variables ranked by perceptual accuracy, and detail the three primary types of color palettes with domain use cases."
], [
    "Data-Ink Ratio Maximization: Data-Ink Ratio = (Data-Ink) / (Total Ink used in graphic); aim for value approaching 1.0 by removing clutter.",
    "Lie Factor Metric: Lie Factor = (Size of effect in graphic) / (Size of effect in data); values greater than 1.0 distort and exaggerate reality.",
    "Position Accuracy Dominance: Cleveland and McGill empirical experiments prove human eyes judge position along a common scale most accurately.",
    "Bar Chart Zero Baseline Rule: Bar lengths encode numerical values; truncating Y-axis baseline distorts proportional magnitude comparisons.",
    "Preattentive Speed: Human visual cortex identifies preattentive color or position outliers in under 250 ms without conscious mental effort.",
    "Gestalt Law of Proximity: Visual elements positioned in close spatial physical proximity are instinctively perceived as belonging together.",
    "Diverging Palette Application: Ideal for data centered around meaningful critical midpoint (e.g. profit/loss, budget variance, temperatures).",
    "Chartjunk Elimination: Unnecessary 3D perspective bars, heavy dark gridlines, and ornamental background images degrade analytical clarity.",
    "Viridis Color Map Advantage: Perceptually uniform across lightness spectrum and fully distinguishable by individuals with color blindness.",
    "Exam Gold Tip: Always explain why 3D pie and bar charts should be avoided: perspective projection distorts relative angles and area judgments."
])

add("Data Visualization (Tableau/Power BI)", 2, "Charts", [
    "Taxonomy of Visual Chart Types: Selecting chart forms based on analytical communication intent: Comparison, Composition / Part-to-Whole, Distribution, Relationship / Correlation, and Geospatial Mapping.",
    "Comparison Visualizations: Vertical Bar Charts and Horizontal Bar Charts (ideal for long categorical label strings); Stacked Bar Charts (showing total and sub-component breakdown); Grouped / Clustered Bar Charts; Bullet Graphs (comparing actual performance against benchmark target).",
    "Time-Series & Trend Visualizations: Line Charts (continuous trend analysis across equispaced time intervals; Y-axis need not start at zero if clearly labeled); Area Charts (magnitude trend over time); Sparklines (compact word-sized trendline graphics embedded in tables).",
    "Part-to-Whole Visualizations: Pie Charts (prohibited when categories exceed 5 or slices have similar values); Donut Charts (central cavity used to display total KPI metric); Treemaps (nested hierarchical rectangles encoding size and color); Waffle Charts.",
    "Distribution Visualizations: Histograms (binning continuous numerical data into uniform intervals to show frequency distribution); Kernel Density Estimation (KDE) curves; Box-and-Whisker Plots (Five-Number Summary: Minimum, Q1, Median, Q3, Maximum, and IQR outlier points).",
    "Correlation & Relationship Visualizations: Scatter Plots (plotting two continuous variables along X and Y coordinates to inspect correlation and clusters); Bubble Charts (adding third quantitative variable via circle area; fourth via color hue); Heatmaps and Correlation Matrices.",
    "Ranking & Flow Visualizations: Slopegraphs (comparing before-and-after ranking shifts between two time points); Bump Charts (visualizing rank progression over multiple periods); Sankey Diagrams (visualizing multi-stage flow volumes and drop-offs); Waterfall Charts.",
    "Geospatial Visualizations: Filled Choropleth Maps (shading geographical polygon boundaries by aggregate quantitative value; risk of geographical area misleading population density); Proportional Symbol / Bubble Maps; Hexbin and Cartogram Maps.",
    "Advanced Composite Visualizations: Pareto Charts (bar chart of descending frequencies combined with cumulative percentage line; 80/20 rule); Radar / Spider Charts (multivariate profiling; caution regarding arbitrary axis ordering).",
    "University Examination Strategy: Construct a Box-and-Whisker plot from raw numerical sample data indicating quartiles and outliers, evaluate when to use a Treemap vs a Bar chart, and draw a Pareto chart showing cumulative percentage calculation."
], [
    "Five-Number Summary: Box plots depict Minimum, First Quartile Q1, Median Q2, Third Quartile Q3, and Maximum.",
    "Outlier IQR Boundary: Outliers defined as points falling beyond Q1 - 1.5 * IQR or Q3 + 1.5 * IQR, where IQR = Q3 - Q1.",
    "Bubble Area Encoding: Size of circle markers must scale proportionally to area (pi * r^2), NOT radius; scaling radius squares the apparent data.",
    "Horizontal Bar Advantage: Preferred when category labels are long string titles, eliminating awkward angled text tilting.",
    "Pareto 80/20 Rule: Identifies the vital few causes (roughly 20 percent) responsible for the vast majority (80 percent) of total problems.",
    "Treemap Hierarchical Power: Displays nested categorical trees using space-filling rectangles, ideal for inspecting multi-level allocations.",
    "Choropleth Map Limitation: Large land areas visually dominate small dense urban centers; proportional symbol maps mitigate this distortion.",
    "Waterfall Chart Utility: Illustrates how an initial baseline value increases or decreases through positive and negative sequential contributions.",
    "Line Chart Continuity: Strictly intended for continuous ordered scales (especially dates and times); never for discrete nominal categories.",
    "Exam Scoring Tip: In questions on chart selection, justify your choice by mapping the independent variable type and the analytical goal."
])

add("Data Visualization (Tableau/Power BI)", 3, "Dashboards", [
    "Business Intelligence Dashboard Concept: Centralized single-screen cognitive interface aggregating real-time Key Performance Indicators (KPIs); Tactical, Strategic, and Operational dashboards; F-shaped reading eye-tracking patterns.",
    "Information Architecture & Layout Hierarchy: Placing mission-critical summary metrics (KPI cards) at top-left; Secondary diagnostic charts across the middle band; Granular data tables and detailed records at the bottom; Grid alignment and generous whitespace.",
    "Interactive Filter Mechanics: Global interactive filters vs local visualization-level filters; Slicers (date ranges, dropdown lists, toggle buttons); Cross-filtering and cross-highlighting behavior (selecting a bar in Chart A dynamically filters or dims Charts B and C).",
    "Drill-Down & Hierarchical Exploration: Configuring multidimensional data hierarchies (Year -> Quarter -> Month -> Day; Country -> State -> City); Drill-down buttons allowing users to navigate from macro enterprise aggregates down to root transaction rows.",
    "Tooltips & Visual Micro-Details: Hover tooltip cards displaying supplementary contextual data without cluttering primary view; Viz-in-Tooltip (embedding miniature dynamic charts inside tooltips for instant trend previews).",
    "Dashboard Performance Optimization: Query optimization: Minimizing number of visual elements per page (aiming for 4-6 primary visuals); Pre-aggregating data at database source; Extracting data into local columnar storage engines; Eliminating high-cardinality filters.",
    "Visual Consistency & Design Systems: Establishing consistent color semantics (e.g. green strictly for favorable metrics, red strictly for unfavorable); Standardizing typography, padding, and corner radii; Creating reusable corporate dashboard design templates.",
    "Accessibility & Assistive Navigation: Providing accessible chart descriptions and alternate data table views; Ensuring keyboard tab navigation order across interactive slicers; Enforcing accessible contrast on KPI text cards.",
    "Publishing, Sharing & Role-Based Governance: Publishing reports to cloud services (Tableau Server / Tableau Cloud, Power BI Service); Configuring automated scheduled data refreshes; Setting up Row-Level Security (RLS) restricting regional managers to their territory.",
    "University Examination Strategy: Design a complete layout mockup for an Executive Sales Performance Dashboard detailing KPI placement and chart selections, explain cross-filtering vs cross-highlighting, and describe Row-Level Security implementation."
], [
    "F-Pattern Layout Rule: Users scan top horizontally first, then drop down and scan a shorter horizontal width; top-left is prime visual real estate.",
    "Visual Count Threshold: Restricting dashboard canvases to 4 to 6 focused visuals prevents cognitive overload and sluggish render latency.",
    "Cross-Filtering Action: Clicking a categorical segment in one visual filters the data subset displayed across all other dashboard visuals.",
    "Cross-Highlighting Action: Dims unselected portions across visuals while retaining full comparative context of total parent categories.",
    "Row-Level Security (RLS): Enforces data security filters at the database model level so users see only records permitted by their active role.",
    "KPI Card Component: Prominently displays large single numerical value accompanied by sparkline trend and percentage comparison against target.",
    "Viz-in-Tooltip Feature: Renders a secondary micro-chart dynamically inside the mouse hover pop-up window, keeping main canvas uncluttered.",
    "Scheduled Refresh Pipeline: Automates regular data extraction from enterprise data warehouses at set intervals without manual intervention.",
    "Mobile Layout Adaptation: Rearranging wide desktop dashboard grids into vertical single-column scrolling feeds for smartphone screens.",
    "Exam Gold Tip: Always explain that a dashboard is not merely a collection of charts, but a cohesive decision-support narrative answering key business questions."
])

add("Data Visualization (Tableau/Power BI)", 4, "Tools", [
    "Tableau Desktop vs Microsoft Power BI Architecture: Tableau: High-fidelity visualization engine, VizQL patent (translates visual drag-and-drop into SQL/MDX queries), Hyper in-memory data engine; Power BI: Part of Microsoft Power Platform, VertiPaq in-memory columnar database, DAX and Power Query.",
    "Tableau Data Paradigms: Dimensions vs Measures: Dimensions (qualitative, categorical fields partitioning data into headers; displayed in Blue) vs Measures (quantitative numerical fields aggregated via functions like SUM, AVG; displayed in Green).",
    "Tableau Continuous vs Discrete Fields: Discrete fields (blue pills: create distinct headers, buckets, and labels) vs Continuous fields (green pills: create continuous unbroken numerical axes); Crucial distinction independent of measure/dimension type.",
    "Tableau Level of Detail (LOD) Calculations: Bypassing view visualization level: FIXED (computes aggregate at exact specified dimensions regardless of view: {FIXED [Region] : SUM([Sales])}), INCLUDE (calculates at higher detail than view), and EXCLUDE (calculates at coarser detail).",
    "Power BI Data Modeling: Star Schema Architecture: Relational modeling best practice: Fact tables (containing quantitative transactional metrics, high row count) connected via 1-to-many relationships to Dimension tables (containing descriptive lookup attributes, primary keys).",
    "Power BI Data Transformation (Power Query ETL): Power Query Editor; Extract, Transform, Load (ETL) pipeline; M-formula language; Data cleansing operations: Unpivoting columns to rows, splitting delimiters, replacing errors, changing data types, and merging/appending queries.",
    "Power BI Analytical Calculations with DAX: Data Analysis Expressions (DAX); Calculated Columns (row-by-row static evaluation computed during data refresh, consumes disk/RAM) vs Calculated Measures (dynamic context-dependent evaluation computed on-the-fly at query time).",
    "DAX Evaluation Context: Row Context (iterating row-by-row; active in calculated columns and X-iterators: SUMX, AVERAGEX) vs Filter Context (filters applied by visual slicers, rows, columns); Modifying filter context using CALCULATE() function.",
    "Data Connectivity Modes: Import Mode (loads data into high-speed compressed memory cache; fastest performance, size limits) vs DirectQuery (passes native SQL queries directly to live underlying database; real-time data, slower dashboard interactions); Dual / Composite Mode.",
    "University Examination Strategy: Contrast Dimensions vs Measures and Discrete vs Continuous pills in Tableau with color distinctions, write DAX expressions using CALCULATE() and SUMX(), compare Import Mode vs DirectQuery in Power BI, and write a Tableau FIXED LOD expression."
], [
    "Tableau Blue vs Green Pills: Blue indicates Discrete (headers and labels); Green indicates Continuous (unbroken numerical axes).",
    "Tableau VizQL Engine: Translates visual canvas arrangements directly into optimized relational database queries under the hood.",
    "FIXED LOD Syntax: {FIXED [Region] : SUM([Sales])} computes regional total regardless of whether Region is included in canvas view.",
    "Star Schema Simplicity: Central fact table connected directly to surround dimension tables; minimizes join complexity and boosts DAX speed.",
    "Power BI Calculated Measure: Dynamically evaluated on-the-fly based on active visual filter context, consuming zero disk storage.",
    "Power BI Calculated Column: Computed statically row-by-row during refresh and stored in memory; does not respond to visual slicers.",
    "DAX CALCULATE Dominance: The premier DAX function capable of overriding, filtering, or modifying the prevailing ambient filter context.",
    "DirectQuery Limitation: Does not import data into memory; performance depends entirely on underlying database processing speed.",
    "Unpivot Columns in ETL: Transforms wide pivoted reporting tables into normalized tall data tables required for BI engine aggregation.",
    "Exam Gold Tip: Remember that in Power BI, relationships should almost always be single-directional (from 1 side on dimension to * side on fact)."
])

add("Data Visualization (Tableau/Power BI)", 5, "Storytelling", [
    "Data Storytelling Foundational Narrative Arc: Synthesizing data analytics, visual design, and narrative storytelling; Gustav Freytag's dramatic pyramid: Exposition (establishing context and baseline KPI status), Rising Action (uncovering anomalies), Climax, Falling Action, and Resolution.",
    "Narrative Visual Structures: Author-Driven vs Reader-Driven narratives; The Martini Glass structure (author-driven visual walkthrough leading into open reader exploration), Interactive Slideshow, and Drill-Down Story architectures.",
    "Tableau Story Points Architecture: Creating Story Point presentations; Sequential story tabs containing interactive dashboard snapshots; Annotations highlighting specific data insights while preserving full underlying query interactivity.",
    "Power BI Bookmarks & Selection Pane: Creating dynamic presentation states using Bookmarks; Capturing filter states, drill-downs, and visual visibility toggles; Building interactive page navigation buttons, collapsible slicer panels, and animated walk-throughs.",
    "Data Journalism & Explanatory Visualizations: Visual rhetoric techniques: Establishing clear visual hierarchy; Direct data labeling eliminating legend eye-travel fatigue; Adding strategic visual callout call-outs to explain inflection points.",
    "Audience Segmentation & Contextual Framing: Tailoring presentation depth: C-Suite Executive (strategic bottom-line KPIs, macro trends, actionable recommendations), Operational Managers (diagnostic breakdowns, department variances), and Technical Analysts (granular access).",
    "Cognitive Scaffolding & Progressive Disclosure: Guiding user comprehension step-by-step; Presenting aggregated summary first, then revealing intermediate drivers upon interaction, and finally allowing raw data record inspection.",
    "De-Cluttering & Highlighting Techniques: Applying preattentive contrast to drive narrative focus: Muting background elements with neutral light gray while emphasizing key narrative data points in bold saturated corporate blue or orange.",
    "Ethical Data Presentation & Integrity: Avoiding deceptive framing; Providing transparent methodology notes, sample sizes, margin of error confidence intervals, and data source citations; Presenting counter-evidence and alternative interpretations.",
    "University Examination Strategy: Structure an end-to-end data story presentation for an enterprise revenue downturn using the Martini Glass narrative structure, explain the use of Power BI Bookmarks for narrative navigation, and discuss visual decluttering."
], [
    "Martini Glass Structure: Begins with tight author-driven narrative opening, then widens out into open-ended user exploratory analysis.",
    "Preattentive Highlighting: Shading non-critical data points in soft gray focuses viewer attention immediately onto colored target insights.",
    "Direct Labeling Advantage: Placing labels directly adjacent to line endpoints eliminates continuous back-and-forth eye-travel to legends.",
    "Tableau Story Points: Interactive sequential presentation sheets preserving live database connectivity and drill-down capabilities.",
    "Power BI Bookmark Power: Saves exact page state (filters, spotlights, layer visibility) to create scripted interactive narrative flows.",
    "Executive Audience Rule: Executives require immediate bottom-line conclusions, root cause drivers, and concrete actionable next steps.",
    "Contextual Annotation: Adding explanatory text annotations directly onto chart anomaly peaks explains unexpected historical spikes.",
    "Progressive Disclosure: Reveals information in stages as needed, preventing cognitive fatigue from overwhelming upfront complexity.",
    "Data Provenance Citation: Always display data refresh timestamps, sample sizes, and data source origins to establish trust and integrity.",
    "Exam Scoring Tip: Conclude data storytelling answers with the three core pillars: Data (the truth), Visuals (the clarity), and Narrative (the action)."
])

# Save to sem3_bsc_computing_math_data.json
with open('scripts/sem3_bsc_computing_math_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in computing_math dataset now: {len(data)}")
