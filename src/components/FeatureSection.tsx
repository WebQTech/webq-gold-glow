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
    <section id="about" ref={ref} className="py-[120px] bg-background border-t border-white/[0.06]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="section-label">Why WebQ</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-8 leading-[1.15] text-primary-100">
              Technology partners,{" "}
              <span className="font-serif italic text-primary">not just vendors</span>
            </h2>
            <p className="text-lg text-primary-50 leading-relaxed mt-10">
              We don't just build solutions—we become an extension of your team. Our senior engineers bring decades of enterprise experience to every project.
            </p>

            <ul className="mt-12 space-y-5">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-center gap-4"
                >
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-primary-70">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 mt-12 text-primary-100 font-medium hover:text-primary transition-colors"
            >
              Learn more about us
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-card p-10 flex items-center justify-between"
              >
                <div>
                  <span className="text-4xl md:text-5xl font-medium text-primary-100">{stat.number}</span>
                  <p className="text-primary-50 mt-2">{stat.label}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/[0.06] flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-primary-100" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
