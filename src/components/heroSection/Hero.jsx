export default function Hero() {
  return (
    <section className="bg-bg-wood pt-28 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">

        {/* Heading */}
        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          Freshly Roasted Coffee
          <span className="block text-primary">
            Crafted for True Coffee Lovers
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-sm text-white/80 md:text-base">
          Discover rich aromas, premium beans, and handcrafted blends made
          to energize your day and inspire your moments.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-xl bg-primary px-10 py-3 text-sm font-semibold text-black transition hover:opacity-90">
            Order Now
          </button>
        </div>

      </div>
    </section>
  );
}
