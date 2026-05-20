import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Labour Management System",
    category: "Web Application",
    description: "A comprehensive web-based platform to streamline workforce operations from attendance tracking and shift scheduling to payroll processing and compliance reporting.",
    image: "/project-1.jpg",
    href: "https://www.techgenixsolutions.com/#",
  },
  {
    title: "POS System",
    category: "Web · iOS · Android",
    description: "A cross-platform point-of-sale solution built for retail and hospitality, featuring real-time inventory sync, multi-payment support, and seamless reporting across web and mobile.",
    image: "/project-2.jpg",
    href: "https://www.techgenixsolutions.com/#",
  },
  {
    title: "Website Builder",
    category: "Desktop App",
    description: "A powerful drag-and-drop desktop application that empowers users to design, customize, and publish professional websites without writing a single line of code.",
    image: "/project-3.jpg",
    href: "https://www.techgenixsolutions.com/#",
  },
  {
    title: "Inspection Management System",
    category: "Desktop App",
    description: "A robust desktop solution for managing end-to-end inspection workflows schedule inspections, assign teams, capture findings, and generate detailed compliance reports with ease.",
    image: "/project-4.jpg",
    href: "https://www.techgenixsolutions.com/#",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-4">
      {/* OUTER CONTAINER */}
      <div className="w-[90%] mx-auto rounded-[10px] border border-[#00A3A9]/15 bg-[#004d5c] p-6 sm:p-8 md:p-12">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex mb-6 items-center px-5 py-2 text-sm font-semibold tracking-wider text-[#00A3A9] uppercase">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F0F4F0] leading-tight">
            Showcasing Our Best Digital Solutions
          </h2>
        </div>

        <div className="w-full md:w-[85%] mx-auto rounded-[10px] p-4 sm:p-8 md:p-10">

          {/* TOP ROW — first card + static wide image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-4">
              <ProjectCard project={projects[0]} />
            </div>
            <div className="lg:col-span-8">
              <div className="h-full min-h-[240px] overflow-hidden rounded-[10px] border border-[#00A3A9]/15">
                <img
                  src="https://hmstech.org/assets/website/images/project/h2_2.png"
                  alt="Project Showcase"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW — remaining 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.slice(1).map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              href="https://www.techgenixsolutions.com/#"
              className="inline-flex items-center gap-2 bg-[#008C8B] px-9 py-4 rounded-lg text-[#003B46] font-semibold hover:bg-[#006d6d] transition duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group rounded-[10px] overflow-hidden border border-[#00A3A9]/15 bg-[#F0F4F0]/5 hover:bg-[#00A3A9]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">

      {/* TEXT */}
      <div className="p-5 sm:p-6 flex flex-col gap-2 flex-1">
        {/* Category badge */}
        <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-[#00A3A9]/10 border border-[#00A3A9]/25 text-[#00A3A9] tracking-wide mb-1">
          {project.category}
        </span>
        <h3 className="text-lg sm:text-xl font-semibold text-[#F0F4F0] group-hover:text-[#008C8B] transition-colors duration-300 leading-snug">
          <Link href={project.href}>{project.title}</Link>
        </h3>
        <p className="text-[#F0F4F0]/45 text-sm sm:text-base leading-relaxed group-hover:text-[#F0F4F0]/70 transition-colors duration-300">
          {project.description}
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition duration-500"
        />
        <Link
          href={project.href}
          className="absolute top-4 right-4 text-[#00A3A9] text-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-[#003B46]/70 rounded-full p-2"
        >
          <FiArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;