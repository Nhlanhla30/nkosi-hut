"use client";

import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Shield,
  Users,
  Cpu,
  BarChart3,
  Globe,
  Workflow,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, adopting modern technologies and approaches that give your business a competitive edge in the digital landscape.",
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    description:
      "Every solution we build is designed to scale. We think beyond the immediate need and architect systems that grow alongside your business.",
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description:
      "We take pride in clean code, rigorous testing, and solutions that work flawlessly. Your business deserves technology it can depend on.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description:
      "We don't just deliver projects and disappear. We build lasting relationships, becoming your trusted technology partner for the long haul.",
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Web & Mobile Applications",
    description:
      "Custom digital products that engage your customers and streamline your operations across every device and platform.",
  },
  {
    icon: Cpu,
    title: "Systems Integration & CRM",
    description:
      "Connect your tools, automate your workflows, and centralise your customer data with intelligent CRM and system integration solutions.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Transform raw business data into actionable insights with custom dashboards, reporting tools, and analytics platforms.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description:
      "Modernise legacy systems, digitise manual processes, and position your business for the future with comprehensive digital transformation.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-[clamp(80px,12vw,160px)]">

      {/* ---- Page hero ---- */}
      <section className="mb-[clamp(80px,12vw,140px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="max-w-[720px]">
              <span className="section-label">About Nkosi Hut</span>
              <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
                Technology that moves businesses forward
              </h1>
              <p className="mt-6 text-[1rem] leading-relaxed text-text-secondary">
                Nkosi Hut is a South African technology agency on a mission to
                help businesses harness the power of modern digital solutions.
                From custom software and mobile applications to CRM systems and
                full digital transformation, we build the technology that drives
                real growth.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-text-secondary">
                We believe that every business, regardless of size, deserves
                access to exceptional technology. That belief drives everything
                we do, from the tools we choose to the relationships we build
                with our clients.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Mission ---- */}
      <section className="mb-[clamp(80px,12vw,140px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-brand-accent/20 bg-surface-dark-3 p-[clamp(40px,6vw,72px)]">
              {/* Subtle green grid texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(138,190,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(138,190,83,1) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              {/* Corner accent wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.06] via-transparent to-transparent" />
              <div className="relative z-10 max-w-[720px]">
                <span className="section-label">Our Mission</span>
                <p className="mt-5 text-[clamp(1.15rem,2.5vw,1.65rem)] font-medium leading-[1.65] text-text-primary">
                  To empower businesses across South Africa and beyond with
                  innovative, reliable, and scalable technology solutions that
                  simplify operations, unlock new opportunities, and accelerate
                  growth.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="mb-[clamp(80px,12vw,140px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="mb-[clamp(48px,7vw,80px)] max-w-[640px]">
              <span className="section-label">Our Values</span>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                What we stand for
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-surface-dark-2 p-8 transition-all duration-500 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                    <value.icon size={22} className="text-brand-accent" />
                  </div>
                  <h3 className="mb-2.5 text-[1.05rem] font-semibold leading-snug">
                    {value.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Capabilities ---- */}
      <section className="mb-[clamp(80px,12vw,140px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="mb-[clamp(48px,7vw,80px)] max-w-[640px]">
              <span className="section-label">How We Help</span>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                Complete technology for modern businesses
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-text-secondary">
                Whether you need an app for your customers, an internal tool, or
                a complete infrastructure overhaul, we have the expertise to
                deliver.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.1}>
                <div className="group flex gap-5 rounded-2xl border border-border bg-surface-dark-2 p-8 transition-all duration-500 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                    <cap.icon size={22} className="text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2.5 text-[1.05rem] font-semibold leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section>
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b3219] via-brand-primary-dark to-brand-primary p-[clamp(56px,8vw,100px)] text-center">
              {/* Grid texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
              {/* Ambient radials */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(138,190,83,0.12),transparent),radial-gradient(circle_at_15%_85%,rgba(26,122,60,0.2),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(15,74,36,0.3),transparent_45%)]" />
              <div className="relative z-10">
                <span className="section-label justify-center text-white/50">
                  Start the Conversation
                </span>
                <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight">
                  Ready to transform your business
                  <br />
                  with{" "}
                  <span className="text-brand-accent-light">technology?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-[44ch] text-[1rem] leading-relaxed text-white/65">
                  Let&apos;s have a conversation about where your business is
                  headed and how we can help you get there.
                </p>
                <Link
                  href="/contact"
                  className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-[0.95rem] font-semibold text-brand-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-light hover:text-surface-dark hover:shadow-[0_8px_28px_rgba(138,190,83,0.3)]"
                >
                  Start a Conversation
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
