// src/sections/HeroSection.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const skills = [
  { name: "iOS" },
  { name: "UI/UX" },
  { name: "Android" },
  { name: "DevOps" },
  { name: "Web" },
  { name: "iOS" },
  { name: "UI/UX" },
  { name: "Android" },
  { name: "DevOps" },
  { name: "Web" },
];
const loopedSkills = [...skills, ...skills];

const HeroSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const stepRef = useRef(96);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const SLIDE_DURATION = 1.2;
    const PAUSE_MS = 3000;
    let interval: ReturnType<typeof setInterval>;
    let lastWidth = window.innerWidth;

    const init = () => {
      gsap.killTweensOf(track);
      const cardW = Math.min(
        112,
        Math.max(72, Math.floor(wrapper.offsetWidth * 0.28)),
      );
      const gap = 12;
      stepRef.current = cardW + gap;
      track.querySelectorAll<HTMLDivElement>(".skill-card").forEach((card) => {
        card.style.width = `${cardW}px`;
      });
      currentIndex.current = 0;
      gsap.set(track, { x: 0 });
      clearInterval(interval);
      interval = setInterval(slide, SLIDE_DURATION * 1000 + PAUSE_MS);
    };

    const slide = () => {
      currentIndex.current += 1;
      gsap.to(track, {
        x: -(currentIndex.current * stepRef.current),
        duration: SLIDE_DURATION,
        ease: "power1.inOut",
        onComplete: () => {
          if (currentIndex.current >= skills.length) {
            currentIndex.current = 0;
            gsap.set(track, { x: 0 });
          }
        },
      });
    };

    const handleResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        init();
      }
    };

    init();
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      gsap.killTweensOf(track);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center pt-32 pb-16 lg:pt-0 lg:pb-0"
    >
      {/* Radial glow accent */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#008C8B]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00A3A9]/8 rounded-full blur-3xl" />
      </div> */}

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 max-w-7xl z-10 overflow-hidden">
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 text-[#F0F4F0]">
            Your Trusted
            <br />
            <span className="text-[#008C8B] relative inline-block">
              IT Partner
            </span>
          </h1>
          <p className="text-md text-[#F0F4F0]/55 mb-8 max-w-lg mx-auto lg:mx-0">
            We build powerful web apps, mobile solutions, and digital strategies{" "}
            <br className="hidden sm:block" /> to help businesses scale and
            succeed.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              href="#services"
              scroll={true}
              className="group flex items-center gap-2 rounded-full bg-[#008C8B] px-8 py-4 text-lg font-semibold text-[#003B46] transition-all duration-300 hover:bg-[#006d6d] hover:scale-105"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Step-sliding Skills */}
          <div className="mt-16 text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#F0F4F0]/35 mb-4">
              OUR CORE SKILLS:
            </p>
            <div
              ref={wrapperRef}
              className="relative overflow-hidden w-full"
              style={{
                maskImage:
                  "linear-gradient(to right, black 60%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, black 60%, transparent 100%)",
              }}
            >
              <div ref={trackRef} className="flex gap-3 w-max">
                {loopedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-card flex items-center justify-center h-12 shrink-0 rounded-lg bg-[#F0F4F0]/5 backdrop-blur border border-[#00A3A9]/15 hover:border-[#00A3A9]/50 hover:bg-[#00A3A9]/10 transition-colors duration-300 cursor-default"
                    style={{ width: "96px" }}
                  >
                    <span className="text-sm font-medium text-[#F0F4F0]/75">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-2xl bg-[#004d5c] p-6 sm:p-8 shadow-2xl border border-[#00A3A9]/10">
            <h3 className="mb-6 text-2xl font-bold text-[#F0F4F0]">
              Get a Free Quote
            </h3>
            <form action="/quote-request" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full rounded-lg bg-[#F0F4F0]/5 px-4 py-3 text-[#F0F4F0] placeholder-[#F0F4F0]/30 focus:outline-none focus:ring-2 focus:ring-[#008C8B] border-0"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-lg bg-[#F0F4F0]/5 px-4 py-3 text-[#F0F4F0] placeholder-[#F0F4F0]/30 focus:outline-none focus:ring-2 focus:ring-[#008C8B] border-0"
                />
              </div>
              <div>
                <select
                  name="service_id"
                  className="w-full appearance-none rounded-lg bg-[#F0F4F0]/5 px-4 py-3 text-[#F0F4F0]/60 focus:outline-none focus:ring-2 focus:ring-[#008C8B] border-0"
                >
                  <option value="" className="bg-[#003B46]">
                    Select a Service
                  </option>
                  <option value="2" className="bg-[#003B46]">
                    Web Development
                  </option>
                  <option value="4" className="bg-[#003B46]">
                    Mobile App Development
                  </option>
                  <option value="3" className="bg-[#003B46]">
                    WordPress Development
                  </option>
                  <option value="5" className="bg-[#003B46]">
                    Digital Marketing
                  </option>
                  <option value="8" className="bg-[#003B46]">
                    Freelancing Services
                  </option>
                  <option value="9" className="bg-[#003B46]">
                    Website Maintenance
                  </option>
                  <option value="6" className="bg-[#003B46]">
                    Graphic Designing
                  </option>
                  <option value="7" className="bg-[#003B46]">
                    Ads Management
                  </option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Write a Message"
                  rows={4}
                  required
                  className="w-full rounded-lg bg-[#F0F4F0]/5 px-4 py-3 text-[#F0F4F0] placeholder-[#F0F4F0]/30 focus:outline-none focus:ring-2 focus:ring-[#008C8B] border-0 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#008C8B] py-3 text-lg font-semibold text-[#003B46] transition-all duration-300 hover:bg-[#006d6d] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#008C8B] focus:ring-offset-2 focus:ring-offset-[#004d5c]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
