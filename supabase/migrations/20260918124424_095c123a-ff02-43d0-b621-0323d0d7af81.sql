CREATE TABLE public.subjects (
  id text PRIMARY KEY,
  program text NOT NULL CHECK (program IN ('bba','bcom')),
  semester integer CHECK (semester BETWEEN 1 AND 6),
  elective_group text,
  name text NOT NULL,
  icon text NOT NULL DEFAULT 'management',
  position integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.subjects TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.subjects TO authenticated;
GRANT ALL ON public.subjects TO service_role;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Subjects are viewable by everyone" ON public.subjects FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage subjects" ON public.subjects FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER update_subjects_updated_at BEFORE UPDATE ON public.subjects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX subjects_program_semester_idx ON public.subjects (program, semester, position);

CREATE TABLE public.units (
  id text PRIMARY KEY,
  subject_id text NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  unit_number integer NOT NULL,
  title text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (subject_id, unit_number)
);
GRANT SELECT ON public.units TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.units TO authenticated;
GRANT ALL ON public.units TO service_role;
ALTER TABLE public.units ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Units are viewable by everyone" ON public.units FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage units" ON public.units FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER update_units_updated_at BEFORE UPDATE ON public.units FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX units_subject_idx ON public.units (subject_id, unit_number);

CREATE TABLE public.highlights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id text NOT NULL REFERENCES public.units(id) ON DELETE CASCADE,
  position integer NOT NULL DEFAULT 1,
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.highlights TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.highlights TO authenticated;
GRANT ALL ON public.highlights TO service_role;
ALTER TABLE public.highlights ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Highlights are viewable by everyone" ON public.highlights FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage highlights" ON public.highlights FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER update_highlights_updated_at BEFORE UPDATE ON public.highlights FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX highlights_unit_idx ON public.highlights (unit_id, position);

CREATE TABLE public.model_papers (
  id text PRIMARY KEY,
  subject_id text NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  title text NOT NULL,
  subtitle text,
  paper_type text NOT NULL DEFAULT 'model' CHECK (paper_type IN ('model','previous_year')),
  position integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.model_papers TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.model_papers TO authenticated;
GRANT ALL ON public.model_papers TO service_role;
ALTER TABLE public.model_papers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Model papers are viewable by everyone" ON public.model_papers FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage model papers" ON public.model_papers FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER update_model_papers_updated_at BEFORE UPDATE ON public.model_papers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX model_papers_subject_idx ON public.model_papers (subject_id, position);

CREATE TABLE public.paper_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  paper_id text NOT NULL REFERENCES public.model_papers(id) ON DELETE CASCADE,
  question_no integer NOT NULL,
  question text NOT NULL,
  prompt text,
  answer_lines text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (paper_id, question_no)
);
GRANT SELECT ON public.paper_questions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.paper_questions TO authenticated;
GRANT ALL ON public.paper_questions TO service_role;
ALTER TABLE public.paper_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Paper questions are viewable by everyone" ON public.paper_questions FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage paper questions" ON public.paper_questions FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER update_paper_questions_updated_at BEFORE UPDATE ON public.paper_questions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX paper_questions_paper_idx ON public.paper_questions (paper_id, question_no);