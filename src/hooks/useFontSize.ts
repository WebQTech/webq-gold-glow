import { useState, useEffect, useCallback } from "react";

export type FontSize = "small" | "medium" | "large" | "xlarge";

const STORAGE_KEY = "font-size-preference";

const fontSizeScales: Record<FontSize, string> = {
  small: "87.5%",   // 14px base
  medium: "100%",   // 16px base (default)
  large: "112.5%",  // 18px base
  xlarge: "125%",   // 20px base
};

export function useFontSize() {
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    if (typeof window === "undefined") return "medium";
    const stored = localStorage.getItem(STORAGE_KEY) as FontSize | null;
    return stored && fontSizeScales[stored] ? stored : "medium";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = fontSizeScales[fontSize];
    localStorage.setItem(STORAGE_KEY, fontSize);
  }, [fontSize]);

  const increaseFontSize = useCallback(() => {
    setFontSize((current) => {
      const sizes: FontSize[] = ["small", "medium", "large", "xlarge"];
      const currentIndex = sizes.indexOf(current);
      return currentIndex < sizes.length - 1 ? sizes[currentIndex + 1] : current;
    });
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize((current) => {
      const sizes: FontSize[] = ["small", "medium", "large", "xlarge"];
      const currentIndex = sizes.indexOf(current);
      return currentIndex > 0 ? sizes[currentIndex - 1] : current;
    });
  }, []);

  const resetFontSize = useCallback(() => {
    setFontSize("medium");
  }, []);

  return {
    fontSize,
    setFontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
  };
}
