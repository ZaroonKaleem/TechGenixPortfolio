// src/sections/HeroSection.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const skills = [
    { name: 'iOS' },
    { name: 'UI/UX' },
    { name: 'Android' },
    { name: 'DevOps' },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Each card: w-28 (112px) + gap-4 (16px) = 128px per step
    const STEP = 128;
    const SLIDE_DURATION = 1.2;  // seconds to travel one card
    const PAUSE_MS = 3000;       // milliseconds to rest before next slide

    const slide = () => {
      currentIndex.current += 1;

      gsap.to(track, {
        x: -(currentIndex.current * STEP),
        duration: SLIDE_DURATION,
        ease: 'power1.inOut',   // gentle, not dramatic
        onComplete: () => {
          if (currentIndex.current >= skills.length) {
            currentIndex.current = 0;
            gsap.set(track, { x: 0 });
          }
        },
      });
    };

    // First slide kicks off after the initial pause
    const interval = setInterval(slide, SLIDE_DURATION * 1000 + PAUSE_MS);

    return () => clearInterval(interval);
  }, []);

  const loopedSkills = [...skills, ...skills];

  return (
    <section className="relative flex min-h-screen items-center justify-center pt-32 pb-16 lg:pt-0 lg:pb-0">
      {/* Radial glow accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2229D2]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#2DD3F1]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 max-w-7xl z-10">
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 text-white">
            Your Trusted<br />
            <span className="text-[#2DD3F1] relative inline-block">
              IT Partner
            </span>
          </h1>
          <p className="text-md text-white/60 mb-8 max-w-lg mx-auto lg:mx-0">
            We build powerful web apps, mobile solutions, and digital strategies <br /> to help businesses scale and succeed.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              href="/service"
              className="group flex items-center gap-2 rounded-full bg-[#2229D2] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#1B1F9C] hover:scale-105"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Step-sliding Skills */}
          <div className="mt-16 text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              OUR CORE SKILLS:
            </p>

            <div
              className="relative overflow-hidden"
              style={{
                width: 'calc(3.5 * 128px)',
                maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
              }}
            >
              <div ref={trackRef} className="flex gap-4 w-max">
                {loopedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-14 w-28 shrink-0 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:border-[#2DD3F1]/40 hover:bg-[#2229D2]/20 transition-colors duration-300 cursor-default"
                  >
                    <span className="text-base font-medium text-white/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-2xl bg-[#0d1b2a] p-8 shadow-2xl">
            <h3 className="mb-6 text-2xl font-bold text-white">Get a Free Quote</h3>
            <form action="/quote-request" method="POST" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#2229D2] border-0"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#2229D2] border-0"
                />
              </div>
              <div>
                <select
                  name="service_id"
                  className="w-full appearance-none rounded-lg bg-white/5 px-4 py-3 text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2229D2] border-0"
                >
                  <option value="" className="bg-[#050816]">Select a Service</option>
                  <option value="2" className="bg-[#050816]">Web Development</option>
                  <option value="4" className="bg-[#050816]">Mobile App Development</option>
                  <option value="3" className="bg-[#050816]">WordPress Development</option>
                  <option value="5" className="bg-[#050816]">Digital Marketing</option>
                  <option value="8" className="bg-[#050816]">Freelancing Services</option>
                  <option value="9" className="bg-[#050816]">Website Maintenance</option>
                  <option value="6" className="bg-[#050816]">Graphic Designing</option>
                  <option value="7" className="bg-[#050816]">Ads Management</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Write a Message"
                  rows={4}
                  required
                  className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#2229D2] border-0 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#2229D2] py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#1B1F9C] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#2229D2] focus:ring-offset-2 focus:ring-offset-[#0d1b2a]"
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