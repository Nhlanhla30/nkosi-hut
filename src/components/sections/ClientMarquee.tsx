"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { clients } from "@/lib/constants";

// Even number keeps the -50% translateX landing on an identical copy.
const REPEAT_COUNT = 6;

// Target ~45px/s scroll speed.
// Formula: (REPEAT_COUNT / 2) * clientCount * approxItemWidthPx / targetPxPerSec
const ITEM_WIDTH_PX = 184; // badge (164px) + gap (20px)
const TARGET_PX_PER_SEC = 45;

type Client = { name: string; logoSrc: string; alt: string };

function LogoBadge({ client }: { client: Client }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl px-5 h-[60px] w-[148px] sm:h-[72px] sm:w-[164px]">
      <div className="relative h-9 w-full sm:h-10">
        <Image
          src={client.logoSrc}
          alt={client.alt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 108px, 124px"
        />
      </div>
    </div>
  );
}

export function ClientMarquee() {
  const reduced = useReducedMotion();
  const allClients = Array.from(clients) as Client[];

  // Duration scales with client count so scroll speed stays visually constant.
  const durationSec = Math.round(
    ((REPEAT_COUNT / 2) * allClients.length * ITEM_WIDTH_PX) / TARGET_PX_PER_SEC
  );
  const animationDuration = `${durationSec}s`;

  return (
    <section className="py-[clamp(56px,7vw,88px)] border-t border-border">
      {/* Section header */}
      <div className="mx-auto mb-10 max-w-[1200px] px-[clamp(20px,5vw,80px)]">
        <span className="section-label">Our Clients</span>
        <h2 className="mt-4 text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-tight text-text-primary">
          Trusted by businesses we have worked with
        </h2>
      </div>

      {/* prefers-reduced-motion: static wrapped row */}
      {reduced ? (
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)] flex flex-wrap gap-5">
          {allClients.map((client, i) => (
            <LogoBadge key={i} client={client} />
          ))}
        </div>
      ) : (
        /* Continuous scrolling strip with edge fades */
        <div
          className="overflow-hidden marquee-container"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            className="marquee-track flex gap-5 w-max"
            style={
              { "--marquee-duration": animationDuration } as React.CSSProperties
            }
          >
            {Array.from({ length: REPEAT_COUNT }, (_, ri) =>
              allClients.map((client, ci) => (
                <LogoBadge key={`${ri}-${ci}`} client={client} />
              ))
            ).flat()}
          </div>
        </div>
      )}
    </section>
  );
}
