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

// Globe node positions (where connection lines attach)
const nodePositions = {
  "top-left": { x: 25, y: 30 },
  "top-right": { x: 75, y: 30 },
  "bottom-left": { x: 25, y: 70 },
  "bottom-right": { x: 75, y: 70 },
};

// 3D Globe Component
const Globe3D = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
      {/* Globe glow backdrop */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(229, 185, 78, 0.2) 50%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'scale(1.3)',
        }}
      />
      
      {/* Main globe sphere */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #C4B5FD, #8B5CF6 30%, #7C3AED 60%, #E5B94E 100%)',
          boxShadow: `
            inset -30px -30px 60px rgba(0, 0, 0, 0.4),
            inset 20px 20px 40px rgba(255, 255, 255, 0.1),
            0 0 80px rgba(139, 92, 246, 0.5),
            0 0 120px rgba(229, 185, 78, 0.3)
          `,
        }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Globe grid lines (latitude) */}
        {[20, 35, 50, 65, 80].map((top, i) => (
          <motion.div
            key={`lat-${i}`}
            className="absolute left-1/2 -translate-x-1/2 rounded-full border border-white/20"
            style={{
              top: `${top}%`,
              width: `${100 - Math.abs(50 - top) * 1.6}%`,
              height: '1px',
              transform: `translateX(-50%) rotateX(75deg)`,
            }}
          />
        ))}
        
        {/* Globe grid lines (longitude) */}
        {[0, 30, 60, 90, 120, 150].map((rotation, i) => (
          <motion.div
            key={`long-${i}`}
            className="absolute inset-4 rounded-full border border-white/15"
            style={{
              transform: `rotateY(${rotation}deg) rotateX(15deg)`,
            }}
          />
        ))}
      </motion.div>
      
      {/* Glowing connection nodes */}
      {Object.entries(nodePositions).map(([key, pos], i) => (
        <motion.div
          key={key}
          className="absolute w-4 h-4 rounded-full"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            background: 'radial-gradient(circle at 30% 30%, #FFF, #E5B94E 60%, #D4A84B)',
            boxShadow: '0 0 20px rgba(229, 185, 78, 0.8), 0 0 40px rgba(229, 185, 78, 0.4)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              '0 0 20px rgba(229, 185, 78, 0.8), 0 0 40px rgba(229, 185, 78, 0.4)',
              '0 0 30px rgba(229, 185, 78, 1), 0 0 60px rgba(229, 185, 78, 0.6)',
              '0 0 20px rgba(229, 185, 78, 0.8), 0 0 40px rgba(229, 185, 78, 0.4)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      
      {/* Orbital ring 1 */}
      <motion.div
        className="absolute inset-[-20%] rounded-full border-2 border-gold/30"
        style={{
          transform: 'rotateX(70deg) rotateZ(20deg)',
          boxShadow: '0 0 20px rgba(212, 168, 75, 0.3)',
        }}
        animate={{ rotateZ: [20, 380] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Orbital ring 2 */}
      <motion.div
        className="absolute inset-[-30%] rounded-full border border-plum/20"
        style={{
          transform: 'rotateX(60deg) rotateZ(-30deg)',
          boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)',
        }}
        animate={{ rotateZ: [-30, -390] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Orbital ring 3 */}
      <motion.div
        className="absolute inset-[-10%] rounded-full border border-white/10"
        style={{
          transform: 'rotateX(80deg) rotateZ(45deg)',
        }}
        animate={{ rotateZ: [45, 405] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

// Connection line from text to globe node
const ConnectionLine = ({ position, index }: { position: string; index: number }) => {
  const getLineStyle = () => {
    switch (position) {
      case 'top-left':
        return { 
          left: '100%', 
          top: '50%',
          width: '80px',
          transform: 'rotate(25deg)',
          transformOrigin: 'left center',
        };
      case 'top-right':
        return { 
          right: '100%', 
          top: '50%',
          width: '80px',
          transform: 'rotate(-25deg)',
          transformOrigin: 'right center',
        };
      case 'bottom-left':
        return { 
          left: '100%', 
          top: '50%',
          width: '80px',
          transform: 'rotate(-25deg)',
          transformOrigin: 'left center',
        };
      case 'bottom-right':
        return { 
          right: '100%', 
          top: '50%',
          width: '80px',
          transform: 'rotate(25deg)',
          transformOrigin: 'right center',
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className="absolute h-[2px] hidden lg:block"
      style={{
        ...getLineStyle(),
        background: 'linear-gradient(90deg, transparent, #E5B94E, transparent)',
        boxShadow: '0 0 10px rgba(229, 185, 78, 0.5)',
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
    />
  );
};

// Text item component
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
        return 'lg:absolute lg:left-0 lg:top-[10%] lg:text-right lg:max-w-[280px] xl:max-w-[320px]';
      case 'top-right':
        return 'lg:absolute lg:right-0 lg:top-[10%] lg:text-left lg:max-w-[280px] xl:max-w-[320px]';
      case 'bottom-left':
        return 'lg:absolute lg:left-0 lg:bottom-[10%] lg:text-right lg:max-w-[280px] xl:max-w-[320px]';
      case 'bottom-right':
        return 'lg:absolute lg:right-0 lg:bottom-[10%] lg:text-left lg:max-w-[280px] xl:max-w-[320px]';
      default:
        return '';
    }
  };

  return (
    <motion.div
      className={`relative ${getPositionClasses()}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
    >
      <ConnectionLine position={item.position} index={index} />
      
      <h3 className="font-playfair font-bold text-white text-xl md:text-2xl mb-3">
        {item.title}
      </h3>
      <p className="text-white/60 text-sm md:text-base leading-relaxed">
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

  // Parallax for background elements
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      id="capabilities" 
      ref={ref} 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: '#0F172A' }}
    >
      {/* Background gradient mesh */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(229, 185, 78, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Blurred 3D shapes in background */}
        <motion.div
          className="absolute w-32 h-32 rounded-full opacity-20"
          style={{
            top: '15%',
            left: '10%',
            background: 'radial-gradient(circle, #8B5CF6, transparent)',
            filter: 'blur(40px)',
          }}
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full opacity-15"
          style={{
            bottom: '20%',
            right: '15%',
            background: 'radial-gradient(circle, #E5B94E, transparent)',
            filter: 'blur(30px)',
          }}
          animate={{ y: [0, 15, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        {/* 3D hexagon */}
        <motion.div
          className="absolute w-20 h-20 opacity-10"
          style={{
            top: '40%',
            right: '8%',
            background: 'linear-gradient(135deg, #8B5CF6, #E5B94E)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            filter: 'blur(2px)',
          }}
          animate={{ rotate: [0, 360], y: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* 3D ring */}
        <motion.div
          className="absolute w-28 h-28 opacity-20 rounded-full border-2 border-plum/40"
          style={{
            bottom: '30%',
            left: '5%',
            transform: 'rotateX(60deg)',
            filter: 'blur(1px)',
          }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Holographic panel */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-label">Core Capabilities</span>
          <h2 className="mt-4 font-playfair text-3xl md:text-4xl lg:text-5xl text-white relative inline-block">
            The WebQ <span className="italic text-gold">Difference.</span>
          </h2>
          <motion.p 
            className="mt-4 text-base font-medium tracking-wide text-gold"
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

        {/* Holographic glass panel with globe and text */}
        <motion.div
          className="relative mx-auto max-w-6xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            perspective: '1000px',
          }}
        >
          {/* Glass panel */}
          <div
            className="relative rounded-3xl p-8 lg:p-16"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(229, 185, 78, 0.05) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid',
              borderImage: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(229, 185, 78, 0.4)) 1',
              boxShadow: `
                0 0 40px rgba(139, 92, 246, 0.15),
                0 0 80px rgba(229, 185, 78, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
              transform: 'rotateX(2deg)',
            }}
          >
            {/* Scan line animation */}
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute left-0 right-0 h-[2px]"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), rgba(229, 185, 78, 0.5), transparent)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
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

            {/* Gradient border glow */}
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent, rgba(229, 185, 78, 0.1))',
                opacity: 0.5,
              }}
            />

            {/* Content layout */}
            <div className="relative z-10">
              {/* Mobile: stacked layout */}
              <div className="lg:hidden space-y-8">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <h3 className="font-playfair font-bold text-white text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
                
                {/* Mobile globe */}
                <div className="flex justify-center py-8">
                  <Globe3D />
                </div>
              </div>

              {/* Desktop: globe center with floating text */}
              <div className="hidden lg:block relative min-h-[600px]">
                {/* Center globe */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Globe3D />
                </div>

                {/* Floating text items around the globe */}
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
