import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const HERO_VIDEO_URL =
  "https://pub-8df9c4a659eb4415ad44935d3f6fa9c5.r2.dev/automation_launchpad_final_video_compress.mp4";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 px-4 md:py-20 bg-background border-b border-border/50">

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-center justify-items-center">
          <div className="order-2 lg:order-1 space-y-8 animate-fade-up text-center lg:text-left w-full max-w-2xl">
            <div className="inline-block mx-auto lg:mx-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground border border-border">
                <Sparkles className="h-4 w-4 text-primary" />
                The first course from Automation Dojo
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Build Your First AI Workflow{" "}
              <span className="text-primary">
                This Weekend
              </span>
            </h1>

            <p className="hidden lg:block text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              No coding required. No tech degree needed. Just three simple systems that free up 15 hours every week.
            </p>

            <div className="block lg:hidden">
              <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden bg-card border border-border aspect-video min-h-[220px]">
                <video
                  className="h-full w-full object-cover"
                  src={HERO_VIDEO_URL}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border mx-auto lg:mx-0 max-w-xl space-y-4 text-left shadow-soft">
              <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                Early-access pricing for founding students
              </p>
              <p className="text-sm text-foreground font-medium">
                <span className="text-foreground font-bold">
                  Automation Launchpad:
                </span>{" "}
                Build 3 AI-Powered Workflows in a Weekend
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">$49.99</span>
                <span className="text-xl text-muted-foreground line-through">
                  $100
                </span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold border border-primary/20">
                  Save 50%
                </span>
              </div>
              <Button
                asChild
                variant="hero"
                size="lg"
                className="w-full justify-center group"
              >
                <a
                  href="https://whop.com/checkout/plan_vVQflABxQIJIL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Building Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Instant Access</span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground mx-auto lg:mx-0 max-w-xl text-left">
              <p className="text-base font-semibold text-foreground">Includes:</p>
              <ul className="space-y-1.5 pl-4 list-disc leading-relaxed">
                <li>Automation Launchpad</li>
                <li>Coding Blueprint Course bonus ($100 value)</li>
                <li>All updates included</li>
              </ul>
              <p className="text-sm text-muted-foreground italic text-center lg:text-left">
                Founding student offer. Price will increase later.
              </p>
            </div>
          </div>

          <div className="order-3 lg:hidden w-full">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed">
              No coding required. No tech degree needed. Just three simple systems that free up 15 hours every week.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative animate-fade-in w-full hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden bg-card border border-border aspect-video min-h-[220px] sm:min-h-[280px] lg:min-h-[420px] max-w-4xl mx-auto lg:mx-0">
              <video
                className="h-full w-full object-cover"
                src={HERO_VIDEO_URL}
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
