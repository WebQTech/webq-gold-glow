import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Users, Gift, UserCheck, MapPin, Clock, ArrowRight, Heart, Zap, Globe, GraduationCap, Mail, ChevronDown, ChevronUp, Building2, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision insurance for you and your family." },
  { icon: Zap, title: "Learning & Growth", description: "Annual learning budget, certifications, and conference attendance." },
  { icon: Globe, title: "Remote Flexibility", description: "Work from anywhere with flexible hours and hybrid options." },
  { icon: Gift, title: "Competitive Compensation", description: "Industry-leading salaries, equity, and performance bonuses." },
];

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const usPositions: JobPosition[] = [
  {
    title: "SAP S/4HANA Functional Consultant",
    department: "SAP Practice",
    location: "Dublin, CA",
    type: "Full-time",
    level: "Senior",
    description: "Lead end-to-end SAP S/4HANA implementations across Finance, Supply Chain, and Manufacturing modules for enterprise clients.",
    responsibilities: [
      "Lead SAP S/4HANA implementation projects including blueprinting, configuration, testing, and go-live",
      "Gather business requirements and translate them into SAP functional solutions",
      "Perform fit-gap analysis and recommend best practices for SAP modules (FI/CO, MM, SD, PP)",
      "Collaborate with technical teams on custom ABAP development and integrations",
      "Provide post-go-live support and continuous improvement recommendations",
    ],
    qualifications: [
      "8+ years of SAP experience with at least 3 full-cycle S/4HANA implementations",
      "SAP certification in one or more modules (FI/CO, MM, SD, PP)",
      "Strong understanding of enterprise business processes",
      "Experience with SAP Activate methodology",
      "Excellent communication and client-facing skills",
    ],
  },
  {
    title: "SAP BTP Developer",
    department: "SAP Practice",
    location: "Dublin, CA / Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Design and develop custom applications and extensions on SAP Business Technology Platform (BTP) to enhance enterprise SAP landscapes.",
    responsibilities: [
      "Develop cloud-native applications on SAP BTP using CAP (Cloud Application Programming) model",
      "Build integrations between SAP and non-SAP systems using SAP Integration Suite",
      "Implement SAP Fiori/UI5 front-end applications",
      "Design and develop APIs and microservices on SAP BTP",
      "Leverage SAP HANA Cloud for data modeling and analytics",
    ],
    qualifications: [
      "5+ years of SAP development experience with focus on BTP services",
      "Proficiency in Node.js, Java, or ABAP for backend development",
      "Experience with SAP Fiori, SAPUI5, and SAP CAP model",
      "Knowledge of SAP Integration Suite (CPI) and API Management",
      "SAP BTP certification preferred",
    ],
  },
  {
    title: "SAP BASIS Administrator",
    department: "SAP Practice",
    location: "Dublin, CA",
    type: "Full-time",
    level: "Senior",
    description: "Manage and optimize SAP system landscapes across on-premise and cloud environments, ensuring high availability and performance.",
    responsibilities: [
      "Administer SAP system landscapes including S/4HANA, BW/4HANA, and Solution Manager",
      "Perform system installations, upgrades, patches, and migrations",
      "Monitor system performance, manage transports, and troubleshoot issues",
      "Implement disaster recovery and high availability strategies",
      "Manage SAP on cloud platforms (AWS, Azure, GCP) and RISE with SAP environments",
    ],
    qualifications: [
      "7+ years of SAP Basis/NetWeaver administration experience",
      "Experience with SAP HANA database administration",
      "Knowledge of SAP cloud deployments (RISE with SAP, BTP)",
      "Strong Linux/Windows server administration skills",
      "SAP Certified Technology Associate certification preferred",
    ],
  },
  {
    title: "Senior AI/ML Engineer",
    department: "AI & Data Science",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    description: "Design, develop, and deploy production-grade machine learning models and AI solutions for enterprise clients across multiple industries.",
    responsibilities: [
      "Architect and implement end-to-end ML pipelines from data ingestion to model deployment",
      "Design and train deep learning models using PyTorch and TensorFlow",
      "Build NLP solutions including LLM fine-tuning, RAG architectures, and conversational AI",
      "Develop computer vision systems for document processing and quality inspection",
      "Collaborate with data engineers to optimize data pipelines and feature stores",
      "Mentor junior engineers and establish ML engineering best practices",
    ],
    qualifications: [
      "7+ years of experience in machine learning engineering",
      "MS/PhD in Computer Science, AI, or related field",
      "Expert proficiency in Python, PyTorch/TensorFlow, and ML frameworks",
      "Experience with LLMs (GPT, LLaMA, Gemini) and prompt engineering",
      "Strong background in MLOps (MLflow, Kubeflow, SageMaker)",
      "Published research or patents in AI/ML is a plus",
    ],
  },
  {
    title: "AI Solutions Architect",
    department: "AI & Data Science",
    location: "New York, NY / Remote",
    type: "Full-time",
    level: "Senior",
    description: "Lead the design and architecture of AI-powered enterprise solutions, bridging client business needs with cutting-edge AI capabilities.",
    responsibilities: [
      "Design end-to-end AI solution architectures for enterprise clients",
      "Evaluate and recommend AI/ML technologies, platforms, and frameworks",
      "Lead proof-of-concept development and technical demonstrations",
      "Define AI strategy roadmaps aligned with client business objectives",
      "Ensure solutions meet scalability, security, and compliance requirements",
    ],
    qualifications: [
      "10+ years in software engineering with 5+ years in AI/ML solutions",
      "Experience architecting solutions on AWS SageMaker, Azure ML, or Google Vertex AI",
      "Strong understanding of GenAI, LLMs, and enterprise AI governance",
      "Excellent stakeholder communication and pre-sales experience",
      "Cloud architecture certifications (AWS/Azure/GCP) preferred",
    ],
  },
  {
    title: "Senior Data Scientist",
    department: "AI & Data Science",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    description: "Drive data-driven decision making by developing advanced analytics, predictive models, and statistical frameworks for enterprise clients.",
    responsibilities: [
      "Develop predictive models, recommendation systems, and anomaly detection algorithms",
      "Perform exploratory data analysis and feature engineering on large-scale datasets",
      "Build and deploy real-time scoring models using cloud ML platforms",
      "Create data visualizations and dashboards for executive stakeholders",
      "Design A/B testing frameworks and causal inference methodologies",
      "Translate complex analytical findings into actionable business recommendations",
    ],
    qualifications: [
      "6+ years of experience in data science or quantitative analytics",
      "MS/PhD in Statistics, Mathematics, Computer Science, or related field",
      "Expert in Python (scikit-learn, pandas, NumPy) and SQL",
      "Experience with big data tools (Spark, Databricks, BigQuery)",
      "Strong statistical foundations and experience with causal inference",
      "Domain expertise in financial services, healthcare, or supply chain is a plus",
    ],
  },
  {
    title: "Data Engineer",
    department: "AI & Data Science",
    location: "Dublin, CA / Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Build and maintain scalable data infrastructure and pipelines that power AI/ML models and enterprise analytics platforms.",
    responsibilities: [
      "Design and implement ETL/ELT pipelines using Apache Spark, Airflow, and dbt",
      "Build and manage data lakes and warehouses on cloud platforms",
      "Develop real-time streaming pipelines using Kafka and Flink",
      "Implement data quality frameworks and monitoring systems",
      "Optimize data models for performance and cost efficiency",
    ],
    qualifications: [
      "5+ years of data engineering experience",
      "Proficiency in Python, SQL, and Spark",
      "Experience with cloud data platforms (Snowflake, Databricks, BigQuery)",
      "Knowledge of data modeling, warehousing, and governance",
      "Experience with CI/CD for data pipelines",
    ],
  },
  {
    title: "Cloud Solutions Architect",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    level: "Senior",
    description: "Design and implement enterprise cloud architectures across AWS, Azure, and GCP, enabling digital transformation at scale.",
    responsibilities: [
      "Architect multi-cloud and hybrid cloud solutions for enterprise clients",
      "Lead cloud migration assessments and develop migration strategies",
      "Design infrastructure-as-code solutions using Terraform and CloudFormation",
      "Implement cloud security best practices and compliance frameworks",
      "Optimize cloud costs and performance across large-scale deployments",
    ],
    qualifications: [
      "8+ years of experience in cloud architecture and infrastructure",
      "Multiple cloud certifications (AWS Solutions Architect, Azure Solutions Architect)",
      "Strong knowledge of containerization (Kubernetes, Docker) and serverless",
      "Experience with enterprise networking, security, and compliance",
      "Proven track record of large-scale cloud migrations",
    ],
  },
];

