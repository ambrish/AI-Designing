import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const statsCards = [
  {
    title: "Today's Orders",
    value: "47",
    subtitle: "+12% from yesterday",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    valueColor: "text-blue-900",
    icon: "/i-20.svg",
  },
  {
    title: "Revenue",
    value: "₹2,34,500",
    subtitle: "+8% from last week",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    valueColor: "text-green-900",
    icon: "/i-42.svg",
  },
  {
    title: "Pending Payments",
    value: "12",
    subtitle: "₹45,200 total",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    valueColor: "text-orange-900",
    icon: "/i-19.svg",
  },
  {
    title: "AI Calls Made",
    value: "28",
    subtitle: "85% success rate",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    valueColor: "text-purple-900",
    icon: "/i-3.svg",
  },
];

const whatsappOrders = [
  {
    name: "Amit Traders",
    description: "500 kg Rice, 200 kg Dal",
    amount: "₹45,000",
    status: "Processed",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
    icon: "/div-6.svg",
  },
  {
    name: "Sharma Enterprises",
    description: "1000 kg Wheat, 300 kg Sugar",
    amount: "₹78,500",
    status: "Processing",
    statusBg: "bg-yellow-100",
    statusText: "text-yellow-800",
    icon: "/div-6.svg",
  },
];

const paymentStatus = [
  {
    name: "Gupta Stores",
    description: "Payment overdue by 5 days",
    amount: "₹23,400",
    status: "Call Now",
    statusBg: "bg-red-100",
    statusText: "text-red-800",
    icon: "/div-14.svg",
  },
  {
    name: "Patel Trading Co.",
    description: "Payment received today",
    amount: "₹67,800",
    status: "Paid",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
    icon: "/div-3.svg",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="flex flex-col gap-16">
          <header className="flex flex-col gap-2 px-8">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-5xl text-center tracking-[0] leading-[48px]">
              Your Business Command Center
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-7 max-w-[768px] mx-auto">
              Get complete visibility into your operations with our
              comprehensive dashboard designed for Indian SMBs
            </p>
          </header>

          <div className="px-8">
            <Card className="bg-gray-900 rounded-3xl border-0 shadow-[0px_25px_50px_#00000040] p-8">
              <CardContent className="p-0">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[linear-gradient(90deg,rgba(14,165,233,1)_0%,rgba(234,179,8,1)_100%)] flex items-center justify-center">
                          <span className="[font-family:'Inter',Helvetica] font-bold text-white text-sm leading-5">
                            S
                          </span>
                        </div>
                        <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-gray-900 text-xl leading-7">
                          Simbly.ai Dashboard
                        </h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="/img-1.png" alt="Rajesh Kumar" />
                            <AvatarFallback>RK</AvatarFallback>
                          </Avatar>
                          <span className="[font-family:'Inter',Helvetica] font-medium text-gray-700 text-sm">
                            Rajesh Kumar
                          </span>
                        </div>
                        <img className="w-3.5 h-6" alt="Menu" src="/i-67.svg" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-8">
                    <div className="grid grid-cols-4 gap-6">
                      {statsCards.map((stat, index) => (
                        <Card
                          key={index}
                          className={`${stat.bgColor} border-0 rounded-xl`}
                        >
                          <CardContent className="p-4 flex flex-col gap-2">
                            <div className="flex items-start justify-between">
                              <span
                                className={`[font-family:'Inter',Helvetica] font-medium ${stat.textColor} text-sm leading-5`}
                              >
                                {stat.title}
                              </span>
                              <img
                                className="w-4 h-6"
                                alt="Icon"
                                src={stat.icon}
                              />
                            </div>
                            <div
                              className={`[font-family:'Inter',Helvetica] font-bold ${stat.valueColor} text-2xl tracking-[0] leading-[normal]`}
                            >
                              {stat.value}
                            </div>
                            <div
                              className={`[font-family:'Inter',Helvetica] font-normal ${stat.textColor} text-xs tracking-[0] leading-[normal]`}
                            >
                              {stat.subtitle}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <Card className="bg-gray-50 border-0 rounded-xl">
                        <CardContent className="p-6 flex flex-col gap-4">
                          <h4 className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-lg tracking-[0] leading-[normal]">
                            Recent WhatsApp Orders
                          </h4>
                          <div className="flex flex-col gap-3">
                            {whatsappOrders.map((order, index) => (
                              <Card
                                key={index}
                                className="bg-white border-0 rounded-lg"
                              >
                                <CardContent className="p-3 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <img
                                      className="w-10 h-10"
                                      alt={order.name}
                                      src={order.icon}
                                    />
                                    <div className="flex flex-col">
                                      <span className="[font-family:'Inter',Helvetica] font-medium text-gray-900 text-base leading-6">
                                        {order.name}
                                      </span>
                                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm leading-5">
                                        {order.description}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-end gap-0.5">
                                    <span className="[font-family:'Inter',Helvetica] font-medium text-gray-900 text-base leading-6">
                                      {order.amount}
                                    </span>
                                    <Badge
                                      className={`${order.statusBg} ${order.statusText} [font-family:'Inter',Helvetica] font-normal text-xs border-0 rounded`}
                                    >
                                      {order.status}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-50 border-0 rounded-xl">
                        <CardContent className="p-6 flex flex-col gap-4">
                          <h4 className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-lg tracking-[0] leading-[normal]">
                            Payment Status
                          </h4>
                          <div className="flex flex-col gap-3">
                            {paymentStatus.map((payment, index) => (
                              <Card
                                key={index}
                                className="bg-white border-0 rounded-lg"
                              >
                                <CardContent className="p-3 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <img
                                      className="w-10 h-10"
                                      alt={payment.name}
                                      src={payment.icon}
                                    />
                                    <div className="flex flex-col">
                                      <span className="[font-family:'Inter',Helvetica] font-medium text-gray-900 text-base leading-6">
                                        {payment.name}
                                      </span>
                                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm leading-5">
                                        {payment.description}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-end gap-0.5">
                                    <span className="[font-family:'Inter',Helvetica] font-medium text-gray-900 text-base leading-6">
                                      {payment.amount}
                                    </span>
                                    <Badge
                                      className={`${payment.statusBg} ${payment.statusText} [font-family:'Inter',Helvetica] font-normal text-xs border-0 rounded`}
                                    >
                                      {payment.status}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
