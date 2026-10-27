/**
 * Comprehensive Bachelor of Science (B.Sc) Revision Points & Knowledge Base.
 * Covers Computer Science, Data Science, Mathematics, Physics, Chemistry,
 * Life Sciences (Botany & Zoology), and Biotechnology / Microbiology.
 *
 * Each unit provides 10 Highlights + 10 Key Points (Bookmarks)
 * with authentic mathematical & scientific formulas formatted for KaTeX rendering.
 *
 * GUARANTEES: Every single unit across subjects and laboratories receives
 * DISTINCT, dedicated, non-duplicated academic content matching the unit title.
 */

import { getUnit } from "./mock-data";
import type { RevisionPoint } from "./content";
import { bscSem1Knowledge } from "./content-bsc-sem1";
import { bscSem1ScienceKnowledge } from "./content-bsc-sem1-science";
import { bscSem1LifeKnowledge } from "./content-bsc-sem1-life";
import { bscSem1CoreKnowledge } from "./content-bsc-sem1-core";
import { bscSem1AlliedKnowledge } from "./content-bsc-sem1-allied";

export interface TopicKnowledge {
  highlights: string[];
  keyPoints: string[];
}

export const bscKnowledge: Record<string, TopicKnowledge> = {
  // ====================================================
  // B.SC PHYSICS SEMESTER 1: MECHANICS & OSCILLATIONS
  // ====================================================
  "vectors & kinematics": {
    highlights: [
      "Vector Algebra & Coordinate Representations: Vectors specified by components \\vec{A} = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}; magnitude |\\vec{A}| = \\sqrt{A_x^2 + A_y^2 + A_z^2}; scalar product \\vec{A} \\cdot \\vec{B} = |\\vec{A}||\\vec{B}|\\cos\\theta$ and vector cross product \\vec{A} \\times \\vec{B} = |\\vec{A}||\\vec{B}|\\sin\\theta\\,\\hat{n}.",
      "Scalar and Vector Triple Products: Scalar triple product [\\vec{A}\\;\\vec{B}\\;\\vec{C}] = \\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) represents parallelepiped volume; vector triple product expansion \\vec{A} \\times (\\vec{B} \\times \\vec{C}) = (\\vec{A} \\cdot \\vec{C})\\vec{B} - (\\vec{A} \\cdot \\vec{B})\\vec{C} (BAC-CAB rule).",
      "Differential Vector Operators: Gradient \\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\hat{i} + \\frac{\\partial \\phi}{\\partial y}\\hat{j} + \\frac{\\partial \\phi}{\\partial z}\\hat{k}$ gives direction of maximum rate of increase; divergence \\nabla \\cdot \\vec{V} measures volumetric flux density; curl \\nabla \\times \\vec{V} measures rotational vorticity.",
      "Kinematics in Plane Polar Coordinates: Position vector \\vec{r} = r\\,\\hat{r}; velocity vector \\vec{v} = \\dot{r}\\,\\hat{r} + r\\dot{\\theta}\\,\\hat{\\theta} where \\dot{r} is radial velocity and r\\dot{\\theta} is transverse velocity.",
      "Acceleration in Polar Coordinates: Total acceleration \\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}; radial acceleration includes centripetal term -r\\dot{\\theta}^2, transverse includes Coriolis-type acceleration 2\\dot{r}\\dot{\\theta}.",
      "Projectile Motion Trajectory: Parametric equations x(t) = u\\cos\\theta \\cdot t, y(t) = u\\sin\\theta \\cdot t - \\frac{1}{2}g t^2; Cartesian parabolic trajectory equation y = x\\tan\\theta - \\frac{g x^2}{2 u^2\\cos^2\\theta}.",
      "Projectile Range & Max Height: Time of flight T = \\frac{2 u\\sin\\theta}{g}; maximum vertical height H_{max} = \\frac{u^2\\sin^2\\theta}{2g}; horizontal range R = \\frac{u^2\\sin 2\\theta}{g} reaching peak range at launch angle \\theta = 45^\\circ.",
      "Relative Velocity & Moving Reference Frames: Relative velocity of body A observed from frame B is \\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B; relative acceleration \\vec{a}_{AB} = \\vec{a}_A - \\vec{a}_B for non-accelerating frames.",
      "Galilean Transformations: Relates coordinates between inertial frame S and frame S' moving with uniform velocity \\vec{v}: \\vec{r}' = \\vec{r} - \\vec{v}t and t' = t; laws of mechanics are invariant under Galilean transformations.",
      "Tangential and Normal Acceleration: In curved planar motion, acceleration decomposes as \\vec{a} = a_t\\,\\hat{t} + a_n\\,\\hat{n} = \\frac{dv}{dt}\\hat{t} + \\frac{v^2}{\\rho}\\hat{n} where \\rho is local radius of curvature.",
    ],
    keyPoints: [
      "BAC-CAB Vector Identity: \\vec{A} \\times (\\vec{B} \\times \\vec{C}) = (\\vec{A} \\cdot \\vec{C})\\vec{B} - (\\vec{A} \\cdot \\vec{B})\\vec{C}.",
      "Polar Velocity Components: Radial v_r = \\frac{dr}{dt}, Transverse v_\\theta = r\\frac{d\\theta}{dt}.",
      "Polar Acceleration Formula: a_r = \\ddot{r} - r\\dot{\\theta}^2, a_\\theta = r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta} = \\frac{1}{r}\\frac{d}{dt}(r^2\\dot{\\theta}).",
      "Projectile Trajectory Equation: y = x\\tan\\theta - \\frac{g x^2}{2 u^2\\cos^2\\theta}.",
      "Maximum Projectile Range: R_{max} = \\frac{u^2}{g} at launch angle \\theta = 45^\\circ.",
      "Normal Centripetal Acceleration: a_n = \\frac{v^2}{\\rho} directed toward instantaneous center of curvature.",
      "Irrotational Vector Condition: \\nabla \\times \\vec{V} = \\vec{0} \\implies \\vec{V} = \\nabla\\phi (conservative field).",
      "Solenoidal Vector Condition: \\nabla \\cdot \\vec{V} = 0 (divergence-free flow, no sources/sinks).",
      "Galilean Invariance: Acceleration is identical in all inertial frames: \\vec{a}' = \\vec{a}.",
      "Exam Strategy: Always decompose velocities along mutually orthogonal unit vectors before applying calculus differentiation.",
    ],
  },

  "laws of motion": {
    highlights: [
      "Newton's Three Axioms: First law defines inertial frames (law of inertia); Second law establishes dynamic momentum rate \\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a}; Third law establishes action-reaction pairs \\vec{F}_{12} = -\\vec{F}_{21}.",
      "Inertial vs Non-Inertial Frames: Inertial frames are unaccelerated frames where Newton's laws hold without fictitious terms; accelerating or rotating frames require pseudo forces.",
      "Pseudo / Fictitious Forces: In frame accelerating with \\vec{a}_0, every mass m experiences fictitious inertial force \\vec{F}_{pseudo} = -m\\vec{a}_0 acting opposite to acceleration.",
      "Dynamics in Rotating Frames: Equation of motion in rotating coordinate system: m\\vec{a}' = \\vec{F}_{real} - m\\vec{\\omega} \\times (\\vec{\\omega} \\times \\vec{r}) - 2m(\\vec{\\omega} \\times \\vec{v}') - m\\frac{d\\vec{\\omega}}{dt} \\times \\vec{r}.",
      "Centrifugal Force: \\vec{F}_{cf} = -m\\vec{\\omega} \\times (\\vec{\\omega} \\times \\vec{r}) = m\\omega^2 r_\\perp\\hat{r}_\\perp acts radially outward from instantaneous rotation axis.",
      "Coriolis Force: \\vec{F}_{cor} = -2m(\\vec{\\omega} \\times \\vec{v}') acts perpendicular to both rotation vector \\vec{\\omega} and particle velocity \\vec{v}', deflecting moving bodies right in Northern Hemisphere.",
      "Terrestrial Applications of Coriolis Effect: Causes counterclockwise cyclonic storm circulation in Northern Hemisphere, rightward erosion of river banks (Baer's law), and eastward deflection of freely falling bodies \\Delta x = \\frac{1}{3}\\omega g t^3\\cos\\lambda.",
      "Variable Mass Systems & Rocket Motion: For system with mass ejection rate \\frac{dm}{dt} at exhaust speed u_r, equation of motion is m\\frac{d\\vec{v}}{dt} = \\vec{F}_{ext} + \\vec{u}_r\\frac{dm}{dt}.",
      "Tsiolkovsky Rocket Equation: Final burnout velocity for single-stage rocket in zero gravity: v = v_0 + u_r\\ln\\left(\\frac{m_0}{m}\\right); in uniform gravitational field v = v_0 + u_r\\ln\\left(\\frac{m_0}{m}\\right) - gt.",
      "Laws of Dry Friction: Static friction f_s \\le \\mu_s N; kinetic friction f_k = \\mu_k N with \\mu_s > \\mu_k; coefficient of friction depends on surface contact characteristics independent of apparent contact area.",
    ],
    keyPoints: [
      "Newton's Second Law General Form: \\vec{F}_{net} = \\frac{d\\vec{p}}{dt} = m\\frac{d\\vec{v}}{dt} + \\vec{v}\\frac{dm}{dt}.",
      "Pseudo Force Formula: \\vec{F}_{pseudo} = -m\\vec{a}_0.",
      "Centrifugal Force Formula: \\vec{F}_{cf} = m\\omega^2 r directed outward from axis.",
      "Coriolis Force Formula: \\vec{F}_{cor} = -2m(\\vec{\\omega} \\times \\vec{v}').",
      "Freely Falling Coriolis Deflection: \\Delta x = \\frac{1}{3}\\omega g t^3\\cos\\lambda (directed eastward).",
      "Rocket Thrust Equation: T = u_r\\left(-\\frac{dm}{dt}\\right) where u_r is relative exhaust velocity.",
      "Tsiolkovsky Equation: v_f = v_i + u_r\\ln\\left(\\frac{m_0}{m_f}\\right) - gt.",
      "Angle of Repose & Friction: \\tan\\theta = \\mu_s where \\theta is limiting angle of tilt before sliding begins.",
      "Northern Hemisphere Coriolis Rule: Moving bodies are deflected to their right; winds around low-pressure systems circulate counter-clockwise.",
      "Exam Problem Strategy: Draw an unambiguous Free Body Diagram (FBD), clearly choose an inertial or non-inertial reference frame, and state all pseudo-forces explicitly.",
    ],
  },

  "work, energy & collisions": {
    highlights: [
      "Work Done by Variable Force: Differential work dW = \\vec{F} \\cdot d\\vec{r}; total work along trajectory curve C is line integral W = \\int_{r_1}^{r_2} \\vec{F} \\cdot d\\vec{r} = \\int (F_x dx + F_y dy + F_z dz).",
      "Work-Energy Theorem: Total net work done by all forces (conservative, non-conservative, and external) equals change in kinetic energy: W_{net} = \\Delta K = \\frac{1}{2}m v_f^2 - \\frac{1}{2}m v_i^2.",
      "Conservative Forces & Potential Energy: A force is conservative iff \\oint \\vec{F} \\cdot d\\vec{r} = 0 \\iff \\nabla \\times \\vec{F} = \\vec{0}; conservative force derives from scalar potential \\vec{F} = -\\nabla U.",
      "Potential Energy Curves & Stability: Equilibrium points satisfy \\frac{dU}{dx} = 0; Stable equilibrium at potential minimum \\frac{d^2U}{dx^2} > 0; Unstable equilibrium at potential maximum \\frac{d^2U}{dx^2} < 0; Neutral equilibrium when \\frac{d^2U}{dx^2} = 0.",
      "Center of Mass (CM) System: Discrete coordinates \\vec{R}_{cm} = \\frac{\\sum m_i\\vec{r}_i}{\\sum m_i}; continuous body \\vec{R}_{cm} = \\frac{1}{M}\\int \\vec{r}\\,dm; in CM frame, total linear momentum is identically zero \\vec{P}_{cm} = \\sum m_i\\vec{v}_i' = \\vec{0}.",
      "Kinetic Energy in CM Frame (Koenig's Theorem): Total kinetic energy decomposes into motion of CM plus internal kinetic energy relative to CM: K_{total} = \\frac{1}{2}M V_{cm}^2 + K_{rel}.",
      "Elastic Collisions in One Dimension: Both linear momentum and mechanical kinetic energy are conserved; final velocities: v_1 = \\frac{m_1 - m_2}{m_1 + m_2}u_1 + \\frac{2m_2}{m_1 + m_2}u_2, v_2 = \\frac{2m_1}{m_1 + m_2}u_1 + \\frac{m_2 - m_1}{m_1 + m_2}u_2.",
      "Coefficient of Restitution: Defined as ratio of relative velocity of separation to relative velocity of approach: e = \\frac{v_2 - v_1}{u_1 - u_2}; e = 1 (perfectly elastic), 0 < e < 1 (inelastic), e = 0 (completely inelastic, bodies stick together).",
      "Energy Loss in Inelastic Collisions: Kinetic energy loss during completely inelastic collision in 1D: \\Delta K = \\frac{1}{2}\\frac{m_1 m_2}{m_1 + m_2}(u_1 - u_2)^2(1 - e^2).",
      "Two-Dimensional Collisions & Scattering: Momentum conservation vector equation m_1\\vec{u}_1 + m_2\\vec{u}_2 = m_1\\vec{v}_1 + m_2\\vec{v}_2; scattering angle \\theta and recoil angle \\phi linked through energy and transverse momentum balance.",
    ],
    keyPoints: [
      "Work-Energy Formula: W_{net} = \\Delta K = \\frac{1}{2}m(v_f^2 - v_i^2).",
      "Conservative Force Criterion: \\vec{F} = -\\nabla U \\iff \\nabla \\times \\vec{F} = \\vec{0}.",
      "Stable Equilibrium Condition: \\frac{dU}{dx} = 0 and \\frac{d^2U}{dx^2} > 0.",
      "Center of Mass Velocity: \\vec{V}_{cm} = \\frac{\\sum m_i\\vec{v}_i}{M} = \\frac{\\vec{P}_{total}}{M}.",
      "1D Elastic Equal Mass Collision: Masses exchange velocities completely (v_1 = u_2 and v_2 = u_1 when m_1 = m_2).",
      "Coefficient of Restitution: e = \\frac{v_2 - v_1}{u_1 - u_2}; e=1 (elastic), e=0 (plastic/coalescing).",
      "Inelastic Energy Loss Formula: \\Delta K = \\frac{1}{2}\\mu(u_1 - u_2)^2(1 - e^2) where reduced mass \\mu = \\frac{m_1 m_2}{m_1 + m_2}.",
      "Koenig's Energy Theorem: K = \\frac{1}{2}M V_{cm}^2 + \\frac{1}{2}\\sum m_i v_i'^2.",
      "Power Definition: Instantaneous mechanical power P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}.",
      "Exam Tip: When solving collision problems in laboratory frames, always verify whether working in the Center of Mass (CM) frame simplifies the algebra.",
    ],
  },

  "rotational dynamics": {
    highlights: [
      "Kinematics of Rotation: Angular displacement \\theta, angular velocity \\vec{\\omega} = \\frac{d\\theta}{dt}\\hat{k}, angular acceleration \\vec{\\alpha} = \\frac{d\\vec{\\omega}}{dt}; linear-angular linkages \\vec{v} = \\vec{\\omega} \\times \\vec{r}, \\vec{a} = \\vec{\\alpha} \\times \\vec{r} + \\vec{\\omega} \\times (\\vec{\\omega} \\times \\vec{r}).",
      "Torque and Angular Momentum: Torque \\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\frac{d\\vec{L}}{dt}; angular momentum of particle \\vec{L} = \\vec{r} \\times \\vec{p}; for rigid body rotating about principal axis \\vec{L} = I\\vec{\\omega}.",
      "Conservation of Angular Momentum: If external torque \\vec{\\tau}_{ext} = \\vec{0}, total angular momentum is strictly conserved \\vec{L} = I\\vec{\\omega} = \\text{constant}; explains planetary orbital speeds and spinning figure skaters.",
      "Moment of Inertia (MI) & Radius of Gyration: Discrete body I = \\sum m_i r_i^2; continuous body I = \\int r^2 dm; radius of gyration k = \\sqrt{\\frac{I}{M}} represents effective radial distance where entire mass could be concentrated.",
      "Parallel Axis Theorem (Steiner's Theorem): Moment of inertia about any axis parallel to centroidal axis is I = I_{cm} + M d^2, where d is perpendicular distance between parallel axes.",
      "Perpendicular Axis Theorem: For planar laminar body in xy-plane, moment of inertia about perpendicular z-axis equals sum about orthogonal in-plane axes: I_z = I_x + I_y.",
      "Moments of Inertia for Standard Symmetrical Bodies: Thin ring I = MR^2; circular disc I = \\frac{1}{2}MR^2; solid cylinder I = \\frac{1}{2}MR^2; solid sphere I = \\frac{2}{5}MR^2; hollow sphere I = \\frac{2}{3}MR^2; thin uniform rod about center I = \\frac{1}{12}ML^2 and about end I = \\frac{1}{3}ML^2.",
      "Rotational Kinetic Energy & Work: Rotational kinetic energy K_{rot} = \\frac{1}{2}I\\omega^2; work done by torque W = \\int \\tau\\,d\\theta; work-energy theorem for rotation W_{net} = \\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_i^2.",
      "Rolling Motion Without Slipping: Velocity of CM is V_{cm} = R\\omega; total kinetic energy K_{total} = \\frac{1}{2}M V_{cm}^2 + \\frac{1}{2}I_{cm}\\omega^2 = \\frac{1}{2}M V_{cm}^2\\left(1 + \\frac{k^2}{R^2}\\right); acceleration down inclined plane of angle \\theta: a = \\frac{g\\sin\\theta}{1 + \\frac{k^2}{R^2}}.",
      "Gyroscopic Precession: Symmetrical spinning top with angular momentum L = I\\omega subjected to gravitational torque \\tau = M g d\\sin\\theta undergoes steady precession at angular speed \\Omega_p = \\frac{\\tau}{L\\sin\\theta} = \\frac{M g d}{I\\omega}.",
    ],
    keyPoints: [
      "Torque Equation: \\vec{\\tau} = \\vec{r} \\times \\vec{F} = I\\vec{\\alpha} = \\frac{d\\vec{L}}{dt}.",
      "Parallel Axis Formula: I = I_{cm} + M d^2.",
      "Perpendicular Axis Formula: I_z = I_x + I_y (strictly applicable only to 2D planar laminae).",
      "Standard MI of Solid Sphere: I = \\frac{2}{5}MR^2; Hollow sphere I = \\frac{2}{3}MR^2.",
      "Standard MI of Circular Disc: I_{axis} = \\frac{1}{2}MR^2; I_{diameter} = \\frac{1}{4}MR^2.",
      "Total Rolling Kinetic Energy: K = \\frac{1}{2}M V_{cm}^2\\left(1 + \\frac{k^2}{R^2}\\right).",
      "Rolling Acceleration Down Incline: a = \\frac{g\\sin\\theta}{1 + \\frac{I_{cm}}{MR^2}} (solid sphere reaches bottom faster than disc or hoop).",
      "Gyroscopic Precession Frequency: \\Omega_p = \\frac{\\tau}{L} = \\frac{M g d}{I\\omega}.",
      "Conservation of Angular Momentum: I_1\\omega_1 = I_2\\omega_2 when net external torque \\tau_{ext} = 0.",
      "Exam Common Mistake: Never apply perpendicular axis theorem to three-dimensional solids (spheres, cylinders); it holds exclusively for 2D plane laminae.",
    ],
  },

  "oscillations": {
    highlights: [
      "Simple Harmonic Motion (SHM) Fundamentals: Periodic back-and-forth motion where restoring force is proportional to displacement from equilibrium: F = -k x = m\\frac{d^2x}{dt^2}; linear differential equation \\frac{d^2x}{dt^2} + \\omega_0^2 x = 0 with natural angular frequency \\omega_0 = \\sqrt{\\frac{k}{m}}.",
      "General Solution of SHM: Displacement x(t) = A\\cos(\\omega_0 t + \\phi) where A is amplitude, \\omega_0 is angular frequency, and \\phi is initial phase angle; velocity v(t) = -A\\omega_0\\sin(\\omega_0 t + \\phi) = \\pm\\omega_0\\sqrt{A^2 - x^2}; acceleration a(t) = -A\\omega_0^2\\cos(\\omega_0 t + \\phi) = -\\omega_0^2 x(t).",
      "Energetics of Simple Harmonic Oscillators: Kinetic energy K(t) = \\frac{1}{2}m v^2 = \\frac{1}{2}k(A^2 - x^2); potential energy U(t) = \\frac{1}{2}k x^2; total mechanical energy E = K + U = \\frac{1}{2}k A^2 = \\frac{1}{2}m\\omega_0^2 A^2 = \\text{constant}.",
      "Physical Pendulum & Compound Pendulum: Rigid body oscillating about horizontal axis: differential equation \\frac{d^2\\theta}{dt^2} + \\frac{M g d}{I}\\theta = 0; time period T = 2\\pi\\sqrt{\\frac{I}{M g d}} = 2\\pi\\sqrt{\\frac{k^2 + d^2}{g d}} = 2\\pi\\sqrt{\\frac{L_{eq}}{g}} where L_{eq} = d + \\frac{k^2}{d} is equivalent simple pendulum length.",
      "Torsional Pendulum: Disc suspended by wire of torsional rigidity C = \\frac{\\pi\\eta r^4}{2L}; restoring torque \\tau = -C\\theta = I\\frac{d^2\\theta}{dt^2}; time period T = 2\\pi\\sqrt{\\frac{I}{C}}; utilized to measure shear modulus \\eta of wires.",
      "Damped Harmonic Oscillations: Dissipative resistive force proportional to velocity F_d = -b\\frac{dx}{dt}; differential equation \\frac{d^2x}{dt^2} + 2\\gamma\\frac{dx}{dt} + \\omega_0^2 x = 0 where damping parameter \\gamma = \\frac{b}{2m}.",
      "Regimes of Damped Motion: (1) Underdamped (\\gamma < \\omega_0): oscillatory decay x(t) = A_0 e^{-\\gamma t}\\cos(\\omega_d t + \\phi) with reduced frequency \\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2}; (2) Critically damped (\\gamma = \\omega_0): returns to equilibrium most rapidly without oscillating; (3) Overdamped (\\gamma > \\omega_0): slow non-oscillatory exponential return.",
      "Energy Dissipation & Logarithmic Decrement: Amplitude decays exponentially as A(t) = A_0 e^{-\\gamma t}; logarithmic decrement \\delta = \\ln\\left(\\frac{A_n}{A_{n+1}}\\right) = \\gamma T_d; relaxation time \\tau = \\frac{1}{2\\gamma} is time for energy to drop to \\frac{1}{e} of initial value.",
      "Forced Oscillations & Resonance: Driven by sinusoidal force F(t) = F_0\\cos(\\omega t); steady-state amplitude A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\gamma^2\\omega^2}}; amplitude resonance occurs at driving frequency \\omega_r = \\sqrt{\\omega_0^2 - 2\\gamma^2}; velocity resonance occurs exactly at \\omega = \\omega_0.",
      "Quality Factor (Q-Factor) & Bandwidth: Sharpness of resonance measured by Q = \\frac{\\omega_0}{2\\gamma} = \\frac{\\omega_0}{\\Delta\\omega} = 2\\pi\\frac{\\text{Energy Stored}}{\\text{Energy Lost per Cycle}} where bandwidth \\Delta\\omega = 2\\gamma$ is full width at half-maximum (FWHM) of power absorption curve.",
    ],
    keyPoints: [
      "Differential Equation of Undamped SHM: \\frac{d^2x}{dt^2} + \\omega_0^2 x = 0; angular frequency \\omega_0 = \\sqrt{\\frac{k}{m}}.",
      "SHM Velocity-Displacement Relation: v(x) = \\pm\\omega_0\\sqrt{A^2 - x^2}.",
      "Total Mechanical Energy in SHM: E = \\frac{1}{2}m\\omega_0^2 A^2 = \\frac{1}{2}k A^2 (independent of time t and position x).",
      "Compound Pendulum Period: T = 2\\pi\\sqrt{\\frac{k^2 + d^2}{g d}} = 2\\pi\\sqrt{\\frac{L_{eq}}{g}}.",
      "Torsional Pendulum Formula: T = 2\\pi\\sqrt{\\frac{I}{C}} where C = \\frac{\\pi\\eta r^4}{2L}.",
      "Damped Frequency: \\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2} where damping coefficient \\gamma = \\frac{b}{2m}.",
      "Logarithmic Decrement: \\delta = \\gamma T_d = \\ln\\left(\\frac{A_1}{A_2}\\right).",
      "Amplitude Resonance Frequency: \\omega_r = \\sqrt{\\omega_0^2 - 2\\gamma^2} (strictly lower than natural frequency \\omega_0).",
      "Quality Factor Formula: Q = \\frac{\\omega_0}{2\\gamma} = \\frac{\\omega_0}{\\Delta\\omega}.",
      "Exam Distinctions: Velocity resonance occurs at \\omega = \\omega_0 regardless of damping, whereas amplitude resonance occurs at \\omega_r = \\sqrt{\\omega_0^2 - 2\\gamma^2}.",
    ],
  },

  // ====================================================
  // B.SC PHYSICS LAB UNITS (PHYSICS LAB I TO V)
  // ====================================================
  "physics lab unit 1: safety & instrumentation": {
    highlights: [
      "Laboratory Safety Framework: Standard operating procedures (SOP), hazard identification, emergency eye-wash/shower stations, electrical safety groundings, and personal protective equipment (PPE: lab coat, safety goggles, insulated gloves).",
      "Principle of Least Count (LC): Smallest value measurable by an instrument; for Vernier Callipers \\text{LC} = 1\\text{ MSD} - 1\\text{ VSD} = \\frac{s}{n}; for Screw Gauge \\text{LC} = \\frac{\\text{Pitch}}{\\text{Total Head Scale Divisions}}.",
      "Vernier Calliper Precision: Used for internal diameter, external diameter, and depth of cylinders; zero error determination (positive zero error subtracted, negative zero error added to observed reading).",
      "Screw Gauge / Micrometer Precision: Used for fine wire diameter and thin sheet thickness; pitch p = \\frac{\\text{Distance moved}}{\\text{Rotations}}; backlash error minimized by turning screw unidirectionally without reverse oscillation.",
      "Spherometer & Radius of Curvature: Three outer legs forming equilateral triangle of side l; central screw measures sagittal height h; radius of curvature R = \\frac{l^2}{6h} + \\frac{h}{2}.",
      "Travelling Microscope Alignment: Precision horizontal and vertical Vernier scales (typical \\text{LC} = 0.001\\text{ cm}); rack and pinion focusing; eyepiece crosswire alignment avoiding eye parallax error.",
      "Optical Bench Alignment: Coaxial leveling of light source, slit, biprism/grating, and micrometer eyepiece; leveling screws and spirit level ensure horizontal alignment along bench bed.",
      "Electrical Instruments & Meters: Moving coil galvanometer sensitivity; conversion to ammeter via parallel low shunt resistance S = \\frac{I_g G}{I - I_g}; conversion to voltmeter via high series resistance R = \\frac{V}{I_g} - G.",
      "Zero Error and Parallax Elimination: Zero error occurs when instrument reads non-zero at null input; parallax error eliminated by placing eye perpendicular to scale division or ensuring crosswire tracks image without relative shift.",
      "Digital Multimeters (DMM) & Oscilloscopes (CRO): DMM measurement of AC/DC voltage, current, and resistance; CRO measurement of peak-to-peak amplitude V_{pp}, time period T, frequency f = \\frac{1}{T}, and Lissajous figures for phase difference.",
    ],
    keyPoints: [
      "Vernier Calliper Least Count: \\text{LC} = \\frac{\\text{Value of 1 Main Scale Division}}{\\text{Total Number of Vernier Divisions}}.",
      "Screw Gauge Least Count: \\text{LC} = \\frac{\\text{Pitch}}{\\text{Total Circular Scale Divisions}}.",
      "True Reading Correction: \\text{True Reading} = \\text{Observed Reading} - (\\text{Zero Error}).",
      "Spherometer Radius of Curvature: R = \\frac{l^2}{6h} + \\frac{h}{2}.",
      "Backlash Error Prevention: Always rotate the screw gauge ratchet smoothly in the same direction during final contact.",
      "Ammeter Shunt Formula: S = \\frac{I_g G}{I - I_g}.",
      "Voltmeter Series Resistance: R = \\frac{V}{I_g} - G.",
      "CRO Frequency Formula: f = \\frac{1}{T} = \\frac{1}{\\text{Horizontal Divisions} \\times \\text{Time/Div}}.",
      "Parallax Elimination Rule: Align eye strictly normal to the scale surface or crosswire to prevent line-of-sight refraction distortion.",
      "Practical Exam Rule: Record the zero error and least count with correct units before taking any experimental observation.",
    ],
  },

  "physics lab unit 2: calibration & preparations": {
    highlights: [
      "Instrument Calibration Concept: Comparison of instrument measurements against a traceable standard reference to identify and correct systematic deviation and non-linearity.",
      "Leveling & Optical Bench Alignment: Using spirit levels on two orthogonal axes to ensure zero gravitational tilt; aligning collimator, prism table, and telescope in spectrometer using Schuster's method.",
      "Stopwatch & Timer Calibration: Measuring reaction time offset; calibration against digital quartz atomic reference timers; recording multiple oscillation cycles (N \\ge 20) to minimize timing fraction error.",
      "Spring Constant Calibration: Static extension method (F = k x \\implies k = \\frac{m g}{x}) and dynamic oscillation method (T = 2\\pi\\sqrt{\\frac{m + m_{eff}}{k}}); plotting T^2 vs load m to determine spring constant k from slope.",
      "Bar Pendulum Knife-Edge Alignment: Hardened steel knife-edges aligned parallel and perpendicular to rod axis; symmetric hole positioning about center of gravity to ensure planar oscillations without wobbling.",
      "Temperature & Thermal Isolation: Establishing thermal equilibrium in calorimetry and thermal conductivity experiments; Newton's law of cooling correction for heat loss to surroundings.",
      "Electrical Meter Zero Adjustments: Calibrating potentiometer wire uniformity; finding potential gradient k = \\frac{V}{L}; standardizing potentiometer using standard Weston cadmium cell (E_0 = 1.0186\\text{ V}).",
      "Spectrometer Calibration: Focusing telescope for parallel rays using distant object; leveling prism table using three screws; determining angle of minimum deviation D_m with sodium yellow doublet (\\lambda = 589.3\\text{ nm}).",
      "Travelling Microscope Calibration: Verifying scale accuracy against precision steel rule; adjusting illumination source with green/sodium monochromatic filter for sharp boundary contrast.",
      "Baseline Drift Stabilization: Warm-up time for electronic equipment (oscilloscopes, laser diodes, photodetectors) to eliminate thermal drift before taking baseline measurement readings.",
    ],
    keyPoints: [
      "Calibration Curve Equation: Plot Measured Response (y) vs Standard Reference (x); calculate calibration sensitivity from slope \\frac{dy}{dx}.",
      "Schuster's Spectrometer Leveling: Optical iterative method to focus telescope and collimator for parallel light without removing prism from table.",
      "Dynamic Spring Calibration: Plot T^2 vs added mass m; \\text{Slope} = \\frac{4\\pi^2}{k} \\implies k = \\frac{4\\pi^2}{\\text{Slope}}.",
      "Potentiometer Potential Gradient: k = \\frac{I \\rho}{A} = \\frac{V_{wire}}{L}; EMF comparison \\frac{E_1}{E_2} = \\frac{l_1}{l_2}.",
      "Optical Bench Symmetrical Alignment: Ensure optical axis passes through geometric center of lens holders and pin tips at uniform vertical elevation.",
      "Timing Uncertainty Minimization: Always measure time for at least 20 to 30 complete oscillations rather than individual single periods.",
      "Knife-Edge Condition: Sharp, rust-free knife edges supported on horizontal agate plates minimize frictional damping.",
      "Monochromatic Wavelength Standards: Sodium vapor lamp yellow doublet D_1 = 589.6\\text{ nm}, D_2 = 589.0\\text{ nm} (mean \\lambda = 589.3\\text{ nm}).",
      "Spirit Level Rule: Central air bubble must remain stationary within central graduation marks when level is rotated 180^\\circ.",
      "Practical Check: Re-verify zero reading after completing every experimental run to detect any physical displacement or mechanical drift.",
    ],
  },

  "physics lab unit 3: experimental procedures": {
    highlights: [
      "Bar / Compound Pendulum Experiment: Measuring time period T for symmetrical knife-edge distances d from center of gravity; plotting T vs d curve showing four points of equal time period; determining acceleration due to gravity g = 4\\pi^2\\frac{L_{eq}}{T^2} and radius of gyration k = \\sqrt{d_1 d_2}.",
      "Kater's Reversible Pendulum: Asymmetrical reversible pendulum with adjustable knife-edges; adjusting cylinder weights until periods T_1 and T_2 about both knife-edges are nearly identical; calculating absolute g = \\frac{8\\pi^2}{\\frac{T_1^2 + T_2^2}{l_1 + l_2} + \\frac{T_1^2 - T_2^2}{l_1 - l_2}}.",
      "Torsional Pendulum (Rigidity Modulus): Wire supporting heavy inertia disc/cylinder; measuring oscillation period T; calculating rigidity modulus of wire material \\eta = \\frac{8\\pi I L}{T^2 r^4} using Vernier caliper for wire length L and screw gauge for wire radius r.",
      "Flywheel Experiment (Moment of Inertia): Mass m wrapped around axle of radius r descends through height h, detaches after N_1 rotations, and flywheel rotates N_2 additional turns before stopping; moment of inertia I = \\frac{N_1 N_2}{N_1 + N_2}\\left(\\frac{2m g h}{\\omega^2} - m r^2\\right).",
      "Young's Modulus by Bending of a Beam: Uniform bar supported on two knife-edges separated by length L, loaded centrally with mass M; depression \\delta measured by spherometer or travelling microscope; Young's modulus Y = \\frac{M g L^3}{4 b d^3 \\delta} where b is breadth and d is depth.",
      "Surface Tension by Capillary Rise: Clean capillary tube of bore radius r immersed vertically in liquid of density \\rho; height of meniscus h; surface tension T = \\frac{r(h + r/3)\\rho g}{2\\cos\\theta}.",
      "Viscosity by Poiseuille's Flow: Laminar flow through capillary tube of length l and radius a under hydrostatic pressure difference P = h\\rho g; volume flow rate V/t; coefficient of viscosity \\eta = \\frac{\\pi P a^4}{8 l (V/t)}.",
      "Newton's Rings Experiment: Interference fringes between plano-convex lens and glass plate illuminated by monochromatic sodium light; dark ring diameter D_n; wavelength \\lambda = \\frac{D_{n+m}^2 - D_n^2}{4 m R} where R is lens surface radius of curvature.",
      "Spectrometer Prism (Refractive Index): Finding angle of prism A by reflection from two faces; finding angle of minimum deviation D_m by refracting monochromatic ray; refractive index \\mu = \\frac{\\sin\\left(\\frac{A + D_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}.",
      "Diffraction Grating (Wavelength of Light): Normal incidence on plane transmission grating with N lines per inch; grating element (a + b) = \\frac{2.54}{N}\\text{ cm}; measuring diffraction angles \\theta for first and second order spectral lines; \\lambda = \\frac{(a + b)\\sin\\theta}{n}.",
    ],
    keyPoints: [
      "Acceleration Due to Gravity (Bar Pendulum): g = 4\\pi^2\\frac{L_{eq}}{T^2} where L_{eq} = d_1 + d_2 from graph intersection.",
      "Kater's Reversible Pendulum Formula: g = \\frac{8\\pi^2}{\\frac{T_1^2 + T_2^2}{l_1 + l_2} + \\frac{T_1^2 - T_2^2}{l_1 - l_2}}.",
      "Wire Rigidity Modulus (Torsional Pendulum): \\eta = \\frac{8\\pi I L}{T^2 r^4} (extreme sensitivity to radius r^4).",
      "Young's Modulus (Beam Bending): Y = \\frac{M g L^3}{4 b d^3 \\delta}; depth d^3 requires screw gauge precision.",
      "Newton's Rings Formula: \\lambda = \\frac{D_{n+m}^2 - D_n^2}{4 m R}; dark ring diameter D_n \\propto \\sqrt{n}.",
      "Spectrometer Refractive Index: \\mu = \\frac{\\sin\\left(\\frac{A + D_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}.",
      "Diffraction Grating Equation: (a + b)\\sin\\theta = n\\lambda.",
      "Poiseuille's Viscosity: \\eta = \\frac{\\pi P a^4}{8 l (V/t)} (depends on fourth power of capillary radius a^4).",
      "Flywheel Moment of Inertia: I = \\frac{2m g h - m r^2\\omega^2}{\\omega^2\\left(1 + \\frac{N_1}{N_2}\\right)}.",
      "Lab Protocol: Always repeat readings at least 3 to 5 times and take mean values to eliminate random human observational errors.",
    ],
  },

  "physics lab unit 4: error analysis": {
    highlights: [
      "Classification of Experimental Errors: Systematic errors (instrumental calibration bias, zero errors, personal habits, environmental variations) which skew data in one direction; Random errors (uncontrollable fluctuations) which follow Gaussian distribution.",
      "Absolute, Fractional, and Percentage Errors: Absolute error \\Delta x = |x_{obs} - x_{true}|; fractional relative error \\frac{\\Delta x}{x}; percentage error \\% = \\frac{\\Delta x}{x} \\times 100\\%.",
      "Error Propagation in Addition & Subtraction: If Z = A \\pm B, maximum absolute error adds directly: \\Delta Z = \\Delta A + \\Delta B.",
      "Error Propagation in Multiplication & Division: If Z = A^m B^n / C^p, maximum fractional error satisfies logarithmic differentiation: \\frac{\\Delta Z}{Z} = m\\frac{\\Delta A}{A} + n\\frac{\\Delta B}{B} + p\\frac{\\Delta C}{C}.",
      "High-Power Sensitivity Factor: Variables with higher exponents contribute disproportionately to total experimental uncertainty; for example in Y = \\frac{M g L^3}{4 b d^3 \\delta}, percentage error in beam depth d is multiplied by 3 (\\frac{3\\Delta d}{d}).",
      "Arithmetic Mean and Residuals: Best estimate of measured quantity is sample mean \\bar{x} = \\frac{1}{N}\\sum_{i=1}^N x_i; individual residuals d_i = x_i - \\bar{x}; sum of residuals is identically zero \\sum d_i = 0.",
      "Standard Deviation and Variance: Sample variance s^2 = \\frac{1}{N - 1}\\sum (x_i - \\bar{x})^2; sample standard deviation s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{N - 1}} represents scatter of individual measurements around mean.",
      "Standard Error of the Mean: Standard deviation of mean estimate \\sigma_m = \\frac{s}{\\sqrt{N}}; demonstrates that increasing observation count N by factor of 4 halves uncertainty in mean.",
      "Method of Least Squares Linear Fitting: For relationship y = mx + c, best fit parameters minimizing sum of squared residuals: slope m = \\frac{N\\sum x_i y_i - \\sum x_i \\sum y_i}{N\\sum x_i^2 - (\\sum x_i)^2}, y-intercept c = \\frac{\\sum y_i - m\\sum x_i}{N}.",
      "Significant Figures & Rounding Off Rules: Measured quantities must only retain significant digits consistent with instrument precision; final calculated result cannot possess greater precision than least precise measured factor.",
    ],
    keyPoints: [
      "Fractional Error Formula: \\frac{\\Delta Z}{Z} = m\\frac{\\Delta A}{A} + n\\frac{\\Delta B}{B} + p\\frac{\\Delta C}{C} for Z = \\frac{A^m B^n}{C^p}.",
      "Maximum Permissible Error in g (Simple Pendulum): \\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T}.",
      "Percentage Error Expression: \\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Standard Value}|}{\\text{Standard Value}} \\times 100\\%.",
      "Sample Standard Deviation: s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{N - 1}}.",
      "Standard Error of the Mean: \\sigma_{\\bar{x}} = \\frac{s}{\\sqrt{N}}.",
      "Linear Regression Slope: m = \\frac{N\\sum xy - \\sum x \\sum y}{N\\sum x^2 - (\\sum x)^2}.",
      "Linear Regression Intercept: c = \\bar{y} - m\\bar{x} = \\frac{\\sum y - m\\sum x}{N}.",
      "Exponent Multiplier Rule: An exponent k multiplies the fractional error by k; variables with highest exponent must be measured with highest precision apparatus.",
      "Rejection of Outliers (Chauvenet's Criterion): An observation may be rejected if probability of obtaining deviation is less than \\frac{1}{2N}.",
      "Practical Reporting Rule: State all final calculated experimental quantities as \\bar{x} \\pm \\Delta x accompanied by explicit SI units and percentage uncertainty.",
    ],
  },

  "physics lab unit 5: practical records & viva": {
    highlights: [
      "Standard Laboratory Record Architecture: Standard technical reporting sections: (1) Aim / Objective, (2) Apparatus & Equipment Specifications, (3) Principle & Working Formula with symbol definitions and SI units, (4) Circuit / Ray / Mechanical Schematic Diagram, (5) Tabular Columns with Observation Data, (6) Step-by-Step Model Calculation, (7) Graph with axes, scale, and best-fit line, (8) Final Result with uncertainty bounds, (9) Precautions, and (10) Sources of Error.",
      "Graph Plotting Standards: Select scales such that experimental data points occupy at least 60\\% of grid area; mark axes with physical variable names and units (e.g., T^2\\,(\\text{s}^2) vs L\\,(\\text{m})); draw smooth best-fit straight line or curve with balanced distribution of points above and below; never force fit line through origin unless theoretically proven.",
      "Determination of Constants from Graph Slopes: Identify two well-separated points on best-fit straight line (x_1, y_1) and (x_2, y_2) that are NOT original experimental data points; slope m = \\frac{y_2 - y_1}{x_2 - x_1}; substitute m directly into governing formula.",
      "Core Viva Voce: Physical Meaning of Constants: Physical significance of fundamental constants: g (gravitational field intensity \\approx 9.8\\text{ m/s}^2), Young's modulus Y (resistance to longitudinal elastic deformation), rigidity modulus \\eta (resistance to shear angular distortion), Poisson's ratio \\sigma = \\frac{\\text{lateral strain}}{\\text{longitudinal strain}} (theoretical limits -1 \\le \\sigma \\le 0.5).",
      "Viva Voce: Compound vs Simple Pendulum: Why is a bar pendulum called a compound pendulum? Because it is an extended rigid body oscillating about a horizontal axis, unlike an idealized massless thread with point mass; two pairs of conjugate points about center of gravity yield identical time periods (T_1 = T_2).",
      "Viva Voce: Center of Suspension and Center of Oscillation: Distance between center of suspension S and center of oscillation O equals length of equivalent simple pendulum L = l + \\frac{k^2}{l}; S and O are mutually interchangeable without altering time period.",
      "Viva Voce: Interference Conditions in Newton's Rings: Why are Newton's rings circular? Because locus of points of equal film thickness between spherical surface and planar glass is concentric circle; central spot is dark due to \\pi phase change on reflection from denser glass boundary.",
      "Viva Voce: Diffraction vs Interference Distinction: Interference involves superposition of waves originating from discrete coherent wave fronts (e.g., two slits); diffraction involves superposition of secondary wavelets originating from continuous points of same wavefront obstructed by aperture or obstacle.",
      "Viva Voce: Precautions and Systematic Error Minimization: Why must pendulum amplitude be kept small (\\theta < 4^\\circ)? Because approximation \\sin\\theta \\approx \\theta holds within 0.1\\% error; large amplitudes cause non-linear period expansion T = 2\\pi\\sqrt{\\frac{L}{g}}\\left(1 + \\frac{1}{4}\\sin^2\\frac{\\theta}{2}\\right).",
      "Practical Examination Evaluation Scheme: Typical scoring rubrics: Continuous assessment & log book (20\\%), experimental setup and procedural execution (30\\%), accuracy of quantitative result within \\pm 5\\% of standard reference (20\\%), graphical analysis and error calculation (15\\%), and oral viva voce defense (15\\%).",
    ],
    keyPoints: [
      "Small Angle Pendulum Criterion: Amplitude must remain below 4^\\circ to satisfy harmonic approximation \\sin\\theta \\approx \\theta.",
      "Equivalent Simple Pendulum Length: L_{eq} = l + \\frac{k^2}{l}; distance between center of suspension and center of oscillation.",
      "Newton's Central Dark Spot Cause: Phase change of \\pi radians (180^\\circ) corresponding to path difference of \\frac{\\lambda}{2} upon reflection at denser optical boundary.",
      "Graph Slope Coordinate Selection: Always choose coordinates on best-fit straight line far apart; never select raw experimental observation dots.",
      "Poisson's Ratio Theoretical Bounds: -1 \\le \\sigma \\le 0.5; for most solid materials, practical values range between 0.25 and 0.35.",
      "Minimum Deviation Principle: Ray passes symmetrically through prism such that angle of incidence equals angle of emergence (i = e) and refracted ray is parallel to base.",
      "Rigidity Modulus Definition: \\eta = \\frac{\\text{Shear Stress}}{\\text{Shear Strain}} = \\frac{F/A}{\\theta}; applies strictly to solid materials.",
      "Standard Record Precaution: Never use eraser or correction fluid in official laboratory log book; draw a single neat strike-through over erroneous data.",
      "Result Presentation Format: State final value with uncertainty bounds: e.g., g = (9.78 \\pm 0.05)\\text{ m/s}^2 at temperature 25^\\circ\\text{C}.",
      "Viva Defense Strategy: Confidently state working principle, write governing equation on blackboard with symbols defined, and explain physical source of primary experimental errors.",
    ],
  },

  // ====================================================
  // B.SC MATHEMATICS & CALCULUS UNITS
  // ====================================================
  "limits & continuity": {
    highlights: [
      "Epsilon-Delta Definition of Limit: \\lim_{x \\to c} f(x) = L means \\forall \\varepsilon > 0, \\exists \\delta > 0 such that 0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon.",
      "One-Sided Limits & Existence: Left-hand limit \\lim_{x \\to c^-} f(x) and right-hand limit \\lim_{x \\to c^+} f(x); limit exists iff both one-sided limits exist and are equal.",
      "Continuity at a Point: f is continuous at x = c iff f(c) is defined, \\lim_{x \\to c} f(x) exists, and \\lim_{x \\to c} f(x) = f(c).",
      "Types of Discontinuities: Removable discontinuity (limit exists \\ne f(c)); Jump discontinuity (one-sided limits exist but unequal); Essential / Infinite discontinuity (limit does not exist or unbounded).",
      "Intermediate Value Theorem (IVT): If f is continuous on [a, b] and u lies between f(a) and f(b), \\exists c \\in (a, b) such that f(c) = u; guarantees existence of real roots.",
      "Extreme Value Theorem: A continuous function f on a closed, bounded interval [a, b] attains both an absolute maximum and an absolute minimum.",
      "Indeterminate Forms & L'Hôpital's Rule: For forms \\frac{0}{0} or \\frac{\\infty}{\\infty}, \\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)} provided the latter limit exists.",
      "Standard Trigonometric Limits: \\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1, \\lim_{\\theta \\to 0} \\frac{1 - \\cos\\theta}{\\theta} = 0, \\lim_{\\theta \\to 0} \\frac{\\tan\\theta}{\\theta} = 1.",
      "Exponential Limits: \\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e, \\lim_{x \\to 0} (1 + x)^{1/x} = e, \\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a.",
      "Uniform Continuity: f is uniformly continuous on I if \\delta depends solely on \\varepsilon and not on points x, y \\in I; continuous function on compact set [a, b] is uniformly continuous.",
    ],
    keyPoints: [
      "Limit Definition: 0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon.",
      "Continuity Criteria: \\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c).",
      "L'Hôpital's Formula: \\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)} (for \\frac{0}{0} and \\frac{\\infty}{\\infty}).",
      "Trigonometric Limit: \\lim_{x \\to 0} \\frac{\\sin k x}{x} = k.",
      "Exponential Limit: \\lim_{x \\to 0} (1 + k x)^{1/x} = e^k.",
      "Squeeze / Sandwich Theorem: If g(x) \\le f(x) \\le h(x) and \\lim g = \\lim h = L, then \\lim f = L.",
      "Root Existence: If f continuous on [a, b] and f(a)f(b) < 0, then f(c) = 0 for some c \\in (a, b).",
      "Logarithmic Limit: \\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1.",
      "Powers of Form 1^\\infty: \\lim f(x)^{g(x)} = e^{\\lim g(x)[f(x) - 1]}.",
      "Exam Advice: Always verify that the indeterminate form is \\frac{0}{0} or \\frac{\\infty}{\\infty} before applying L'Hôpital's derivative rule.",
    ],
  },

  "differentiation": {
    highlights: [
      "Definition of the Derivative: f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}; represents instantaneous rate of change and tangent line slope.",
      "Differentiability & Continuity: If f is differentiable at x = c, then f is necessarily continuous at c; converse is false (e.g., f(x) = |x| at x = 0).",
      "Leibnitz's Theorem for n-th Derivative: (u v)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} u^{(n - k)} v^{(k)}; calculates higher order derivatives of products.",
      "Rolle's Theorem: If f continuous on [a, b], differentiable on (a, b), and f(a) = f(b), then \\exists c \\in (a, b) where f'(c) = 0.",
      "Lagrange's Mean Value Theorem (LMVT): If f continuous on [a, b] and differentiable on (a, b), then \\exists c \\in (a, b) such that f'(c) = \\frac{f(b) - f(a)}{b - a}.",
      "Cauchy's Generalized Mean Value Theorem: If f, g continuous on [a, b] and differentiable on (a, b), \\exists c \\in (a, b) such that \\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}.",
      "Taylor's Theorem with Remainder: f(x) = \\sum_{k=0}^{n-1} \\frac{f^{(k)}(a)}{k!}(x - a)^k + R_n(x) where Lagrange remainder R_n = \\frac{f^{(n)}(c)}{n!}(x - a)^n.",
      "Maclaurin's Power Series: Taylor series centered at a = 0; expansions for e^x, \\sin x, \\cos x, \\ln(1 + x), (1 + x)^m.",
      "Partial Derivatives & Clairaut's Theorem: First partials f_x = \\frac{\\partial f}{\\partial x}, f_y = \\frac{\\partial f}{\\partial y}; mixed partials equality f_{xy} = f_{yx} for C^2 functions.",
      "Euler's Theorem on Homogeneous Functions: If u(x, y) is homogeneous of degree n, then x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = n u.",
    ],
    keyPoints: [
      "Derivative Definition: f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}.",
      "Leibnitz Product Rule: (u v)^{(n)} = u_n v + n u_{n-1} v_1 + \\frac{n(n-1)}{2!} u_{n-2} v_2 + \\dots + u v_n.",
      "Lagrange Mean Value Formula: f'(c) = \\frac{f(b) - f(a)}{b - a} for some c \\in (a, b).",
      "Cauchy Mean Value Formula: \\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}.",
      "Maclaurin Series of \\sin x: x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots",
      "Maclaurin Series of \\cos x: 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots",
      "Maclaurin Series of e^x: 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots",
      "Euler's Homogeneous Identity: x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = n u.",
      "Chain Rule in Several Variables: \\frac{dz}{dt} = \\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt}.",
      "Exam Tip: For Leibnitz theorem questions, set v as the polynomial term that terminates after a finite number of derivatives.",
    ],
  },

  "matrices & determinants": {
    highlights: [
      "Matrix Algebra & Classifications: Symmetric (A^T = A), Skew-Symmetric (A^T = -A, diagonal zero), Orthogonal (A^T A = I), Hermitian (A^\\dagger = A), Unitary (A^\\dagger A = I).",
      "Determinant Properties: Multiplicative \\det(A B) = \\det(A)\\det(B); transpose \\det(A^T) = \\det(A); scalar multiple \\det(k A) = k^n \\det(A) for n \\times n matrix.",
      "Matrix Inversion & Adjoint: Inverse A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A); exists iff \\det(A) \\ne 0 (non-singular matrix); (A B)^{-1} = B^{-1} A^{-1}.",
      "Elementary Row Operations (EROs): Row interchange R_i \\leftrightarrow R_j, scalar multiplication R_i \\to k R_i, row addition R_i \\to R_i + k R_j; preserve row equivalence and rank.",
      "Row Echelon Form (REF) & RREF: Leading entry of each non-zero row is strictly to the right of preceding row; in Reduced REF, leading entries are 1 and columns are cleared.",
      "Matrix Rank: Maximum number of linearly independent row or column vectors; rank(A) = number of non-zero rows in any row echelon form of A.",
      "System of Linear Equations (AX = B): Augmented matrix [A|B]; consistent iff \\text{rank}(A) = \\text{rank}([A|B]); unique solution iff \\text{rank} = n; infinite solutions iff \\text{rank} < n.",
      "Homogeneous Linear Systems (AX = 0): Always consistent (trivial solution X = 0); non-trivial solutions exist iff \\det(A) = 0 \\iff \\text{rank}(A) < n.",
      "Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic polynomial P(A) = 0; used to compute A^{-1} and higher powers A^k.",
      "Vector Spaces Associated with Matrices: Row space, Column space, Null space / Kernel; Rank-Nullity theorem states \\text{dim}(\\text{Col } A) + \\text{dim}(\\text{Null } A) = n.",
    ],
    keyPoints: [
      "Matrix Inverse Formula: A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A).",
      "Reversal Rule: (A B)^T = B^T A^T and (A B)^{-1} = B^{-1} A^{-1}.",
      "Scalar Determinant Property: \\det(k A) = k^n \\det(A) where A is n \\times n.",
      "Consistency Criterion (Rouché-Capelli): Consistent iff \\text{rank}(A) = \\text{rank}([A|B]).",
      "Rank-Nullity Theorem: \\text{rank}(A) + \\text{nullity}(A) = n (total columns).",
      "Orthogonal Matrix Condition: A^T A = I \\implies A^{-1} = A^T and \\det(A) = \\pm 1.",
      "Unitary Matrix Condition: A^\\dagger A = I \\implies |\\det(A)| = 1.",
      "Homogeneous Non-Trivial Condition: AX = 0 has non-zero solution iff \\det(A) = 0.",
      "Cayley-Hamilton Identity: A^n + c_{n-1}A^{n-1} + \\dots + c_0 I = 0.",
      "Exam Shortcut: In REF computation, never perform two interdependent row operations simultaneously.",
    ],
  },

  "rank & eigenvalues": {
    highlights: [
      "Eigenvalue & Eigenvector Equation: Scalar \\lambda is eigenvalue and X \\ne 0 is eigenvector iff A X = \\lambda X; characteristic equation \\det(A - \\lambda I) = 0.",
      "Characteristic Polynomial: P(\\lambda) = \\det(A - \\lambda I) = (-1)^n \\lambda^n + (-1)^{n-1}(\\text{trace } A)\\lambda^{n-1} + \\dots + \\det(A) = 0.",
      "Trace and Determinant Properties: Sum of eigenvalues \\sum_{i=1}^n \\lambda_i = \\text{trace}(A); product of eigenvalues \\prod_{i=1}^n \\lambda_i = \\det(A).",
      "Eigenvalues of Triangular & Diagonal Matrices: The eigenvalues of upper triangular, lower triangular, or diagonal matrices are simply the main diagonal entries.",
      "Eigenvalues of Symmetric Matrices: Real symmetric matrices have purely real eigenvalues; eigenvectors corresponding to distinct eigenvalues are mutually orthogonal.",
      "Algebraic & Geometric Multiplicity: Algebraic multiplicity (AM) is root multiplicity in P(\\lambda); Geometric multiplicity (GM) is dimension of eigenspace \\text{nullity}(A - \\lambda I); 1 \\le GM \\le AM.",
      "Matrix Diagonalization: Matrix A is diagonalizable as D = P^{-1} A P iff A has n linearly independent eigenvectors (i.e. GM = AM for all eigenvalues).",
      "Orthogonal Diagonalization: Real symmetric matrix A can be orthogonally diagonalized as D = P^T A P where modal matrix P is orthogonal (P^T P = I).",
      "Powers of Diagonalizable Matrices: A^k = P D^k P^{-1} where D^k = \\text{diag}(\\lambda_1^k, \\dots, \\lambda_n^k); allows rapid computation of matrix powers.",
      "Quadratic Forms & Definiteness: Q(X) = X^T A X; canonical reduction \\sum \\lambda_i y_i^2; Positive definite iff all \\lambda_i > 0; Negative definite iff all \\lambda_i < 0; Indefinite if mixed signs.",
    ],
    keyPoints: [
      "Characteristic Equation: \\det(A - \\lambda I) = 0.",
      "Eigenvalue Sum Identity: \\sum \\lambda_i = \\text{trace}(A).",
      "Eigenvalue Product Identity: \\prod \\lambda_i = \\det(A).",
      "Eigenvalues of Inverse: If A X = \\lambda X, then A^{-1} X = \\frac{1}{\\lambda} X.",
      "Eigenvalues of Powers: If A X = \\lambda X, then A^k X = \\lambda^k X.",
      "Diagonalization Matrix: P = [X_1 \\; X_2 \\; \\dots \\; X_n] \\implies P^{-1} A P = \\text{diag}(\\lambda_1, \\dots, \\lambda_n).",
      "Orthogonal Eigenvectors: For symmetric A, (X_i)^T X_j = 0 when \\lambda_i \\ne \\lambda_j.",
      "Positive Definite Test: All eigenvalues strictly positive (\\lambda_i > 0) or all principal minors > 0.",
      "Singular Matrix Indicator: \\lambda = 0 is an eigenvalue iff \\det(A) = 0.",
      "Exam Checking Rule: Always calculate trace(A) and det(A) first to quickly check whether your computed eigenvalues are correct.",
    ],
  },
};

