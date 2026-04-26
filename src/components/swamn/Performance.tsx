import { SectionHeader } from "./SectionHeader";

const metrics = [
  { v: "91.7%", l: "Classification Accuracy", w: 91.7, tone: "good" },
  { v: "5.0%",  l: "False Positive Rate",     w: 5.0,  tone: "muted" },
  { v: "9.0%",  l: "False Negative Rate",     w: 9.0,  tone: "muted" },
  { v: "11.4s", l: "Mean Collection Time",    w: 80,   tone: "good" },
  { v: "92%",   l: "Docking Success",         w: 92,   tone: "good" },
  { v: "5.5h",  l: "Continuous Operation",    w: 70,   tone: "good" },
];

export const Performance = () => (
  <section id="performance" className="relative py-28 md:py-36">
    <div className="container">
      <SectionHeader
        eyebrow="Performance & Testing"
        title={<>Engineered for <span className="h-serif text-gradient">reliability</span></>}
        description="Real-world testing across detection, navigation, and operation — measured, refined, and documented."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m, i) => (
          <div
            key={m.l}
            className="reveal card-premium group overflow-hidden p-7 transition-all hover:-translate-y-0.5"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="flex items-baseline justify-between">
              <div className="h-display text-4xl text-navy">{m.v}</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Tested</div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{m.l}</p>
            <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full rounded-full transition-[width] duration-1000 ease-out ${
                  m.tone === "good" ? "bg-aqua" : "bg-navy/40"
                }`}
                style={{ width: `${Math.min(100, m.w)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
