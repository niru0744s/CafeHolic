export default function OnlineOrderSection() {
  return (
    <section className="relative bg-[#0f0f0f] py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,174,102,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-20 md:grid-cols-2">

          {/* LEFT: Text (entrance only) */}
          <div className="max-w-xl animate-fadeUp">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Order Online
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed">
              You can order your favorite coffee online and save your time.
              No need to wait in line — choose your drink and pick it up
              at your preferred time.
            </p>

            <p className="mt-4 text-white/60 leading-relaxed">
              Our loyalty system works without registration — only your
              phone number is required. Earn points and spend them on
              coffee or support charity initiatives.
            </p>

            <p className="mt-6 text-white font-medium">
              Always hot coffee and fresh bakery!
            </p>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative flex justify-center">

            {/* Decorative beans (slow drift) */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 flex gap-3 opacity-30 animate-drift">
              <span className="h-6 w-6 rounded-full border border-primary/40" />
              <span className="h-4 w-4 rounded-full border border-primary/40" />
              <span className="h-5 w-5 rounded-full border border-primary/40" />
            </div>

            {/* Circle container (float + hover parallax) */}
            <div
              className="group relative h-96 w-96 rounded-full overflow-hidden
              border border-white/10
              animate-floatSlow
              transition-transform duration-500
              hover:-translate-y-2"
            >
              <img
                src="/menu/cappuccino.png"
                alt="Online coffee order"
                className="h-full w-full object-cover
                transition-transform duration-700
                group-hover:scale-105"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
