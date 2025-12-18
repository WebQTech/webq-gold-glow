import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeatureSection } from "@/components/FeatureSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
