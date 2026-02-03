import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, Brain, RefreshCw, CreditCard, Landmark, Heart, GraduationCap, ShoppingCart, Factory, Truck, Bolt, Atom, Lightbulb, FileText, TrendingUp, Users, Building2, Briefcase, Award, Newspaper, BarChart3, DollarSign, Target, BookOpen, Mic, Calendar, UserCheck, MapPin, Gift, Handshake } from "lucide-react";
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
  { id: "industries", label: "Industries" },
  { id: "insights", label: "Insights" },
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

  // Insights dropdown items
  const insightsItems = [
    { label: "Industry Reports", href: "/insights", icon: FileText },
    { label: "Case Studies", href: "/insights", icon: BookOpen },
    { label: "Whitepapers", href: "/insights", icon: Lightbulb },
    { label: "Tech Trends", href: "/insights", icon: TrendingUp },
    { label: "Webinars", href: "/insights", icon: Mic },
    { label: "Events", href: "/insights", icon: Calendar },
  ];

  // About dropdown items
  const aboutItems = [
    { label: "Our Story", href: "/about", icon: Building2 },
    { label: "Leadership Team", href: "/about", icon: Users },
    { label: "Our Values", href: "/about", icon: Award },
    { label: "Global Presence", href: "/about", icon: MapPin },
    { label: "Partners", href: "/about", icon: Handshake },
  ];

  // Careers dropdown items
  const careersItems = [
    { label: "Open Positions", href: "/careers#open-positions", icon: Briefcase },
    { label: "Life at WebQ", href: "/careers", icon: Users },
    { label: "Benefits", href: "/careers", icon: Gift },
    { label: "Internships", href: "/careers", icon: UserCheck },
  ];

  // News dropdown items
  const newsItems = [
    { label: "Press Releases", href: "/news", icon: Newspaper },
    { label: "Company Updates", href: "/news", icon: FileText },
    { label: "Media Coverage", href: "/news", icon: Mic },
    { label: "Blog", href: "/news", icon: BookOpen },
  ];

  // Investors dropdown items
  const investorsItems = [
    { label: "Financial Reports", href: "/investors", icon: BarChart3 },
    { label: "Stock Information", href: "/investors", icon: TrendingUp },
    { label: "Governance", href: "/investors", icon: Building2 },
    { label: "Investor Resources", href: "/investors", icon: DollarSign },
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
            {/* Careers Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-xs text-foreground/60 hover:text-primary transition-colors focus:outline-none">
                Careers
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background border border-border shadow-lg z-50">
                {careersItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href} className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <item.icon className="w-4 h-4 text-primary" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* News Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-xs text-foreground/60 hover:text-primary transition-colors focus:outline-none">
                News
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background border border-border shadow-lg z-50">
                {newsItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href} className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <item.icon className="w-4 h-4 text-primary" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Investors Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-xs text-foreground/60 hover:text-primary transition-colors focus:outline-none">
                Investors
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background border border-border shadow-lg z-50">
                {investorsItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href} className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <item.icon className="w-4 h-4 text-primary" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
      <nav
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
                <span className="font-montserrat text-xl font-bold text-foreground tracking-tight leading-tight">
                  WebQ <span className="text-primary">Technologies</span>
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wide">Innovate. Transform. Succeed.</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Industries Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm relative ${
                    isHomePage && isActive("industries")
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  aria-label="Industries menu"
                >
                  Industries
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {isHomePage && isActive("industries") && (
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
                      to="/industries"
                      className="font-medium text-primary focus:bg-primary/10 focus:text-primary"
                    >
                      View All Industries
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                    AI & Technology
                  </DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/ai-solutions" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <Brain className="w-4 h-4 text-primary" />
                      <span>AI-Centric Digital Innovation</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/legacy-to-ai-transformation" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <RefreshCw className="w-4 h-4 text-primary" />
                      <span>Legacy to AI Transformation</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/quantum-computing" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <Atom className="w-4 h-4 text-primary" />
                      <span>Quantum Computing</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                    Finance
                  </DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/banks-fintech" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span>Banks & FinTech</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/capital-markets" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <Landmark className="w-4 h-4 text-primary" />
                      <span>Capital Markets</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                    Public Sector
                  </DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/healthcare-tech" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <Heart className="w-4 h-4 text-primary" />
                      <span>Healthcare Tech</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/government" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <Landmark className="w-4 h-4 text-primary" />
                      <span>Government</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/edutech" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span>EduTech</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                    Commerce & Industry
                  </DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/retail-ecommerce" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>Retail & E-commerce</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/manufacturing" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <Factory className="w-4 h-4 text-primary" />
                      <span>Manufacturing</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/logistics-supply-chain" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <Truck className="w-4 h-4 text-primary" />
                      <span>Logistics & Supply Chain</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/energy-utilities" className="flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary">
                      <Bolt className="w-4 h-4 text-primary" />
                      <span>Energy & Utilities</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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

              {/* Insights Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm relative ${
                    location.pathname === "/insights"
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  aria-label="Insights menu"
                >
                  Insights
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {location.pathname === "/insights" && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-56 bg-background border border-border shadow-lg z-50"
                  sideOffset={8}
                >
                  {insightsItems.map((item) => (
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
                {/* Industries with expandable categories */}
                <div className="border-b border-border/50">
                  <Link
                    to="/industries"
                    className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Industries
                  </Link>
                  <div className="pb-3 space-y-2">
                    <div className="pl-4">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block py-1">
                        AI & Technology
                      </span>
                      <Link to="/industries/ai-solutions" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <Brain className="w-4 h-4 text-primary" />
                        AI-Centric Digital Innovation
                      </Link>
                      <Link to="/industries/legacy-to-ai-transformation" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <RefreshCw className="w-4 h-4 text-primary" />
                        Legacy to AI Transformation
                      </Link>
                      <Link to="/industries/quantum-computing" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <Atom className="w-4 h-4 text-primary" />
                        Quantum Computing
                      </Link>
                    </div>
                    <div className="pl-4">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block py-1">
                        Finance
                      </span>
                      <Link to="/industries/banks-fintech" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <CreditCard className="w-4 h-4 text-primary" />
                        Banks & FinTech
                      </Link>
                      <Link to="/industries/capital-markets" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <Landmark className="w-4 h-4 text-primary" />
                        Capital Markets
                      </Link>
                    </div>
                    <div className="pl-4">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block py-1">
                        Public Sector
                      </span>
                      <Link to="/industries/healthcare-tech" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <Heart className="w-4 h-4 text-primary" />
                        Healthcare Tech
                      </Link>
                      <Link to="/industries/government" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <Landmark className="w-4 h-4 text-primary" />
                        Government
                      </Link>
                      <Link to="/industries/edutech" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        EduTech
                      </Link>
                    </div>
                    <div className="pl-4">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block py-1">
                        Commerce & Industry
                      </span>
                      <Link to="/industries/retail-ecommerce" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <ShoppingCart className="w-4 h-4 text-primary" />
                        Retail & E-commerce
                      </Link>
                      <Link to="/industries/manufacturing" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <Factory className="w-4 h-4 text-primary" />
                        Manufacturing
                      </Link>
                      <Link to="/industries/logistics-supply-chain" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <Truck className="w-4 h-4 text-primary" />
                        Logistics & Supply Chain
                      </Link>
                      <Link to="/industries/energy-utilities" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 pl-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                        <Bolt className="w-4 h-4 text-primary" />
                        Energy & Utilities
                      </Link>
                    </div>
                  </div>
                </div>

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

                {/* Insights Section */}
                <div className="border-b border-border/50">
                  <Link
                    to="/insights"
                    className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Insights
                  </Link>
                  <div className="pb-3 pl-4 space-y-1">
                    {insightsItems.map((item) => (
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

                {/* Careers, News, Investors */}
                <div className="pt-4 space-y-4">
                  <div>
                    <Link 
                      to="/careers"
                      className="text-xs text-muted-foreground uppercase tracking-wider block pb-2 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Careers
                    </Link>
                    <div className="pl-2 space-y-1">
                      {careersItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-2 py-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-primary" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Link 
                      to="/news"
                      className="text-xs text-muted-foreground uppercase tracking-wider block pb-2 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      News
                    </Link>
                    <div className="pl-2 space-y-1">
                      {newsItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-2 py-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-primary" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Link 
                      to="/investors"
                      className="text-xs text-muted-foreground uppercase tracking-wider block pb-2 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Investors
                    </Link>
                    <div className="pl-2 space-y-1">
                      {investorsItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-2 py-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-primary" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
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
      </nav>
    </>
  );
};
