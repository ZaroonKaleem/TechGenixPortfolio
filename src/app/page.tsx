import Header from "@/components/header";
import BlogSection from "@/sections/BlogSection";
import HeroSection from "@/sections/hero";
import ProjectSection from "@/sections/ProjectSection";
import ServiceSection from "@/sections/ServiceSection";
import TestimonialSection from "@/sections/TestimonialSection";
import WhyChooseUsSection from "@/sections/WhyChooseSection";
import CTASection from "@/sections/CTASection";
import FooterTop from "@/sections/FooterTop";
import FooterBottom from "@/sections/FooterBottom";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <BlogSection />
      <CTASection />
      <FooterTop />
      <FooterBottom />
    </main>
  );
}
