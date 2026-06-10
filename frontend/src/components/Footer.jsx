import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Globe, Heart, ArrowUpRight, Phone } from "lucide-react";
import { SITE, LOGO_URL } from "../data/mock";

export default function Footer() {
  return (
    <footer className="bg-[#1a3812] text-[#e8e2d3] mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="mb-6">
              <img
                src={LOGO_URL}
                alt="Shramjivi"
                className="h-20 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-[15px] leading-relaxed text-[#cfc8b8] max-w-md">
              Rooted in legacy since 1940. We work alongside women, children and vulnerable
              communities across South Gujarat—grounded in dignity, opportunity and trust.
            </p>
            <Link
              to="/get-involved"
              className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ea8a2e] text-white text-sm font-medium hover:bg-[#c97719] transition-colors duration-300"
            >
              <Heart className="w-4 h-4" /> Support our work
            </Link>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#a8a094] mb-4">Explore</div>
            <ul className="space-y-2.5">
              {[
                ["/about", "About"],
                ["/programs", "Programs"],
                ["/impact", "Impact"],
                ["/leadership", "Leadership"],
                ["/get-involved", "Get Involved"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[15px] text-[#e8e2d3] hover:text-[#ea8a2e] transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#a8a094] mb-4">Reach us</div>
            <ul className="space-y-3 text-[15px] text-[#cfc8b8]">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[#ea8a2e] shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-1 text-[#ea8a2e] shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-1 text-[#ea8a2e] shrink-0" />
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="w-4 h-4 mt-1 text-[#ea8a2e] shrink-0" />
                <span>{SITE.website}</span>
              </li>
              <li className="flex gap-3">
                <Instagram className="w-4 h-4 mt-1 text-[#ea8a2e] shrink-0" />
                <span>{SITE.instagram}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#234540] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-[#a8a094]">
            © {new Date().getFullYear()} Shramjivi Mahila Kalyan Trust. All rights reserved.
          </div>
          <div className="text-xs text-[#a8a094] flex items-center gap-2">
            Donations eligible for 80G tax exemption
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
