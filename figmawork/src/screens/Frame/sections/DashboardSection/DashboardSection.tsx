import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Traders, Delhi",
    image: "/img-1.png",
    rating: "/div-12.svg",
    testimonial: [
      '"Simbly.ai has completely transformed',
      "our business. We used to spend 4-5",
      "hours daily just processing WhatsApp",
      "orders. Now it's all automated! Our",
      "revenue increased by 40% in just 3",
      "months because we can handle so many",
      'more orders."',
    ],
    icon: "/i-74.svg",
    category: "Wholesale Trading Business",
  },
  {
    name: "Priya Sharma",
    company: "Sharma Enterprises, Mumbai",
    image: "/img-2.png",
    rating: "/div-5.svg",
    testimonial: [
      '"The Voice AI calling feature is incredible!',
      "It automatically calls customers for",
      "payment reminders in perfect Hindi. Our",
      "collection efficiency improved by 60%.",
      'No more manual follow-ups needed!"',
    ],
    icon: "/i-51.svg",
    category: "Manufacturing & Distribution",
  },
  {
    name: "Amit Patel",
    company: "Patel Trading Co., Ahmedabad",
    image: "/img-3.png",
    rating: "/div-5.svg",
    testimonial: [
      '"Best investment for our business! The',
      "Tally integration saves us from double",
      "data entry. GST-compliant invoices are",
      "generated automatically. We reduced our",
      'accounting errors by 80%."',
    ],
    icon: "/i-80.svg",
    category: "Import & Export Business",
  },
];

const statistics = [
  {
    value: "500+",
    label: "SMBs Using Simbly.ai",
  },
  {
    value: "10,000+",
    label: "Orders Processed Daily",
  },
  {
    value: "4.9/5",
    label: "Customer Satisfaction",
  },
  {
    value: "₹2Cr+",
    label: "Revenue Processed",
  },
];

export const DashboardSection = (): JSX.Element => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-20">
        <header className="flex flex-col gap-2 mb-16">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-5xl text-center tracking-[0] leading-[48px]">
            What Indian SMBs Say About Simbly.ai
          </h2>

          <p className="mx-auto max-w-[768px] [font-family:'Inter',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-7">
            Join thousands of businesses across India who have transformed their
            operations with Simbly.ai
          </p>
        </header>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] border-0"
            >
              <CardContent className="flex flex-col gap-6 p-8">
                <div className="flex gap-4">
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat flex-shrink-0"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />

                  <div className="flex flex-col">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-lg tracking-[0] leading-7 whitespace-nowrap">
                      {testimonial.name}
                    </div>

                    <div className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm tracking-[0] leading-5 whitespace-nowrap">
                      {testimonial.company}
                    </div>

                    <img
                      className="h-6 mt-1"
                      alt="Rating"
                      src={testimonial.rating}
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  {testimonial.testimonial.map((line, lineIndex) => (
                    <div
                      key={lineIndex}
                      className="h-[26px] [font-family:'Inter',Helvetica] font-normal text-gray-700 text-base tracking-[0] leading-[normal]"
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 items-center">
                  <img
                    className="h-5"
                    alt="Category icon"
                    src={testimonial.icon}
                  />

                  <div className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
                    {testimonial.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Card className="bg-white rounded-2xl shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] border-0">
            <CardContent className="flex gap-8 p-6">
              {statistics.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    {stat.value}
                  </div>

                  <div className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm text-center tracking-[0] leading-[normal] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
