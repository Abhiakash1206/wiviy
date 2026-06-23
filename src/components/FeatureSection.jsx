import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

export default function FeatureSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-24 space-y-12">
      {features.map((item, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}