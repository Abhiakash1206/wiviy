export default function Hero() {
  return (
    <section className="text-center mt-20 px-6">
      <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-8">
        ♡
      </div>

      <h1 className="text-6xl font-bold text-slate-900 leading-tight">
        Enterprise Carbon Credit
        <br />
        Market Intelligence
      </h1>

      <p className="max-w-3xl mx-auto mt-6 text-gray-500 leading-7">
        AI-enabled carbon market systems that help enterprises measure emissions,
        navigate credit markets, manage compliance, and align sustainability
        initiatives with financial, regulatory, and strategic business
        objectives.
      </p>

      <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition">
        Learn More →
      </button>
    </section>
  );
}