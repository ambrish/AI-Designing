import React from "react";
import { Button } from "../../components/ui/button";
import { DashboardSection } from "./sections/DashboardSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { PricingSection } from "./sections/PricingSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export const Frame = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start relative bg-white border-2 border-solid border-[#ced4da]">
      <div className="relative w-full bg-gray-50">
        <header className="sticky top-0 left-0 w-full h-16 flex bg-white shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] z-50">
          <div className="w-full max-w-[1280px] mx-auto px-8 flex items-center">
            <div className="w-full flex items-center justify-between gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[linear-gradient(90deg,rgba(14,165,233,1)_0%,rgba(234,179,8,1)_100%)]">
                  <span className="text-xl leading-7 [font-family:'Inter',Helvetica] font-bold text-white">
                    S
                  </span>
                </div>
                <h1 className="text-gray-900 text-2xl leading-8 [font-family:'Playfair_Display',Helvetica] font-bold whitespace-nowrap">
                  Simbly.ai
                </h1>
              </div>

              <nav className="flex items-center">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-1 py-1">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="px-4 py-2 rounded-full font-medium text-gray-700 text-sm text-center hover:bg-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="font-medium text-gray-700 text-base hover:bg-transparent"
                >
                  Login
                </Button>
                <Button className="bg-gray-800 hover:bg-gray-700 rounded-full shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] font-medium text-white text-base px-6">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="w-full">
          <HeroSection />
          <ServicesSection />
          <MainContentSection />
          <FeaturesSection />
          <DashboardSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
};
