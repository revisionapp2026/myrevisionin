-- Add support for Bachelor of Science (B.Sc) with 6 semesters and stream/branch tracking
ALTER TABLE public.subjects DROP CONSTRAINT IF EXISTS subjects_program_check;
ALTER TABLE public.subjects ADD CONSTRAINT subjects_program_check CHECK (program IN ('bba', 'bcom', 'btech', 'bsc'));

ALTER TABLE public.model_papers DROP CONSTRAINT IF EXISTS model_papers_program_check;
ALTER TABLE public.model_papers ADD CONSTRAINT model_papers_program_check CHECK (program IS NULL OR program IN ('bba', 'bcom', 'btech', 'bsc'));

ALTER TABLE public.notifications DROP CONSTRAINT IF EXISTS notifications_program_check;
ALTER TABLE public.notifications ADD CONSTRAINT notifications_program_check CHECK (program IS NULL OR program IN ('bba', 'bcom', 'btech', 'bsc'));
