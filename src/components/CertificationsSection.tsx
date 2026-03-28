import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import sbaLogo from "@/assets/certifications/sba.png";
import wbencLogo from "@/assets/certifications/wbenc.png";

const certifications = [
  { name: "SBA", logo: sbaLogo },
  { name: "WBENC", logo: wbencLogo },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Certifications</span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-foreground">
            Certified & Trusted
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 p-5 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="h-20 w-40 flex items-center justify-center">
                <img src={cert.logo} alt={cert.name} className="max-h-20 max-w-40 object-contain" />
              </div>
              <span className="text-sm font-medium text-muted-foreground text-center max-w-[160px]">{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
