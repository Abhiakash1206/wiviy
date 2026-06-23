import React, { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import Navbar from "../components/Navbar";

const categories = [
  "All Posts",
  "Business",
  "Education",
  "Public Sector",
  "Marketing",
  "Strategic Foresight",
  "Everyday Agentic AI",
  "AI Enthusiast",
  "Healthcare AI",
  "More",
];

const blogPosts = [
  {
    id: 1,
    date: "FEB 24",
    readTime: "4 MIN READ",
    category: "Education",
    title: "Transforming Education with Intelligent Learning",
    desc: "Education is evolving rapidly driven by technology that adapts how students learn and educators teach.",
  },
  {
    id: 2,
    date: "FEB 24",
    readTime: "3 MIN READ",
    category: "AI Tools/Art",
    title: "Revolutionizing Education with AI-Driven Assessment",
    desc: "Education faces constant challenges in measuring student learning accurately and efficiently. Traditional...",
  },
  {
    id: 3,
    date: "FEB 24",
    readTime: "4 MIN READ",
    category: "Education",
    title: "Enhancing Student Success Through Predictive Analytics",
    desc: "Predicting student performance and identifying risks become critical challenges for educational institutions.",
  },
  {
    id: 4,
    date: "FEB 24",
    readTime: "3 MIN READ",
    category: "Education",
    title: "Revolutionizing Education with Personalized Platforms",
    desc: "Education has always faced the challenge of meeting the diverse needs of learners. Traditional methods often treat...",
  },
  {
    id: 5,
    date: "FEB 24",
    readTime: "5 MIN READ",
    category: "Business",
    title: "Harnessing Responsible AI in Enterprises to Drive Innovation",
    desc: "Artificial Intelligence (AI) is transforming enterprises across industries, creating new possibilities for speed...",
  },
  {
    id: 6,
    date: "FEB 24",
    readTime: "6 MIN READ",
    category: "Business",
    title: "Data Modernization Strategies for AI Infrastructure",
    desc: "Artificial Intelligence (AI) is transforming how enterprises operate, compete, and grow. Yet, many organizations struggle...",
  },
  {
    id: 7,
    date: "FEB 24",
    readTime: "5 MIN READ",
    category: "Business",
    title: "Mastering Enterprise AI: Strategies for Large-Scale Implementation",
    desc: "Artificial Intelligence promises to transform enterprises by automating tasks, improving decision-making...",
  },
  {
    id: 8,
    date: "FEB 24",
    readTime: "4 MIN READ",
    category: "Business",
    title: "Implementing an Effective AI Governance Framework",
    desc: "Artificial Intelligence is transforming enterprises across industries, but introduces challenges...",
  },
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const q = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.desc.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      <Navbar darkText />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-24">
        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-6 bg-[#f8f2ff] rounded-full px-7 py-3 overflow-x-auto max-w-full scrollbar-hide">
            {categories.map((item, index) => (
              <button
                key={index}
                className={`relative whitespace-nowrap text-xs font-semibold pb-1 transition-colors ${
                  index === 0 ? "text-purple-600" : "text-slate-500"
                }`}
              >
                {item}
                {index === 0 && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-purple-600"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
              All Posts
            </h1>
            <p className="text-sm text-slate-500 max-w-xl">
              Insights, strategies, and expert perspectives on AI, data, and the
              future of enterprise.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[230px] rounded-lg border border-slate-200 py-3 pl-9 pr-4 text-xs outline-none focus:border-purple-400"
              />
            </div>

            <select className="rounded-lg border border-slate-200 py-3 px-4 text-xs outline-none focus:border-purple-400">
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#e9d8ff] rounded-2xl p-6 min-h-[280px] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase mb-4">
                    {post.date} &nbsp;•&nbsp; {post.readTime}
                  </p>

                  <span className="inline-block bg-white text-purple-600 text-[10px] font-bold px-3 py-1 rounded-md mb-5">
                    {post.category}
                  </span>

                  <h3 className="text-lg font-extrabold leading-snug mb-4">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {post.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <span className="text-[11px] text-slate-500">
                    {post.readTime.toLowerCase()}
                  </span>

                  <button className="w-8 h-8 rounded-full bg-white text-purple-600 flex items-center justify-center">
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-500 py-20">
            No posts found matching "{searchQuery}"
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-14">
          {["<", "1", "2", "3", "...", "8", ">"].map((item, index) => (
            <button
              key={index}
              className={`w-9 h-9 rounded-full text-sm ${
                item === "1"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-slate-500 hover:bg-purple-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Resources;