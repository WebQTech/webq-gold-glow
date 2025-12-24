import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  GraduationCap, CreditCard, Heart, ShoppingCart, Factory, Landmark, 
  Truck, Bolt, Brain, RefreshCw, Atom, X 
} from "lucide-react";

const industries = [
  { 
    icon: Brain, 
    title: 'AI-Based Tech Domain', 
    desc: 'AI strategy, implementation & optimization',
    stat: '10x',
    statLabel: 'Faster Insights',
    isNew: true,
    whatWeSolve: 'Lack of AI expertise, failed AI implementations, unstructured data chaos',
    howWeHelp: [
      'AI readiness assessment and strategy roadmap',
      'Custom ML model development for your specific use case',
      'Data preparation, labeling, and pipeline setup',
      'AI model deployment, monitoring, and retraining',
      'Responsible AI implementation with bias detection'
    ],
    tags: ['Chatbots', 'Recommendation Engines', 'Document Processing', 'Predictive Models', 'Computer Vision']
  },
  { 
    icon: RefreshCw, 
    title: 'Legacy to AI Transformation', 
    desc: 'Modernize systems with AI integration',
    stat: '60%',
    statLabel: 'Process Automation',
    isNew: true,
    whatWeSolve: 'Outdated systems that can\'t support AI, data trapped in legacy databases, slow manual processes',
    howWeHelp: [
      'Legacy system audit and AI opportunity mapping',
      'Data extraction and migration from legacy databases',
      'API layer creation to connect old systems with AI tools',
      'Gradual AI integration without full system replacement',
      'Change management and team upskilling'
    ],
    tags: ['Assessment', 'Data Prep', 'Pilot AI Project', 'Scale', 'Optimize']
  },
  { 
    icon: CreditCard, 
    title: 'Banks & FinTech', 
    desc: 'Financial services & payment solutions',
    stat: '$2T+',
    statLabel: 'Transactions Processed',
    whatWeSolve: 'Slow transaction processing, fraud vulnerabilities, regulatory complexity',
    howWeHelp: [
      'Real-time payment processing and settlement systems',
      'Fraud detection using machine learning models',
      'KYC/AML compliance automation',
      'Digital banking and mobile wallet platforms',
      'Blockchain-based secure transaction ledgers'
    ],
    tags: ['Banks', 'Credit Unions', 'Payment Processors', 'Insurance', 'Lending Platforms']
  },
  { 
    icon: Landmark, 
    title: 'Capital Markets', 
    desc: 'Investment platforms & trading systems',
    stat: '$500B+',
    statLabel: 'Assets Managed',
    isNew: true,
    whatWeSolve: 'Complex trading operations, regulatory compliance burden, fragmented financial data',
    howWeHelp: [
      'Investment platform development for real estate and private equity',
      'Trading systems with real-time market data integration',
      'Asset management and portfolio tracking solutions',
      'Regulatory compliance and reporting automation',
      'High-performance systems for securities operations'
    ],
    tags: ['Real Estate', 'Private Equity', 'Asset Management', 'Securities Firms', 'Trading Platforms']
  },
  { 
    icon: Heart, 
    title: 'Healthcare Tech', 
    desc: 'Healthcare systems & medical technology',
    stat: '10M+',
    statLabel: 'Patients Served',
    whatWeSolve: 'Fragmented patient data, manual workflows, diagnostic delays',
    howWeHelp: [
      'Electronic health record (EHR) integration and optimization',
      'Telemedicine platforms with secure video consultations',
      'AI-assisted diagnostics and medical imaging analysis',
      'Patient scheduling and workflow automation',
      'HIPAA-compliant data storage and security'
    ],
    tags: ['Hospitals', 'Clinics', 'Telehealth Providers', 'Pharmaceutical', 'Medical Devices']
  },
  { 
    icon: Landmark, 
    title: 'Government', 
    desc: 'Public sector & civic technology',
    stat: '50+',
    statLabel: 'Agencies Served',
    whatWeSolve: 'Legacy system limitations, citizen service delays, data silos across agencies',
    howWeHelp: [
      'Citizen portal and digital service platforms',
      'Legacy system modernization to cloud',
      'Interagency data sharing and integration',
      'Document digitization and workflow automation',
      'FedRAMP and compliance-ready infrastructure'
    ],
    tags: ['Federal Agencies', 'State & Local Government', 'Public Services']
  },
  { 
    icon: GraduationCap, 
    title: 'EduTech', 
    desc: 'Learning platforms & educational technology',
    stat: '500M+',
    statLabel: 'Learners Impacted',
    whatWeSolve: 'Student engagement, administrative inefficiencies, outdated learning systems',
    howWeHelp: [
      'Learning management systems (LMS) with AI-powered personalization',
      'Virtual classroom and live collaboration platforms',
      'Student performance tracking and predictive analytics',
      'Automated grading and assessment tools',
      'Mobile-first learning apps for accessibility'
    ],
    tags: ['K-12', 'Higher Education', 'Corporate Training', 'Online Course Platforms']
  },
  { 
    icon: ShoppingCart, 
    title: 'Retail & E-commerce', 
    desc: 'Digital commerce & inventory systems',
    stat: '99.9%',
    statLabel: 'Uptime Guaranteed',
    whatWeSolve: 'Inventory mismanagement, poor customer personalization, disconnected sales channels',
    howWeHelp: [
      'Omnichannel commerce platform integration',
      'AI-powered product recommendations and search',
      'Real-time inventory tracking and demand forecasting',
      'Customer loyalty and personalization engines',
      'Headless commerce architecture for flexibility'
    ],
    tags: ['Online Retailers', 'Brick-and-Mortar Stores', 'Marketplaces', 'D2C Brands']
  },
  { 
    icon: Factory, 
    title: 'Manufacturing', 
    desc: 'Industrial automation & IoT',
    stat: '40%',
    statLabel: 'Efficiency Gains',
    whatWeSolve: 'Production inefficiencies, equipment downtime, supply chain blind spots',
    howWeHelp: [
      'IoT-enabled predictive maintenance systems',
      'Real-time production monitoring dashboards',
      'Supply chain visibility and optimization',
      'Quality control automation with computer vision',
      'Digital twin simulations for process improvement'
    ],
    tags: ['Automotive', 'Electronics', 'Consumer Goods', 'Industrial Equipment']
  },
  { 
    icon: Truck, 
    title: 'Logistics & Supply Chain', 
    desc: 'Transportation & distribution systems',
    stat: '25%',
    statLabel: 'Cost Reduction',
    whatWeSolve: 'Shipment visibility gaps, route inefficiencies, warehouse bottlenecks',
    howWeHelp: [
      'End-to-end shipment tracking and visibility platforms',
      'Route optimization using AI algorithms',
      'Warehouse management system (WMS) implementation',
      'Demand forecasting and inventory optimization',
      'Carrier management and freight audit automation'
    ],
    tags: ['3PLs', 'Freight Forwarders', 'Warehousing', 'Last-Mile Delivery']
  },
  { 
    icon: Bolt, 
    title: 'Energy & Utilities', 
    desc: 'Smart grid & resource management',
    stat: '30%',
    statLabel: 'Energy Savings',
    whatWeSolve: 'Grid instability, energy waste, aging infrastructure',
    howWeHelp: [
      'Smart grid monitoring and management systems',
      'Renewable energy integration and optimization',
      'Predictive maintenance for utility infrastructure',
      'Customer usage analytics and demand response',
      'SCADA system modernization and security'
    ],
    tags: ['Electric Utilities', 'Oil & Gas', 'Renewable Energy', 'Water & Wastewater']
  },
];

