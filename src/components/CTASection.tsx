import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-[120px] bg-background border-t border-white/[0.06]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-primary-100">
            Let's build the{" "}
            <span className="font-serif italic text-primary">future</span>
          </h2>
          <p className="text-primary-50 text-lg mt-10 max-w-xl mx-auto leading-relaxed">
            Ready to transform your technology? Start a conversation with our team of experts.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a href="#" className="btn-primary">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="btn-secondary">
              Schedule a Demo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
