import { Quote, TrendingUp, Users, HeartPulse, Scissors, Award } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Counter from "../components/Counter";
import {
  HEALTH_IMPACT,
  WOMEN_IMPACT,
  LIVELIHOOD_IMPACT,
  IMPACT_STORIES,
  GALLERY,
  AWARDS,
} from "../data/mock";

const HEADLINE_NUMBERS = [
  { value: "58,000+", label: "Lives impacted via HIV TI programs", icon: HeartPulse },
  { value: "3,260+", label: "Women reached through counseling", icon: Users },
  { value: "2,000+", label: "Women trained in livelihood skills", icon: Scissors },
  { value: "242", label: "Health camps conducted in 2025–26", icon: TrendingUp },
];

export default function Impact() {
  return (
    <div>
      <section id="numbers" className="py-16 md:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-4">Impact 2025–26</div>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#1a3812] leading-[1.04]">
              Numbers grounded in lives, trust and continuity.
            </h1>
            <p className="mt-6 text-lg text-[#3d4441] leading-relaxed">
              Every metric on this page represents a person reached, a service delivered or a
              moment of dignity restored.
            </p>
          </div>

          {/* Headline numbers */}
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerChildren={0.1}>
            {HEADLINE_NUMBERS.map((n) => (
              <StaggerItem key={n.label}>
                <div className="bg-white rounded-2xl p-7 ring-1 ring-[#e7e1d4] hover:-translate-y-1 hover:ring-[#336d2a]/30 transition-all duration-300 h-full">
                  <n.icon className="w-6 h-6 text-[#ea8a2e]" />
                  <div className="font-serif-display text-5xl text-[#336d2a] mt-5">
                    <Counter value={n.value} />
                  </div>
                  <div className="text-sm text-[#6d6357] mt-2 leading-snug">{n.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Detailed grids */}
      <section id="details" className="pb-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-12">
          <ImpactBlock
            title="Health & Well-Being"
            subtitle="Targeted Intervention — Migrant Program"
            badge="56,150 migrants reached via IPC"
            items={HEALTH_IMPACT.migrant}
          />
          <ImpactBlock
            title="Health & Well-Being"
            subtitle="Targeted Intervention — MSM Program"
            badge="1,354+ active HRG population"
            items={HEALTH_IMPACT.msm}
          />
          <ImpactBlock
            title="Women Empowerment & Support"
            subtitle="Counseling & Legal Support — Both Centers"
            badge="3,260+ women reached in 2025–26"
            items={WOMEN_IMPACT}
          />
          <ImpactBlock
            title="Livelihood & Skill Development"
            subtitle="Sewing Training Program"
            badge="2,000+ enrolled since inception"
            items={LIVELIHOOD_IMPACT}
          />
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" /> Awards &amp; Recognition
              </div>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
                Celebrated for sustained, grounded community work.
              </h2>
            </div>
            <p className="text-sm text-[#6d6357] max-w-xs">
              A growing wall of moments that honour 85+ years of consistent service.
            </p>
          </Reveal>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerChildren={0.1}>
            {AWARDS.map((a) => (
              <StaggerItem key={a.title}>
                <article className="group bg-white rounded-2xl overflow-hidden ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/30 hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1100ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3812]/65 via-[#1a3812]/10 to-transparent" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ea8a2e] text-white text-[11px] font-medium">
                      <Award className="w-3 h-3" /> {a.year}
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="font-serif-display text-xl text-[#1a3812]">{a.title}</h3>
                    <p className="mt-3 text-[14px] text-[#3d4441] leading-relaxed">{a.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="bg-[#f3ecdc] py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Stories of Impact</div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              Behind every number is a name.
            </h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerChildren={0.08}>
            {IMPACT_STORIES.map((s) => (
              <StaggerItem key={s.name}>
                <article className="group bg-white rounded-2xl p-5 ring-1 ring-[#e7e1d4] hover:-translate-y-1 hover:ring-[#336d2a]/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden ring-2 ring-[#ecf3e0] shrink-0">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms]"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#6e4a0a] font-medium">
                        {s.program}
                      </div>
                      <h3 className="font-serif-display text-[19px] mt-1 text-[#1a3812] leading-tight">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-[#ea8a2e] mt-5" />
                  <p className="mt-2 text-[14px] text-[#3d4441] leading-relaxed flex-1">
                    {s.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#f0e8d3] text-[13px] text-[#336d2a] font-medium">
                    &mdash; {s.name}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Coverage map (visual list) */}
      <section id="coverage" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Operational Footprint</div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              Where we work across Surat.
            </h2>
            <p className="mt-5 text-[#3d4441] leading-relaxed">
              Migrant and high-risk populations often remain underserved due to mobility,
              stigma and limited access. Our presence spans industrial zones and dense urban
              neighbourhoods.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              {[
                "Industrial Zones", "LH Road", "Sahara Darwaja", "Dumbhal", "Parvat",
                "Kadodara", "Limbayat", "Godadara", "Pandesara", "Dindoli", "Udhana",
                "Ganeshpura", "Kosad", "Amroli", "Ved Road", "Chhaprabhatha", "Katargam",
                "Lal Darwaja", "Delhi Gate", "Mithi Khadi",
              ].map((loc) => (
                <span
                  key={loc}
                  className="px-4 py-2 rounded-full bg-white ring-1 ring-[#e7e1d4] text-sm text-[#1a3812] hover:bg-[#336d2a] hover:text-[#faf6ef] hover:ring-[#336d2a] transition-colors duration-200"
                >
                  {loc}
                </span>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {GALLERY.slice(0, 3).map((url, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#e7e1d4]">
                  <img src={url} alt="Field" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ImpactBlock({ title, subtitle, badge, items }) {
  return (
    <Reveal>
      <div className="bg-white rounded-3xl p-7 md:p-10 ring-1 ring-[#e7e1d4]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">{title}</div>
            <h3 className="font-serif-display text-3xl text-[#1a3812] mt-1">{subtitle}</h3>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#336d2a] text-[#faf6ef] text-xs font-medium">
            {badge}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((it) => (
            <div key={it.label}>
              <div className="font-serif-display text-3xl text-[#336d2a]">
                <Counter value={it.value} />
              </div>
              <div className="text-xs text-[#6d6357] mt-1 leading-snug">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
