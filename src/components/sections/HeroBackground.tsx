// Hero-specific animated background: circuit pulses + slow aurora blobs
// Complements the global fixed bg-grid and static blobs in layout.tsx

const H_PULSES = [
  { top: "18%", delay: "0s", duration: "9s" },
  { top: "38%", delay: "-5s", duration: "12s" },
  { top: "58%", delay: "-2s", duration: "10s" },
  { top: "78%", delay: "2s", duration: "14s" },
];

const V_PULSES = [
  { left: "22%", delay: "-4s", duration: "11s" },
  { left: "56%", delay: "1s", duration: "9s" },
  { left: "80%", delay: "-7s", duration: "13s" },
];

export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Horizontal circuit pulses -- light traveling along grid rows */}
      {H_PULSES.map((p, i) => (
        <div
          key={`h-${i}`}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: p.top,
            height: "1px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "200px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(138,190,83,0.65) 50%, transparent 100%)",
              animationName: "circuitTravelH",
              animationDuration: p.duration,
              animationDelay: p.delay,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          />
        </div>
      ))}

      {/* Vertical circuit pulses -- light traveling along grid columns */}
      {V_PULSES.map((p, i) => (
        <div
          key={`v-${i}`}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: p.left,
            width: "1px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "1px",
              height: "200px",
              background:
                "linear-gradient(180deg, transparent 0%, rgba(138,190,83,0.55) 50%, transparent 100%)",
              animationName: "circuitTravelV",
              animationDuration: p.duration,
              animationDelay: p.delay,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          />
        </div>
      ))}

      {/* Aurora blob 1 -- primary green, center-right */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "5%",
          width: "700px",
          height: "560px",
          background:
            "radial-gradient(ellipse at center, rgba(23,99,49,0.55) 0%, rgba(23,99,49,0.2) 45%, transparent 70%)",
          filter: "blur(60px)",
          animation: "auroraFloat1 20s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />

      {/* Aurora blob 2 -- accent green, lower left */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "-60px",
          width: "620px",
          height: "620px",
          background:
            "radial-gradient(ellipse at center, rgba(138,190,83,0.22) 0%, rgba(138,190,83,0.08) 45%, transparent 70%)",
          filter: "blur(65px)",
          animation: "auroraFloat2 26s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />

      {/* Aurora blob 3 -- smaller mid accent, frames the center */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "28%",
          width: "460px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(23,99,49,0.4) 0%, rgba(23,99,49,0.12) 50%, transparent 70%)",
          filter: "blur(50px)",
          animation: "auroraFloat3 16s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />

      {/* Radial vignette -- darkens edges to keep text readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 20%, rgba(10,15,13,0.75) 80%)",
        }}
      />
    </div>
  );
}
