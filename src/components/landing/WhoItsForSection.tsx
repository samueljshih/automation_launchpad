import { Card } from "@/components/ui/card";
import { Briefcase, Sparkles, Users, TrendingUp, Target, Zap } from "lucide-react";

export const WhoItsForSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Who Is This For?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfect for business owners who want to implement time-saving automations in their own operations.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Briefcase, title: "Solo Business Owners", benefit: "Stop doing everything manually and scale your one-person business" },
            { icon: Users, title: "Coaches & Consultants", benefit: "Automate client intake, scheduling, and follow-ups" },
            { icon: Target, title: "Service Providers", benefit: "Streamline operations from lead to delivery" },
            { icon: Zap, title: "Complete Beginners", benefit: "Build real automations with zero coding or tech experience" }
          ].map((item, index) => (
            <Card key={index} className="p-6 space-y-4 text-center hover:shadow-glow transition-shadow bg-card border-primary/20 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-accent mx-auto">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.benefit}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
