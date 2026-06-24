import heroBg from "../../assets/icons/hero-bg.png";
import worldMap from "../../assets/icons/world-map.png";
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden h-[700px]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* World Map */}
      <img
        src={worldMap}
        alt="World Map"
        className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          w-[55%]
          opacity-25
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-8 lg:px-12 flex items-center">
        <div className="max-w-[520px]">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-purple-500 mb-5">
            AI-POWERED SOLUTIONS
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Global{" "}
            <span className="text-purple-500">
              Public Sector
            </span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-8">
            Empowering governments worldwide with AI-driven
            solutions to drive transparency, accelerate innovation,
            trust societal public services and improve governance.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg">
              Explore Government Solutions
            </button>

            <button className="flex items-center gap-3 bg-white border shadow px-7 py-4 rounded-xl">
              <div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm">
                ▶
              </div>

              <span className="font-medium text-gray-700">
                Watch Video
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}