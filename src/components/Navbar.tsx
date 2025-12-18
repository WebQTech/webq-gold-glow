import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const productsDropdown = [
  { icon: '☁️', title: 'Cloud Platform', desc: 'Enterprise cloud infrastructure & management' },
  { icon: '🤖', title: 'AI Suite', desc: 'Machine learning & automation tools' },
  { icon: '🔒', title: 'SecureGuard', desc: 'Cybersecurity & threat protection' },
  { icon: '📊', title: 'DataFlow', desc: 'Analytics & business intelligence' },
  { icon: '⚡', title: 'DevOps Pro', desc: 'CI/CD & infrastructure automation' },
  { icon: '🔗', title: 'IntegrateHub', desc: 'API management & system integration' },
];

const solutionsDropdown = [
  { title: 'Custom Software Development', desc: 'Bespoke applications tailored to your needs' },
  { title: 'Cloud Migration & Deployment', desc: 'Legacy to cloud transformation' },
  { title: 'AI-Powered Solutions', desc: 'Machine learning & predictive analytics' },
  { title: 'IT Infrastructure Management', desc: 'End-to-end system oversight' },
  { title: 'Cybersecurity & Compliance', desc: 'Threat mitigation & regulatory compliance' },
  { title: 'Technology Modernization', desc: 'Transform legacy systems' },
  { title: 'Quality Assurance & Testing', desc: 'AI-based testing & validation' },
  { title: 'Production Support & Monitoring', desc: '24/7 oversight & optimization' },
];

const industriesDropdown = [
  { icon: '🎓', title: 'EdTech', desc: 'Learning platforms & educational technology' },
  { icon: '💳', title: 'FinTech', desc: 'Financial services & payment solutions' },
  { icon: '🏥', title: 'HealthTech', desc: 'Healthcare systems & medical technology' },
  { icon: '🛒', title: 'Retail & E-commerce', desc: 'Digital commerce & inventory systems' },
  { icon: '🏭', title: 'Manufacturing', desc: 'Industrial automation & IoT' },
  { icon: '🏛️', title: 'Government', desc: 'Public sector & civic technology' },
  { icon: '🚚', title: 'Logistics & Supply Chain', desc: 'Transportation & distribution systems' },
  { icon: '⚡', title: 'Energy & Utilities', desc: 'Smart grid & resource management' },
];

interface DropdownItem {
  icon?: string;
  title: string;
  desc: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  columns: number;
  label: string;
}

const DropdownMenu = ({ items, columns, label }: DropdownMenuProps) => {
  const itemsPerColumn = Math.ceil(items.length / columns);
  const columnItems = Array.from({ length: columns }, (_, i) =>
    items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-navy/5 backdrop-blur-xl p-6 z-50"
    >
      <div className="text-[10px] font-sora uppercase tracking-[2px] text-primary mb-5">
        {label}
      </div>
      <div className={`grid gap-x-8 ${columns === 2 ? 'grid-cols-2' : 'grid-cols-1'}`} style={{ minWidth: columns === 2 ? '480px' : '280px' }}>
        {columnItems.map((column, colIdx) => (
          <div key={colIdx} className="space-y-1">
            {column.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-primary/[0.04] transition-all duration-200 border-l-[3px] border-transparent hover:border-primary"
              >
                {item.icon && (
                  <span className="text-base mt-0.5">{item.icon}</span>
                )}
                <div>
                  <div className="font-sora text-sm font-semibold text-navy group-hover:text-primary transition-colors">
                    {item.title}
                  </div>
                  <div className="font-inter text-xs text-navy/50 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

interface NavItemWithDropdownProps {
  label: string;
  items: DropdownItem[];
  columns: number;
}

const NavItemWithDropdown = ({ label, items, columns }: NavItemWithDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(true), 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-[13px] text-navy/60 hover:text-navy transition-colors duration-300">
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenu items={items} columns={columns} label={label} />
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile Accordion Component
interface MobileAccordionProps {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const MobileAccordion = ({ label, items, isOpen, onToggle }: MobileAccordionProps) => {
  return (
    <div className="border-b border-navy/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-navy font-medium"
      >
        {label}
        <ChevronRight size={18} className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-2">
              {items.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/[0.04]"
                >
                  {item.icon && <span className="text-base">{item.icon}</span>}
                  <div>
                    <div className="font-sora text-sm font-semibold text-navy">
                      {item.title}
                    </div>
                    <div className="text-xs text-navy/50">{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/90 backdrop-blur-xl border-b border-navy/5" : ""
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-sora text-lg font-bold text-navy">
            WebQ
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavItemWithDropdown
              label="Products"
              items={productsDropdown}
              columns={2}
            />
            <NavItemWithDropdown
              label="Solutions"
              items={solutionsDropdown}
              columns={2}
            />
            <NavItemWithDropdown
              label="Industries"
              items={industriesDropdown}
              columns={2}
            />
            <a
              href="#process"
              className="text-[13px] text-navy/60 hover:text-navy transition-colors duration-300"
            >
              Process
            </a>
            <a
              href="#about"
              className="text-[13px] text-navy/60 hover:text-navy transition-colors duration-300"
            >
              About
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a href="#contact" className="text-sm font-medium text-primary hover:text-primary-light transition-colors">
              Let's Talk →
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-6 pb-6 border-t border-navy/10 pt-6 overflow-hidden"
            >
              <MobileAccordion
                label="Products"
                items={productsDropdown}
                isOpen={openAccordion === "Products"}
                onToggle={() => toggleAccordion("Products")}
              />
              <MobileAccordion
                label="Solutions"
                items={solutionsDropdown}
                isOpen={openAccordion === "Solutions"}
                onToggle={() => toggleAccordion("Solutions")}
              />
              <MobileAccordion
                label="Industries"
                items={industriesDropdown}
                isOpen={openAccordion === "Industries"}
                onToggle={() => toggleAccordion("Industries")}
              />
              <a
                href="#process"
                className="block py-4 text-navy/70 hover:text-navy transition-colors border-b border-navy/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#about"
                className="block py-4 text-navy/70 hover:text-navy transition-colors border-b border-navy/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block py-4 font-medium text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
