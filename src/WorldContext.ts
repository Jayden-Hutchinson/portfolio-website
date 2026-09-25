import { createContext, useContext } from "react";
import type { Vector2 } from "./types";

type WorldContextType = {
  moveTo: (position: Vector2) => void;
};

export const WorldContext = createContext<WorldContextType | null>(null);

export function useWorld() {
  const context = useContext(WorldContext);

  if (!context) {
    throw new Error("useViewport must be used inside Viewport");
  }

  return context;
}
