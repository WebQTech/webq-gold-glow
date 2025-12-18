import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Solutions", href: "#services" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#cta" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-2xl font-semibold tracking-wide text-foreground">WEBQ</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#cta"
              className="px-6 py-2.5 text-sm font-medium border border-foreground/30 rounded-md text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-border pt-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cta"
                className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
