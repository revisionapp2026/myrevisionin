/**
 * Flashcard decks the student saves. Stored on the device so they open
 * instantly and keep working with no internet.
 */
import type { Flashcard } from "@/components/flashcard-deck";

export type SavedDeck = {
  id: string;
  title: string;
  subject?: string;
  savedAt: number;
  cards: Flashcard[];
};

const KEY = "revision-saved-decks";
const MAX_DECKS = 40;

export function readDecks(): SavedDeck[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (d): d is SavedDeck => !!d && typeof d === "object" && Array.isArray((d as SavedDeck).cards),
    );
  } catch {
    return [];
  }
}

function write(decks: SavedDeck[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(decks.slice(0, MAX_DECKS)));
  } catch {
    /* storage full — saving a deck is best effort */
  }
}

export function saveDeck(deck: Omit<SavedDeck, "id" | "savedAt">): SavedDeck {
  const entry: SavedDeck = {
    ...deck,
    id: `deck-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    savedAt: Date.now(),
  };
  write([entry, ...readDecks()]);
  return entry;
}

export function deleteDeck(id: string) {
  write(readDecks().filter((d) => d.id !== id));
}
