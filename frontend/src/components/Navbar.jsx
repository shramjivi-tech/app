import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ChevronDown, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { NAV_SECTIONS } from "../data/mock";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openIdx, setOpenIdx] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenIdx(null);
    setMobileExpanded(null);
  }, [location.pathname, location.hash]);

  const openMenu = (i) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIdx(i);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenIdx(null), 180);
  };

  const handleSectionClick = (e, to, hash) => {
    e.preventDefault();
    setOpenIdx(null);
    setMobileOpen(false);
    if (location.pathname === to) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(`${to}#${hash}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf6ef]/95 backdrop-blur-md border-b border-[#e7e1d4]"
          : "bg-[#faf6ef]/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <Logo height={64} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" onMouseLeave={scheduleClose}>
            {NAV_SECTIONS.map((item, idx) => {
              const isActive = location.pathname === item.to;
              const hasSections = item.sections && item.sections.length > 0;
              return (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => hasSections && openMenu(idx)}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive: a }) =>
                      `relative inline-flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium transition-colors duration-200 ${
                        a || isActive
                          ? "text-[#336d2a]"
                          : "text-[#3d4441] hover:text-[#336d2a]"
                      }`
                    }
                  >
                    {item.label}
                    {hasSections && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          openIdx === idx ? "rotate-180 text-[#ea8a2e]" : ""
                        }`}
                      />
                    )}
                    {isActive && (
                      <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-[#ea8a2e] rounded-full" />
                    )}
                  </NavLink>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#336d2a] text-[#faf6ef] text-sm font-medium hover:bg-[#244e1d] transition-colors duration-300"
            >
              <Heart className="w-4 h-4" /> Donate
            </Link>
          </div>

          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-[#336d2a] text-[#faf6ef]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop dropdown panel */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
            className="hidden lg:block absolute left-0 right-0 top-full bg-[#faf6ef] border-t border-[#e7e1d4] shadow-[0_20px_40px_-20px_rgba(26,56,18,0.18)]"
            onMouseEnter={() => openMenu(openIdx)}
            onMouseLeave={scheduleClose}
          >
            <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
              <DropdownPanel item={NAV_SECTIONS[openIdx]} onClick={handleSectionClick} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#faf6ef] border-t border-[#e7e1d4]"
          >
            <div className="px-5 py-4 space-y-1.5 max-h-[75vh] overflow-y-auto">
              {NAV_SECTIONS.map((item, idx) => {
                const hasSections = item.sections && item.sections.length > 0;
                const expanded = mobileExpanded === idx;
                return (
                  <div key={item.to} className="border border-[#eee5d3] rounded-2xl overflow-hidden">
                    <div className="flex items-center">
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                          `flex-1 px-4 py-3 text-[15px] font-semibold ${
                            isActive ? "text-[#336d2a]" : "text-[#1a3812]"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                      {hasSections && (
                        <button
                          onClick={() => setMobileExpanded(expanded ? null : idx)}
                          className="px-4 py-3"
                          aria-label="Toggle sections"
                        >
                          <ChevronDown
                            className={`w-4 h-4 text-[#6e4a0a] transition-transform duration-300 ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {expanded && hasSections && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-[#f3ecdc]"
                        >
                          <ul className="py-2">
                            {item.sections.map((s) => (
                              <li key={s.hash}>
                                <a
                                  href={`${item.to}#${s.hash}`}
                                  onClick={(e) => handleSectionClick(e, item.to, s.hash)}
                                  className="flex items-start gap-3 px-4 py-2.5 hover:bg-[#ecf3e0] transition-colors"
                                >
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ea8a2e] shrink-0" />
                                  <span>
                                    <span className="block text-[14px] font-medium text-[#1a3812]">
                                      {s.title}
                                    </span>
                                    <span className="block text-[12px] text-[#6d6357]">{s.desc}</span>
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <Link
                to="/get-involved"
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#336d2a] text-[#faf6ef] font-medium w-full"
              >
                <Heart className="w-4 h-4" /> Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DropdownPanel({ item, onClick }) {
  const cols = item.sections.length > 4 ? 3 : 2;
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-3">
        <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e4a0a]">{item.label}</div>
        <div className="font-serif-display text-2xl text-[#1a3812] mt-1 leading-tight">
          Jump to a section
        </div>
        <Link
          to={item.to}
          className="mt-4 inline-flex items-center gap-1 text-sm text-[#336d2a] font-medium hover:text-[#ea8a2e]"
        >
          Open full page <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div
        className={`lg:col-span-9 grid gap-2 ${
          cols === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {item.sections.map((s, i) => (
          <motion.a
            key={s.hash}
            href={`${item.to}#${s.hash}`}
            onClick={(e) => onClick(e, item.to, s.hash)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#ecf3e0] transition-colors"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ea8a2e] shrink-0 group-hover:scale-150 transition-transform" />
            <span>
              <span className="block text-[14px] font-semibold text-[#1a3812] group-hover:text-[#336d2a]">
                {s.title}
              </span>
              <span className="block text-[12px] text-[#6d6357] mt-0.5">{s.desc}</span>
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
