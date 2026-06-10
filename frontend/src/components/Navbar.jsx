import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Heart, ChevronRight } from "lucide-react";
import Logo from "./Logo";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/leadership", label: "Leadership" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#faf6ef]/95 backdrop-blur-md border-b border-[#e7e1d4]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo height={64} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#336d2a]"
                      : "text-[#3d4441] hover:text-[#336d2a]"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#ea8a2e] rounded-full" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#336d2a] text-[#faf6ef] text-sm font-medium hover:bg-[#244e1d] transition-colors duration-300"
            >
              <Heart className="w-4 h-4" />
              Donate
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#336d2a] text-[#faf6ef]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out bg-[#faf6ef] border-b border-[#e7e1d4] ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg text-base ${
                  isActive
                    ? "bg-[#ecf3e0] text-[#336d2a] font-semibold"
                    : "text-[#3d4441]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/get-involved"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#336d2a] text-[#faf6ef] font-medium"
          >
            <Heart className="w-4 h-4" />
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
