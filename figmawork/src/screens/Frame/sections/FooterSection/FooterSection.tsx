import React from "react";

const productLinks = [
  { label: "Features", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "API Documentation", href: "#" },
  { label: "Integrations", href: "#" },
];

const supportLinks = [
  { label: "FAQ", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "WhatsApp Support", href: "#" },
  { label: "Video Tutorials", href: "#" },
  { label: "Status Page", href: "#" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-gray-900">
      <div className="max-w-[1280px] mx-auto px-20 py-16">
        <div className="flex flex-col gap-12">
          <div className="flex gap-8">
            <div className="w-[592px] flex flex-col gap-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[linear-gradient(90deg,rgba(14,165,233,1)_0%,rgba(234,179,8,1)_100%)]">
                  <div className="text-xl leading-7 [font-family:'Inter',Helvetica] font-bold text-white">
                    S
                  </div>
                </div>
                <div className="flex items-center text-white text-2xl leading-8 [font-family:'Playfair_Display',Helvetica] font-bold whitespace-nowrap">
                  Simbly.ai
                </div>
              </div>

              <p className="w-[448px] [font-family:'Inter',Helvetica] font-normal text-gray-300 text-base leading-6">
                The WhatsApp-to-Workflow Engine for Indian SMBs. Transform messy
                WhatsApp orders into clean, automated business processes.
              </p>

              <img
                className="w-[592px] h-10"
                alt="Social media links"
                src="/div-8.svg"
              />
            </div>

            <nav className="w-[280px] flex flex-col gap-4">
              <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-lg leading-7 whitespace-nowrap">
                Product
              </h3>
              <ul className="flex flex-col gap-2">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Inter',Helvetica] font-normal text-gray-300 text-base leading-6 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="w-[280px] flex flex-col gap-4">
              <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-lg leading-7 whitespace-nowrap">
                Support
              </h3>
              <ul className="flex flex-col gap-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Inter',Helvetica] font-normal text-gray-300 text-base leading-6 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-6 border-t border-gray-800 pt-6">
            <div className="flex justify-between items-center">
              <p className="[font-family:'Inter',Helvetica] font-normal text-gray-300 text-base leading-6 whitespace-nowrap">
                © 2024 Simbly.ai. All rights reserved.
              </p>

              <nav className="flex gap-6">
                {policyLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="[font-family:'Inter',Helvetica] font-normal text-gray-300 text-sm leading-5 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex justify-center items-center gap-2">
              <img className="w-3.5 h-3.5" alt="India flag" src="/frame.svg" />
              <p className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-sm text-center leading-5">
                Made in India for Indian SMBs
              </p>
              <img className="w-3.5 h-3.5" alt="India flag" src="/frame.svg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
