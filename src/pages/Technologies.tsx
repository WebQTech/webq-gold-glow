import { Link } from "react-router-dom";
import {
  ArrowRight, Monitor, Code2, Smartphone, FileCode, Paintbrush, Layers, Globe, Cpu,
  Server, Terminal, Coffee, Cog, Gem, Hash, FileJson,
  Cloud, CloudCog, Database as DbIcon, Building2,
  Container, Ship, Blocks, Settings, GitBranch, Github, GitPullRequest, Workflow,
  HardDrive, CircleDot, Leaf, Zap, Search, CloudLightning, Grid3X3, Snowflake,
  Brain, Flame, Bot, Link2, Smile, FlaskConical, Sparkles, BarChart3,
  Radio, Wind, Triangle, LayoutDashboard, PieChart, Eye, Boxes, Activity,
  Shield, ShieldCheck, Lock, KeyRound, Bug, ScanLine, Crosshair, ShieldAlert,
  Cable, Headset, Wrench, Truck, BookOpen, Users, ShoppingCart, ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: LucideIcon;
}

interface TechCategory {
  category: string;
  categoryIcon: LucideIcon;
  items: TechItem[];
}

const technologies: TechCategory[] = [
  {
    category: "Frontend",
    categoryIcon: Monitor,
    items: [
      { name: "React", icon: Code2 },
      { name: "Angular", icon: Globe },
      { name: "Vue.js", icon: Layers },
      { name: "Next.js", icon: FileCode },
      { name: "TypeScript", icon: FileJson },
      { name: "Tailwind CSS", icon: Paintbrush },
      { name: "Flutter", icon: Smartphone },
      { name: "React Native", icon: Smartphone },
    ],
  },
  {
    category: "Backend",
    categoryIcon: Server,
    items: [
      { name: "Node.js", icon: Terminal },
      { name: "Python", icon: Hash },
      { name: "Java", icon: Coffee },
      { name: "Spring Boot", icon: Leaf },
      { name: ".NET", icon: Cpu },
      { name: "Go", icon: Cog },
      { name: "Ruby on Rails", icon: Gem },
      { name: "PHP / Laravel", icon: Code2 },
    ],
  },
  {
    category: "Cloud Platforms",
    categoryIcon: Cloud,
    items: [
      { name: "Amazon Web Services (AWS)", icon: Cloud },
      { name: "Microsoft Azure", icon: CloudCog },
      { name: "Google Cloud Platform (GCP)", icon: Cloud },
      { name: "Oracle Cloud", icon: DbIcon },
      { name: "IBM Cloud", icon: Building2 },
    ],
  },
  {
    category: "DevOps & CI/CD",
    categoryIcon: Container,
    items: [
      { name: "Docker", icon: Container },
      { name: "Kubernetes", icon: Ship },
      { name: "Terraform", icon: Blocks },
      { name: "Ansible", icon: Settings },
      { name: "Jenkins", icon: Cog },
      { name: "GitHub Actions", icon: Github },
      { name: "GitLab CI/CD", icon: GitBranch },
      { name: "ArgoCD", icon: Workflow },
    ],
  },
  {
    category: "Databases",
    categoryIcon: HardDrive,
    items: [
      { name: "PostgreSQL", icon: DbIcon },
      { name: "MySQL", icon: DbIcon },
      { name: "MongoDB", icon: Leaf },
      { name: "Redis", icon: Zap },
      { name: "Elasticsearch", icon: Search },
      { name: "DynamoDB", icon: CloudLightning },
      { name: "Cassandra", icon: Grid3X3 },
      { name: "Snowflake", icon: Snowflake },
    ],
  },
  {
    category: "AI & Machine Learning",
    categoryIcon: Brain,
    items: [
      { name: "TensorFlow", icon: Brain },
      { name: "PyTorch", icon: Flame },
      { name: "OpenAI", icon: Bot },
      { name: "LangChain", icon: Link2 },
      { name: "Hugging Face", icon: Smile },
      { name: "scikit-learn", icon: FlaskConical },
      { name: "Apache Spark MLlib", icon: Sparkles },
      { name: "Vertex AI", icon: BarChart3 },
    ],
  },
  {
    category: "Data & Analytics",
    categoryIcon: BarChart3,
    items: [
      { name: "Apache Kafka", icon: Radio },
      { name: "Apache Airflow", icon: Wind },
      { name: "dbt", icon: Triangle },
      { name: "Tableau", icon: LayoutDashboard },
      { name: "Power BI", icon: PieChart },
      { name: "Looker", icon: Eye },
      { name: "Databricks", icon: Boxes },
      { name: "Apache Flink", icon: Activity },
    ],
  },
  {
    category: "Security",
    categoryIcon: Shield,
    items: [
      { name: "CrowdStrike", icon: ShieldCheck },
      { name: "Splunk", icon: Search },
      { name: "Palo Alto Networks", icon: Lock },
      { name: "HashiCorp Vault", icon: KeyRound },
      { name: "SonarQube", icon: Bug },
      { name: "Snyk", icon: ScanLine },
      { name: "OWASP ZAP", icon: Crosshair },
      { name: "Fortify", icon: ShieldAlert },
    ],
  },
  {
    category: "Enterprise Platforms",
    categoryIcon: Building2,
    items: [
      { name: "SAP", icon: Cable },
      { name: "Salesforce", icon: Users },
      { name: "ServiceNow", icon: Headset },
      { name: "Microsoft Dynamics 365", icon: Wrench },
      { name: "Oracle ERP", icon: Building2 },
      { name: "Workday", icon: ClipboardList },
      { name: "HubSpot", icon: ShoppingCart },
      { name: "Jira / Atlassian", icon: BookOpen },
    ],
  },
];

const Technologies = () => {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero */}
        <section className="py-10 lg:py-14 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Technologies We Work With
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We leverage industry-leading tools and platforms to deliver scalable, secure, and high-performance solutions across every layer of the technology stack.
            </p>
          </div>
        </section>

        {/* Technology Grid */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, idx) => {
                const CategoryIcon = tech.categoryIcon;
                return (
                  <motion.div
                    key={tech.category}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
                  >
                    <h3 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider mb-4 pb-2 border-b border-border">
                      <CategoryIcon className="w-4 h-4 text-primary" />
                      {tech.category}
                      <span className="text-xs font-normal text-muted-foreground lowercase tracking-normal">
                        {tech.items.length} technologies
                      </span>
                    </h3>
                    <ul className="space-y-2">
                      {tech.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <li
                            key={item.name}
                            className="flex items-center gap-2.5 text-base text-foreground"
                          >
                            <ItemIcon className="w-4 h-4 text-primary/70 shrink-0" />
                            {item.name}
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Need a Specific Technology?
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Our teams are proficient across a wide range of technologies. Let&apos;s discuss your requirements.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 btn-primary"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technologies;
