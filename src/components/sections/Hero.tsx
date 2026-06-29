"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { techStack } from "@/lib/constants";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { HeroBackground } from "@/components/sections/HeroBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-28">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,80px)]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-24">

          {/* -- Left: text content -- */}
          <div className="max-w-[600px]">

            {/* Heading -- single confident white */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.75rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-text-primary"
            >
              We build the
              <br />
              digital backbone
              <br />
              of your business.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[500px] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.75] text-text-secondary"
            >
              Nkosi Hut is a South African tech agency delivering modern websites,
              mobile applications, and cloud solutions that drive real business
              growth. From concept to deployment — we&apos;ve got you covered.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-brand-accent px-8 py-3.5 text-[0.95rem] font-semibold text-surface-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-[0_8px_28px_rgba(138,190,83,0.3)]"
              >
                Start Your Project
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Button href="#services" variant="secondary" arrow="down">
                Explore Services
              </Button>
            </motion.div>

            {/* Trust signals -- deliberately quiet, secondary to main content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="mt-24 opacity-60"
            >
              <div className="mb-4 flex items-center gap-2">
                <Sparkles size={11} className="shrink-0 text-brand-accent" />
                <p className="text-xs text-text-muted">
                  1 project delivered — every build gets our full focus and attention.
                </p>
              </div>
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-text-muted/60">
                {techStack.map((t) => t.name).join(" · ")}
              </p>
            </motion.div>
          </div>

          {/* -- Right: animated logo (desktop only) -- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <AnimatedLogo size={300} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
