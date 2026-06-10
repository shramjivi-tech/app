import { LEADERSHIP, TEAM_GROUPS, TESTIMONIALS } from "../data/mock";
import { Quote, UserRound, ChevronRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";

function Initials({ name }) {
  return name
    .split(" ")
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Leadership() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-4">Leadership</div>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#1a3812] leading-[1.04]">
              People who carry the legacy forward.
            </h1>
            <p className="mt-6 text-lg text-[#3d4441] leading-relaxed">
              Several trustees and senior members contribute across multiple entities within the
              Shramjivi ecosystem. Below are the principal governing members and the program
              team behind the current initiatives.
            </p>
          </Reveal>

          {/* Trustees */}
          <div className="mt-14">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-5">Trustees</div>
            </Reveal>
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerChildren={0.1}>
              {LEADERSHIP.map((l) => (
                <StaggerItem key={l.name}>
                  <div className="group bg-white rounded-3xl overflow-hidden ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <ImageSlot
                      src={l.image}
                      alt={l.name}
                      aspect="1/1"
                      rounded="rounded-none"
                      label="Portrait coming soon"
                    />
                    <div className="p-5">
                      <div className="font-serif-display text-xl text-[#1a3812]">{l.name}</div>
                      <div className="text-sm text-[#6d6357] mt-1">{l.role}</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Team Groups */}
          <div className="mt-20 space-y-14">
            {TEAM_GROUPS.map((group) => (
              <div key={group.label}>
                <Reveal>
                  <div className="flex items-end justify-between gap-4 mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a]">
                        {group.label}
                      </div>
                      <h3 className="font-serif-display text-2xl md:text-3xl text-[#1a3812] mt-1">
                        {group.members.length} member{group.members.length > 1 ? "s" : ""}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#ea8a2e]" />
                  </div>
                </Reveal>
                <Stagger
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
                  staggerChildren={0.04}
                >
                  {group.members.map((m) => (
                    <StaggerItem key={m.name}>
                      <div className="group bg-white rounded-2xl overflow-hidden ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                        <div className="relative aspect-square overflow-hidden">
                          <div
                            className="absolute inset-0 bg-[#f5ecd9]"
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(45deg, rgba(51,109,42,0.05) 0 8px, transparent 8px 16px)",
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-full bg-white/85 border border-[#ea8a2e]/30 flex items-center justify-center shadow-sm">
                                <UserRound className="w-6 h-6 text-[#ea8a2e]" />
                              </div>
                              <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-[#336d2a] text-white text-[10px] font-medium">
                                <Initials name={m.name} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3.5">
                          <div className="text-[13px] font-semibold text-[#1a3812] leading-tight truncate">
                            {m.name}
                          </div>
                          <div className="text-[11px] text-[#6d6357] mt-1 truncate">{m.role}</div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f3ecdc] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Testimonials</div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              In the words of partners and people we serve.
            </h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 gap-6" staggerChildren={0.12}>
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <article className="bg-white rounded-3xl p-7 md:p-8 ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/30 hover:-translate-y-1 transition-all duration-300 h-full">
                  <Quote className="w-7 h-7 text-[#ea8a2e]" />
                  <p className="mt-4 text-[17px] text-[#2d3431] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-4 pt-5 border-t border-[#f0e8d3]">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-[#ecf3e0]"
                    />
                    <div>
                      <div className="font-medium text-[#336d2a]">{t.name}</div>
                      <div className="text-sm text-[#6d6357]">{t.title}</div>
                    </div>
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
