import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/entwy-bg.png";
import aiautomation from "../assets/aiautomation.png";

const Enterprise = () => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const aiAutomationStyle = {
    backgroundImage: `url(${aiautomation})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const industries = [
    "Enterprise AI for Healthcare, Insurance & Pharmaceutical",
    "Enterprise AI for Banking & Investment",
    "Enterprise AI for Education, Learning & Skill Development",
    "Enterprise AI for Food & Beverage (F&B) and Hospitality",
    "Enterprise AI for Beauty, Wellness & Personal Care",
  ];

  const capabilityCards = [
    {
      title: "AI Agents",
      text: "Autonomous AI systems that execute tasks, support workflows, and enhance productivity.",
    },
    {
      title: "Data Intelligence",
      text: "Turn raw business data into insights for smarter operational and strategic decisions.",
    },
    {
      title: "Automation",
      text: "Reduce repetitive work through intelligent process automation and workflow systems.",
    },
    {
      title: "Security Intelligence",
      text: "AI-powered monitoring and privacy-first enterprise protection systems.",
    },
  ];

  const solutionItems = ["Automation", "Insights", "Productivity"];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative min-h-[520px] overflow-hidden text-white"
        style={aiAutomationStyle}
      >
        <div className="absolute inset-0 bg-white/15"></div>

        <div className="relative z-10">
          <Navbar darkText />

          <div className="max-w-7xl mx-auto px-8 pt-16 pb-24">
            <p className="text-xs font-bold tracking-widest text-purple-700 mb-4">
              ENTERPRISE AI
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI Automation
              <br />
              for Enterprises
            </h1>

            <p className="text-gray-700 max-w-xl leading-relaxed mb-8">
              Transform the way your enterprise operates with intelligent
              automation built for scale, efficiency, and measurable impact.
            </p>

            <div className="flex gap-4">
              <button className="bg-purple-700 text-white px-7 py-3 rounded-lg font-bold flex items-center gap-3">
                Book a Demo <ArrowRight size={16} />
              </button>

              <button className="bg-white text-gray-900 px-7 py-3 rounded-lg font-bold flex items-center gap-3">
                Build AI <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main White Panel */}
      <section className="relative -mt-16 px-8 pb-16">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-purple-100 p-10 md:p-14">
          {/* Enterprise Industry */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Enterprise Industry
            </h2>

            <p className="text-gray-600 max-w-xl mb-8">
              AI-powered automation solutions tailored for key industries to
              drive growth, improve efficiency, and deliver better outcomes.
            </p>

            <div className="border border-purple-100 rounded-2xl overflow-hidden">
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 border-b last:border-b-0 border-purple-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700">
                      <Zap size={16} />
                    </div>

                    <h3 className="font-bold text-gray-900">{item}</h3>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Entwy helps organizations transform operations with
                    intelligent AI systems, automation workflows, data
                    intelligence, and scalable enterprise infrastructure built
                    for measurable business impact.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Intelligence */}
          <div
            className="rounded-3xl p-10 md:p-14 mb-16 overflow-hidden"
            style={bgStyle}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-5">
                  Enterprise
                  <br />
                  Intelligence
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Monitor performance, understand operations, and transform
                  complex data into intelligent enterprise decisions.
                </p>

                <a className="text-purple-700 font-bold inline-flex items-center gap-2">
                  Explore Intelligence <ArrowRight size={16} />
                </a>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-purple-700 mb-3">
                    Challenges
                  </h3>

                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Fragmented data across enterprise departments</li>
                    <li>• Slow reporting and decision-making processes</li>
                    <li>• Manual workflows that reduce operational efficiency</li>
                    <li>• Limited visibility into future business risks</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-purple-700 mb-3">Solutions</h3>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    Entwy integrates intelligent systems, predictive analytics,
                    automation pipelines, and AI-powered enterprise workflows
                    that help organizations operate with clarity and speed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="bg-[#f8f7ff] rounded-3xl p-10 md:p-14 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Capabilities
                </h2>

                <p className="text-gray-600 mb-5">
                  Powerful AI capabilities for enterprise automation and
                  decision-making.
                </p>

                <a className="text-purple-700 font-bold inline-flex items-center gap-2">
                  View all <ArrowRight size={16} />
                </a>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                {capabilityCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm"
                  >
                    <div className="w-9 h-9 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center mb-4">
                      <Zap size={16} />
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transformation Banner */}
          <div
            className="rounded-3xl p-10 md:p-14 mb-16 overflow-hidden"
            style={bgStyle}
          >
            <div className="max-w-xl ml-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI Powered Transformation
                <br />
                for Modern Enterprises
              </h2>

              <p className="text-gray-700 mb-6">
                Transform enterprises through intelligent automation, analytics,
                and scalable AI infrastructure.
              </p>

              <button className="bg-white/60 backdrop-blur-md text-purple-700 px-7 py-3 rounded-full font-bold">
                Build AI
              </button>
            </div>
          </div>

          {/* Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise Solutions Designed for
                <br />
                Intelligent Business Operations
              </h2>

              <p className="text-gray-600 mb-6">
                End-to-end solutions that drive efficiency, agility, and
                innovation.
              </p>

              <button className="border border-purple-300 text-purple-700 px-6 py-3 rounded-full font-bold">
                Explore Solutions
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6 space-y-5">
              {solutionItems.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center">
                    <Zap size={16} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">{item}</h3>

                    <p className="text-sm text-gray-600">
                      Improve workflows, decision-making, and business outcomes
                      with intelligent enterprise AI.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Strip */}
          <div className="bg-purple-100 rounded-3xl px-8 py-10 flex items-center justify-between mb-16">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
              <ChevronLeft size={20} />
            </button>

            <div className="text-center">
              <h2 className="text-xl font-bold text-purple-700">
                Enterprise AI Platform Capabilities
              </h2>

              <p className="text-sm text-gray-700">
                Everything you need to build, deploy, and scale AI solutions.
              </p>
            </div>

            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Applications */}
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Enterprise AI Industry Applications
            </h2>

            <p className="text-gray-600 mb-8">
              AI-driven enterprise systems support organizations across
              industries by automating operations, analyzing business data, and
              enabling intelligence-led decision making.
            </p>

            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              {[
                "Business Intelligence",
                "Marketing Automation",
                "Sales Optimization",
                "Customer Experience",
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 border-b last:border-b-0 border-gray-200"
                >
                  <div className="flex gap-3 items-center font-bold text-gray-900">
                    <span className="w-7 h-7 bg-purple-100 text-purple-700 rounded-md flex items-center justify-center">
                      <Zap size={14} />
                    </span>

                    {item}
                  </div>

                  <p className="md:col-span-2 text-sm text-gray-600">
                    Transform data into actionable insights and optimize
                    enterprise performance with AI.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-20">
        <div
          className="max-w-7xl mx-auto rounded-3xl p-10 md:p-14 overflow-hidden"
          style={bgStyle}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                THE TRANSFORMATION OF YOUR
                <br />
                INDUSTRY STARTS HERE
              </h2>

              <p className="text-gray-700 max-w-lg">
                Where data, design, and intelligence converge - powering growth,
                innovation, and sustainability across industries.
              </p>
            </div>

            <button className="bg-purple-700 text-white px-10 py-4 rounded-full font-bold">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;