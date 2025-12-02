import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Target, TrendingUp, ArrowRight } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6 mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            AI Feels <span className="text-primary">Exciting But Confusing?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You've seen tools, watched tutorials, and still don't know how to start building something that actually works.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            { icon: Clock, title: "Too Many Tools", description: "You've watched videos and tried different platforms, but nothing connects into a real system" },
            { icon: Target, title: "No Clear Starting Point", description: "Everyone talks about automation, but where do you actually begin as a beginner?" },
            { icon: TrendingUp, title: "Theory Over Practice", description: "You need real examples, not another vague tutorial that leaves you more confused" }
          ].map((item, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-glow transition-shadow bg-card border-primary/20 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 space-y-6 text-center">
          <p className="text-lg font-medium text-foreground">
            <span className="text-primary">Automation Launchpad simplifies everything.</span> Learn by doing — build 3 AI-powered workflows step-by-step using real-world examples.
          </p>
          <Button asChild variant="hero" size="lg" className="group">
            <a href="https://whop.com/checkout/plan_vVQflABxQIJIL" target="_blank" rel="noopener noreferrer">
              Yes, I Want to Automate
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
