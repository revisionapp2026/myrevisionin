REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
DROP POLICY "Published notifications are viewable by everyone" ON public.notifications;
CREATE POLICY "Published notifications are viewable by everyone"
  ON public.notifications FOR SELECT TO anon, authenticated
  USING (is_published);