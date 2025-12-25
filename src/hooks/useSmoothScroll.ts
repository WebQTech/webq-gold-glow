import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useSmoothScroll() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleAnchorClick = useCallback(
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Check if it's an anchor link
      if (href.startsWith("#")) {
        e.preventDefault();
        const elementId = href.slice(1);
        scrollToElement(elementId);
        // Update URL without navigation
        window.history.pushState(null, "", href);
      } else if (href.startsWith("/#")) {
        e.preventDefault();
        const elementId = href.slice(2);
        
        // If we're on the home page, just scroll
        if (location.pathname === "/") {
          scrollToElement(elementId);
          window.history.pushState(null, "", href);
        } else {
          // Navigate to home page first, then scroll
          navigate("/");
          // Wait for navigation and DOM update
          setTimeout(() => {
            scrollToElement(elementId);
          }, 100);
        }
      }
    },
    [navigate, location.pathname, scrollToElement]
  );

  return { handleAnchorClick, scrollToElement };
}
