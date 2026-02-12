"use client";

import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="py-[clamp(80px,12vw,160px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
        <Reveal>
          <div className="mb-14 max-w-[600px]">
            <span className="section-label">How We Work</span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              A proven process from{" "}
              <span className="gradient-text">idea to launch</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className={`bg-surface-dark-2 p-10 transition-colors hover:bg-surface-dark-3 ${
                  i < processSteps.length - 1
                    ? "border-b border-border lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="mb-5 font-mono text-4xl font-bold text-brand-accent/40">
                  {step.number}
                </div>
                <h3 className="mb-2.5 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
