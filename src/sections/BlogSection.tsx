import React from "react";
import Link from "next/link";

type FeaturePost = {
  title: string;
  image: string;
  href: string;
  date: string;
};

type Category = {
  name: string;
  href: string;
};

type Blog = {
  title: string;
  image: string;
  href: string;
  tag: string;
};

const featurePosts: FeaturePost[] = [
  {
    title: "The Future of Web Development in 2026",
    image: "https://hmstech.org/uploads/blog/photo-1498050108023-c5249f4df085.jfif",
    href: "https://hmstech.org/blog/1",
    date: "Apr 15, 2026",
  },
  {
    title: "How Artificial Intelligence is Transforming Software Development",
    image: "https://hmstech.org/uploads/blog/img2.jfif",
    href: "https://hmstech.org/blog/2",
    date: "Apr 15, 2026",
  },
];

const categories: Category[] = [
  { name: "Web Development", href: "https://hmstech.org/blog?category=web-development-1776243197" },
  { name: "Artificial Intelligence", href: "https://hmstech.org/blog?category=artificial-intelligence-1776244051" },
  { name: "Web Design", href: "https://hmstech.org/blog?category=web-design-1776244192" },
  { name: "Software Development", href: "https://hmstech.org/blog?category=software-development-1776244631" },
  { name: "Technology", href: "https://hmstech.org/blog?category=technology-1776245805" },
];

const blogs: Blog[] = [
  {
    title: "The Future of Web Development in 2026",
    image: "https://hmstech.org/uploads/blog/photo-1498050108023-c5249f4df085.jfif",
    href: "https://hmstech.org/blog/1",
    tag: "Web Development",
  },
  {
    title: "How Artificial Intelligence is Transforming Software Development",
    image: "https://hmstech.org/uploads/blog/img2.jfif",
    href: "https://hmstech.org/blog/2",
    tag: "Artificial Intelligence",
  },
  {
    title: "A Complete Guide to Modern Web Design Principles",
    image: "https://hmstech.org/uploads/blog/img3.jfif",
    href: "https://hmstech.org/blog/3",
    tag: "Web Design",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <span className="text-sm font-semibold text-[#00A3A9] uppercase tracking-widest">
            Latest Insights
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#F0F4F0] leading-tight">
            Tech Tips, Trends & Company Updates
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-20">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-5 flex flex-col gap-14">

            {/* Feature Posts */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-[#F0F4F0] tracking-wide">
                Feature Posts
              </h3>
              <div className="flex flex-col gap-8">
                {featurePosts.map((post, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-34 h-34 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="pt-1">
                      <Link
                        href={post.href}
                        className="text-xl font-medium text-[#F0F4F0]/75 hover:text-[#008C8B] transition leading-relaxed block"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-[#F0F4F0]/35 mt-2">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#00A3A9]/15" />

            {/* Categories */}
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-[#F0F4F0] tracking-wide">
                Categories
              </h3>
              <ul className="flex flex-col gap-4">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <Link
                      href={cat.href}
                      className="text-2xl text-[#F0F4F0] hover:text-[#008C8B] transition flex items-center gap-3 group"
                    >
                      <span className="text-[#00A3A9] text-lg leading-none group-hover:translate-x-1 transition-transform duration-200">›</span>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#00A3A9]/15" />

            {/* Button */}
            <div>
              <Link
                href="https://hmstech.org/blog"
                className="inline-block bg-[#008C8B] text-[#003B46] px-8 py-4 rounded-lg hover:bg-[#006d6d] transition font-semibold text-sm tracking-wide"
              >
                Know More
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-14">
            {/* empty spacer column */}
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-6 flex flex-col gap-8">

            <Link href={blogs[0].href} className="block group">
              <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#00A3A9]/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#00A3A9] text-[#003B46] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    {blogs[0].tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#F0F4F0] leading-snug group-hover:text-[#008C8B] transition-colors duration-200">
                    {blogs[0].title}
                  </h3>
                </div>
              </div>
            </Link>

            {/* SMALL BLOG GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.slice(1).map((blog, i) => (
                <div key={i} className="rounded-2xl overflow-hidden bg-[#F0F4F0]/5 border border-[#00A3A9]/10">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 md:p-8">
                    <span className="text-xs text-[#00A3A9] font-semibold uppercase tracking-widest">
                      {blog.tag}
                    </span>
                    <h3 className="text-base font-semibold mt-3 text-[#F0F4F0] hover:text-[#008C8B] transition leading-snug">
                      <Link href={blog.href}>{blog.title}</Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
