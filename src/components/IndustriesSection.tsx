import { motion } from "framer-motion";

const industries = [
  { icon: '🎓', title: 'EdTech', desc: 'Learning platforms & educational technology' },
  { icon: '💳', title: 'FinTech', desc: 'Financial services & payment solutions' },
  { icon: '🏥', title: 'HealthTech', desc: 'Healthcare systems & medical technology' },
  { icon: '🛒', title: 'Retail & E-commerce', desc: 'Digital commerce & inventory systems' },
  { icon: '🏭', title: 'Manufacturing', desc: 'Industrial automation & IoT' },
  { icon: '🏛️', title: 'Government', desc: 'Public sector & civic technology' },
  { icon: '🚚', title: 'Logistics', desc: 'Transportation & distribution systems' },
  { icon: '⚡', title: 'Energy', desc: 'Smart grid & resource management' },
];

// 3D Globe/Network Visual
const Industries3DVisual = () => {
  return (
    <div className="relative w-full h-[450px] flex items-center justify-center">
      {/* Central globe */}
      <div className="relative w-48 h-48">
        {/* Globe sphere */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-navy via-primary/30 to-navy"
          style={{
            boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.3), inset 20px 20px 60px rgba(139,92,246,0.2), 0 0 80px rgba(139,92,246,0.3)',
          }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Latitude lines */}
          {[20, 40, 60, 80, 100, 120, 140, 160].map((deg, i) => (
            <div
              key={i}
              className="absolute inset-2 rounded-full border border-primary/20"
              style={{ transform: `rotateX(${deg}deg)` }}
            />
          ))}
          {/* Longitude lines */}
          {[0, 30, 60, 90, 120, 150].map((deg, i) => (
            <div
              key={i}
              className="absolute inset-2 rounded-full border border-gold/15"
              style={{ transform: `rotateY(${deg}deg)` }}
            />
          ))}
        </motion.div>

        {/* Orbiting ring */}
        <motion.div
          className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/30"
          style={{ transform: 'rotateX(70deg)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating industry nodes around the globe */}
      {industries.map((industry, i) => {
        const angle = (i * 45 - 90) * (Math.PI / 180);
        const radiusX = 180;
        const radiusY = 160;
        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: '50%', top: '50%' }}
            initial={{ x, y, opacity: 0, scale: 0 }}
            animate={{ 
              x, 
              y, 
              opacity: 1,
              scale: 1,
            }}
            transition={{ 
              delay: 0.1 * i, 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div
              className="flex flex-col items-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-lg shadow-primary/20 flex items-center justify-center text-xl border border-primary/10">
                {industry.icon}
              </div>
              <span className="mt-2 text-xs font-sora font-medium text-navy/70 whitespace-nowrap">
                {industry.title}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Connection lines from globe to nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {industries.map((_, i) => {
          const angle = (i * 45 - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * 180 + 225;
          const y = Math.sin(angle) * 160 + 225;
          return (
            <motion.line
              key={i}
              x1="225"
              y1="225"
              x2={x}
              y2={y}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
            />
          );
        })}
      </svg>

      {/* Pulsing rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-48 h-48 rounded-full border border-primary/20"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/15 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Industries</span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-white mt-4">
            Trusted across <span className="italic text-gradient">sectors.</span>
          </h2>
          <p className="font-inter text-white/50 mt-4 max-w-xl mx-auto">
            From startups to enterprises, we deliver solutions tailored to your industry's unique challenges.
          </p>
        </motion.div>

        {/* Two columns: Grid + 3D Visual */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Industries Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
                className="group p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-gold/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-sora text-base font-semibold text-white group-hover:text-primary-light transition-colors">
                      {industry.title}
                    </h3>
                    <p className="font-inter text-sm text-white/45 mt-1">
                      {industry.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <Industries3DVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};