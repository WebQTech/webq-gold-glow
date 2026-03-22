import { HeroSection } from "@/components/HeroSection";
import { CoreServicesGrid } from "@/components/CoreServicesGrid";
import { SolutionsSection } from "@/components/SolutionsSection";
import { MissionBanner } from "@/components/MissionBanner";
import { TechnologiesSummary } from "@/components/TechnologiesSummary";
import { IndustriesSummary } from "@/components/IndustriesSummary";
import { AboutSection } from "@/components/AboutSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
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
        <IndustriesSummary />
        <AboutSection />
        <CaseStudiesSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
