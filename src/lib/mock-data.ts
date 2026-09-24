/**
 * Content layer for the REVISION app.
 * Subject and unit names come from src/lib/syllabus.ts, transcribed from the
 * official BBA / B.Com syllabus documents. Revision points (highlights) and
 * model-paper questions are added through the admin panel / content phase.
 */

import {
  electiveGroups,
  slugify,
  syllabus,
  type ElectiveGroup,
  type SubjectIcon,
  type SyllabusSubject,
} from "./syllabus";

export type { SubjectIcon, ElectiveGroup };
export { electiveGroups };

export type Program = { id: string; code: string; name: string; description: string };

export const programs: Program[] = [
  { id: "bcom", code: "B.Com", name: "B.Com", description: "Bachelor of Commerce" },
  { id: "bba", code: "BBA", name: "BBA", description: "Bachelor of Business Administration" },
];

export const semesters = [1, 2, 3, 4, 5, 6];

export function programLabel(programId: string | null) {
  return programs.find((p) => p.id === programId)?.code ?? "B.Com";
}

export type Unit = {
  id: string;
  subject_id: string;
  unit_number: number;
  title: string;
  highlights: string[];
};

export type Subject = {
  id: string;
  slug: string;
  name: string;
  program: string;
  semester: number | null;
  electiveGroup?: ElectiveGroup;
  icon: SubjectIcon;
  units: Unit[];
};

function buildSubject(s: SyllabusSubject): Subject {
  const slug = slugify(s.name);
  const id = s.electiveGroup
    ? `${s.program}-el-${slugify(s.electiveGroup)}-${slug}`
    : `${s.program}-s${s.semester}-${slug}`;
  return {
    id,
    slug,
    name: s.name,
    program: s.program,
    semester: s.semester,
    ...(s.electiveGroup ? { electiveGroup: s.electiveGroup } : {}),
    icon: s.icon,
    units: s.units.map((title, i) => ({
      id: `${id}-u${i + 1}`,
      subject_id: id,
      unit_number: i + 1,
      title,
      highlights: [],
    })),
  };
}

export const subjects: Subject[] = syllabus.map(buildSubject);

const subjectById = new Map(subjects.map((s) => [s.id, s]));
const unitIndex = new Map<string, { subject: Subject; unit: Unit }>();
for (const subject of subjects) {
  for (const unit of subject.units) unitIndex.set(unit.id, { subject, unit });
}

export function subjectsFor(program: string | null, semester: number | null) {
  const p = program ?? "bcom";
  const s = semester ?? 1;
  return subjects.filter((x) => x.program === p && x.semester === s);
}

/** Electives are offered alongside the core semester subjects (BBA only). */
export function electivesFor(program: string | null) {
  const p = program ?? "bcom";
  return subjects.filter((x) => x.program === p && x.electiveGroup);
}

export function electivesByGroup(program: string | null) {
  const list = electivesFor(program);
  return electiveGroups
    .map((group) => ({ group, subjects: list.filter((s) => s.electiveGroup === group) }))
    .filter((g) => g.subjects.length > 0);
}

export function getSubject(id: string) {
  return subjectById.get(id);
}

export function getUnit(id: string) {
  return unitIndex.get(id);
}

/* ---------------- Model papers ---------------- */

export type PaperQuestion = { no: number; question: string; prompt?: string; answer: string[] };

export type ModelPaper = {
  id: string;
  subjectId: string;
  title: string;
  subtitle: string;
  type: "model" | "previous_year";
  questions: PaperQuestion[];
};

/**
 * Question papers are supplied as content and stored in the database.
 * Until a subject's papers are uploaded, this returns an empty list so the
 * app never shows made-up exam questions.
 */
export function papersForSubject(_subjectId: string): ModelPaper[] {
  return [];
}

export function getPaper(paperId: string): { paper: ModelPaper; subject: Subject } | undefined {
  const [subjectId] = paperId.split("--");
  if (!subjectId) return undefined;
  const subject = subjectById.get(subjectId);
  if (!subject) return undefined;
  const paper = papersForSubject(subjectId).find((p) => p.id === paperId);
  return paper ? { paper, subject } : undefined;
}

/* ---------------- Premium ---------------- */

export const plans = [
  { id: "yearly", price: "₹199", period: "/ Year", note: "Auto renewal", highlight: false },
  {
    id: "lifetime",
    price: "₹399",
    period: "/ Lifetime",
    note: "One time payment",
    highlight: true,
  },
];

export const premiumBenefits = [
  "2 Model Papers",
  "Previous Year Question Papers (Solved)",
  "Important Questions",
  "Solved Answers",
  "Exam Pattern Guide",
];

export const upiMethods = ["Google Pay", "PhonePe", "BHIM", "Paytm", "Razorpay"];

/* ---------------- Search ---------------- */

export type SearchHit = {
  kind: "subject" | "unit" | "content" | "paper";
  title: string;
  context: string;
  to: string;
  params: Record<string, string>;
};

export function searchAll(
  query: string,
  program: string | null,
  semester: number | null,
): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hits: SearchHit[] = [];
  const scope = [...subjectsFor(program, semester), ...electivesFor(program)];

  for (const subject of scope) {
    const scopeLabel = subject.electiveGroup
      ? `${subject.electiveGroup} Elective`
      : `Semester ${subject.semester}`;

    if (subject.name.toLowerCase().includes(q)) {
      hits.push({
        kind: "subject",
        title: subject.name,
        context: `${scopeLabel} · ${subject.units.length} Units`,
        to: "/subject/$subjectId",
        params: { subjectId: subject.id },
      });
    }
    for (const u of subject.units) {
      if (u.title.toLowerCase().includes(q)) {
        hits.push({
          kind: "unit",
          title: u.title,
          context: `Unit ${u.unit_number} · ${subject.name}`,
          to: "/unit/$unitId",
          params: { unitId: u.id },
        });
      }
      for (const h of u.highlights) {
        if (h.toLowerCase().includes(q)) {
          hits.push({
            kind: "content",
            title: h,
            context: `Unit ${u.unit_number} · ${subject.name}`,
            to: "/unit/$unitId",
            params: { unitId: u.id },
          });
        }
      }
    }
  }
  return hits.slice(0, 40);
}
