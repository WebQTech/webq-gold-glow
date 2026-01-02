import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AIShowcaseSection } from "@/components/AIShowcaseSection";
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
        <AIShowcaseSection />
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