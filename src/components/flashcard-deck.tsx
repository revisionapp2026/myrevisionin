/**
 * Swipeable, flippable flashcard deck.
 * Tap a card to flip it, drag or swipe left/right to move through the deck.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { Check, RotateCw, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type Flashcard = { question: string; answer: string };

const SWIPE_THRESHOLD = 90;

export function FlashcardDeck({ cards }: { cards: Flashcard[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dx, setDx] = useState(0);
  const [leaving, setLeaving] = useState<"left" | "right" | null>(null);
  const [known, setKnown] = useState<Record<number, boolean>>({});
  const start = useRef<number | null>(null);
  const moved = useRef(false);

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
    setKnown({});
    setLeaving(null);
    setDx(0);
  }, [cards]);

  const advance = useCallback(
    (dir: "left" | "right") => {
      setLeaving(dir);
      setDx(dir === "left" ? -520 : 520);
      window.setTimeout(() => {
        setKnown((k) => (dir === "right" ? { ...k, [index]: true } : k));
        setIndex((i) => Math.min(i + 1, cards.length));
        setFlipped(false);
        setDx(0);
        setLeaving(null);
      }, 220);
    },
    [index, cards.length],
  );

  const onDown = (e: React.PointerEvent) => {
    if (leaving) return;
    start.current = e.clientX;
    moved.current = false;
  };
  const onMove = (e: React.PointerEvent) => {
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

  if (done) {
    return (
      <div className="surface-card card-rise grid place-items-center gap-3 px-5 py-9 text-center">
        <span className="grid size-12 place-items-center rounded-full bg-success/15 text-success">
          <Check className="size-6" />
        </span>
        <p className="text-[16px] font-bold">Deck finished</p>
        <p className="text-[13.5px] text-muted-foreground">
          You marked {knownCount} of {cards.length} as known.
        </p>
        <button
          type="button"
          onClick={restart}
          className="press mt-1 flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-bold text-ink-foreground"
        >
          <RotateCw className="size-4" /> Revise again
        </button>
      </div>
    );
  }

  const card = cards[index]!;
  const next = cards[index + 1];
  const rotate = Math.max(-12, Math.min(12, dx / 12));

  return (
    <div>
      <div className="mb-2.5 flex items-center justify-between text-[12.5px] font-semibold text-muted-foreground">
        <span>
          Card {index + 1} of {cards.length}
        </span>
        <span>Swipe → known · ← revise later</span>
      </div>

      <div className="relative h-[232px] select-none" style={{ perspective: "1200px" }}>
        {next && (
          <div className="surface-card absolute inset-x-2 top-2 h-[216px] scale-[0.97] opacity-60" />
        )}

        <div
          role="button"
          tabIndex={0}
          aria-label={
            flipped ? "Answer, tap to see the question" : "Question, tap to see the answer"
          }
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFlipped((f) => !f);
            }
            if (e.key === "ArrowRight") advance("right");
            if (e.key === "ArrowLeft") advance("left");
          }}
          className="absolute inset-0 touch-pan-y"
          style={{
            transform: `translateX(${dx}px) rotate(${rotate}deg)`,
            transition:
              start.current === null ? "transform 220ms cubic-bezier(.2,.75,.25,1)" : "none",
            opacity: leaving ? 0 : 1,
          }}
        >
          <div
            className="flip-3d relative size-full"
            style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
          >
            <div className="surface-card backface-hidden absolute inset-0 flex flex-col justify-between px-4 py-4">
              <span className="text-[11px] font-bold uppercase tracking-wide text-primary">
                Question
              </span>
              <p className="text-[17px] font-bold leading-snug">{card.question}</p>
              <span className="text-[12px] text-muted-foreground">Tap to reveal the answer</span>
            </div>
            <div
              className="surface-card backface-hidden absolute inset-0 flex flex-col justify-between bg-primary px-4 py-4 text-primary-foreground"
              style={{ transform: "rotateY(180deg)" }}
            >
              <span className="text-[11px] font-bold uppercase tracking-wide opacity-80">
                Answer
              </span>
              <p className="text-[15px] font-semibold leading-relaxed">{card.answer}</p>
              <span className="text-[12px] opacity-75">Swipe to the next card</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => advance("left")}
          className="press grid size-11 place-items-center rounded-full border border-border bg-card text-destructive"
          aria-label="Revise later"
        >
          <X className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="press rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-bold text-ink-foreground"
        >
          Flip card
        </button>
        <button
          type="button"
          onClick={() => advance("right")}
          className="press grid size-11 place-items-center rounded-full border border-border bg-card text-success"
          aria-label="I know this"
        >
          <Check className="size-5" />
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1.5" aria-hidden="true">
        {cards.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-5 bg-primary" : known[i] ? "w-1.5 bg-success" : "w-1.5 bg-border",
            )}
          />
        ))}
      </div>
    </div>
  );
}
