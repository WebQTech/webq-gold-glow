import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const serviceLinks = [
  { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
  { label: "Generative AI Solutions", href: "/services/generative-ai-solutions" },
  { label: "AI Process Automation", href: "/services/ai-process-automation" },
  { label: "Agentic AI, Agents & Tools", href: "/services/agentic-ai-agents-tools" },
  { label: "Custom App Development", href: "/services/custom-app-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Cloud Migration & Deployment", href: "/services/cloud-migration" },
  { label: "DevOps & SRE", href: "/services/devops-sre" },
  { label: "Data Engineering", href: "/services/data-engineering" },
  { label: "Business Intelligence", href: "/services/business-intelligence" },
  { label: "Cybersecurity Services", href: "/services/cybersecurity" },
  { label: "API Development & Integration", href: "/services/api-development" },
  { label: "Quality Engineering", href: "/services/quality-engineering" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-[hsl(215,50%,8%)] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="mb-8 lg:mb-0">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <img src={logo} alt="WebQ Technologies" className="h-14 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)]" />
              <div className="flex flex-col">
                <span className="font-playfair text-lg font-semibold tracking-normal leading-tight">
                  WebQ <span className="text-primary">Technologies</span>
                </span>
                <span className="text-[10px] text-white/50 font-medium tracking-widest uppercase">Innovate · Transform · Succeed</span>
              </div>
            </a>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Enterprise technology solutions that transform businesses and drive innovation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© 2025 WebQ Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
