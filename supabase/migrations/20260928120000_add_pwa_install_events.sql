CREATE TABLE IF NOT EXISTS public.pwa_install_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  source text NOT NULL DEFAULT 'install_prompt',
  browser text,
  platform text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.pwa_install_events TO authenticated;
GRANT ALL ON public.pwa_install_events TO service_role;
ALTER TABLE public.pwa_install_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own install event"
  ON public.pwa_install_events FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Admins can view install metrics"
  ON public.pwa_install_events FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX IF NOT EXISTS pwa_install_events_created_idx
  ON public.pwa_install_events (created_at DESC);

CREATE INDEX IF NOT EXISTS pwa_install_events_user_idx
  ON public.pwa_install_events (user_id);
