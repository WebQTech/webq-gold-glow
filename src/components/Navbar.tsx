import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Technologies", href: "/technologies" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

const navItemBaseClass =
  "text-sm font-semibold uppercase tracking-wider whitespace-nowrap no-underline hover:no-underline";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { handleAnchorClick } = useSmoothScroll();

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

      <div className="sticky top-0 z-50">
        {/* Top Utility Bar */}
        <div className="hidden lg:block bg-navy/60 border-b border-navy/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-end h-9 gap-1">
              <Link
                to="/careers"
                className="text-xs font-medium text-cream/70 hover:text-cream transition-colors px-3 py-1 flex items-center gap-1 no-underline"
              >
                Careers <ChevronDown size={12} />
              </Link>
              <Link
                to="/news"
                className="text-xs font-medium text-cream/70 hover:text-cream transition-colors px-3 py-1 flex items-center gap-1 no-underline"
              >
                News <ChevronDown size={12} />
              </Link>
              <button className="text-xs font-medium text-cream/70 hover:text-cream transition-colors px-3 py-1 flex items-center gap-1">
                <Globe size={13} />
                US-EN <ChevronDown size={12} />
              </button>
              <div className="ml-1">
                <AccessibilityPanel />
              </div>
            </div>
          </div>
        </div>

        <nav className="bg-navy shadow-lg border-b border-navy/80">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between flex-nowrap h-16 lg:h-20 gap-4">
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img
                src={logo}
                alt="WebQ Technologies"
                className="h-14 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-montserrat text-xl font-bold text-cream tracking-tight leading-tight whitespace-nowrap">
                  WebQ <span className="text-primary">Technologies</span>
                </span>
                <span className="text-xs text-cream/60 font-medium tracking-wide whitespace-nowrap">
                  Innovate. Transform. Succeed.
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-10 min-w-0">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);
                const isHash = link.href.startsWith("/#");
                const linkClass = `${navItemBaseClass} ${
                  active ? "text-primary-light" : "text-cream/80 hover:text-primary-light"
                }`;

                if (isHash) {
                  const hash = link.href.replace("/", "");
                  return (
                    <a
                      key={link.label}
                      href={isHomePage ? hash : link.href}
                      onClick={isHomePage ? handleAnchorClick(hash) : undefined}
                      className={`${navItemBaseClass} text-foreground/70 hover:text-primary`}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link key={link.label} to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden xl:flex items-center shrink-0">
              <Link
                to="/contact"
                className="btn-primary text-sm px-6 py-2.5 uppercase font-semibold tracking-wider no-underline hover:no-underline"
              >
                Contact Us
              </Link>
            </div>

            <button
              className="lg:hidden text-cream p-2 shrink-0"
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
                      className="block py-3 text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary no-underline hover:no-underline border-b border-border/30"
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
                    className={`block py-3 text-sm font-semibold uppercase tracking-wider no-underline hover:no-underline border-b border-border/30 ${
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
                className="block mt-4 btn-primary text-center text-sm uppercase font-semibold tracking-wider no-underline hover:no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
      </div>
    </>
  );
};
