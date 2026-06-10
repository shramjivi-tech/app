import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Users,
  Scissors,
  Sparkles,
  Quote,
  Hand,
  PenLine,
} from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Counter from "../components/Counter";
import TestimonialCarousel from "../components/TestimonialCarousel";
import PartnersCarousel from "../components/PartnersCarousel";
import {
  HERO_STATS,
  FOCUS_AREAS,
  HERO_ILLUSTRATION,
  IMPACT_STORIES,
  SITE,
  WELCOME_MESSAGE,
} from "../data/mock";

const ICONS = { HeartPulse, Users, Scissors };

export default function Home() {
  return (
    <div>
      {/* HERO — illustration as horizontal background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1f4a16] via-[#2a5a1f] to-[#1a3812]">
        {/* Animated glow blobs */}
        <motion.div
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#ea8a2e]/25 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#4a9b3d]/30 blur-3xl pointer-events-none"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Women illustration as horizontal background, anchored bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[58%] overflow-hidden pointer-events-none">
          <motion.img
            src={HERO_ILLUSTRATION}
            alt=""
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 w-[120%] max-w-none left-1/2 -translate-x-1/2 object-cover object-bottom"
            style={{ mixBlendMode: "screen", opacity: 0.85 }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 0.85 }}
            transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
          />
          {/* Smoothly fade illustration into hero background at the top edge */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#1f4a16] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-[42vh] md:pb-[44vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-[#fde6c8] text-xs font-medium tracking-wide ring-1 ring-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              Annual Report 2025&ndash;26 &mdash; Out now
            </div>
            <h1 className="font-serif-display text-5xl md:text-7xl lg:text-[88px] leading-[1.02] mt-7 text-[#fdf6e8] tracking-tight">
              Community change begins with{" "}
              <span className="italic text-[#f5b574]">dignity</span>,<br className="hidden md:block" />
              opportunity and <span className="italic text-[#f5b574]">trust</span>.
            </h1>
            <p className="mt-7 mx-auto max-w-2xl text-[17px] md:text-lg text-[#dde6d3] leading-relaxed">
              Serving Surat&rsquo;s women, workers and vulnerable communities without
              interruption since {SITE.estd} &mdash; through independence, partition,
              floods and a pandemic.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ea8a2e] text-white font-medium hover:bg-[#c97719] transition-colors duration-300"
              >
                Support our work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white hover:text-[#1a3812] transition-colors duration-300"
              >
                Explore Programs <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 md:py-16 bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Stagger
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e7e1d4] rounded-2xl overflow-hidden border border-[#e7e1d4]"
            staggerChildren={0.12}
          >
            {HERO_STATS.map((s) => (
              <StaggerItem key={s.label} className="bg-[#faf6ef] p-6 md:p-8">
                <div className="font-serif-display text-4xl md:text-5xl text-[#336d2a]">
                  <Counter value={s.value} />
                </div>
                <div className="mt-2 text-sm text-[#6d6357] leading-snug">{s.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Welcome Message */}
      <section id="welcome" className="py-20 md:py-28 bg-[#f3ecdc] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#6e4a0a]">
              <PenLine className="w-3.5 h-3.5" /> {WELCOME_MESSAGE.title}
            </div>
            <h2 className="mt-3 font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.08]">
              From sustained service to <span className="italic">scalable impact</span>.
            </h2>
          </Reveal>
          <Stagger
            className="space-y-5 text-[17px] md:text-[18px] text-[#2d3431] leading-[1.8] max-w-3xl mx-auto"
            staggerChildren={0.1}
          >
            {WELCOME_MESSAGE.paragraphs.map((p, i) => (
              <StaggerItem key={i}>
                <p>{p}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 flex flex-wrap items-center gap-8 justify-center" delay={0.2}>
            {WELCOME_MESSAGE.signatories.map((s) => (
              <div key={s.name} className="text-center">
                <div className="font-serif-display text-3xl text-[#336d2a] italic">{s.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#6d6357] mt-1">
                  {s.role}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission ribbon */}
      <section id="mission" className="bg-[#336d2a] text-[#faf6ef] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          <Reveal direction="right" className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-[#ea8a2e]">Our Mission</div>
          </Reveal>
          <Reveal direction="up" className="md:col-span-9">
            <p className="font-serif-display text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-balance">
              To empower women, children and vulnerable communities through access to
              counseling, health services, and livelihood opportunities &mdash; while promoting
              dignity, equity and sustainable social development.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section id="focus" className="py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <Reveal className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Our Focus</div>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
                Three pillars. One integrated community development approach.
              </h2>
            </Reveal>
            <Link
              to="/programs"
              className="inline-flex items-center gap-1 text-[#336d2a] font-medium hover:text-[#ea8a2e] transition-colors"
            >
              See all programs <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <Stagger className="grid md:grid-cols-3 gap-6" staggerChildren={0.14}>
            {FOCUS_AREAS.map((f) => {
              const Icon = ICONS[f.icon];
              return (
                <StaggerItem key={f.id}>
                  <Link
                    to="/programs"
                    className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/30 hover:-translate-y-1 transition-all duration-500 block h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1100ms]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3812]/45 to-transparent" />
                      <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-[#336d2a]" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">
                        {f.subtitle}
                      </div>
                      <h3 className="font-serif-display text-2xl mt-2 text-[#1a3812] group-hover:text-[#336d2a]">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-[#3d4441] leading-relaxed">
                        {f.description}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-1 text-[#336d2a] font-medium text-sm">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Testimonials Carousel - compact */}
      <section id="testimonials" className="py-20 md:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-3xl mb-8">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">In their words</div>
            <h2 className="font-serif-display text-2xl md:text-3xl text-[#1a3812] leading-tight">
              From partners and the people we serve.
            </h2>
          </Reveal>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Partners Carousel */}
      <section id="partners" className="py-16 md:py-20 border-y border-[#e7e1d4] bg-[#faf6ef] overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
          <Reveal className="text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">
              In collaboration with
            </div>
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#1a3812]">
              Trusted by government, public health and community partners.
            </h2>
          </Reveal>
        </div>
        <PartnersCarousel />
      </section>

      {/* Stories of Impact — smaller pic + side layout */}
      <section id="stories" className="bg-[#f3ecdc] py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <Reveal className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">
                Stories of Impact
              </div>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
                Real journeys. Real transformations.
              </h2>
            </Reveal>
            <Link
              to="/impact#stories"
              className="inline-flex items-center gap-1 text-[#336d2a] font-medium hover:text-[#ea8a2e] transition-colors"
            >
              All stories <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerChildren={0.12}>
            {IMPACT_STORIES.slice(0, 3).map((s) => (
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

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-[#1a3812] text-[#faf6ef] p-10 md:p-16">
              <motion.div
                className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#ea8a2e]/25 blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-[#336d2a]/40 blur-3xl"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <Hand className="w-9 h-9 text-[#ea8a2e] mb-5" />
                  <h2 className="font-serif-display text-4xl md:text-5xl leading-[1.05]">
                    Your &#8377;1 becomes the starting point of meaningful change.
                  </h2>
                  <p className="mt-5 text-[#cfd9c5] text-lg max-w-xl">
                    Together with government convergence, infrastructure, volunteers,
                    partnerships and community trust &mdash; every rupee multiplies into six.
                  </p>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <Link
                    to="/get-involved"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#ea8a2e] text-white font-medium text-lg hover:bg-[#c97719] transition-colors duration-300"
                  >
                    Donate Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
