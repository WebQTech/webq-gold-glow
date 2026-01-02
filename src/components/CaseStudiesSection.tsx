import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Clock, Sparkles } from "lucide-react";

export const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" ref={ref} className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Case studies
          </h2>
          <p className="mt-3 text-foreground/60 text-lg max-w-2xl">
            We help companies anticipate and act with insight and speed.
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-primary/20 p-12 lg:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6"
            >
              <Rocket className="w-10 h-10 text-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Coming Soon</span>
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
            >
              Success Stories in the Making
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground max-w-xl mx-auto mb-8"
            >
              We're currently working with exciting clients on transformative projects. 
              Check back soon to see how we're helping businesses innovate and succeed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Real client transformations</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Measurable results</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
