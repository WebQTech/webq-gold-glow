import { HeroSection } from "@/components/HeroSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { CoreServicesGrid } from "@/components/CoreServicesGrid";
import { MissionBanner } from "@/components/MissionBanner";
import { TechnologiesSummary } from "@/components/TechnologiesSummary";
import { ServicesSummary } from "@/components/ServicesSummary";
import { IndustriesSummary } from "@/components/IndustriesSummary";
import { UseCasesSummary } from "@/components/UseCasesSummary";
import { DeliveryMethodologySection } from "@/components/DeliveryMethodologySection";
import { TrustSection } from "@/components/TrustSection";
import { WhyWeExistSection } from "@/components/WhyWeExistSection";
import { InsightsSummary } from "@/components/InsightsSummary";
import { CareersSummary } from "@/components/CareersSummary";
import { AboutSection } from "@/components/AboutSection";
import { NewsSection } from "@/components/NewsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <HeroSection />
        <SolutionsSection />
        <CoreServicesGrid />
        <MissionBanner />
        <TechnologiesSummary />
        <ServicesSummary />
        <IndustriesSummary />
        <UseCasesSummary />
        <DeliveryMethodologySection />
        <TrustSection />
        <WhyWeExistSection />
        <InsightsSummary />
        <AboutSection />
        <CareersSummary />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
