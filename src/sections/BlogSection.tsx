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
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[#2DD3F1] uppercase tracking-wider">
            Latest Insights
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Tech Tips, Trends & Company Updates
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4 space-y-10">
            {/* Feature Posts */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Feature Posts
              </h3>
              <div className="space-y-6">
                {featurePosts.map((post, i) => (
                  <div key={i} className="flex gap-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <Link
                        href={post.href}
                        className="text-sm font-medium text-white/80 hover:text-[#2DD3F1] transition"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-white/40 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <Link
                      href={cat.href}
                      className="text-sm text-white/55 hover:text-[#2DD3F1] transition flex items-center gap-2"
                    >
                      <span className="text-[#2DD3F1]">›</span>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <Link
              href="https://hmstech.org/blog"
              className="inline-block bg-[#2229D2] text-white px-6 py-3 rounded-full hover:bg-[#1B1F9C] transition font-semibold"
            >
              Know More
            </Link>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            {/* BIG BLOG */}
            <div className="rounded-xl overflow-hidden bg-white/5">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-[#32CD89] font-medium">
                  {blogs[0].tag}
                </span>
                <h3 className="text-xl font-semibold mt-2 text-white hover:text-[#2DD3F1] transition">
                  <Link href={blogs[0].href}>{blogs[0].title}</Link>
                </h3>
              </div>
            </div>

            {/* SMALL BLOG GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.slice(1).map((blog, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-white/5">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs text-[#32CD89] font-medium">
                      {blog.tag}
                    </span>
                    <h3 className="text-base font-semibold mt-2 text-white hover:text-[#2DD3F1] transition">
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
