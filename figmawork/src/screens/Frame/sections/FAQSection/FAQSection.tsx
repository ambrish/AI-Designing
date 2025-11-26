import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

const formFields = [
  {
    id: "name",
    label: "Your Name *",
    placeholder: "Enter your name",
    type: "text",
    fullWidth: false,
  },
  {
    id: "phone",
    label: "Phone Number *",
    placeholder: "+91 98765 43210",
    type: "tel",
    fullWidth: false,
  },
  {
    id: "email",
    label: "Business Email *",
    placeholder: "your@business.com",
    type: "email",
    fullWidth: true,
  },
  {
    id: "business",
    label: "Business Name *",
    placeholder: "Your Business Name",
    type: "text",
    fullWidth: true,
  },
];

const demoTimeOptions = [
  { id: "morning", label: "Morning (9-12)" },
  { id: "afternoon", label: "Afternoon (12-4)" },
  { id: "evening", label: "Evening (4-7)" },
  { id: "flexible", label: "Flexible" },
];

const features = [
  {
    icon: "/div-10.svg",
    title: "15-Minute Demo",
    description: "Quick, focused demonstration of key features",
  },
  {
    icon: "/div-13.svg",
    title: "Personal Consultant",
    description: "Dedicated setup support for your business",
  },
  {
    icon: "/div-15.svg",
    title: "Free Trial",
    description: "14-day full access trial after demo",
  },
];

export const FAQSection = (): JSX.Element => {
  const [selectedTime, setSelectedTime] = useState<string>("");

  return (
    <section className="relative w-full bg-[linear-gradient(135deg,rgba(2,132,199,1)_0%,rgba(202,138,4,1)_100%)] py-20">
      <div className="max-w-[896px] mx-auto px-4 flex flex-col">
        <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-[48px] px-8">
          Ready to Transform Your Business?
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 mt-2 px-8">
          Book a personalized demo and see how Simbly.ai can save you 10+ hours
          weekly and reduce errors by 70%
        </p>

        <Card className="mt-12 mx-auto w-full max-w-[672px] rounded-3xl border-0">
          <CardContent className="p-8">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                {formFields.slice(0, 2).map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <Label
                      htmlFor={field.id}
                      className="[font-family:'Inter',Helvetica] font-medium text-gray-700 text-sm text-center"
                    >
                      {field.label}
                    </Label>
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="h-[50px] rounded-xl border-gray-300 [font-family:'Inter',Helvetica] font-normal text-base placeholder:text-[#adaebc]"
                    />
                  </div>
                ))}
              </div>

              {formFields.slice(2).map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <Label
                    htmlFor={field.id}
                    className="[font-family:'Inter',Helvetica] font-medium text-gray-700 text-sm text-center"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="h-[50px] rounded-xl border-gray-300 [font-family:'Inter',Helvetica] font-normal text-base placeholder:text-[#adaebc]"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="order-volume"
                  className="[font-family:'Inter',Helvetica] font-medium text-gray-700 text-sm text-center"
                >
                  Monthly Order Volume
                </Label>
                <Select>
                  <SelectTrigger
                    id="order-volume"
                    className="h-12 rounded-xl border-gray-300 [font-family:'Inter',Helvetica] font-normal text-base"
                  >
                    <SelectValue placeholder="Select order volume" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-100">0-100 orders</SelectItem>
                    <SelectItem value="100-500">100-500 orders</SelectItem>
                    <SelectItem value="500-1000">500-1000 orders</SelectItem>
                    <SelectItem value="1000+">1000+ orders</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="[font-family:'Inter',Helvetica] font-medium text-gray-700 text-sm text-center">
                  Preferred Demo Time
                </Label>
                <RadioGroup
                  value={selectedTime}
                  onValueChange={setSelectedTime}
                  className="flex gap-3"
                >
                  {demoTimeOptions.map((option) => (
                    <div key={option.id} className="flex items-center gap-2">
                      <RadioGroupItem
                        value={option.id}
                        id={option.id}
                        className="w-[13px] h-[13px] border-[0.5px] border-black"
                      />
                      <Label
                        htmlFor={option.id}
                        className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-5 whitespace-nowrap cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button className="w-full h-14 bg-gray-800 hover:bg-gray-700 rounded-xl [font-family:'Inter',Helvetica] font-normal text-white text-base">
                Book My Free Demo
              </Button>

              <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm text-center tracking-[0] leading-5">
                We'll call you within 2 hours to schedule your personalized
                demo. No spam, we promise!
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-3 gap-8 mt-12 px-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-16 h-16"
                alt={feature.title}
                src={feature.icon}
              />
              <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap mt-4">
                {feature.title}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-6 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
