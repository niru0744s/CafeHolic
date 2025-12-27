import heroBg from "../../assets/hero/hero-bg.jpg";
import heroCup from "../../assets/hero/hero-cup.png";
import Button from "../reusableComponents/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Cafe background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-24 md:pt-28 md:grid-cols-2">


        {/* Left Content */}
        <div className="text-white animate-[fadeUp_0.8s_ease-out_forwards]">
          <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
            Fueled by Energy.
            <br />
            Inspired by Coffee.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
            Experience handcrafted coffee made from carefully selected beans,
            brewed to perfection to energize your moments.
          </p>

          <div className="mt-8 flex items-center gap-4 animate-[fadeUp_1.1s_ease-out_forwards]">
            <Button className="px-7 py-3 text-sm text-primary">
              Order Now
            </Button>
            <span className="text-sm text-white/70">
              Fresh brews · Premium beans
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden md:flex justify-center">
          <img
            src={heroCup}
            alt="Coffee cup"
            className="w-[40rem] animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
