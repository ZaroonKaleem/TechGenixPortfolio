import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-24" id="cta">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-2xl p-10 md:p-16 overflow-hidden bg-gradient-to-r from-[#7faabb]/20 to-[#7ea383]/15 border border-[#7faabb]/20">

          {/* Subtle glow orbs */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#7faabb]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#7ea383]/10 rounded-full blur-3xl pointer-events-none" />

          {/* CONTENT */}
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#F0F4F0]">
                Lets Get Started with Us. <br />
                Call Us Now!
              </h2>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <img
                src="https://hmstech.org/assets/website/images/bg/call.png"
                alt="call"
                className="w-14 h-14"
              />
              <div>
                <span className="text-sm text-[#F0F4F0]/45">Give us a call.</span>
                <a
                  href="tel:+923048552653"
                  className="block text-xl font-semibold text-[#7ea383] hover:text-[#7faabb] transition"
                >
                  (042) 323 38223
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
