export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
