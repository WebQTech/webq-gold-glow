import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, Building2, Users, Award, MapPin, Handshake, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { servicesData, getAllCategories } from "@/data/servicesData";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Section definitions for scroll spy
const navSections = [
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isServicesPage = location.pathname.startsWith("/services");
  const { handleAnchorClick } = useSmoothScroll();
  const { isActive } = useScrollSpy(navSections, 150);

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

  // About dropdown items
  const aboutItems = [
    { label: "Our Story", href: "/about", icon: Building2 },
    { label: "Leadership Team", href: "/about", icon: Users },
    { label: "Our Values", href: "/about", icon: Award },
    { label: "Careers", href: "/careers", icon: Briefcase },
    { label: "Global Presence", href: "/about", icon: MapPin },
    { label: "Partners", href: "/about", icon: Handshake },
  ];

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      >
        Skip to main content
      </a>

      {/* Top utility bar */}
      <div className="hidden lg:block bg-background border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-end gap-4 py-2">
            <div className="flex items-center gap-1 text-xs text-foreground/60 cursor-pointer hover:text-primary transition-colors">
              <Globe className="w-3 h-3" />
              <span>US-EN</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="border-l border-border/50 pl-4">
              <AccessibilityPanel />
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
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="WebQ Technologies" className="h-14 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)]" />
              <div className="flex flex-col">
                <span className="font-playfair text-xl font-semibold text-foreground tracking-normal leading-tight">
                  WebQ <span className="text-primary">Technologies</span>
                </span>
                <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">Innovate · Transform · Succeed</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <DropdownMenu>
              </DropdownMenu>

              {/* Industries Link */}
              <Link
                to="/industries"
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  location.pathname === "/industries"
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                Industries
                {location.pathname === "/industries" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm relative ${
                    isServicesPage
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  aria-label="Services menu"
                >
                  Services
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {isServicesPage && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-72 max-h-[70vh] overflow-y-auto bg-background border border-border shadow-lg z-50"
                  sideOffset={8}
                >
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/services" 
                      className="font-medium text-primary focus:bg-primary/10 focus:text-primary"
                    >
                      View All Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {servicesByCategory.map(({ category, services }) => (
                    <div key={category} role="group" aria-label={category}>
                      <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                        {category}
                      </DropdownMenuLabel>
                      {services.map((service) => {
                        const ServiceIcon = service.icon;
                        return (
                          <DropdownMenuItem key={service.slug} asChild>
                            <Link
                              to={`/services/${service.slug}`}
                              className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary"
                            >
                              <ServiceIcon className="w-4 h-4 text-primary" aria-hidden="true" />
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

              {/* About Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm relative ${
                    location.pathname === "/about"
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  aria-label="About menu"
                >
                  About
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {location.pathname === "/about" && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-56 bg-background border border-border shadow-lg z-50"
                  sideOffset={8}
                >
                  {aboutItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link 
                        to={item.href}
                        className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary"
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        <span>{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={handleAnchorClick(isHomePage ? "#contact" : "/#contact")}
                className={`btn-primary text-sm px-6 py-2.5 ${
                  isHomePage && isActive("contact") ? "ring-2 ring-primary/50 ring-offset-2 ring-offset-background" : ""
                }`}
              >
                Contact Us
              </a>
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

                {/* Industries Link */}
                <div className="border-b border-border/50">
                  <Link
                    to="/industries"
                    className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Industries
                  </Link>
                </div>

                {/* About Section */}
                <div className="border-b border-border/50">
                  <Link
                    to="/about"
                    className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <div className="pb-3 pl-4 space-y-1">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">Accessibility:</span>
                    <AccessibilityPanel />
                  </div>
                </div>
                <a
                  href={isHomePage ? "#contact" : "/#contact"}
                  className="block mt-4 btn-primary text-center text-sm"
                  onClick={(e) => {
                    handleAnchorClick(isHomePage ? "#contact" : "/#contact")(e);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
