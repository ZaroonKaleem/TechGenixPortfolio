'use client'; 
import React, { JSX, useState } from "react";

interface AccordionItem {
  id: string;
  number: string;
  title: string;
  content: string;
  defaultOpen?: boolean;
  icon: JSX.Element;
}

const accordionItems: AccordionItem[] = [
  {
    id: "one",
    number: "01.",
    title: "Expert Development Team",
    content: "Our developers bring years of hands-on experience across web, mobile, and cloud technologies to deliver world-class solutions.",
    defaultOpen: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7ea383"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    id: "two",
    number: "02.",
    title: "End-to-End Solutions",
    content: "From discovery and design to development, deployment, and support — we handle every stage of your project lifecycle.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7ea383"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="12 10 12 14 14 12" />
      </svg>
    ),
  },
  {
    id: "three",
    number: "03.",
    title: "On-Time Delivery",
    content: "We follow agile methodologies to ensure your projects are delivered on schedule and within budget, every time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7ea383"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: "four",
    number: "04.",
    title: "Dedicated Support",
    content: "Our team is always available to assist, troubleshoot, and help your business evolve continuously with reliable post-launch support.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7ea383"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7c0 1.66-1.34 3-3 3a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6c-1.66 0-3-1.34-3-3V5a3 3 0 0 0-3-3z" />
        <path d="M12 15V5" />
      </svg>
    ),
  },
];

const WhyChooseSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>("one");

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[#7ea383] uppercase tracking-wider">
            Why Choose TECHGENIX
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#F0F4F0]">
            Your Success Is Our Mission
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT IMAGE BLOCK */}
          <div className="relative pb-10">
            <img
              src="https://hmstech.org/assets/website/images/choose/h2_1.png"
              alt="Why Choose Us"
              className="w-full rounded-xl"
            />

            {/* STATS CARD */}
            <div className="absolute bottom-0 left-2 right-2">
              <div className="bg-[#242d22]/95 backdrop-blur rounded-lg grid grid-cols-2 border border-[#7ea383]/15">
                <div className="p-5 text-center">
                  <h2 className="text-2xl font-bold text-[#7ea383]">50+</h2>
                  <span className="text-xs text-[#F0F4F0]/55 uppercase tracking-wider">
                    Successful Projects
                  </span>
                </div>
                <div className="p-5 text-center border-l border-[#7ea383]/15">
                  <h2 className="text-2xl font-bold text-[#7ea383]">100%</h2>
                  <span className="text-xs text-[#F0F4F0]/55 uppercase tracking-wider">
                    Client Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="space-y-5">
            {accordionItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                {/* SVG BEFORE CARD */}
                <div className="shrink-0 mt-4">{item.icon}</div>

                {/* CARD */}
                <div
                  className={`flex-1 rounded-xl overflow-hidden transition-colors duration-300 ${
                    openId === item.id
                      ? "bg-[#7faabb]/10 border border-[#7faabb]/20"
                      : "bg-[#F0F4F0]/5 border border-transparent"
                  }`}
                >
                  {/* HEADER / TRIGGER */}
                  <button
                    className="w-full flex items-center justify-between p-5 cursor-pointer"
                    onClick={() => setOpenId(openId === item.id ? "" : item.id)}
                  >
                    <span className="font-semibold text-2xl text-[#F0F4F0] text-left">
                      <span className="text-[#7faabb] text-2xl mr-2">
                        {item.number}
                      </span>
                      {item.title}
                    </span>

                    <svg
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 text-[#7faabb] flex-shrink-0 transition-transform duration-300 ${
                        openId === item.id ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </button>

                  {/* ANIMATED BODY */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openId === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm text-[#F0F4F0]/55 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