const indiaPositions: JobPosition[] = [
  {
    title: "SAP ABAP Developer",
    department: "SAP Practice",
    location: "Chennai, India",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Develop and maintain custom ABAP programs, enhancements, and interfaces for SAP ECC and S/4HANA environments.",
    responsibilities: [
      "Develop custom ABAP programs, reports, interfaces, conversions, and enhancements (RICEF)",
      "Build SAP Fiori and SAPUI5 applications for modern user experiences",
      "Implement BAdIs, user exits, and enhancement framework modifications",
      "Develop and optimize SAP HANA CDS views and AMDP procedures",
      "Support system integration testing and performance optimization",
    ],
    qualifications: [
      "5+ years of SAP ABAP development experience",
      "Knowledge of S/4HANA development model and CDS views",
      "Experience with SAP Fiori/UI5 development",
      "Understanding of SAP modules (FI/CO, MM, SD)",
      "Strong debugging and problem-solving skills",
    ],
  },
  {
    title: "AI/ML Engineer",
    department: "AI & Data Science",
    location: "Bangalore, India",
    type: "Full-time",
    level: "Mid",
    description: "Build and deploy machine learning models and AI solutions supporting global delivery teams across multiple client engagements.",
    responsibilities: [
      "Develop and train ML models using Python, TensorFlow, and PyTorch",
      "Build end-to-end ML pipelines for data preprocessing, training, and deployment",
      "Implement NLP solutions including text classification, NER, and sentiment analysis",
      "Deploy models on cloud platforms (AWS SageMaker, Azure ML, GCP Vertex AI)",
      "Write production-quality code with proper testing and documentation",
    ],
    qualifications: [
      "3+ years of experience in ML/AI engineering",
      "B.Tech/M.Tech in Computer Science or related field",
      "Proficiency in Python, scikit-learn, TensorFlow/PyTorch",
      "Experience with cloud ML services and containerized deployments",
      "Knowledge of LLMs and generative AI frameworks is a plus",
    ],
  },
  {
    title: "Data Scientist",
    department: "AI & Data Science",
    location: "Hyderabad, India",
    type: "Full-time",
    level: "Mid",
    description: "Apply statistical modeling and machine learning to solve complex business problems for clients across financial services, healthcare, and retail.",
    responsibilities: [
      "Develop predictive analytics and machine learning models",
      "Perform statistical analysis and hypothesis testing on large datasets",
      "Build interactive dashboards and reports using Power BI or Tableau",
      "Collaborate with cross-functional teams to understand business requirements",
      "Present analytical findings and recommendations to stakeholders",
    ],
    qualifications: [
      "3+ years of data science experience",
      "M.Sc/M.Tech in Statistics, Mathematics, or Computer Science",
      "Strong proficiency in Python, R, and SQL",
      "Experience with visualization tools (Power BI, Tableau)",
      "Good communication skills for client interactions",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    level: "Mid",
    description: "Design and manage CI/CD pipelines, cloud infrastructure, and automation frameworks for enterprise application deployments.",
    responsibilities: [
      "Build and maintain CI/CD pipelines using Jenkins, GitLab CI, or GitHub Actions",
      "Manage cloud infrastructure using Terraform and Ansible",
      "Implement container orchestration with Kubernetes and Docker",
      "Set up monitoring and alerting using Prometheus, Grafana, and ELK stack",
      "Ensure infrastructure security and compliance standards",
    ],
    qualifications: [
      "4+ years of DevOps/SRE experience",
      "Proficiency in Linux, scripting (Bash/Python), and IaC tools",
      "Experience with AWS, Azure, or GCP cloud platforms",
      "Strong knowledge of Docker and Kubernetes",
      "Cloud or Kubernetes certifications preferred",
    ],
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Chennai, India",
    type: "Full-time",
    level: "Mid",
    description: "Build modern web applications and microservices for enterprise clients using React, Node.js, and cloud-native technologies.",
    responsibilities: [
      "Develop responsive front-end applications using React and TypeScript",
      "Build RESTful APIs and microservices using Node.js and Python",
      "Design and implement database schemas (PostgreSQL, MongoDB)",
      "Write unit tests, integration tests, and participate in code reviews",
      "Collaborate with UX designers and product managers on feature delivery",
    ],
    qualifications: [
      "4+ years of full-stack development experience",
      "Proficiency in React, TypeScript, Node.js",
      "Experience with relational and NoSQL databases",
      "Knowledge of cloud services (AWS/Azure/GCP)",
      "Agile development experience",
    ],
  },
];

const applicationSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255),
  position: z.string().min(1, "Please select a position"),
  resumeLink: z.string().trim().min(1, "Resume link is required").url("Please enter a valid URL"),
  coverNote: z.string().trim().max(500, "Cover note must be less than 500 characters").optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const allPositions = [
  ...usPositions.map(p => ({ title: p.title, location: p.location })),
  ...indiaPositions.map(p => ({ title: p.title, location: p.location })),
];

