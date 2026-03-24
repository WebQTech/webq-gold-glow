import { HeroSection } from "@/components/HeroSection";
import { WebQCapabilities } from "@/components/WebQCapabilities";
import { MissionBanner } from "@/components/MissionBanner";
import { IndustriesSummary } from "@/components/IndustriesSummary";
import { UseCasesSummary } from "@/components/UseCasesSummary";
import { DeliveryMethodologySection } from "@/components/DeliveryMethodologySection";
import { TrustSection } from "@/components/TrustSection";
import { InsightsSummary } from "@/components/InsightsSummary";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <HeroSection />
        <WebQCapabilities />
        <MissionBanner />
        <IndustriesSummary />
        <UseCasesSummary />
        <DeliveryMethodologySection />
        <TrustSection />
        <InsightsSummary />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
