// Solution carousel images - maps solution slugs to their image sets

// Cloud & Infrastructure (business scenario images)
import cloudMig1 from "@/assets/solutions/cloud-migration-1.jpg";
import cloudMigBiz from "@/assets/solutions/cloud-migration-biz.jpg";
import itInfraBiz from "@/assets/solutions/it-infra-biz.jpg";
import cloudOptBiz from "@/assets/solutions/cloud-optimize-biz.jpg";
import hybridCloudBiz from "@/assets/solutions/hybrid-cloud-biz.jpg";
import finopsBiz from "@/assets/solutions/finops-biz.jpg";
import serverlessBiz from "@/assets/solutions/serverless-biz.jpg";

// DevOps & SRE (business scenario images)
import devopsBiz from "@/assets/solutions/devops-biz.jpg";
import cicdBiz from "@/assets/solutions/cicd-biz.jpg";
import iacBiz from "@/assets/solutions/iac-biz.jpg";
import observabilityBiz from "@/assets/solutions/observability-biz.jpg";
import platformEngBiz from "@/assets/solutions/platform-eng-biz.jpg";
import containersBiz from "@/assets/solutions/containers-biz.jpg";

// AI & ML (unique hero images per solution)
import aiMlHero from "@/assets/solutions/ai-ml-hero-1.jpg";
import genAiHero from "@/assets/solutions/generative-ai-hero-1.jpg";
import agenticAiHero from "@/assets/solutions/agentic-ai-hero-1.jpg";
import mlopsHero from "@/assets/solutions/mlops-hero-1.jpg";
import nlpHero from "@/assets/solutions/nlp-hero-1.jpg";
import ragHero from "@/assets/solutions/rag-hero-1.jpg";
import cvHero from "@/assets/solutions/computer-vision-hero-1.jpg";
import llmHero from "@/assets/solutions/llm-hero-1.jpg";
import promptEngHero from "@/assets/solutions/prompt-eng-hero-1.jpg";

// Security (business scenario images)
import securityBiz from "@/assets/solutions/security-biz.jpg";
import iamBiz from "@/assets/solutions/iam-biz.jpg";
import complianceBiz from "@/assets/solutions/compliance-biz.jpg";
import pentestBiz from "@/assets/solutions/pentest-biz.jpg";

// Analytics & Data (business scenario images)
import analyticsDashBiz from "@/assets/solutions/analytics-dashboard-biz.jpg";
import biReportingBiz from "@/assets/solutions/bi-reporting-biz.jpg";
import dataPipelineBiz from "@/assets/solutions/data-pipeline-biz.jpg";

// App Development (business scenario images)
import customAppBiz from "@/assets/solutions/custom-app-biz.jpg";
import mobileAppBiz from "@/assets/solutions/mobile-app-biz.jpg";
import apiIntegrationBiz from "@/assets/solutions/api-integration-biz.jpg";

// Enterprise (business scenario images)
import erpBiz from "@/assets/solutions/erp-biz.jpg";
import crmBiz from "@/assets/solutions/crm-biz.jpg";
import supplyChainBiz from "@/assets/solutions/supply-chain-biz.jpg";

// QA & Testing (business scenario images)
import qaAutomationBiz from "@/assets/solutions/qa-automation-biz.jpg";
import performanceTestBiz from "@/assets/solutions/performance-test-biz.jpg";
import accessibilityTestBiz from "@/assets/solutions/accessibility-test-biz.jpg";

// Databases (business scenario images)
import dbAdminBiz from "@/assets/solutions/db-admin-biz.jpg";
import dbMigrationBiz from "@/assets/solutions/db-migration-biz.jpg";
import dataArchBiz from "@/assets/solutions/data-arch-biz.jpg";

// Operations (business scenario images)
import managedServicesBiz from "@/assets/solutions/managed-services-biz.jpg";
import helpdeskBiz from "@/assets/solutions/helpdesk-biz.jpg";
import disasterRecoveryBiz from "@/assets/solutions/disaster-recovery-biz.jpg";

// Legacy images kept for cross-referencing
import techMod1 from "@/assets/solutions/technology-modernization-1.jpg";
import techMod2 from "@/assets/solutions/technology-modernization-2.jpg";
import lowCode1 from "@/assets/solutions/low-code-1.jpg";
import ux1 from "@/assets/solutions/ux-design-1.jpg";

