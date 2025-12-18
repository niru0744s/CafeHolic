import FeatureCard from "./reusableComponents/FeatureCard";
import { features } from "../data/componentData";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f3e1d3] py-20 text-[#1f2933]">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-14 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Why Choose Us
          </h2>
          <p className="mt-3 text-sm text-black/70 md:text-base">
            We deliver quality, consistency, and an unforgettable coffee experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
