import sectionBg from "../assets/backgrounds/section-bg.jpg";
import WhyChooseUs from "./WhyChooseUs";
import About from "./About";

export default function SectionGroup() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background Image */}
      <img
        src={sectionBg}
        alt="Coffee texture background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10">
        <WhyChooseUs />

        {/* Thin connecting line */}
        <div className="relative mx-auto my-16 h-px max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>

        <About />
      </div>

    </section>
  );
}
