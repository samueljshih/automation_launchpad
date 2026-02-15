import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-32 px-6 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Frequently Asked <span className="text-foreground">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about getting started
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          defaultValue="item-1"
        >
          <AccordionItem
            value="item-1"
            className="bg-card border border-border rounded-lg px-6 shadow-soft"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              Do I need any coding experience to use the 3Ds Framework?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
              Zero coding required. The system is built for beginners who want
              results, not tech degrees. You follow the steps, and the
              automation works.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="bg-card border border-border rounded-lg px-6 shadow-soft"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              How long does it take to build my first workflow?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
              Most students have their first working system live within 2-3
              hours. All three core workflows are completed over a single
              weekend.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="bg-card border border-primary/20 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              What if I get stuck during setup?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
              The course includes step-by-step video walkthroughs for each
              project. You see exactly what to click, when to click it, and why
              it matters.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="bg-card border border-primary/20 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              Will these automations work with my current tools?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
              Yes. The 3Ds Framework connects with most popular platforms like
              Gmail, Google Sheets, spreadsheets, and form builders. We show you
              exactly how to plug them together.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="bg-card border border-primary/20 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              What happens when AI tools update or change?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
              You receive lifetime access to all future updates. As tools
              evolve, we update the training so your systems stay current
              without extra cost.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="bg-card border border-primary/20 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              Can I use this if I'm not tech-savvy?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
              That's exactly who this is for. If you can send an email and fill
              out a form, you can build these systems. We skip the jargon and
              show you the clicks.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-7"
            className="bg-card border border-primary/20 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              How much time will this actually save me each week?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
              Many people save several hours per week on form follow-up and data
              entry. That's time you get back for high-value work or simply
              living your life.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-8"
            className="bg-card border border-primary/20 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              Do I need to pay for expensive software subscriptions?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
              The core automations work with free or low-cost tools you likely
              already use. We focus on smart connections, not expensive
              platforms.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-9"
            className="bg-card border border-primary/20 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              What if I have a unique business that's different from the
              examples?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
              The 3Ds Framework adapts to any business model. Once you
              understand Detect-Decide-Deliver, you can apply it to your
              specific workflows and processes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
