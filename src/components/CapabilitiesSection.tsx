import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const differentiators = [
  {
    title: "Core Capabilities",
    description: "Deep expertise across cloud, AI/ML, quantum computing, and enterprise systems. We don't outsource the hard stuff — we own it.",
    size: "large",
    position: { top: "15%", left: "5%" },
    mobileOrder: 1,
  },
  {
    title: "Global Support",
    description: "24/7 coverage across continents. Real humans, real responses — no ticket queues, no timezone excuses.",
    size: "medium",
    position: { top: "8%", right: "8%" },
    mobileOrder: 2,
  },
  {
    title: "Cost-Effective Operations",
    description: "Enterprise-grade quality, startup-friendly pricing. Lean teams, smart automation, transparent costs.",
    size: "medium",
    position: { top: "55%", left: "12%" },
    mobileOrder: 3,
  },
  {
    title: "Reliable Strategic Partnerships",
    description: "Built on trust, not transactions. Long-term thinking, shared success. When you win, we win.",
    size: "large",
    position: { top: "48%", right: "5%" },
    mobileOrder: 4,
  },
];

const FloatingAccent = ({ 
  style, 
  type, 
  delay = 0 
}: { 
  style: React.CSSProperties; 
  type: 'dot' | 'line' | 'circle';
  delay?: number;
}) => {
  return (
    <motion.div
      className="absolute hidden lg:block"
      style={style}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      animate={{
        y: [0, -10, 0],
        rotate: type === 'line' ? [0, 5, 0] : 0,
      }}
    >
      {type === 'dot' && (
        <div className="w-3 h-3 rounded-full bg-gold" />
      )}
      {type === 'line' && (
        <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold/0" />
      )}
      {type === 'circle' && (
        <div className="w-20 h-20 rounded-full border border-gold/30" />
      )}
    </motion.div>
  );
};

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y4 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const parallaxValues = [y1, y2, y3, y4];

  return (
    <section 
      id="capabilities" 
      ref={ref} 
      className="py-24 lg:py-32 bg-cream relative overflow-hidden min-h-[800px] lg:min-h-[900px]"
    >
      {/* Floating Accent Elements */}
      <FloatingAccent style={{ top: '20%', left: '25%' }} type="dot" delay={0.2} />
      <FloatingAccent style={{ top: '35%', right: '20%' }} type="line" delay={0.4} />
      <FloatingAccent style={{ top: '70%', left: '35%' }} type="circle" delay={0.3} />
      <FloatingAccent style={{ top: '15%', right: '35%' }} type="dot" delay={0.5} />
      <FloatingAccent style={{ top: '60%', right: '30%' }} type="line" delay={0.6} />
      <FloatingAccent style={{ top: '80%', left: '20%' }} type="dot" delay={0.7} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-navy">
            The WebQ <span className="italic text-primary">Difference.</span>
          </h2>
          <p className="mt-4 text-lg text-gold font-medium tracking-wide">
            Trust. Expertise. Results.
          </p>
        </motion.div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-12">
          {differentiators
            .sort((a, b) => a.mobileOrder - b.mobileOrder)
            .map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${index % 2 === 0 ? 'text-left pr-8' : 'text-right pl-8'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {index % 2 !== 0 && <div className="flex-1" />}
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {index % 2 === 0 && <div className="w-8 h-[1px] bg-gold/50" />}
                </div>
                <h3 className={`font-playfair font-bold text-navy mb-3 ${
                  item.size === 'large' ? 'text-2xl' : 'text-xl'
                }`}>
                  {item.title}
                </h3>
                <p className="text-navy/50 text-sm leading-relaxed max-w-sm inline-block">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>

        {/* Desktop Layout - Floating Staggered */}
        <div className="hidden lg:block relative h-[600px]">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              className="absolute max-w-md"
              style={{ 
                ...item.position,
                y: parallaxValues[index],
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 * index }}
            >
              {/* Gold accent */}
              <motion.div
                className="flex items-center gap-3 mb-3"
                initial={{ width: 0 }}
                whileInView={{ width: 'auto' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + 0.15 * index }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="w-12 h-[2px] bg-gradient-to-r from-gold to-gold/0" />
              </motion.div>

              {/* Title */}
              <motion.h3
                className={`font-playfair font-bold text-navy mb-4 leading-tight ${
                  item.size === 'large' 
                    ? 'text-3xl xl:text-4xl' 
                    : 'text-2xl xl:text-3xl'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + 0.15 * index }}
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className={`text-navy/50 leading-relaxed ${
                  item.size === 'large' ? 'text-base' : 'text-sm'
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 + 0.15 * index }}
              >
                {item.description}
              </motion.p>

              {/* Decorative underline */}
              <motion.div
                className="mt-4 h-[1px] bg-gradient-to-r from-gold/40 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.45 + 0.15 * index }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
