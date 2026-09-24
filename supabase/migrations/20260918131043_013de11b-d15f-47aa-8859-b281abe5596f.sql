GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO anon, authenticated;
GRANT SELECT ON public.notifications TO anon;
GRANT SELECT ON public.revision_points TO anon;