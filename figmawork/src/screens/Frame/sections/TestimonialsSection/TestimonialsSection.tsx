import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with automation",
    price: "₹2,999",
    period: "/month",
    billingNote: "Billed monthly",
    features: [
      "WhatsApp to Purchase Order conversion",
      "Basic payment reminders",
      "Gmail integration",
      "Up to 100 orders/month",
      "Email support",
      "Basic dashboard",
    ],
    buttonText: "Start Free Trial",
    isPopular: false,
    gradient: false,
  },
  {
    name: "Growth",
    description: "Best for growing businesses with regular order volumes",
    price: "₹5,999",
    period: "/month",
    billingNote: "Billed monthly",
    features: [
      "Everything in Starter",
      "Auto-generated debit notes",
      "Tally export integration",
      "Voice AI calling (50 calls/month)",
      "Up to 500 orders/month",
      "Multi-user dashboard (3 users)",
      "WhatsApp support",
      "Advanced analytics",
    ],
    buttonText: "Start Free Trial",
    isPopular: true,
    gradient: true,
  },
  {
    name: "Enterprise",
    description: "For large businesses with multiple branches and high volumes",
    price: "₹12,999",
    period: "/month",
    billingNote: "Billed monthly",
    features: [
      "Everything in Growth",
      "Multi-branch support",
      "White-label invoices",
      "Unlimited Voice AI calls",
      "Unlimited orders",
      "Unlimited users",
      "Dedicated account manager",
      "Priority support",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
    gradient: false,
  },
];

const allPlansFeatures = [
  "Free setup & onboarding",
  "14-day free trial",
  "No setup fees",
  "Cancel anytime",
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-5xl text-center tracking-[0] leading-[48px]">
            Simple, Transparent Pricing
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-7 max-w-[768px] mx-auto">
            Choose the perfect plan for your business size. All plans include
            free setup and 24/7 WhatsApp support.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[22.4px] mb-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col rounded-2xl border-0 ${
                plan.gradient
                  ? "bg-[linear-gradient(135deg,rgba(240,249,255,1)_0%,rgba(254,252,232,1)_100%)] relative pt-[25.2px]"
                  : "bg-gray-50"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-[-16.8px] left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-sky-500 text-white rounded-full px-4 py-1 [font-family:'Inter',Helvetica] font-medium text-sm">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardContent
                className={`flex flex-col gap-8 ${plan.gradient ? "p-[33.6px]" : "p-8"}`}
              >
                <div className="flex flex-col">
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-2xl text-center tracking-[0] leading-8 whitespace-nowrap">
                    {plan.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-base text-center tracking-[0] leading-6 mt-2">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center mt-6">
                    <span className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-4xl text-center tracking-[0]">
                      {plan.price}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg text-center tracking-[0] leading-7 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm text-center tracking-[0] leading-5 mt-2">
                    {plan.billingNote}
                  </p>
                </div>

                <div
                  className={`flex flex-col ${plan.gradient ? "gap-[16.8px]" : "gap-4"}`}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3 items-start">
                      <CheckIcon
                        className={`${plan.gradient ? "w-[14.7px] h-[25.2px]" : "w-3.5 h-6"} text-gray-700 flex-shrink-0 mt-0.5`}
                      />
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-base tracking-[0] leading-6">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full bg-gray-800 hover:bg-gray-700 text-white rounded-xl ${plan.gradient ? "h-[50.4px]" : "h-12"} [font-family:'Inter',Helvetica] font-normal text-base`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-base text-center tracking-[0] leading-6">
            All plans include:
          </p>
          <div className="flex gap-6 justify-center">
            {allPlansFeatures.map((feature, index) => (
              <div key={index} className="flex gap-2 items-center">
                <CheckIcon className="w-3.5 h-6 text-gray-700 flex-shrink-0" />
                <span className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
