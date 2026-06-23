import React from "react";
import {
  Eye,
  BarChart3,
  Cpu,
  ArrowRight,
  Heart,
} from "lucide-react";

import Navbar from "../components/Navbar";

const features = [
  {
    icon: <Eye size={20} />,
    title: "Enterprise Strategic Foresight",
    description:
      "AI-enabled strategic foresight frameworks that help enterprises anticipate changes, evaluate future scenarios, manage uncertainty, and align long-term decisions with evolving market, technology, and geopolitical dynamics.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Enterprise Data Analytics",
    description:
      "AI-powered analytics frameworks that transform enterprise data into actionable intelligence, enabling faster decisions, operational clarity, predictive insights, and measurable performance improvements across complex business functions.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Enterprise Generative AI Applications",
    description:
      "Enterprise-grade generative AI systems that augment decision-making, automate knowledge work, and accelerate execution by embedding intelligent content generation directly into business workflows and digital operating environments.",
  },
];

const CarbonCredit = () => {
  return (
    <div className="bg-white text-[#0F172A]">
      
      {/* Reusable Navbar */}
      <Navbar darkText />

      {/* Hero */}
      <section className="text-center pt-24 px-6">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-8">
          <Heart size={20} className="text-purple-600" />
        </div>

        <h1 className="text-[44px] md:text-[52px] font-extrabold leading-[0.95] tracking-tight text-[#0F172A]">
          Enterprise Carbon Credit
          <br />
          Market Intelligence
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-[13px] text-slate-500 leading-6">
          AI-enabled carbon market systems that help enterprises measure
          emissions, navigate credit markets, manage compliance, and align
          sustainability initiatives with financial, regulatory, and strategic
          business objectives.
        </p>

        <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 transition">
          Learn More <ArrowRight size={14} />
        </button>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-12 mt-28 pb-20">
        {features.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[70px_1fr_150px] items-center border-b border-slate-100 py-10"
          >
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              {item.icon}
            </div>

            <div>
              <h2 className="text-[22px] font-extrabold text-[#0F172A] mb-2">
                {item.title}
              </h2>

              <p className="text-[13px] text-slate-500 leading-5 max-w-4xl">
                {item.description}
              </p>
            </div>

            <button className="justify-self-end min-w-[120px] h-[38px] rounded-full border border-purple-200 text-purple-500 text-sm font-medium flex items-center justify-center gap-2 hover:bg-purple-50 transition">
              Learn More <ArrowRight size={13} />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CarbonCredit;