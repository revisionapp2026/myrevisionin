import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-ZxCzTnFP.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DJPsMw-X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const app = useAppState();
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		if (!userId) {
			setProfile(null);
			setIsAdmin(false);
			return;
		}
		let active = true;
		(async () => {
			const [{ data: p }, { data: role }] = await Promise.all([supabase.from("profiles").select("id, full_name, email, program_id, semester, avatar_url, is_premium, plan, premium_since").eq("id", userId).maybeSingle(), supabase.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin")]);
			if (!active) return;
			setProfile(p ?? null);
			setIsAdmin((role?.length ?? 0) > 0);
		})();
		return () => {
			active = false;
		};
	}, [userId]);
	(0, import_react.useEffect)(() => {
		if (!profile || !app.ready) return;
		if (!app.program && profile.program_id) app.setProgram(profile.program_id);
		if (!app.semester && profile.semester) app.setSemester(profile.semester);
		const hasProgramChange = app.program && app.program !== profile.program_id;
		const hasSemesterChange = app.semester && app.semester !== profile.semester;
		if (hasProgramChange || hasSemesterChange) {
			const patch = {
				program_id: app.program ?? profile.program_id,
				semester: app.semester ?? profile.semester
			};
			supabase.from("profiles").update(patch).eq("id", profile.id);
			setProfile((prev) => prev ? {
				...prev,
				...patch
			} : prev);
		}
	}, [
		profile?.id,
		app.program,
		app.semester,
		app.ready
	]);
	const signIn = (0, import_react.useCallback)(async (email, password) => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (error) throw error;
	}, []);
	const signUp = (0, import_react.useCallback)(async (name, email, password) => {
		const appUrl = {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/",
			"VITE_APP_URL": "https://myrevision.in",
			"VITE_CASHFREE_APP_ID": "14224927385a74ab751982cf2b32942241",
			"VITE_SUPABASE_PROJECT_ID": "csukivtesgzxnocngjaz",
			"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdWtpdnRlc2d6eG5vY25namF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NjYxMzcsImV4cCI6MjEwNTI0MjEzN30.nMhi_FijW_cEzToS0Z4gL8jrgR4jJ7zg5QSUobks9Vo",
			"VITE_SUPABASE_URL": "https://csukivtesgzxnocngjaz.supabase.co"
		}["VITE_APP_URL"] || window.location.origin;
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${appUrl}/auth`,
				data: { full_name: name }
			}
		});
		if (error) throw error;
		return { needsConfirmation: !data.session };
	}, []);
	const sendReset = (0, import_react.useCallback)(async (email) => {
		const appUrl = {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/",
			"VITE_APP_URL": "https://myrevision.in",
			"VITE_CASHFREE_APP_ID": "14224927385a74ab751982cf2b32942241",
			"VITE_SUPABASE_PROJECT_ID": "csukivtesgzxnocngjaz",
			"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdWtpdnRlc2d6eG5vY25namF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NjYxMzcsImV4cCI6MjEwNTI0MjEzN30.nMhi_FijW_cEzToS0Z4gL8jrgR4jJ7zg5QSUobks9Vo",
			"VITE_SUPABASE_URL": "https://csukivtesgzxnocngjaz.supabase.co"
		}["VITE_APP_URL"] || window.location.origin;
		const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${appUrl}/reset-password` });
		if (error) throw error;
	}, []);
	const signOut = (0, import_react.useCallback)(async () => {
		await supabase.auth.signOut();
		setSession(null);
		setProfile(null);
		setIsAdmin(false);
	}, []);
	const saveProfile = (0, import_react.useCallback)(async (patch) => {
		if (!profile) return;
		const { error } = await supabase.from("profiles").update(patch).eq("id", profile.id);
		if (error) throw error;
		setProfile({
			...profile,
			...patch
		});
	}, [profile]);
	const value = (0, import_react.useMemo)(() => ({
		loading,
		session,
		user: session?.user ?? null,
		profile,
		isAdmin,
		signIn,
		signUp,
		sendReset,
		signOut,
		saveProfile
	}), [
		loading,
		session,
		profile,
		isAdmin,
		signIn,
		signUp,
		sendReset,
		signOut,
		saveProfile
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value,
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
//#endregion
export { useAuth as n, AuthProvider as t };
