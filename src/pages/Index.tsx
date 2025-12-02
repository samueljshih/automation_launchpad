import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { FrameworkSection } from "@/components/landing/FrameworkSection";
import { WhatYouBuildSection } from "@/components/landing/WhatYouBuildSection";
import { WhoItsForSection } from "@/components/landing/WhoItsForSection";
import { InstructorSection } from "@/components/landing/InstructorSection";
import { TransformationSection } from "@/components/landing/TransformationSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <FrameworkSection />
      <WhatYouBuildSection />
      <WhoItsForSection />
      <InstructorSection />
      <TransformationSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
