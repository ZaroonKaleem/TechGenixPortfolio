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
    <footer className="pt-28 md:pt-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 xl:gap-20">

          {/* GET IN TOUCH */}
          <div className="flex flex-col gap-7">
            <h4 className="text-xl font-semibold text-white tracking-wide">
              Get In Touch
            </h4>
            <p className="text-base text-white/50 leading-loose">
              Our team comprises professionals with years of experience delivering cutting-edge IT solutions.
            </p>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-[#2DD3F1] text-lg">✉</span>
              <a
                href="mailto:hmstech11@gmail.com"
                className="text-base text-white/60 hover:text-[#2DD3F1] transition"
              >
                techgenix@gmail.com
              </a>
            </div>

            {/* Subscribe form */}
            <div className="flex items-center bg-white/5 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 text-sm outline-none bg-transparent text-white placeholder-white/30"
              />
              <button
                type="button"
                className="px-5 py-3 text-[#2DD3F1] hover:bg-[#2229D2] hover:text-white transition"
              >
                ➤
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-7">
            <h4 className="text-xl font-semibold text-white tracking-wide">
              Services
            </h4>
            <ul className="flex flex-col gap-5">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-base text-white/50 hover:text-[#2DD3F1] transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-7">
            <h4 className="text-xl font-semibold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-base text-white/50 hover:text-[#2DD3F1] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE */}
          <div className="flex flex-col gap-7">
            <h4 className="text-xl font-semibold text-white tracking-wide">
              Our Office
            </h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-white/35 uppercase tracking-widest">
                Head Office
              </span>
              <p className="text-base leading-loose text-white/55">
                Main Bakar Mandi Road, Liaquatabad, Near UBL Bank, Faisalabad.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterTop;