import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export const TransformationSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 text-center space-y-6 shadow-glow bg-card border-primary/20">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto shadow-glow">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Imagine Your Life <span className="text-primary">After Automation</span>
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            <p>
              You wake up to an organized inbox. Leads are already sorted and prioritized. Follow-up emails were sent overnight.
            </p>
            <p>
              Your calendar is updated automatically. Client onboarding happens without you lifting a finger. Data flows seamlessly between your tools.
            </p>
            <p className="text-foreground font-semibold">
              You're no longer drowning in busywork. You're building, creating, and growing, living the freedom you started your business for.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
