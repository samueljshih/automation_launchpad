import { Card } from "@/components/ui/card";
import { Mail, Users, Calendar, CheckCircle } from "lucide-react";

export const WhatYouBuildSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            What You'll <span className="text-primary">Actually Build</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world project templates you'll build step-by-step. Not theory, but working automations you can launch this weekend.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Mail,
              title: "Smart Lead Tracker",
              description: "Capture and enrich every lead automatically. Detect new submissions, enrich with AI, and log them instantly.",
              features: [
                "Automatic lead capture",
                "AI-powered enrichment",
                "Instant CRM logging"
              ]
            },
            {
              icon: Users,
              title: "Instant Reply System",
              description: "Respond instantly with AI-powered personalization. Write on-brand replies and send them automatically.",
              features: [
                "AI-generated responses",
                "Brand voice matching",
                "Automatic delivery"
              ]
            },
            {
              icon: Calendar,
              title: "Daily Ops Digest",
              description: "Stay on top of your tasks and metrics. Get a snapshot of your business delivered every morning.",
              features: [
                "Key metrics summary",
                "Task prioritization",
                "Daily automation report"
              ]
            }
          ].map((workflow, index) => (
            <Card key={index} className="p-8 space-y-6 bg-card border-primary/20 hover:shadow-glow transition-shadow animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary">
                <workflow.icon className="h-7 w-7 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">{workflow.title}</h3>
                <p className="text-muted-foreground">{workflow.description}</p>
              </div>
              <ul className="space-y-2">
                {workflow.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-primary">Build this in under 2 hours</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
