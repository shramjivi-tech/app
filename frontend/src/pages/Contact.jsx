import { useState } from "react";
import { Mail, MapPin, Phone, Send, Instagram, Globe } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "../hooks/use-toast";
import { SITE } from "../data/mock";

const SUBJECTS = [
  "General enquiry",
  "Partnership & CSR",
  "Volunteering",
  "Donations & 80G",
  "Media & Press",
  "Program support",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General enquiry",
    message: "",
  });

  function submit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Missing details",
        description: "Please fill in name, email and a message.",
      });
      return;
    }
    const existing = JSON.parse(localStorage.getItem("shramjivi_messages") || "[]");
    existing.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("shramjivi_messages", JSON.stringify(existing));
    toast({
      title: "Message received \u2728",
      description: "Thank you for reaching out. Our team will get back to you soon.",
    });
    setForm({ name: "", email: "", phone: "", subject: "General enquiry", message: "" });
  }

  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-4">Contact</div>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#1a3812] leading-[1.04]">
              Let’s build the next chapter together.
            </h1>
            <p className="mt-6 text-lg text-[#3d4441] leading-relaxed">
              Whether you represent a CSR partner, a public health institution, or you simply
              want to be part of our journey — we’d love to hear from you.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-12 gap-8">
            {/* Form */}
            <form
              onSubmit={submit}
              className="lg:col-span-7 bg-white rounded-3xl p-7 md:p-10 ring-1 ring-[#e7e1d4]"
            >
              <h2 className="font-serif-display text-3xl text-[#1a3812]">Send a message</h2>
              <p className="text-sm text-[#6d6357] mt-1">We typically respond within 2&ndash;3 business days.</p>

              <div className="mt-7 grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">Full Name *</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">Email *</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">Phone</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={"+91 96387 44958"}
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">Subject</Label>
                  <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue placeholder="Choose a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {SUBJECTS.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-5">
                <Label className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">Message *</Label>
                <Textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={"Tell us how you would like to engage\u2026"}
                  className="mt-2"
                />
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#336d2a] text-[#faf6ef] font-medium hover:bg-[#244e1d] transition-colors"
              >
                <Send className="w-4 h-4" /> Send message
              </button>
            </form>

            {/* Info */}
            <aside className="lg:col-span-5 space-y-5">
              <div className="bg-[#1a3812] text-[#e8e2d3] rounded-3xl p-7">
                <div className="text-xs uppercase tracking-[0.22em] text-[#ea8a2e]">Head Office</div>
                <div className="font-serif-display text-2xl text-white mt-1">Shramjivi Sevalaya</div>
                <ul className="mt-5 space-y-4 text-[15px]">
                  <li className="flex gap-3">
                    <MapPin className="w-5 h-5 text-[#ea8a2e] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{SITE.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 text-[#ea8a2e] mt-0.5 shrink-0" />
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </li>
                  <li className="flex gap-3">
                    <Globe className="w-5 h-5 text-[#ea8a2e] mt-0.5 shrink-0" />
                    <span>{SITE.website}</span>
                  </li>
                  <li className="flex gap-3">
                    <Instagram className="w-5 h-5 text-[#ea8a2e] mt-0.5 shrink-0" />
                    <span>{SITE.instagram}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 text-[#ea8a2e] mt-0.5 shrink-0" />
                    <a href={`tel:${SITE.phoneRaw}`} className="hover:text-white">
                      {SITE.phone}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-7 ring-1 ring-[#e7e1d4]">
                <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Visiting hours</div>
                <ul className="space-y-1.5 text-[15px] text-[#2d3431]">
                  <li className="flex justify-between"><span>Monday – Friday</span><span className="text-[#336d2a] font-medium">10:00 – 18:00</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span className="text-[#336d2a] font-medium">10:00 – 14:00</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span className="text-[#6d6357]">Closed</span></li>
                </ul>
                <p className="text-xs text-[#6d6357] mt-4">Field activities continue through the week.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
