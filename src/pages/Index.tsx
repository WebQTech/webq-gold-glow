import { AmbientGlows } from "@/components/AmbientGlows";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ProcessSection } from "@/components/ProcessSection";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-subtle">
      <AmbientGlows />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <IndustriesSection />
      <CapabilitiesSection />
      
      <ProcessSection />
      
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
