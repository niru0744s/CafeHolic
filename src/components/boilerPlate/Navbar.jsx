import { useState } from "react";
import { navLinks } from "../../data/componentData";
import Button from "../../components/reusableComponents/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-bg-wood/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-white"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          Cafe<span className="text-primary">Aura</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer transition hover:text-primary"
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="text-sm opacity-80">+91 99999 99999</span>
          <Button className="px-5 py-2 text-sm">Order</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-bg-wood px-4 pb-6 pt-4 text-white md:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>{link.label}</li>
            ))}
          </ul>

          <Button className="mt-6 w-full">Order Now</Button>
        </div>
      )}
    </header>
  );
}
