import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "11+", label: "Industries Served" },
  { value: "40%", label: "Avg Cost Reduction" },
  { value: "3x", label: "Faster Time-to-Market" },
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Replace complexity with clarity — empowering organizations with intelligent technology that drives measurable outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    text: "We engineer competitive advantage. Every engagement starts with understanding your business goals, not just technical requirements.",
  },
  {
    icon: TrendingUp,
    title: "Our Impact",
    text: "From 4-week sprints to multi-year transformations — our clients achieve lower costs, faster delivery, and sustainable growth.",
  },
];

export const MissionBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-secondary/40">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Headline + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Technology Should Create{" "}
            <span className="text-primary">Value, Not Complexity</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Too many organizations struggle with outdated systems and fragmented tools.
            We exist to change that — with real engineering, real AI, and real outcomes.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center p-5 bg-card rounded-xl border border-border">
              <p className="text-2xl lg:text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Learn more about us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
