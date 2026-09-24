-- Revision points (unit study material: highlight points + bookmark points)
CREATE TABLE public.revision_points (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  unit_id text NOT NULL REFERENCES public.units(id) ON DELETE CASCADE,
  kind text NOT NULL DEFAULT 'highlight' CHECK (kind IN ('highlight','bookmark')),
  point_number integer NOT NULL DEFAULT 1,
  content text NOT NULL,
  display_order integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX revision_points_unit_idx ON public.revision_points(unit_id, kind, display_order);
GRANT SELECT ON public.revision_points TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.revision_points TO authenticated;
GRANT ALL ON public.revision_points TO service_role;
ALTER TABLE public.revision_points ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Revision points are viewable by everyone" ON public.revision_points FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage revision points" ON public.revision_points FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER update_revision_points_updated_at BEFORE UPDATE ON public.revision_points FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Per-user saved bookmarks
CREATE TABLE public.user_bookmarks (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  unit_id text NOT NULL REFERENCES public.units(id) ON DELETE CASCADE,
  revision_point_id uuid REFERENCES public.revision_points(id) ON DELETE CASCADE,
  note text,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, unit_id, revision_point_id)
);
CREATE INDEX user_bookmarks_user_idx ON public.user_bookmarks(user_id, created_at DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_bookmarks TO authenticated;
GRANT ALL ON public.user_bookmarks TO service_role;
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage their own bookmarks" ON public.user_bookmarks FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

-- Extra fields on model papers / questions
ALTER TABLE public.model_papers ADD COLUMN IF NOT EXISTS description text;
ALTER TABLE public.model_papers ADD COLUMN IF NOT EXISTS is_paid boolean NOT NULL DEFAULT false;
ALTER TABLE public.paper_questions ADD COLUMN IF NOT EXISTS marks integer;
ALTER TABLE public.paper_questions ADD COLUMN IF NOT EXISTS display_order integer NOT NULL DEFAULT 1;

-- In-app notifications
CREATE TABLE public.notifications (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  body text NOT NULL,
  category text NOT NULL DEFAULT 'general' CHECK (category IN ('general','material','paper','premium')),
  link text,
  program text CHECK (program IN ('bba','bcom')),
  semester integer,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX notifications_published_idx ON public.notifications(is_published, created_at DESC);
GRANT SELECT ON public.notifications TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.notifications TO authenticated;
GRANT ALL ON public.notifications TO service_role;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published notifications are viewable by everyone" ON public.notifications FOR SELECT TO anon, authenticated USING (is_published OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins manage notifications" ON public.notifications FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER update_notifications_updated_at BEFORE UPDATE ON public.notifications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.notification_reads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  notification_id uuid NOT NULL REFERENCES public.notifications(id) ON DELETE CASCADE,
  read_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, notification_id)
);
GRANT SELECT, INSERT, DELETE ON public.notification_reads TO authenticated;
GRANT ALL ON public.notification_reads TO service_role;
ALTER TABLE public.notification_reads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage their own notification reads" ON public.notification_reads FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());