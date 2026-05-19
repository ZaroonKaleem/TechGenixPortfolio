'use client'; 
import React, { useState } from "react";

type AccordionItem = {
  id: string;
  number: string;
  title: string;
  content: string;
  icon: React.ReactNode;
  defaultOpen?: boolean;
};

const accordionItems: AccordionItem[] = [
  {
    id: "one",
    number: "01.",
    title: "Expert Development Team",
    content:
      "Our developers bring years of hands-on experience across web, mobile, and cloud technologies to deliver world-class solutions.",
    defaultOpen: true,

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        className="w-10 h-10 text-[#2DD3F1]"
        fill="currentColor"
      >
        {/* YOUR SVG 1 */}
        <circle cx="20" cy="20" r="18" />
      </svg>
    ),
  },

  {
    id: "two",
    number: "02.",
    title: "End-to-End Solutions",
    content:
      "From discovery and design to development, deployment, and support — we handle every stage of your project lifecycle.",

    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-[#32CD89]"
        fill="currentColor"
      >
        {/* YOUR SVG 2 */}
        <rect x="8" y="8" width="24" height="24" rx="4" />
      </svg>
    ),
  },

  {
    id: "three",
    number: "03.",
    title: "On-Time Delivery",
    content:
      "We follow agile methodologies to ensure your projects are delivered on schedule and within budget, every time.",

    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-[#2DD3F1]"
        fill="currentColor"
      >
        {/* YOUR SVG 3 */}
        <polygon points="20,5 35,35 5,35" />
      </svg>
    ),
  },

  {
    id: "four",
    number: "04.",
    title: "Dedicated Support",
    content:
      "Our team is always available to assist, troubleshoot, and help your business evolve continuously with reliable post-launch support.",

    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-[#32CD89]"
        fill="currentColor"
      >
        {/* YOUR SVG 4 */}
        <path d="M20 5L35 20L20 35L5 20Z" />
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
          <span className="text-sm font-semibold text-[#2DD3F1] uppercase tracking-wider">
            Why Choose TECHGENIX
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
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

            {/* STATS CARD — half on image, half below */}
            <div className="absolute bottom-0 left-2 right-2">
              <div className="bg-[#0d1b2a]/95 backdrop-blur rounded-lg grid grid-cols-2 border border-white/10">
                <div className="p-5 text-center">
                  <h2 className="text-2xl font-bold text-[#32CD89]">50+</h2>
                  <span className="text-xs text-white/60 uppercase tracking-wider">
                    Successful Projects
                  </span>
                </div>
                <div className="p-5 text-center border-l border-white/10">
                  <h2 className="text-2xl font-bold text-[#32CD89]">100%</h2>
                  <span className="text-xs text-white/60 uppercase tracking-wider">
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
                <div className="shrink-0 text-[#2DD3F1] mt-4">{item.icon}</div>

                {/* CARD */}
                <div
                  className={`flex-1 rounded-xl overflow-hidden transition-colors duration-300 ${
                    openId === item.id
                      ? "bg-[#2229D2]/15"
                      : "bg-white/5"
                  }`}
                >
                  {/* HEADER / TRIGGER */}
                  <button
                    className="w-full flex items-center justify-between p-5 cursor-pointer"
                    onClick={() =>
                      setOpenId(openId === item.id ? "" : item.id)
                    }
                  >
                    <span className="font-semibold text-2xl text-white text-left">
                      <span className="text-[#2DD3F1] text-2xl mr-2">
                        {item.number}
                      </span>
                      {item.title}
                    </span>

                    {/* CHEVRON ICON — rotates 180° when open */}
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 text-[#2DD3F1] flex-shrink-0 transition-transform duration-300 ${
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
                      openId === item.id
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm text-white/55 leading-relaxed">
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