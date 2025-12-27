import { menuItems } from "../data/componentData";
import MenuCard from "./reusableComponents/MenuCard";

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative bg-[#120c08] text-white overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,174,102,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-semibold tracking-wide">
            Our Menu
          </h2>

          <div className="flex gap-8 text-sm text-white/60">
            <button className="text-primary">Classic</button>
            <button className="hover:text-primary transition">Signature</button>
            <button className="hover:text-primary transition">Bakery</button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
  {menuItems.map(item => (
    <MenuCard key={item.id} item={item} />
  ))}
</div>


      </div>
    </section>
  );
}
