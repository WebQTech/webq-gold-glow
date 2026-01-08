import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    industry: "HEALTHCARE",
    title: "AI-powered diagnostics platform modernization",
    description: "Transformed legacy systems to deliver 10x faster patient insights.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    industry: "BANKING",
    title: "Digital banking automation delivers instant customer value",
    description: "Reduced processing time by 60% using process automation and gen AI.",
    color: "from-emerald-600 to-teal-500",
  },
  {
    industry: "RETAIL",
    title: "E-commerce platform achieves global scale",
    description: "Supported 5M+ concurrent users with cloud-native architecture.",
    color: "from-orange-600 to-amber-500",
  },
  {
    industry: "CASE STUDIES",
    title: "Discover more about our work",
    description: "We engineer technology into your business to help you anticipate and act.",
    color: "from-primary to-accent",
    isShowcase: true,
  },
];

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

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`case-study-card group cursor-pointer ${
                study.isShowcase ? 'bg-gradient-to-br ' + study.color + ' text-white' : ''
              }`}
            >
              {/* Image placeholder */}
              {!study.isShowcase && (
                <div className={`aspect-[4/3] bg-gradient-to-br ${study.color}`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-white/30 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {study.industry.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className={`p-6 ${study.isShowcase ? 'h-full flex flex-col justify-between min-h-[280px]' : ''}`}>
                <div>
                  <span className={`industry-tag ${study.isShowcase ? 'bg-white/20' : ''}`}>
                    {study.industry}
                  </span>
                  <h3 className={`mt-4 text-lg font-semibold leading-snug ${
                    study.isShowcase ? 'text-white' : 'text-foreground group-hover:text-primary transition-colors'
                  }`}>
                    {study.title}
                  </h3>
                  <p className={`mt-2 text-sm ${
                    study.isShowcase ? 'text-white/80' : 'text-foreground/60'
                  }`}>
                    {study.description}
                  </p>
                </div>

                {study.isShowcase && (
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 mt-6 text-white font-medium hover:gap-3 transition-all"
                  >
                    View all case studies
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
