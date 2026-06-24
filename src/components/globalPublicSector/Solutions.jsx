import {
  Building2,
  BarChart3,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Public Administration",
    description:
      "Streamline operations and improve efficiency across government institutions.",
    icon: <Building2 size={16} />,
  },
  {
    number: "02",
    title: "Data Intelligence",
    description:
      "Leverage data and analytics to transform insights and enhance decision-making.",
    icon: <BarChart3 size={16} />,
  },
  {
    number: "03",
    title: "Citizen Services",
    description:
      "Deliver personalized, accessible, and inclusive services for every citizen.",
    icon: <Users size={16} />,
  },
  {
    number: "04",
    title: "Secure Operations",
    description:
      "Ensure security, compliance, and resilience across all government systems.",
    icon: <ShieldCheck size={16} />,
  },
];

export default function Solutions() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
          <div className="max-w-[740px]">
            <h2 className="text-[36px] leading-[42px] font-extrabold text-[#0F172A]">
              AI Solutions for Modern Global Government and Public
              Administration
            </h2>
          </div>

          <div className="max-w-[320px]">
            <p className="text-[14px] leading-[20px] text-[#64748B]">
              Government-grade intelligent technologies to improve
              service delivery, manage public resources efficiently,
              and enable data-driven decisions for citizens.
            </p>
          </div>
        </div>
        {/* Cards */}
<div className="flex gap-6 overflow-x-auto lg:overflow-visible pb-2">
  {cards.map((card) => (
    <div
      key={card.number}
      className="
        flex-shrink-0
        w-[300px]
        h-[260px]
        bg-[#FCF7FF]
        rounded-[24px]
        border border-[#F3EDF8]
        p-8
        flex flex-col
      "
    >
      {/* Top */}
      <div className="flex justify-between items-start mb-8">
        <span className="text-[32px] font-bold text-[#ECE8F8]">
          {card.number}
        </span>

        <div className="text-[#6D5EF5]">
          {card.icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-[18px] font-semibold text-[#0F172A] mb-3">
          {card.title}
        </h3>

        <p className="text-[14px] leading-6 text-[#64748B]">
          {card.description}
        </p>
      </div>

      {/* Arrow */}
      <button className="mt-6">
        <ArrowRight
          size={18}
          className="text-slate-900"
        />
      </button>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}