"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-[clamp(80px,12vw,160px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b3219] via-brand-primary-dark to-brand-primary p-[clamp(56px,8vw,100px)] text-center">

            {/* Subtle grid texture at very low opacity */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Ambient radials: top glow + two corner pools */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(138,190,83,0.12),transparent),radial-gradient(circle_at_15%_85%,rgba(26,122,60,0.2),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(15,74,36,0.3),transparent_45%)]" />

            <div className="relative z-10">
              <span className="section-label justify-center text-white/50">
                Ready to Start
              </span>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight">
                Let&apos;s build something
                <br />
                <span className="text-brand-accent-light">extraordinary</span>{" "}
                together.
              </h2>
              <p className="mx-auto mt-5 max-w-[44ch] text-[1rem] leading-relaxed text-white/65">
                Whether you need a website, mobile app, or full digital
                transformation, we&apos;re ready when you are.
              </p>
              <a
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-[0.95rem] font-semibold text-brand-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-light hover:text-surface-dark hover:shadow-[0_8px_28px_rgba(138,190,83,0.3)]"
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
