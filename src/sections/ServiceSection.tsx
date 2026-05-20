import React from "react";
import Link from "next/link";
import { FaCode, FaMobileAlt, FaBullhorn, FaHeadset, FaShoppingCart } from "react-icons/fa";

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

const services: ServiceItem[] = [
  {
    title: "Web Development",
    description: "Custom websites and web apps built with modern frameworks for performance and scale.",
    icon: <FaCode />,
    href: "https://hmstech.org/service",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform apps for iOS & Android that deliver seamless user experiences.",
    icon: <FaMobileAlt />,
    href: "https://hmstech.org/service",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven SEO, social media, and paid campaigns that drive real business growth.",
    icon: <FaBullhorn />,
    href: "https://hmstech.org/service",
  },
{
  title: "Ecommerce Development",
  description:
    "High-performance eCommerce websites and online stores built to increase conversions..",
  icon: <FaShoppingCart />,
  href: "https://hmstech.org/service",
},
];

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#161d14]">
      <div className="max-w-8xl mx-auto px-6 sm:px-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex mb-6 items-center px-5 py-2 text-sm font-semibold tracking-wider rounded-full bg-[#7ea383]/10 text-[#7ea383] border border-[#7ea383]/25">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#F0F4F0]">
            Full-Spectrum IT Services for Every Business Need
          </h2>
        </div>

        {/* Centered Flex Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              // Fixed 320x320 size, added shrink-0 so they don't squish, added overflow-hidden in case text is too long
              className="group flex w-[310px] h-[310px] shrink-0 overflow-hidden flex-col rounded-xl border border-[#7ea383]/10 bg-[#F0F4F0]/5 p-7 text-left transition-all duration-300 hover:border-transparent hover:bg-[#7ea383] sm:p-8"
            >
              {/* Top: Icon + Title + Description */}
              <div className="flex h-full flex-col">
                
                {/* Top Content */}
                <div>
                  {/* Icon */}
                  <div className="mb-5 text-4xl text-[#7ea383] transition-colors ">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h4 className="mb-3 text-xl font-semibold leading-snug text-[#F0F4F0] transition-colors group-hover:text-[#1c221a]">
                    <Link
                      href={service.href}
                      className="transition-colors duration-300"
                    >
                      {service.title}
                    </Link>
                  </h4>
                </div>

                {/* Push Description to Bottom */}
                <div className="mt-auto pt-4">
                  <p className="text-sm text-justify leading-relaxed text-[#F0F4F0]/60 transition-colors duration-300 group-hover:text-[#1c221a]/80">
                    {service.description}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;