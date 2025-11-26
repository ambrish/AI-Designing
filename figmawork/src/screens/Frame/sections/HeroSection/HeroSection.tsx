import { CalendarIcon, InfoIcon, PlayIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const stats = [
  {
    value: "10+",
    label: "Hours Saved Weekly",
  },
  {
    value: "70%",
    label: "Error Reduction",
  },
  {
    value: "3x",
    label: "Order Processing",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[linear-gradient(135deg,rgba(240,249,255,1)_0%,rgba(255,255,255,1)_50%,rgba(254,252,232,1)_100%)]">
      <div className="container mx-auto px-20 py-12">
        <div className="mx-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <Badge className="w-fit flex items-center gap-2 bg-yellow-100 text-yellow-700 hover:bg-yellow-100 rounded-full px-4 py-2 h-10 border-0">
                <InfoIcon className="w-4 h-4" />
                <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                  WhatsApp-to-Workflow Engine
                </span>
              </Badge>

              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-6xl leading-[60px] tracking-[0]">
                <span className="text-gray-900">Turn your</span>
                <span className="text-sky-600"> WhatsApp chaos</span>
                <span className="text-gray-900">
                  {" "}
                  into clean, automated workflows
                </span>
              </h1>

              <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-xl leading-[33px] tracking-[0]">
                Save 10+ hours weekly and cut errors by 70%. Transform messy
                WhatsApp orders into professional purchase orders, automated
                payment reminders, and instant debit notes.
              </p>
            </div>

            <div className="flex gap-4">
              <Button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl h-[60px] px-8 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a]">
                <CalendarIcon className="w-3.5 h-3.5" />
                <span className="[font-family:'Inter',Helvetica] font-normal text-base">
                  Book a Demo
                </span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-xl h-[60px] px-8 border-2 border-gray-300 bg-transparent hover:bg-gray-50"
              >
                <PlayIcon className="w-3 h-3" />
                <span className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-base">
                  See How It Works
                </span>
              </Button>
            </div>

            <div className="flex gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-2xl text-center">
                    {stat.value}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-24">
            <Card className="relative bg-white rounded-2xl shadow-[0px_25px_50px_#00000040] border-0">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-center bg-gray-100 rounded-xl h-[301.5px]">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-[27px] h-11">
                      <img
                        className="w-full h-full"
                        alt="Play"
                        src="/i-1.svg"
                      />
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-base text-center">
                      Watch Workflow Demo
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/div-4.svg" alt="User" />
                      <AvatarFallback>FO</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <div className="[font-family:'Inter',Helvetica] font-medium text-gray-900 text-base">
                        Frustrated SMB Owner
                      </div>
                      <div className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm">
                        Before Simbly.ai
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="[font-family:'Inter',Helvetica] font-bold text-red-500 text-base">
                      😫
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-xs">
                      Manual chaos
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <img
              className="absolute -top-[21px] right-10 w-[72px] h-[82px]"
              alt="Chat bubble"
              src="/div.svg"
            />

            <Badge className="absolute bottom-8 -left-4 flex items-center gap-2 bg-white hover:bg-white text-black rounded-lg h-[50px] px-[13px] shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] border border-gray-200">
              <img className="w-6 h-6" alt="Icon" src="/div-1.svg" />
              <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                Automated Solution
              </span>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
