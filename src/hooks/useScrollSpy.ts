import { useState, useEffect, useCallback } from "react";

interface Section {
  id: string;
  label: string;
}

export function useScrollSpy(sections: Section[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;

    // Find the section that's currently in view
    let currentSection: string | null = null;

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = section.id;
          break;
        }
      }
    }

    // If we're at the top of the page, no section is active
    if (window.scrollY < 50) {
      currentSection = null;
    }

    setActiveSection(currentSection);
  }, [sections, offset]);

  useEffect(() => {
    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isActive = useCallback(
    (sectionId: string) => activeSection === sectionId,
    [activeSection]
  );

  return { activeSection, isActive };
}
