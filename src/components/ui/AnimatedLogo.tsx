"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const PATHS = [
  "M41.086 21.513c0.172-0.39 0.271-0.819 0.271-1.273 0-1.748-1.422-3.17-3.17-3.17s-3.17 1.422-3.17 3.17 1.422 3.17 3.17 3.17c0.375 0 0.73-0.077 1.064-0.197l24.309 26.045-13.675 27.35c-0.06-0.003-0.117-0.018-0.178-0.018-1.748 0-3.17 1.422-3.17 3.17s1.422 3.17 3.17 3.17c1.748 0 3.17-1.422 3.17-3.17 0-0.777-0.292-1.479-0.757-2.031l14.064-28.13c0.233-0.467 0.152-1.03-0.204-1.412L41.086 21.513z",
  "M58.506 49.599c0.24-0.481 0.146-1.062-0.234-1.442L31.527 21.412c0.146-0.363 0.23-0.757 0.23-1.172 0-1.748-1.422-3.17-3.17-3.17s-3.17 1.422-3.17 3.17 1.422 3.17 3.17 3.17c0.415 0 0.808-0.085 1.171-0.23l14.67 14.67c-0.029 0.024-0.065 0.034-0.092 0.061L31.114 51.134l-6.682-6.682c0.145-0.363 0.23-0.757 0.23-1.172 0-1.748-1.422-3.17-3.169-3.17-1.748 0-3.17 1.422-3.17 3.17 0 1.748 1.422 3.17 3.17 3.17 0.414 0 0.808-0.085 1.171-0.23l6.683 6.682-7.089 7.089c-0.088 0.088-0.142 0.193-0.198 0.297-0.287 0.229-0.482 0.566-0.482 0.962v6.018c-0.365 0.149-0.705 0.363-0.992 0.65-1.235 1.236-1.235 3.247 0 4.483 0.599 0.599 1.395 0.929 2.242 0.929s1.643-0.33 2.241-0.929c0.599-0.599 0.929-1.395 0.929-2.241s-0.33-1.643-0.929-2.242c-0.287-0.287-0.626-0.501-0.991-0.65v-5.562l22.028-22.028c0.027-0.027 0.037-0.063 0.061-0.092L48.9 42.32 27.704 63.516c-0.008 0.008-0.01 0.019-0.018 0.027-0.104 0.11-0.192 0.236-0.251 0.379-0.063 0.153-0.097 0.315-0.097 0.479v10.548c-0.365 0.149-0.705 0.363-0.992 0.65-1.236 1.235-1.236 3.247 0 4.483 0.599 0.599 1.395 0.928 2.242 0.928 0.847 0 1.643-0.329 2.241-0.928 1.236-1.236 1.236-3.247 0-4.483-0.287-0.287-0.626-0.501-0.991-0.65V64.917l20.83-20.83 5.199 5.199L42.206 76.608c-0.061-0.003-0.118-0.018-0.179-0.018-1.748 0-3.17 1.422-3.17 3.17s1.422 3.17 3.17 3.17c1.748 0 3.17-1.422 3.17-3.17 0-0.777-0.292-1.479-0.757-2.031L58.506 49.599z",
  "M78.508 74.67c-0.257 0-0.503 0.039-0.742 0.097l-3.768-5.023V49.04c0-0.313-0.118-0.614-0.329-0.845l-8.208-8.954 6.114-6.114c0.363 0.146 0.757 0.231 1.172 0.231 1.748 0 3.169-1.422 3.169-3.17 0-1.748-1.422-3.17-3.169-3.17-1.748 0-3.17 1.422-3.17 3.17 0 0.415 0.085 0.808 0.23 1.171l-6.038 6.037-3.066-3.345 10.872-10.872c0.363 0.145 0.757 0.23 1.172 0.23 1.748 0 3.169-1.422 3.169-3.17s-1.422-3.17-3.169-3.17c-1.748 0-3.17 1.422-3.17 3.17 0 0.415 0.085 0.809 0.23 1.172L59.013 32.207l-6.135-6.693V23.15c1.127-0.486 1.92-1.607 1.92-2.911 0-1.748-1.422-3.17-3.17-3.17-1.748 0-3.17 1.422-3.17 3.17 0 1.304 0.792 2.425 1.92 2.911V26c0 0.061 0.026 0.114 0.035 0.172 0.014 0.095 0.021 0.189 0.057 0.279 0.033 0.086 0.088 0.156 0.139 0.231 0.035 0.053 0.053 0.114 0.098 0.162l20.792 22.682V70.16c0 0.271 0.087 0.534 0.25 0.75l4.021 5.362c-0.267 0.464-0.432 0.995-0.432 1.568 0 1.748 1.422 3.17 3.17 3.17 1.748 0 3.17-1.422 3.17-3.17S80.255 74.67 78.508 74.67z",
];

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export function AnimatedLogo({ size = 260 }: { size?: number }) {
  const svgSize = Math.round(size * 0.72);

  // Individual useAnimation controls — hooks must be called unconditionally at top level
  const s0 = useAnimation(), s1 = useAnimation(), s2 = useAnimation();
  const f0 = useAnimation(), f1 = useAnimation(), f2 = useAnimation();

  useEffect(() => {
    let cancelled = false;
    const sc = [s0, s1, s2];
    const fc = [f0, f1, f2];

    async function runLoop() {
      while (!cancelled) {
        // Instant reset — strokes at pathLength 0 (invisible), fills invisible
        sc.forEach((c) => c.set({ pathLength: 0, opacity: 0 }));
        fc.forEach((c) => c.set({ opacity: 0 }));

        // Phase 1: Draw strokes sequentially (staggered 450 ms apart)
        const drawPromises = sc.map((ctrl, i) =>
          sleep(i * 450).then(() => {
            if (!cancelled) {
              return ctrl.start(
                { pathLength: 1, opacity: 1 },
                { duration: 2.0, ease: [0.4, 0, 0.6, 1] }
              );
            }
          })
        );

        // Phase 2: Once the first stroke is mostly done, light up all fills together
        await sleep(1900);
        if (cancelled) break;
        const fillPromise = Promise.all(
          fc.map((c) => c.start({ opacity: 1 }, { duration: 0.7, ease: "easeOut" }))
        );

        // Wait for the last stroke to finish (starts at 900 ms, takes 2000 ms → done ~2900 ms)
        await Promise.all(drawPromises);
        if (cancelled) break;

        // Retire strokes — fills are now carrying the visual weight
        await Promise.all(
          sc.map((c) => c.start({ opacity: 0 }, { duration: 0.5, ease: "easeOut" }))
        );
        if (cancelled) break;

        await fillPromise;
        if (cancelled) break;

        // Phase 3: Hold the fully-lit logo
        await sleep(1500);
        if (cancelled) break;

        // Phase 4: Fade fills out
        await Promise.all(
          fc.map((c) => c.start({ opacity: 0 }, { duration: 0.9, ease: "easeInOut" }))
        );
        if (cancelled) break;

        // Pause before restarting
        await sleep(400);
      }
    }

    runLoop();
    return () => {
      cancelled = true;
    };
  }, [s0, s1, s2, f0, f1, f2]);

  return (
    <div
      className="relative flex select-none items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Outer pulsing glow */}
      <div
        style={{
          position: "absolute",
          inset: "5%",
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(138,190,83,0.28) 0%, rgba(23,99,49,0.2) 35%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(24px)",
          animation: "logoGlow 3s ease-in-out infinite",
          willChange: "opacity, transform",
        }}
      />
      {/* Inner glow — offset phase for depth */}
      <div
        style={{
          position: "absolute",
          inset: "22%",
          background:
            "radial-gradient(ellipse at center, rgba(138,190,83,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(16px)",
          animation: "logoGlow 3s ease-in-out infinite 1.5s",
          willChange: "opacity, transform",
        }}
      />

      <svg
        viewBox="18 17 64 66"
        width={svgSize}
        height={svgSize}
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "relative", zIndex: 10 }}
        aria-hidden="true"
      >
        <defs>
          <filter id="logo-path-glow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {PATHS.map((d, i) => (
          <g key={i} filter="url(#logo-path-glow)">
            {/* Stroke draws itself, then fades out */}
            <motion.path
              d={d}
              fill="none"
              stroke="#8abe53"
              strokeWidth="0.8"
              animate={[s0, s1, s2][i]}
              initial={{ pathLength: 0, opacity: 0 }}
            />
            {/* Fill fades in once stroke is done */}
            <motion.path
              d={d}
              fill="#8abe53"
              animate={[f0, f1, f2][i]}
              initial={{ opacity: 0 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
