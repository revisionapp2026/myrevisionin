-- Analytics tracking tables for admin panel metrics

-- Site visits tracking
CREATE TABLE IF NOT EXISTS public.site_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id text NOT NULL,
  visited_at timestamptz NOT NULL DEFAULT now(),
  user_agent text,
  referrer text
);

-- PWA install tracking
CREATE TABLE IF NOT EXISTS public.pwa_installs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  installed_at timestamptz NOT NULL DEFAULT now(),
  platform text,
  user_agent text
);

-- Grants for site_visits
GRANT SELECT, INSERT ON public.site_visits TO authenticated;
GRANT ALL ON public.site_visits TO service_role;
ALTER TABLE public.site_visits ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist, then create new ones
DROP POLICY IF EXISTS "Users can insert their own visits" ON public.site_visits;
CREATE POLICY "Users can insert their own visits" ON public.site_visits
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

DROP POLICY IF EXISTS "Admins can view all visits" ON public.site_visits;
CREATE POLICY "Admins can view all visits" ON public.site_visits
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Grants for pwa_installs
GRANT SELECT, INSERT ON public.pwa_installs TO authenticated;
GRANT ALL ON public.pwa_installs TO service_role;
ALTER TABLE public.pwa_installs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can insert their own installs" ON public.pwa_installs;
CREATE POLICY "Users can insert their own installs" ON public.pwa_installs
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

DROP POLICY IF EXISTS "Admins can view all installs" ON public.pwa_installs;
CREATE POLICY "Admins can view all installs" ON public.pwa_installs
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Indexes for performance
CREATE INDEX IF NOT EXISTS site_visits_user_idx ON public.site_visits(user_id);
CREATE INDEX IF NOT EXISTS site_visits_visited_at_idx ON public.site_visits(visited_at DESC);
CREATE INDEX IF NOT EXISTS pwa_installs_user_idx ON public.pwa_installs(user_id);
CREATE INDEX IF NOT EXISTS pwa_installs_installed_at_idx ON public.pwa_installs(installed_at DESC);

-- Function to sync missing profiles from auth.users
DROP FUNCTION IF EXISTS public.sync_missing_profiles();
CREATE OR REPLACE FUNCTION public.sync_missing_profiles()
RETURNS TABLE(synced_count integer, auth_users_count integer, profiles_count integer)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_auth_count integer;
  v_profile_count integer;
  v_synced integer := 0;
BEGIN
  -- Count auth.users
  SELECT COUNT(*) INTO v_auth_count FROM auth.users;
  
  -- Count profiles
  SELECT COUNT(*) INTO v_profile_count FROM public.profiles;
  
  -- Insert profiles for users in auth.users that don't have profiles
  INSERT INTO public.profiles (id, full_name, email)
  SELECT 
    au.id,
    COALESCE(au.raw_user_meta_data->>'full_name', au.email),
    au.email
  FROM auth.users au
  LEFT JOIN public.profiles p ON au.id = p.id
  WHERE p.id IS NULL
  ON CONFLICT (id) DO NOTHING;
  
  GET DIAGNOSTICS v_synced = ROW_COUNT;
  
  RETURN QUERY SELECT v_synced, v_auth_count, v_profile_count;
END;
$$;

-- Grant execute on sync function to service role
GRANT EXECUTE ON FUNCTION public.sync_missing_profiles TO service_role;

-- Update profiles table RLS to ensure admins can see all profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT TO authenticated
  USING (id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- Ensure admin can update any profile
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE TO authenticated
  USING (id = auth.uid() OR public.has_role(auth.uid(), 'admin'))
  WITH CHECK (id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- Allow admins to insert profiles (for syncing)
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT TO authenticated
  WITH CHECK (id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- Function to get auth.users count (for diagnostic purposes)
DROP FUNCTION IF EXISTS public.get_auth_users_count();
CREATE OR REPLACE FUNCTION public.get_auth_users_count()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_count integer;
BEGIN
  -- Count users in auth.users
  SELECT COUNT(*) INTO user_count FROM auth.users;
  RETURN user_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_auth_users_count TO service_role;

-- Function to record a payment (for manual payment recording if needed)
CREATE OR REPLACE FUNCTION public.record_payment(
  p_user_id uuid,
  p_plan text,
  p_amount integer,
  p_method text,
  p_status text,
  p_reference text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.payments (user_id, plan, amount, method, status, reference, is_demo)
  VALUES (p_user_id, p_plan, p_amount, p_method, p_status, p_reference, false);
  
  -- Also update user to premium if payment is successful
  IF p_status = 'paid' THEN
    UPDATE public.profiles 
    SET is_premium = true, 
        plan = p_plan,
        premium_since = NOW()
    WHERE id = p_user_id AND is_premium = false;
  END IF;
  
  RETURN true;
END;
$$;

GRANT EXECUTE ON FUNCTION public.record_payment TO service_role;
