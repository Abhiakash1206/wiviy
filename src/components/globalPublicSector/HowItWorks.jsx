import createAccount from "../../assets/icons/createaccount.png";
import invest from "../../assets/icons/invest.png";
import letGrow from "../../assets/icons/let-grow.png";
import receive from "../../assets/icons/receive.png";
import secure from "../../assets/icons/secure.png";
import support from "../../assets/icons/support.png";
import homeIcon from "../../assets/icons/home.png";

const leftSteps = [
  {
    icon: createAccount,
    title: "01. Create Account",
    description:
      "Sign up and complete your profile in just a few minutes.",
  },
  {
    icon: invest,
    title: "02. Invest",
    description:
      "Choose your investment amount and tenure that suits you.",
  },
  {
    icon: letGrow,
    title: "03. Let It Grow",
    description:
      "Your investment starts working for you with a fixed return rate.",
  },
];

const rightSteps = [
  {
    icon: receive,
    title: "04. Receive Returns",
    description:
      "Earn fixed returns on maturity directly in your wallet.",
  },
  {
    icon: secure,
    title: "05. Secure & Transparent",
    description:
      "Your investments are backed by security and transparency.",
  },
  {
    icon: support,
    title: "06. Support",
    description:
      "Our team is always here to help you at every step.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="bg-[#fdf8ff] rounded-[35px] p-8 lg:p-10 shadow-sm">

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10">

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm">
  <img
    src={homeIcon}
    alt="Home Icon"
    className="w-7 h-7 object-contain"
  />
</div>

              <div>
                <h2 className="text-4xl font-bold text-slate-900">
                  SFI (Fixed)
                </h2>

                <p className="text-gray-500 text-xl mt-1">
                  A simple, secure way to grow your capital with fixed returns.
                </p>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 flex items-center gap-4">
              <div className="w-10 h-[1px] bg-purple-300"></div>
              <div className="w-2 h-2 rounded-full bg-purple-600"></div>

              <span className="uppercase tracking-[4px] text-sm font-bold">
                How It Works
              </span>

              <div className="w-2 h-2 rounded-full bg-purple-600"></div>
              <div className="w-10 h-[1px] bg-purple-300"></div>
            </div>
          </div>

          {/* Main Box */}
          <div className="bg-white border rounded-3xl overflow-hidden grid lg:grid-cols-2">

            {/* Left */}
            <div className="p-10 space-y-14 border-r">
              {leftSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-10 h-10"
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 text-lg mt-2 max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="p-10 space-y-14">
              {rightSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-10 h-10"
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 text-lg mt-2 max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}