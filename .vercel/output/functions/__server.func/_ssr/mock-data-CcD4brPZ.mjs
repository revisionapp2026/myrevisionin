import { n as syllabus, t as slugify } from "./syllabus-BL3GhEHP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mock-data-CcD4brPZ.js
/**
* Content layer for the REVISION app.
* Subject and unit names come from src/lib/syllabus.ts, transcribed from the
* official BBA / B.Com syllabus documents. Revision points (highlights) and
* model-paper questions are added through the admin panel / content phase.
*/
var programs = [{
	id: "bcom",
	code: "B.Com",
	name: "B.Com",
	description: "Bachelor of Commerce"
}, {
	id: "bba",
	code: "BBA",
	name: "BBA",
	description: "Bachelor of Business Administration"
}];
var semesters = [
	1,
	2,
	3,
	4,
	5,
	6
];
function programLabel(programId) {
	return programs.find((p) => p.id === programId)?.code ?? "B.Com";
}
function buildSubject(s) {
	const slug = slugify(s.name);
	const id = s.electiveGroup ? `${s.program}-el-${slugify(s.electiveGroup)}-${slug}` : `${s.program}-s${s.semester}-${slug}`;
	return {
		id,
		slug,
		name: s.name,
		program: s.program,
		semester: s.semester,
		...s.electiveGroup ? { electiveGroup: s.electiveGroup } : {},
		icon: s.icon,
		units: s.units.map((title, i) => ({
			id: `${id}-u${i + 1}`,
			subject_id: id,
			unit_number: i + 1,
			title,
			highlights: []
		}))
	};
}
var subjects = syllabus.map(buildSubject);
var subjectById = new Map(subjects.map((s) => [s.id, s]));
var unitIndex = /* @__PURE__ */ new Map();
for (const subject of subjects) for (const unit of subject.units) unitIndex.set(unit.id, {
	subject,
	unit
});
function subjectsFor(program, semester) {
	const p = program ?? "bcom";
	const s = semester ?? 1;
	return subjects.filter((x) => x.program === p && x.semester === s);
}
/** Electives are offered alongside the core semester subjects (BBA only). */
function electivesFor(program) {
	const p = program ?? "bcom";
	return subjects.filter((x) => x.program === p && x.electiveGroup);
}
function getSubject(id) {
	return subjectById.get(id);
}
function getUnit(id) {
	return unitIndex.get(id);
}
var plans = [{
	id: "yearly",
	price: "₹199",
	period: "/ Year",
	note: "Auto renewal",
	highlight: false
}, {
	id: "lifetime",
	price: "₹399",
	period: "/ Lifetime",
	note: "One time payment",
	highlight: true
}];
var premiumBenefits = [
	"2 Model Papers",
	"Previous Year Question Papers (Solved)",
	"Important Questions",
	"Solved Answers",
	"Exam Pattern Guide"
];
function searchAll(query, program, semester) {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	const hits = [];
	const scope = [...subjectsFor(program, semester), ...electivesFor(program)];
	for (const subject of scope) {
		const scopeLabel = subject.electiveGroup ? `${subject.electiveGroup} Elective` : `Semester ${subject.semester}`;
		if (subject.name.toLowerCase().includes(q)) hits.push({
			kind: "subject",
			title: subject.name,
			context: `${scopeLabel} · ${subject.units.length} Units`,
			to: "/subject/$subjectId",
			params: { subjectId: subject.id }
		});
		for (const u of subject.units) {
			if (u.title.toLowerCase().includes(q)) hits.push({
				kind: "unit",
				title: u.title,
				context: `Unit ${u.unit_number} · ${subject.name}`,
				to: "/unit/$unitId",
				params: { unitId: u.id }
			});
			for (const h of u.highlights) if (h.toLowerCase().includes(q)) hits.push({
				kind: "content",
				title: h,
				context: `Unit ${u.unit_number} · ${subject.name}`,
				to: "/unit/$unitId",
				params: { unitId: u.id }
			});
		}
	}
	return hits.slice(0, 40);
}
//#endregion
export { premiumBenefits as a, searchAll as c, plans as i, semesters as l, getSubject as n, programLabel as o, getUnit as r, programs as s, electivesFor as t, subjectsFor as u };
