import { createContext, type Context } from "react";

// Stashed on globalThis so hot reloads (or a duplicated module instance) reuse the
// same context object instead of creating a second one, which would make consumers
// read `null` and blank the screen.
const globalStore = globalThis as typeof globalThis & {
  __revisionAppStateContext?: Context<unknown>;
};

export const AppStateContext: Context<unknown> =
  globalStore.__revisionAppStateContext ??
  (globalStore.__revisionAppStateContext = createContext<unknown>(null));
