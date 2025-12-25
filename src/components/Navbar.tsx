import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { servicesData, getAllCategories } from "@/data/servicesData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Group services by category
  const servicesByCategory = useMemo(() => {
    const categories = getAllCategories();
    return categories.map(category => ({
      category,
      services: servicesData.filter(s => s.category === category)
    }));
  }, []);

  const navLinks = [
    { label: "Industries", href: isHomePage ? "#industries" : "/#industries", isExternal: false },
    { label: "Insights", href: isHomePage ? "#insights" : "/#insights", isExternal: false },
    { label: "About", href: isHomePage ? "#about" : "/#about", isExternal: false },
  ];

  const topLinks = [
    { label: "Careers", href: "#careers" },
    { label: "News", href: "#news" },
    { label: "Investors", href: "#investors" },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-background border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-end gap-6 py-2">
            {topLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-foreground/60 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-1 text-xs text-foreground/60 cursor-pointer hover:text-primary transition-colors">
              <Globe className="w-3 h-3" />
              <span>US-EN</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background shadow-sm" 
            : "bg-background"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-sora text-xl font-bold text-foreground">
                webq<span className="text-primary">technologies</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Industries link */}
              <a
                href={isHomePage ? "#industries" : "/#industries"}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                Industries
              </a>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 outline-none">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-72 max-h-[70vh] overflow-y-auto bg-background border border-border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="font-medium text-primary">
                      View All Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {servicesByCategory.map(({ category, services }) => (
                    <div key={category}>
                      <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                        {category}
                      </DropdownMenuLabel>
                      {services.map((service) => {
                        const ServiceIcon = service.icon;
                        return (
                          <DropdownMenuItem key={service.slug} asChild>
                            <Link
                              to={`/services/${service.slug}`}
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <ServiceIcon className="w-4 h-4 text-primary" />
                              <span>{service.name}</span>
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                      <DropdownMenuSeparator />
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Other nav links */}
              {navLinks.map((link) => (
                link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                to={isHomePage ? "#contact" : "/#contact"} 
                className="btn-primary text-sm px-6 py-2.5"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4 max-h-[70vh] overflow-y-auto">
                {/* Industries */}
                <a
                  href={isHomePage ? "#industries" : "/#industries"}
                  className="block py-3 text-foreground/80 hover:text-primary transition-colors border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Industries
                </a>

                {/* Services with expandable categories */}
                <div className="border-b border-border/50">
                  <Link
                    to="/services"
                    className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="pb-3 space-y-2">
                    {servicesByCategory.map(({ category, services }) => (
                      <div key={category} className="pl-4">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider block py-1">
                          {category}
                        </span>
                        {services.map((service) => {
                          const ServiceIcon = service.icon;
                          return (
                            <Link
                              key={service.slug}
                              to={`/services/${service.slug}`}
                              className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <ServiceIcon className="w-4 h-4 text-primary" />
                              {service.name}
                            </Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other nav links */}
                {navLinks.map((link) => (
                  link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block py-3 text-foreground/80 hover:text-primary transition-colors border-b border-border/50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block py-3 text-foreground/80 hover:text-primary transition-colors border-b border-border/50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                ))}
                <div className="pt-4 space-y-3">
                  {topLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-sm text-foreground/60 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <Link
                  to={isHomePage ? "#contact" : "/#contact"}
                  className="block mt-4 btn-primary text-center text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
