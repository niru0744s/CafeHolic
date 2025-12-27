import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import SpaIcon from "@mui/icons-material/Spa";
import LandscapeIcon from "@mui/icons-material/Landscape";


export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-#332423 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">

        {/* Title */}
        <h2 className="mb-12 text-3xl font-semibold md:text-4xl">
          Why Choose Us?
        </h2>

        {/* Items */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Item 1 */}
          <div className="flex gap-4">
            <LocalCafeIcon className="text-primary text-3xl shrink-0" />
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Handcrafted Coffee
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                Every cup is brewed by skilled baristas using carefully
                selected beans to ensure rich flavor and aroma.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4">
            <SpaIcon className="text-primary text-3xl shrink-0" />
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Premium Beans
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                We source high-quality beans from trusted farms to deliver
                consistent taste and freshness.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4">
            <LandscapeIcon className="text-primary text-3xl shrink-0" />
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Cozy Atmosphere
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                A warm and welcoming space designed for comfort,
                focus, and meaningful conversations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

