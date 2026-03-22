import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "React Native"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "Spring Boot", ".NET", "Go", "Ruby on Rails", "PHP / Laravel"],
  },
  {
    category: "Cloud Platforms",
    items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Oracle Cloud", "IBM Cloud"],
  },
  {
    category: "DevOps & CI/CD",
    items: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "GitLab CI/CD", "ArgoCD"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB", "Cassandra", "Snowflake"],
  },
  {
    category: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "scikit-learn", "Apache Spark MLlib", "Vertex AI"],
  },
  {
    category: "Data & Analytics",
    items: ["Apache Kafka", "Apache Airflow", "dbt", "Tableau", "Power BI", "Looker", "Databricks", "Apache Flink"],
  },
  {
    category: "Security",
    items: ["CrowdStrike", "Splunk", "Palo Alto Networks", "HashiCorp Vault", "SonarQube", "Snyk", "OWASP ZAP", "Fortify"],
  },
  {
    category: "Enterprise Platforms",
    items: ["SAP", "Salesforce", "ServiceNow", "Microsoft Dynamics 365", "Oracle ERP", "Workday", "HubSpot", "Jira / Atlassian"],
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
              {technologies.map((tech, idx) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 pb-2 border-b border-border">
                    {tech.category}
                    <span className="ml-2 text-xs font-normal text-muted-foreground lowercase tracking-normal">
                      {tech.items.length} technologies
                    </span>
                  </h3>
                  <ul className="space-y-2">
                    {tech.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-base text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
