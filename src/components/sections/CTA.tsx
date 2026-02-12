"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function CTA() {
  return (
    <section id="contact" className="py-[clamp(80px,12vw,160px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-primary-dark to-brand-primary p-[clamp(48px,8vw,80px)] text-center">
            {/* Background radials */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(138,190,83,0.15),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(138,190,83,0.1),transparent_50%)]" />

            <div className="relative z-10">
              <span className="section-label justify-center text-white/50 before:bg-white/30">
                Ready to Start?
              </span>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                Let&apos;s build something
                <br />
                <span className="text-brand-accent-light">extraordinary</span>{" "}
                together.
              </h2>
              <p className="mx-auto mt-4 max-w-[480px] text-lg text-white/70">
                Whether you need a website, mobile app, or full digital
                transformation — we&apos;re ready when you are.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-[0.95rem] font-semibold text-brand-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-light hover:text-surface-dark hover:shadow-[0_8px_30px_rgba(138,190,83,0.25)]"
              >
                Get in Touch
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
