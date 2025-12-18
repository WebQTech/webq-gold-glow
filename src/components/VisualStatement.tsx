import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const VisualStatement = () => {
  return (
    <section className="section-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              ENTERPRISE TECHNOLOGY
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
            >
              We build
              <br />
              <span className="font-serif italic text-gold">the future.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-white/50 max-w-[360px] text-base leading-relaxed"
            >
              Intelligent infrastructure for companies that refuse to stand still.
            </motion.p>

            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 inline-flex items-center gap-4 group"
            >
              <span className="w-12 h-12 rounded-full bg-plum flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
              <span className="text-white text-sm font-medium">Explore</span>
            </motion.a>
          </div>

          {/* Right Column - Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer circle */}
            <div className="w-[300px] h-[300px] rounded-full border border-white/30 flex items-center justify-center">
              {/* Inner circle */}
              <div className="w-[200px] h-[200px] rounded-full border border-white/20 flex items-center justify-center">
                {/* Center W */}
                <span className="font-serif text-7xl text-white">W</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
