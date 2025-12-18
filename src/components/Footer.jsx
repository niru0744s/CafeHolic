export default function Footer() {
  return (
    <footer className="bg-bg-wood text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">

        {/* Top Footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">
              Cafe<span className="text-primary">Aura</span>
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Serving freshly brewed coffee crafted with passion, quality,
              and a love for great taste.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="hover:text-white transition cursor-pointer">Home</li>
              <li className="hover:text-white transition cursor-pointer">Menu</li>
              <li className="hover:text-white transition cursor-pointer">About</li>
              <li className="hover:text-white transition cursor-pointer">Blog</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>123 Coffee Street, Brew City</li>
              <li>+91 99999 99999</li>
              <li>hello@cafeaura.com</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} CafeAura. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
