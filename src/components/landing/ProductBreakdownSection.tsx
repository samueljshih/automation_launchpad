import { Card } from "@/components/ui/card";
import { Search, MessageSquare, BarChart3, Code, Infinity } from "lucide-react";

export const ProductBreakdownSection = () => {
  return (
    <section className="py-32 px-6 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 text-center leading-relaxed">
            Everything you need to transform your business from manual chaos to
            automated clarity.
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-center">
            WHAT YOU GET: YOUR{" "}
            <span className="text-foreground">3-SYSTEM FREEDOM PACKAGE</span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 mb-16">
          {[
            {
              icon: Search,
              title: "SYSTEM 1: THE SMART LEAD TRACKER",
              description:
                "When someone fills out your Google Form, their responses go straight into your Google Sheet. ChatGPT adds a short AI summary for each lead so you can quickly see who they are and what they need. No more manual copy-paste.",
            },
            {
              icon: MessageSquare,
              title: "SYSTEM 2: THE INSTANT RESPONDER",
              description:
                "When a new lead hits your sheet, ChatGPT drafts a personalized reply and Gmail sends it automatically. New leads get a warm welcome and a link to book a call while you're offline.",
            },
            {
              icon: BarChart3,
              title: "SYSTEM 3: THE DAILY OPS DIGEST",
              description:
                "Each day at a set time, you get an email that summarizes that day's new leads and suggests one next action. A simple way to end the day with clarity instead of digging through your sheet.",
            },
          ].map((item, index) => {
            const iconStyles = [
              {
                bg: "bg-primary/10",
                border: "border-primary/30",
                rounded: "rounded-full",
                size: "h-14 w-14",
                iconSize: "h-7 w-7",
              },
              {
                bg: "",
                border: "",
                rounded: "",
                size: "",
                iconSize: "h-8 w-8",
              },
              {
                bg: "bg-primary/10",
                border: "border-primary/30",
                rounded: "rounded-lg",
                size: "h-14 w-14",
                iconSize: "h-7 w-7",
              },
            ];
            const style = iconStyles[index % iconStyles.length];
            return (
              <div
                key={index}
                className="p-8 space-y-6 bg-card border-t-4 border-border"
              >
                {style.bg ? (
                  <div
                    className={`inline-flex ${style.size} items-center justify-center ${style.rounded} ${style.bg} border-2 ${style.border}`}
                  >
                    <item.icon
                      className={`${style.iconSize} text-primary`}
                      strokeWidth={1.5}
                    />
                  </div>
                ) : (
                  <item.icon
                    className={`${style.iconSize} text-primary`}
                    strokeWidth={2}
                  />
                )}
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-8 bg-card border-l-4 border-primary/30">
            <div className="flex items-start gap-4">
              <Code
                className="h-6 w-6 text-primary flex-shrink-0 mt-1"
                strokeWidth={2}
              />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  BONUS: THE CODING BLUEPRINT COURSE
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Learn the developer mindset without becoming a developer.
                  Simple fixes, basic logic, total independence. Never pay a
                  consultant for small tweaks again.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-card border-l-4 border-primary/30">
            <div className="flex items-start gap-4">
              <Infinity
                className="h-6 w-6 text-primary flex-shrink-0 mt-1"
                strokeWidth={2}
              />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  BONUS: LIFETIME EVOLUTION ACCESS
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AI changes fast. Your system stays current. Every future
                  update, every new template, every improvement we add to the
                  Dojo... yours forever. No extra fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
