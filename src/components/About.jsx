import coffeeCircle from "../assets/about/coffee-circle.jpg";

export default function About() {
  return (
    <section id="about" className="text-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              About Us
            </h2>

            <p className="mb-6 max-w-lg text-sm leading-relaxed text-white/80">
              CafeAura is a premium coffee experience built around quality,
              craftsmanship, and atmosphere. Every cup reflects our passion
              for carefully sourced beans and expert brewing.
            </p>

            <h3 className="mb-3 text-lg font-medium">
              Our Mission
            </h3>

            <p className="max-w-lg text-sm leading-relaxed text-white/70">
              To create a space where coffee inspires energy, focus,
              and meaningful moments — one cup at a time.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center">
            <div className="relative h-[260px] w-[260px] rounded-full border border-white/10">
              <img
                src={coffeeCircle}
                alt="Coffee art"
                className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
