import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import bgImage from "../assets/entwy-bg.png";
import Navbar from "../components/Navbar";
import endtoend from "../assets/endtoend.png";
import adaptive from "../assets/adaptive.png";
import automation from "../assets/automation.png";
import enterpriseReady from "../assets/enterprise-ready.png";
import seamless from "../assets/seamless.png";
import applyai from "../assets/applyai.png";
import banking from "../assets/banking.png";
import transformation from "../assets/transformation.png";
const Home = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(0);

  const toggleAccordion = (id) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  const features = [
    {
      title: "End-to-End AI Innovation",
      label: "AI FOR THE ENTERPRISE",
      description:
        "Achieve powerful results with Entwy's intelligent automations, adaptive AI agents, and seamlessly deployed workflows - designed to optimize operations, enhance decision-making, and scale business efficiency.",
      cta: "Book a Demo",
    },
    {
      title: "Adaptive AI Agents",
      description:
        "Autonomous agents that learn, adapt, and deliver real business outcomes.",
    },
    {
      title: "Intelligent Automations",
      description:
        "Streamline workflows and eliminate repetitive tasks with AI-powered automation.",
    },
    {
      title: "Enterprise Ready",
      description:
        "Secure, compliant, and built to integrate with your enterprise stack.",
    },
    {
      title: "Seamless Workflows",
      description:
        "End-to-end orchestration designed for scalability and efficiency.",
    },
  ];

  const industries = [
    {
      title: "Banking, Investment, and Cryptocurrency",
      description:
        "The banking sector is evolving rapidly with digital adoption, compliance pressure, and rising customer expectations. Entwy deploys AI agents to streamline risk analysis, onboarding workflows, credit scoring, fraud detection, and regulatory reporting. Our solutions reduce operational overhead, enhance precision, and enable data-driven decisioning across retail and commercial banking environments.",
      link: "Intelligent Automation for Modern Financial Operations",
    },
    { title: "Technology Products, SaaS & Services", description: "" },
    { title: "Healthcare, Insurance & Pharmaceutical", description: "" },
    { title: "Education, Learning, and Skill Development", description: "" },
    { title: "Culinary and Hospitality Ecosystems", description: "" },
    {
      title: "Smart Wellness and Lifestyle Intelligence Platforms",
      description: "",
    },
  ];

  const pageBgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const applyAiStyle = {
  backgroundImage: `url(${applyai})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

  const cardBgStyle = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.18), rgba(255,255,255,0.18)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

 const endToEndCardStyle = {
  backgroundImage: `url(${endtoend})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const adaptiveCardStyle = {
  backgroundImage: `url(${adaptive})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const automationCardStyle = {
  backgroundImage: `url(${automation})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const enterpriseReadyCardStyle = {
  backgroundImage: `url(${enterpriseReady})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const seamlessCardStyle = {
  backgroundImage: `url(${seamless})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const bankingStyle = {
  backgroundImage: `url(${banking})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const transformationStyle = {
  backgroundImage: `url(${transformation})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};


  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[640px] text-white overflow-hidden pt-8 pb-16"
        style={pageBgStyle}
      >
        <Navbar />

        <div className="absolute inset-0 bg-black/5"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-20">
          <div className="text-xs font-bold tracking-widest text-white mb-6">
            FUTURE REIMAGINED
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold mb-7 leading-[1.08] tracking-tight">
            Transformative AI
            <br />
            from <span className="text-[#C77BFF]">Insight</span> to{" "}
            <span className="text-[#C77BFF]">Impact</span>
          </h1>

          <p className="text-base text-white max-w-[540px] mb-9 leading-relaxed">
            Entwy powers organizations with reliable data, intelligent
            automation, and scalable AI solutions- driving innovation for
            startups, enterprises, and global industries.
          </p>

          <div className="flex gap-5 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-8 shadow-lg">
              Book a Demo <ArrowRight size={16} />
            </button>

            <button className="bg-white/25 backdrop-blur-md border border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/35 transition-colors flex items-center gap-8">
              Build AI <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8 bg-[#f8f7ff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-purple-600 mb-4">
              OUR CORE SERVICE DOMAINS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              AI-driven intelligence and automation
              <br />
              built for impact.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div
              className="lg:row-span-2 rounded-3xl p-8 text-gray-900 overflow-hidden shadow-xl min-h-[420px]"
              style={endToEndCardStyle}
            >
              <p className="text-xs font-bold text-gray-700 mb-4 tracking-wider">
                AI FOR THE ENTERPRISE
              </p>

              <h3 className="text-4xl font-bold mb-6 leading-tight">
                {features[0].title}
              </h3>

              <p className="text-sm text-gray-800 mb-8 leading-relaxed">
                {features[0].description}
              </p>

              <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors flex items-center gap-2 shadow-md">
                {features[0].cta} <ArrowRight size={16} />
              </button>
            </div>

{features.slice(1, 4).map((feature, index) => (
  <div
    key={index}
    className="rounded-3xl p-8 text-gray-900 overflow-hidden shadow-lg min-h-[210px]"
    style={
      index === 0
        ? adaptiveCardStyle
        : index === 1
        ? automationCardStyle
        : enterpriseReadyCardStyle
    }
  >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-800 mb-6">
                  {feature.description}
                </p>
                <ArrowRight size={20} className="text-purple-700" />
              </div>
            ))}

<div
  className="lg:col-span-2 rounded-3xl p-8 text-gray-900 overflow-hidden shadow-lg min-h-[190px]"
  style={seamlessCardStyle}
>
              <h3 className="text-2xl font-bold mb-3">{features[4].title}</h3>
              <p className="text-sm text-gray-800">
                {features[4].description}
              </p>
              <ArrowRight size={20} className="text-purple-700 mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Apply AI Section */}
      <section
  className="relative w-full text-white py-24 px-8 overflow-hidden"
  style={applyAiStyle}
>
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="inline-block text-sm font-bold tracking-widest text-white bg-white/20 px-8 py-2 rounded-full mb-6">
            APPLY AI
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Entwy partners with startups, mid-sized
            <br />
            businesses, and
            <br />
            global enterprises
          </h2>

          <p className="text-lg text-gray-900 font-semibold mb-8">
            to build and deploy full-stack AI systems.
          </p>

          <p className="text-sm text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            From data intelligence and model training to AI-enabled enterprise
            products, services, and agent-driven automations - Entwy builds and
            integrates intelligent systems that drive innovation, accelerate
            growth, and enhance efficiency across industries.
          </p>

          <button className="bg-white/30 backdrop-blur-md border border-white/40 text-white px-12 py-4 rounded-xl font-bold hover:bg-white/40 transition-colors shadow-md">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Capabilities That Drive Growth */}
      <section className="py-24 px-8 bg-[#f8f7ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-purple-400 uppercase">
              CAPABILITIES THAT DRIVE GROWTH
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-300 shadow-md"></div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                Cloud Computing Network
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enable scalable, secure, and AI-integrated operations across
                cloud infrastructures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-300 shadow-md"></div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                Marketing & Data Interpretation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Leverage AI for precision targeting, performance analytics, and
                actionable marketing insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-300 shadow-md"></div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                Cloud Computing Network
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use AI to monitor, verify, and optimize carbon credit generation
                and trading.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-300 shadow-md"></div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                Strategic Foresight & Enterprise Intelligence
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use AI to predict trends, guide decisions, and strengthen
                long-term business resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        className="relative w-full min-h-screen py-24 px-8 overflow-hidden"
style={bankingStyle}      >
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="space-y-4">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/50 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-8 py-6 flex justify-between items-start hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-left">
                    <h3 className="font-bold text-xl text-gray-800">
                      {industry.title}
                    </h3>

                    {expandedAccordion !== idx && industry.description && (
                      <p className="text-sm text-[#6f63a5] mt-3">
                        {industry.description}
                      </p>
                    )}
                  </div>

                  <ChevronDown
                    size={24}
                    className={`text-purple-700 transition-transform flex-shrink-0 ml-4 ${
                      expandedAccordion === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedAccordion === idx && industry.description && (
                  <div className="px-8 py-6 bg-white/20 backdrop-blur-md border-t border-white/20">
                    <p className="text-[#6f63a5] text-base leading-relaxed mb-5">
                      {industry.description}
                    </p>

                    {industry.link && (
                      <a
                        href="#"
                        className="text-[#8B5CF6] font-bold text-base hover:text-purple-900 flex items-center gap-2 inline-flex"
                      >
                        {industry.link} <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8 bg-white">
        <div
          className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden px-12 py-16 shadow-lg"
        style={transformationStyle}        >
          <div className="absolute inset-0 bg-white/20"></div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                THE TRANSFORMATION OF YOUR
                <br />
                INDUSTRY STARTS HERE
              </h2>

              <p className="text-gray-700 max-w-lg leading-relaxed">
                Where data, design, and intelligence converge - powering growth,
                innovation, and sustainability across industries.
              </p>
            </div>

            <div className="flex gap-6 flex-wrap">
              <button className="bg-purple-700 text-white px-12 py-4 rounded-2xl font-bold hover:bg-purple-800 transition-colors shadow-md">
                Book a Demo
              </button>

              <button className="bg-white/10 border-2 border-white text-gray-900 px-12 py-4 rounded-2xl font-bold hover:bg-white/30 transition-colors">
                BUILD AI
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;