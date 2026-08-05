"use client";

import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/constants";

// Border classes per step for mobile (1-col) / md (2-col) / lg (4-col)
const stepBorders = [
  "border-b border-border md:border-r lg:border-b-0",
  "border-b border-border lg:border-b-0 lg:border-r",
  "border-b border-border md:border-b-0 md:border-r",
  "",
];

export function Process() {
  return (
    <section id="process" className="py-[clamp(100px,14vw,180px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">

        <Reveal>
          <div className="mb-[clamp(56px,8vw,96px)] max-w-[640px]">
            <span className="section-label">How We Work</span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              A proven process from{" "}
              <span className="gradient-text">idea to launch</span>
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-text-secondary">
              Four clear stages, no guesswork. Every project follows the same
              disciplined path from brief to delivery.
            </p>
          </div>
        </Reveal>

        {/* Top rule doubles as the journey line spanning all four steps */}
        <div className="border-t border-brand-accent/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1} className="h-full">
                <div
                  className={`group h-full px-8 pt-10 pb-12 lg:px-10 transition-colors duration-300 hover:bg-surface-dark-2 ${stepBorders[i]}`}
                >
                  <div className="mb-7 font-mono text-[clamp(2.5rem,4vw,3.75rem)] font-bold leading-none text-brand-accent/25 transition-colors duration-300 group-hover:text-brand-accent/50">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-[1.05rem] font-semibold leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
