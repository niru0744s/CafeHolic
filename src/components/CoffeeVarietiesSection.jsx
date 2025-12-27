export default function CoffeeVarietiesSection() {
  return (
    <section className="relative overflow-hidden py-24">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3a2415] via-[#2a1a10] to-[#1a120c]" />

      {/* Soft overlay for depth */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Section Title */}
        <h2 className="mb-14 text-3xl md:text-4xl font-semibold text-primary">
          Our Coffee Varieties
        </h2>

        {/* Content Grid */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* Item 1 */}
          <div className="max-w-sm animate-fadeUp">
            <h3 className="text-lg font-medium text-white">
              100% Arabica · Guatemala
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Soft and aromatic coffee with a balanced taste and
              light fruity notes. Perfect for those who love smooth
              and refined flavors.
            </p>
          </div>

          {/* Item 2 */}
          <div className="max-w-sm animate-fadeUp [animation-delay:150ms]">
            <h3 className="text-lg font-medium text-white">
              Arabica 70% · Robusta 30%<br />Brazil & India
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              A strong blend with a rich body and pronounced bitterness.
              Ideal for espresso lovers who enjoy intensity.
            </p>
          </div>

          {/* Item 3 */}
          <div className="max-w-sm animate-fadeUp [animation-delay:300ms]">
            <h3 className="text-lg font-medium text-white">
              100% Arabica · Ethiopia
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Bright aroma with floral and citrus notes.
              A distinctive taste with a long, elegant aftertaste.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
