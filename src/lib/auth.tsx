import type { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/lib/app-state";

export type Profile = {
  id: string;
  full_name: string | null;
  email: string | null;
  program_id: string | null;
  semester: number | null;
  avatar_url: string | null;
  is_premium?: boolean;
  plan?: string | null;
  premium_since?: string | null;
};

type AuthValue = {
  loading: boolean;
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    name: string,
    email: string,
    password: string,
  ) => Promise<{ needsConfirmation: boolean }>;
  sendReset: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  saveProfile: (patch: Partial<Omit<Profile, "id">>) => Promise<void>;
};

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const app = useAppState();

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session ?? null);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next ?? null);
      setLoading(false);
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const userId = session?.user.id ?? null;

  useEffect(() => {
    if (!userId) {
      setProfile(null);
      setIsAdmin(false);
      return;
    }
    let active = true;
    void (async () => {
      const [{ data: p }, { data: role }] = await Promise.all([
        supabase
          .from("profiles")
          .select(
            "id, full_name, email, program_id, semester, avatar_url, is_premium, plan, premium_since",
          )
          .eq("id", userId)
          .maybeSingle(),
        supabase.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin"),
      ]);
      if (!active) return;
      setProfile((p as Profile) ?? null);
      setIsAdmin((role?.length ?? 0) > 0);
    })();
    return () => {
      active = false;
    };
  }, [userId]);

  // Keep the chosen program/semester in sync with the account.
  useEffect(() => {
    if (!profile || !app.ready) return;
    if (!app.program && profile.program_id) app.setProgram(profile.program_id);
    if (!app.semester && profile.semester) app.setSemester(profile.semester);

    const hasProgramChange = app.program && app.program !== profile.program_id;
    const hasSemesterChange = app.semester && app.semester !== profile.semester;

    if (hasProgramChange || hasSemesterChange) {
      const patch = {
        program_id: app.program ?? profile.program_id,
        semester: app.semester ?? profile.semester,
      };
      void supabase.from("profiles").update(patch).eq("id", profile.id);
      setProfile((prev) => (prev ? { ...prev, ...patch } : prev));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.id, app.program, app.semester, app.ready]);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }, []);

  const signUp = useCallback(async (name: string, email: string, password: string) => {
    const appUrl = import.meta.env["VITE_APP_URL"] || window.location.origin;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${appUrl}/auth`,
        data: { full_name: name },
      },
    });
    if (error) throw error;
    return { needsConfirmation: !data.session };
  }, []);

  const sendReset = useCallback(async (email: string) => {
    const appUrl = import.meta.env["VITE_APP_URL"] || window.location.origin;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${appUrl}/reset-password`,
    });
    if (error) throw error;
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setSession(null);
    setProfile(null);
    setIsAdmin(false);
  }, []);

  const saveProfile = useCallback(
    async (patch: Partial<Omit<Profile, "id">>) => {
      if (!profile) return;
      const { error } = await supabase.from("profiles").update(patch).eq("id", profile.id);
      if (error) throw error;
      setProfile({ ...profile, ...patch });
    },
    [profile],
  );

  const value = useMemo<AuthValue>(
    () => ({
      loading,
      session,
      user: session?.user ?? null,
      profile,
      isAdmin,
      signIn,
      signUp,
      sendReset,
      signOut,
      saveProfile,
    }),
    [loading, session, profile, isAdmin, signIn, signUp, sendReset, signOut, saveProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
