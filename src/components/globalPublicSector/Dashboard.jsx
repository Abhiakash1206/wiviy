import {
  BarChart3,
  Star,
  CheckCircle,
} from "lucide-react";

import shieldImg from "../../assets/icons/shield.png";

export default function Dashboard() {
  const capabilities = [
    "AI-powered citizen services",
    "Intelligent public resource automation",
    "Citizen engagement & digital services",
    "Cross-department data integration",
    "Secure government workflow orchestration",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4">

        {/* Main Container */}
        <div className="bg-[#FCF8FF] rounded-[36px] border border-[#F2EDF7] p-8 lg:p-10">

          {/* Header */}
          <div className="flex items-start gap-5 mb-10">
            <div className="w-[60px] h-[60px] rounded-2xl bg-[#F3F0FF] flex items-center justify-center">
              <BarChart3
                size={28}
                className="text-[#5B4FF7]"
              />
            </div>

            <div>
              <h4 className="text-[18px] font-extrabold uppercase tracking-wide text-[#4038A0]">
                Government Performance Dashboard
              </h4>

              <p className="text-[14px] text-[#64748B] max-w-[700px] mt-1 leading-7">
                Real-time insights and AI-driven analytics to optimize
                performance, improve citizen experience, and drive
                data-informed decisions.
              </p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-[620px_1fr] gap-6">

            {/* Left */}
            <div className="grid grid-cols-2 gap-6">

              {/* Card 1 */}
              <div className="bg-white rounded-[28px] border border-[#EFEAF5] p-6 h-[260px] shadow-sm">
                <div className="flex justify-between">
                  <h5 className="text-[15px] font-semibold text-[#374151]">
                    Policy
                    <br />
                    Compliance
                  </h5>

                  <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#5B4FF7] text-xs font-bold">
                    ↑
                    <br />
                    12%
                  </div>
                </div>

                <h2 className="text-[56px] font-bold text-[#4338CA] mt-10">
                  72%
                </h2>

                <p className="text-[12px] font-semibold text-[#5B4FF7]">
                  ● VS LAST MONTH
                </p>

                <div className="mt-10">
                  <svg
                    width="150"
                    height="40"
                    viewBox="0 0 150 40"
                  >
                    <path
                      d="M5 30 C40 25,70 20,85 10 S130 30,140 15"
                      fill="none"
                      stroke="#5B4FF7"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[28px] border border-[#EFEAF5] p-6 h-[260px] shadow-sm">
                <div className="flex justify-between">
                  <h5 className="text-[15px] font-semibold text-[#374151]">
                    Tasks
                    <br />
                    Automated
                  </h5>

                  <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#5B4FF7] text-xs font-bold">
                    ↑
                    <br />
                    16%
                  </div>
                </div>

                <h2 className="text-[56px] font-bold text-[#4338CA] mt-10">
                  89%
                </h2>

                <p className="text-[12px] font-semibold text-[#5B4FF7]">
                  ● VS LAST MONTH
                </p>

                <div className="flex gap-4 items-end mt-10">
                  <div className="w-4 h-4 bg-[#ECEBFF] rounded"></div>
                  <div className="w-4 h-6 bg-[#E0DEFF] rounded"></div>
                  <div className="w-4 h-5 bg-[#D2CFFF] rounded"></div>
                  <div className="w-4 h-8 bg-[#B8B1FF] rounded"></div>
                  <div className="w-4 h-10 bg-[#9288FF] rounded"></div>
                  <div className="w-4 h-12 bg-[#5B4FF7] rounded"></div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[28px] border border-[#EFEAF5] p-6 h-[260px] shadow-sm">
                <div className="flex justify-between">
                  <h5 className="text-[15px] font-semibold text-[#374151]">
                    Citizen
                    <br />
                    Satisfaction
                  </h5>

                  <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#5B4FF7] text-xs font-bold">
                    ★
                    <br />
                    4.2
                  </div>
                </div>

                <div className="flex items-end mt-10">
                  <h2 className="text-[56px] font-bold text-[#4338CA]">
                    4.8
                  </h2>

                  <span className="text-gray-400 text-2xl mb-2">
                    /5
                  </span>
                </div>

                <div className="flex gap-1 text-[#5B4FF7] mt-3">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star size={18} />
                </div>

                <p className="text-[11px] text-gray-400 mt-3">
                  AVERAGE RATING
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-[28px] border border-[#EFEAF5] p-6 h-[260px] shadow-sm">
                <div className="flex justify-between">
                  <h5 className="text-[15px] font-semibold text-[#374151]">
                    Agencies
                    <br />
                    Connected
                  </h5>

                  <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#5B4FF7] text-xs font-bold">
                    ↑
                    <br />
                    5
                  </div>
                </div>

                <h2 className="text-[56px] font-bold text-[#4338CA] mt-10">
                  35+
                </h2>

                <p className="text-[11px] text-gray-400">
                  ACROSS AGENCIES
                </p>

                <div className="grid grid-cols-4 gap-2 w-fit ml-auto mt-8">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#5B4FF7]"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-[32px] border border-[#EFEAF5] p-12 flex items-center justify-between">

              <div className="max-w-[380px]">
                <h2 className="text-[54px] font-bold leading-[60px] text-[#0F172A]">
                  Smart Government
                  <br />
                  Systems
                </h2>

                <p className="text-[#64748B] leading-8 mt-6">
                  AI-powered platforms that unify citizen
                  experiences, centralize systems, and automate
                  public service operations.
                </p>

                <h4 className="mt-10 mb-6 font-semibold text-[#5B4FF7]">
                  Key Government Capabilities
                </h4>

                <div className="space-y-5">
                  {capabilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-b border-gray-100 pb-3"
                    >
                      <CheckCircle
                        size={18}
                        className="text-[#5B4FF7]"
                      />

                      <span className="text-[#475569]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center">
                <img
                  src={shieldImg}
                  alt="shield"
                  className="w-[256px] h-[256px] opacity-100"
                  style={{ rotate: "0deg" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}