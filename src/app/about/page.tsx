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
    title: "Growth-Driven",
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
      "Custom-built digital products that engage your customers and streamline your operations across every device and platform.",
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
      "Modernise legacy systems, digitise manual processes, and position your business for the future with end-to-end digital transformation.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-[clamp(80px,12vw,160px)]">
      {/* Hero */}
      <section className="mb-[clamp(80px,12vw,140px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="max-w-[720px]">
              <span className="section-label">About Nkosi Hut</span>
              <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
                Technology that{" "}
                <span className="gradient-text">moves businesses</span> forward
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Nkosi Hut is a South African technology agency on a mission to
                help businesses harness the power of modern digital solutions.
                From custom software and mobile applications to CRM systems and
                full digital transformation — we build the technology that
                drives real growth.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                We believe that every business, regardless of size, deserves
                access to world-class technology. That belief drives everything
                we do — from the tools we choose to the relationships we build
                with our clients.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-[clamp(80px,12vw,140px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-dark-2 p-[clamp(32px,6vw,64px)]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.04] to-transparent" />
              <div className="relative z-10 max-w-[640px]">
                <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-brand-accent">
                  Our Mission
                </span>
                <p className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-medium leading-relaxed text-text-primary">
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

      {/* Values */}
      <section className="mb-[clamp(80px,12vw,140px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="mb-14 max-w-[600px]">
              <span className="section-label">Our Values</span>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                What we <span className="gradient-text">stand for</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group rounded-xl border border-border bg-surface-dark-2 p-8 transition-all duration-300 hover:border-border-hover">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                    <value.icon size={22} className="text-brand-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help — Capabilities */}
      <section className="mb-[clamp(80px,12vw,140px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="mb-14 max-w-[600px]">
              <span className="section-label">How We Help</span>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                End-to-end technology{" "}
                <span className="gradient-text">for modern businesses</span>
              </h2>
              <p className="mt-4 text-text-secondary">
                Whether you need a customer-facing app, an internal tool, or a
                complete overhaul of your digital infrastructure — we have the
                expertise to deliver.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-xl border border-border bg-surface-dark-2 p-8 transition-all duration-300 hover:border-border-hover">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                    <cap.icon size={22} className="text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{cap.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-primary-dark to-brand-primary p-[clamp(48px,8vw,80px)] text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(138,190,83,0.15),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(138,190,83,0.1),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight">
                  Ready to transform your business
                  <br />
                  <span className="text-brand-accent-light">
                    with technology?
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-[480px] text-base text-white/70">
                  Let&apos;s have a conversation about where your business is
                  headed and how we can help you get there.
                </p>
                <Link
                  href="/contact"
                  className="group mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-[0.95rem] font-semibold text-brand-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-light hover:text-surface-dark hover:shadow-[0_8px_30px_rgba(138,190,83,0.25)]"
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