import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  BrainCircuit,
  Check,
  ChevronLeft,
  Clock,
  Headphones,
  Home,
  Layers,
  ListChecks,
  Loader2,
  Pause,
  Play,
  RotateCcw,
  Trash2,
  Trophy,
  Wand2,
} from "lucide-react";
import { BottomNav, Screen } from "@/components/app-chrome";
import { Button, Chip, SkeletonCard } from "@/components/ui-bits";
import { FlashcardDeck, type Flashcard } from "@/components/flashcard-deck";
import logo from "@/assets/revision-logo.png";
import { useAppState } from "@/lib/app-state";
import { readAiUsage, recordAiUsage, useEntitlements } from "@/lib/entitlements";
import { programLabel, subjectsFor, getSubject, getUnit } from "@/lib/mock-data";
import { deleteDeck, readDecks, saveDeck, type SavedDeck } from "@/lib/saved-decks";
import { generateSyllabusContent } from "@/lib/study-fallback";
import { cn } from "@/lib/utils";
import { RichMathText } from "@/components/math-formula";

export const Route = createFileRoute("/ai-help")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { topic?: string; unitId?: string; mode?: Mode; subjectId?: string } => {
    const topic = search["topic"];
    const unitId = search["unitId"];
    const mode = search["mode"];
    const subjectId = search["subjectId"];
    return {
      ...(mode === "explain" || mode === "flashcards" || mode === "quiz" || mode === "audio-script"
        ? { mode: mode as Mode }
        : {}),
      ...(typeof subjectId === "string" && subjectId ? { subjectId } : {}),
      ...(typeof topic === "string" && topic.length > 0 ? { topic } : {}),
      ...(typeof unitId === "string" && unitId.length > 0 ? { unitId } : {}),
    };
  },
  head: () => ({
    meta: [
      { title: "Ask & Revise — your AI study buddy | REVISION" },
      {
        name: "description",
        content:
          "Your personal B.Com and BBA study buddy: explanations, swipeable flashcards, practice quizzes and audio revision built from your own syllabus material.",
      },
      { property: "og:title", content: "Ask & Revise — your AI study buddy | REVISION" },
      {
        property: "og:description",
        content: "Explanations, flashcards, quizzes and audio revision for your semester.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AiHelp,
});

type Mode = "explain" | "flashcards" | "quiz" | "audio-script";

const MODES: { id: Mode; label: string; icon: typeof BookOpen }[] = [
  { id: "explain", label: "Explain", icon: BookOpen },
  { id: "flashcards", label: "Flashcards", icon: Layers },
  { id: "quiz", label: "Quiz", icon: ListChecks },
  { id: "audio-script", label: "Audio", icon: Headphones },
];

const ABILITIES: { icon: typeof BookOpen; title: string; body: string; mode: Mode }[] = [
  {
    icon: BrainCircuit,
    title: "Ask questions",
    body: "Instant, syllabus-based answers",
    mode: "explain",
  },
  { icon: Layers, title: "Flashcards", body: "Swipe to revise quickly", mode: "flashcards" },
  { icon: ListChecks, title: "Practice questions", body: "Test what you remember", mode: "quiz" },
  { icon: Wand2, title: "Simplify topics", body: "In easy-to-follow language", mode: "explain" },
  { icon: Trophy, title: "Exam tips", body: "Important points first", mode: "explain" },
  {
    icon: Headphones,
    title: "Listen anywhere",
    body: "Audio revision on the go",
    mode: "audio-script",
  },
];

type QuizItem = { question: string; options: string[]; correct: string; reason: string };

function parseCards(text: string): Flashcard[] {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const cards: Flashcard[] = [];

  for (const l of lines) {
    if (l.includes("::")) {
      const [q, ...rest] = l.split("::");
      const cleanQ = (q ?? "")
        .replace(/^(\d+[.)]|[-*•])\s*/, "")
        .replace(/^\*\*|\*\*$/g, "")
        .trim();
      const cleanA = rest
        .join("::")
        .replace(/^\*\*|\*\*$/g, "")
        .trim();
      if (cleanQ && cleanA) {
        cards.push({ question: cleanQ, answer: cleanA });
        continue;
      }
    }
    // Support "Q: ... A: ..."
    const qaMatch = l.match(/^(?:Q|Question)\s*:\s*(.+?)\s*(?:A|Answer)\s*:\s*(.+)$/i);
    if (qaMatch && qaMatch[1] && qaMatch[2]) {
      cards.push({ question: qaMatch[1].trim(), answer: qaMatch[2].trim() });
      continue;
    }
    // Support "Term - Definition"
    if (l.includes(" - ") || l.includes(" — ")) {
      const [term, ...def] = l.split(/\s*[-—]\s*/);
      const cleanTerm = (term ?? "")
        .replace(/^(\d+[.)]|[-*•])\s*/, "")
        .replace(/^\*\*|\*\*$/g, "")
        .trim();
      const cleanDef = def.join(" - ").trim();
      if (cleanTerm && cleanDef && cleanTerm.length < 60) {
        cards.push({ question: cleanTerm, answer: cleanDef });
      }
    }
  }

  // Fallback: if no delimiter matched but text exists, generate flashcards from sentences
  if (cards.length === 0 && text.trim()) {
    const segments = text
      .split(/(?<=[.?!])\s+/)
      .map((s) => s.replace(/^[-*•\d.\s]+/, "").trim())
      .filter((s) => s.length > 25 && s.length < 220);
    for (let i = 0; i < Math.min(6, segments.length); i++) {
      const s = segments[i];
      if (s) {
        cards.push({
          question: `Key Exam Point ${i + 1}`,
          answer: s,
        });
      }
    }
  }

  return cards;
}

