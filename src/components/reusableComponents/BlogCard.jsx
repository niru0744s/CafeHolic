export default function BlogCard({ title, excerpt }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#f9f5f1] shadow-sm">
      <div className="h-44 bg-[#e7d3c1]" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-3 text-sm text-black/70">{excerpt}</p>
        <button className="mt-4 text-sm font-semibold text-primary hover:underline">
          Read More
        </button>
      </div>
    </div>
  );
}
