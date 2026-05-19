import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Earlybaze Crypto Exchange Platform",
    description:
      "A modern cryptocurrency trading platform that allows users to buy, sell, and swap digital assets seamlessly through mobile applications with secure transactions and real-time trading features.",
    image: "https://hmstech.org/uploads/portfolio/1778164785_thumb.png",
    href: "https://hmstech.org/portfolio/7",
  },
  {
    title: "Tercescrow – Secure Fintech Platform Crypto",
    description:
      "A fintech solution enabling users to trade gift cards, manage crypto assets, and perform secure transactions.",
    image: "https://hmstech.org/uploads/portfolio/1775686514_thumb.png",
    href: "https://hmstech.org/portfolio/6",
  },
  {
    title: "GymPaddy – Social Fitness Mobile App",
    description:
      "A powerful social fitness app that connects users, trainers, and communities for an engaging workout experience.",
    image: "https://hmstech.org/uploads/portfolio/1775681826_thumb.png",
    href: "https://hmstech.org/portfolio/5",
  },
  {
    title: "Ndozi Naturals – Organic Ecommerce Store",
    description:
      "An ecommerce platform focused on selling natural, organic, and plant-based products with a clean user experience.",
    image: "https://hmstech.org/uploads/portfolio/1775681084_thumb.png",
    href: "https://hmstech.org/portfolio/4",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-4">
      {/* OUTER CONTAINER */}
      <div className="w-[90%] mx-auto rounded-[10px] border border-white/10 bg-gray-800 p-6 sm:p-8 md:p-12">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex mb-6 items-center px-5 py-2 text-sm font-semibold tracking-wider text-[#2DD3F1] uppercase">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Showcasing Our Best Digital Solutions
          </h2>
        </div>

        <div className="w-full md:w-[85%] mx-auto rounded-[10px] p-4 sm:p-8 md:p-10">

          {/* TOP ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-4">
              <ProjectCard project={projects[0]} />
            </div>
            <div className="lg:col-span-8">
              <div className="h-full min-h-[240px] overflow-hidden rounded-[10px] border border-white/10">
                <img
                  src="https://hmstech.org/assets/website/images/project/h2_2.png"
                  alt="Project Showcase"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.slice(1).map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              href="https://hmstech.org/portfolio"
              className="inline-flex items-center gap-2 bg-[#2229D2] px-9 py-4 rounded-lg text-white font-semibold hover:bg-[#1B1F9C] transition duration-300"
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
    <div className="group rounded-[10px] overflow-hidden border border-white/10 bg-white/5 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
      {/* TEXT */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white group-hover:text-primary-light transition-colors duration-300">
          <Link href={project.href}>{project.title}</Link>
        </h3>
        <p className="text-brand-muted text-sm sm:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
          {project.description}
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition duration-500"
        />
        <Link
          href={project.href}
          className="absolute top-4 right-4 text-primary-light text-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-black/60 rounded-full p-2"
        >
          <FiArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;