import power from "../../assets/icons/power.png";
import eye from "../../assets/icons/eye.png";
import puzzle from "../../assets/icons/puzzle.png";

const cards = [
  {
    image: power,
    title: "Efficiency",
    description:
      "Faster government operations with intelligent automation and streamlined workflows.",
  },
  {
    image: eye,
    title: "Transparency",
    description:
      "Clear insights and real-time data visibility to build trust and drive informed decisions.",
  },
  {
    image: puzzle,
    title:  "Automation",
    description:
      "End-to-end smart administration that reduces manual work and improves service delivery.",
  },
];

export default function Innovation() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left Side */}
          <div className="order-1">
            <p className="text-sm uppercase tracking-[4px] text-purple-500 font-semibold mb-4">
              AI DRIVEN INNOVATION
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              AI Driven Innovation for
              <br />
              <span className="text-purple-500">
                Public Sector Transformation
              </span>
            </h2>

            <div className="w-72 h-1 bg-purple-300 rounded-full mt-6 mb-8"></div>

            <p className="text-gray-500 text-lg leading-8 max-w-xl">
              Drive lasting government innovation and inclusive service
              experiences with next-gen AI platforms engineered to
              ensure security, transparency, and trust. AI technology
              designed for the unique public sector environment.
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-3 gap-6 order-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="
                  border border-purple-200
                  rounded-[30px]
                  px-8
                  py-12
                  text-center
                  flex
                  flex-col
                  items-center
                  justify-start
                  h-full
                "
              >
                {/* Circle */}
                <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center mb-10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {card.title}
                </h3>

                <div className="w-12 h-[2px] bg-purple-300 mb-6"></div>

                <p className="text-gray-500 leading-8">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}