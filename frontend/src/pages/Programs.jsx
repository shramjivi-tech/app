import { useState } from "react";
import { ArrowUpRight, CheckCircle2, HeartPulse, Users, Scissors, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Counter from "../components/Counter";
import { FOCUS_AREAS, HEALTH_IMPACT, WOMEN_IMPACT, LIVELIHOOD_IMPACT, LEGACY_PROGRAMS } from "../data/mock";

const ICONS = { HeartPulse, Users, Scissors };

const SERVICES = {
  health: [
    "STI management and free treatment (NACO guidelines)",
    "Behaviour Change Communication (BCC) and IEC activities",
    "Community mobilization through Peer Educators",
    "Regular clinical services and follow-ups",
    "Referral linkages to ICTC, ART centres, TB and other government services",
    "Counseling and HIV testing (ICTC / CBS)",
    "Advocacy with stakeholders and community leaders",
    "Street plays, awareness campaigns and demand generation",
    "Crisis management and support services",
  ],
  women: [
    "Personal counseling and emotional support",
    "Intervention services in crisis situations",
    "Conflict resolution and family stability",
    "Women-related case support",
    "Referral support (legal, police, welfare services)",
    "Continuous follow-up through field engagement",
  ],
  livelihood: [
    "Introduction to sewing machine and hand stitching",
    "Measurement and cutting",
    "Garment making (kurti, salwar, petticoat)",
    "Finishing and design / fancy work",
    "Certification on successful completion",
    "Most students start earning before completing training",
  ],
};

const IMPACT_DATA = {
  health: { groups: [
    { label: "Migrant Program", items: HEALTH_IMPACT.migrant },
    { label: "MSM Program", items: HEALTH_IMPACT.msm },
  ]},
  women: { groups: [{ label: "Both Centers (Mar 2025 – Feb 2026)", items: WOMEN_IMPACT }] },
  livelihood: { groups: [{ label: "Sewing Program", items: LIVELIHOOD_IMPACT }] },
};

export default function Programs() {
  const [active, setActive] = useState("health");
  const current = FOCUS_AREAS.find((f) => f.id === active);
  const Icon = ICONS[current.icon];

  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-4">Programs</div>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#1a3812] leading-[1.04]">
              Three integrated programs.{" "}
              <span className="italic deco-underline">One mission.</span>
            </h1>
            <p className="mt-6 text-lg text-[#3d4441] leading-relaxed">
              We work within existing government and public health systems — leveraging
              community trust to ensure both reach and sustainability.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-12 flex flex-wrap gap-2">
            {FOCUS_AREAS.map((f) => {
              const I = ICONS[f.icon];
              const isActive = active === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-[#336d2a] text-[#faf6ef]"
                      : "bg-white text-[#336d2a] ring-1 ring-[#e7e1d4] hover:bg-[#ecf3e0]"
                  }`}
                >
                  <I className="w-4 h-4" />
                  {f.title}
                </button>
              );
            })}
          </div>

          {/* Active program */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-12 grid lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden ring-1 ring-[#e7e1d4]">
                  <motion.img
                    key={current.image}
                    src={current.image}
                    alt={current.title}
                    className="w-full h-[380px] md:h-[460px] object-cover"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-[#336d2a] text-[#faf6ef] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">
                    {current.subtitle}
                  </div>
                </div>
                <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.08]">
                  {current.title}
                </h2>
                <p className="mt-5 text-[16px] text-[#3d4441] leading-relaxed">
                  {current.description}
                </p>
                <ul className="mt-7 space-y-3">
                  {SERVICES[active].map((s, i) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                      className="flex gap-3 text-[15px] text-[#2d3431]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#ea8a2e] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Impact data */}
          <div className="mt-16">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-4">Key Highlights 2025&ndash;26</div>
            <div className="grid lg:grid-cols-2 gap-6">
              <AnimatePresence mode="wait">
                {IMPACT_DATA[active].groups.map((g, gi) => (
                  <motion.div
                    key={`${active}-${g.label}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: gi * 0.08 }}
                    className="bg-white rounded-3xl p-7 ring-1 ring-[#e7e1d4]"
                  >
                    <div className="font-serif-display text-xl text-[#1a3812] mb-5">{g.label}</div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                      {g.items.map((it) => (
                        <div key={it.label}>
                          <div className="font-serif-display text-2xl text-[#336d2a]">
                            <Counter value={it.value} />
                          </div>
                          <div className="text-xs text-[#6d6357] leading-snug mt-1">{it.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy programs */}
      <section className="bg-[#f3ecdc] py-20 md:py-28 mt-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Legacy Programs</div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              Initiatives that shaped our journey.
            </h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-6" staggerChildren={0.1}>
            {LEGACY_PROGRAMS.map((p) => (
              <StaggerItem key={p.title}>
                <article className="bg-white rounded-2xl overflow-hidden ring-1 ring-[#e7e1d4] hover:-translate-y-1 hover:ring-[#336d2a]/30 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3812]/40 to-transparent" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 text-[10px] uppercase tracking-[0.18em] text-[#6e4a0a] font-medium">
                      {p.period}
                    </div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <BookOpen className="w-6 h-6 text-[#ea8a2e]" />
                    <h3 className="font-serif-display text-2xl text-[#1a3812] mt-3">{p.title}</h3>
                    <p className="mt-3 text-[15px] text-[#3d4441] leading-relaxed">{p.body}</p>
                    <div className="mt-auto pt-5 text-sm font-medium text-[#336d2a]">{p.highlight}</div>
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
