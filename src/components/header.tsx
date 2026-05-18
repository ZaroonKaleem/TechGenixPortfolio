"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const navItems: string[] = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Pricing",
  "Blog",
  "Contact",
];

const Header: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 z-50 flex w-full justify-center px-4 sm:px-6">
      <header className="flex w-full max-w-7xl items-center justify-between rounded-full bg-[#0d1b2a] px-6 py-4 shadow-xl border border-white/5">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="HMS Tech Logo"
              width={50}
              height={50}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item: string) => (
              <Link
                key={item}
                href="/"
                className="text-[15px] font-medium text-white/80 transition-colors duration-300 hover:text-[#2DD3F1]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-[#2229D2] px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#1B1F9C] hover:scale-105"
          >
            Contact Now
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
