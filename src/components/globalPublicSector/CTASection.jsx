export default function CTASection() {
  return (
    <section className="bg-[#f7f6ff] py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">

          {/* Heading */}
          <h2 className="text-[36px] font-extrabold text-slate-900 leading-[40px] max-w-[682px]">
            Transforming Governance Through
            <br />
            Intelligent Technology
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-500 text-lg leading-8">
            Empowering your public services with AI-driven solutions
            that improve service delivery, trust, and value at scale
            for global governance.
          </p>

          {/* Button */}
          <button className="
            mt-10
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            shadow-lg
            transition
            duration-300
          ">
            Talk To Experts →
          </button>

        </div>
      </div>
    </section>
  );
}