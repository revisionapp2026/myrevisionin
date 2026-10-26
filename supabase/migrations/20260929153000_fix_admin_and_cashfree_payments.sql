-- Migration: Fix admin role and payment unlock permissions

-- 1. Ensure admin role exists for admin@revisionapp.com
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE lower(email) = 'admin@revisionapp.com'
ON CONFLICT (user_id, role) DO NOTHING;

-- 2. Update has_role function to also verify admin email fallback
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  ) OR (
    _role = 'admin' AND EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = _user_id AND lower(email) = 'admin@revisionapp.com'
    )
  );
$$;

-- 3. Grant execute on record_payment to authenticated users as well as service_role
GRANT EXECUTE ON FUNCTION public.record_payment TO authenticated;
GRANT EXECUTE ON FUNCTION public.record_payment TO service_role;

-- 4. RPC to allow admins to activate premium for any student
CREATE OR REPLACE FUNCTION public.admin_set_user_premium(
  p_user_id uuid,
  p_is_premium boolean,
  p_plan text DEFAULT 'yearly'
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Access denied. Admin role required.';
  END IF;

  UPDATE public.profiles
  SET is_premium = p_is_premium,
      plan = CASE WHEN p_is_premium THEN COALESCE(p_plan, 'yearly') ELSE NULL END,
      premium_since = CASE WHEN p_is_premium THEN NOW() ELSE NULL END
  WHERE id = p_user_id;

  IF p_is_premium THEN
    INSERT INTO public.payments (user_id, plan, amount, method, status, reference, is_demo)
    VALUES (p_user_id, COALESCE(p_plan, 'yearly'), 0, 'admin_grant', 'paid', 'MANUAL_' || NOW()::text, false);
  END IF;

  RETURN true;
END;
$$;

GRANT EXECUTE ON FUNCTION public.admin_set_user_premium TO authenticated;
