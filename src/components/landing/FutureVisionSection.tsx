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
              Picture this: You wake up Monday morning. Before you even open
              your laptop, your phone buzzes with a notification. It's your
              Daily Ops Digest. Three new qualified leads came in over the
              weekend. All of them already received a personalized welcome
              message. All your leads are tracked and organized. Your follow-up sequences are
              running. You didn't lift a finger.
            </p>

            <p>
              You grab your coffee and open your inbox. Instead of 47 unread
              messages screaming for attention, you see organized summaries. The
              urgent stuff is already handled. The important decisions are
              clearly laid out. You spend 15 minutes reviewing what your systems
              did while you slept, then close your laptop to focus on the work
              that actually grows your business.
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
                higher. That competitor who seems to respond instantly? They'll
                keep winning the leads you lose because you were too slow. Your
                family will keep getting the exhausted, stressed version of you.
                And six months from now, you'll be in the exact same place,
                wondering why everyone else seems to have figured out the secret
                to running a business that doesn't consume their entire life.
              </p>
              <p className="mt-4 font-semibold text-lg md:text-xl leading-relaxed">
                The truth is, they have systems. You don't. Yet.
              </p>
              <p className="mt-4">
                This weekend could be the turning point. The moment you stop
                being a manual operator and become a business owner with a
                digital workforce that never sleeps. The Automation Launchpad
                closes soon, and the Founding Student price disappears with it.
                The question isn't whether you need this. You already know you
                do. The question is: will you still be drowning in busywork six
                months from now, or will you finally have the systems that set
                you free?
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
