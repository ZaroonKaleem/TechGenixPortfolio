"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

type Testimonial = {
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Daniel Smith",
    role: "International Client",
    message:
      "Excellent service by HMS Solution. They developed our website and API system efficiently with modern technologies. The team is highly skilled, responsive, and delivers real value. One of the best teams I've worked with.",
  },
  {
    name: "Ali Hassan",
    role: "Business Owner",
    message:
      "I hired HMS Solution for a custom Laravel project, and they handled everything professionally. From backend logic to frontend UI, everything was well-structured and optimized. I will definitely work with them again.",
  },
  {
    name: "Sarah Khan",
    role: "Startup Founder",
    message:
      "HMS Solution built our mobile app using React Native, and the quality exceeded our expectations. The team understood our requirements quickly and implemented everything perfectly. Their support even after delivery was impressive.",
  },
  {
    name: "Ahmed Raza",
    role: "E-commerce Store Owner",
    message:
      "Working with HMS Solution was a great experience. They delivered my Shopify store exactly as I wanted, with a clean design and smooth user experience. Communication was clear and the project was completed on time.",
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const animateSlide = (direction: "left" | "right", newIndex: number) => {
    if (animating || !slideRef.current) return;
    setAnimating(true);

    const exitX = direction === "left" ? -60 : 60;
    const enterX = direction === "left" ? 60 : -60;

    gsap.to(slideRef.current, {
      x: exitX,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrent(newIndex);
        gsap.fromTo(
          slideRef.current,
          { x: enterX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => setAnimating(false),
          }
        );
      },
    });
  };

  const handlePrev = () => {
    const newIndex = (current - 1 + testimonials.length) % testimonials.length;
    animateSlide("right", newIndex);
  };

  const handleNext = () => {
    const newIndex = (current + 1) % testimonials.length;
    animateSlide("left", newIndex);
  };

  const handleBtnHover = (btn: HTMLButtonElement | null, enter: boolean) => {
    if (!btn) return;
    gsap.to(btn, {
      scale: enter ? 1.1 : 1,
      duration: 0.2,
      ease: "power1.out",
    });
  };

  // Initial entrance animation
  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  const item = testimonials[current];

  return (
    <section className="">
      <hr className="border-t border-white/30 mb-24" />
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        {/* <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[#2DD3F1] uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            What Our Clients Say About Us
          </h2>
        </div> */}

        {/* Slider */}
        <div className="relative flex items-center gap-4 sm:gap-6">
          {/* PREV BUTTON */}
          <button
            ref={prevBtnRef}
            onClick={handlePrev}
            onMouseEnter={() => handleBtnHover(prevBtnRef.current, true)}
            onMouseLeave={() => handleBtnHover(prevBtnRef.current, false)}
            className="
            cursor-pointer
              flex-shrink-0
              w-10 h-10 sm:w-12 sm:h-12
              rounded-full
              border-2 border-[#2DD3F1]
              text-[#2DD3F1]
              flex items-center justify-center
              transition-colors duration-200
              hover:bg-[#2DD3F1] hover:text-[#0d1b2a]
              focus:outline-none
              z-10
            "
            aria-label="Previous testimonial"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* SLIDE CARD */}
          <div className="flex-1 overflow-hidden">
            <div ref={slideRef}>
              <div className="rounded-xl p-6 sm:p-8 md:p-10 text-center">
                {/* Quote icon */}
                {/* <svg
                  className="mx-auto mb-4 w-8 h-8 text-[#2DD3F1] opacity-60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg> */}

                {/* Message */}
                <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                  "{item.message}"
                </p>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-[#2DD3F1]/40 mx-auto my-5" />

                {/* Author */}
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {item.name}
                  </h4>
                  <span className="text-sm text-[#88929A]">{item.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* NEXT BUTTON */}
          <button
            ref={nextBtnRef}
            onClick={handleNext}
            onMouseEnter={() => handleBtnHover(nextBtnRef.current, true)}
            onMouseLeave={() => handleBtnHover(nextBtnRef.current, false)}
            className="
            cursor-pointer
              flex-shrink-0
              w-10 h-10 sm:w-12 sm:h-12
              rounded-full
              border-2 border-[#2DD3F1]
              text-[#2DD3F1]
              flex items-center justify-center
              transition-colors duration-200
              hover:bg-[#2DD3F1] hover:text-[#0d1b2a]
              focus:outline-none
              z-10
            "
            aria-label="Next testimonial"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex cursor-pointer justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === current || animating) return;
                animateSlide(i > current ? "left" : "right", i);
              }}
              className={`rounded-full cursor-pointer transition-all duration-300 focus:outline-none ${
                i === current
                  ? "w-6 h-2 bg-[#2DD3F1]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
            <hr className="border-t border-white/30 mt-24" />
    </section>
  );
};

export default TestimonialSection;