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
        {faqData.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-left sm:text-base lg:text-lg antialiased sm:tracking-widest">
              {item.question}
            </AccordionTrigger>
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
