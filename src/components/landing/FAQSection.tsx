import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about getting started
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border border-primary/20 rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              Do I need to know how to code?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely not! Automation Launchpad is designed specifically for beginners with zero technical experience. 
              You'll use visual, drag-and-drop tools that require no coding whatsoever. If you can use a web browser, you can build automations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border border-primary/20 rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              How long until I see results?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Most students build their first working automation within 1-2 hours of starting the course. 
              By the end of the weekend, you'll have 3 complete workflows saving you time. 
              Within 30 days, students typically save 10-15 hours per week.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border border-primary/20 rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              What tools or software do I need?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You'll use the tools you already have — like Gmail, Google Sheets, your CRM, or social media platforms. 
              The course teaches you how to connect them using free or low-cost automation platforms. 
              We'll show you which tools work best for your specific needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border border-primary/20 rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
              Is this suitable for my type of business?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! The 3Ds Framework works for any business with repetitive tasks — e-commerce, coaching, 
              consulting, freelancing, content creation, local services, and more. The principles are universal, 
              and you'll learn how to apply them to your specific situation.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
};
