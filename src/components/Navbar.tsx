import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, Layers, Users, Mail, LogIn } from "lucide-react";

const navIcons = [
  { icon: Home, href: "#", label: "Home" },
  { icon: Layers, href: "#services", label: "Services" },
  { icon: Users, href: "#about", label: "About" },
  { icon: Mail, href: "#contact", label: "Contact" },
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
        isScrolled ? "bg-background/90 backdrop-blur-xl" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-medium tracking-tight text-foreground">W</span>
          </a>

          {/* Desktop Nav Icons - Center */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border">
            {navIcons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                title={item.label}
              >
                <item.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border rounded-full text-foreground hover:bg-secondary transition-all duration-300"
            >
              <LogIn className="w-4 h-4" />
              Sign In
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
              {navIcons.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
