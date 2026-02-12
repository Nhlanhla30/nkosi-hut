"use client";

import { Zap, Target, Handshake } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { whyUsReasons } from "@/lib/constants";

const iconMap = {
  zap: Zap,
  target: Target,
  handshake: Handshake,
} as const;

export function WhyUs() {
  return (
    <section id="about" className="py-[clamp(80px,12vw,160px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <span className="section-label justify-center">Why Nkosi Hut</span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              Built different.{" "}
              <span className="gradient-text">Built to last.</span>
            </h2>
            <p className="mt-4 text-base text-text-secondary">
              We&apos;re not just developers — we&apos;re partners invested in
              your digital success.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {whyUsReasons.map((reason, i) => {
            const Icon = iconMap[reason.icon];
            return (
              <Reveal key={reason.title} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-surface-dark-2 p-9 text-center transition-all duration-300 hover:border-border-hover">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/10">
                    <Icon size={24} className="text-brand-accent" />
                  </div>
                  <h3 className="mb-2.5 text-lg font-semibold">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
