export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="w-full flex items-center justify-between border-b border-[#F1F5F9] py-4">
      <div className="flex items-start gap-5 flex-1">
        <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>

        <div>
          <h2 className="text-[30px] leading-[32px] font-bold text-[#0F172A]">
            {title}
          </h2>

          <p className="mt-1 text-gray-500 leading-6 max-w-[1100px]">
            {description}
          </p>
        </div>
      </div>

      <button className="min-w-[130px] h-[42px] rounded-full border border-purple-200 text-purple-500 text-sm font-medium flex items-center justify-center whitespace-nowrap flex-shrink-0 hover:bg-purple-50 transition">
        Learn More →
      </button>
    </div>
  );
}