import React from "react";
import Link from "next/link";

const services = [
  { name: "Web Development", href: "/service/2" },
  { name: "Mobile App Development", href: "/service/4" },
  { name: "WordPress Development", href: "/service/3" },
  { name: "Digital Marketing", href: "/service/5" },
  { name: "Freelancing Services", href: "/service/8" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQs", href: "#" },
  { name: "Contact", href: "/contact" },
];

const FooterTop: React.FC = () => {
  return (
    <footer className="py-28 md:py-36 border-t border-[#00A3A9]/15 bg-[#002830]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 xl:gap-20">

          {/* GET IN TOUCH */}
          <div className="flex flex-col gap-7">
            <h4 className="text-xl font-semibold text-[#F0F4F0] tracking-wide">
              Get In Touch
            </h4>
            <p className="text-base text-[#F0F4F0]/45 leading-loose">
              Our team comprises professionals with years of experience delivering cutting-edge IT solutions.
            </p>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-[#00A3A9] text-lg">✉</span>
              <a
                href="mailto:techgenix@gmail.com"
                className="text-base text-[#F0F4F0]/55 hover:text-[#008C8B] transition"
              >
                info@techgenixsolutions.com 
              </a>
            </div>

            {/* Subscribe form */}
            <div className="flex items-center bg-[#F0F4F0]/5 rounded-full overflow-hidden border border-[#00A3A9]/15">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 text-sm outline-none bg-transparent text-[#F0F4F0] placeholder-[#F0F4F0]/30"
              />
              <button
                type="button"
                className="px-5 py-3 text-[#00A3A9] hover:bg-[#008C8B] hover:text-[#003B46] transition"
              >
                ➤
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-7">
            <h4 className="text-xl font-semibold text-[#F0F4F0] tracking-wide">
              Services
            </h4>
            <ul className="flex flex-col gap-5">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-base text-[#F0F4F0]/45 hover:text-[#008C8B] transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-7">
            <h4 className="text-xl font-semibold text-[#F0F4F0] tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-base text-[#F0F4F0]/45 hover:text-[#008C8B] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE */}
          <div className="flex flex-col gap-7">
            <h4 className="text-xl font-semibold text-[#F0F4F0] tracking-wide">
              Our Office
            </h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-[#F0F4F0]/30 uppercase tracking-widest">
                Lahore
              </span>
              <p className="text-base leading-loose text-[#F0F4F0]/50">
                  232, 2nd Floor ZamZam Heights Sabzazaar, Lahore.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm text-[#F0F4F0]/30 uppercase tracking-widest">
                New Mexico
              </span>
              <p className="text-base leading-loose text-[#F0F4F0]/50">
                  1209 MOUNTAIN ROAD PL NE #4877, Albuquerque, NM, 87110
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterTop;
