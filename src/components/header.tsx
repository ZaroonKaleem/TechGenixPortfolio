"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const navItems = [
  { label: "Home",      id: "hero" },
  { label: "About",     id: "about" },
  { label: "Services",  id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Blog",      id: "blog" },
];
  
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const drawerRef  = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef   = useRef<HTMLButtonElement[]>([]);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const openDrawer = () => {
    setOpen(true);
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    tl.fromTo(drawerRef.current, { x: "-100%" }, { x: "0%", duration: 0.45, ease: "power3.out" }, "<0.05");
    tl.fromTo(logoRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }, "<0.15");
    tl.fromTo(linksRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: "power2.out", stagger: 0.07 }, "<0.1");
    tl.fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }, "<0.1");
  };

  const closeDrawer = () => {
    const tl = gsap.timeline({ onComplete: () => setOpen(false) });
    tl.to(linksRef.current, { x: -30, opacity: 0, duration: 0.2, ease: "power2.in", stagger: 0.04 });
    tl.to([ctaRef.current, logoRef.current], { opacity: 0, duration: 0.2, ease: "power2.in" }, "<");
    tl.to(drawerRef.current, { x: "-100%", duration: 0.35, ease: "power3.in" }, "<0.05");
    tl.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" }, "<");
  };

  const scrollTo = (id: string) => {
    closeDrawer();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <>
      {/* ── HEADER BAR ── */}
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 box-border pointer-events-none">
        <header className="pointer-events-auto flex w-full md:max-w-7xl items-center justify-between rounded-full bg-[#242d22] px-4 sm:px-6 py-3 shadow-xl border border-[#7ea383]/15 box-border">

          {/* LEFT — logo + desktop nav */}
          <div className="flex items-center gap-6 lg:gap-16 shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="TechGenix Logo" width={36} height={36} className="sm:w-[44px] sm:h-[44px]" priority />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-[15px] font-medium text-[#F0F4F0]/75 transition-colors duration-300 hover:text-[#7ea383] bg-transparent border-0 cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT — CTA + hamburger */}
          <div className="flex items-center gap-4 shrink-0">
           <button
  onClick={() => {
    const el = document.getElementById("cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
  className="group hidden cursor-pointer lg:flex items-center gap-2 rounded-full bg-[#7faabb] px-6 py-2.5 text-[15px] font-semibold text-[#1c221a] transition-all duration-300 hover:bg-[#5f8a9b] hover:scale-105"
>
  Contact Now
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
</button>

            {/* Hamburger — mobile only */}
            <button
              onClick={openDrawer}
              aria-label="Open menu"
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-full border border-[#7ea383]/20 bg-[#7ea383]/5 hover:bg-[#7ea383]/10 transition shrink-0"
            >
              <span className="w-5 h-0.5 bg-[#F0F4F0]/80 rounded-full" />
              <span className="w-5 h-0.5 bg-[#F0F4F0]/80 rounded-full" />
              <span className="w-3.5 h-0.5 bg-[#F0F4F0]/80 rounded-full self-start ml-[5px]" />
            </button>
          </div>
        </header>
      </div>

      {/* ── BACKDROP OVERLAY ── */}
      <div
        ref={overlayRef}
        onClick={closeDrawer}
        className="fixed inset-0 z-[60] bg-[#1c221a]/70 backdrop-blur-sm lg:hidden"
        style={{ opacity: 0, pointerEvents: open ? "auto" : "none" }}
      />

      {/* ── FULL-SCREEN DRAWER ── */}
      <aside
        ref={drawerRef}
        className="fixed top-0 left-0 z-[70] h-[100dvh] w-full bg-[#161d14] flex flex-col lg:hidden overflow-hidden box-border"
        style={{ transform: "translateX(-100%)" }}
      >
        {/* Top bar inside drawer */}
        <div className="flex items-center justify-between px-6 py-5 sm:px-8 sm:py-7 border-b border-[#7ea383]/15 shrink-0">
          <div ref={logoRef} style={{ opacity: 0 }}>
            <Link href="/" onClick={closeDrawer}>
              <Image src="/logo.png" alt="TechGenix Logo" width={40} height={40} className="sm:w-[48px] sm:h-[48px]" priority />
            </Link>
          </div>

          <button
            onClick={closeDrawer}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full border border-[#F0F4F0]/20 flex items-center justify-center text-[#F0F4F0]/60 hover:text-[#7ea383] hover:border-[#7ea383]/50 transition shrink-0"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 justify-center px-6 sm:px-10 gap-0 overflow-y-auto">
          {navItems.map(({ label, id }, i) => (
            <button
              key={id}
              ref={(el) => { if (el) linksRef.current[i] = el; }}
              onClick={() => scrollTo(id)}
              style={{ opacity: 0 }}
              className="text-left text-3xl min-[400px]:text-4xl sm:text-5xl font-bold text-[#F0F4F0] uppercase tracking-tight py-4 sm:py-5 border-b border-[#7ea383]/15 last:border-b-0 hover:text-[#7ea383] transition-colors duration-200 bg-transparent border-x-0 border-t-0 cursor-pointer w-full box-border"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA pinned at bottom */}
        <div ref={ctaRef} className="px-6 sm:px-10 pb-8 sm:pb-14 pt-4 shrink-0" style={{ opacity: 0 }}>
          <button
  onClick={() => scrollTo("cta")}
  className="group hidden lg:flex items-center gap-2 rounded-full bg-[#7faabb] px-6 py-2.5 text-[15px] font-semibold text-[#1c221a] transition-all duration-300 hover:bg-[#5f8a9b] hover:scale-105"
>
            Contact Now
          </button>
        </div>
      </aside>
    </>
  );
};

export default Header;
