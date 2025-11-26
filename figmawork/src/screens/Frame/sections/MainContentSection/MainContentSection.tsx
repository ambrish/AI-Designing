import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const steps = [
  {
    number: "1",
    title: "Receive WhatsApp Order",
    description:
      "Customer sends you an order via WhatsApp - images, text, voice messages, or documents. Our AI instantly captures and processes all order information.",
    features: [
      "Supports images, text, voice, and PDF orders",
      "Works with Hindi, English, and regional languages",
      "Instant processing and acknowledgment",
    ],
    cardBg: "bg-green-100",
    cardTitle: "WhatsApp Order Received",
    cardSubtitle: "Customer order processing...",
    cardIcon: "/i-65.svg",
    numberBg: "bg-sky-500",
    imagePosition: "right",
  },
  {
    number: "2",
    title: "AI Converts to Purchase Order",
    description:
      "Our AI extracts product details, quantities, prices, and customer information, then creates a professional purchase order and saves it in your Gmail drafts folder.",
    features: [
      "Smart data extraction and validation",
      "Professional PO formatting with your branding",
      "Automatic Gmail draft creation",
    ],
    cardBg: "bg-blue-100",
    cardTitle: "Purchase Order Generated",
    cardSubtitle: "Ready for review in Gmail drafts",
    cardIcon: "/i-69.svg",
    numberBg: "bg-yellow-500",
    imagePosition: "left",
  },
  {
    number: "3",
    title: "Review and Send to Supplier",
    description:
      "Simply review the auto-generated purchase order in your Gmail drafts, make any necessary edits, and send it directly to your supplier with one click.",
    features: [
      "Easy review and edit interface",
      "One-click supplier communication",
      "Automatic order tracking initiation",
    ],
    cardBg: "bg-purple-100",
    cardTitle: "Send to Supplier",
    cardSubtitle: "One-click order transmission",
    cardIcon: "/i-37.svg",
    numberBg: "bg-green-500",
    imagePosition: "right",
  },
  {
    number: "4",
    title: "Auto-Reminder Calls",
    description:
      "Our Voice AI agent automatically calls customers for payment reminders, follow-ups, and order confirmations, saving you countless hours of manual calling.",
    features: [
      "Natural, conversational AI voice calls",
      "Customizable call scripts and timing",
      "Automatic call logging and reporting",
    ],
    cardBg: "bg-orange-100",
    cardTitle: "Voice AI Agent",
    cardSubtitle: "Automated customer calls",
    cardIcon: "/i-44.svg",
    numberBg: "bg-orange-500",
    imagePosition: "left",
  },
  {
    number: "5",
    title: "Auto-Generated Debit Notes",
    description:
      "Professional debit notes and invoices are automatically generated with proper GST calculations, company branding, and sent directly to customers via email.",
    features: [
      "GST-compliant invoice generation",
      "Custom branding and templates",
      "Automatic email delivery to customers",
    ],
    cardBg: "bg-teal-100",
    cardTitle: "Debit Notes Generated",
    cardSubtitle: "GST-compliant & branded",
    cardIcon: "/i-87.svg",
    numberBg: "bg-teal-500",
    imagePosition: "right",
  },
  {
    number: "6",
    title: "Dashboard Monitoring",
    description:
      "Monitor all orders, payments, and supplier communications from a comprehensive dashboard with real-time updates and detailed analytics.",
    features: [
      "Real-time order and payment tracking",
      "Detailed analytics and reporting",
      "Multi-user access and permissions",
    ],
    cardBg: "bg-indigo-100",
    cardTitle: "Dashboard Overview",
    cardSubtitle: "Complete business visibility",
    cardIcon: "/i-76.svg",
    numberBg: "bg-indigo-500",
    imagePosition: "left",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto max-w-[1280px] px-8">
        <div className="flex flex-col gap-16">
          <header className="flex flex-col gap-2">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-5xl text-center tracking-[0] leading-[48px]">
              How Simbly.ai Works
            </h2>
            <p className="mx-auto max-w-[768px] [font-family:'Inter',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-7">
              Simple 6-step automation that transforms your WhatsApp chaos into
              organized business workflows
            </p>
          </header>

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {step.imagePosition === "left" && (
                  <Card className="w-full shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a]">
                    <CardContent className="p-6">
                      <div
                        className={`${step.cardBg} rounded-xl flex items-center justify-center h-[301.5px]`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <img
                            className="w-12 h-[59px]"
                            alt={step.cardTitle}
                            src={step.cardIcon}
                          />
                          <div className="[font-family:'Inter',Helvetica] font-medium text-gray-600 text-base text-center tracking-[0] leading-6">
                            {step.cardTitle}
                          </div>
                          <div className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm text-center tracking-[0] leading-5">
                            {step.cardSubtitle}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <div
                      className={`${step.numberBg} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white text-lg [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[normal]">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-2xl tracking-[0] leading-8 mt-2">
                      {step.title}
                    </h3>
                  </div>

                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg tracking-[0] leading-7">
                    {step.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex gap-3 items-start"
                      >
                        <CheckIcon className="w-3.5 h-6 text-gray-700 flex-shrink-0" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-base tracking-[0] leading-6">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {step.imagePosition === "right" && (
                  <Card className="w-full shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a]">
                    <CardContent className="p-6">
                      <div
                        className={`${step.cardBg} rounded-xl flex items-center justify-center h-[301.5px]`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <img
                            className="w-12 h-[59px]"
                            alt={step.cardTitle}
                            src={step.cardIcon}
                          />
                          <div className="[font-family:'Inter',Helvetica] font-medium text-gray-600 text-base text-center tracking-[0] leading-6">
                            {step.cardTitle}
                          </div>
                          <div className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm text-center tracking-[0] leading-5">
                            {step.cardSubtitle}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
