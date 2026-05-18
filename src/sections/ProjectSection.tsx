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
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[#2DD3F1] uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Showcasing Our Best Digital Solutions
          </h2>
        </div>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-4">
            <ProjectCard project={projects[0]} />
          </div>
          <div className="lg:col-span-8">
            <div className="h-full overflow-hidden rounded-xl">
              <img
                src="https://hmstech.org/assets/website/images/project/h2_2.png"
                alt="Project Showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(1).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="https://hmstech.org/portfolio"
            className="inline-block bg-[#2229D2] text-white px-6 py-3 rounded-full hover:bg-[#1B1F9C] transition font-semibold"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-white/5 hover:bg-[#2229D2]/10 transition-all duration-300">
      {/* TEXT */}
      <div className="p-5">
        <h3 className="text-base font-semibold mb-2 text-white group-hover:text-[#2DD3F1] transition">
          <Link href={project.href}>{project.title}</Link>
        </h3>
        <p className="text-sm text-white/50 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover"
        />
        <Link
          href={project.href}
          className="absolute top-3 right-3 text-[#2DD3F1] text-xl opacity-0 group-hover:opacity-100 transition bg-[#050816]/80 rounded-full p-1"
        >
          <FiArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
