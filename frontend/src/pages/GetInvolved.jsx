import { useState } from "react";
import {
  Heart,
  CheckCircle2,
  ShieldCheck,
  Handshake,
  Building2,
  Sparkles,
  ArrowRight,
  QrCode,
  Copy,
  Check,
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import MultiplierChart from "../components/MultiplierChart";
import { toast } from "../hooks/use-toast";
import { DONATION_PRESETS, SITE, FUTURE_SCOPE, QR_CODE_URL } from "../data/mock";

export default function GetInvolved() {
  const [amount, setAmount] = useState(2500);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [donor, setDonor] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    message: "",
  });

  const finalAmount = custom ? Number(custom) : amount;

  function submit(e) {
    e.preventDefault();
    if (!donor.name || !donor.email || !finalAmount || finalAmount < 100) {
      toast({
        title: "Please complete required fields",
        description: "Name, email and a donation amount (minimum \u20b9100) are required.",
      });
      return;
    }
    // Mock save to localStorage
    const existing = JSON.parse(localStorage.getItem("shramjivi_donations") || "[]");
    existing.push({
      ...donor,
      amount: finalAmount,
      frequency,
      at: new Date().toISOString(),
    });
    localStorage.setItem("shramjivi_donations", JSON.stringify(existing));
    toast({
      title: "Thank you for your support \ud83d\ude4f",
      description: `Your ${frequency} pledge of \u20b9${finalAmount.toLocaleString("en-IN")} has been recorded. We\u2019ll reach out for the next steps.`,
    });
    setDonor({ name: "", email: "", phone: "", pan: "", message: "" });
    setCustom("");
    setAmount(2500);
    setFrequency("one-time");
  }

  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-4">Get Involved</div>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#1a3812] leading-[1.04]">
              Your ₹1 becomes <span className="italic deco-underline">₹6</span> of community change.
            </h1>
            <p className="mt-6 text-lg text-[#3d4441] leading-relaxed">
              Through government convergence, existing infrastructure, volunteers, partnerships
              and community trust — every rupee you give multiplies many times into reach,
              outcomes and dignity.
            </p>
          </div>

          {/* Multiplier hero chart - main feature */}
          <div className="mt-12">
            <MultiplierChart />
          </div>

          {/* Why partner */}
          <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Building2, label: "Legacy institution" },
              { icon: Handshake, label: "Grassroots reach" },
              { icon: ShieldCheck, label: "Govt. linkages" },
              { icon: Sparkles, label: "Community trust" },
              { icon: CheckCircle2, label: "Operational infra" },
            ].map((p) => (
              <div
                key={p.label}
                className="bg-white rounded-2xl p-5 ring-1 ring-[#e7e1d4] flex items-center gap-3"
              >
                <p.icon className="w-5 h-5 text-[#ea8a2e]" />
                <div className="text-sm font-medium text-[#1a3812]">{p.label}</div>
              </div>
            ))}
          </div>

          {/* Donation form */}
          <div className="mt-14 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <form
                onSubmit={submit}
                className="bg-white rounded-3xl p-7 md:p-10 ring-1 ring-[#e7e1d4]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-6 h-6 text-[#ea8a2e]" />
                  <h2 className="font-serif-display text-3xl text-[#1a3812]">Make a contribution</h2>
                </div>
                <p className="text-sm text-[#6d6357]">
                  Eligible for 80G tax exemption — donations to Shramjivi Mahila Kalyan Trust.
                </p>

                {/* Frequency */}
                <div className="mt-7">
                  <Label className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">Frequency</Label>
                  <RadioGroup
                    value={frequency}
                    onValueChange={setFrequency}
                    className="mt-3 grid grid-cols-2 gap-3"
                  >
                    {[
                      { id: "one-time", label: "One-time" },
                      { id: "monthly", label: "Monthly" },
                    ].map((f) => (
                      <label
                        key={f.id}
                        htmlFor={f.id}
                        className={`flex items-center justify-between gap-3 cursor-pointer px-5 py-3.5 rounded-xl border ${
                          frequency === f.id
                            ? "border-[#336d2a] bg-[#ecf3e0]"
                            : "border-[#e7e1d4] bg-white"
                        }`}
                      >
                        <span className="font-medium text-[#1a3812]">{f.label}</span>
                        <RadioGroupItem value={f.id} id={f.id} />
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Amount */}
                <div className="mt-7">
                  <Label className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">Amount (₹)</Label>
                  <div className="mt-3 grid grid-cols-3 md:grid-cols-6 gap-2">
                    {DONATION_PRESETS.map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => {
                          setAmount(p);
                          setCustom("");
                        }}
                        className={`py-3 rounded-xl text-sm font-medium border transition ${
                          amount === p && !custom
                            ? "bg-[#336d2a] text-[#faf6ef] border-[#336d2a]"
                            : "bg-white text-[#336d2a] border-[#e7e1d4] hover:border-[#336d2a]/40"
                        }`}
                      >
                        ₹{p.toLocaleString("en-IN")}
                      </button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    min="100"
                    placeholder="Or enter a custom amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="mt-3 h-12"
                  />
                </div>

                {/* Donor info */}
                <div className="mt-7 grid md:grid-cols-2 gap-4">
                  <Field label="Full Name *" value={donor.name} onChange={(v) => setDonor({ ...donor, name: v })} placeholder="Your full name" />
                  <Field label="Email *" type="email" value={donor.email} onChange={(v) => setDonor({ ...donor, email: v })} placeholder="you@example.com" />
                  <Field label="Phone" value={donor.phone} onChange={(v) => setDonor({ ...donor, phone: v })} placeholder={"+91 96387 44958"} />
                  <Field label="PAN (for 80G receipt)" value={donor.pan} onChange={(v) => setDonor({ ...donor, pan: v.toUpperCase() })} placeholder="ABCDE1234F" />
                </div>

                <div className="mt-5">
                  <Label className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">Message (optional)</Label>
                  <Textarea
                    rows={3}
                    value={donor.message}
                    onChange={(e) => setDonor({ ...donor, message: e.target.value })}
                    placeholder={"Anything you would like us to know\u2026"}
                    className="mt-2"
                  />
                </div>

                <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-sm text-[#6d6357]">
                    Total: <span className="font-serif-display text-2xl text-[#336d2a]">₹{(finalAmount || 0).toLocaleString("en-IN")}</span>
                    {frequency === "monthly" && <span className="ml-2">/ month</span>}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ea8a2e] text-white font-medium hover:bg-[#c97719] transition-colors"
                  >
                    Pledge donation <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            <aside className="lg:col-span-5 space-y-5">
              {/* QR Code */}
              <div className="bg-white rounded-3xl p-6 ring-1 ring-[#e7e1d4]">
                <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3 flex items-center gap-2">
                  <QrCode className="w-3.5 h-3.5" /> Scan to pay via UPI
                </div>
                <div className="font-serif-display text-xl text-[#1a3812] leading-snug">
                  Pay instantly using any UPI app
                </div>
                <p className="text-sm text-[#3d4441] mt-2 leading-relaxed">
                  Open GPay, PhonePe, Paytm or BHIM &mdash; scan the QR below to donate.
                </p>

                <div className="mt-5 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#336d2a]/15 to-[#ea8a2e]/15 blur" />
                    <div className="relative w-52 h-52 bg-white rounded-2xl border border-[#e7e1d4] p-2.5 flex items-center justify-center shadow-sm">
                      <img
                        src={QR_CODE_URL}
                        alt="Shramjivi UPI QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-[#ea8a2e] text-white text-[10px] font-semibold tracking-wider">
                      UPI
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <CopyableValue label="UPI ID" value={SITE.bank.upi} />
                  <p className="text-[11px] text-[#6d6357] mt-2 text-center">
                    For 80G receipt, share your PAN via the form.
                  </p>
                </div>
              </div>

              <div className="bg-[#1a3812] text-[#e8e2d3] rounded-3xl p-7">
                <div className="text-xs uppercase tracking-[0.22em] text-[#ea8a2e] mb-3">Bank Transfer</div>
                <div className="font-serif-display text-2xl text-white mb-4">Direct contribution</div>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-[#a8a094]">Account Name: </span>{SITE.bank.accountName}</li>
                  <li><span className="text-[#a8a094]">Bank: </span>{SITE.bank.bankName}</li>
                  <li><span className="text-[#a8a094]">Account No: </span>{SITE.bank.accountNumber}</li>
                  <li><span className="text-[#a8a094]">IFSC: </span>{SITE.bank.ifsc} <span className="text-[#a8a094]">{SITE.bank.note}</span></li>
                  <li><span className="text-[#a8a094]">UPI: </span>{SITE.bank.upi}</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-7 ring-1 ring-[#e7e1d4]">
                <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">We seek support through</div>
                <ul className="space-y-2.5">
                  {[
                    "CSR partnerships",
                    "Program sponsorships",
                    "Training resources & digital infrastructure",
                    "Volunteer & technical expertise",
                    "Community outreach collaborations",
                  ].map((s) => (
                    <li key={s} className="flex gap-3 text-[15px] text-[#2d3431]">
                      <CheckCircle2 className="w-5 h-5 text-[#ea8a2e] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* Funding Flow Chart */}
        </div>
      </section>

      {/* Future scope */}
      <section className="bg-[#f3ecdc] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-3">Future Initiatives</div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3812] leading-[1.05]">
              What your support unlocks next.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FUTURE_SCOPE.map((f) => (
              <article key={f.title} className="bg-white rounded-2xl p-7 ring-1 ring-[#e7e1d4]">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#6e4a0a]">{f.tag}</div>
                <h3 className="font-serif-display text-2xl text-[#1a3812] mt-2">{f.title}</h3>
                <p className="mt-3 text-[15px] text-[#3d4441] leading-relaxed">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-[0.18em] text-[#6e4a0a]">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 h-12"
      />
    </div>
  );
}

function CopyableValue({ label, value }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard?.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  return (
    <div className="flex items-center gap-2 bg-[#faf6ef] border border-[#e7e1d4] rounded-lg px-3 py-2 w-full overflow-hidden">
      <span className="text-[10px] uppercase tracking-[0.18em] text-[#6e4a0a] shrink-0">{label}</span>
      <span className="font-medium text-[#1a3812] text-sm truncate flex-1 min-w-0">{value}</span>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-md hover:bg-[#ecf3e0] text-[#336d2a] text-xs"
        aria-label="Copy UPI ID"
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
