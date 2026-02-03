import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Users, Gift, UserCheck, MapPin, Clock, ArrowRight, Heart, Zap, Globe, GraduationCap, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision insurance for you and your family." },
  { icon: Zap, title: "Learning & Growth", description: "Annual learning budget, certifications, and conference attendance." },
  { icon: Globe, title: "Remote Flexibility", description: "Work from anywhere with flexible hours and hybrid options." },
  { icon: Gift, title: "Competitive Compensation", description: "Industry-leading salaries, equity, and performance bonuses." },
];

const openPositions = [
  {
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Cloud Solutions Architect",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Product Manager - AI Platform",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Senior",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    level: "Mid",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "London, UK",
    type: "Full-time",
    level: "Mid",
  },
  {
    title: "Data Scientist",
    department: "Data & Analytics",
    location: "Singapore",
    type: "Full-time",
    level: "Mid-Senior",
  },
  {
    title: "Technical Project Manager",
    department: "Operations",
    location: "Toronto, Canada",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
  },
];

const internshipPrograms = [
  {
    title: "Summer Technology Internship",
    duration: "12 weeks",
    areas: ["Software Engineering", "Data Science", "Cloud Engineering"],
    deadline: "March 15, 2025",
  },
  {
    title: "Graduate Leadership Program",
    duration: "24 months",
    areas: ["Consulting", "Product Management", "Technical Leadership"],
    deadline: "April 30, 2025",
  },
];

const lifeAtWebQ = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop",
    caption: "Collaborative team environment",
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop",
    caption: "Innovation workshops",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop",
    caption: "Team celebrations",
  },
  {
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop",
    caption: "Global conferences",
  },
];

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | WebQ Technologies - Join Our Team</title>
        <meta name="description" content="Explore career opportunities at WebQ Technologies. Join our team of innovators and help shape the future of enterprise technology." />
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
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Careers</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                  Build the <span className="text-primary">Future</span> With Us
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Join a team of passionate innovators working on cutting-edge technology solutions that transform businesses worldwide.
                </p>
                <a href="#open-positions" className="btn-primary inline-flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </section>

          {/* Why Join Us */}
          <section className="py-10 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why WebQ</span>
                <h2 className="text-3xl font-bold text-foreground mt-4">
                  More Than Just a Job
                </h2>
                <p className="text-muted-foreground mt-4">
                  We offer a workplace where innovation thrives, growth is encouraged, and your work makes a real impact.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Life at WebQ */}
          <section className="py-10 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-2 mb-8">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Life at WebQ</span>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {lifeAtWebQ.map((item, index) => (
                  <motion.div
                    key={item.caption}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <p className="text-white text-sm font-medium">{item.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="open-positions" className="py-10 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-2 mb-8">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Open Positions</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Current Opportunities</h2>
              
              <div className="space-y-4">
                {openPositions.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all group cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {job.level}
                        </span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Send Resume CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20 text-center"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Don't see a role that fits?
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <a
                  href="mailto:contact@webqtech.com?subject=Resume%20Submission&body=Hi%20WebQ%20Team%2C%0A%0APlease%20find%20my%20resume%20attached.%0A%0ABest%20regards"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Resume to contact@webqtech.com
                </a>
              </motion.div>
            </div>
          </section>

          {/* Internships */}
          <section className="py-10 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Early Careers</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Internship Programs</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {internshipPrograms.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Duration: {program.duration}</p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Focus Areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.areas.map((area) => (
                          <span key={area} className="px-3 py-1 text-xs bg-secondary rounded-full text-foreground">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-primary font-medium">Application Deadline: {program.deadline}</p>
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

export default Careers;
