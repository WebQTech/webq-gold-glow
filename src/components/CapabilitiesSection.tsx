import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

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

// 3D Sphere Component
const Sphere3D = ({ 
  size, 
  color, 
  style, 
  delay = 0,
  blur = false 
}: { 
  size: number; 
  color: 'gold' | 'plum';
  style: React.CSSProperties;
  delay?: number;
  blur?: boolean;
}) => {
  const colors = {
    gold: {
      gradient: 'radial-gradient(circle at 30% 30%, #F5DEB3, #D4A84B 40%, #B8860B 80%, #8B6914)',
      shadow: 'rgba(212, 168, 75, 0.4)',
      glow: 'rgba(212, 168, 75, 0.3)',
    },
    plum: {
      gradient: 'radial-gradient(circle at 30% 30%, #C4B5FD, #8B5CF6 40%, #7C3AED 80%, #5B21B6)',
      shadow: 'rgba(139, 92, 246, 0.4)',
      glow: 'rgba(139, 92, 246, 0.3)',
    },
  };

  return (
    <motion.div
      className="absolute hidden lg:block"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      animate={{
        y: [0, -15, 0],
        rotateZ: [0, 5, 0],
      }}
    >
      <div
        className={blur ? 'blur-sm' : ''}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: colors[color].gradient,
          boxShadow: `
            0 ${size / 4}px ${size / 2}px ${colors[color].shadow},
            0 0 ${size}px ${colors[color].glow},
            inset 0 -${size / 8}px ${size / 4}px rgba(0,0,0,0.2),
            inset 0 ${size / 8}px ${size / 4}px rgba(255,255,255,0.3)
          `,
        }}
      />
    </motion.div>
  );
};

// 3D Ring Component
const Ring3D = ({ 
  size, 
  style, 
  delay = 0 
}: { 
  size: number;
  style: React.CSSProperties;
  delay?: number;
}) => (
  <motion.div
    className="absolute hidden lg:block"
    style={style}
    initial={{ opacity: 0, rotateX: 60, rotateY: 0 }}
    whileInView={{ opacity: 0.6, rotateX: 60, rotateY: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay }}
    animate={{ rotateZ: 360 }}
  >
    <div
      className="blur-[1px]"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: '2px solid rgba(212, 168, 75, 0.4)',
        boxShadow: '0 0 20px rgba(212, 168, 75, 0.2)',
        transform: 'rotateX(60deg)',
      }}
    />
  </motion.div>
);

// 3D Hexagon Component
const Hexagon3D = ({ 
  size, 
  style, 
  delay = 0 
}: { 
  size: number;
  style: React.CSSProperties;
  delay?: number;
}) => (
  <motion.div
    className="absolute hidden lg:block blur-[2px] opacity-40"
    style={style}
    initial={{ opacity: 0, rotate: 0 }}
    whileInView={{ opacity: 0.4, rotate: 30 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay }}
    animate={{ rotate: [30, 60, 30], y: [0, -10, 0] }}
  >
    <div
      style={{
        width: size,
        height: size * 0.866,
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(212, 168, 75, 0.2))',
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        boxShadow: '0 10px 30px rgba(139, 92, 246, 0.2)',
      }}
    />
  </motion.div>
);

