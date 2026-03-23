// Solution carousel images - maps solution slugs to their image sets
// Many solutions share category-level images for visual consistency

// Custom Software Development
import customDev1 from "@/assets/solutions/custom-dev-1.jpg";
import customDev2 from "@/assets/solutions/custom-dev-2.jpg";
import customDev3 from "@/assets/solutions/custom-dev-3.jpg";

// Cloud & Infrastructure
import cloudMig1 from "@/assets/solutions/cloud-migration-1.jpg";
import cloudMig2 from "@/assets/solutions/cloud-migration-2.jpg";
import cloudMig3 from "@/assets/solutions/cloud-migration-3.jpg";

// IT Infrastructure
import infra1 from "@/assets/solutions/it-infrastructure-1.jpg";
import infra2 from "@/assets/solutions/it-infrastructure-2.jpg";
import infra3 from "@/assets/solutions/it-infrastructure-3.jpg";

// Technology Modernization
import techMod1 from "@/assets/solutions/technology-modernization-1.jpg";
import techMod2 from "@/assets/solutions/technology-modernization-2.jpg";
import techMod3 from "@/assets/solutions/technology-modernization-3.jpg";

// QA & Testing
import qa1 from "@/assets/solutions/qa-testing-1.jpg";
import qa2 from "@/assets/solutions/qa-testing-2.jpg";
import qa3 from "@/assets/solutions/qa-testing-3.jpg";

// Production Support
import prod1 from "@/assets/solutions/production-support-1.jpg";
import prod2 from "@/assets/solutions/production-support-2.jpg";
import prod3 from "@/assets/solutions/production-support-3.jpg";

// DevOps & SRE
import devops1 from "@/assets/solutions/devops-sre-1.jpg";
import devops2 from "@/assets/solutions/devops-sre-2.jpg";
import devops3 from "@/assets/solutions/devops-sre-3.jpg";

// Data & Analytics
import data1 from "@/assets/solutions/data-analytics-1.jpg";
import data2 from "@/assets/solutions/data-analytics-2.jpg";
import data3 from "@/assets/solutions/data-analytics-3.jpg";

// AI & ML (new high-quality unique images)
import aiMlHero from "@/assets/solutions/ai-ml-hero-1.jpg";
import genAiHero from "@/assets/solutions/generative-ai-hero-1.jpg";
import agenticAiHero from "@/assets/solutions/agentic-ai-hero-1.jpg";
import mlopsHero from "@/assets/solutions/mlops-hero-1.jpg";
import nlpHero from "@/assets/solutions/nlp-hero-1.jpg";
import ragHero from "@/assets/solutions/rag-hero-1.jpg";
import cvHero from "@/assets/solutions/computer-vision-hero-1.jpg";
import llmHero from "@/assets/solutions/llm-hero-1.jpg";
import promptEngHero from "@/assets/solutions/prompt-eng-hero-1.jpg";
// Legacy AI images for cross-references
import ai1 from "@/assets/solutions/ai-ml-solutions-1.jpg";
import ai2 from "@/assets/solutions/ai-ml-solutions-2.jpg";
import ai3 from "@/assets/solutions/ai-ml-solutions-3.jpg";

// Security
import sec1 from "@/assets/solutions/security-1.jpg";
import sec2 from "@/assets/solutions/security-2.jpg";
import sec3 from "@/assets/solutions/security-3.jpg";

// Mobile
import mobile1 from "@/assets/solutions/mobile-app-1.jpg";

// API Integration
import api1 from "@/assets/solutions/api-integration-1.jpg";

// Enterprise
import enterprise1 from "@/assets/solutions/enterprise-1.jpg";

// UX Design
import ux1 from "@/assets/solutions/ux-design-1.jpg";

// Generative AI
import genAi1 from "@/assets/solutions/gen-ai-1.jpg";

// Managed Services
import managed1 from "@/assets/solutions/managed-services-1.jpg";

// Supply Chain
import supply1 from "@/assets/solutions/supply-chain-1.jpg";

// Low Code
import lowCode1 from "@/assets/solutions/low-code-1.jpg";

// Disaster Recovery
import dr1 from "@/assets/solutions/disaster-recovery-1.jpg";

// LLM Solutions
import llm1 from "@/assets/solutions/llm-solutions-1.jpg";
import promptEng1 from "@/assets/solutions/prompt-engineering-1.jpg";

// Global Operations
import globalOps1 from "@/assets/solutions/global-operations-1.jpg";

// Database & Data Infrastructure
import dbAdmin1 from "@/assets/solutions/database-admin-1.jpg";
import dbMigration1 from "@/assets/solutions/database-migration-1.jpg";
import cloudDb1 from "@/assets/solutions/cloud-database-1.jpg";
import dataArch1 from "@/assets/solutions/data-architecture-1.jpg";
import nosql1 from "@/assets/solutions/nosql-databases-1.jpg";