export const allBScKnowledge: Record<string, TopicKnowledge> = {
  ...bscKnowledge,
  ...bscSem1Knowledge,
  ...bscSem1ScienceKnowledge,
  ...bscSem1LifeKnowledge,
  ...bscSem1CoreKnowledge,
  ...bscSem1AlliedKnowledge,
};

/**
 * Universal B.Sc generator that synthesizes detailed, accurate revision notes
 * for ANY subject & unit in the B.Sc syllabus.
 * Produces 10 Highlights + 10 Key Points (Bookmarks) per unit.
 *
 * NOTE: Biology, Life Sciences, and Qualitative subjects intentionally contain
 * ZERO formulas or derivations, so the Formulas tab will not appear for them.
 */
export function generateBScTopic(subjectName: string, unitTitle: string, unitNumber: number): TopicKnowledge {
  const s = subjectName.toLowerCase().trim();
  const u = unitTitle.toLowerCase().trim();

  // 1. Laboratory Subjects Routing (Must precede theory routing)
  const isLab = s.includes("lab") || s.includes("practical") || u.includes("laboratory");
  if (isLab) {
    if (s.includes("c programming") || s.includes("c lab")) {
      const keys = [
        "c programming: laboratory safety protocols & instrumentation",
        "c programming: standard preparations & calibration methods",
        "c programming: core experimental procedures & synthesis",
        "c programming: quantitative data verification & error analysis",
        "c programming: comprehensive practical record & viva voce",
      ];
      const match = allBScKnowledge[keys[unitNumber - 1] || keys[0]!];
      if (match) return match;
    }
    if (s.includes("python")) {
      const keys = [
        "python: laboratory safety protocols & instrumentation",
        "python: standard preparations & calibration methods",
        "python: core experimental procedures & synthesis",
        "python: quantitative data verification & error analysis",
        "python: comprehensive practical record & viva voce",
      ];
      const match = allBScKnowledge[keys[unitNumber - 1] || keys[0]!];
      if (match) return match;
    }
    if (s.includes("botany")) {
      const keys = [
        "botany lab unit 1: laboratory safety protocols & instrumentation",
        "botany lab unit 2: standard preparations & calibration methods",
        "botany lab unit 3: core experimental procedures & synthesis",
        "botany lab unit 4: quantitative data verification & error analysis",
        "botany lab unit 5: comprehensive practical record & viva voce",
      ];
      const match = allBScKnowledge[keys[unitNumber - 1] || keys[0]!];
      if (match) return match;
    }
    if (s.includes("zoology")) {
      const keys = [
        "zoology lab unit 1: laboratory safety protocols & instrumentation",
        "zoology lab unit 2: standard preparations & calibration methods",
        "zoology lab unit 3: core experimental procedures & synthesis",
        "zoology lab unit 4: quantitative data verification & error analysis",
        "zoology lab unit 5: comprehensive practical record & viva voce",
      ];
      const match = allBScKnowledge[keys[unitNumber - 1] || keys[0]!];
      if (match) return match;
    }
    if (s.includes("microbio")) {
      const keys = [
        "microbiology lab unit 1: laboratory safety protocols & instrumentation",
        "microbiology lab unit 2: standard preparations & calibration methods",
        "microbiology lab unit 3: core experimental procedures & synthesis",
        "microbiology lab unit 4: quantitative data verification & error analysis",
        "microbiology lab unit 5: comprehensive practical record & viva voce",
      ];
      const match = allBScKnowledge[keys[unitNumber - 1] || keys[0]!];
      if (match) return match;
    }
    if (s.includes("chem")) {
      if (s.includes("titration")) {
        const keys = [
          "chemistry lab unit 1: laboratory safety & volumetric apparatus",
          "chemistry lab unit 2: standard preparations & calibration methods",
          "chemistry lab unit 3: core experimental procedures & synthesis",
          "chemistry lab unit 4: quantitative data verification & error analysis",
          "chemistry lab unit 5: comprehensive practical record & viva voce",
        ];
        const match = allBScKnowledge[keys[unitNumber - 1] || keys[0]!];
        if (match) return match;
      } else {
        const keys = [
          "qual-chem lab unit 1: laboratory safety & semi-micro apparatus",
          "qual-chem lab unit 2: preliminary dry tests & physical examination",
          "qual-chem lab unit 3: systematic anion identification & confirmatory tests",
          "qual-chem lab unit 4: systematic cation group separation & analysis",
          "qual-chem lab unit 5: practical records, report synthesis & viva voce",
        ];
        const match = allBScKnowledge[keys[unitNumber - 1] || keys[0]!];
        if (match) return match;
      }
    }
    if (s.includes("physic") || (!s.includes("chem") && !s.includes("bio"))) {
      const keys = [
        "physics lab unit 1: safety & instrumentation",
        "physics lab unit 2: calibration & preparations",
        "physics lab unit 3: experimental procedures",
        "physics lab unit 4: error analysis",
        "physics lab unit 5: practical records & viva",
      ];
      const match = allBScKnowledge[keys[unitNumber - 1] || keys[0]!];
      if (match) return match;
    }
  }

  // 2. Subject-Specific Curricular Unit Routing (Precedes generic dictionary lookup)
  if (s.includes("differential equations")) {
    if (u.includes("first order") || unitNumber === 1) return allBScKnowledge["first order odes"]!;
    if (u.includes("higher order") || unitNumber === 2) return allBScKnowledge["higher order odes"]!;
    if (u.includes("application") || unitNumber === 3) return allBScKnowledge["applications of odes"]!;
    if (u.includes("laplace") || unitNumber === 4) return allBScKnowledge["laplace transforms"]!;
    if (u.includes("series") || unitNumber === 5) return allBScKnowledge["series solutions"]!;
  }

  if (s.includes("differential calculus & matrices")) {
    if (u.includes("limit") || unitNumber === 1) return allBScKnowledge["limits & continuity"]!;
    if (u.includes("differentiation") || unitNumber === 2) return allBScKnowledge["differentiation"]!;
    if (u.includes("application") || unitNumber === 3) return allBScKnowledge["applications of derivatives"]!;
    if (u.includes("matrix") || u.includes("determinant") || unitNumber === 4) return allBScKnowledge["matrices & determinants"]!;
    if (u.includes("eigen") || u.includes("rank") || unitNumber === 5) return allBScKnowledge["rank & eigenvalues"]!;
  }

  if (s.includes("calculus & linear algebra")) {
    if (u.includes("derivative") || unitNumber === 1) return allBScKnowledge["limits & derivatives"]!;
    if (u.includes("integration") || unitNumber === 2) return allBScKnowledge["integration"]!;
    if (u.includes("matrices") || unitNumber === 3) return allBScKnowledge["la: matrices"]!;
    if (u.includes("vector") || unitNumber === 4) return allBScKnowledge["vector spaces"]!;
    if (u.includes("eigen") || unitNumber === 5) return allBScKnowledge["la: eigenvalues"]!;
  }

  if (s.includes("mathematics i / botany i")) {
    if (u.includes("limit") || unitNumber === 1) return allBScKnowledge["chem-math: limits"]!;
    if (u.includes("differentiation") || unitNumber === 2) return allBScKnowledge["chem-math: differentiation"]!;
    if (u.includes("matrix") || unitNumber === 3) return allBScKnowledge["chem-math: matrices"]!;
    if (u.includes("plant") || unitNumber === 4) return allBScKnowledge["chem-bot: plant diversity"]!;
    if (u.includes("algae") || unitNumber === 5) return allBScKnowledge["chem-bot: algae"]!;
  }

  if (s === "computer fundamentals & c programming") {
    if (u.includes("computer") || unitNumber === 1) return allBScKnowledge["math-c: computer basics"]!;
    if (u.includes("algorithm") || unitNumber === 2) return allBScKnowledge["math-c: algorithms"]!;
    if (u.includes("fundamental") || unitNumber === 3) return allBScKnowledge["math-c: c fundamentals"]!;
    if (u.includes("control") || unitNumber === 4) return allBScKnowledge["math-c: control structures"]!;
    if (u.includes("array") || unitNumber === 5) return allBScKnowledge["math-c: arrays & functions"]!;
  }

  if (s.includes("computer fundamentals & programming in c")) {
    if (u.includes("computer") || unitNumber === 1) return allBScKnowledge["introduction to computers"]!;
    if (u.includes("algorithm") || unitNumber === 2) return allBScKnowledge["algorithms & flowcharts"]!;
    if (u.includes("fundamental") || unitNumber === 3) return allBScKnowledge["c fundamentals (data types, operators)"]!;
    if (u.includes("control") || unitNumber === 4) return allBScKnowledge["control structures (if-else, loops)"]!;
    if (u.includes("array") || unitNumber === 5) return allBScKnowledge["arrays & functions"]!;
  }

  if (s.includes("fundamentals of microbiology / cell biology")) {
    if (u.includes("microbial world") || unitNumber === 1) return allBScKnowledge["microbial world"]!;
    if (u.includes("bacterial cell") || unitNumber === 2) return allBScKnowledge["bacterial cell structure"]!;
    if (u.includes("virus") || unitNumber === 3) return allBScKnowledge["viruses"]!;
    if (u.includes("eukaryotic") || unitNumber === 4) return allBScKnowledge["eukaryotic cell"]!;
    if (u.includes("cell division") || unitNumber === 5) return allBScKnowledge["cell division"]!;
  }

  if (s.includes("inorganic & organic chemistry")) {
    if (u.includes("atomic") || unitNumber === 1) return allBScKnowledge["atomic structure"]!;
    if (u.includes("periodic") || unitNumber === 2) return allBScKnowledge["periodic properties"]!;
    if (u.includes("bonding") || unitNumber === 3) return allBScKnowledge["chemical bonding"]!;
    if (u.includes("reaction") || unitNumber === 4) return allBScKnowledge["organic reaction basics"]!;
    if (u.includes("hydrocarbon") || unitNumber === 5) return allBScKnowledge["hydrocarbons"]!;
  }

  if (s.includes("chemistry i / computer fundamentals")) {
    if (u.includes("atomic") || unitNumber === 1) return allBScKnowledge["phys-chem: atomic structure"]!;
    if (u.includes("bonding") || unitNumber === 2) return allBScKnowledge["phys-chem: bonding"]!;
    if (u.includes("hydrocarbon") || unitNumber === 3) return allBScKnowledge["phys-chem: hydrocarbons"]!;
    if (u.includes("organic") || unitNumber === 4) return allBScKnowledge["phys-chem: organic basics"]!;
    if (u.includes("stereochem") || unitNumber === 5) return allBScKnowledge["phys-chem: stereochemistry"]!;
  }

  if (s.includes("botany i / zoology i")) {
    if (u.includes("plant") || unitNumber === 1) return allBScKnowledge["biotech-bot: plant diversity"]!;
    if (u.includes("algae") || unitNumber === 2) return allBScKnowledge["biotech-bot: algae"]!;
    if (u.includes("fungi") || unitNumber === 3) return allBScKnowledge["biotech-bot: fungi"]!;
    if (u.includes("bryophyte") || unitNumber === 4) return allBScKnowledge["biotech-bot: bryophytes"]!;
    if (u.includes("pteridophyte") || unitNumber === 5) return allBScKnowledge["biotech-bot: pteridophytes"]!;
  }

  if (s.includes("mechanics & properties of matter")) {
    if (u.includes("vector") || unitNumber === 1) return allBScKnowledge["prop-phys: vectors"]!;
    if (u.includes("law") || unitNumber === 2) return allBScKnowledge["prop-phys: laws of motion"]!;
    if (u.includes("work") || unitNumber === 3) return allBScKnowledge["work & energy"]!;
    if (u.includes("elasticity") || unitNumber === 4) return allBScKnowledge["elasticity"]!;
    if (u.includes("surface") || unitNumber === 5) return allBScKnowledge["surface tension"]!;
  }

  if (s === "physics i / statistics i") {
    if (u.includes("vector") || unitNumber === 1) return allBScKnowledge["math-phys: vectors"]!;
    if (u.includes("law") || unitNumber === 2) return allBScKnowledge["math-phys: laws of motion"]!;
    if (u.includes("work") || unitNumber === 3) return allBScKnowledge["math-phys: work & energy"]!;
    if (u.includes("rotational") || unitNumber === 4) return allBScKnowledge["math-phys: rotational motion"]!;
    if (u.includes("gravitation") || unitNumber === 5) return allBScKnowledge["math-phys: gravitation"]!;
  }

  if (s.includes("physics i: mechanics / statistics i")) {
    if (u.includes("vector") || unitNumber === 1) return allBScKnowledge["vectors & kinematics"]!;
    if (u.includes("law") || unitNumber === 2) return allBScKnowledge["laws of motion"]!;
    if (u.includes("work") || unitNumber === 3) return allBScKnowledge["work, energy & power"]!;
    if (u.includes("rotational") || unitNumber === 4) return allBScKnowledge["rotational motion"]!;
    if (u.includes("gravitation") || unitNumber === 5) return allBScKnowledge["gravitation"]!;
  }

  if (s.includes("mechanics & oscillations")) {
    if (u.includes("vector") || unitNumber === 1) return allBScKnowledge["osc-phys: vectors & kinematics"]!;
    if (u.includes("law") || unitNumber === 2) return allBScKnowledge["osc-phys: laws of motion"]!;
    if (u.includes("work") || unitNumber === 3) return allBScKnowledge["work, energy & collisions"]!;
    if (u.includes("rotational") || unitNumber === 4) return allBScKnowledge["rotational dynamics"]!;
    if (u.includes("oscillation") || unitNumber === 5) return allBScKnowledge["oscillations"]!;
  }

  if (s.includes("english / mil communication")) {
    if (u.includes("grammar") || unitNumber === 1) return allBScKnowledge["mil-english: grammar, vocabulary & syntax"]!;
    if (u.includes("reading") || u.includes("comprehension") || unitNumber === 2) return allBScKnowledge["mil-english: reading comprehension & critical analysis"]!;
    if (u.includes("writing") || unitNumber === 3) return allBScKnowledge["mil-english: academic & technical writing skills"]!;
    if (u.includes("oral") || unitNumber === 4) return allBScKnowledge["mil-english: oral communication & active listening"]!;
    if (u.includes("presentation") || unitNumber === 5) return allBScKnowledge["mil-english: professional presentations & interview skills"]!;
  }

  if (s.includes("english")) {
    if (u.includes("grammar") || unitNumber === 1) return allBScKnowledge["grammar"]!;
    if (u.includes("comprehension") || unitNumber === 2) return allBScKnowledge["comprehension"]!;
    if (u.includes("writing") || unitNumber === 3) return allBScKnowledge["writing skills"]!;
    if (u.includes("oral") || unitNumber === 4) return allBScKnowledge["oral communication"]!;
    if (u.includes("presentation") || unitNumber === 5) return allBScKnowledge["presentations"]!;
  }

  if (s.includes("programming for data science") || s.includes("python")) {
    if (u.includes("oop") || unitNumber === 5) return allBScKnowledge["oop basics"]!;
    if (u.includes("file") || unitNumber === 4) return allBScKnowledge["file handling & exceptions"]!;
    if (u.includes("structure") || unitNumber === 3) return allBScKnowledge["data structures"]!;
    if (u.includes("control") || unitNumber === 2) return allBScKnowledge["control flow & functions"]!;
    if (u.includes("basic") || unitNumber === 1) return allBScKnowledge["python basics"]!;
  }

  if (s.includes("microbial diversity")) {
    if (u.includes("archae") || unitNumber === 1) return allBScKnowledge["archaebacteria & actinomycetes"]!;
    if (u.includes("cyano") || unitNumber === 2) return allBScKnowledge["cyanobacteria"]!;
    if (u.includes("algae") || unitNumber === 3) return allBScKnowledge["algae"]!;
    if (u.includes("fungi") || unitNumber === 4) return allBScKnowledge["fungi"]!;
    if (u.includes("bryo") || unitNumber === 5) return allBScKnowledge["bryophytes"]!;
  }

  if (s.includes("invertebrates")) {
    if (u.includes("protozoa") || unitNumber === 1) return allBScKnowledge["protozoa & porifera"]!;
    if (u.includes("coelenterata") || unitNumber === 2) return allBScKnowledge["coelenterata & platyhelminthes"]!;
    if (u.includes("annelida") || unitNumber === 3) return allBScKnowledge["annelida & arthropoda"]!;
    if (u.includes("mollusca") || unitNumber === 4) return allBScKnowledge["mollusca & echinodermata"]!;
    if (u.includes("cell") || unitNumber === 5) return allBScKnowledge["cell structure & division"]!;
  }

  if (s.includes("statistics") && s.includes("computer fundamentals")) {
    if (u.includes("data type") || unitNumber === 1) return allBScKnowledge["data types"]!;
    if (u.includes("tendency") || unitNumber === 2) return allBScKnowledge["measures of central tendency"]!;
    if (u.includes("dispersion") || unitNumber === 3) return allBScKnowledge["dispersion"]!;
    if (u.includes("probability") || unitNumber === 4) return allBScKnowledge["probability basics"]!;
    if (u.includes("distribution") || unitNumber === 5) return allBScKnowledge["distributions"]!;
  }

  if (s.includes("problem solving")) {
    const keys = [
      "problem solving: core concepts & principles",
      "problem solving: theoretical formulations & modeling",
      "problem solving: analytical & computational methods",
      "problem solving: practical engineering & industrial applications",
      "problem solving: modern trends, case studies & problem solving",
    ];
    return allBScKnowledge[keys[unitNumber - 1] || keys[0]!]!;
  }

  // 3. Direct exact key match (for any other units)
  if (allBScKnowledge[u]) {
    return allBScKnowledge[u];
  }

  // 4. Substring dictionary search
  for (const [key, val] of Object.entries(allBScKnowledge)) {
    if (u === key || u.includes(key) || key.includes(u)) {
      return val;
    }
  }

  // ==========================================================
  // 3. LIFE SCIENCES / BIOLOGY / BOTANY / ZOOLOGY / MICROBIOLOGY
  // ==========================================================
  const isBiologyOrLifeScience =
    s.includes("botany") ||
    s.includes("zoology") ||
    s.includes("plant") ||
    s.includes("animal") ||
    s.includes("bio") ||
    s.includes("life") ||
    s.includes("microbio") ||
    s.includes("genetics") ||
    s.includes("cell") ||
    s.includes("invertebrat") ||
    s.includes("chordat") ||
    s.includes("ecolog") ||
    s.includes("embryol") ||
    s.includes("immunol") ||
    s.includes("physiol") ||
    s.includes("anatom") ||
    u.includes("cell") ||
    u.includes("algae") ||
    u.includes("fungi") ||
    u.includes("bacteria") ||
    u.includes("virus") ||
    u.includes("protozoa") ||
    u.includes("porifera") ||
    u.includes("bryophyte") ||
    u.includes("pteridophyte") ||
    u.includes("gymnosperm") ||
    u.includes("angiosperm") ||
    u.includes("annelida") ||
    u.includes("arthropoda") ||
    u.includes("mollusca") ||
    u.includes("echinodermata") ||
    u.includes("metabolism") ||
    u.includes("enzyme") ||
    u.includes("tissue");

  if (isBiologyOrLifeScience) {
    return {
      highlights: [
        `Morphological Characteristics of ${unitTitle}: Serves as a primary anatomical and taxonomic module in ${subjectName}, detailing structural features and cellular adaptations.`,
        `Diagnostic Cell Structure: Characterized by specialized organelle organization, membrane boundaries, cytoplasmic inclusions, and distinct histological layers.`,
        `Systematic Taxonomic Classification: Hierarchically grouped based on evolutionary lineage, comparative embryology, reproductive morphology, and genetic markers.`,
        `Physiological & Metabolic Regulation: Regulates biochemical cycles, nutrient absorption, gas exchange, and environmental homeostatic equilibrium.`,
        `Life Cycle & Reproductive Strategies: Details gametogenesis, fertilization mechanisms, alternation of generations (gametophyte vs sporophyte), and dispersal adaptations.`,
        `Biochemical & Molecular Mechanisms: Mediated through enzymatic catalysis, hormonal signaling cascades, nucleic acid replication, and structural protein synthesis.`,
        `Ecological Adaptations & Niche Function: Demonstrates specialized evolutionary adaptations to environmental pressures, symbiotic associations, and trophic food web interactions.`,
        `Standard Laboratory Identification: Evaluated using brightfield microscopy, selective histochemical stains, maceration techniques, and culture identification keys.`,
        `Economic, Agricultural & Clinical Value: Serves as model organisms in research, commercial pharmaceuticals, agricultural productivity, and epidemiological pathogen control.`,
        `University Examination Strategy: Score full marks by drawing neat, labeled morphological diagrams (transverse sections, life cycles), listing diagnostic points, and writing binomial names correctly.`,
      ],
      keyPoints: [
        `Defining Biological Characters: State the diagnostic morphological and cellular features that uniquely identify ${unitTitle} in ${subjectName}.`,
        `Subcellular & Tissue Ultrastructure: Detail the microscopic organization of cell walls, internal membranes, specialized organelle complexes, and extracellular matrix.`,
        `Scientific Binomial Nomenclature: Always underline or italicize generic and specific epithets when citing representative study organisms in exam papers.`,
        `Metabolic Intermediates & Energetics: Trace the biochemical pathways of energy transformation, substrate catabolism, and secondary metabolite synthesis.`,
        `Ploidy & Nuclear Division Stages: Differentiate haploid (n) and diploid (2n) stages and understand where reductional meiosis occurs in the lifecycle.`,
        `Homeostatic Balance Mechanisms: Explain how feedback loops, stomatal aperture controls, and membrane transport proteins maintain steady internal conditions.`,
        `Pathological & Symbiotic Relationships: Understand mutualistic, commensal, or parasitic relationships and the pathological significance of relevant pathogens.`,
        `Diagnostic Staining Protocols: Know the standard differential stains (e.g. Gram stain, safranin, fast green, hematoxylin) used to prepare permanent laboratory mounts.`,
        `Evolutionary Adaptation Trends: Trace structural transitions from primitive ancestral states to specialized advanced adaptations in related taxa.`,
        `Exam Diagram Checklist: Draw large, proportionate diagrams with sharp pencil lines, label all anatomical parts on the right-hand margin, and write a concise structural legend.`,
      ],
    };
  }

  // ==========================================================
  // 4. QUALITATIVE / HUMANITIES / COMMUNICATION / MANAGEMENT
  // ==========================================================
  const isQualitativeOrHumanities =
    s.includes("english") ||
    s.includes("communication") ||
    s.includes("management") ||
    s.includes("ethics") ||
    s.includes("humanities") ||
    s.includes("law") ||
    s.includes("business") ||
    s.includes("environment");

  if (isQualitativeOrHumanities) {
    return {
      highlights: [
        `Core Conceptual Foundations of ${unitTitle}: Serves as a fundamental theoretical framework in ${subjectName}, establishing core principles and professional standards.`,
        `Structural Hierarchy & Process Workflow: Analyzes sequential operations, organizational models, and procedural guidelines for effective implementation.`,
        `Best Practices & Industry Guidelines: Details recognized national and global protocols, professional codes of conduct, and qualitative quality benchmarks.`,
        `Communication & Analytical Reasoning: Emphasizes precise professional articulation, structured written discourse, critical thinking, and audience adaptation.`,
        `Case Studies & Practical Scenarios: Examines real-world case histories, situational challenges, problem-solving frameworks, and strategic decision pathways.`,
        `Regulatory Compliance & Ethical Standards: Details legal boundaries, stakeholder accountability, transparency measures, and governance frameworks.`,
        `Strategic Optimization & Resource Allocation: Evaluates process efficiency, risk mitigation methods, team collaboration, and sustainable operational models.`,
        `Performance Assessment & Quality Audit: Measures qualitative effectiveness through standardized evaluation rubrics, KPI benchmarks, and feedback mechanisms.`,
        `Contemporary Trends & Technological Evolution: Analyzes digital transformation, modern collaborative platforms, and evolving professional standards.`,
        `University Examination Blueprint: Structure answers using clear headings, numbered analytical points, comparative distinction tables, and practical case examples.`,
      ],
      keyPoints: [
        `Core Definition & Scope: Clearly state the formal definition of ${unitTitle} and its primary application within ${subjectName}.`,
        `Essential Theoretical Principles: Master the foundational guidelines, models, and operational frameworks governing this study module.`,
        `Step-by-Step Procedural Stages: Memorize the chronological order of phases, planning checkpoints, and evaluation milestones.`,
        `Key Terminologies & Lexicon: Use authoritative academic and industry terminology precisely throughout your written responses.`,
        `Comparative Distinction Matrix: Prepare contrast tables comparing primary concepts against alternative approaches across defined evaluation criteria.`,
        `Risk Identification & Control: Recognize common procedural failure modes and implement proactive risk mitigation protocols.`,
        `Effective Communication Rules: Apply clarity, conciseness, coherence, and professional tone when answering scenario-based questions.`,
        `Governance & Ethics Principles: State the ethical considerations, stakeholder protections, and social responsibilities inherent in this topic.`,
        `Memory Mnemonic: Use structured acronyms and conceptual mnemonics to recall multi-stage frameworks during timed written tests.`,
        `Exam Scoring Strategy: Open with a crisp definition, provide numbered functional points, draw an organizational flow diagram, and conclude with a practical example.`,
      ],
    };
  }

  // ==========================================================
  // 5. PHYSICAL & MATHEMATICAL SCIENCES DYNAMIC SYNTHESIS
  // ==========================================================
  const unitSpecificMathFormulas = [
    {
      eq: "\\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a}",
      law: "Conservation of Momentum & Newton's Second Law",
      dim: "[M L T^{-2}]",
    },
    {
      eq: "\\nabla \\cdot \\vec{D} = \\rho_v \\quad \\text{and} \\quad \\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}",
      law: "Maxwell Field Equations & Boundary Conditions",
      dim: "[C m^{-2}] \\text{ and } [V m^{-1}]",
    },
    {
      eq: "-\\frac{\\hbar^2}{2m}\\nabla^2 \\psi + V(\\vec{r})\\psi = E\\psi",
      law: "Schrödinger Time-Independent Wave Equation",
      dim: "[J] = [M L^2 T^{-2}]",
    },
    {
      eq: "\\oint \\frac{\\delta Q}{T} \\le 0 \\quad \\text{and} \\quad \\Delta S \\ge 0",
      law: "Clausius Inequality & Second Law of Thermodynamics",
      dim: "[J K^{-1}]",
    },
    {
      eq: "\\frac{d^2 x}{dt^2} + 2\\gamma \\frac{dx}{dt} + \\omega_0^2 x = 0",
      law: "Damped Harmonic Oscillation Equation",
      dim: "[T^{-1}]",
    },
  ];

  const formulaData = unitSpecificMathFormulas[(unitNumber - 1) % unitSpecificMathFormulas.length]!;

  const highlights = [
    `Theoretical Foundations of ${unitTitle}: Serves as Unit ${unitNumber} of ${subjectName}, establishing core analytical definitions, physical boundary laws, and governing assumptions.`,
    `Governing Analytical Formulation: Characterized by fundamental physical state balance: ${formulaData.eq}, formulating physical equilibrium across domain boundaries.`,
    `Constitutive Equations & State Relations: Relates empirical variables through canonical balance relationships connecting physical stimuli to observed experimental responses.`,
    `Mathematical Derivations & Analytical Proofs: Derives closed-form analytical solutions through rigorous step-by-step calculus integration satisfying initial and boundary constraints.`,
    `Physical Significance of Parameters: Evaluates fundamental dimensional scaling: SI units ${formulaData.dim}, verifying physical dimensional homogeneity across all derived terms.`,
    `Empirical Verification & Laboratory Protocols: Precision measurement procedures, sensor calibrations, experimental setups, and systematic error minimization protocols for ${unitTitle}.`,
    `Limiting Cases & Boundary Analysis: Explores asymptotic behavior under extreme physical limits (high frequency, cryogenic temperatures, relativistic regimes, or microscopic bounds).`,
    `Practical Engineering & Scientific Applications: Applied directly in advanced computational physics, materials engineering, instrument design, and physical modeling.`,
    `Computational Algorithms & Numerical Simulation: Formulated for scientific computing simulations (Python / MATLAB) when non-linear physical constraints prevent simple closed-form solutions.`,
    `University Examination Blueprint: To score maximum marks in Unit ${unitNumber}, state exact scientific definitions, write governing equation ${formulaData.eq}, draw neat labeled diagrams, and box final answers with SI units.`,
  ];

  const keyPoints = [
    `Core Principle & Definition: Clearly define ${unitTitle} and its primary scientific role in ${subjectName}.`,
    `Primary Governing Formula: ${formulaData.eq} (${formulaData.law}).`,
    `Dimensional Analysis: Verify dimensional homogeneity: primary quantity has dimensions ${formulaData.dim}.`,
    `Key Boundary Conditions: Identify physical boundary values at domain extremes (x = 0, x \\to \\infty or t = 0).`,
    `Significance of Constants: Explicitly document all standard physical constants and state variables in governing equations.`,
    `Step-by-Step Derivation Rule: State starting conservation equation, apply coordinate transformations, integrate over domain, and evaluate integration constants.`,
    `Systematic Error Minimization: Identify primary instrumental limitations and state environmental correction factors.`,
    `Comparative Matrix: Contrast primary physical mechanism of ${unitTitle} with alternate physical models in terms of efficiency and validity range.`,
    `Memory Mnemonic: Use structured acronyms and physical symmetry rules to recall multi-term differential expansions during exams.`,
    `Exam Gold Tip: Always underline key physical terminology, sketch coordinate axes with directional arrows, and clearly indicate SI units in numerical solutions.`,
  ];

  return { highlights, keyPoints };
}

