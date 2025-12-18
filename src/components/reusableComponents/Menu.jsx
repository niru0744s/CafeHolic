import { menuItems } from "../../data/componentData";
import Button from "../components/Button";

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
