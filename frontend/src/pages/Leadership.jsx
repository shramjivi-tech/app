import { LEADERSHIP, TEAM_GROUPS } from "../data/mock";
import { UserRound, ChevronRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import TestimonialCarousel from "../components/TestimonialCarousel";

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
          <div id="trustees" className="mt-14 scroll-mt-24">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-5">Trustees</div>
            </Reveal>
            <Stagger className="grid sm:grid-cols-4 lg:grid-cols-5 gap-4" staggerChildren={0.1}>
              {LEADERSHIP.map((l) => (
                <StaggerItem key={l.name}>
                  <div className="group bg-white rounded-3xl overflow-hidden ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="w-[70%] mx-auto pt-4">
  <ImageSlot
    src={l.image}
    alt={l.name}
    aspect="1/1"
    rounded="rounded-full"
    label="Portrait coming soon"
  />
</div>
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
            {TEAM_GROUPS.map((group) => {
              const groupId = group.label
                .toLowerCase()
                .replace(/&/g, "and")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              return (
              <div key={group.label} id={groupId} className="scroll-mt-24">
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
 <div className="w-[90%] mx-auto pt-3">
  <ImageSlot
    src={m.image}
    alt={m.name}
    aspect="1/1"
    rounded="rounded-full"
    label="Portrait coming soon"
  />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="bg-[#f3ecdc] py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-3xl mb-10">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Testimonials</div>
            <h2 className="font-serif-display text-2xl md:text-3xl text-[#1a3812] leading-tight">
              In the words of partners and people we serve.
            </h2>
          </Reveal>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
}