// Reusable image sets by category
const customDevImages = [customDev1, customDev2, customDev3];
const cloudImages = [cloudMig1, cloudMig2, cloudMig3];
const infraImages = [infra1, infra2, infra3];
const techModImages = [techMod1, techMod2, techMod3];
const qaImages = [qa1, qa2, qa3];
const prodImages = [prod1, prod2, prod3];
const devopsImages = [devops1, devops2, devops3];
const dataImages = [data1, data2, data3];
const secImages = [sec1, sec2, sec3];
const mobileImages = [mobile1, customDev1, customDev2];
const apiImages = [api1, enterprise1, customDev3];
const enterpriseImages = [enterprise1, data2, infra1];
const uxImages = [ux1, customDev2, lowCode1];

const managedImages = [managed1, infra2, prod1];
const supplyImages = [supply1, enterprise1, data1];
const lowCodeImages = [lowCode1, ux1, customDev1];
const drImages = [dr1, infra1, cloudMig3];

export const solutionImages: Record<string, string[]> = {
  // Software Development
  "custom-app-development": customDevImages,
  "mobile-app-development": mobileImages,
  "api-integration": apiImages,
  "ui-ux-design": uxImages,
  "low-code-no-code": lowCodeImages,

  // Cloud
  "cloud-migration": cloudImages,
  "cloud-optimization": [cloudMig2, cloudMig1, infra3],
  "hybrid-multi-cloud": [cloudMig3, cloudMig1, cloudMig2],
  "serverless-architecture": [cloudMig2, devops3, cloudMig1],

  // Infrastructure
  "it-infrastructure": infraImages,
  "managed-services": managedImages,
  "it-service-management": [managed1, infra1, prod2],
  "it-asset-management": [infra1, managed1, infra3],
  "network-operations": [infra2, prod1, infra1],
  "help-desk-support": [managed1, prod2, infra2],

  // Modernization
  "technology-modernization": techModImages,
  "legacy-modernization": [techMod1, techMod2, customDev3],
  "platform-engineering": [devops3, techMod2, cloudMig2],

  // QA & Testing
  "qa-testing": qaImages,
  "performance-testing": [qa1, prod3, qa3],
  "security-testing": [sec1, qa2, sec3],
  "test-automation-framework": [qa1, qa3, devops1],
  "accessibility-testing": [qa2, ux1, qa1],

  // Production & Monitoring
  "production-support": prodImages,
  "observability-monitoring": [prod3, prod1, infra2],
  "disaster-recovery": drImages,
  "business-continuity": [dr1, prod1, infra1],

  // DevOps
  "devops-sre": devopsImages,
  "ci-cd-automation": [devops1, devops3, qa3],
  "infrastructure-as-code": [devops3, cloudMig2, devops1],
  "container-orchestration": [devops3, cloudMig2, devops2],
  "gitops-continuous-delivery": [devops1, devops3, devops2],
  "chaos-engineering": [devops2, prod3, devops1],
  "release-engineering": [devops1, qa3, devops2],
  "finops": [infra3, cloudMig1, data2],

  // Data
  "data-analytics": dataImages,
  "data-management": [data3, data1, data2],
  "business-intelligence": [data2, data1, data3],
  "data-governance": [data3, sec3, data1],
  "data-warehousing": [data1, data2, data3],
  "etl-data-pipelines": [data1, data3, data2],

  // AI & ML
  "ai-ml-solutions": aiImages,
  "generative-ai": genAiImages,
  "agentic-ai": [genAi1, ai2, ai1],
  "mlops": [ai1, devops1, ai2],
  "nlp-services": [genAi1, ai3, ai1],
  "rag-solutions": [genAi1, ai1, data1],
  "computer-vision": [ai1, ai2, ai3],
  "llm-solutions": [llm1, ai1, genAi1],
  "prompt-engineering": [promptEng1, llm1, ai2],

  // Security
  "data-security": secImages,
  "information-security": [sec1, sec3, sec2],
  "code-security": [sec1, qa1, devops1],
  "cloud-instance-security": [sec1, cloudMig3, sec3],
  "identity-access-management": [sec2, sec1, sec3],
  "cybersecurity-consulting": [sec1, sec2, sec3],
  "compliance-governance": [sec3, sec1, sec2],
  "soc-as-a-service": [sec1, prod1, sec3],
  "penetration-testing": [sec1, qa1, sec2],
  "zero-trust-security": [sec2, sec1, sec3],

  // Enterprise
  "erp-management": enterpriseImages,
  "crm-implementation": [enterprise1, data2, managed1],
  "enterprise-integration": [enterprise1, api1, data1],
  "enterprise-mobility": [mobile1, enterprise1, cloudMig2],
  "supply-chain-management": supplyImages,
  "enterprise-content-management": [enterprise1, data3, managed1],

  // Procurement
  "procurement-services": [supply1, enterprise1, managed1],
  "software-licensing": [managed1, enterprise1, infra1],
  "bulk-hardware-services": [infra1, managed1, supply1],
  "change-management": [managed1, techMod3, enterprise1],

  // Operations
  "global-operations-support": [globalOps1, prod1, managed1],

  // Databases & Data Infrastructure
  "database-administration": [dbAdmin1, infra1, data1],
  "database-migration": [dbMigration1, cloudMig1, data2],
  "cloud-database-services": [cloudDb1, cloudMig2, dbAdmin1],
  "data-architecture": [dataArch1, data1, data3],
  "nosql-newscale-databases": [nosql1, dbAdmin1, cloudDb1],
};