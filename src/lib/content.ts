/**
 * Live study content read from the database (public, anon-readable tables).
 * Subject / unit names still come from src/lib/syllabus.ts via mock-data,
 * while revision points, model papers and notifications are database-driven.
 */
import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type RevisionPoint = {
  id: string;
  unit_id: string;
  kind: "highlight" | "bookmark";
  point_number: number;
  content: string;
  display_order: number;
};

export type DbPaper = {
  id: string;
  subject_id: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  paper_type: string;
  is_paid: boolean;
  position: number;
};

export type DbQuestion = {
  id: string;
  question_no: number;
  question: string;
  prompt: string | null;
  answer_lines: string[];
  marks: number | null;
};

export type DbNotification = {
  id: string;
  title: string;
  body: string;
  category: "general" | "material" | "paper" | "premium";
  link: string | null;
  program: string | null;
  semester: number | null;
  is_published: boolean;
  created_at: string;
};

export const unitPointsQuery = (unitId: string) =>
  queryOptions({
    queryKey: ["revision-points", unitId],
    queryFn: async (): Promise<RevisionPoint[]> => {
      const { data, error } = await supabase
        .from("revision_points")
        .select("id, unit_id, kind, point_number, content, display_order")
        .eq("unit_id", unitId)
        .order("display_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as RevisionPoint[];
    },
  });

export const subjectPapersQuery = (subjectId: string) =>
  queryOptions({
    queryKey: ["model-papers", subjectId],
    queryFn: async (): Promise<DbPaper[]> => {
      const { data, error } = await supabase
        .from("model_papers")
        .select("id, subject_id, title, subtitle, description, paper_type, is_paid, position")
        .eq("subject_id", subjectId)
        .order("position", { ascending: true });
      if (error) throw error;
      return (data ?? []) as DbPaper[];
    },
  });

export const paperQuery = (paperId: string) =>
  queryOptions({
    queryKey: ["model-paper", paperId],
    queryFn: async (): Promise<{ paper: DbPaper; questions: DbQuestion[] } | null> => {
      const { data: paper, error } = await supabase
        .from("model_papers")
        .select("id, subject_id, title, subtitle, description, paper_type, is_paid, position")
        .eq("id", paperId)
        .maybeSingle();
      if (error) throw error;
      if (!paper) return null;
      const { data: questions, error: qError } = await supabase
        .from("paper_questions")
        .select("id, question_no, question, prompt, answer_lines, marks")
        .eq("paper_id", paperId)
        .order("question_no", { ascending: true });
      if (qError) throw qError;
      return { paper: paper as DbPaper, questions: (questions ?? []) as DbQuestion[] };
    },
  });

/** All papers for a set of subjects (premium dashboard). */
export const papersForSubjectsQuery = (subjectIds: string[]) =>
  queryOptions({
    queryKey: ["model-papers-bulk", [...subjectIds].sort().join(",")],
    enabled: subjectIds.length > 0,
    queryFn: async (): Promise<DbPaper[]> => {
      const { data, error } = await supabase
        .from("model_papers")
        .select("id, subject_id, title, subtitle, description, paper_type, is_paid, position")
        .in("subject_id", subjectIds)
        .order("position", { ascending: true });
      if (error) throw error;
      return (data ?? []) as DbPaper[];
    },
  });

/** How many revision points exist per unit, for progress and coverage. */
export const pointsCountQuery = (unitIds: string[]) =>
  queryOptions({
    queryKey: ["points-count", [...unitIds].sort().join(",")],
    enabled: unitIds.length > 0,
    queryFn: async (): Promise<Record<string, number>> => {
      const counts: Record<string, number> = {};
      for (let i = 0; i < unitIds.length; i += 100) {
        const { data, error } = await supabase
          .from("revision_points")
          .select("unit_id")
          .in("unit_id", unitIds.slice(i, i + 100));
        if (error) throw error;
        for (const row of data ?? []) counts[row.unit_id] = (counts[row.unit_id] ?? 0) + 1;
      }
      return counts;
    },
  });

export const notificationsQuery = (program: string | null, semester: number | null) =>
  queryOptions({
    queryKey: ["notifications", program, semester],
    queryFn: async (): Promise<DbNotification[]> => {
      const { data, error } = await supabase
        .from("notifications")
        .select("id, title, body, category, link, program, semester, is_published, created_at")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(50);
      if (error) throw error;
      const rows = (data ?? []) as DbNotification[];
      return rows.filter(
        (n) =>
          (!n.program || n.program === (program ?? n.program)) &&
          (!n.semester || n.semester === (semester ?? n.semester)),
      );
    },
  });
