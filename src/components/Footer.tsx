import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  Solutions: ["Custom Software", "Cloud Solutions", "AI Integration", "Cybersecurity"],
  Company: ["About", "Careers", "Partners", "Contact"],
  Resources: ["Blog", "Case Studies", "Documentation", "Support"],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="bg-background-footer border-t border-white/[0.06]">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-5">
              <span className="text-xl font-medium tracking-tight text-primary-100">W</span>
            </a>
            <p className="text-primary-50 text-sm mb-8 max-w-xs leading-relaxed">
              AI-Powered IT Solutions for enterprises that demand excellence.
            </p>

            {/* Newsletter */}
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/[0.03] border border-white/[0.06] rounded-full text-sm text-primary-100 placeholder:text-primary-40 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/30"
              />
              <button className="btn-primary px-6 py-3 text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-medium text-primary-100 mb-5">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-50 hover:text-primary-100 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="mt-20 pt-10 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-primary-40">
            © 2025 WebQ Technologies LLC. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-primary-50 hover:text-primary-100 hover:border-primary/30 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