// 3D Text Item Component with hover effects
const DifferentiatorItem = ({ 
  item, 
  index, 
  parallaxY 
}: { 
  item: typeof differentiators[0]; 
  index: number;
  parallaxY: any;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // 3D text shadow for depth
  const textShadow3D = isHovered
    ? `
      1px 1px 0 rgba(15, 23, 42, 0.15),
      2px 2px 0 rgba(15, 23, 42, 0.12),
      3px 3px 0 rgba(15, 23, 42, 0.09),
      4px 4px 0 rgba(15, 23, 42, 0.06),
      5px 5px 0 rgba(15, 23, 42, 0.03),
      6px 6px 15px rgba(15, 23, 42, 0.15)
    `
    : `
      1px 1px 0 rgba(15, 23, 42, 0.1),
      2px 2px 0 rgba(15, 23, 42, 0.07),
      3px 3px 0 rgba(15, 23, 42, 0.04),
      4px 4px 8px rgba(15, 23, 42, 0.1)
    `;

  return (
    <motion.div
      ref={ref}
      className="absolute max-w-md cursor-pointer"
      style={{ 
        ...item.position,
        y: parallaxY,
        perspective: 1000,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.15 * index }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          z: isHovered ? 30 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Gold accent with glow */}
        <motion.div
          className="flex items-center gap-3 mb-3"
          initial={{ width: 0 }}
          whileInView={{ width: 'auto' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + 0.15 * index }}
        >
          <motion.span 
            className="w-3 h-3 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #F5DEB3, #D4A84B 60%, #B8860B)',
              boxShadow: isHovered 
                ? '0 0 20px rgba(212, 168, 75, 0.6), 0 4px 8px rgba(212, 168, 75, 0.4)'
                : '0 0 10px rgba(212, 168, 75, 0.4), 0 2px 4px rgba(212, 168, 75, 0.3)',
            }}
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="w-12 h-[2px]"
            style={{
              background: 'linear-gradient(to right, #D4A84B, transparent)',
              boxShadow: isHovered ? '0 0 10px rgba(212, 168, 75, 0.5)' : 'none',
            }}
          />
        </motion.div>

        {/* Title with 3D extrusion effect */}
        <motion.h3
          className={`font-playfair font-bold text-navy mb-4 leading-tight relative ${
            item.size === 'large' 
              ? 'text-3xl xl:text-4xl' 
              : 'text-2xl xl:text-3xl'
          }`}
          style={{
            textShadow: textShadow3D,
            transform: 'translateZ(20px)',
          }}
          animate={{
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Top highlight effect */}
          <span 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 30%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          />
          {item.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className={`text-navy/50 leading-relaxed ${
            item.size === 'large' ? 'text-base' : 'text-sm'
          }`}
          style={{
            transform: 'translateZ(10px)',
          }}
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {item.description}
        </motion.p>

        {/* Decorative underline with glow */}
        <motion.div
          className="mt-4 h-[2px] relative"
          style={{
            background: 'linear-gradient(to right, rgba(212, 168, 75, 0.6), transparent)',
            boxShadow: isHovered ? '0 0 15px rgba(212, 168, 75, 0.4)' : 'none',
          }}
          initial={{ width: 0 }}
          whileInView={{ width: '60%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 + 0.15 * index }}
        />
      </motion.div>
    </motion.div>
  );
};

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax layers - different speeds for depth
  const bgY = useTransform(scrollYProgress, [0, 1], [20, -20]); // Slow - background
  const midY = useTransform(scrollYProgress, [0, 1], [40, -40]); // Medium - accents
  const fgY1 = useTransform(scrollYProgress, [0, 1], [60, -60]); // Fast - text
  const fgY2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const fgY3 = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const fgY4 = useTransform(scrollYProgress, [0, 1], [55, -55]);
  const parallaxValues = [fgY1, fgY2, fgY3, fgY4];

  return (
    <section 
      id="capabilities" 
      ref={ref} 
      className="py-24 lg:py-32 relative overflow-hidden min-h-[800px] lg:min-h-[900px]"
      style={{ background: 'linear-gradient(135deg, #FFFCF7 0%, #FFF9F0 50%, #FFFCF7 100%)' }}
    >
      {/* Gradient overlay for lighting effect from top-left */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 0%, rgba(212, 168, 75, 0.08) 0%, transparent 50%)',
        }}
      />

      {/* Background Layer - Blurred 3D shapes (slow parallax) */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <Sphere3D size={80} color="plum" style={{ top: '10%', left: '10%' }} delay={0.2} blur />
        <Sphere3D size={60} color="gold" style={{ top: '60%', right: '15%' }} delay={0.4} blur />
        <Hexagon3D size={100} style={{ top: '30%', right: '25%' }} delay={0.3} />
        <Hexagon3D size={70} style={{ top: '70%', left: '30%' }} delay={0.5} />
        <Ring3D size={120} style={{ top: '20%', right: '10%' }} delay={0.4} />
        <Ring3D size={80} style={{ top: '75%', left: '15%' }} delay={0.6} />
      </motion.div>

      {/* Middle Layer - Accent dots and lines (medium parallax) */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: midY }}>
        <Sphere3D size={20} color="gold" style={{ top: '25%', left: '30%' }} delay={0.3} />
        <Sphere3D size={16} color="gold" style={{ top: '45%', right: '35%' }} delay={0.5} />
        <Sphere3D size={24} color="plum" style={{ top: '65%', left: '45%' }} delay={0.4} />
        <Sphere3D size={18} color="gold" style={{ top: '15%', right: '40%' }} delay={0.6} />
        <Sphere3D size={14} color="plum" style={{ top: '80%', right: '25%' }} delay={0.7} />
        
        {/* Glowing lines */}
        <motion.div
          className="absolute hidden lg:block"
          style={{ top: '35%', left: '25%' }}
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div 
            className="h-[2px]"
            style={{
              background: 'linear-gradient(to right, #D4A84B, transparent)',
              boxShadow: '0 0 10px rgba(212, 168, 75, 0.5)',
            }}
          />
        </motion.div>
        <motion.div
          className="absolute hidden lg:block"
          style={{ top: '55%', right: '30%', transform: 'rotate(-15deg)' }}
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div 
            className="h-[2px]"
            style={{
              background: 'linear-gradient(to right, transparent, #D4A84B, transparent)',
              boxShadow: '0 0 10px rgba(212, 168, 75, 0.4)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Foreground Layer - Text content (fast parallax) */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="section-label">Core Capabilities</span>
          <h2 
            className="mt-4 font-playfair text-3xl md:text-4xl lg:text-5xl text-navy relative inline-block"
            style={{
              textShadow: `
                1px 1px 0 rgba(15, 23, 42, 0.1),
                2px 2px 0 rgba(15, 23, 42, 0.08),
                3px 3px 0 rgba(15, 23, 42, 0.05),
                4px 4px 10px rgba(15, 23, 42, 0.1)
              `,
            }}
          >
            The WebQ <span className="italic text-primary">Difference.</span>
          </h2>
          <motion.p 
            className="mt-4 text-base font-medium tracking-wide"
            style={{
              color: '#D4A84B',
              textShadow: '0 0 20px rgba(212, 168, 75, 0.3)',
            }}
            animate={{ 
              textShadow: [
                '0 0 20px rgba(212, 168, 75, 0.3)',
                '0 0 30px rgba(212, 168, 75, 0.5)',
                '0 0 20px rgba(212, 168, 75, 0.3)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Trust. Expertise. Results.
          </motion.p>
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
                <div className={`flex items-center gap-2 mb-2 ${index % 2 !== 0 ? 'justify-end' : ''}`}>
                  {index % 2 !== 0 && <div className="w-8 h-[1px] bg-gold/50" />}
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, #F5DEB3, #D4A84B 60%, #B8860B)',
                      boxShadow: '0 0 10px rgba(212, 168, 75, 0.4)',
                    }}
                  />
                  {index % 2 === 0 && <div className="w-8 h-[1px] bg-gold/50" />}
                </div>
                <h3 
                  className={`font-playfair font-bold text-navy mb-3 ${
                    item.size === 'large' ? 'text-2xl' : 'text-xl'
                  }`}
                  style={{
                    textShadow: `
                      1px 1px 0 rgba(15, 23, 42, 0.1),
                      2px 2px 0 rgba(15, 23, 42, 0.05),
                      3px 3px 6px rgba(15, 23, 42, 0.08)
                    `,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-navy/50 text-sm leading-relaxed max-w-sm inline-block">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>

        {/* Desktop Layout - Floating Staggered with 3D */}
        <div className="hidden lg:block relative h-[600px]">
          {differentiators.map((item, index) => (
            <DifferentiatorItem
              key={item.title}
              item={item}
              index={index}
              parallaxY={parallaxValues[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
