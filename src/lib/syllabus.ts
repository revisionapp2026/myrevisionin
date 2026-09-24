/**
 * REVISION syllabus source of truth.
 * Subject names and unit names transcribed exactly from the official
 * BBA / B.Com subject documents. No university branding.
 */

export type SubjectIcon =
  "accounting" | "economics" | "law" | "marketing" | "hr" | "stats" | "management" | "finance";

export type ElectiveGroup = "Finance" | "Marketing" | "HR" | "E-Commerce";

export type SyllabusSubject = {
  program: "bba" | "bcom";
  /** null for electives, which are not tied to one semester */
  semester: number | null;
  electiveGroup?: ElectiveGroup;
  name: string;
  icon: SubjectIcon;
  units: string[];
};

export const syllabus: SyllabusSubject[] = [
  /* ------------------------------ BBA — Semester I ------------------------------ */
  {
    program: "bba",
    semester: 1,
    name: "Principles & Practices of Management",
    icon: "management",
    units: [
      "Introduction to Management",
      "Management Thought & Planning",
      "Planning & Decision-Making",
      "Organizing",
      "Staffing, Directing & Controlling",
    ],
  },
  {
    program: "bba",
    semester: 1,
    name: "Business Mathematics & Statistics",
    icon: "stats",
    units: [
      "Functions, Interest & Progressions",
      "Theory of Sets, Relations & Functions",
      "Differentiation & Applications",
      "Integration & Vectors",
      "Matrix Algebra",
    ],
  },
  {
    program: "bba",
    semester: 1,
    name: "Basics of Business Economics",
    icon: "economics",
    units: [
      "Introduction to Business Economics",
      "Utility and Demand Analysis",
      "Production, Cost and Supply Analysis",
      "Market Structure and Price Determination",
      "Entrepreneur and Entrepreneurial Development",
    ],
  },
  {
    program: "bba",
    semester: 1,
    name: "Financial Accounting",
    icon: "accounting",
    units: [
      "Accounting Process",
      "Subsidiary Books",
      "Bank Reconciliation Statement",
      "Rectification of Errors and Depreciation",
      "Final Accounts of Sole Trader",
    ],
  },
  {
    program: "bba",
    semester: 1,
    name: "Business Organization & Management",
    icon: "management",
    units: [
      "Introduction to Business Organization",
      "Joint Stock Company",
      "Introduction to Management & Functions",
      "Planning and Organizing",
      "Staffing, Directing & Controlling",
    ],
  },

  /* ----------------------------- BBA — Semester II ----------------------------- */
  {
    program: "bba",
    semester: 2,
    name: "Organizational Behaviour",
    icon: "hr",
    units: [
      "Introduction to Organizational Behaviour",
      "Individual Behaviour",
      "Motivation and Leadership",
      "Group Dynamics and Teams",
      "Organizational Culture, Change and Contemporary Issues",
    ],
  },
  {
    program: "bba",
    semester: 2,
    name: "Business Statistics",
    icon: "stats",
    units: [
      "Introduction to Statistics and Data Presentation",
      "Measures of Central Tendency and Dispersion",
      "Correlation and Regression Analysis",
      "Time Series Analysis and Index Numbers",
      "Probability and Sampling Theory",
    ],
  },
  {
    program: "bba",
    semester: 2,
    name: "Financial Accounting – II",
    icon: "accounting",
    units: [
      "Bills of Exchange",
      "Consignment Accounts",
      "Joint Venture Accounts",
      "Accounts from Incomplete Records",
      "Accounting for Non-Profit Organizations",
    ],
  },

  /* ---------------------------- BBA — Semester III ---------------------------- */
  {
    program: "bba",
    semester: 3,
    name: "Fundamentals of Human Resource Management",
    icon: "hr",
    units: [
      "Introduction to Human Resource Management",
      "Human Resource Planning and Recruitment",
      "Training and Development",
      "Compensation and Employee Welfare",
      "Employee Relations and Emerging Trends",
    ],
  },
  {
    program: "bba",
    semester: 3,
    name: "Business Law and Ethics",
    icon: "law",
    units: [
      "Law of Contracts",
      "Law Relating to Special Contracts",
      "Companies Act",
      "Consumer Protection Law",
      "Business Ethics",
    ],
  },
  {
    program: "bba",
    semester: 3,
    name: "Operations Management",
    icon: "management",
    units: [
      "Introduction to Operations Management",
      "Facility Location and Layout",
      "Production Planning and Control",
      "Quality Management and Maintenance",
      "Inventory Control and Stores Management",
    ],
  },
  {
    program: "bba",
    semester: 3,
    name: "Operations Research",
    icon: "stats",
    units: [
      "Introduction to Operations Research",
      "Linear Programming",
      "Transportation and Assignment Problems",
      "Network Analysis (PERT and CPM)",
      "Queuing Theory, Game Theory and Simulation",
    ],
  },

  /* ---------------------------- BBA — Semester IV ----------------------------- */
  {
    program: "bba",
    semester: 4,
    name: "Business Environment & Legal Aspects",
    icon: "law",
    units: [
      "Business Environment – An Overview",
      "Economic Environment of Business",
      "Legal Environment of Business",
      "Consumer Protection Law",
      "Business Ethics and Social Responsibility",
    ],
  },
  {
    program: "bba",
    semester: 4,
    name: "Quantitative Techniques for Business",
    icon: "stats",
    units: [
      "Introduction to Statistics and Data Presentation",
      "Measures of Central Tendency and Dispersion",
      "Correlation and Regression Analysis",
      "Time Series Analysis and Index Numbers",
      "Probability and Probability Distributions",
    ],
  },
  {
    program: "bba",
    semester: 4,
    name: "Entrepreneurship Development",
    icon: "management",
    units: [
      "Introduction to Entrepreneurship",
      "Entrepreneurial Mindset and Motivation",
      "Business Opportunity Identification and Assessment",
      "Business Planning and Project Formulation",
      "Launching and Managing a Venture",
    ],
  },

  /* ----------------------------- BBA — Semester V ----------------------------- */
  {
    program: "bba",
    semester: 5,
    name: "Strategic Management",
    icon: "management",
    units: [
      "Introduction to Strategic Management",
      "Environmental Appraisal",
      "Strategy Formulation",
      "Alternative Strategies",
      "Strategy Implementation and Control",
    ],
  },
  {
    program: "bba",
    semester: 5,
    name: "International Business",
    icon: "economics",
    units: [
      "Introduction to Global Business",
      "Business & Regulation",
      "Global Business and Multilateral Agreements",
      "International Trade and Investment",
      "Global Strategy and Operations",
    ],
  },
  {
    program: "bba",
    semester: 5,
    name: "Business Ethics & Corporate Governance",
    icon: "law",
    units: [
      "Introduction to Business Ethics",
      "Corporate Governance",
      "Regulatory Framework",
      "Corporate Social Responsibility",
      "Emerging Issues in Governance",
    ],
  },

  /* ---------------------------- BBA — Semester VI ----------------------------- */
  {
    program: "bba",
    semester: 6,
    name: "Supply Chain Management",
    icon: "management",
    units: [
      "Introduction to Supply Chain Management",
      "Sourcing Strategy",
      "Distribution Strategy",
      "Inventory Strategy",
      "Channels of Distribution and Customer Service Strategy",
    ],
  },

  /* --------------------------- BBA — Finance electives ------------------------ */
  {
    program: "bba",
    semester: null,
    electiveGroup: "Finance",
    name: "Investment Analysis & Portfolio Management",
    icon: "finance",
    units: [
      "Conceptual Framework of Investment and Portfolio Management",
      "Risk, Return and Fundamental Analysis",
      "Share Valuation",
      "Portfolio Analysis and Asset Allocation",
      "Capital Asset Pricing Model (CAPM)",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Finance",
    name: "Financial Markets & Services",
    icon: "finance",
    units: [
      "Overview of Financial System",
      "Financial Institutions",
      "Financial Services",
      "Financial Markets and Instruments",
      "Financial Institutions and Regulatory Framework",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Finance",
    name: "Banking & Insurance",
    icon: "finance",
    units: [
      "Banking Theory and Practice",
      "Principles of Insurance",
      "Types of Insurance",
      "Insurance Business in India",
      "Regulatory Framework",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Finance",
    name: "Financial Derivatives",
    icon: "finance",
    units: [
      "Introduction to Derivatives",
      "Forward and Futures Contracts",
      "Options Trading Strategies",
      "Option Valuation",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Finance",
    name: "International Finance",
    icon: "finance",
    units: [
      "Introduction to International Finance",
      "Exchange Rate Determination and Risk Management",
      "Foreign Exchange Markets",
      "International Financial Instruments",
      "Multinational Corporate Decisions in Global Markets",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Finance",
    name: "International Financial Reporting - I",
    icon: "finance",
    units: ["Introduction to International Financial Reporting"],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Finance",
    name: "International Auditing",
    icon: "accounting",
    units: ["Introduction to International Auditing"],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Finance",
    name: "E-Filing of Tax Returns",
    icon: "accounting",
    units: ["Introduction to E-Filing of Tax Returns"],
  },

  /* -------------------------- BBA — Marketing electives ----------------------- */
  {
    program: "bba",
    semester: null,
    electiveGroup: "Marketing",
    name: "Buyer Behaviour",
    icon: "marketing",
    units: [
      "Introduction to Buyer Behaviour",
      "Theories of Buyer Behaviour",
      "Impact of Culture on Buyer Behaviour",
      "Buyer Behaviour Decision",
      "Models of Buyer Behaviour",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Marketing",
    name: "Services Marketing",
    icon: "marketing",
    units: [
      "Introduction to Services Marketing",
      "Understanding Customer Expectations and Behavior",
      "Service Design and Delivery",
      "Pricing, Promotion and Place in Services",
      "Service Quality, Customer Satisfaction and Relationship Marketing",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Marketing",
    name: "Digital Marketing",
    icon: "marketing",
    units: [
      "Introduction to Digital Marketing",
      "Search Marketing",
      "Social Media Marketing",
      "Web Analytics and Conversion Tracking",
      "YouTube Advertising and Conversions",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Marketing",
    name: "Product & Brand Management",
    icon: "marketing",
    units: [
      "Introduction to Product Management",
      "Brand Management",
      "New Product Development",
      "Product Portfolio Analysis",
      "Product and Brand Management Practices",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Marketing",
    name: "Customer Relationship Management",
    icon: "marketing",
    units: [
      "Evolution of Customer Relationship",
      "CRM Concepts",
      "Planning for CRM",
      "CRM and Marketing Strategy",
      "CRM Planning and Implementation",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "Marketing",
    name: "International Marketing",
    icon: "marketing",
    units: [
      "Introduction to International Marketing and Trade",
      "International Marketing Environment and Marketing Research",
      "International Marketing Mix",
      "Developments in International Marketing",
      "International Institutional Infrastructure and Documentation",
    ],
  },

  /* ------------------------------ BBA — HR electives -------------------------- */
  {
    program: "bba",
    semester: null,
    electiveGroup: "HR",
    name: "Performance Management",
    icon: "hr",
    units: [
      "Introduction to Performance Management",
      "Performance Appraisal",
      "Performance Benchmarking",
      "Competency Mapping and Pay Plans",
      "Performance Metrics and Models",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "HR",
    name: "Talent Management",
    icon: "hr",
    units: [
      "Introduction to Talent Management",
      "Talent Acquisition and Development",
      "Talent Retention and Engagement",
      "Succession Planning and Career Management",
      "Talent Analytics and Workforce Planning",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "HR",
    name: "Compensation Management",
    icon: "hr",
    units: [
      "Introduction to Compensation Management",
      "Job Evaluation and Pay Structures",
      "Incentives and Variable Pay",
      "Benefits and Employee Well-being",
      "Strategic Compensation and Legal Compliance",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "HR",
    name: "Industrial Relations & Labour Laws",
    icon: "law",
    units: [
      "Introduction to Industrial Relations",
      "Trade Unions and Collective Bargaining",
      "Industrial Disputes and Resolution",
      "Labour Laws in India",
      "Social Security and Labour Law Reforms",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "HR",
    name: "Training & Development",
    icon: "hr",
    units: [
      "Introduction to Training and Development",
      "Training Needs Analysis and Design",
      "Training Methods",
      "Training Evaluation",
      "Career Development and HRD",
    ],
  },
  {
    program: "bba",
    semester: null,
    electiveGroup: "HR",
    name: "Organizational Development",
    icon: "hr",
    units: [
      "Introduction to Organizational Development",
      "Management of Change",
      "Change Agents",
      "OD Process",
      "OD Interventions",
    ],
  },

  /* -------------------------- BBA — E-Commerce elective ----------------------- */
  {
    program: "bba",
    semester: null,
    electiveGroup: "E-Commerce",
    name: "E-Commerce",
    icon: "marketing",
    units: ["Introduction to E-Commerce", "E-Commerce Technology and Security"],
  },

  /* ---------------------------- B.Com — Semester I ---------------------------- */
  {
    program: "bcom",
    semester: 1,
    name: "Financial Accounting - I",
    icon: "accounting",
    units: [
      "Introduction to Accounting",
      "Final Accounts",
      "Bills of Exchange",
      "Bank Reconciliation Statement",
      "Depreciation and Reserves",
    ],
  },
  {
    program: "bcom",
    semester: 1,
    name: "Business Organization & Management",
    icon: "management",
    units: [
      "Introduction to Business Organization",
      "Joint Stock Company",
      "Introduction to Management and Functions",
      "Planning and Organizing",
      "Authority, Coordination and Control",
    ],
  },
  {
    program: "bcom",
    semester: 1,
    name: "Business Economics",
    icon: "economics",
    units: [
      "Introduction to Business Economics",
      "Demand and Supply Analysis",
      "Production and Cost Analysis",
      "Market Structures and Pricing Strategies",
      "Macro-Economic Environment",
    ],
  },

  /* --------------------------- B.Com — Semester II ---------------------------- */
  {
    program: "bcom",
    semester: 2,
    name: "Financial Accounting - II",
    icon: "accounting",
    units: [
      "Bills of Exchange",
      "Consignment Accounts",
      "Joint Venture Accounts",
      "Accounts from Incomplete Records",
      "Accounting for Non-Profit Organizations",
    ],
  },
  {
    program: "bcom",
    semester: 2,
    name: "Business Laws",
    icon: "law",
    units: [
      "Indian Contract Act, 1872",
      "Sale of Goods Act and Consumer Protection Act",
      "Intellectual Property Rights",
      "Companies Act, 2013",
      "Winding Up and Insolvency",
    ],
  },
  {
    program: "bcom",
    semester: 2,
    name: "Banking and Financial Services",
    icon: "finance",
    units: [
      "Commercial Banking",
      "Banker-Customer Relationship",
      "Negotiable Instruments",
      "Financial Services",
      "Merchant Banking, Venture Capital and Leasing",
    ],
  },

  /* --------------------------- B.Com — Semester III --------------------------- */
  {
    program: "bcom",
    semester: 3,
    name: "Advanced Accounting",
    icon: "accounting",
    units: [
      "Partnership Accounts – Final Accounts and Admission",
      "Partnership Accounts – Retirement, Death and Dissolution",
      "Branch and Departmental Accounts",
      "Accounting for Non-Profit Organizations",
      "Company Accounts – Issue of Shares and Debentures",
    ],
  },
  {
    program: "bcom",
    semester: 3,
    name: "Business Statistics – I",
    icon: "stats",
    units: [
      "Introduction to Statistics and Data Presentation",
      "Measures of Central Tendency",
      "Measures of Dispersion",
      "Correlation and Regression",
      "Time Series and Index Numbers",
    ],
  },
  {
    program: "bcom",
    semester: 3,
    name: "Corporate Accounting",
    icon: "accounting",
    units: [
      "Issue and Redemption of Shares",
      "Issue and Redemption of Debentures",
      "Final Accounts of Companies",
      "Valuation of Goodwill and Shares",
      "Accounts of Banking and Insurance Companies",
    ],
  },

  /* --------------------------- B.Com — Semester IV ---------------------------- */
  {
    program: "bcom",
    semester: 4,
    name: "Business Statistics – II",
    icon: "stats",
    units: [
      "Regression Analysis",
      "Index Numbers",
      "Time Series Analysis",
      "Probability",
      "Theoretical Distributions",
    ],
  },
  {
    program: "bcom",
    semester: 4,
    name: "Auditing",
    icon: "accounting",
    units: [
      "Introduction to Auditing",
      "Audit Procedure",
      "Company Audit",
      "Audit of Special Entities",
      "Emerging Trends in Auditing",
    ],
  },
  {
    program: "bcom",
    semester: 4,
    name: "Marketing Management",
    icon: "marketing",
    units: [
      "Introduction to Marketing",
      "Consumer Behavior",
      "Product and Pricing Decisions",
      "Promotion Decisions",
      "Distribution Decisions",
    ],
  },

  /* ---------------------------- B.Com — Semester V ---------------------------- */
  {
    program: "bcom",
    semester: 5,
    name: "Cost Accounting",
    icon: "accounting",
    units: [
      "Introduction to Cost Accounting",
      "Material Cost",
      "Labour Cost",
      "Overheads and Cost Sheet",
      "Methods of Costing",
    ],
  },
  {
    program: "bcom",
    semester: 5,
    name: "Business Ethics & Corporate Governance",
    icon: "law",
    units: [
      "Introduction to Business Ethics",
      "Corporate Governance",
      "Regulatory Framework",
      "CSR and Accountability",
      "Issues in Corporate Governance",
    ],
  },
  {
    program: "bcom",
    semester: 5,
    name: "Introduction to Accounting",
    icon: "accounting",
    units: ["Introduction to Accounting"],
  },
  {
    program: "bcom",
    semester: 5,
    name: "Communication Skills",
    icon: "management",
    units: ["Communication Skills"],
  },
  {
    program: "bcom",
    semester: 5,
    name: "Environmental Science",
    icon: "economics",
    units: ["Introduction to Environmental Science"],
  },

  /* --------------------------- B.Com — Semester VI ---------------------------- */
  {
    program: "bcom",
    semester: 6,
    name: "Management Accounting",
    icon: "accounting",
    units: [
      "Introduction to Management Accounting",
      "Financial Statement Analysis",
      "Budgetary Control",
      "Standard Costing and Variance Analysis",
      "Marginal Costing and Break-Even Analysis",
    ],
  },
  {
    program: "bcom",
    semester: 6,
    name: "Theory and Practice of GST",
    icon: "finance",
    units: [
      "Introduction to GST",
      "Supply under GST",
      "Input Tax Credit and Registration",
      "Returns, Payment and Refunds",
      "Special Provisions and Emerging Issues",
    ],
  },
  {
    program: "bcom",
    semester: 6,
    name: "Research Methodology & Project Report",
    icon: "stats",
    units: [
      "Introduction to Research",
      "Parametric and Non-Parametric Tests and Research Report",
      "Project Work Guidelines",
    ],
  },
  {
    program: "bcom",
    semester: 6,
    name: "Fundamentals of AI Tools (SEC)",
    icon: "management",
    units: ["Introduction to AI", "AI Applications in Business"],
  },
  {
    program: "bcom",
    semester: 6,
    name: "Computerized Accounting (SEC)",
    icon: "accounting",
    units: ["Maintaining Chart of Accounts in ERP"],
  },
  {
    program: "bcom",
    semester: 6,
    name: "Cyber Security & Laws (VAC)",
    icon: "law",
    units: ["Introduction to Cyber Security"],
  },
];

export const electiveGroups: ElectiveGroup[] = ["Finance", "Marketing", "HR", "E-Commerce"];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
