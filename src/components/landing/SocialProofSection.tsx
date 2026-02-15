import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const SocialProofSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Built for <span className="text-primary">Beginners</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {[
            {
              name: "Sarah Mitchell",
              role: "E-commerce Owner",
              quote:
                "As a complete beginner, I was nervous. But I built my first automation step by step. The 3Ds Framework makes everything much clearer.",
            },
            {
              name: "Marcus Chen",
              role: "Freelance Designer",
              quote:
                "Zero coding experience. I built the workflows and now I actually understand how automation works instead of just hearing about it.",
            },
            {
              name: "Jessica Torres",
              role: "Marketing Consultant",
              quote:
                "Finally, a course that doesn't assume you already know everything. Real examples, no fluff, and clear enough for beginners.",
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 bg-card border-primary/20 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle
                    key={i}
                    className="h-5 w-5 text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center py-8 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">Beginner Friendly</p>
            <p className="text-sm text-muted-foreground">No coding required</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent">Hands-On</p>
            <p className="text-sm text-muted-foreground">
              Build real workflows
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">Step-by-Step</p>
            <p className="text-sm text-muted-foreground">
              Clear implementation guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
