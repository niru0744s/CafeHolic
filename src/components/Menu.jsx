import { menuItems } from "../data/componentData";
import Button from "./reusableComponents/Button";

export default function Menu() {
  return (
    <section className="bg-[#f9f5f1] py-20 text-[#1f2933]">
      <div className="mx-auto max-w-7xl px-4">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Our Popular Menu
          </h2>
          <p className="mt-3 text-sm text-black/70 md:text-base">
            Explore our most loved coffee blends and handcrafted drinks.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {menuItems.map(item => (
  <div key={item.id} className="rounded-2xl bg-white p-6 shadow-sm">
    <div className="mb-4 h-40 rounded-xl bg-[#e7d3c1]" />
    <h3 className="text-lg font-semibold">{item.title}</h3>
    <p className="mt-2 text-sm text-black/70">{item.description}</p>
    <div className="mt-4 flex items-center justify-between">
      <span className="font-semibold">{item.price}</span>
      <Button className="px-4 py-2 text-sm">Order</Button>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  );
}