export const solutionImages: Record<string, string[]> = {
  // Software Development (business scenario images)
  "custom-app-development": [customAppBiz, mobileAppBiz, apiIntegrationBiz],
  "mobile-app-development": [mobileAppBiz, customAppBiz, apiIntegrationBiz],
  "api-integration": [apiIntegrationBiz, customAppBiz, mobileAppBiz],
  "ui-ux-design": [customAppBiz, mobileAppBiz, ux1],
  "low-code-no-code": [customAppBiz, mobileAppBiz, lowCode1],

  // Cloud (business scenario images)
  "cloud-migration": [cloudMigBiz, cloudMig1, itInfraBiz],
  "cloud-optimization": [cloudOptBiz, finopsBiz, cloudMigBiz],
  "hybrid-multi-cloud": [hybridCloudBiz, cloudMigBiz, serverlessBiz],
  "serverless-architecture": [serverlessBiz, cloudMigBiz, hybridCloudBiz],

  // Infrastructure (business scenario images)
  "it-infrastructure": [itInfraBiz, cloudMigBiz, observabilityBiz],
  "managed-services": [managedServicesBiz, helpdeskBiz, itInfraBiz],
  "it-service-management": [managedServicesBiz, helpdeskBiz, observabilityBiz],
  "it-asset-management": [managedServicesBiz, itInfraBiz, helpdeskBiz],
  "network-operations": [observabilityBiz, managedServicesBiz, itInfraBiz],
  "help-desk-support": [helpdeskBiz, managedServicesBiz, observabilityBiz],

  // Modernization
  "technology-modernization": [customAppBiz, techMod1, techMod2],
  "legacy-modernization": [customAppBiz, techMod1, apiIntegrationBiz],
  "platform-engineering": [platformEngBiz, devopsBiz, cicdBiz],

  // QA & Testing (business scenario images)
  "qa-testing": [qaAutomationBiz, performanceTestBiz, accessibilityTestBiz],
  "performance-testing": [performanceTestBiz, qaAutomationBiz, observabilityBiz],
  "security-testing": [pentestBiz, qaAutomationBiz, securityBiz],
  "test-automation-framework": [qaAutomationBiz, performanceTestBiz, cicdBiz],
  "accessibility-testing": [accessibilityTestBiz, qaAutomationBiz, customAppBiz],

  // Production & Monitoring (business scenario images)
  "production-support": [managedServicesBiz, observabilityBiz, helpdeskBiz],
  "observability-monitoring": [observabilityBiz, devopsBiz, itInfraBiz],
  "disaster-recovery": [disasterRecoveryBiz, managedServicesBiz, itInfraBiz],
  "business-continuity": [disasterRecoveryBiz, managedServicesBiz, observabilityBiz],

  // DevOps (business scenario images)
  "devops-sre": [devopsBiz, cicdBiz, observabilityBiz],
  "ci-cd-automation": [cicdBiz, devopsBiz, containersBiz],
  "infrastructure-as-code": [iacBiz, devopsBiz, cloudMigBiz],
  "container-orchestration": [containersBiz, devopsBiz, observabilityBiz],
  "gitops-continuous-delivery": [cicdBiz, iacBiz, devopsBiz],
  "chaos-engineering": [observabilityBiz, devopsBiz, containersBiz],
  "release-engineering": [cicdBiz, devopsBiz, iacBiz],
  "finops": [finopsBiz, cloudOptBiz, cloudMigBiz],

  // Data & Analytics (business scenario images)
  "data-analytics": [analyticsDashBiz, biReportingBiz, dataPipelineBiz],
  "data-management": [dataPipelineBiz, analyticsDashBiz, biReportingBiz],
  "business-intelligence": [biReportingBiz, analyticsDashBiz, dataPipelineBiz],
  "data-governance": [dataPipelineBiz, complianceBiz, analyticsDashBiz],
  "data-warehousing": [analyticsDashBiz, dataPipelineBiz, biReportingBiz],
  "etl-data-pipelines": [dataPipelineBiz, analyticsDashBiz, dataArchBiz],

  // AI & ML (unique hero images per solution)
  "ai-ml-solutions": [aiMlHero, genAiHero, llmHero],
  "generative-ai": [genAiHero, aiMlHero, promptEngHero],
  "agentic-ai": [agenticAiHero, aiMlHero, mlopsHero],
  "mlops": [mlopsHero, aiMlHero, agenticAiHero],
  "nlp-services": [nlpHero, genAiHero, ragHero],
  "rag-solutions": [ragHero, llmHero, nlpHero],
  "computer-vision": [cvHero, aiMlHero, agenticAiHero],
  "llm-solutions": [llmHero, ragHero, genAiHero],
  "prompt-engineering": [promptEngHero, llmHero, genAiHero],

  // Security (business scenario images)
  "data-security": [securityBiz, complianceBiz, pentestBiz],
  "information-security": [securityBiz, iamBiz, complianceBiz],
  "code-security": [pentestBiz, securityBiz, cicdBiz],
  "cloud-instance-security": [securityBiz, cloudMigBiz, complianceBiz],
  "identity-access-management": [iamBiz, securityBiz, complianceBiz],
  "cybersecurity-consulting": [securityBiz, pentestBiz, complianceBiz],
  "compliance-governance": [complianceBiz, securityBiz, iamBiz],
  "soc-as-a-service": [securityBiz, observabilityBiz, pentestBiz],
  "penetration-testing": [pentestBiz, securityBiz, iamBiz],
  "zero-trust-security": [iamBiz, securityBiz, pentestBiz],

  // Enterprise (business scenario images)
  "erp-management": [erpBiz, crmBiz, supplyChainBiz],
  "crm-implementation": [crmBiz, erpBiz, analyticsDashBiz],
  "enterprise-integration": [apiIntegrationBiz, erpBiz, crmBiz],
  "enterprise-mobility": [mobileAppBiz, erpBiz, cloudMigBiz],
  "supply-chain-management": [supplyChainBiz, erpBiz, analyticsDashBiz],
  "enterprise-content-management": [erpBiz, crmBiz, managedServicesBiz],

  // Procurement (business scenario images)
  "procurement-services": [supplyChainBiz, erpBiz, managedServicesBiz],
  "software-licensing": [managedServicesBiz, erpBiz, itInfraBiz],
  "bulk-hardware-services": [itInfraBiz, managedServicesBiz, supplyChainBiz],
  "change-management": [erpBiz, managedServicesBiz, customAppBiz],

  // Operations (business scenario images)
  "global-operations-support": [managedServicesBiz, helpdeskBiz, observabilityBiz],

  // Databases & Data Infrastructure (business scenario images)
  "database-administration": [dbAdminBiz, dbMigrationBiz, dataArchBiz],
  "database-migration": [dbMigrationBiz, dbAdminBiz, cloudMigBiz],
  "cloud-database-services": [dbAdminBiz, cloudMigBiz, dbMigrationBiz],
  "data-architecture": [dataArchBiz, dbAdminBiz, dataPipelineBiz],
  "nosql-newscale-databases": [dbAdminBiz, dataArchBiz, dbMigrationBiz],
};
