import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowUpRight } from "lucide-react";

const features = [
  "15+ years average engineer experience",
  "99.9% uptime SLA guaranteed",
  "Dedicated account management",
  "24/7 priority support",
];

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "99.9%", label: "Uptime" },
  { number: "50+", label: "Enterprise Clients" },
];

export const FeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-label">Why WebQ</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-6 leading-[1.15]">
              Technology partners,{" "}
              <span className="font-serif italic text-accent">not just vendors</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              We don't just build solutions—we become an extension of your team. Our senior engineers bring decades of enterprise experience to every project.
            </p>

            <ul className="mt-10 space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-background" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-2 mt-10 text-foreground font-medium hover:opacity-70 transition-opacity"
            >
              Learn more about us
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="glass-card p-8 flex items-center justify-between"
              >
                <div>
                  <span className="text-4xl md:text-5xl font-medium text-foreground">{stat.number}</span>
                  <p className="text-muted-foreground mt-1">{stat.label}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
