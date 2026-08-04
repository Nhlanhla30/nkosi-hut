"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/constants";

function DesktopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border/60 bg-surface-dark-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1.5 border-b border-border/40 bg-surface-dark-3 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/30" />
        <span className="ml-3 h-4 max-w-[180px] flex-1 rounded-full bg-text-muted/10" />
      </div>
      {children}
    </div>
  );
}

function AppFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border/60 bg-surface-dark-2 shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-border-hover hover:shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 42vw, 210px"
        />
      </div>
    </div>
  );
}

function ProjectMeta({
  number,
  role,
  title,
  description,
}: {
  number: string;
  role: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-text-muted">
        {number}
      </span>
      <span className="mt-4 inline-block self-start rounded-full border border-brand-accent/25 bg-brand-accent/[0.07] px-3.5 py-1 font-mono text-[0.68rem] uppercase tracking-widest text-brand-accent">
        {role}
      </span>
      <h3 className="mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight">
        {title}
      </h3>
      <p className="mt-4 max-w-[42ch] text-[0.9375rem] leading-relaxed text-text-secondary">
        {description}
      </p>
    </div>
  );
}

export function Projects() {
  const [p1, p2, p3] = projects;

  return (
    <section id="work" className="py-[clamp(80px,12vw,160px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">

        <Reveal>
          <div className="mb-[clamp(56px,8vw,100px)] max-w-[640px]">
            <span className="section-label">Selected Work</span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              Projects we&apos;re{" "}
              <span className="gradient-text">proud of</span>
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-text-secondary">
              From concept to production. A selection of digital products built
              for real businesses.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-[clamp(72px,10vw,128px)]">

          {/* 01 Stencil - text left, desktop visual right */}
          <div className="grid items-center gap-y-12 gap-x-16 lg:grid-cols-[5fr_7fr]">
            <Reveal direction="left">
              <ProjectMeta
                number={p1.number}
                role={p1.role}
                title={p1.title}
                description={p1.description}
              />
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="relative">
                <DesktopFrame>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/projects/stencil-1.png"
                      alt="Stencil booking interface"
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 90vw, 55vw"
                    />
                  </div>
                </DesktopFrame>
                <div className="absolute -bottom-5 right-5 z-10 w-[38%] overflow-hidden rounded-lg border border-border/50 bg-surface-dark-2 shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="/images/projects/stencil-2.png"
                      alt="Stencil studio dashboard"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 34vw, 22vw"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 02 LJ Trading - app frames left, text right; mobile: text first */}
          <div className="grid items-center gap-y-12 gap-x-16 lg:grid-cols-[7fr_5fr]">
            <Reveal direction="left" className="order-2 lg:order-1">
              <div className="flex items-start justify-center gap-5 lg:justify-start">
                <div className="mt-8 w-[min(42vw,210px)]">
                  <AppFrame
                    src="/images/projects/ljapp-profile.png"
                    alt="LJ Trading profile screen"
                  />
                </div>
                <div className="w-[min(42vw,210px)]">
                  <AppFrame
                    src="/images/projects/ljapp-vehicle.png"
                    alt="LJ Trading vehicle screen"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1} className="order-1 lg:order-2">
              <ProjectMeta
                number={p2.number}
                role={p2.role}
                title={p2.title}
                description={p2.description}
              />
            </Reveal>
          </div>

          {/* 03 FJS Holding - text left, desktop visual right */}
          <div className="grid items-center gap-y-12 gap-x-16 lg:grid-cols-[5fr_7fr]">
            <Reveal direction="left">
              <ProjectMeta
                number={p3.number}
                role={p3.role}
                title={p3.title}
                description={p3.description}
              />
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <DesktopFrame>
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/projects/fjs-holding-home.png"
                    alt="FJS Holding homepage"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 90vw, 55vw"
                  />
                </div>
              </DesktopFrame>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
