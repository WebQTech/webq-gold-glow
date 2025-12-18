import { AmbientGlows } from "@/components/AmbientGlows";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { StatsSection } from "@/components/StatsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-subtle">
      <AmbientGlows />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CapabilitiesSection />
      <StatsSection />
      <ProcessSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