const IndustryCard = ({ 
  industry, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  industry: typeof industries[0]; 
  index: number; 
  isExpanded: boolean; 
  onToggle: () => void;
}) => {
  const Icon = industry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * index, duration: 0.5 }}
      onClick={onToggle}
      className="cursor-pointer"
      data-industry-card
    >
      <motion.div
        className={`relative rounded-2xl border transition-all duration-400 overflow-hidden ${
          isExpanded 
            ? 'bg-gradient-to-br from-cream to-white border-gold/40 shadow-2xl' 
            : 'bg-white border-navy/10 hover:border-gold/30 hover:shadow-lg'
        }`}
        animate={{
          scale: isExpanded ? 1.01 : 1,
          y: isExpanded ? -4 : 0,
        }}
        whileHover={!isExpanded ? {
          scale: 1.01,
          boxShadow: '0 0 30px rgba(212, 168, 75, 0.15)',
        } : {}}
        transition={{ 
          duration: 0.4, 
          ease: [0.23, 1, 0.32, 1]
        }}
        style={{ 
          zIndex: isExpanded ? 50 : 1,
        }}
      >
        {/* Collapsed State */}
        <div className={`p-5 ${isExpanded ? 'pb-0' : ''}`}>
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="relative">
              <div className={`w-11 h-11 rounded-xl p-[1px] ${
                isExpanded 
                  ? 'bg-gradient-to-br from-gold to-primary' 
                  : 'bg-gradient-to-br from-primary/30 to-gold/20'
              }`}>
                <div className={`w-full h-full rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  isExpanded 
                    ? 'bg-white' 
                    : 'bg-cream'
                }`}>
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${
                    isExpanded ? 'text-gold' : 'text-primary'
                  }`} strokeWidth={1.5} />
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-sora text-base font-semibold text-navy">
                      {industry.title}
                    </h3>
                    {industry.isNew && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gold text-navy rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm mt-1 text-navy/60">
                    {industry.desc}
                  </p>
                </div>

                {/* Expand/Collapse indicator */}
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-navy/10' 
                    : 'bg-navy/5'
                }`}>
                  <X className={`w-3.5 h-3.5 transition-all duration-300 ${
                    isExpanded 
                      ? 'text-navy rotate-0' 
                      : 'text-navy/40 rotate-45'
                  }`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-4">
                {/* Two Column Layout */}
                <div className="flex gap-4">
                  {/* Left Column - Stat */}
                  <div className="w-[30%] flex flex-col items-center justify-center pr-4 border-r-2 border-gold/30">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-center"
                    >
                      <span className="block text-3xl md:text-4xl font-bold text-gold">
                        {industry.stat}
                      </span>
                      <span className="block text-xs text-navy/50 mt-1 font-medium">
                        {industry.statLabel}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="w-[70%] space-y-4">
                    {/* What we solve */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <p className="text-sm italic text-navy/50">
                        <span className="font-medium text-navy/70">What we solve:</span> {industry.whatWeSolve}
                      </p>
                    </motion.div>

                    {/* How we help */}
                    <div>
                      <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">
                        How we help
                      </span>
                      <ul className="mt-2 space-y-1.5">
                        {industry.howWeHelp.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-navy/70"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-1.5 pt-2"
                    >
                      {industry.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 text-[10px] font-medium bg-navy/5 text-navy/60 rounded-full border border-navy/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export const IndustriesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expandedIndex !== null && sectionRef.current) {
        const target = event.target as Node;
        const cards = sectionRef.current.querySelectorAll('[data-industry-card]');
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
    <section id="industries" className="py-16 lg:py-20 bg-cream relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-[80px]" />
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
          <h2 className="font-playfair text-4xl lg:text-5xl text-navy mt-4">
            Trusted across <span className="italic text-gradient">sectors.</span>
          </h2>
          <p className="font-inter text-navy/60 mt-4 max-w-xl mx-auto">
            From startups to enterprises, we deliver solutions tailored to your industry's unique challenges.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              industry={industry}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
