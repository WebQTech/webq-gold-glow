import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/HeroSection";
import { WebQCapabilities } from "@/components/WebQCapabilities";
import { MissionBanner } from "@/components/MissionBanner";
import { IndustriesSummary } from "@/components/IndustriesSummary";
import { UseCasesSummary } from "@/components/UseCasesSummary";
import { DeliveryMethodologySection } from "@/components/DeliveryMethodologySection";
import { TrustSection } from "@/components/TrustSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { InsightsSummary } from "@/components/InsightsSummary";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WebQ Technologies | AI, Cloud, Cybersecurity & Digital Transformation</title>
        <meta name="description" content="WebQ Technologies delivers enterprise AI, cloud infrastructure, cybersecurity, and digital transformation solutions for Fortune 500 companies and startups worldwide." />
      </Helmet>
      <div className="relative overflow-hidden bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <HeroSection />
        <WebQCapabilities />
        <MissionBanner />
        <IndustriesSummary />
        <UseCasesSummary />
        <DeliveryMethodologySection />
        <TrustSection />
        <CertificationsSection />
        <InsightsSummary />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
