import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function MenuCard({ item }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden
      transition-all duration-500 ease-out
      hover:-translate-y-3
      animate-fadeUp"
    >
      {/* Card Background */}
      <div
        className="relative h-full rounded-2xl
        bg-gradient-to-b from-[#2a1a10] to-[#120c08]
        border border-white/10
        shadow-[0_20px_40px_rgba(0,0,0,0.6)]
        transition-all duration-500
        group-hover:shadow-[0_35px_70px_rgba(0,0,0,0.8)]"
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0
          bg-[radial-gradient(circle_at_top,rgba(255,174,102,0.12),transparent_60%)]
          transition-opacity duration-500
          group-hover:opacity-100"
        />

        {/* Like */}
        <button
          className="absolute top-4 left-4 z-10
          text-white/60 transition
          hover:text-primary hover:scale-110"
        >
          <FavoriteBorderIcon fontSize="small" />
        </button>

        {/* Cup Image */}
        <div className="relative flex justify-center pt-8">
          <img
            src={item.image}
            alt={item.name}
            className="w-44
            drop-shadow-[0_25px_30px_rgba(0,0,0,0.7)]
            transition-all duration-500 ease-out
            group-hover:-translate-y-2 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="relative px-5 pb-5 pt-4 text-left">
          <h3
            className="text-lg font-medium
            transition-colors duration-300
            group-hover:text-primary"
          >
            {item.name}
          </h3>

          <p className="mt-1 text-sm text-white/60">
            {item.description}
          </p>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-white/80">
              {item.price}
            </span>

            <button
              className="flex items-center gap-2 rounded-full
              bg-primary px-4 py-1.5 text-sm text-black
              transition-all duration-300 ease-out
              hover:brightness-110 hover:scale-105
              active:scale-95"
            >
              <ShoppingCartIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
