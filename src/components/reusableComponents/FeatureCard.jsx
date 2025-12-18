export default function FeatureCard({ title, description }) {
  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-black/70">{description}</p>
    </div>
  );
}
