import { Button } from "@/components/ui/button";
import { Clock, Heart, Wrench, AlertCircle, ArrowRight } from "lucide-react";

export const ObjectionsSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <p className="text-lg md:text-xl text-muted-foreground mb-4 text-center max-w-2xl mx-auto leading-relaxed">
            Common concerns, honest answers.
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-center">
            Last Concerns <span className="text-foreground">Addressed</span>
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          {[
    {
      icon: Clock,
      objection: "I don't have time to learn another complicated system right now.",
      response:
        "I get it. You're already drowning. That's exactly why we built this as a weekend sprint, not a months-long course. You're not learning 'theory' that you'll implement 'someday.' You're building three working systems in 48 hours. By Sunday night, you'll have automations running in your actual business. The time you invest this weekend gives you back 15+ hours every single week after. You don't have time NOT to do this.",
      highlights: ["15+ hours every single week"],
    },
    {
      icon: Heart,
      objection:
        "Won't automation make my business feel cold and impersonal?",
      response:
        "This is the biggest myth about automation. The truth? Automation makes you MORE personal, not less. Right now, you're so overwhelmed that half your leads get generic responses... three days late. With automation, every single person gets a thoughtful, personalized message within 5 minutes. You're not replacing the human touch. You're removing the boring stuff so you can spend MORE time on the conversations that actually matter. Your clients will feel more cared for, not less.",
      highlights: ["within 5 minutes", "MORE time on the conversations"],
    },
    {
      icon: Wrench,
      objection:
        "I've tried automation before and it was way too technical for me.",
      response:
        "Most automation tools are built by engineers for engineers. That's why they feel impossible. The 3Ds Framework is different. We skip the tech jargon completely. You're not learning to code. You're following a simple three-step logic that a sixth-grader could understand: Detect what happens, Decide what it means, Deliver the result. We use drag-and-drop tools and give you exact templates to copy. If you can follow a recipe, you can build these systems.",
      highlights: ["drag-and-drop tools", "exact templates"],
    },
    {
      icon: AlertCircle,
      objection:
        "What if something breaks and I don't know how to fix it?",
      response:
        "Valid concern. Here's the reality: these systems are simpler than you think. Each workflow has maybe 5-7 steps total. If something stops working, you'll be able to see exactly where it stopped. Plus, you get lifetime access to all updates and fixes. As tools change, we update the templates. You're never left figuring it out alone. And here's the secret: once you understand the 3Ds logic, troubleshooting becomes obvious. You'll know exactly what to check.",
      highlights: ["lifetime access", "troubleshooting becomes obvious"],
    },
    {
      icon: AlertCircle,
      objection: "This sounds too good to be true. What's the catch?",
      response:
        "No catch. Just math. Right now, you're spending 15-20 hours per week on repetitive tasks that a simple system could handle in seconds. That's not magic... that's just what happens when you stop doing $10/hour work manually and let automation handle it. The reason this feels 'too good' is because you've been stuck in manual mode for so long that you forgot what leverage actually looks like. The only catch? You have to actually build the systems. They don't build themselves. But once they're live? They run 24/7 without you touching them.",
      highlights: ["15-20 hours per week", "run 24/7"],
    },
  ].map((item, index) => {
            const iconVariants = [
              { bg: "bg-primary/10", border: "border-primary/20", stroke: 1.5 },
              { bg: "", border: "", stroke: 2 },
              { bg: "bg-primary/10", border: "border-primary/20", stroke: 1.5 },
              { bg: "", border: "", stroke: 2 },
              { bg: "bg-primary/10", border: "border-primary/20", stroke: 1.5 },
            ];
            const variant = iconVariants[index % iconVariants.length];
            return (
            <div
              key={index}
              className="p-8 bg-card border-l-4 border-primary/30"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  {variant.bg ? (
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${variant.bg} border ${variant.border}`}>
                      <item.icon className="h-5 w-5 text-primary" strokeWidth={variant.stroke} />
                    </div>
                  ) : (
                    <item.icon className="h-6 w-6 text-primary" strokeWidth={variant.stroke} />
                  )}
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-xl font-semibold text-foreground italic leading-relaxed">
                    "{item.objection}"
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.response.split(/(\d+\+? hours?|within \d+ minutes?|drag-and-drop tools|lifetime access|run 24\/7)/).map((part, i) => {
                      const isHighlight = item.highlights.some((h) =>
                        part.includes(h)
                      );
                      return isHighlight ? (
                        <span key={i} className="font-semibold text-foreground">
                          {part}
                        </span>
                      ) : (
                        part
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="hero"
            size="lg"
            className="group"
          >
            <a
              href="https://whop.com/checkout/plan_vVQflABxQIJIL"
              target="_blank"
              rel="noopener noreferrer"
            >
              YES, I WANT MY BUSINESS TO RUN ITSELF
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
