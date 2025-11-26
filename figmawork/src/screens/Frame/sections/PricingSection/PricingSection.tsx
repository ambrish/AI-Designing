import { CalendarIcon, MessageCircleIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

const faqItems = [
  {
    id: "item-1",
    question:
      "How does Simbly.ai understand Hindi and regional language orders?",
  },
  {
    id: "item-2",
    question: "Is my data secure? What about customer privacy?",
  },
  {
    id: "item-3",
    question: "How does the Tally integration work?",
  },
  {
    id: "item-4",
    question: "What if the AI makes a mistake in order processing?",
  },
  {
    id: "item-5",
    question: "Can I try Simbly.ai before committing to a paid plan?",
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="bg-gray-50 py-20 flex justify-center">
      <div className="w-full max-w-[896px] px-4 flex flex-col">
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-5xl text-center tracking-[0] leading-[48px]">
            Frequently Asked Questions
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-7">
            Common questions from Indian SMBs about Simbly.ai
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4 mb-12"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-white rounded-xl shadow-[0px_1px_2px_#0000000d] border-0 px-6"
            >
              <AccordionTrigger className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-lg tracking-[0] leading-7 text-left hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col gap-4 items-center">
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-base text-center tracking-[0] leading-6">
            Still have questions?
          </p>

          <div className="flex gap-4 justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-xl h-[52px] px-6 gap-2 [font-family:'Inter',Helvetica] font-medium text-base">
              <MessageCircleIcon className="w-3.5 h-6" />
              WhatsApp Support
            </Button>

            <Button
              variant="outline"
              className="rounded-xl h-[52px] px-6 gap-2 border-2 border-gray-300 [font-family:'Inter',Helvetica] font-medium text-gray-700 text-base"
            >
              <CalendarIcon className="w-3.5 h-6" />
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
