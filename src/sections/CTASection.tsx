import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-2xl p-10 md:p-16 overflow-hidden bg-gradient-to-r from-[#2229D2]/30 to-[#1B1F9C]/20">

          {/* Shape 1 */}
          <div className="absolute -top-10 -right-10 text-[#2DD3F1] opacity-10">
            <svg width="320" height="135" viewBox="0 0 320 135" fill="none">
              <path
                d="M5.48873 267.853C9.84073 271.725 7.23273 269.613 154.945 319.181C158.227 320.274 161.775 320.274 165.057 319.181C304.001 271.997 308.545 273.165 314.529 267.853C316.39 266.113 317.866 264.004 318.865 261.661C319.584 259.857 319.969 257.938 320.001 255.997V63.9968C319.969 62.0555 319.584 60.1362 318.865 58.3328C317.866 55.9893 316.39 53.8803 314.529 52.1408C308.721 46.9888 305.457 48.3008 165.057 0.812773C161.775 -0.280364 158.227 -0.280364 154.945 0.812773C110.401 15.7408 12.5607 47.9968 8.67273 49.9968C7.51955 50.573 6.44427 51.2934 5.47273 52.1408C3.61112 53.883 2.1295 55.9911 1.12073 58.3328C0.407022 60.1372 0.0275118 62.0565 0.000732422 63.9968V255.997C0.0326085 257.938 0.41755 259.857 1.13673 261.661C2.14183 264.004 3.62395 266.113 5.48873 267.853Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Shape 2 */}
          <div className="absolute -bottom-10 -left-10 text-[#32CD89] opacity-10">
            <svg width="103" height="74" viewBox="0 0 103 74" fill="none">
              <path
                d="M3.03453 52.2535C4.77987 53.8064 3.73395 52.9594 62.9726 72.8382C64.2888 73.2766 65.7117 73.2766 67.0279 72.8382C122.75 53.9154 124.573 54.3839 126.972 52.2535C127.719 51.5559 128.311 50.7101 128.711 49.7703C129 49.047 129.154 48.2773 129.167 47.4988V-29.5012C129.154 -30.2798 129 -31.0495 128.711 -31.7727C128.311 -32.7125 127.719 -33.5584 126.972 -34.256C124.643 -36.3221 123.334 -35.796 67.0279 -54.8406C65.7117 -55.279 64.2888 -55.279 62.9726 -54.8406C45.1086 -48.8539 5.8707 -35.9179 4.31145 -35.1158C3.84898 -34.8847 3.41775 -34.5958 3.02812 -34.256C2.28154 -33.5573 1.68734 -32.7118 1.28278 -31.7727C0.996557 -31.0491 0.844358 -30.2794 0.833618 -29.5012V47.4988C0.846402 48.2773 1.00078 49.047 1.2892 49.7703C1.69229 50.7102 2.28668 51.5559 3.03453 52.2535Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* CONTENT */}
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
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
                <span className="text-sm text-white/50">Toll Free Call.</span>
                <a
                  href="tel:+923048552653"
                  className="block text-xl font-semibold text-[#32CD89] hover:text-[#2DD3F1] transition"
                >
                  (+92) 304-855-2653
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
