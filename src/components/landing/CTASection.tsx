import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 text-center space-y-8 shadow-glow bg-gradient-primary border-none">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Build Your First AI-Powered Workflow This Weekend
          </h2>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join Automation Launchpad today and get instant access to the complete 3Ds Framework, step-by-step tutorials, and 3 ready-to-build AI-powered workflows.
          </p>
          
          <div className="inline-block p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="flex items-baseline gap-3 justify-center mb-2">
              <span className="text-4xl font-bold text-white">$49.99</span>
              <span className="text-2xl text-white/60 line-through">$100</span>
            </div>
            <p className="text-sm text-white/80">Early access price. Normally $100</p>
            <p className="text-sm text-white/90 font-semibold mt-2">
              🎁 Includes FREE Coding Blueprint Course (normally $100)
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg group"
            >
              <a href="https://whop.com/checkout/plan_vVQflABxQIJIL" target="_blank" rel="noopener noreferrer">
                Buy the Course Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Instant Access</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
