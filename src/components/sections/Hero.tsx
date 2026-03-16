"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { techStack } from "@/lib/constants";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-24">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
        <div className="max-w-[800px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-brand-accent/[0.08] px-4 py-1.5 text-sm font-medium text-brand-accent"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-accent" />
            Now Accepting New Clients
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight"
          >
            We build the
            <br />
            <span className="gradient-text">digital backbone</span>
            <br />
            of your business.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-[540px] text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-text-secondary"
          >
            Nkosi Hut is a South African tech agency delivering modern websites,
            mobile applications, and cloud solutions that drive real business
            growth. From concept to deployment — we&apos;ve got you covered.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-brand-accent px-8 py-3.5 text-[0.95rem] font-semibold text-surface-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-[0_8px_30px_rgba(138,190,83,0.25)]">
  Start Your Project
  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
</Link>
            <Button href="#services" variant="secondary" arrow="down">
              Explore Services
            </Button>
          </motion.div>

          {/* Trust Signals — replaces inflated stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 border-t border-border pt-10"
          >
            {/* Completed Project Highlight */}
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                <Sparkles size={18} className="text-brand-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  1 Project Successfully Delivered
                </p>
                <p className="mt-0.5 text-xs text-text-muted">
                  And counting — every project gets our full dedication and
                  attention to detail.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-text-muted">
                Technologies we work with
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="rounded-full border border-border bg-surface-dark/60 px-3 py-1 font-mono text-[0.7rem] text-text-secondary transition-colors hover:border-border-hover hover:text-brand-accent"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}