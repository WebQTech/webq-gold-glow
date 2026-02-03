import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, Users, Award, MapPin, Handshake, Target, Eye, Heart, Globe, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "2,000+", label: "Projects Delivered" },
  { value: "25+", label: "Countries Served" },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive edge.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering measurable outcomes that drive your business forward.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We work as an extension of your team, fostering open communication and shared goals.",
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "Quality is non-negotiable. We deliver solutions that exceed expectations and stand the test of time.",
  },
];


const globalPresence = [
  { region: "North America", offices: ["New York", "San Francisco", "Toronto"] },
  { region: "Europe", offices: ["London", "Berlin", "Amsterdam"] },
  { region: "Asia Pacific", offices: ["Singapore", "Sydney", "Tokyo"] },
  { region: "India", offices: ["Bangalore", "Mumbai", "Hyderabad"] },
];

const partners = [
  "Microsoft", "AWS", "Google Cloud", "Salesforce", "SAP", "Oracle", "IBM", "ServiceNow"
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | WebQ Technologies - Our Story, Leadership & Values</title>
        <meta name="description" content="Learn about WebQ Technologies' mission, leadership team, core values, and global presence. 15+ years of delivering enterprise technology solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main id="main-content">
          {/* Hero Section */}
          <section className="relative py-12 lg:py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                  Transforming Businesses Through <span className="text-primary">Technology</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For over 15 years, WebQ Technologies has been at the forefront of digital transformation, helping enterprises worldwide harness the power of technology to achieve their goals.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-8 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-10 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Story</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    From Startup to Global Technology Leader
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Founded in 2010, WebQ Technologies began with a simple mission: to make enterprise technology accessible and impactful. What started as a small team of passionate technologists has grown into a global force of over 2,000 experts.
                    </p>
                    <p>
                      Today, we partner with Fortune 500 companies and innovative startups alike, delivering solutions that drive real business outcomes. Our expertise spans artificial intelligence, cloud computing, cybersecurity, and digital transformation.
                    </p>
                    <p>
                      We believe that technology should empower, not complicate. That's why we focus on solutions that are not only technically excellent but also practical and user-centric.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                    alt="WebQ Technologies team collaboration"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Years of Innovation</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-10 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card p-8 rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To empower organizations with innovative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card p-8 rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To be the world's most trusted technology partner, known for delivering transformative solutions that shape the future of enterprise technology.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-10 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Values</span>
                <h2 className="text-3xl font-bold text-foreground mt-4">
                  What Drives Us Forward
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          {/* Global Presence */}
          <section className="py-10 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">Global Presence</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Serving Clients Worldwide
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {globalPresence.map((region, index) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{region.region}</h3>
                    </div>
                    <ul className="space-y-2">
                      {region.offices.map((office) => (
                        <li key={office} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {office}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="py-10 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Handshake className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">Strategic Partners</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Partnering with Industry Leaders
                </h2>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="px-8 py-4 bg-card rounded-lg border border-border text-foreground font-semibold hover:border-primary/50 transition-all"
                  >
                    {partner}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
