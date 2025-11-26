import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const servicesData = [
  {
    icon: "/div-10.svg",
    title: "Save 10+ Hours Weekly",
    description:
      "Eliminate manual data entry and order processing. Our AI handles everything from WhatsApp messages to purchase orders automatically.",
    features: [
      "Auto order extraction",
      "Smart data formatting",
      "Instant PO generation",
    ],
    gradient:
      "bg-[linear-gradient(135deg,rgba(239,246,255,1)_0%,rgba(240,249,255,1)_100%)]",
  },
  {
    icon: "/div-18.svg",
    title: "Reduce Errors by 70%",
    description:
      "Say goodbye to manual transcription mistakes. Our AI accurately captures order details with 99.5% accuracy rate.",
    features: [
      "OCR text recognition",
      "Smart validation checks",
      "Error prevention alerts",
    ],
    gradient:
      "bg-[linear-gradient(135deg,rgba(240,253,244,1)_0%,rgba(236,253,245,1)_100%)]",
  },
  {
    icon: "/div-17.svg",
    title: "Process 3x More Orders",
    description:
      "Scale your business without hiring additional staff. Handle hundreds of orders daily with the same team size.",
    features: [
      "Parallel processing",
      "Bulk operations",
      "Smart prioritization",
    ],
    gradient:
      "bg-[linear-gradient(135deg,rgba(250,245,255,1)_0%,rgba(238,242,255,1)_100%)]",
  },
  {
    icon: "/div-19.svg",
    title: "Auto-Payment Calls",
    description:
      "Our Voice AI agent makes payment reminder calls automatically, so you don't have to spend time chasing payments.",
    features: [
      "Natural voice calls",
      "Multiple languages",
      "Follow-up scheduling",
    ],
    gradient:
      "bg-[linear-gradient(135deg,rgba(255,247,237,1)_0%,rgba(255,251,235,1)_100%)]",
  },
  {
    icon: "/div-9.svg",
    title: "Auto-Generated Debit Notes",
    description:
      "Instantly create professional debit notes and invoices with proper GST calculations and formatting.",
    features: [
      "GST compliance",
      "Professional templates",
      "Auto email delivery",
    ],
    gradient:
      "bg-[linear-gradient(135deg,rgba(240,253,250,1)_0%,rgba(236,254,255,1)_100%)]",
  },
  {
    icon: "/div-2.svg",
    title: "Tally Integration",
    description:
      "Seamlessly sync all transactions with your existing Tally software. No double data entry required.",
    features: ["Real-time sync", "Data validation", "Backup protection"],
    gradient:
      "bg-[linear-gradient(135deg,rgba(255,241,242,1)_0%,rgba(253,242,248,1)_100%)]",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto max-w-[1280px] px-20">
        <div className="flex flex-col gap-16">
          <header className="flex flex-col gap-2 px-8">
            <h2 className="h-16 [font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-5xl text-center tracking-[0] leading-[48px]">
              Why Indian SMBs Choose Simbly.ai
            </h2>
            <p className="mx-auto w-full max-w-[768px] h-14 [font-family:'Inter',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-7">
              Transform your business operations with AI-powered automation
              designed specifically for Indian trading businesses
            </p>
          </header>

          <div className="grid grid-cols-3 gap-8 px-8">
            {servicesData.map((service, index) => (
              <Card
                key={index}
                className={`${service.gradient} rounded-2xl border-0 shadow-none`}
              >
                <CardContent className="flex flex-col p-8 gap-6">
                  <img
                    className="w-16 h-16"
                    alt={service.title}
                    src={service.icon}
                  />

                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-2xl tracking-[0] leading-8">
                    {service.title}
                  </h3>

                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-6">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-2 items-start">
                        <img
                          className="w-[12.25px] h-5 mt-px"
                          alt="Check"
                          src="/i-2.svg"
                        />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-sm tracking-[0] leading-[normal]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
