import json

with open('scripts/sem3_btech_missing_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

data = {}
for k, v in raw.items():
    sub, num = k.split(":::")
    data[(sub, int(num))] = v

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[(sub, num)] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 4. MACHINE DRAWING
# =========================================================================
add("Machine Drawing", 1, "Drawing Standards", [
    "Bureau of Indian Standards (BIS SP 46:2003): Standard engineering drawing sheets ($A0$ to $A4$, area ratio $1:\\sqrt{2}$ where $A0 = 1\\text{ m}^2$); Standard title block layout, projection symbols, and scale designations ($1:1, 1:2, 2:1$).",
    "Line Conventions & Precedence: Continuous thick (visible outlines), continuous thin (dimension, extension, leader lines), dashed thin (hidden features), chain thin (centerlines, axes of symmetry), chain thin with thick ends (cutting planes), and continuous freehand (short break lines).",
    "Dimensioning Principles & Rules: Aligned dimensioning (text parallel to and above dimension line) vs Unidirectional dimensioning (text horizontal and read from bottom); Chain, parallel, and coordinate dimensioning rules; Never dimension to hidden lines.",
    "Geometric Dimensioning and Tolerancing (GD&T): Feature control frame layout: [Geometric characteristic symbol | Tolerance value | Datum references]; Form tolerances (flatness, straightness, circularity, cylindricity) require no datum.",
    "Orientation and Location Tolerances: Orientation (perpendicularity, parallelism, angularity) requiring datum; Location (position, concentricity, symmetry); Runout (circular runout, total runout) measured using dial indicators.",
    "Material Condition Modifiers: Maximum Material Condition (MMC, symbol $\\text{M}$, gives bonus tolerance when feature departs from MMC) and Least Material Condition (LMC, symbol $\\text{L}$, critical for minimum wall thickness).",
    "Surface Finish Symbols: Basic triangle symbol; Value of roughness $R_a$ in $\\mu\\text{m}$ placed above triangle; Material removal allowance, machining method on horizontal line, and direction of lay symbols ($=, \\perp, X, M, C, R$).",
    "Screw Thread Representation: Metric ISO thread ($M20 \\times 2.5$); External thread (crest continuous thick line, root continuous thin line); Internal thread in section (minor diameter continuous thick, major diameter continuous thin).",
    "Keys, Cotters & Knuckle Joint Symbols: Sunk keys, feather keys, Woodruff keys; Cotter joint with spigot and socket; Knuckle joint for connecting rods under axial tension.",
    "University Examination Strategy: Draw the complete feature control frame for perpendicularity and position with MMC modifiers, construct standard line conventions, and annotate surface roughness symbols with lay directions."
], [
    "Drawing Sheet Area Ratio: $x : y = 1 : \\sqrt{2}$, with $A0$ having area $1.0\\text{ m}^2$ ($841 \\times 1189\\text{ mm}$).",
    "Visible Line Standard: Continuous thick ($0.5-0.7\\text{ mm}$).",
    "Centerline Standard: Long dashed-dotted chain thin ($0.25\\text{ mm}$).",
    "Cutting Plane Line: Chain thin with thick ends and direction arrows.",
    "Feature Control Frame: Structured box indicating geometric tolerance, value, and datum references.",
    "Form Tolerances: Flatness, straightness, roundness; Never reference datums.",
    "Orientation Tolerances: Perpendicularity, parallelism; Always require datum planes.",
    "MMC Concept: Smallest hole diameter or largest shaft diameter.",
    "Thread Minor Diameter Representation: Drawn as continuous thin line spanning $3/4$ of circle in end view.",
    "Exam Scoring Tip: Projection symbol for First Angle has frustum cone with small end facing left and circular view on right."
])

add("Machine Drawing", 2, "Orthographic Projections", [
    "First Angle vs Third Angle Projection: First Angle (object placed in quadrant I between observer and plane, views projected behind object; Right side view drawn on left); Third Angle (plane between observer and object, views in front; Right view drawn on right).",
    "Six Principal Orthographic Views: Front elevation, top plan, left-side view, right-side view, rear view, and bottom view; Front view selected as most characteristic view showing primary functional shape.",
    "Auxiliary Views for Inclined Surfaces: Primary auxiliary view projected onto plane perpendicular to one principal plane and inclined to other two; Shows true shape, true size, and true inclination angle of slanted faces.",
    "Secondary Auxiliary Views: Projected from primary auxiliary view onto plane inclined to all three principal planes; Used to determine true clearance and true angle between skew lines.",
    "Line Views of Planes & Edge Views: A plane appears as a single straight edge line in any view where a line lying entirely on the plane appears in its true length.",
    "True Length of an Oblique Line: Determined by rotation method (rotating line parallel to horizontal or vertical plane) or auxiliary view method (projecting onto auxiliary plane parallel to line); $\\text{TL} = \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$.",
    "Intersection of Curved Solids: Line of intersection between two intersecting cylinders; Determined by cutting plane method or sphere method; Elliptical or parabolic intersection curves.",
    "Development of Surfaces: Parallel line development (prisms, cylinders), Radial line development (pyramids, cones), and Triangulation development (transition pieces, hoppers, square-to-round ducts).",
    "Isometric Projection vs Isometric View: Isometric scale foreshortens all lengths to $\\sqrt{2/3} \\approx 0.816$ of true length; Isometric axes inclined at $120^\\circ$ to each other; Isometric view drawn using true scale.",
    "University Examination Strategy: Convert 3D pictorial views into First Angle orthographic projections (front, top, side), find true length and inclinations of skew lines, and develop surfaces of truncated cylinders."
], [
    "First Angle Principle: Object lies between observer and projection plane (Right view drawn on left).",
    "Third Angle Principle: Projection plane lies between observer and object (Right view drawn on right).",
    "Isometric Scale Ratio: $\\frac{\\text{Isometric Length}}{\\text{True Length}} = \\frac{\\cos 45^\\circ}{\\cos 30^\\circ} = \\sqrt{\\frac{2}{3}} \\approx 0.816$.",
    "Isometric Axes Inclination: Spaced at strictly $120^\\circ$ to one another.",
    "Auxiliary Plane Rule: Placed parallel to inclined face to display its true shape.",
    "Sphere Method for Intersections: Applicable only when intersecting solids have common intersecting axes of revolution.",
    "Parallel Line Development: Used exclusively for right prisms and cylinders.",
    "Radial Line Development: Used exclusively for cones and pyramids.",
    "Non-Isometric Lines: Cannot be measured directly with isometric scale; Must be plotted via bounding box coordinates.",
    "Exam Scoring Tip: In First Angle projection, the top view is drawn directly below the front elevation view."
])

add("Machine Drawing", 3, "Sectional Views", [
    "Purpose of Sectioning: Reveals internal features, holes, webs, and cavities clearly without confusing clutter of hidden dashed lines.",
    "Cutting Plane Lines & Direction of Sight: Stepped or continuous cutting plane denoted by chain thin line with thickened ends and arrows pointing in viewing direction.",
    "Hatching & Section Lining Standards: Thin continuous lines drawn at $45^\\circ$ angle to centerline or main outline; Adjacent mating components hatched in opposite directions or with staggered spacing.",
    "Full Section vs Half Section Views: Full section (cutting plane passes entirely through object); Half section (cutting plane removes one quarter of symmetrical object, showing half internal section and half external view separated by centerline).",
    "Offset Sectioning: Cutting plane stepped at $90^\\circ$ right angles to pass through multiple offset internal features (e.g. holes, slots); Offsets not shown as lines on sectional drawing.",
    "Revolved & Removed Sections: Revolved section (cross-section rotated $90^\\circ$ in place directly on view, e.g. spoke, crane hook); Removed section (drawn adjacent to or offset from component with section identification labels A-A).",
    "Aligned Sections for Symmetrical Features: Features like radiating spokes, ribs, or bolt holes on pitch circle rotated into cutting plane to prevent misleading foreshortening.",
    "Components Never Sectioned Longitudinally: Shafts, bolts, nuts, washers, rivets, cotters, keys, pins, gear teeth, ball bearings, and thin structural webs/ribs cut longitudinally are drawn solid without hatching.",
    "Broken-Out / Local Sectioning: Small local section bounded by continuous irregular freehand line to expose interior of solid part without cutting entire object.",
    "University Examination Strategy: Draw full and half sectional views of mechanical assemblies, apply correct $45^\\circ$ hatching conventions for mating parts, and identify non-sectioned standard elements."
], [
    "Hatching Angle Standard: Thin parallel lines oriented at $45^\\circ$ to component axis.",
    "Half Section Partition: Separated from exterior half strictly by a centerline (never a solid line).",
    "Non-Sectioned Elements: Shafts, bolts, nuts, keys, pins, rivets, and longitudinal ribs.",
    "Offset Section Transition: 90-degree step transitions are omitted from the sectional view.",
    "Hatching Spacing: Uniform spacing between $1.5\\text{ mm}$ and $3\\text{ mm}$ depending on view size.",
    "Mating Parts Hatching: Hatched in opposite $45^\\circ$ directions to distinguish boundaries.",
    "Thin Wall Sectioning: Sections thinner than $2\\text{ mm}$ shown completely black with white gaps.",
    "Revolved Section Line: Drawn with thin continuous outline when placed directly on view.",
    "Broken-Out Section Boundary: Thin continuous freehand line without touching existing lines.",
    "Exam Scoring Tip: Never draw hidden lines on a sectional view unless strictly required for dimensioning."
])

add("Machine Drawing", 4, "Assembly Drawings", [
    "Types of Assembly Drawings: Design assembly (conceptual layout), Working assembly (manufacturing blueprint with part list and tolerances), Exploded assembly (pictorial view showing disassembly sequence for maintenance).",
    "Bill of Materials (BOM) / Parts List: Structured tabular schedule listing: Item number, Part name, Quantity required, Material specification (e.g. CI, MS, Brass), and Drawing reference number.",
    "Plummer Block (Pedestal Bearing) Assembly: Cast iron base block, brass bush split into upper and lower halves with lubricating oil hole, cast iron cap, square-headed bolts, and nuts with lock nuts.",
    "Stuffing Box Assembly: Prevents fluid leakage along reciprocating piston rod of steam engine/pump; Comprises stuffing box body, gland bush, gland packing rings, and studs with nuts.",
    "Screw Jack Assembly: Heavy mechanical lifting jack; Cast steel body, bronze nut screwed into top body, square-threaded steel spindle, swivel head (bearing cup), and tommy bar for applying torque.",
    "Protected Flange Coupling: Connects collinear shafts; Keyed driving and driven flanges, cylindrical perimeter shroud protecting bolt heads and nuts, fitted bolts in reamed holes.",
    "Universal Coupling (Hooke's Joint): Transmits torque between two shafts intersecting at variable angle; Comprises two forked ends, central cross-pin (spider), and securing pins.",
    "Machine Vice Assembly: Clamping workpiece for milling/shaping; Fixed cast iron body with hardened steel jaw, movable jaw sliding on dovetail guides, square-threaded lead screw, and handle.",
    "Pipe Joints & Valves (Non-Return / Safety Valve): Flanged pipe joints with rubber gasket; Ramsbottom spring-loaded safety valve or lift check valve ensuring unidirectional fluid flow.",
    "University Examination Strategy: Assemble details of a Plummer block or Screw Jack into complete front elevation in half-section and top view, compile the Bill of Materials, and check fits and clearances."
], [
    "Bill of Materials Sequence: Item Number, Part Name, Material, Quantity, Remarks.",
    "Plummer Block Brass Split: Split brass bushes allow replacement without disassembling the shaft.",
    "Screw Jack Spindle Thread: Square thread (high efficiency, zero radial bursting force on nut).",
    "Hooke's Joint Angular Limit: Operates effectively up to $\\approx 15-20^\\circ$ shaft inclination angle.",
    "Protected Flange Shroud: Outer rim prevents clothing from catching on rotating bolt heads.",
    "Stuffing Box Packing: Asbestos, graphite, or PTFE braided rings compressed by gland.",
    "Machine Vice Lead Screw: Transmits axial clamping thrust while movable jaw traverses.",
    "Assembly Drawing Tolerance: State limits and fits (e.g. $H7/g6$ for sliding, $H7/p6$ for press fit).",
    "Item Callout Balloon: Circle with item number linked to part by thin leader line with arrow or dot.",
    "Exam Scoring Tip: Double-check that centerlines match exactly across all assembled parts before drawing section lines."
])

add("Machine Drawing", 5, "CAD Basics", [
    "Computer-Aided Design (CAD) Systems Architecture: Graphics hardware, geometric modeling kernel (Parasolid, ACIS), database structure, and user interface; 2D drafting vs 3D solid modeling.",
    "Geometric Modeling Paradigms: Wireframe modeling (vertices and edges only, ambiguous surface representation), Surface modeling (B-rep, Bezier, B-spline, NURBS surfaces), and Solid modeling (unambiguous volumetric representation).",
    "Constructive Solid Geometry (CSG): Boolean operations (Union $A \\cup B$, Difference / Subtract $A - B$, Intersection $A \\cap B$) applied to basic geometric primitives (block, cylinder, sphere, cone, torus).",
    "Boundary Representation (B-Rep): Topological entities (vertices, edges, faces, loops) linked to underlying geometric definitions; Satisfies Euler-Poincaré formula for closed solids: $V - E + F - (L - F) - 2(B - G) = 0$; For simple polyhedra: $V - E + F = 2$.",
    "Parametric & Feature-Based Solid Modeling: Dimension-driven geometry; Fully constrained sketches (geometric constraints: coincident, parallel, tangent, concentric; dimensional constraints); Feature tree history (Extrude, Revolve, Sweep, Loft, Fillet, Pattern).",
    "Direct Modeling vs History-Based Modeling: History-based models track sequential feature dependencies; Direct modeling enables dynamic pushing/pulling of geometric faces without parametric feature tree rebuild errors.",
    "CAD Data Exchange Standards: Initial Graphics Exchange Specification (IGES, surface-based), Standard for the Exchange of Product Model Data (STEP ISO 10303, comprehensive B-rep and PMI), and STL (stereolithography, triangulated mesh for 3D printing).",
    "Assembly Modeling in CAD: Bottom-up assembly (inserting pre-modeled components and applying mates: coincident, concentric, distance, gear) vs Top-down assembly (designing parts in-place within assembly context).",
    "Geometric Transformations in 2D/3D CAD: Homogeneous coordinate transformation matrices for translation, rotation, scaling, and reflection: $[x' \\; y' \\; z' \\; 1] = [x \\; y \\; z \\; 1] [T]$.",
    "University Examination Strategy: State the Euler-Poincaré formula for solid modeling, perform 2D transformation matrix multiplications for rotation and scaling, and compare CSG vs B-Rep modeling."
], [
    "Euler-Poincaré Formula: $V - E + F = 2$ (for simple closed polyhedra).",
    "General Euler-Poincaré: $V - E + F - H = 2(B - G)$ (where $H$ is hole in face, $G$ is through-hole genus).",
    "2D Rotation Matrix (Angle $\\theta$): $\\begin{bmatrix} \\cos\\theta & \\sin\\theta & 0 \\\\ -\\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$.",
    "2D Translation Matrix: $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ t_x & t_y & 1 \\end{bmatrix}$.",
    "CSG Primitives: Primitives combined via Boolean Union, Difference, and Intersection.",
    "B-Rep Topology Hierarchy: Solid $\\to$ Shell $\\to$ Face $\\to$ Loop $\\to$ Edge $\\to$ Vertex.",
    "NURBS Definition: Non-Uniform Rational B-Splines (exact representation of analytical and freeform surfaces).",
    "STEP Standard: ISO 10303 for complete engineering product data exchange.",
    "STL File Format: Approximates solid boundaries with unordered planar triangular facets.",
    "Exam Scoring Tip: In homogeneous coordinates, a point in 3D space is represented as a 4-element row vector $[x, y, z, 1]$."
])

# Save updated dataset
with open('scripts/sem3_btech_missing_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
