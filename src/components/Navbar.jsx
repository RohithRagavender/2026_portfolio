import { useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur border-b border-rule">
      <nav className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#home" className="mono !text-sm !tracking-[0.2em] font-medium">
          ROHITH
        </a>
        <ul className="hidden md:flex gap-7">
          {items.map(([n, h]) => (
            <li key={n}>
              <a href={h} className="mono hover:text-signal transition">{n}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden bg-paper border-t border-rule px-5 py-3">
          {items.map(([n, h]) => (
            <li key={n}>
              <a href={h} onClick={() => setOpen(false)} className="mono block py-3 border-b border-rule last:border-0">
                {n}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
