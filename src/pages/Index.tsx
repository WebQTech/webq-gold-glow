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
    <main className="relative overflow-hidden bg-background">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <FeaturedSection />
      <CaseStudiesSection />
      <AboutSection />
      <InsightBanner />
      <NewsSection />
      <ContactSection />
      <Footer />
      <BackToTopButton />
    </main>
  );
};

export default Index;