function parseQuiz(text: string): QuizItem[] {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const items: QuizItem[] = [];

  for (const l of lines) {
    if (l.split("::").length >= 3) {
      const parts = l.split("::").map((p) => p.trim());
      const cleanQ = (parts[0] ?? "")
        .replace(/^(\d+[.)]|[-*•])\s*/, "")
        .replace(/^\*\*|\*\*$/g, "")
        .trim();
      const opts = (parts[1] ?? "")
        .split("|")
        .map((o) => o.replace(/^[A-D][.)]\s*/i, "").trim())
        .filter(Boolean);
      if (cleanQ && opts.length >= 2) {
        items.push({
          question: cleanQ,
          options: opts,
          correct: (parts[2] ?? "A").trim().slice(0, 1).toUpperCase(),
          reason: parts[3] ? parts[3].trim() : "Key syllabus revision point.",
        });
      }
    }
  }
  return items;
}

function AiHelp() {
  const router = useRouter();
  const { program, semester } = useAppState();
  const {
    topic: initialTopic,
    unitId,
    mode: initialMode,
    subjectId: initialSubject,
  } = Route.useSearch();
  const { isPremium, limits } = useEntitlements();
  const [topic, setTopic] = useState(initialTopic ?? "");
  const [mode, setMode] = useState<Mode>(initialMode ?? "explain");
  const [answer, setAnswer] = useState("");
  const [answerMode, setAnswerMode] = useState<Mode>("explain");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [subjectId, setSubjectId] = useState<string>(initialSubject ?? "");
  const [picked, setPicked] = useState<Record<number, string>>({});
  const [audioState, setAudioState] = useState<"idle" | "loading" | "playing">("idle");
  const [audioError, setAudioError] = useState<string | null>(null);
  const [decks, setDecks] = useState<SavedDeck[]>([]);
  const [openDeck, setOpenDeck] = useState<SavedDeck | null>(null);
  const [savedNote, setSavedNote] = useState(false);
  const controller = useRef<AbortController | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setDecks(readDecks()), []);

  const mySubjects = useMemo(() => subjectsFor(program, semester), [program, semester]);
  const unitFromLink = useMemo(() => {
    if (!unitId) return null;
    const found = getUnit(unitId);
    if (found) return { subject: found.subject, unit: found.unit };
    return null;
  }, [unitId]);

  useEffect(() => {
    if (unitFromLink) setSubjectId(unitFromLink.subject.id);
  }, [unitFromLink]);

  useEffect(
    () => () => {
      audioRef.current?.pause();
      controller.current?.abort();
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    },
    [],
  );

  const cards = answerMode === "flashcards" ? parseCards(answer) : [];
  const quiz = answerMode === "quiz" ? parseQuiz(answer) : [];

  const ask = async (value: string, asMode: Mode) => {
    const question = value.trim();
    if (question.length < 3 || loading) return;

    if (readAiUsage() >= limits.aiQuestionsPerDay) {
      setError(
        isPremium
          ? `You have used today's ${limits.aiQuestionsPerDay} questions. Please come back tomorrow.`
          : `Free members can ask ${limits.aiQuestionsPerDay} questions a day. Unlock Premium for more, or come back tomorrow.`,
      );
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
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setAudioState("idle");
    controller.current?.abort();
    const ac = new AbortController();
    controller.current = ac;

    const subject = subjectId ? getSubject(subjectId) : undefined;
    window.setTimeout(
      () => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      60,
    );

    try {
      const res = await fetch("/api/study-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: question,
          mode: asMode,
          program,
          semester,
          subjectId: subjectId || undefined,
          subjectName: subject?.name,
          unitId: unitFromLink?.unit.id,
          unitName: unitFromLink
            ? `Unit ${unitFromLink.unit.unit_number}: ${unitFromLink.unit.title}`
            : undefined,
        }),
        signal: ac.signal,
      });

      let text = "";
      if (res.ok) {
        if (res.body && typeof res.body.getReader === "function") {
          try {
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              text += decoder.decode(value, { stream: true });
              setAnswer(text);
            }
          } catch {
            /* stream reading failed, fall back to text() */
          }
        }
        if (!text.trim()) {
          try {
            text = await res.text();
            if (text.trim()) setAnswer(text);
          } catch {
            /* ignore */
          }
        }
      }

      if (!text.trim()) {
        const fallback = generateSyllabusContent({
          topic: question,
          mode: asMode,
          programLabel: programLabel(program),
          semester: semester ?? 1,
          subjectName: subject?.name,
          unitName: unitFromLink
            ? `Unit ${unitFromLink.unit.unit_number}: ${unitFromLink.unit.title}`
            : undefined,
        });
        setAnswer(fallback);
      }
    } catch (err) {
      if ((err as Error)?.name !== "AbortError") {
        console.warn("Study API fallback triggered:", err);
        const fallback = generateSyllabusContent({
          topic: question,
          mode: asMode,
          programLabel: programLabel(program),
          semester: semester ?? 1,
          subjectName: subject?.name,
          unitName: unitFromLink
            ? `Unit ${unitFromLink.unit.unit_number}: ${unitFromLink.unit.title}`
            : undefined,
        });
        setAnswer(fallback);
      }
    } finally {
      setLoading(false);
    }
  };

  const speakOnDevice = (script: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
    window.speechSynthesis.cancel();
    setTimeout(() => {
      const u = new SpeechSynthesisUtterance(script);
      u.lang = "en-IN";
      u.rate = 0.98;
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
      if (typeof window !== "undefined" && "speechSynthesis" in window)
        window.speechSynthesis.cancel();
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
        body: JSON.stringify({ text: script }),
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
        setAudioError(
          "Audio isn't supported on this device. You can still read the summary above.",
        );
        setAudioState("idle");
      }
    }
  };

  const onSaveDeck = () => {
    if (cards.length === 0) return;
    const subject = subjectId ? getSubject(subjectId)?.name : undefined;
    saveDeck({
      title: topic.trim().slice(0, 80) || "Flashcards",
      ...(subject ? { subject } : {}),
      cards,
    });
    setDecks(readDecks());
    setSavedNote(true);
  };

  const suggestions = mySubjects.slice(0, 5).map((s) => s.name);
  const contextLine = [
    program ? programLabel(program) : null,
    semester ? `Semester ${semester}` : null,
    subjectId ? getSubject(subjectId)?.name : null,
    unitFromLink ? `Unit ${unitFromLink.unit.unit_number}` : null,
  ]
    .filter(Boolean)
    .join(" • ");

  const ctaLabel =
    mode === "flashcards"
      ? "Make flashcards"
      : mode === "quiz"
        ? "Give me a quiz"
        : mode === "audio-script"
          ? "Make an audio revision"
          : "Start explaining";

  return (
    <>
      {/* Hero */}
      <header className="brand-header relative overflow-hidden px-4 pb-8 pt-[max(0.85rem,env(safe-area-inset-top))]">
        <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 left-0 size-44 rounded-full bg-accent/20 blur-2xl" />
        <div className="relative mx-auto max-w-xl">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (window.history.length > 1) router.history.back();
                else void router.navigate({ to: "/dashboard" });
              }}
              aria-label="Go back"
              className="press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15"
            >
              <ChevronLeft className="size-[22px]" />
            </button>
            <img src={logo} alt="REVISION" className="h-9 w-9 rounded-lg object-cover" />
            <div className="min-w-0">
              <p className="text-[15px] font-extrabold leading-none tracking-wide text-white">
                REVISION
              </p>
              <p className="text-[11.5px] text-white/70">Learn. Revise. Succeed.</p>
            </div>
            <Link
              to="/dashboard"
              aria-label="Go to home"
              className="press ml-auto grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15"
            >
              <Home className="size-[19px]" />
            </Link>
          </div>

          <h1 className="mt-6 text-[32px] font-extrabold leading-tight text-white">
            Ask &amp; <span className="text-accent-light">Revise</span>
          </h1>
          <p className="mt-1 text-[14.5px] font-bold text-white/90">Your personal AI study buddy</p>
          <p className="mt-2 max-w-[19rem] text-[13px] leading-relaxed text-white/75">
            Instant explanations, summaries, swipeable flashcards and exam tips — anytime, anywhere.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              programLabel(program) || "BBA",
              semester ? `Semester ${semester}` : "All semesters",
              "Success",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/15 px-3 py-1 text-[11.5px] font-bold text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      <Screen nav className="-mt-5">
        {/* Ask box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void ask(topic, mode);
          }}
          className="surface-card card-rise p-3.5"
        >
          <p className="text-[12px] font-semibold text-muted-foreground">
            {contextLine || "Pick your program to personalise answers"}
          </p>

          <div className="mt-2.5 grid grid-cols-4 gap-2">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                aria-pressed={mode === m.id}
                className={cn(
                  "press flex flex-col items-center gap-1 rounded-xl border py-2.5 text-[11.5px] font-semibold",
                  mode === m.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground",
                )}
              >
                <m.icon className="size-[18px]" />
                {m.label}
              </button>
            ))}
          </div>

          <select
            aria-label="Subject"
            value={subjectId}
            onChange={(e) => setSubjectId(e.target.value)}
            className="mt-3 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-[13.5px] outline-none focus:border-primary"
          >
            <option value="">Any subject in my semester</option>
            {mySubjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <textarea
            aria-label="Your topic or question"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            rows={3}
            maxLength={400}
            placeholder="e.g. Explain Trial Balance and its errors"
            className="mt-2.5 w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-[14px] outline-none focus:border-primary"
          />
          <Button
            type="submit"
            variant="ink"
            size="lg"
            disabled={loading || topic.trim().length < 3}
            className="mt-3 w-full"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Preparing your revision…
              </>
            ) : (
              <>
                {ctaLabel} <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </form>

        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <Chip
              key={s}
              active={false}
              onClick={() => {
                setTopic(s);
                void ask(s, mode);
              }}
            >
              {s}
            </Chip>
          ))}
        </div>

        <div ref={resultRef} />

        {error && (
          <p className="mt-4 rounded-xl border border-border bg-card px-3.5 py-3 text-[13.5px] text-destructive">
            {error}
          </p>
        )}

        {/* Loading skeletons */}
        {loading && !answer && (
          <div className="mt-4 grid gap-2.5">
            <SkeletonCard lines={4} />
            <SkeletonCard lines={2} />
            <p className="text-center text-[12.5px] text-muted-foreground">
              Reading your REVISION material…
            </p>
          </div>
        )}

        {/* Flashcards */}
        {answerMode === "flashcards" && cards.length > 0 && !openDeck && (
          <div className="mt-4">
            <FlashcardDeck cards={cards} />
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onSaveDeck}
                className="press flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13.5px] font-bold text-ink-foreground"
              >
                {savedNote ? <Check className="size-4" /> : <Bookmark className="size-4" />}
                {savedNote ? "Saved for offline" : "Save this deck"}
              </button>
              <button
                type="button"
                onClick={() => void ask(topic, "flashcards")}
                className="press flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13.5px] font-semibold"
              >
                <RotateCcw className="size-4" /> New set
              </button>
            </div>
          </div>
        )}

        {/* Quiz */}
        {answerMode === "quiz" && quiz.length > 0 && (
          <div className="mt-4 grid gap-2.5">
            <p className="text-[12.5px] font-semibold text-muted-foreground">
              {quiz.length} practice questions
            </p>
            {quiz.map((q, i) => {
              const chosen = picked[i];
              const letters = ["A", "B", "C", "D"];
              return (
                <div key={i} className="surface-card card-rise px-3.5 py-3 min-w-0 w-full max-w-full overflow-hidden">
                  <div className="text-[14px] font-bold break-words">
                    <RichMathText text={q.question} />
                  </div>
                  <div className="mt-2 grid gap-1.5">
                    {q.options.map((opt, oi) => {
                      const letter = letters[oi] ?? "";
                      const isCorrect = q.correct.toUpperCase().startsWith(letter);
                      const isChosen = chosen === letter;
                      return (
                        <button
                          key={oi}
                          type="button"
                          onClick={() => setPicked((p) => ({ ...p, [i]: letter }))}
                          className={cn(
                            "press rounded-lg border px-3 py-2 text-left text-[13.5px] break-words flex items-start gap-1.5",
                            !chosen
                              ? "border-border"
                              : isCorrect
                                ? "border-success bg-success/10 font-semibold text-success"
                                : isChosen
                                  ? "border-destructive text-destructive"
                                  : "border-border text-muted-foreground",
                          )}
                        >
                          <span className="font-bold shrink-0">{letter}.</span>
                          <span className="min-w-0 flex-1 break-words">
                            <RichMathText text={opt} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {chosen && q.reason && (
                    <div className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground break-words">
                      <RichMathText text={q.reason} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Plain answer */}
        {answer &&
          ((answerMode !== "flashcards" && quiz.length === 0) ||
            (answerMode === "flashcards" && cards.length === 0)) && (
            <article className="surface-card card-rise mt-4 px-3.5 py-3.5 text-[14px] leading-relaxed min-w-0 w-full max-w-full overflow-hidden space-y-2.5">
              {answer.split(/\n\n+/).map((para, pIdx) => (
                <div key={pIdx} className="leading-relaxed break-words">
                  <RichMathText text={para} />
                </div>
              ))}
            </article>
          )}

        {answer && !loading && (
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void playAudio()}
              className="press flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13.5px] font-bold text-ink-foreground"
            >
              {audioState === "loading" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : audioState === "playing" ? (
                <Pause className="size-4" />
              ) : (
                <Play className="size-4" />
              )}
              {audioState === "playing" ? "Pause" : "Listen to this"}
            </button>
            <button
              type="button"
              onClick={() => void ask(topic, answerMode)}
              className="press flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13.5px] font-semibold"
            >
              <RotateCcw className="size-4" /> Try again
            </button>
            {answerMode !== "flashcards" && (
              <button
                type="button"
                onClick={() => {
                  setMode("flashcards");
                  void ask(topic, "flashcards");
                }}
                className="press flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13.5px] font-semibold"
              >
                <Layers className="size-4" /> Flashcards
              </button>
            )}
          </div>
        )}

        {audioError && <p className="mt-2 text-[12.5px] text-destructive">{audioError}</p>}

        {/* Saved offline decks */}
        {decks.length > 0 && (
          <section className="mt-6">
            <h2 className="mb-2.5 text-[15px] font-bold">Saved flashcards (works offline)</h2>
            {openDeck ? (
              <div className="surface-card p-3.5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <p className="truncate text-[14px] font-bold">{openDeck.title}</p>
                  <button
                    type="button"
                    onClick={() => setOpenDeck(null)}
                    className="press rounded-full border border-border px-3 py-1.5 text-[12.5px] font-semibold"
                  >
                    Close
                  </button>
                </div>
                <FlashcardDeck cards={openDeck.cards} />
              </div>
            ) : (
              <div className="grid gap-2.5">
                {decks.map((d) => (
                  <div key={d.id} className="surface-card flex items-center gap-3 px-3.5 py-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary">
                      <Layers className="size-[19px]" />
                    </span>
                    <button
                      type="button"
                      onClick={() => setOpenDeck(d)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <p className="truncate text-[14px] font-semibold">{d.title}</p>
                      <p className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                        <Clock className="size-3" />
                        {d.cards.length} cards
                        {d.subject ? ` • ${d.subject}` : ""}
                      </p>
                    </button>
                    <button
                      type="button"
                      aria-label={`Delete ${d.title}`}
                      onClick={() => {
                        deleteDeck(d.id);
                        setDecks(readDecks());
                        setOpenDeck(null);
                      }}
                      className="press grid size-9 place-items-center rounded-full text-muted-foreground"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* What can you do */}
        <section className="mt-6">
          <h2 className="mb-2.5 text-[15px] font-bold">What can you do?</h2>
          <div className="grid grid-cols-3 gap-2.5">
            {ABILITIES.map((a) => (
              <button
                key={a.title}
                type="button"
                onClick={() => setMode(a.mode)}
                className="surface-card press flex flex-col items-start gap-1.5 px-2.5 py-3 text-left"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-primary-soft text-primary">
                  <a.icon className="size-[17px]" />
                </span>
                <span className="text-[12.5px] font-bold leading-tight">{a.title}</span>
                <span className="text-[10.5px] leading-tight text-muted-foreground">{a.body}</span>
              </button>
            ))}
          </div>
        </section>

        <p className="mt-5 text-center text-[12px] text-muted-foreground">
          Answers use your own REVISION study material first — always cross-check with your
          syllabus.
        </p>
      </Screen>
      <BottomNav />
    </>
  );
}
