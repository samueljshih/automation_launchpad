import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const SocialProofSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Trusted by <span className="text-primary">500+</span> Entrepreneurs
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {[
            { name: "Sarah Mitchell", role: "E-commerce Owner", quote: "As a complete beginner, I was nervous. But I built my first automation in under 2 hours. The 3Ds Framework makes everything so clear!" },
            { name: "Marcus Chen", role: "Freelance Designer", quote: "Zero coding experience. Built all 3 workflows in a weekend. Now I actually understand how automation works instead of just hearing about it." },
            { name: "Jessica Torres", role: "Marketing Consultant", quote: "Finally, a course that doesn't assume you already know everything. Real examples, no fluff, perfect for beginners. Best $50 I've spent." }
          ].map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4 bg-card border-primary/20 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 items-center py-8 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">2,500+</p>
            <p className="text-sm text-muted-foreground">Automations Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent">15hrs/week</p>
            <p className="text-sm text-muted-foreground">Average Time Saved</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">98%</p>
            <p className="text-sm text-muted-foreground">Student Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};
