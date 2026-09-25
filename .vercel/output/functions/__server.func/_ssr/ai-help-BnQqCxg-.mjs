import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as useRouter, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Play, B as ListChecks, E as RotateCcw, M as Pause, T as RotateCw, U as Layers, Y as Headphones, _t as BookOpen, bt as ArrowRight, dt as Check, ht as Bookmark, i as WandSparkles, l as Trophy, lt as ChevronLeft, mt as BrainCircuit, n as X, q as House, st as Clock, u as Trash2, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen, t as BottomNav } from "./app-chrome-Bb5PuQcw.mjs";
import { t as revision_logo_default } from "./revision-logo-BPpcyIP8.mjs";
import { a as SkeletonCard, n as Button, r as Chip } from "./ui-bits-DCyB6evP.mjs";
import { t as Route } from "./ai-help-D1goULIv.mjs";
import { n as recordAiUsage, r as useEntitlements, t as readAiUsage } from "./entitlements-C3Ks-eX8.mjs";
import { n as getSubject, o as programLabel, u as subjectsFor } from "./mock-data-CcD4brPZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-help-BnQqCxg-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Swipeable, flippable flashcard deck.
* Tap a card to flip it, drag or swipe left/right to move through the deck.
*/
var SWIPE_THRESHOLD = 90;
function FlashcardDeck({ cards }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	const [dx, setDx] = (0, import_react.useState)(0);
	const [leaving, setLeaving] = (0, import_react.useState)(null);
	const [known, setKnown] = (0, import_react.useState)({});
	const start = (0, import_react.useRef)(null);
	const moved = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		setIndex(0);
		setFlipped(false);
		setKnown({});
		setLeaving(null);
		setDx(0);
	}, [cards]);
	const advance = (0, import_react.useCallback)((dir) => {
		setLeaving(dir);
		setDx(dir === "left" ? -520 : 520);
		window.setTimeout(() => {
			setKnown((k) => dir === "right" ? {
				...k,
				[index]: true
			} : k);
			setIndex((i) => Math.min(i + 1, cards.length));
			setFlipped(false);
			setDx(0);
			setLeaving(null);
		}, 220);
	}, [index, cards.length]);
	const onDown = (e) => {
		if (leaving) return;
		start.current = e.clientX;
		moved.current = false;
	};
	const onMove = (e) => {
		if (start.current === null) return;
		const delta = e.clientX - start.current;
		if (Math.abs(delta) > 6) moved.current = true;
		setDx(delta);
	};
	const onUp = () => {
		if (start.current === null) return;
		const delta = dx;
		start.current = null;
		if (Math.abs(delta) > SWIPE_THRESHOLD) advance(delta < 0 ? "left" : "right");
		else {
			setDx(0);
			if (!moved.current) setFlipped((f) => !f);
		}
	};
	const restart = () => {
		setIndex(0);
		setFlipped(false);
		setKnown({});
	};
	if (cards.length === 0) return null;
	const done = index >= cards.length;
	const knownCount = Object.values(known).filter(Boolean).length;
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card card-rise grid place-items-center gap-3 px-5 py-9 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-12 place-items-center rounded-full bg-success/15 text-success",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[16px] font-bold",
				children: "Deck finished"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[13.5px] text-muted-foreground",
				children: [
					"You marked ",
					knownCount,
					" of ",
					cards.length,
					" as known."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: restart,
				className: "press mt-1 flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-bold text-ink-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-4" }), " Revise again"]
			})
		]
	});
	const card = cards[index];
	const next = cards[index + 1];
	const rotate = Math.max(-12, Math.min(12, dx / 12));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2.5 flex items-center justify-between text-[12.5px] font-semibold text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"Card ",
				index + 1,
				" of ",
				cards.length
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Swipe → known · ← revise later" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[232px] select-none",
			style: { perspective: "1200px" },
			children: [next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "surface-card absolute inset-x-2 top-2 h-[216px] scale-[0.97] opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "button",
				tabIndex: 0,
				"aria-label": flipped ? "Answer, tap to see the question" : "Question, tap to see the answer",
				onPointerDown: onDown,
				onPointerMove: onMove,
				onPointerUp: onUp,
				onPointerCancel: onUp,
				onKeyDown: (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setFlipped((f) => !f);
					}
					if (e.key === "ArrowRight") advance("right");
					if (e.key === "ArrowLeft") advance("left");
				},
				className: "absolute inset-0 touch-pan-y",
				style: {
					transform: `translateX(${dx}px) rotate(${rotate}deg)`,
					transition: start.current === null ? "transform 220ms cubic-bezier(.2,.75,.25,1)" : "none",
					opacity: leaving ? 0 : 1
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flip-3d relative size-full",
					style: { transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card backface-hidden absolute inset-0 flex flex-col justify-between px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold uppercase tracking-wide text-primary",
								children: "Question"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[17px] font-bold leading-snug",
								children: card.question
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[12px] text-muted-foreground",
								children: "Tap to reveal the answer"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card backface-hidden absolute inset-0 flex flex-col justify-between bg-primary px-4 py-4 text-primary-foreground",
						style: { transform: "rotateY(180deg)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold uppercase tracking-wide opacity-80",
								children: "Answer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] font-semibold leading-relaxed",
								children: card.answer
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[12px] opacity-75",
								children: "Swipe to the next card"
							})
						]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center justify-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => advance("left"),
					className: "press grid size-11 place-items-center rounded-full border border-border bg-card text-destructive",
					"aria-label": "Revise later",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFlipped((f) => !f),
					className: "press rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-bold text-ink-foreground",
					children: "Flip card"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => advance("right"),
					className: "press grid size-11 place-items-center rounded-full border border-border bg-card text-success",
					"aria-label": "I know this",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex justify-center gap-1.5",
			"aria-hidden": "true",
			children: cards.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 rounded-full transition-all", i === index ? "w-5 bg-primary" : known[i] ? "w-1.5 bg-success" : "w-1.5 bg-border") }, i))
		})
	] });
}
var KEY = "revision-saved-decks";
var MAX_DECKS = 40;
function readDecks() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((d) => !!d && typeof d === "object" && Array.isArray(d.cards));
	} catch {
		return [];
	}
}
function write(decks) {
	try {
		window.localStorage.setItem(KEY, JSON.stringify(decks.slice(0, MAX_DECKS)));
	} catch {}
}
function saveDeck(deck) {
	const entry = {
		...deck,
		id: `deck-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
		savedAt: Date.now()
	};
	write([entry, ...readDecks()]);
	return entry;
}
function deleteDeck(id) {
	write(readDecks().filter((d) => d.id !== id));
}
var MODES = [
	{
		id: "explain",
		label: "Explain",
		icon: BookOpen
	},
	{
		id: "flashcards",
		label: "Flashcards",
		icon: Layers
	},
	{
		id: "quiz",
		label: "Quiz",
		icon: ListChecks
	},
	{
		id: "audio-script",
		label: "Audio",
		icon: Headphones
	}
];
var ABILITIES = [
	{
		icon: BrainCircuit,
		title: "Ask questions",
		body: "Instant, syllabus-based answers",
		mode: "explain"
	},
	{
		icon: Layers,
		title: "Flashcards",
		body: "Swipe to revise quickly",
		mode: "flashcards"
	},
	{
		icon: ListChecks,
		title: "Practice questions",
		body: "Test what you remember",
		mode: "quiz"
	},
	{
		icon: WandSparkles,
		title: "Simplify topics",
		body: "In easy-to-follow language",
		mode: "explain"
	},
	{
		icon: Trophy,
		title: "Exam tips",
		body: "Important points first",
		mode: "explain"
	},
	{
		icon: Headphones,
		title: "Listen anywhere",
		body: "Audio revision on the go",
		mode: "audio-script"
	}
];
function parseCards(text) {
	return text.split("\n").map((l) => l.trim()).filter((l) => l.includes("::")).map((l) => {
		const [q, ...rest] = l.split("::");
		return {
			question: (q ?? "").replace(/^[-\d.\s]+/, "").trim(),
			answer: rest.join("::").trim()
		};
	}).filter((c) => c.question && c.answer);
}
function parseQuiz(text) {
	return text.split("\n").map((l) => l.trim()).filter((l) => l.split("::").length >= 3).map((l) => {
		const parts = l.split("::").map((p) => p.trim());
		return {
			question: (parts[0] ?? "").replace(/^[-\d.\s]+/, ""),
			options: (parts[1] ?? "").split("|").map((o) => o.trim()).filter(Boolean),
			correct: parts[2] ?? "",
			reason: parts[3] ?? ""
		};
	}).filter((q) => q.question && q.options.length >= 2);
}
function AiHelp() {
	const router = useRouter();
	const { program, semester } = useAppState();
	const { topic: initialTopic, unitId, mode: initialMode, subjectId: initialSubject } = Route.useSearch();
	const { isPremium, limits } = useEntitlements();
	const [topic, setTopic] = (0, import_react.useState)(initialTopic ?? "");
	const [mode, setMode] = (0, import_react.useState)(initialMode ?? "explain");
	const [answer, setAnswer] = (0, import_react.useState)("");
	const [answerMode, setAnswerMode] = (0, import_react.useState)("explain");
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [subjectId, setSubjectId] = (0, import_react.useState)(initialSubject ?? "");
	const [picked, setPicked] = (0, import_react.useState)({});
	const [audioState, setAudioState] = (0, import_react.useState)("idle");
	const [audioError, setAudioError] = (0, import_react.useState)(null);
	const [decks, setDecks] = (0, import_react.useState)([]);
	const [openDeck, setOpenDeck] = (0, import_react.useState)(null);
	const [savedNote, setSavedNote] = (0, import_react.useState)(false);
	const controller = (0, import_react.useRef)(null);
	const audioRef = (0, import_react.useRef)(null);
	const resultRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => setDecks(readDecks()), []);
	const mySubjects = (0, import_react.useMemo)(() => subjectsFor(program, semester), [program, semester]);
	const unitFromLink = (0, import_react.useMemo)(() => {
		if (!unitId) return null;
		const found = getUnit(unitId);
		if (found) return {
			subject: found.subject,
			unit: found.unit
		};
		return null;
	}, [unitId]);
	(0, import_react.useEffect)(() => {
		if (unitFromLink) setSubjectId(unitFromLink.subject.id);
	}, [unitFromLink]);
	(0, import_react.useEffect)(() => () => {
		audioRef.current?.pause();
		controller.current?.abort();
		if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
	}, []);
	const cards = answerMode === "flashcards" ? parseCards(answer) : [];
	const quiz = answerMode === "quiz" ? parseQuiz(answer) : [];
	const ask = async (value, asMode) => {
		const question = value.trim();
		if (question.length < 3 || loading) return;
		if (readAiUsage() >= limits.aiQuestionsPerDay) {
			setError(isPremium ? `You have used today's ${limits.aiQuestionsPerDay} questions. Please come back tomorrow.` : `Free members can ask ${limits.aiQuestionsPerDay} questions a day. Unlock Premium for more, or come back tomorrow.`);
			return;
		}
		recordAiUsage();
		setLoading(true);
		setError(null);
		setAudioError(null);
		setAnswer("");
		setPicked({});
		setOpenDeck(null);
		setSavedNote(false);
		setAnswerMode(asMode);
		audioRef.current?.pause();
		if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
		setAudioState("idle");
		controller.current?.abort();
		const ac = new AbortController();
		controller.current = ac;
		const subject = subjectId ? getSubject(subjectId) : void 0;
		window.setTimeout(() => resultRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		}), 60);
		try {
			const res = await fetch("/api/study-help", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					topic: question,
					mode: asMode,
					program,
					semester,
					subjectId: subjectId || void 0,
					subjectName: subject?.name,
					unitId: unitFromLink?.unit.id,
					unitName: unitFromLink ? `Unit ${unitFromLink.unit.unit_number}: ${unitFromLink.unit.title}` : void 0
				}),
				signal: ac.signal
			});
			if (!res.ok || !res.body) {
				setError(await res.text() || "Study help is unavailable right now.");
				return;
			}
			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let text = "";
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				text += decoder.decode(value, { stream: true });
				setAnswer(text);
			}
			if (!text.trim()) setError("Nothing came back. Please try again.");
		} catch (err) {
			if (err?.name !== "AbortError") setError("Could not reach your study buddy. Check your connection and try again.");
		} finally {
			setLoading(false);
		}
	};
	const speakOnDevice = (script) => {
		if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
		window.speechSynthesis.cancel();
		setTimeout(() => {
			const u = new SpeechSynthesisUtterance(script);
			u.lang = "en-IN";
			u.rate = .98;
			u.onend = () => setAudioState("idle");
			u.onerror = () => setAudioState("idle");
			window.speechSynthesis.speak(u);
		}, 50);
		setAudioState("playing");
		return true;
	};
	const playAudio = async () => {
		if (audioState === "playing") {
			audioRef.current?.pause();
			if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
			setAudioState("idle");
			return;
		}
		const script = answer.replace(/\s+/g, " ").trim();
		if (script.length < 20) return;
		setAudioState("loading");
		setAudioError(null);
		try {
			const res = await fetch("/api/study-audio", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ text: script })
			});
			if (!res.ok) throw new Error(`audio ${res.status}: ${await res.text().catch(() => "")}`);
			const blob = await res.blob();
			const audio = new Audio(URL.createObjectURL(blob));
			audioRef.current = audio;
			audio.onended = () => setAudioState("idle");
			audio.onpause = () => setAudioState("idle");
			await audio.play();
			setAudioState("playing");
		} catch (err) {
			console.warn("Server voice unavailable, using device voice", err);
			if (!speakOnDevice(script)) {
				setAudioError("Audio isn't supported on this device. You can still read the summary above.");
				setAudioState("idle");
			}
		}
	};
	const onSaveDeck = () => {
		if (cards.length === 0) return;
		const subject = subjectId ? getSubject(subjectId)?.name : void 0;
		saveDeck({
			title: topic.trim().slice(0, 80) || "Flashcards",
			...subject ? { subject } : {},
			cards
		});
		setDecks(readDecks());
		setSavedNote(true);
	};
	const suggestions = mySubjects.slice(0, 5).map((s) => s.name);
	const contextLine = [
		program ? programLabel(program) : null,
		semester ? `Semester ${semester}` : null,
		subjectId ? getSubject(subjectId)?.name : null,
		unitFromLink ? `Unit ${unitFromLink.unit.unit_number}` : null
	].filter(Boolean).join(" • ");
	const ctaLabel = mode === "flashcards" ? "Make flashcards" : mode === "quiz" ? "Give me a quiz" : mode === "audio-script" ? "Make an audio revision" : "Start explaining";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "brand-header relative overflow-hidden px-4 pb-8 pt-[max(0.85rem,env(safe-area-inset-top))]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-16 left-0 size-44 rounded-full bg-accent/20 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										if (window.history.length > 1) router.history.back();
										else router.navigate({ to: "/dashboard" });
									},
									"aria-label": "Go back",
									className: "press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-[22px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: revision_logo_default,
									alt: "REVISION",
									className: "h-9 w-9 rounded-lg object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[15px] font-extrabold leading-none tracking-wide text-white",
										children: "REVISION"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11.5px] text-white/70",
										children: "Learn. Revise. Succeed."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dashboard",
									"aria-label": "Go to home",
									className: "press ml-auto grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-[19px]" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-[32px] font-extrabold leading-tight text-white",
							children: ["Ask & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent-light",
								children: "Revise"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[14.5px] font-bold text-white/90",
							children: "Your personal AI study buddy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-[19rem] text-[13px] leading-relaxed text-white/75",
							children: "Instant explanations, summaries, swipeable flashcards and exam tips — anytime, anywhere."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								programLabel(program) || "BBA",
								semester ? `Semester ${semester}` : "All semesters",
								"Success"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-white/15 px-3 py-1 text-[11.5px] font-bold text-white",
								children: t
							}, t))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
			nav: true,
			className: "-mt-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						ask(topic, mode);
					},
					className: "surface-card card-rise p-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] font-semibold text-muted-foreground",
							children: contextLine || "Pick your program to personalise answers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5 grid grid-cols-4 gap-2",
							children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setMode(m.id),
								"aria-pressed": mode === m.id,
								className: cn("press flex flex-col items-center gap-1 rounded-xl border py-2.5 text-[11.5px] font-semibold", mode === m.id ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "size-[18px]" }), m.label]
							}, m.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Subject",
							value: subjectId,
							onChange: (e) => setSubjectId(e.target.value),
							className: "mt-3 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-[13.5px] outline-none focus:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Any subject in my semester"
							}), mySubjects.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.id,
								children: s.name
							}, s.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							"aria-label": "Your topic or question",
							value: topic,
							onChange: (e) => setTopic(e.target.value),
							rows: 3,
							maxLength: 400,
							placeholder: "e.g. Explain Trial Balance and its errors",
							className: "mt-2.5 w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-[14px] outline-none focus:border-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "ink",
							size: "lg",
							disabled: loading || topic.trim().length < 3,
							className: "mt-3 w-full",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Preparing your revision…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								ctaLabel,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							] })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: false,
						onClick: () => {
							setTopic(s);
							ask(s, mode);
						},
						children: s
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: resultRef }),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 rounded-xl border border-border bg-card px-3.5 py-3 text-[13.5px] text-destructive",
					children: error
				}),
				loading && !answer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, { lines: 4 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, { lines: 2 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-[12.5px] text-muted-foreground",
							children: "Reading your REVISION material…"
						})
					]
				}),
				answerMode === "flashcards" && cards.length > 0 && !openDeck && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlashcardDeck, { cards }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onSaveDeck,
							className: "press flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13.5px] font-bold text-ink-foreground",
							children: [savedNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }), savedNote ? "Saved for offline" : "Save this deck"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void ask(topic, "flashcards"),
							className: "press flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13.5px] font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " New set"]
						})]
					})]
				}),
				answerMode === "quiz" && quiz.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[12.5px] font-semibold text-muted-foreground",
						children: [quiz.length, " practice questions"]
					}), quiz.map((q, i) => {
						const chosen = picked[i];
						const letters = [
							"A",
							"B",
							"C",
							"D"
						];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card card-rise px-3.5 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[14px] font-bold",
									children: q.question
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 grid gap-1.5",
									children: q.options.map((opt, oi) => {
										const letter = letters[oi] ?? "";
										const isCorrect = q.correct.toUpperCase().startsWith(letter);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPicked((p) => ({
												...p,
												[i]: letter
											})),
											className: cn("press rounded-lg border px-3 py-2 text-left text-[13.5px]", !chosen ? "border-border" : isCorrect ? "border-success bg-success/10 font-semibold text-success" : chosen === letter ? "border-destructive text-destructive" : "border-border text-muted-foreground"),
											children: [
												letter,
												". ",
												opt
											]
										}, oi);
									})
								}),
								chosen && q.reason && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[12.5px] leading-relaxed text-muted-foreground",
									children: q.reason
								})
							]
						}, i);
					})]
				}),
				answer && answerMode !== "flashcards" && quiz.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "surface-card card-rise mt-4 whitespace-pre-wrap px-3.5 py-3.5 text-[14px] leading-relaxed",
					children: answer
				}),
				answer && !loading && answerMode !== "flashcards" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void playAudio(),
							className: "press flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13.5px] font-bold text-ink-foreground",
							children: [audioState === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : audioState === "playing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), audioState === "playing" ? "Pause" : "Listen to this"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void ask(topic, answerMode),
							className: "press flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13.5px] font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " Try again"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setMode("flashcards");
								ask(topic, "flashcards");
							},
							className: "press flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13.5px] font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }), " Flashcards"]
						})
					]
				}),
				audioError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[12.5px] text-destructive",
					children: audioError
				}),
				decks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2.5 text-[15px] font-bold",
						children: "Saved flashcards (works offline)"
					}), openDeck ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[14px] font-bold",
								children: openDeck.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpenDeck(null),
								className: "press rounded-full border border-border px-3 py-1.5 text-[12.5px] font-semibold",
								children: "Close"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlashcardDeck, { cards: openDeck.cards })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2.5",
						children: decks.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card flex items-center gap-3 px-3.5 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-[19px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setOpenDeck(d),
									className: "min-w-0 flex-1 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-[14px] font-semibold",
										children: d.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }),
											d.cards.length,
											" cards",
											d.subject ? ` • ${d.subject}` : ""
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `Delete ${d.title}`,
									onClick: () => {
										deleteDeck(d.id);
										setDecks(readDecks());
										setOpenDeck(null);
									},
									className: "press grid size-9 place-items-center rounded-full text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})
							]
						}, d.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2.5 text-[15px] font-bold",
						children: "What can you do?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2.5",
						children: ABILITIES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMode(a.mode),
							className: "surface-card press flex flex-col items-start gap-1.5 px-2.5 py-3 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded-lg bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "size-[17px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[12.5px] font-bold leading-tight",
									children: a.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10.5px] leading-tight text-muted-foreground",
									children: a.body
								})
							]
						}, a.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-center text-[12px] text-muted-foreground",
					children: "Answers use your own REVISION study material first — always cross-check with your syllabus."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
//#endregion
export { AiHelp as component };
