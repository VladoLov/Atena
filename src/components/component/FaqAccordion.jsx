import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/url";

function FaqAccordion() {
  return (
    <div className="container mx-auto p-4">
      <h4 className="text-xl font-semibold py-2">
        List of frequently asked questions
      </h4>
      <Accordion type="single" collapsible className="w-full">
        {/* <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold">
            How do I request testing at ATENA?
          </AccordionTrigger>
          <AccordionContent>
            Use the sample testing request form for all the samples.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do I need a quote for testing?</AccordionTrigger>
          <AccordionContent className="text-platinum-900">
            Yes. Each sequencing project is customized to meet your specific
            requirements. Our team will work closely with you to thoroughly
            discuss your project details and provide a personalized quote. For
            clients seeking long-term partnerships and streamlined processing of
            sample batches on a regular basis, we offer options such as Standing
            Orders or Service Level Agreements (SLA) for enhanced efficiency and
            cost-effectiveness.
          </AccordionContent>
        </AccordionItem> */}
        {faqData.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="text-platinum-900">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
