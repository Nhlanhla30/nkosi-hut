"use client";

import { Code, Smartphone, PenTool, Cloud } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/constants";
import { WebCircuit } from "@/components/sections/ServiceCircuits";

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  "pen-tool": PenTool,
  cloud: Cloud,
} as const;

export function Services() {
  return (
    <section id="services" className="py-[clamp(100px,14vw,180px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">

        {/* -- Section header -- */}
        <Reveal>
          <div className="mb-[clamp(56px,8vw,80px)] max-w-[640px]">
            <span className="section-label">What We Do</span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              End-to-end digital solutions{" "}
              <span className="gradient-text">tailored for you</span>
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-text-secondary">
              From your first line of code to your thousandth customer — we
              design, build, and scale the digital products your business
              depends on.
            </p>
          </div>
        </Reveal>

        {/* -- Cards grid -- */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];

            // Service 01 -- new premium card with circuit graphic
            if (service.number === "01") {
              return (
                <Reveal key={service.number} delay={i * 0.1}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-dark-2 transition-all duration-500 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">

                    {/* Hover ambient gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-accent/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Circuit graphic — full-bleed header, no horizontal padding */}
                    {/* overflow-hidden on the card clips the SVG traces cleanly at the rounded corners */}
                    <div className="pt-7 pb-5">
                      <WebCircuit />
                    </div>

                    {/* Thin separator */}
                    <div className="mx-8 h-px bg-brand-accent/[0.12]" />

                    {/* Text content */}
                    <div className="relative z-10 flex flex-1 flex-col px-8 pt-6 pb-9">
                      <span className="font-mono text-[0.65rem] tracking-[0.25em] text-text-muted uppercase">
                        {service.number}
                      </span>

                      <h3 className="mt-3 text-[1.2rem] font-semibold leading-snug tracking-tight">
                        {service.title}
                      </h3>

                      <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-text-secondary">
                        {service.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-1.5">
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
            }

            // Services 02-04 -- existing card design (unchanged)
            return (
              <Reveal key={service.number} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-dark-2 p-10 transition-all duration-400 hover:-translate-y-1 hover:border-border-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                  <span className="absolute right-7 top-6 z-10 font-mono text-xs text-text-muted">
                    {service.number}
                  </span>
                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/10">
                      <Icon size={22} className="text-brand-accent" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
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
