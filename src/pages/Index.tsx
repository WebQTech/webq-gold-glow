import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { FeaturedSection } from "@/components/FeaturedSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { AboutSection } from "@/components/AboutSection";
import { InsightBanner } from "@/components/InsightBanner";
import { NewsSection } from "@/components/NewsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <Navbar />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <HeroSection />
        <ValueProposition />
        <FeaturedSection />
        <CaseStudiesSection />
        <AboutSection />
        <InsightBanner />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;