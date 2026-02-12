"use client";

import { Code, Smartphone, PenTool, Cloud } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/constants";

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  "pen-tool": PenTool,
  cloud: Cloud,
} as const;

export function Services() {
  return (
    <section id="services" className="py-[clamp(80px,12vw,160px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
        <Reveal>
          <div className="mb-14 max-w-[600px]">
            <span className="section-label">What We Do</span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              End-to-end digital solutions{" "}
              <span className="gradient-text">tailored for you</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.number} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-dark-2 p-10 transition-all duration-400 hover:-translate-y-1 hover:border-border-hover">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                  <span className="absolute right-7 top-6 z-10 font-mono text-xs text-text-muted">
                    {service.number}
                  </span>

                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/10">
                      <Icon size={22} className="text-brand-accent" />
                    </div>

                    <h3 className="mb-3 text-xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="text-[0.95rem] leading-relaxed text-text-secondary">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-brand-accent/15 bg-brand-accent/[0.06] px-3 py-1 font-mono text-[0.7rem] text-brand-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
