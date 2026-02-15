import { Card } from "@/components/ui/card";

export const FutureVisionSection = () => {
  return (
    <section className="py-32 px-6 bg-muted/30 border-t border-border/30">
      <div className="container mx-auto max-w-3xl">
        <Card className="p-10 md:p-16 bg-card border-border shadow-soft">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-10 text-center">
            The Monday Morning You've Been Dreaming About
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
            <p>
              Picture this: You check your inbox and see your Daily Ops Digest.
              A few new leads came in. Each one already got an automated welcome
              reply with a link to book a call. Their form responses and AI
              summaries are in your sheet. You didn't have to send those replies
              yourself.
            </p>

            <p>
              You open your sheet and see who came in and what they need. The
              digest suggests one next step. You spend a few minutes reviewing,
              then focus on the work that actually grows your business instead
              of chasing data across tabs.
            </p>

            <p>
              Your evenings? They're yours again. Date nights happen without
              guilt. Your kids see you present, not distracted. Your friends
              stop making jokes about you being "married to your laptop." You
              finally have the freedom you started this business for in the
              first place.
            </p>

            <div className="pt-6 border-t border-border mt-8">
              <p className="text-lg md:text-xl text-foreground font-semibold mb-4 leading-relaxed">
                But here's what happens if you don't act now...
              </p>
              <p>
                You'll keep waking up to chaos. The manual work will pile
                higher. Competitors who respond faster may win leads you miss
                when follow-up slips. Your family may keep getting the
                exhausted, stressed version of you. And six months from now, you
                may still be in a similar place, wondering why everything still
                feels so manual.
              </p>
              <p className="mt-4 font-semibold text-lg md:text-xl leading-relaxed">
                The truth is, they have systems. You don't. Yet.
              </p>
              <p className="mt-4">
                This weekend could be a turning point. A moment where you move
                from handling every repetitive step yourself to using simple
                systems that run in the background. The Automation Launchpad
                closes soon, and the Founding Student price disappears with it.
                The question is whether you'll still be doing these tasks
                manually six months from now, or whether you'll have a cleaner
                workflow in place.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
