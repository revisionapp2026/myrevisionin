import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ChtHnZ0X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var splash_default = "/assets/splash-CqdQ4PLR.jpg";
var SPLASH_DURATION_MS = 3e3;
function SplashScreen() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			navigate({
				to: "/auth",
				replace: true
			});
		}, SPLASH_DURATION_MS);
		return () => clearTimeout(timer);
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		"aria-label": "REVISION splash screen",
		className: "relative min-h-dvh w-full overflow-hidden bg-[#FAFEFE]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: splash_default,
			alt: "REVISION — Learn. Revise. Succeed. Your B.Com, BBA Syllabus. Anytime. Anywhere.",
			className: "absolute inset-0 h-full w-full object-contain",
			draggable: false
		})
	});
}
var SplitComponent = SplashScreen;
//#endregion
export { SplitComponent as component };
