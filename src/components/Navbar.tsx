import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { handleAnchorClick } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-sm" : "bg-background"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="WebQ Technologies"
                className="h-14 w-auto transition-all duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-montserrat text-xl font-bold text-foreground tracking-tight leading-tight">
                  WebQ <span className="text-primary">Technologies</span>
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wide">
                  Innovate. Transform. Succeed.
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);
                const isHash = link.href.startsWith("/#");

                if (isHash) {
                  const hash = link.href.replace("/", "");
                  return (
                    <a
                      key={link.label}
                      href={isHomePage ? hash : link.href}
                      onClick={isHomePage ? handleAnchorClick(hash) : undefined}
                      className="text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                      active ? "text-primary" : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="btn-primary text-sm px-6 py-2.5 uppercase font-semibold tracking-wider"
              >
                Contact Us
              </Link>
            </div>

            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-6 py-6 space-y-1">
              {navLinks.map((link) => {
                const isHash = link.href.startsWith("/#");
                if (isHash) {
                  const hash = link.href.replace("/", "");
                  return (
                    <a
                      key={link.label}
                      href={isHomePage ? hash : link.href}
                      onClick={(e) => {
                        if (isHomePage) handleAnchorClick(hash)(e);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block py-3 text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors border-b border-border/30"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-sm font-semibold uppercase tracking-wider transition-colors border-b border-border/30 ${
                      isActiveLink(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-border/50 mt-4 flex items-center justify-between">
                <span className="text-sm text-foreground/60">Accessibility:</span>
                <AccessibilityPanel />
              </div>

              <Link
                to="/contact"
                className="block mt-4 btn-primary text-center text-sm uppercase font-semibold tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
