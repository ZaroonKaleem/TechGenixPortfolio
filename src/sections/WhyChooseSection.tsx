import React from "react";

type AccordionItem = {
  id: string;
  number: string;
  title: string;
  content: string;
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
  },
  {
    id: "two",
    number: "02.",
    title: "End-to-End Solutions",
    content:
      "From discovery and design to development, deployment, and support — we handle every stage of your project lifecycle.",
  },
  {
    id: "three",
    number: "03.",
    title: "On-Time Delivery",
    content:
      "We follow agile methodologies to ensure your projects are delivered on schedule and within budget, every time.",
  },
  {
    id: "four",
    number: "04.",
    title: "Dedicated Support",
    content:
      "Our team is always available to assist, troubleshoot, and help your business evolve continuously with reliable post-launch support.",
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[#2DD3F1] uppercase tracking-wider">
            Why Choose HMSTECH
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Your Success Is Our Mission
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT IMAGE BLOCK */}
          <div className="relative">
            <img
              src="https://hmstech.org/assets/website/images/choose/h2_1.png"
              alt="Why Choose Us"
              className="w-full rounded-xl"
            />

            {/* STATS OVERLAY */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="bg-[#0d1b2a]/95 backdrop-blur p-4 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-[#32CD89]">50+</h2>
                <span className="text-xs text-white/60 uppercase tracking-wider">
                  Successful Projects
                </span>
              </div>
              <div className="bg-[#0d1b2a]/95 backdrop-blur p-4 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-[#32CD89]">100%</h2>
                <span className="text-xs text-white/60 uppercase tracking-wider">
                  Client Satisfaction
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="space-y-3">
            {accordionItems.map((item) => (
              <details
                key={item.id}
                className="group rounded-xl p-5 bg-white/5 open:bg-[#2229D2]/15 transition-all duration-300"
                open={item.defaultOpen}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-white">
                    <span className="text-[#2DD3F1] mr-2">{item.number}</span>
                    {item.title}
                  </span>
                  <span className="text-[#2DD3F1] text-xl group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">
                  {item.content}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
