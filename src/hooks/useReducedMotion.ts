import { useState, useEffect } from "react";

const STORAGE_KEY = "reduced-motion";

export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(reducedMotion));
  }, [reducedMotion]);

  const toggleReducedMotion = () => setReducedMotion((prev) => !prev);

  return { reducedMotion, toggleReducedMotion };
};
