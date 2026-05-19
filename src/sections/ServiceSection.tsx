import React from "react";
import Link from "next/link";
import { FaCode, FaMobileAlt, FaBullhorn, FaHeadset } from "react-icons/fa";

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

const services: ServiceItem[] = [
  {
    title: "Web Development",
    description:
      "Custom websites and web apps built with modern frameworks for performance and scale.",
    icon: <FaCode />,
    href: "https://hmstech.org/service",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS & Android that deliver seamless user experiences.",
    icon: <FaMobileAlt />,
    href: "https://hmstech.org/service",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven SEO, social media, and paid campaigns that drive real business growth.",
    icon: <FaBullhorn />,
    href: "https://hmstech.org/service",
  },
  {
    title: "Maintenance & Support",
    description:
      "Reliable support and maintenance to keep your digital systems running at peak performance.",
    icon: <FaHeadset />,
    href: "https://hmstech.org/service",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex mb-6 items-center px-5 py-2 text-sm font-semibold tracking-wider rounded-full bg-[#2DD3F1]/10 text-[#2DD3F1] border border-[#2DD3F1]/20">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Full-Spectrum IT Services for Every Business Need
          </h2>
        </div>

        {/* Grid — full-width responsive, no overflow trick */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-xl bg-white/5 hover:bg-[#2DD3F1] transition-all duration-300 flex flex-col justify-start items-start text-left aspect-auto lg:aspect-square"
            >
              {/* Icon */}
              <div className="mb-5 text-4xl text-[#2DD3F1] group-hover:text-black transition-colors">
                {service.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-black transition-colors">
                <Link href={service.href} className="transition-colors duration-300">
                  {service.title}
                </Link>
              </h4>

              {/* Description */}
              <p className="text-white/50 text-base leading-relaxed group-hover:text-black transition-colors duration-100">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;