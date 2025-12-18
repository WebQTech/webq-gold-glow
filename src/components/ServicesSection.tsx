import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    name: "Custom Software Development",
    description: "Bespoke solutions tailored to unique operational needs",
  },
  {
    number: "02",
    name: "Cloud Migration & Deployment",
    description: "Legacy to cloud across public, private & hybrid",
  },
  {
    number: "03",
    name: "AI-Powered Solutions",
    description: "Machine learning, predictive analytics & automation",
  },
  {
    number: "04",
    name: "IT Infrastructure Management",
    description: "Networks, servers & systems for uptime & scalability",
  },
  {
    number: "05",
    name: "Cybersecurity & Compliance",
    description: "Threat mitigation & regulatory compliance",
  },
  {
    number: "06",
    name: "Technology Modernization",
    description: "Transform legacy systems into scalable applications",
  },
  {
    number: "07",
    name: "Quality Assurance & Testing",
    description: "AI-based testing, data quality & validation",
  },
  {
    number: "08",
    name: "Production Support & Monitoring",
    description: "24/7 oversight, incident response & optimization",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-navy"
          >
            Full-stack enterprise{" "}
            <span className="font-serif italic text-primary">technology.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-navy/55"
          >
            End-to-end services from development to deployment, monitoring, and continuous improvement.
          </motion.p>
        </div>

        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="service-row cursor-pointer"
            >
              <div className="grid grid-cols-[60px_1fr_auto] md:grid-cols-[60px_260px_1fr_auto] gap-4 md:gap-8 items-center">
                <span className="service-number text-sm font-medium text-navy/30 transition-colors">
                  {service.number}
                </span>
                <span className="service-name text-[15px] md:text-base font-semibold text-navy transition-colors">
                  {service.name}
                </span>
                <span className="hidden md:block text-sm text-navy/45">
                  {service.description}
                </span>
                <ArrowRight className="service-arrow w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
