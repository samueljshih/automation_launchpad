import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { FrameworkSection } from "@/components/landing/FrameworkSection";
import { ValuePropSection } from "@/components/landing/ValuePropSection";
import { WhoItsForSection } from "@/components/landing/WhoItsForSection";
import { ProductBreakdownSection } from "@/components/landing/ProductBreakdownSection";
import { InstructorSection } from "@/components/landing/InstructorSection";
import { FutureVisionSection } from "@/components/landing/FutureVisionSection";
import { ObjectionsSection } from "@/components/landing/ObjectionsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <FrameworkSection />
      <ValuePropSection />
      <WhoItsForSection />
      <ProductBreakdownSection />
      <InstructorSection />
      <FutureVisionSection />
      <ObjectionsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
