import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Brain, Shield, BarChart3, Zap, Link2, Package, Atom, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const products = [
  { 
    icon: Cloud, 
    title: 'Cloud Platform', 
    desc: 'Enterprise cloud infrastructure & management', 
    gradient: 'from-blue-500 to-cyan-400',
    details: [
      'Scalable cloud infrastructure',
      'Multi-cloud & hybrid deployments',
      'Cloud migration & optimization',
      '24/7 monitoring & support'
    ]
  },
  { 
    icon: Brain, 
    title: 'AI Suite', 
    desc: 'Machine learning & automation tools', 
    gradient: 'from-primary to-gold',
    details: [
      'Machine learning model development',
      'Natural language processing',
      'Predictive analytics & automation',
      'AI-powered business intelligence'
    ]
  },
  { 
    icon: Shield, 
    title: 'SecureGuard', 
    desc: 'Cybersecurity & threat protection', 
    gradient: 'from-emerald-500 to-teal-400',
    details: [
      'Threat detection & prevention',
      'Compliance & regulatory support (SOC2, HIPAA, GDPR)',
      'Security audits & penetration testing',
      'Incident response & recovery'
    ]
  },
  { 
    icon: BarChart3, 
    title: 'DataFlow', 
    desc: 'Analytics & business intelligence', 
    gradient: 'from-orange-500 to-amber-400',
    details: [
      'Real-time data processing',
      'Custom dashboard development',
      'Data warehouse solutions',
      'Business intelligence reporting'
    ]
  },
  { 
    icon: Zap, 
    title: 'DevOps Pro', 
    desc: 'CI/CD & infrastructure automation', 
    gradient: 'from-rose-500 to-pink-400',
    details: [
      'Continuous integration & deployment',
      'Infrastructure as code',
      'Container orchestration',
      'Automated testing pipelines'
    ]
  },
  { 
    icon: Link2, 
    title: 'IntegrateHub', 
    desc: 'API management & system integration', 
    gradient: 'from-indigo-500 to-purple-400',
    details: [
      'RESTful & GraphQL API development',
      'Third-party integrations',
      'Legacy system modernization',
      'API gateway & security'
    ]
  },
  { 
    icon: Package, 
    title: 'Custom Product Development', 
    desc: 'Tailored products built from the ground up to meet your unique business requirements.', 
    gradient: 'from-violet-500 to-fuchsia-400',
    details: [
      'End-to-end product design & development',
      'MVP to enterprise-scale solutions',
      'Agile methodology & rapid iteration',
      'Ongoing maintenance & support'
    ]
  },
  { 
    icon: Atom, 
    title: 'Quantum Functions', 
    desc: 'Next-generation quantum computing capabilities for complex problem-solving.', 
    gradient: 'from-cyan-500 to-blue-400',
    details: [
      'Quantum algorithm development',
      'Optimization & simulation solutions',
      'Quantum-classical hybrid systems',
      'Research & prototyping for quantum readiness'
    ]
  },
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
      {products.slice(0, 6).map((product, i) => {
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
        {products.slice(0, 6).map((_, i) => {
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

// Product Card Component
const ProductCard = ({ product, index, isExpanded, onToggle }: {
  product: typeof products[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      onClick={onToggle}
      className="cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className={`group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border transition-colors duration-300 overflow-hidden ${
          isExpanded 
            ? 'border-primary/50 shadow-2xl shadow-primary/20' 
            : 'border-navy/5 hover:border-primary/30'
        }`}
        animate={{
          scale: isExpanded ? 1.02 : 1,
          z: isExpanded ? 50 : 0,
        }}
        whileHover={!isExpanded ? {
          scale: 1.02,
          rotateX: -2,
          rotateY: 2,
          z: 20,
        } : {}}
        transition={{ 
          duration: 0.3, 
          ease: [0.23, 1, 0.32, 1]
        }}
        style={{ 
          transformStyle: 'preserve-3d',
          zIndex: isExpanded ? 50 : 1,
        }}
      >
        {/* Hover gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${isExpanded ? 'opacity-5' : ''}`} />
        
        {/* Icon container with gradient border */}
        <div className="relative mb-4 flex items-start justify-between">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} p-[1px]`}>
            <div className={`w-full h-full rounded-xl flex items-center justify-center transition-colors duration-300 ${
              isExpanded ? 'bg-transparent' : 'bg-white group-hover:bg-transparent'
            }`}>
              <Icon className={`w-5 h-5 transition-colors duration-300 ${
                isExpanded ? 'text-white' : 'text-navy group-hover:text-white'
              }`} strokeWidth={2} />
            </div>
          </div>
          
          {isExpanded && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center hover:bg-navy/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
            >
              <X className="w-4 h-4 text-navy" />
            </motion.button>
          )}
        </div>
        
        <h3 className={`font-sora text-lg font-semibold transition-colors relative ${
          isExpanded ? 'text-primary' : 'text-navy group-hover:text-primary'
        }`}>
          {product.title}
        </h3>
        <p className="font-inter text-sm text-navy/55 mt-2 relative">
          {product.desc}
        </p>
        
        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-navy/10">
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-navy/70"
                    >
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${product.gradient} shrink-0`} />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Arrow indicator - only show when not expanded */}
        {!isExpanded && (
          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export const ProductsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expandedIndex !== null && sectionRef.current) {
        const target = event.target as Node;
        const cards = sectionRef.current.querySelectorAll('[data-product-card]');
        let clickedOnCard = false;
        cards.forEach(card => {
          if (card.contains(target)) clickedOnCard = true;
        });
        if (!clickedOnCard) {
          setExpandedIndex(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedIndex]);

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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 lg:sticky lg:top-32"
          >
            <Products3DVisual />
          </motion.div>

          {/* Products Grid */}
          <div ref={sectionRef} className="order-1 lg:order-2 grid sm:grid-cols-2 gap-4">
            {products.map((product, i) => (
              <div key={i} data-product-card>
                <ProductCard
                  product={product}
                  index={i}
                  isExpanded={expandedIndex === i}
                  onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
