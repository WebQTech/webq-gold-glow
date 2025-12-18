import { motion } from "framer-motion";
import { Cloud, Brain, Shield, BarChart3, Zap, Link2 } from "lucide-react";

const products = [
  { icon: Cloud, title: 'Cloud Platform', desc: 'Enterprise cloud infrastructure & management', gradient: 'from-blue-500 to-cyan-400' },
  { icon: Brain, title: 'AI Suite', desc: 'Machine learning & automation tools', gradient: 'from-primary to-gold' },
  { icon: Shield, title: 'SecureGuard', desc: 'Cybersecurity & threat protection', gradient: 'from-emerald-500 to-teal-400' },
  { icon: BarChart3, title: 'DataFlow', desc: 'Analytics & business intelligence', gradient: 'from-orange-500 to-amber-400' },
  { icon: Zap, title: 'DevOps Pro', desc: 'CI/CD & infrastructure automation', gradient: 'from-rose-500 to-pink-400' },
  { icon: Link2, title: 'IntegrateHub', desc: 'API management & system integration', gradient: 'from-indigo-500 to-purple-400' },
];

// 3D Hexagonal Grid Visual
const Products3DVisual = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Central rotating hexagon */}
      <motion.div
        className="absolute w-32 h-32"
        animate={{ rotateY: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Hexagon faces */}
        {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-gold/5"
            style={{
              transform: `rotateY(${rotation}deg) translateZ(60px)`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />
        ))}
      </motion.div>

      {/* Orbiting product icons */}
      {products.map((product, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 140;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const Icon = product.icon;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ x, y, opacity: 0 }}
            animate={{ 
              x, 
              y, 
              opacity: 1,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              opacity: { delay: 0.1 * i, duration: 0.5 },
              scale: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg shadow-primary/20`}>
              <Icon className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </motion.div>
        );
      })}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ transform: 'translate(50%, 50%)' }}>
        {products.map((_, i) => {
          const angle = (i * 60) * (Math.PI / 180);
          const x = Math.cos(angle) * 140;
          const y = Math.sin(angle) * 140;
          return (
            <motion.line
              key={i}
              x1={0}
              y1={0}
              x2={x}
              y2={y}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.2 * i, duration: 0.8 }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Outer ring */}
      <motion.div
        className="absolute w-80 h-80 rounded-full border border-dashed border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full border border-dashed border-gold/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-section-light">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Products</span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-navy mt-4">
            Enterprise-ready <span className="italic text-gradient">solutions.</span>
          </h2>
          <p className="font-inter text-navy/60 mt-4 max-w-xl mx-auto">
            Ready-to-deploy products built for scale, security, and seamless integration.
          </p>
        </motion.div>

        {/* Two columns: 3D Visual + Products Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <Products3DVisual />
          </motion.div>

          {/* Products Grid */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-4">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-navy/5 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon container with gradient border */}
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} p-[1px]`}>
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                        <Icon className={`w-5 h-5 text-navy group-hover:text-white transition-colors duration-300`} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-sora text-lg font-semibold text-navy group-hover:text-primary transition-colors relative">
                    {product.title}
                  </h3>
                  <p className="font-inter text-sm text-navy/55 mt-2 relative">
                    {product.desc}
                  </p>
                  
                  {/* Arrow indicator */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
