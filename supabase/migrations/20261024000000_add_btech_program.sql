-- Add support for Engineering (B.Tech/BE) with 8 semesters and branch tracking
ALTER TABLE public.subjects DROP CONSTRAINT IF EXISTS subjects_program_check;
ALTER TABLE public.subjects ADD CONSTRAINT subjects_program_check CHECK (program IN ('bba', 'bcom', 'btech'));

ALTER TABLE public.subjects DROP CONSTRAINT IF EXISTS subjects_semester_check;
ALTER TABLE public.subjects ADD CONSTRAINT subjects_semester_check CHECK (semester IS NULL OR (semester BETWEEN 1 AND 8));

ALTER TABLE public.subjects ADD COLUMN IF NOT EXISTS branch text;

ALTER TABLE public.model_papers DROP CONSTRAINT IF EXISTS model_papers_program_check;
ALTER TABLE public.model_papers ADD CONSTRAINT model_papers_program_check CHECK (program IS NULL OR program IN ('bba', 'bcom', 'btech'));

ALTER TABLE public.notifications DROP CONSTRAINT IF EXISTS notifications_program_check;
