import React from "react";
import Link from "next/link";

const FooterBottom: React.FC = () => {
  return (
    <div className="border-t border-white/10 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="https://hmstech.org/assets/website/images/logo/logo-3.png"
                alt="HMS Tech"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* COPYRIGHT */}
          <div className="text-sm text-white/40 text-center">
            <p>
              Copyright © 2026{" "}
              <span className="font-medium text-[#2DD3F1]">HMS Tech</span>. All Rights Reserved.
            </p>
          </div>

          {/* SOCIAL */}
          <div>
            <ul className="flex items-center gap-5 text-white/50">
              <li>
                <a
                  href="https://www.facebook.com/share/1F6XGRhGkv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2DD3F1] transition"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hmstech01?igsh=a3NhN2U1bHZuZmVw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2DD3F1] transition"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2DD3F1] transition">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923048552653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2DD3F1] transition"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
