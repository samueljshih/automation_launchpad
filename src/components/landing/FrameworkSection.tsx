import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Zap, CheckCircle, ArrowRight } from "lucide-react";

export const FrameworkSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            The <span className="bg-gradient-primary bg-clip-text text-transparent">3Ds Framework</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven system that transforms any repetitive workflow into an automated process — even if you've never written a line of code.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {[
            { 
              step: "01", 
              title: "Detect", 
              description: "Identify the trigger — when a lead fills a form, receives an email, or takes any action you want to automate",
              icon: Target
            },
            { 
              step: "02", 
              title: "Decide", 
              description: "Set the rules — filter, sort, or route information based on conditions you define (no coding required)",
              icon: Zap
            },
            { 
              step: "03", 
              title: "Deliver", 
              description: "Execute the action — send emails, update spreadsheets, notify your team, or trigger the next workflow",
              icon: CheckCircle
            }
          ].map((item, index) => (
            <Card key={index} className="relative p-8 space-y-6 overflow-hidden group hover:shadow-glow transition-all bg-card border-primary/20 animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="absolute top-2 right-2 text-8xl font-bold text-primary/10 transition-transform group-hover:scale-110">
                {item.step}
              </div>
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="p-8 rounded-2xl bg-gradient-primary mb-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Real Example</h3>
            <p className="text-white/90 text-lg">
              <span className="font-semibold">Detect:</span> New lead fills your contact form → 
              <span className="font-semibold"> Decide:</span> If they're in your target market → 
              <span className="font-semibold"> Deliver:</span> Send personalized welcome email, add to CRM, and notify your sales team
            </p>
            <p className="text-sm text-white/80">All happening automatically in under 60 seconds.</p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild variant="hero" size="lg" className="group">
            <a href="https://whop.com/checkout/plan_vVQflABxQIJIL" target="_blank" rel="noopener noreferrer">
              Start Building Automations
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
