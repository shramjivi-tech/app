import { Link } from "react-router-dom";
import { ArrowUpRight, Leaf, Layers, Network, MapPin, Landmark, Users2, Building2, Camera, Compass, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Timeline from "../components/Timeline";
import Counter from "../components/Counter";
import { MILESTONES, SITE, GALLERY, ECOSYSTEM_LEGACY, HISTORICAL_PHOTOS, FUTURE_SCOPE_DETAILED } from "../data/mock";

const LEGACY_ICONS = [Landmark, Building2, Users2];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-4">Our Story</div>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#1a3812] leading-[1.04]">
              Eight decades of being present where it mattered most.
            </h1>
          </div>
          <p className="lg:col-span-4 text-[16px] text-[#3d4441] leading-relaxed">
            Shramjivi is a historic institution established in 1940 in Surat — rooted in
            Gandhian principles of dignity of labour, self-reliance and social justice.
          </p>
        </div>
      </section>

      {/* Long-form story */}
      <section id="story" className="pb-20 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-6 text-[17px] text-[#2d3431] leading-[1.75]">
          <p>
            Founded by Late Shri Ishwarlal Gulabbhai Desai under the guidance of prominent
            leaders including Late Shri Morarji Desai, the institution began as a movement to
            uplift the working class — contributing significantly to the welfare of labour
            communities in South Gujarat.
          </p>
          <p>
            Over the decades, Shramjivi evolved into a comprehensive ecosystem comprising
            unions, cooperatives and charitable trusts — collectively safeguarding livelihoods,
            improving working conditions, and supporting workers and their families across
            textiles, transport, construction and informal labour.
          </p>
          <p>
            Recognising that the well-being of workers is deeply connected to their families,
            Shramjivi expanded to women and children. This led to the establishment of{" "}
            <span className="font-medium text-[#336d2a]">Shramjivi Mahila Kalyan Trust in 1994</span>
            , with a mission to empower women through counseling, legal support, livelihood
            opportunities, healthcare awareness and skill development.
          </p>
          <p>
            At the heart of this work is <span className="font-medium text-[#336d2a]">Shramjivi Sevalaya</span>
            — a community hub bringing together programs in health, education, skill
            development and social support under one roof. It stands as a symbol of trust,
            continuity and grassroots engagement.
          </p>
        </div>
      </section>

      {/* Mission ribbon */}
      <section className="bg-[#f3ecdc]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Our Mission</div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.08]">
              Empowering communities through dignity and opportunity.
            </h2>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Leaf, title: "Grounded", text: "Rooted in Gandhian values, dignity of labour and self-reliance." },
              { icon: Layers, title: "Integrated", text: "Health, livelihood and social support converging in one ecosystem." },
              { icon: Network, title: "Networked", text: "Working within government, public health and community systems." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 ring-1 ring-[#e7e1d4]">
                <Icon className="w-6 h-6 text-[#336d2a]" />
                <div className="mt-4 font-serif-display text-xl text-[#1a3812]">{title}</div>
                <p className="mt-2 text-sm text-[#3d4441] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="milestones" className="py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Milestones</div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              A timeline of continuity and care.
            </h2>
          </Reveal>
          <Timeline items={MILESTONES} />
        </div>
      </section>

      {/* Ecosystem Legacy - a story chapter */}
      <section id="ecosystem-legacy" className="py-20 md:py-28 bg-[#f3ecdc] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3 inline-flex items-center gap-2">
              <Landmark className="w-3.5 h-3.5" /> The Shramjivi Ecosystem &mdash; Legacy
            </div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              A constellation of trusts, unions and cooperatives.
            </h2>
            <p className="mt-5 text-[#3d4441] leading-relaxed text-[16px] md:text-[17px]">
              {ECOSYSTEM_LEGACY.intro}
            </p>
          </Reveal>

          {/* Three B&W historical photo placeholders */}
          <Stagger
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
            staggerChildren={0.12}
          >
            {HISTORICAL_PHOTOS.map((p, i) => (
              <StaggerItem key={i}>
                <figure className="group relative rounded-2xl overflow-hidden ring-1 ring-[#d6c8a8] bg-[#1a1a1a] aspect-[4/5]">
                  <img
                    src={p.image}
                    alt={p.caption}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    style={{
                      filter:
                        "grayscale(100%) sepia(45%) contrast(1.08) brightness(0.92)",
                    }}
                  />
                  {/* Vintage paper grain */}
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(120, 80, 40, 0.18) 1px, transparent 1.2px)",
                      backgroundSize: "3px 3px",
                    }}
                  />
                  {/* Top corner badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#faf6ef]/95 text-[10px] uppercase tracking-[0.22em] text-[#6e4a0a] font-medium">
                    <Camera className="w-3 h-3" /> Archive 0{i + 1}
                  </div>
                  {/* Bottom caption */}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-12 text-[12px] text-[#f5e9d0] leading-snug font-medium">
                    {p.caption}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Story chapters */}
          <div className="space-y-6">
            {ECOSYSTEM_LEGACY.groups.map((g, idx) => {
              const Icon = LEGACY_ICONS[idx % LEGACY_ICONS.length];
              return (
                <Reveal key={g.label}>
                  <div className="bg-white rounded-3xl ring-1 ring-[#e7e1d4] overflow-hidden">
                    <div className="grid md:grid-cols-12 gap-0">
                      <div className="md:col-span-4 bg-gradient-to-br from-[#336d2a] to-[#244e1d] text-[#faf6ef] p-7 md:p-9 relative overflow-hidden">
                        <motion.div
                          className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#ea8a2e]/25 blur-3xl"
                          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                          transition={{ duration: 8 + idx, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur flex items-center justify-center mb-5">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-[#f5b574]">
                            Chapter {idx + 1}
                          </div>
                          <div className="font-serif-display text-2xl md:text-[28px] leading-tight mt-2">
                            {g.label}
                          </div>
                          <div className="mt-5 text-xs text-[#cfd9c5]">
                            {g.items.length} organisations
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-8 p-7 md:p-9">
                        <Stagger
                          className="grid sm:grid-cols-2 gap-x-6 gap-y-3"
                          staggerChildren={0.04}
                        >
                          {g.items.map((it) => (
                            <StaggerItem key={it}>
                              <div className="flex gap-3 items-start group">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ea8a2e] shrink-0 group-hover:scale-150 transition-transform" />
                                <span className="text-[14.5px] text-[#2d3431] leading-snug">
                                  {it}
                                </span>
                              </div>
                            </StaggerItem>
                          ))}
                        </Stagger>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12 max-w-3xl mx-auto text-center">
            <p className="font-serif-display text-xl md:text-2xl text-[#1a3812] italic leading-relaxed">
              &ldquo;{ECOSYSTEM_LEGACY.outro}&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ecosystem - Current */}
      <section id="ecosystem-current" className="bg-[#1a3812] text-[#e8e2d3] py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#ea8a2e] mb-3">The Shramjivi Ecosystem &mdash; Current</div>
            <h2 className="font-serif-display text-4xl md:text-5xl leading-[1.05]">
              Current implementing &amp; emerging organizations.
            </h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" staggerChildren={0.08}>
            {[
              { title: "Shramjivi Mahila Kalyan Trust", text: "Women empowerment, counseling, HIV awareness, livelihood initiatives." },
              { title: "Harihar Thakor Smarak Trust", text: "Community outreach and HIV awareness initiatives." },
              { title: "Jigar Bal Kalyan Trust", text: "Child and community welfare initiatives." },
              { title: "Institute for Information Technology Trust", text: "Emerging digital and tech-focused initiatives for youth and community." },
            ].map((o) => (
              <StaggerItem key={o.title}>
                <div className="bg-[#244e1d] rounded-2xl p-6 ring-1 ring-[#3a5d33] hover:ring-[#ea8a2e]/40 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="font-serif-display text-xl text-white">{o.title}</div>
                  <p className="mt-3 text-[14px] text-[#cfd9c5] leading-relaxed">{o.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Future scope — final chapter of the story arc */}
      <section id="future" className="py-20 md:py-28 bg-[#faf6ef] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-3xl mb-14">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3 inline-flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" /> The Shramjivi Ecosystem &mdash; Future
            </div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              From legacy and current work, into what comes next.
            </h2>
            <p className="mt-5 text-[#3d4441] leading-relaxed text-[16px] md:text-[17px]">
              The next chapter of Shramjivi&rsquo;s story builds on the same model that has
              worked for decades &mdash; existing infrastructure, peer leadership, and
              partnerships with government systems &mdash; expanding into digital inclusion,
              child safety, and new HIV-prevention frontiers.
            </p>
          </Reveal>

          <div className="space-y-10">
            {FUTURE_SCOPE_DETAILED.map((p, idx) => (
              <Reveal key={p.title}>
                <article className="bg-white rounded-3xl overflow-hidden ring-1 ring-[#e7e1d4] grid md:grid-cols-12 gap-0">
                  <div className={`relative md:col-span-5 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="relative h-56 md:h-full min-h-[300px] overflow-hidden">
                      <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3812]/55 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ea8a2e] text-white text-[11px] font-medium tracking-wide">
                        {p.horizon}
                      </div>
                    </div>
                  </div>
                  <div className={`md:col-span-7 p-7 md:p-9 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e4a0a]">
                      Initiative {idx + 1} &middot; {p.durationLine}
                    </div>
                    <h3 className="font-serif-display text-2xl md:text-[30px] text-[#1a3812] mt-2 leading-tight">
                      {p.title}
                    </h3>
                    <div className="mt-1 text-[14px] text-[#336d2a] font-medium">{p.tagline}</div>
                    <p className="mt-4 text-[14.5px] text-[#3d4441] leading-relaxed">{p.body}</p>
                    <div className="mt-5 grid grid-cols-3 gap-3 bg-[#faf6ef] rounded-2xl p-4 border border-[#f0e8d3]">
                      {p.impact.map((it) => (
                        <div key={it.label}>
                          <div className="font-serif-display text-xl md:text-[22px] text-[#336d2a] leading-tight">
                            <Counter value={it.value} />
                          </div>
                          <div className="text-[10px] text-[#6d6357] mt-1 leading-snug">{it.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#336d2a] text-[#faf6ef] font-medium hover:bg-[#244e1d] transition-colors duration-300"
            >
              Help unlock the next chapter <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Gallery strip */}
      <section id="field" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between mb-6">
            <h3 className="font-serif-display text-3xl text-[#1a3812]">From the field</h3>
            <Link to="/impact" className="text-[#336d2a] hover:text-[#ea8a2e] text-sm font-medium inline-flex items-center gap-1">
              See impact <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.slice(0, 8).map((url, i) => (
              <div key={i} className="aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-[#e7e1d4]">
                <img src={url} alt="Field work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location footer block */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <div className="rounded-2xl border border-[#e7e1d4] p-8 flex flex-col md:flex-row md:items-center gap-6">
          <MapPin className="w-8 h-8 text-[#ea8a2e]" />
          <div className="flex-1">
            <div className="font-serif-display text-2xl text-[#1a3812]">Visit Shramjivi Sevalaya</div>
            <p className="text-[#3d4441] mt-1">{SITE.address}</p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-3 rounded-full bg-[#336d2a] text-[#faf6ef] font-medium hover:bg-[#244e1d] transition"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
