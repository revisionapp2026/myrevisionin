import { t as supabase } from "./client-DyK7C5H7.mjs";
import { n as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-CFMTJWpr.js
/**
* Live study content read from the database (public, anon-readable tables).
* Subject / unit names still come from src/lib/syllabus.ts via mock-data,
* while revision points, model papers and notifications are database-driven.
*/
var unitPointsQuery = (unitId) => queryOptions({
	queryKey: ["revision-points", unitId],
	queryFn: async () => {
		const { data, error } = await supabase.from("revision_points").select("id, unit_id, kind, point_number, content, display_order").eq("unit_id", unitId).order("display_order", { ascending: true });
		if (error) throw error;
		return data ?? [];
	}
});
var subjectPapersQuery = (subjectId) => queryOptions({
	queryKey: ["model-papers", subjectId],
	queryFn: async () => {
		const { data, error } = await supabase.from("model_papers").select("id, subject_id, title, subtitle, description, paper_type, is_paid, position").eq("subject_id", subjectId).order("position", { ascending: true });
		if (error) throw error;
		return data ?? [];
	}
});
var paperQuery = (paperId) => queryOptions({
	queryKey: ["model-paper", paperId],
	queryFn: async () => {
		const { data: paper, error } = await supabase.from("model_papers").select("id, subject_id, title, subtitle, description, paper_type, is_paid, position").eq("id", paperId).maybeSingle();
		if (error) throw error;
		if (!paper) return null;
		const { data: questions, error: qError } = await supabase.from("paper_questions").select("id, question_no, question, prompt, answer_lines, marks").eq("paper_id", paperId).order("question_no", { ascending: true });
		if (qError) throw qError;
		return {
			paper,
			questions: questions ?? []
		};
	}
});
/** All papers for a set of subjects (premium dashboard). */
var papersForSubjectsQuery = (subjectIds) => queryOptions({
	queryKey: ["model-papers-bulk", [...subjectIds].sort().join(",")],
	enabled: subjectIds.length > 0,
	queryFn: async () => {
		const { data, error } = await supabase.from("model_papers").select("id, subject_id, title, subtitle, description, paper_type, is_paid, position").in("subject_id", subjectIds).order("position", { ascending: true });
		if (error) throw error;
		return data ?? [];
	}
});
/** How many revision points exist per unit, for progress and coverage. */
var pointsCountQuery = (unitIds) => queryOptions({
	queryKey: ["points-count", [...unitIds].sort().join(",")],
	enabled: unitIds.length > 0,
	queryFn: async () => {
		const counts = {};
		for (let i = 0; i < unitIds.length; i += 100) {
			const { data, error } = await supabase.from("revision_points").select("unit_id").in("unit_id", unitIds.slice(i, i + 100));
			if (error) throw error;
			for (const row of data ?? []) counts[row.unit_id] = (counts[row.unit_id] ?? 0) + 1;
		}
		return counts;
	}
});
var notificationsQuery = (program, semester) => queryOptions({
	queryKey: [
		"notifications",
		program,
		semester
	],
	queryFn: async () => {
		const { data, error } = await supabase.from("notifications").select("id, title, body, category, link, program, semester, is_published, created_at").eq("is_published", true).order("created_at", { ascending: false }).limit(50);
		if (error) throw error;
		return (data ?? []).filter((n) => (!n.program || n.program === (program ?? n.program)) && (!n.semester || n.semester === (semester ?? n.semester)));
	}
});
//#endregion
export { subjectPapersQuery as a, pointsCountQuery as i, paperQuery as n, unitPointsQuery as o, papersForSubjectsQuery as r, notificationsQuery as t };
