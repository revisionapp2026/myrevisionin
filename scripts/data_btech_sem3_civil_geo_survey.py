"""
B.Tech Semester 3: Civil, Geology, Surveying, Manufacturing, Machine Drawing & Solar
Dedicated, authentic 10 Highlights + 10 Bookmarks per unit.
"""

civil_geo_survey_data = {
    # -------------------------------------------------------------------------
    # SURVEYING & GEOMATICS
    # -------------------------------------------------------------------------
    ("Surveying & Geomatics", 1): {
        "title": "Surveying Basics",
        "highlights": [
            "Primary Surveying Classifications: Plane Surveying (Earth curvature neglected, valid for small tracts $<250\\text{ km}^2$) vs Geodetic Surveying (Earth spheroid curvature accounted for, high precision national geodetic frameworks).",
            "Fundamental Principles of Surveying: (1) Work from whole to part (enclosing territory within high-precision control framework to prevent accumulation of local measurement errors); (2) Fix position of point by minimum two independent measurements (angular and linear).",
            "Linear Distance Measurement: Metric chains (Metric chain 20m/30m, Gunter's chain 66ft, Engineer's chain 100ft, Revenue chain 33ft) and modern Electronic Distance Measurement (EDM, phase-shift optical modulation).",
            "Systematic Errors and Tape Corrections: Standardization correction $C_s = \\frac{L(l - l_0)}{l_0}$; Temperature correction $C_t = L \\alpha(T_m - T_0)$; Tension pull correction $C_p = \\frac{(P - P_0)L}{A E}$; Sag correction $C_{sag} = -\\frac{W^2 L}{24 P^2}$; Slope correction $C_h = -\\frac{h^2}{2L}$.",
            "Compass Surveying & Earth Magnetism: Prismatic compass (graduated ring attached to needle, 0 at South, reads Whole Circle Bearing WCB $0-360^\\circ$) vs Surveyor's compass (graduated ring fixed to box, reads Quadrantal Bearing QB N/S...E/W).",
            "Magnetic Declination & Dip: Declination is horizontal angle between True North and Magnetic North (True Bearing = Magnetic Bearing $\\pm$ Magnetic Declination); Magnetic dip is vertical angle needle makes with horizontal ($0^\\circ$ at magnetic equator, $90^\\circ$ at poles).",
            "Local Attraction in Compass Surveying: Distortion of magnetic needle by adjacent steel structures, power lines, and mineral deposits; Detected when Fore Bearing (FB) and Back Bearing (BB) differ by other than exactly $180^\\circ$ ($|FB - BB| \\ne 180^\\circ$).",
            "Traverse Computation Basics: Latitude $L = l \\cos\\theta$ (northing/southing) and Departure $D = l \\sin\\theta$ (easting/westing); For closed traverse, $\\sum L = 0$ and $\\sum D = 0$.",
            "Balancing Closed Traverses (Bowditch & Transit Rules): Bowditch (compass) rule distributes corrections proportional to line length: $C_L = -\\frac{\\sum L}{\\sum l} l_i$; Transit rule distributes proportional to coordinate components.",
            "University Examination Strategy: State the two fundamental principles of surveying, solve tape standardization and sag corrections, and eliminate local attraction from compass traverse field data."
        ],
        "keyPoints": [
            "Whole to Part Principle: Enforces established primary control points to prevent systematic error accumulation.",
            "Temperature Tape Correction: $C_t = \\alpha L (T_m - T_0)$.",
            "Sag Correction Formula: $C_{sag} = -\\frac{w^2 L^3}{24 P^2} = -\\frac{W^2 L}{24 P^2}$ (strictly negative).",
            "Slope Correction: $C_s = -\\frac{h^2}{2L}$ (strictly negative).",
            "Fore and Back Bearing Rule: $BB = FB \\pm 180^\\circ$ (use $+$ if $FB < 180^\\circ$, use $-$ if $FB > 180^\\circ$).",
            "True Bearing Formula: $\\text{True Bearing} = \\text{Magnetic Bearing} \\pm \\text{Declination}$ ($+$ for East, $-$ for West).",
            "Latitude and Departure: $\\text{Latitude} = l \\cos\\theta, \\quad \\text{Departure} = l \\sin\\theta$.",
            "Closing Error Magnitude: $e = \\sqrt{(\\sum L)^2 + (\\sum D)^2}$.",
            "Bowditch Latitude Correction: $\\delta L_i = -\\sum L \\times \\frac{l_i}{\\sum l}$.",
            "Exam Scoring Tip: Prismatic compass readings are read through a magnifying prism from the south end of the ring because numbers are engraved inverted."
        ]
    },
    ("Surveying & Geomatics", 2): {
        "title": "Leveling",
        "highlights": [
            "Leveling Terminology: Datum surface (mean sea level MSL at Mumbai high tide), Reduced Level (RL, vertical elevation above datum), Benchmark (BM, permanent reference elevation), Line of Collimation (horizontal line of sight through instrument telescope reticle crosshairs).",
            "Staff Readings: Backsight (BS, first reading taken on known benchmark), Foresight (FS, final reading before moving instrument), Intermediate Sight (IS, all readings taken between BS and FS), Change Point (CP, station where both FS and BS are observed).",
            "Height of Instrument (HI) Method: $\\text{HI} = \\text{RL}_{BM} + \\text{BS}$; $\\text{RL}_{station} = \\text{HI} - \\text{Reading}$; Arithmetic check: $\\sum \\text{BS} - \\sum \\text{FS} = \\text{Last RL} - \\text{First RL}$.",
            "Rise and Fall Method: Compares successive staff readings: $\\text{Rise/Fall} = \\text{Previous Reading} - \\text{Current Reading}$; If positive, it is a Rise (add to RL); If negative, Fall (subtract from RL); Arithmetic check: $\\sum \\text{BS} - \\sum \\text{FS} = \\sum \\text{Rise} - \\sum \\text{Fall} = \\text{Last RL} - \\text{First RL}$.",
            "Curvature & Refraction Corrections: Earth curvature drops staff reading: $C_c = -0.0785 d^2$; Atmospheric refraction bends sight line downward: $C_r = +0.0112 d^2$; Combined correction: $C = -0.0673 d^2$ where distance $d$ is in kilometers.",
            "Distance to Visible Horizon: Distance $d = \\sqrt{h / 0.0673} = 3.855\\sqrt{h}$ kilometers, where lighthouse or observer height $h$ is in meters.",
            "Reciprocal Leveling: Precise technique for carrying levels across wide rivers or ravines; Eliminates instrument collimation error, Earth curvature, and average atmospheric refraction by taking paired observations from both river banks.",
            "Inverted Staff Readings: Staff held upside-down against bottom soffit of bridge girder or tunnel ceiling; Reading entered as negative value in field book: $\\text{RL}_{soffit} = \\text{HI} - (-\\text{Reading}) = \\text{HI} + \\text{Reading}$.",
            "Sensitivity of Level Tube: Angular value of one bubble division: $\\alpha = \\frac{s}{n D} = \\frac{d}{R}$ radians $= \\frac{206265 s}{n D}$ seconds; Increased by larger radius of curvature $R$ and lower liquid viscosity.",
            "University Examination Strategy: Fill complete leveling field tables, perform all three arithmetic checks on Rise and Fall and HI methods, and calculate reciprocal leveling elevations."
        ],
        "keyPoints": [
            "Height of Instrument Formula: $\\text{HI} = \\text{RL} + \\text{BS}$.",
            "Station Reduced Level: $\\text{RL} = \\text{HI} - \\text{IS}$ (or $\\text{HI} - \\text{FS}$).",
            "Combined Curvature & Refraction: $C = -0.0673 d^2$ meters (with $d$ in kilometers).",
            "Earth Curvature Alone: $C_c = -0.0785 d^2$ meters.",
            "Atmospheric Refraction Alone: $C_r = +0.0112 d^2$ meters (roughly $1/7$ of curvature).",
            "Horizon Distance Formula: $d = 3.855\\sqrt{h}$ km.",
            "Reciprocal Leveling True Difference: $h = \\frac{(a_1 - b_1) + (a_2 - b_2)}{2}$.",
            "Level Tube Sensitivity: $\\alpha = \\frac{s}{n D} \\times 206265$ arcseconds per division.",
            "Rise and Fall Three-Way Check: $\\sum \\text{BS} - \\sum \\text{FS} = \\sum \\text{Rise} - \\sum \\text{Fall} = \\text{Last RL} - \\text{First RL}$.",
            "Exam Scoring Tip: Inverted staff readings must always be preceded by a minus sign in calculations; subtracting a negative staff reading correctly raises the reduced level to the overhead ceiling."
        ]
    },
    ("Surveying & Geomatics", 3): {
        "title": "Theodolite & Traversing",
        "highlights": [
            "Transit Theodolite Architecture: Upper plate carrying verniers, lower plate carrying graduated horizontal circle ($0-360^\\circ$), vertical circle, telescope transiting full $360^\\circ$ through vertical plane, and plate levels.",
            "Fundamental Lines of a Theodolite: Vertical axis, horizontal (trunnion) axis, line of collimation, plate level axis, and telescope bubble axis; Must satisfy geometric orthogonality conditions for error-free measurement.",
            "Horizontal Angle Measurement Methods: Repetition method (angles accumulated $n$ times on horizontal circle to divide out vernier reading errors, $LC/n$); Reiteration method (directional method for observing multiple radiating stations from single instrument setup).",
            "Vertical Angle Measurement: Angle of elevation or depression relative to horizontal line of collimation; Face left and face right observations averaged to eliminate index error of vertical circle.",
            "Tacheometric Surveying (Stadia Method): Rapid optical distance measurement without chain/tape; Diaphragm fitted with upper and lower stadia hairs; Horizontal distance $D = k s + c$ where multiplying constant $k = f/i = 100$ and additive constant $c = f + d = 0$ for anallatic lens.",
            "Inclined Stadia Sights with Staff Vertical: Horizontal distance $D = k s \\cos^2\\theta + c \\cos\\theta$; Vertical elevation difference $V = \\frac{1}{2} k s \\sin 2\\theta + c \\sin\\theta$; Target reduced level $\\text{RL} = \\text{HI} \\pm V - h$.",
            "Total Station Technology: Microprocessor-controlled electro-optical instrument integrating electronic digital theodolite, EDM (infrared carrier laser), electronic data recorder, and automatic dual-axis tilt compensator.",
            "Total Station Coordinate Measurement: Computes instantaneous 3D Cartesian coordinates: $X = X_0 + D \\cos\\alpha \\sin\\theta, Y = Y_0 + D \\cos\\alpha \\cos\\theta, Z = Z_0 + D \\sin\\alpha + \\text{HI} - \\text{HR}$.",
            "Modern Geodetic Global Positioning System (GPS): NAVSTAR satellite constellation broadcasting on L1/L2 frequencies; Trilateration from minimum 4 satellites solving receiver coordinates ($X, Y, Z$) and receiver clock bias $\\Delta t$; Differential GPS (DGPS) and Real-Time Kinematic (RTK) delivering centimeter accuracy.",
            "University Examination Strategy: Draw schematic of theodolite optical axis geometry, derive stadia distance formulas $D = k s + c$, and calculate missing traverse coordinates using latitude and departure."
        ],
        "keyPoints": [
            "Stadia Tacheometry Distance: $D = k s + c$ (for horizontal line of sight).",
            "Stadia Multiplying Constant: $k = \\frac{f}{i} = 100$ (standard design).",
            "Stadia Additive Constant: $c = f + d = 0$ when anallatic lens is incorporated.",
            "Inclined Stadia Distance: $D = k s \\cos^2\\theta$ (for anallatic telescope).",
            "Inclined Stadia Elevation: $V = \\frac{1}{2} k s \\sin 2\\theta$.",
            "Eliminating Collimation Error: Average Face Left (FL) and Face Right (FR) readings.",
            "Eliminating Eccentricity Error: Average readings of both verniers A and B spaced $180^\\circ$ apart.",
            "GPS Satellite Requirement: Minimum 4 satellites needed to resolve 3 spatial coordinates and receiver clock offset.",
            "RTK Positioning Accuracy: Achieves $1-2\\text{ cm}$ horizontal accuracy in real-time.",
            "Exam Tip: When transiting the telescope, Face Left means the vertical circle is on the left-hand side of the observer facing the eyepiece."
        ]
    },
    ("Surveying & Geomatics", 4): {
        "title": "Contouring",
        "highlights": [
            "Contour Line Definition: Imaginary horizontal line connecting continuous points of equal elevation above datum; Vertical distance between consecutive contours is Contour Interval (CI); Horizontal distance between adjacent contours is Horizontal Equivalent (HE).",
            "Characteristics of Contour Lines: Uniformly spaced contours indicate uniform slope; Closely spaced indicate steep slope; Widely spaced indicate gentle terrain; Concentric closed contours with values increasing inward indicate hill; Increasing outward indicate depression/lake.",
            "Contour Intersections & Special Topography: Contours never cross or intersect except in rare case of overhanging cliff; Contours merge together into single line only at vertical cliff; Contours cross ridge and valley lines at strictly $90^\\circ$ angles.",
            "Ridge Lines vs Valley Lines: Ridge lines (watershed) exhibit U-shaped contours pointing toward lower elevation; Valley lines (thalweg) exhibit V-shaped contours pointing toward higher elevation; Drainage paths flow perpendicular to contour lines.",
            "Direct Method of Contouring: Points of specified elevation are physically located on ground using level and staff, marked with pegs, and surveyed into plan; Extremely accurate but very slow and laborious.",
            "Indirect Methods of Contouring: Guide points surveyed on grid squares, cross-sections, or radial radiating lines (tacheometry); Intermediate contour elevations interpolated assuming uniform slope between surveyed grid corners.",
            "Methods of Contour Interpolation: (1) By estimation (rough sketches); (2) By arithmetic calculation (proportional linear interpolation: $x = \\frac{y - y_1}{y_2 - y_1} L$); (3) By graphical method using tracing paper or graduated celluloid template.",
            "Earthwork Volume from Contours: Trapezoidal formula for volume between end areas: $V = \\frac{h}{2}[(A_1 + A_n) + 2(A_2 + A_3 + \\dots + A_{n-1})]$; Prismoidal formula (Simpson's 1/3 equivalent, requiring odd number of areas): $V = \\frac{h}{3}[(A_1 + A_n) + 4\\sum A_{\\text{even}} + 2\\sum A_{\\text{odd}}]$.",
            "Reservoir Capacity Calculation: Planimeter measurement of areas enclosed within successive contour lines of reservoir basin; Computing water storage capacity up to full reservoir level (FRL).",
            "University Examination Strategy: State eight key characteristics of contour lines with neat sketches (hill, depression, saddle, cliff, valley), interpolate contour lines on a grid square, and calculate reservoir storage volume."
        ],
        "keyPoints": [
            "Contour Interval (CI): Vertical distance between consecutive contour lines (constant for a given map).",
            "Horizontal Equivalent (HE): Horizontal distance between contours (inversely proportional to ground steepness).",
            "Ridge Line Contour Shape: U-shaped convex loops pointing toward lower elevations.",
            "Valley Line Contour Shape: V-shaped convex loops pointing toward higher elevations.",
            "Trapezoidal Volume Rule: $V = \\frac{d}{2}[A_1 + A_n + 2(A_2 + A_3 + \\dots + A_{n-1})]$.",
            "Prismoidal Volume Rule: $V = \\frac{d}{3}[A_1 + A_n + 4\\sum A_{\\text{even}} + 2\\sum A_{\\text{odd}}]$.",
            "Saddle Definition: Low col or dip on a ridge connecting two peaks; Enclosed by four sets of contour loops.",
            "Vertical Cliff Representation: Multiple contours merge into a single line on the plan.",
            "Overhanging Cliff Representation: Contours cross one another with hidden segments shown as dashed lines.",
            "Exam Scoring Tip: Prismoidal formula gives a more accurate volume than trapezoidal; prismoidal correction $C_p = V_{\\text{trap}} - V_{\\text{prism}}$ is always positive for regular prisms."
        ]
    },
    ("Surveying & Geomatics", 5): {
        "title": "Modern Surveying (GPS, GIS)",
        "highlights": [
            "Geographic Information System (GIS) Architecture: Computer-based system for capturing, storing, querying, analyzing, and visualizing geospatial data; Five components: Hardware, software, spatial data, trained personnel, and analytical procedures.",
            "Spatial Data Models: Vector model (discrete geometric entities: points for wells/trees, lines for roads/streams, polygons for parcels/lakes; Topology preserves adjacency, connectivity, and containment) vs Raster model (continuous regular grid cells/pixels, e.g. digital elevation models DEM, satellite imagery).",
            "Map Projections and Coordinate Reference Systems (CRS): Universal Transverse Mercator (UTM, 60 longitudinal zones of $6^\\circ$ width each, conformal secant cylinder projection); Geographic coordinates (latitude $\\phi$, longitude $\\lambda$ on WGS84 datum) converted to projected plane coordinates ($Easting, Northing$).",
            "Remote Sensing Physics & Electromagnetic Spectrum: Passive sensors (detect reflected solar radiation or emitted thermal radiation, e.g. Landsat, Sentinel-2) vs Active sensors (illuminate target with own pulse, e.g. LiDAR, Synthetic Aperture Radar SAR); Optical, thermal, and microwave spectral windows.",
            "Spatial, Spectral, Radiometric, and Temporal Resolution: Spatial resolution (ground sampling distance GSD pixel size, e.g. $0.3\\text{ m}$ to $30\\text{ m}$); Spectral resolution (number and bandwidth of spectral channels); Radiometric resolution (bit depth, e.g. 8-bit 256 levels, 12-bit 4096 levels); Temporal resolution (satellite revisit period).",
            "Normalized Difference Vegetation Index (NDVI): Exploits high chlorophyll absorption in Red band and high mesophyll cell scattering in Near-Infrared (NIR) band: $NDVI = \\frac{NIR - Red}{NIR + Red}$; Varies from $-1$ to $+1$; Dense healthy vegetation exhibits $NDVI > 0.6$.",
            "LiDAR (Light Detection and Ranging): Airborne laser scanner recording two-way transit time of laser pulses; Yields dense 3D point clouds (millions of $X, Y, Z$ points); Generates bare-earth Digital Terrain Models (DTM) and canopy Digital Surface Models (DSM).",
            "Unmanned Aerial Vehicle (UAV / Drone) Photogrammetry: Low-altitude drone surveys capturing high-overlap aerial photographs ($75\\%$ forward overlap, $60\\%$ side overlap); Processed via Structure-from-Motion (SfM) photogrammetric pipelines using Ground Control Points (GCPs).",
            "GIS Spatial Analysis Operations: Vector overlay (Intersect, Union, Clip, Buffer generation), Raster map algebra (cell-by-cell mathematical modeling), network routing analysis, and digital hydrological watershed delineation.",
            "University Examination Strategy: Compare vector vs raster GIS data models in a matrix across storage, precision, and processing speed, calculate NDVI from spectral reflectance data, and describe drone photogrammetry."
        ],
        "keyPoints": [
            "NDVI Vegetation Index: $NDVI = \\frac{NIR - \\text{Red}}{NIR + \\text{Red}}$.",
            "Vector Data Representation: Points $(x, y)$, Lines $\\{(x_1, y_1), (x_2, y_2)\\}$, Polygons $\\{P_1, P_2, \\dots, P_n\\}$.",
            "Raster Cell Resolution: Ground area represented by single cell equals pixel size squared ($A = \\Delta x^2$).",
            "UTM Coordinate Zones: 60 global zones, each spanning $6^\\circ$ of longitude from $180^\\circ\\text{W}$ to $180^\\circ\\text{E}$.",
            "WGS84 Reference Ellipsoid: Standard global geodetic datum used by GPS receivers.",
            "LiDAR Range Formula: $R = \\frac{c \\Delta t}{2}$ where $c$ is speed of light.",
            "Photogrammetric Overlap Rule: Minimum $60-80\\%$ forward overlap and $50-60\\%$ side overlap to prevent stereoscopic blind spots.",
            "Topological Relationships: Adjacency (shared boundaries), Connectivity (connected road links), Containment (polygons inside regions).",
            "Active vs Passive Remote Sensing: Active sensors transmit own illumination signal (RADAR, LiDAR); Passive sensors record reflected sunlight (optical satellite imagers).",
            "Exam Scoring Tip: Digital Elevation Model (DEM) is a generic term; DTM represents bare ground terrain without vegetation/buildings, whereas DSM includes tops of trees and structures."
        ]
    }
}
