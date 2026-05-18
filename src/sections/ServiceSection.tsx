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
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[#2DD3F1] uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Full-Spectrum IT Services for Every Business Need
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/5 hover:bg-[#2229D2]/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl text-[#32CD89]">
                {service.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold mb-2 text-white">
                <Link
                  href={service.href}
                  className="hover:text-[#2DD3F1] transition"
                >
                  {service.title}
                </Link>
              </h4>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
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
