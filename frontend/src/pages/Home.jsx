import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Users,
  Scissors,
  Sparkles,
  Quote,
  Calendar,
  Hand,
} from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Counter from "../components/Counter";
import TestimonialCarousel from "../components/TestimonialCarousel";
import PartnersCarousel from "../components/PartnersCarousel";
import {
  HERO_STATS,
  FOCUS_AREAS,
  HERO_IMAGE,
  IMPACT_STORIES,
  PARTNERS,
  SITE,
} from "../data/mock";

const ICONS = { HeartPulse, Users, Scissors };

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ecf3e0] text-[#336d2a] text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                Annual Report 2025&ndash;26 &mdash; Out now
              </div>
              <h1 className="font-serif-display text-5xl md:text-7xl lg:text-[80px] leading-[1.02] mt-6 text-[#1a3812]">
                Community change begins with{" "}
                <span className="deco-underline italic">dignity</span>,
                opportunity and <span className="italic">trust</span>.
              </h1>
              <p className="mt-7 text-[17px] md:text-lg text-[#3d4441] max-w-2xl leading-relaxed">
                Serving Surat&rsquo;s women, workers and vulnerable communities without
                interruption since {SITE.estd} &mdash; through independence, partition,
                floods and a pandemic.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#336d2a] text-[#faf6ef] font-medium hover:bg-[#244e1d] transition-colors duration-300"
                >
                  Support our work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#336d2a]/30 text-[#336d2a] font-medium hover:bg-[#336d2a] hover:text-[#faf6ef] transition-colors duration-300"
                >
                  Explore Programs <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-[#ea8a2e]/15 blur-2xl" />
                <div className="relative rounded-[28px] overflow-hidden ring-1 ring-[#336d2a]/10 shadow-[0_30px_60px_-20px_rgba(26,56,18,0.25)]">
                  <motion.img
                    src={HERO_IMAGE}
                    alt="Women empowerment program"
                    className="w-full h-[460px] md:h-[520px] object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3812]/55 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" /> Surat &middot; Since 1940
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-[#ea8a2e] text-xs font-medium">
                      85+ years
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats strip with counters */}
          <Stagger
            className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e7e1d4] rounded-2xl overflow-hidden border border-[#e7e1d4]"
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

      {/* Mission ribbon */}
      <section className="bg-[#336d2a] text-[#faf6ef]">
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
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <Reveal className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">
                Our Focus
              </div>
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

          <Stagger className="grid md:grid-cols-3 gap-6" staggerChildren={0.12}>
            {FOCUS_AREAS.map((f) => {
              const Icon = ICONS[f.icon];
              return (
                <StaggerItem key={f.id}>
                  <Link
                    to="/programs"
                    className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/30 transition-all duration-300 block h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3812]/40 to-transparent" />
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

      {/* Impact stories preview */}
      <section className="bg-[#f3ecdc] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">
                Stories of Impact
              </div>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
                Real journeys. Real transformations.
              </h2>
            </div>
            <Link
              to="/impact"
              className="inline-flex items-center gap-1 text-[#336d2a] font-medium hover:text-[#ea8a2e] transition-colors"
            >
              All stories <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerChildren={0.1}>
            {IMPACT_STORIES.slice(0, 3).map((s) => (
              <StaggerItem key={s.name}>
                <article className="group bg-white rounded-2xl overflow-hidden ring-1 ring-[#e7e1d4] hover:-translate-y-1 hover:ring-[#336d2a]/30 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3812]/45 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 text-[10px] uppercase tracking-[0.18em] text-[#6e4a0a] font-medium">
                      {s.program}
                    </div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <Quote className="w-6 h-6 text-[#ea8a2e]" />
                    <h3 className="font-serif-display text-xl mt-3 text-[#1a3812]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] text-[#3d4441] leading-relaxed">
                      {s.excerpt}
                    </p>
                    <div className="mt-5 pt-4 border-t border-[#f0e8d3] text-sm text-[#336d2a] font-medium">&mdash; {s.name}</div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">In their words</div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              From partners and the people we serve.
            </h2>
          </Reveal>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Partners / Collaborations Carousel */}
      <section className="py-16 md:py-20 border-y border-[#e7e1d4] bg-[#faf6ef] overflow-hidden">
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

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-[#1a3812] text-[#faf6ef] p-10 md:p-16">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#ea8a2e]/20 blur-3xl" />
              <motion.div
                className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-[#336d2a]/30 blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <Hand className="w-9 h-9 text-[#ea8a2e] mb-5" />
                  <h2 className="font-serif-display text-4xl md:text-5xl leading-[1.05]">
                    Your &#8377;1 becomes the starting point of meaningful change.
                  </h2>
                  <p className="mt-5 text-[#cfc8b8] text-lg max-w-xl">
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
