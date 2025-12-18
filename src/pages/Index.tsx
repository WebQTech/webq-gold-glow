import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VisualStatement } from "@/components/VisualStatement";
import { ServicesSection } from "@/components/ServicesSection";
import { ImpactNumber } from "@/components/ImpactNumber";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <VisualStatement />
      <ServicesSection />
      <ImpactNumber />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
