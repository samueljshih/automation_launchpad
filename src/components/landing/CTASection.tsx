import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 px-6 bg-background border-t border-border/50">
      <div className="container mx-auto max-w-3xl">
        <Card className="p-8 md:p-12 text-center space-y-8 shadow-soft bg-card border-border">
          <div className="space-y-4 mb-8">
            <p className="text-sm uppercase tracking-wide text-white/80 font-semibold">
              THE INVESTMENT
            </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            FOUNDING STUDENT OFFER: 50% OFF THIS WEEK ONLY
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Package: The Automation Launchpad
          </p>
          </div>

          <div className="text-left max-w-2xl mx-auto space-y-4 mb-8">
            <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                <span>Complete 3Ds Framework training with step-by-step build guides</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>3 plug-and-play workflow templates you can deploy this weekend</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>The Smart Lead Tracker system (automatically tracks all your leads)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>The Instant Responder system (replies in under 60 seconds)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>The Daily Ops Digest (your morning business briefing)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>Coding Blueprint Course for total tech independence</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>Lifetime Evolution Access (all future updates included forever)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>Private community access for questions and support</span>
              </li>
            </ul>
          </div>
          
          <div className="inline-block p-6 rounded-lg bg-primary/5 border border-primary/20 mb-6">
            <div className="flex items-baseline gap-3 justify-center mb-2">
              <span className="text-4xl font-bold text-primary">$49.99</span>
              <span className="text-2xl text-muted-foreground line-through">$100</span>
            </div>
            <p className="text-base text-muted-foreground">Regular: $100</p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-none group"
            >
              <a href="https://whop.com/checkout/plan_vVQflABxQIJIL" target="_blank" rel="noopener noreferrer">
                YES, I WANT MY BUSINESS TO RUN ITSELF
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-foreground" />
              <span>Instant Access</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
