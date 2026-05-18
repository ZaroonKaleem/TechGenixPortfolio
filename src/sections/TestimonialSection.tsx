"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[#2DD3F1] uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            What Our Clients Say About Us
          </h2>
        </div>

        {/* Slider */}
        <div className="relative px-10">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl p-8 text-center bg-white/5">
                  {/* Message */}
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    "{item.message}"
                  </p>

                  {/* Author */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white">
                      {item.name}
                    </h4>
                    <span className="text-sm text-[#88929A]">
                      {item.role}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 text-[#2DD3F1] text-3xl z-10">
            ‹
          </button>
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 text-[#2DD3F1] text-3xl z-10">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
