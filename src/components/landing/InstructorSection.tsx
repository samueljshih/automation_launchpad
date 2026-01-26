import { Card } from "@/components/ui/card";

const LIA_VIDEO_URL =
  "https://pub-8df9c4a659eb4415ad44935d3f6fa9c5.r2.dev/lia_garvin.mp4";
const DENNEY_VIDEO_URL =
  "https://pub-8df9c4a659eb4415ad44935d3f6fa9c5.r2.dev/denney_testimonial_linkedin.mp4";
import samPortrait from "@/assets/sam.jpeg";

export const InstructorSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-center">
            Meet Your <span className="text-foreground">Automation Guide</span>
          </h2>
        </div>
        
        <Card className="p-8 md:p-12 bg-card border-border shadow-soft">
          <div className="grid gap-8 md:grid-cols-[200px_1fr] items-center">
            <div className="mx-auto md:mx-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-border">
                <img
                  src={samPortrait}
                  alt="Sam Shih, instructor of Automation Launchpad"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Sam</h3>
                <p className="text-accent font-medium">Software Engineer & Automation Builder</p>
              </div>
              
              <div className="space-y-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I've been writing code and working in tech for over a decade. I've built real-world automations for clients and seen firsthand how the right systems can transform a business.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  But most people I talk to don't need complex systems. They just need to know how to start. So I built Automation Launchpad as a clear, hands-on introduction to automation.
                </p>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  Real-world examples. No overwhelm. Just practical workflows you can build this weekend.
                </p>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">Don't just take my word for it. Watch what clients say:</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-[9/16] bg-card rounded-lg border border-border overflow-hidden shadow-soft">
                    <video
                      className="h-full w-full object-cover"
                      src={LIA_VIDEO_URL}
                      controls
                      preload="metadata"
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                    <p className="sr-only">Client testimonial from Lia Garvin describing Automation Launchpad.</p>
                  </div>
                  <div className="aspect-[9/16] bg-card rounded-lg border border-border overflow-hidden shadow-soft">
                    <video
                      className="h-full w-full object-cover"
                      src={DENNEY_VIDEO_URL}
                      controls
                      preload="metadata"
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                    <p className="sr-only">Client testimonial from Denney sharing results with Automation Launchpad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
