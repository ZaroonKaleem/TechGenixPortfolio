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
    <footer className="pt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* GET IN TOUCH */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Get In Touch
            </h4>
            <p className="text-sm text-white/50 mb-5 leading-relaxed">
              Our team comprises professionals with years of experience delivering cutting-edge IT solutions.
            </p>

            {/* Email */}
            <div className="flex items-center gap-2 text-sm mb-5">
              <span className="text-[#32CD89]">✉</span>
              <a
                href="mailto:hmstech11@gmail.com"
                className="text-white/60 hover:text-[#2DD3F1] transition"
              >
                hmstech11@gmail.com
              </a>
            </div>

            {/* Subscribe form */}
            <div className="flex items-center bg-white/5 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-sm outline-none bg-transparent text-white placeholder-white/30"
              />
              <button
                type="button"
                className="px-4 text-[#2DD3F1] hover:bg-[#2229D2] hover:text-white transition py-2"
              >
                ➤
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/50 hover:text-[#2DD3F1] transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#2DD3F1] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Office</h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-white/35">Head Office</span>
                <p className="mt-1 leading-relaxed text-white/55">
                  Main Bakar Mandi Road, Liaquatabad, Near UBL Bank, Faisalabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTop;
