import { useEffect, useState } from "react";
import { navLinks } from "../../data/componentData";
import Button from "../../components/reusableComponents/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active link tracking */
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href));
    const onScroll = () => {
      const pos = window.scrollY + 120;
      sections.forEach(sec => {
        if (
          sec &&
          pos >= sec.offsetTop &&
          pos < sec.offsetTop + sec.offsetHeight
        ) {
          setActive(`#${sec.id}`);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${scrolled ? "bg-bg-wood/95 backdrop-blur shadow-lg" : "bg-bg-wood/60 backdrop-blur"}
        `}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-white">
          
          {/* Logo */}
          <div className="text-xl font-semibold tracking-wide">
            Cafe<span className="text-primary">Aura</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {navLinks.map(link => (
              <li
                key={link.id}
                onClick={() => scrollTo(link.href)}
                className={`relative cursor-pointer transition
                ${active === link.href ? "text-primary" : "hover:text-primary"}
                `}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300
                  ${active === link.href ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5">
            <span className="text-sm opacity-80">+91 99999 99999</span>
            <Button className="px-5 py-2 text-sm">Order</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <Drawer
  anchor="right"
  open={open}
  onClose={() => setOpen(false)}
  transitionDuration={350}
  PaperProps={{
    sx: {
      backgroundColor: "rgba(18, 12, 8, 0.65)", // dark transparent
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)", // Safari support
      width: 280,
      color: "#fff",
      boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
    },
  }}
>
  {/* Header */}
  <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
    <span className="text-lg font-semibold tracking-wide">
      Cafe<span className="text-primary">Aura</span>
    </span>

    {/* Close Button */}
    <IconButton onClick={() => setOpen(false)}>
  <CloseIcon sx={{ color: "#fff" }} />
</IconButton>
  </div>

  {/* Links */}
  <ul className="flex flex-col gap-6 px-6 py-8 text-sm tracking-wide">
    {navLinks.map((link) => (
      <li
        key={link.id}
        onClick={() => scrollTo(link.href)}
        className="cursor-pointer transition-all duration-300 hover:text-primary hover:translate-x-1"
      >
        {link.label}
      </li>
    ))}
  </ul>

  {/* CTA */}
  <div className="mt-auto px-6 pb-6">
    <Button className="w-full">Order Now</Button>
  </div>
</Drawer>
    </>
  );
}
