import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Zap, CheckCircle, ArrowRight } from "lucide-react";

export const FrameworkSection = () => {
  return (
    <section className="py-16 px-6 bg-background border-y border-border/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            The <span className="text-foreground">3Ds Framework</span>: Your Blueprint for a Self-Running Business
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            What if you could learn automation the same way you learned to drive? You didn't study the engineering specs of every car model. You learned a universal system: gas pedal goes, brake pedal stops, steering wheel turns. That system works in any vehicle.
          </p>
        </div>
        
        <div className="relative mb-8">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ left: '10%', right: '10%' }} />
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 relative">
            {[
              { 
                step: "01", 
                title: "Detect", 
                description: "Detect what matters. Identify the trigger when a lead fills a form, receives an email, or takes any action you want to automate",
                icon: Target
              },
              { 
                step: "02", 
                title: "Decide", 
                description: "Decide what to do with it. Set the rules filter, sort, or route information based on conditions you define (no coding required)",
                icon: Zap
              },
              { 
                step: "03", 
                title: "Deliver", 
                description: "Deliver the result. Execute the action send emails, update spreadsheets, notify your team, or trigger the next workflow",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <div key={index} className="flex-1 relative">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="relative mb-4 z-10">
                    <div className="text-7xl md:text-8xl font-bold text-muted/30 leading-none mb-2">
                      {item.step}
                    </div>
                    <div className="absolute top-8 left-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
                      <item.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="space-y-2 max-w-xs mx-auto md:mx-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-[calc(100%-2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <p>
            The 3Ds Framework is exactly that for automation. Detect what matters. Decide what to do with it. Deliver the result. This three-step logic is the DNA behind every automation that actually works. Once you understand it, you can build systems on any platform without starting from scratch every time.
          </p>
          
          <p className="text-foreground font-semibold text-lg md:text-xl leading-relaxed">
            Here's what changes when you master this: You stop being the bottleneck in your own business. Your leads get instant responses while you're at dinner with your family. Your lead tracking updates itself automatically. Your morning starts with a summary of everything that happened overnight, not a pile of tasks you need to sort through. You finally become the pilot of your business instead of the engine.
          </p>
        </div>
      </div>
    </section>
  );
};
