import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Solutions: ["Custom Software", "Cloud Migration", "AI Solutions", "Cybersecurity"],
  Company: ["About", "Process", "Careers", "Contact"],
  Resources: ["Case Studies", "Blog", "Documentation"],
};

export const Footer = () => {
  return (
    <footer className="border-t border-navy/6 py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="font-sora text-xl font-bold text-navy">
              WebQ
            </a>
            <p className="mt-4 text-sm text-navy/50 max-w-xs leading-relaxed">
              Enterprise-grade IT solutions that empower organizations to innovate and scale.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-navy/60 hover:text-navy transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-navy/6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-navy/40">
                Get in touch
              </span>
              <p className="mt-1">
                <a href="mailto:hello@webq.tech" className="text-sm text-primary hover:underline">
                  hello@webq.tech
                </a>
              </p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="w-9 h-9 rounded-full bg-navy/5 flex items-center justify-center text-navy/50 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="w-9 h-9 rounded-full bg-navy/5 flex items-center justify-center text-navy/50 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy/6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-navy/40">
          <p>© 2025 WebQ Technologies LLC</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
