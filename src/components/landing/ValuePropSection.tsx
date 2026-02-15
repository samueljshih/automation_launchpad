import { Card } from "@/components/ui/card";
import { Clock, Zap, Eye, BookOpen } from "lucide-react";

export const ValuePropSection = () => {
  return (
    <section className="py-32 px-6 bg-muted/30 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-center mb-4">
            What You Get When You{" "}
            <span className="text-foreground">Stop Being the Bottleneck</span>
          </h2>
        </div>

        <div className="space-y-12 mb-20 max-w-4xl mx-auto">
          {[
            {
              icon: Clock,
              title: "Time Back in Your Calendar:",
              description:
                "You're not spending your Sunday night updating spreadsheets anymore. These systems run in the background so you can focus on the work that actually grows your business.",
            },
            {
              icon: Zap,
              title: "Professional Speed Without the Stress:",
              description:
                "New leads get an automated reply so you don't have to remember to respond. The system sends a personalized welcome and booking link so you look responsive even when you're busy.",
            },
            {
              icon: Eye,
              title: "Clear Vision of What's Working:",
              description:
                "The Daily Ops Digest emails you a summary of that day's new leads and one suggested next step. Less digging through your spreadsheet to see what came in.",
            },
            {
              icon: BookOpen,
              title: "Real Skills That Last:",
              description:
                "You're not just getting templates. You're learning the 3Ds Framework that works on any platform, so you can build new automations whenever you need them.",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0 pt-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <item.icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-card border-l-4 border-primary/30 shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Why I Built This (And Why Most Automation Courses Miss the Point)
          </h3>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I spent 8 years building web apps and AI systems for startups. I
              watched the same pattern repeat over and over.
            </p>
            <p>
              Smart people with great ideas... drowning in busywork. Spending 3
              hours a day on tasks a simple system could handle in 3 seconds.
              They'd buy expensive software, watch tutorial after tutorial, and
              still end up doing everything manually because nobody taught them
              the logic behind automation.
            </p>
            <p>
              That's when I realized the problem. Everyone teaches tools. Nobody
              teaches the thinking.
            </p>
            <p>
              So I built the 3Ds Framework. Not another course about "which
              button to click." A system that teaches you to think like an
              automation architect. Detect what matters. Decide what to do with
              it. Deliver the result automatically.
            </p>
            <p className="text-lg text-foreground font-semibold leading-relaxed">
              That's why Automation Dojo exists. To help you build practical
              systems that keep running in the background... without needing a
              computer science degree.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
