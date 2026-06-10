import { LEADERSHIP, TEAM, TESTIMONIALS } from "../data/mock";
import { Quote } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="w-20 h-20 rounded-full bg-[#336d2a] text-[#faf6ef] flex items-center justify-center font-serif-display text-2xl">
      {initials}
    </div>
  );
}

export default function Leadership() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-4">Leadership</div>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#1a3812] leading-[1.04]">
              People who carry the legacy forward.
            </h1>
            <p className="mt-6 text-lg text-[#3d4441] leading-relaxed">
              Several trustees and senior members contribute across multiple entities within the
              Shramjivi ecosystem. Below are the principal governing members and key program
              leadership for the current initiatives.
            </p>
          </div>

          {/* Trustees */}
          <div className="mt-14">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-5">Trustees</div>
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerChildren={0.1}>
              {LEADERSHIP.map((l) => (
                <StaggerItem key={l.name}>
                  <div className="bg-white rounded-2xl p-6 ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/40 hover:-translate-y-1 transition-all duration-300 h-full">
                    <Avatar name={l.name} />
                    <div className="font-serif-display text-xl text-[#1a3812] mt-5">{l.name}</div>
                    <div className="text-sm text-[#6d6357] mt-1">{l.role}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Team */}
          <div className="mt-16">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-5">Our Team</div>
            <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" staggerChildren={0.04}>
              {TEAM.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="bg-white rounded-2xl p-5 ring-1 ring-[#e7e1d4] flex items-center gap-4 hover:ring-[#336d2a]/30 transition h-full">
                    <div className="w-12 h-12 rounded-full bg-[#ecf3e0] text-[#336d2a] flex items-center justify-center font-serif-display text-base shrink-0">
                      {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[15px] font-medium text-[#1a3812] truncate">{t.name}</div>
                      <div className="text-xs text-[#6d6357] truncate">{t.role}</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f3ecdc] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Testimonials</div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              In the words of partners and people we serve.
            </h2>
          </div>
          <Stagger className="grid md:grid-cols-2 gap-6" staggerChildren={0.12}>
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <article className="bg-white rounded-2xl p-8 ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/30 hover:-translate-y-1 transition-all duration-300 h-full">
                  <Quote className="w-7 h-7 text-[#ea8a2e]" />
                  <p className="mt-4 text-[17px] text-[#2d3431] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6">
                    <div className="font-medium text-[#336d2a]">{t.name}</div>
                    <div className="text-sm text-[#6d6357]">{t.title}</div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
