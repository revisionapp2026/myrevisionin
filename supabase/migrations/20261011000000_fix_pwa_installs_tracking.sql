-- Fix PWA install tracking RLS and grants so both anonymous and authenticated visitors can record installs

-- Grant INSERT and SELECT on public.pwa_installs to anon and authenticated
GRANT INSERT, SELECT ON public.pwa_installs TO anon, authenticated;

-- Allow anyone (anon or authenticated) to insert into pwa_installs
DROP POLICY IF EXISTS "Anyone can insert pwa_installs" ON public.pwa_installs;
DROP POLICY IF EXISTS "Users can insert their own installs" ON public.pwa_installs;

CREATE POLICY "Anyone can insert pwa_installs" ON public.pwa_installs
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to view pwa_installs (for admin dashboard)
DROP POLICY IF EXISTS "Admins can view all installs" ON public.pwa_installs;
CREATE POLICY "Admins can view all installs" ON public.pwa_installs
  FOR SELECT TO authenticated
  USING (true);

-- Also allow anon to view count if queried
DROP POLICY IF EXISTS "Anyone can view installs count" ON public.pwa_installs;
CREATE POLICY "Anyone can view installs count" ON public.pwa_installs
  FOR SELECT TO anon
  USING (true);

-- RPC function to record install securely bypassing RLS
CREATE OR REPLACE FUNCTION public.track_pwa_install(
  p_user_id uuid DEFAULT NULL,
  p_platform text DEFAULT NULL,
  p_user_agent text DEFAULT NULL
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.pwa_installs (user_id, platform, user_agent)
  VALUES (p_user_id, p_platform, p_user_agent);
  RETURN true;
END;
$$;

GRANT EXECUTE ON FUNCTION public.track_pwa_install TO anon, authenticated, service_role;

-- RPC to get pwa_installs count securely
CREATE OR REPLACE FUNCTION public.get_pwa_installs_count()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  installs_count integer;
BEGIN
  SELECT COUNT(*) INTO installs_count FROM public.pwa_installs;
  RETURN installs_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_pwa_installs_count TO anon, authenticated, service_role;
