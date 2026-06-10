import { Link } from "react-router-dom";
import { ArrowUpRight, Leaf, Layers, Network, MapPin } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Timeline from "../components/Timeline";
import { MILESTONES, SITE, GALLERY } from "../data/mock";

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
      <section className="pb-20">
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
      <section className="py-20 md:py-28">
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

      {/* Ecosystem */}
      <section className="bg-[#1a3812] text-[#e8e2d3] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#ea8a2e] mb-3">Ecosystem</div>
            <h2 className="font-serif-display text-4xl md:text-5xl leading-[1.05]">
              Current implementing & emerging organizations.
            </h2>
          </div>
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

      {/* Gallery strip */}
      <section className="py-16">
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
