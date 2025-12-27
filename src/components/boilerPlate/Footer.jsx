import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 scale-110 blur-sm"
        style={{
          backgroundImage: "url('/images/footer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div className="text-lg font-semibold">
            Cafe<span className="text-primary">Aura</span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm text-white/70">
            <span className="cursor-pointer hover:text-primary">About</span>
            <span className="cursor-pointer hover:text-primary">Menu</span>
            <span className="cursor-pointer hover:text-primary">Order Online</span>
            <span className="cursor-pointer hover:text-primary">Our Cafes</span>
          </nav>

          {/* Contact + socials */}
          <div className="flex items-center gap-5 text-white/80">
            <span className="flex items-center gap-2">
              <PhoneIcon fontSize="small" />
              +91 99999 99999
            </span>

            <div className="flex gap-3 text-primary">
              <InstagramIcon fontSize="small" className="cursor-pointer" />
              <FacebookIcon fontSize="small" className="cursor-pointer" />
              <WhatsAppIcon fontSize="small" className="cursor-pointer" />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/50">
          © Copyright 2025. Designed by CafeAura
        </div>

      </div>
    </footer >
  );
}
