import { useState, useEffect } from "react";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: FolderGit2, href: "#projects" },
  { name: "Skills", icon: Code2, href: "#skill" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* BLUR BACKDROP (comes on scroll) */}
     <div
  className={`
    hidden md:block
    fixed top-3 left-1/2 -translate-x-1/2
    h-16 w-[90%] max-w-3xl
    rounded-full
    bg-black/40 backdrop-blur-xl
    border border-indigo-500/30
    shadow-[0_0_30px_rgba(99,102,241,0.5)]
    transition-all duration-300
    z-30
    ${scrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"}
  `}
 />


      {/* DESKTOP NAVBAR CONTENT */}
      <nav className="fixed top-3 w-full z-40 hidden md:flex justify-center">
        <div className="flex items-center gap-9 px-6 py-3">
          {navItems.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              className="
                flex items-center gap-2 px-4 py-2 rounded-full
                text-sm text-gray-300
                hover:text-white
                hover:shadow-[0_0_20px_#6366f1]
                transition
              "
            >
              <Icon size={18} />
              {name}
            </a>
          ))}
        </div>
      </nav>

      {/* MOBILE HAMBURGER */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed top-4 right-4 z-50 md:hidden
          bg-black/50 backdrop-blur-xl
          border border-indigo-500/40
          rounded-full p-3
          text-white text-xl
          shadow-[0_0_20px_rgba(99,102,241,0.6)]
        "
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            fixed top-16 right-4 z-40 md:hidden
            bg-black/60 backdrop-blur-xl
            border border-indigo-500/40
            rounded-2xl px-6 py-5
            shadow-[0_0_30px_rgba(99,102,241,0.6)]
          "
        >
          <div className="flex flex-col gap-4">
            {navItems.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <Icon size={18} />
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
