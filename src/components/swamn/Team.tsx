import { SectionHeader } from "./SectionHeader";

const team = [
  {
    name: "Rishi Singh",
    role: "Lead Innovator",
    sub: "Bot & Dock Designer",
    desc: "Leads the technical vision of SWAMN — designs the autonomous bot and docking model, and drives AI, embedded systems, and end-to-end engineering.",
    initials: "RS",
    email: "rishisingh@swamn.com",
  },
  {
    name: "Vaibhav Raj",
    role: "Co-Developer",
    sub: "Systems & Integration",
    desc: "Focused on collaborative development, system coordination, and problem-solving through technology-driven environmental solutions.",
    initials: "VR",
    email: "vaibhavraj@swamn.com",
  },
  {
    name: "Aayush Kumar Singh",
    role: "Branding, Media & Communications",
    sub: "Identity & Outreach",
    desc: "Shapes SWAMN's visual identity, social presence, and digital communications — building a strong, premium identity for the initiative.",
    initials: "AK",
    email: "aayushsingh@swamn.com",
  },
  {
    name: "Manan",
    role: "Finance Manager",
    sub: "Budget & Resources",
    desc: "Oversees budgeting, resource planning, and the financial stewardship that keeps SWAMN's development sustainable and accountable.",
    initials: "MN",
    email: "mananmishra@swamn.com",
  },
  {
    name: "Aviraj",
    role: "Business Evaluator",
    sub: "Strategy & Viability",
    desc: "Leads market analysis, viability assessment, and strategic positioning — connecting SWAMN's engineering to real-world impact.",
    initials: "AV",
    email: "aviraajanand@swamn.com",
  },
  {
    name: "Aagman Gupta",
    role: "Tracker Systems & Departure Admin",
    sub: "Operations & Logistics",
    desc: "Works with SWAMN to improve tracker systems and oversees departure administration — keeping field operations precise, organised, and on schedule.",
    initials: "AG",
    email: "aagmangupta@swamn.com",
  },
];

export const Team = () => (
  <section id="team" className="relative py-28 md:py-36">
    <div className="container">
      <SectionHeader
        eyebrow="Team"
        title={<>The minds behind <span className="h-serif text-gradient">SWAMN</span></>}
        description="A young team of innovators building the next generation of autonomous environmental systems."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <article key={m.name} className="reveal group card-premium overflow-hidden"
                   style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <div aria-hidden className="absolute inset-0 bg-aqua opacity-90" style={{ background: "var(--gradient-aqua)" }} />
              <div aria-hidden className="absolute inset-0 animate-drift opacity-30"
                   style={{ background: "radial-gradient(50% 50% at 30% 30%, hsl(0 0% 100%/0.6), transparent)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-display text-7xl text-primary-foreground/90">{m.initials}</div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-xl glass p-4">
                  <div className="h-display text-lg text-navy">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.role} · {m.sub}</div>
                </div>
              </div>
            </div>
            <div className="p-7">
              <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              <a
                href={`mailto:${m.email}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-navy transition-colors hover:text-aqua"
              >
                {m.email}
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
