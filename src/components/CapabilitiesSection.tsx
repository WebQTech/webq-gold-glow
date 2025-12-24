import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const differentiators = [
  {
    title: "Core Capabilities",
    description: "Deep expertise across cloud, AI/ML, quantum computing, and enterprise systems. We own the hard stuff.",
    position: "top-left",
  },
  {
    title: "Global Support",
    description: "24/7 coverage across continents. Real humans, real responses — no ticket queues.",
    position: "top-right",
  },
  {
    title: "Cost-Effective Operations",
    description: "Enterprise-grade quality, startup-friendly pricing. Lean teams, transparent costs.",
    position: "bottom-left",
  },
  {
    title: "Reliable Strategic Partnerships",
    description: "Built on trust, not transactions. Long-term thinking, shared success.",
    position: "bottom-right",
  },
];

// 3D Globe Component - Refined
const Globe3D = () => {
  return (
    <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]">
      {/* Globe glow backdrop */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(229, 185, 78, 0.1) 50%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'scale(1.2)',
        }}
      />
      
      {/* Main globe sphere */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #C4B5FD, #8B5CF6 30%, #7C3AED 60%, #E5B94E 100%)',
          boxShadow: `
            inset -20px -20px 40px rgba(0, 0, 0, 0.3),
            inset 15px 15px 30px rgba(255, 255, 255, 0.15),
            0 0 40px rgba(139, 92, 246, 0.25),
            0 0 60px rgba(229, 185, 78, 0.15)
          `,
        }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Globe grid lines (latitude) */}
        {[25, 40, 50, 60, 75].map((top, i) => (
          <div
            key={`lat-${i}`}
            className="absolute left-1/2 -translate-x-1/2 rounded-full border border-white/15"
            style={{
              top: `${top}%`,
              width: `${100 - Math.abs(50 - top) * 1.8}%`,
              height: '1px',
            }}
          />
        ))}
        
        {/* Globe grid lines (longitude) */}
        {[0, 45, 90, 135].map((rotation, i) => (
          <div
            key={`long-${i}`}
            className="absolute inset-[15%] rounded-full border border-white/10"
            style={{
              transform: `rotateY(${rotation}deg)`,
            }}
          />
        ))}
      </motion.div>
      
      {/* Glowing connection nodes - smaller and subtler */}
      {[
        { x: 20, y: 35 },
        { x: 80, y: 35 },
        { x: 20, y: 65 },
        { x: 80, y: 65 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            background: 'radial-gradient(circle at 30% 30%, #FFF, #E5B94E 60%, #D4A84B)',
            boxShadow: '0 0 12px rgba(229, 185, 78, 0.6)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      
      {/* Orbital ring 1 */}
      <motion.div
        className="absolute inset-[-15%] rounded-full border border-gold/20"
        style={{
          transform: 'rotateX(70deg) rotateZ(20deg)',
        }}
        animate={{ rotateZ: [20, 380] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Orbital ring 2 */}
      <motion.div
        className="absolute inset-[-8%] rounded-full border border-plum/15"
        style={{
          transform: 'rotateX(65deg) rotateZ(-15deg)',
        }}
        animate={{ rotateZ: [-15, -375] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

// Text item component - Cleaner styling
const TextItem = ({ 
  item, 
  index 
}: { 
  item: typeof differentiators[0]; 
  index: number;
}) => {
  const getPositionClasses = () => {
    switch (item.position) {
      case 'top-left':
        return 'lg:absolute lg:left-0 lg:top-[15%] lg:text-right lg:pr-8';
      case 'top-right':
        return 'lg:absolute lg:right-0 lg:top-[15%] lg:text-left lg:pl-8';
      case 'bottom-left':
        return 'lg:absolute lg:left-0 lg:bottom-[15%] lg:text-right lg:pr-8';
      case 'bottom-right':
        return 'lg:absolute lg:right-0 lg:bottom-[15%] lg:text-left lg:pl-8';
      default:
        return '';
    }
  };

  const isLeft = item.position.includes('left');

  return (
    <motion.div
      className={`relative max-w-[240px] ${getPositionClasses()}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
    >
      {/* Subtle connection line */}
      <motion.div
        className={`absolute top-1/2 hidden lg:block h-[1px] w-12 ${isLeft ? 'left-full ml-2' : 'right-full mr-2'}`}
        style={{
          background: `linear-gradient(${isLeft ? '90deg' : '270deg'}, rgba(139, 92, 246, 0.3), transparent)`,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      />
      
      <h3 className="font-sora font-semibold text-navy text-[16px] lg:text-[17px] mb-1.5 leading-snug">
        {item.title}
      </h3>
      <p className="font-inter text-[13px] lg:text-[14px] text-[#64748B] leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section 
      id="capabilities" 
      ref={ref} 
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{ background: '#FFFCF7' }}
    >
      {/* Subtle background accents */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-50"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(229, 185, 78, 0.05) 0%, transparent 50%)
            `,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header - Clean and minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-[42px] text-navy">
            The WebQ <span className="italic text-primary">Difference.</span>
          </h2>
          <p className="mt-3 text-sm font-medium tracking-wide text-navy">
            Trust. Expertise. Results.
          </p>
        </motion.div>

        {/* Holographic panel with globe */}
        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Glass panel */}
          <div
            className="relative rounded-2xl p-8 lg:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(139, 92, 246, 0.15)',
              boxShadow: `
                0 4px 24px rgba(139, 92, 246, 0.08),
                0 1px 3px rgba(0, 0, 0, 0.04),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
              `,
            }}
          >
            {/* Holographic gold scan line animation */}
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
            >
              <motion.div
                className="absolute left-0 right-0 h-[2px]"
                style={{
                  background: 'linear-gradient(90deg, transparent 5%, rgba(212, 168, 75, 0.8) 30%, rgba(229, 185, 78, 1) 50%, rgba(212, 168, 75, 0.8) 70%, transparent 95%)',
                  boxShadow: '0 0 12px rgba(212, 168, 75, 0.6), 0 0 24px rgba(212, 168, 75, 0.3)',
                }}
                animate={{
                  top: ['-2px', '100%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              {/* Mobile: stacked layout */}
              <div className="lg:hidden space-y-6">
                <div className="flex justify-center py-6">
                  <Globe3D />
                </div>
                {differentiators.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="text-center px-4"
                  >
                    <h3 className="font-sora font-semibold text-navy text-[15px] mb-1">
                      {item.title}
                    </h3>
                    <p className="font-inter text-[13px] text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Desktop: globe center with floating text */}
              <div className="hidden lg:block relative min-h-[420px]">
                {/* Center globe */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Globe3D />
                </div>

                {/* Text items around the globe */}
                {differentiators.map((item, index) => (
                  <TextItem key={item.title} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
