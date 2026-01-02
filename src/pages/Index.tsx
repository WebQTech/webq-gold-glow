import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ValueProposition } from "@/components/ValueProposition";
import { AIShowcaseSection } from "@/components/AIShowcaseSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <Navbar />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <HeroSection />
        <TrustBar />
        <ValueProposition />
        <AIShowcaseSection />
        <FeaturedSection />
        <CaseStudiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;