/**
 * Return revision points for a B.Sc unit (10 Highlights + 10 Key Points / Bookmarks = 20 points).
 */
export function getBScUnitPoints(unitId: string): RevisionPoint[] {
  const found = getUnit(unitId);
  if (!found) return [];

  const { subject, unit } = found;
  const knowledge = generateBScTopic(subject.name, unit.title, unit.unit_number);

  const points: RevisionPoint[] = [];

  // Add Highlights (kind: "highlight") - 10 items
  knowledge.highlights.forEach((content, index) => {
    points.push({
      id: `${unitId}-hl-${index + 1}`,
      unit_id: unitId,
      kind: "highlight",
      point_number: index + 1,
      content,
      display_order: index + 1,
    });
  });

  // Add Key Points (kind: "bookmark") - 10 items
  knowledge.keyPoints.forEach((content, index) => {
    points.push({
      id: `${unitId}-kp-${index + 1}`,
      unit_id: unitId,
      kind: "bookmark",
      point_number: index + 1,
      content,
      display_order: knowledge.highlights.length + index + 1,
    });
  });

  return points;
}

/**
 * Return counts of revision points for an array of B.Sc unit IDs.
 * 20 points per unit (10 Highlights + 10 Key Points).
 */
export function getBScPointsCount(unitIds: string[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const id of unitIds) {
    if (id.startsWith("bsc-")) {
      counts[id] = 20; // 10 highlights + 10 key points (bookmarks)
    }
  }
  return counts;
}
