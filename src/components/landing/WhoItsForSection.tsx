import { Briefcase, Users, Target } from "lucide-react";

export const WhoItsForSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3 text-center">
            Who This Is For
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-center">
            WHO THIS IS FOR
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {[
            {
              icon: Briefcase,
              title: "Solo Entrepreneurs Drowning in Admin Work",
              benefit:
                "You're running the business, doing the marketing, and handling customer service. You need systems that give you back time so you're not doing every reply and data entry yourself.",
            },
            {
              icon: Users,
              title: "Coaches and Consultants Losing Leads to Slow Follow-Up",
              benefit:
                "You know speed matters, but you can't be glued to your phone all day. You need automation that sends a personalized reply to new leads so you can follow up at the right time.",
            },
            {
              icon: Target,
              title: "Small Team Leaders Ready to Scale Smart",
              benefit:
                "You're growing but can't afford to hire yet. You need digital systems that work like employees without the overhead or training headaches.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 space-y-4 bg-card border-l-4 border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-start gap-3">
                <item.icon
                  className="h-6 w-6 text-primary flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />
                <span>{item.title}</span>
              </h3>
              <p className="text-lg text-muted-foreground pl-9 leading-relaxed">
                {item.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
