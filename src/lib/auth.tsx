import type { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
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
  is_premium?: boolean;
  plan?: string | null;
  premium_since?: string | null;
  created_at?: string;
};

type AuthValue = {
  loading: boolean;
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  isAdmin: boolean;
  refreshProfile: () => Promise<void>;
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

const ADMIN_EMAIL = "admin@revisionapp.com";

function checkLocalAdmin(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.sessionStorage.getItem("revision_admin_unlocked") === "true" ||
    window.localStorage.getItem("revision_admin_unlocked") === "true"
  );
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isAdmin, setIsAdmin] = useState(checkLocalAdmin);
  const [loading, setLoading] = useState(true);
  const app = useAppState();

  useEffect(() => {
    let active = true;

    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!active) return;
        setSession(data.session ?? null);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("[Auth] getSession failed:", err);
        if (active) setLoading(false);
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
    app.setUserScope(userId);
  }, [userId, app.setUserScope]);

  const profileLoadedRef = useRef(false);

  const refreshProfile = useCallback(async () => {
    if (!userId) return;
    try {
      const [{ data: p }, { data: role }] = await Promise.all([
        supabase
          .from("profiles")
          .select(
            "id, full_name, email, program_id, semester, avatar_url, is_premium, plan, premium_since, created_at",
          )
          .eq("id", userId)
          .maybeSingle(),
        supabase.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin"),
      ]);

      let loadedProfile = (p as Profile) ?? null;
      if (!loadedProfile && userId && session?.user) {
        try {
          const initialProfile = {
            id: userId,
            email: session.user.email ?? null,
            full_name:
              (session.user.user_metadata?.["full_name"] as string | undefined) ??
              (session.user.user_metadata?.["name"] as string | undefined) ??
              null,
            program_id: app.program ?? null,
            semester: app.semester ?? null,
          };
          const { data: created } = await supabase
            .from("profiles")
            .upsert(initialProfile)
            .select(
              "id, full_name, email, program_id, semester, avatar_url, is_premium, plan, premium_since, created_at",
            )
            .maybeSingle();
          if (created) {
            loadedProfile = created as Profile;
          }
        } catch (e) {
          console.warn("[Auth] Could not create initial OAuth profile:", e);
        }
      }

      if (loadedProfile) {
        setProfile(loadedProfile);
        profileLoadedRef.current = true;
        if (loadedProfile.is_premium) {
          app.setPremium(true);
        } else {
          app.setPremium(false);
          if (typeof window !== "undefined") {
            window.localStorage.removeItem("revision_lifetime_unlocked");
            window.sessionStorage.removeItem("revision_lifetime_unlocked");
          }
        }
        // Authoritative database sync: adopt program & semester from profile if present
        if (loadedProfile.program_id && app.program !== loadedProfile.program_id) {
          app.setProgram(loadedProfile.program_id);
        }
        if (loadedProfile.semester && app.semester !== loadedProfile.semester) {
          app.setSemester(loadedProfile.semester);
        }
      }
      const isRoleAdmin = (role?.length ?? 0) > 0;
      const isEmailAdmin = session?.user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
      const localAdmin = checkLocalAdmin();
      setIsAdmin(isRoleAdmin || isEmailAdmin || localAdmin);
    } catch (err) {
      console.warn("Failed to refresh profile:", err);
    }
  }, [userId, session?.user, app]);

  useEffect(() => {
    profileLoadedRef.current = false;
    const localAdmin = checkLocalAdmin();
    if (!userId) {
      setProfile(null);
      setIsAdmin(localAdmin);
      return;
    }
    void refreshProfile();
  }, [userId, refreshProfile]);

  // Realtime subscription: when admin or server updates user profile, reflect immediately!
  useEffect(() => {
    if (!userId) return;

    const channel = supabase
      .channel(`profile-updates-${userId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "profiles",
          filter: `id=eq.${userId}`,
        },
        (payload) => {
          if (payload.new) {
            const next = payload.new as Profile;
            setProfile(next);
            if (next.is_premium) {
              app.setPremium(true);
            } else {
              app.setPremium(false);
              if (typeof window !== "undefined") {
                window.localStorage.removeItem("revision_lifetime_unlocked");
                window.sessionStorage.removeItem("revision_lifetime_unlocked");
              }
            }
            if (next.program_id && app.program !== next.program_id) {
              app.setProgram(next.program_id);
            }
            if (next.semester && app.semester !== next.semester) {
              app.setSemester(next.semester);
            }
          }
        },
      )
      .subscribe();

    let lastRefresh = 0;
    const onFocus = () => {
      const now = Date.now();
      if (now - lastRefresh > 30_000) {
        lastRefresh = now;
        void refreshProfile();
      }
    };
    window.addEventListener("focus", onFocus);
    window.addEventListener("online", onFocus);

    return () => {
      void supabase.removeChannel(channel);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("online", onFocus);
    };
  }, [userId, refreshProfile, app]);

  // Only sync student choices back to profile once the authoritative profile has been loaded
  useEffect(() => {
    if (!profile || !profileLoadedRef.current || !app.ready) return;

    // Do not sync back if local state has no program or semester selected
    if (!app.program && !app.semester) return;

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

  const signUp = useCallback(
    async (name: string, email: string, password: string) => {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("revision_lifetime_unlocked");
        window.sessionStorage.removeItem("revision_lifetime_unlocked");
        window.localStorage.removeItem("revision_pending_order");
        window.localStorage.removeItem("revision_account_created_at");
        window.sessionStorage.setItem("revision_new_signup", "true");
      }
      app.clearSelection();
      app.setPremium(false);
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
    },
    [app],
  );

  const sendReset = useCallback(async (email: string) => {
    const appUrl = import.meta.env["VITE_APP_URL"] || window.location.origin;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${appUrl}/reset-password`,
    });
    if (error) throw error;
  }, []);

  const signOut = useCallback(async () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("revision_admin_unlocked");
      window.localStorage.removeItem("revision_admin_unlocked");
      window.localStorage.removeItem("revision_lifetime_unlocked");
      window.sessionStorage.removeItem("revision_lifetime_unlocked");
      window.localStorage.removeItem("revision_pending_order");
      window.localStorage.removeItem("revision_account_created_at");
      window.sessionStorage.removeItem("revision_new_signup");
    }
    app.clearSelection();
    app.setPremium(false);
    app.setUserScope(null);
    await supabase.auth.signOut();
    setSession(null);
    setProfile(null);
    setIsAdmin(false);
  }, [app]);

  const saveProfile = useCallback(
    async (patch: Partial<Omit<Profile, "id">>) => {
      const activeId = userId || profile?.id;
      if (!activeId) return;
      const { error } = await supabase.from("profiles").upsert({
        id: activeId,
        ...patch,
      });
      if (error) throw error;
      setProfile((prev) => (prev ? { ...prev, ...patch } : ({ id: activeId, ...patch } as Profile)));
    },
    [userId, profile?.id],
  );

  const value = useMemo<AuthValue>(
    () => ({
      loading,
      session,
      user: session?.user ?? null,
      profile,
      isAdmin,
      refreshProfile,
      signIn,
      signUp,
      sendReset,
      signOut,
      saveProfile,
    }),
    [loading, session, profile, isAdmin, refreshProfile, signIn, signUp, sendReset, signOut, saveProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