const internshipPrograms = [
  {
    title: "Summer Technology Internship",
    duration: "12 weeks",
    areas: ["Software Engineering", "Data Science", "Cloud Engineering"],
    deadline: "March 15, 2026",
  },
  {
    title: "Graduate Leadership Program",
    duration: "24 months",
    areas: ["Consulting", "Product Management", "Technical Leadership"],
    deadline: "April 30, 2026",
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

const JobCard = ({ job, index }: { job: JobPosition; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left"
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
            {expanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </button>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6 border-t border-border/50 pt-4"
        >
          <p className="text-muted-foreground mb-5">{job.description}</p>

          <h4 className="text-sm font-semibold text-foreground mb-3">Key Responsibilities:</h4>
          <ul className="space-y-2 mb-5">
            {job.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h4 className="text-sm font-semibold text-foreground mb-3">Qualifications:</h4>
          <ul className="space-y-2 mb-5">
            {job.qualifications.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={`mailto:hr@webqtech.com?subject=Application%20for%20${encodeURIComponent(job.title)}&body=Hi%20WebQ%20HR%20Team%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20${encodeURIComponent(job.title)}%20position.%0APlease%20find%20my%20resume%20attached.%0A%0ABest%20regards`}
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            <Mail className="w-4 h-4" />
            Apply Now
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | WebQ Technologies - Join Our Team</title>
        <meta name="description" content="Explore career opportunities at WebQ Technologies. Join our team of innovators and help shape the future of enterprise technology." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <main id="main-content" className="focus:outline-none" tabIndex={-1}>
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
          <section id="open-positions" className="py-10 lg:py-16 scroll-mt-20">
            <div className="container mx-auto px-6 lg:px-12">
              {/* US Positions */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">United States</h2>
                    <p className="text-sm text-muted-foreground">{usPositions.length} open positions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {usPositions.map((job, index) => (
                    <JobCard key={job.title} job={job} index={index} />
                  ))}
                </div>
              </div>

              {/* India Positions */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">India</h2>
                    <p className="text-sm text-muted-foreground">{indiaPositions.length} open positions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {indiaPositions.map((job, index) => (
                    <JobCard key={job.title} job={job} index={index} />
                  ))}
                </div>
              </div>

              {/* Send Resume CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20 text-center"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Don't see a role that fits?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <a
                  href="mailto:hr@webqtech.com?subject=Resume%20Submission&body=Hi%20WebQ%20HR%20Team%2C%0A%0APlease%20find%20my%20resume%20attached.%0A%0ABest%20regards"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Resume to <span className="underline">hr@webqtech.com</span>
                </a>
              </motion.div>
            </div>
          </section>

          {/* Application Form */}
          <ApplicationForm />
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
