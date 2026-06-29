// Custom circuit-style SVG graphics for each service card.
// Built from the same circuit-board aesthetic as the logo — traces, nodes, corner brackets.
// Hover effects are pure CSS opacity transitions (compositor-only, no JS, no will-change).

export function WebCircuit() {
  return (
    <svg
      viewBox="0 0 280 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      {/* -- Left routing traces -- entering from left edge, jogging into the frame */}
      <polyline
        points="0,22 30,22 30,14 60,14"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="0" y1="40" x2="60" y2="40"
        stroke="#176331" strokeWidth="0.9" strokeLinecap="round"
      />
      <polyline
        points="0,58 30,58 30,66 60,66"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="22" r="2" fill="#176331" />
      <circle cx="30" cy="58" r="2" fill="#176331" />

      {/* -- Right routing traces -- exiting from frame to right edge */}
      <polyline
        points="220,14 250,14 250,22 280,22"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="220" y1="40" x2="280" y2="40"
        stroke="#176331" strokeWidth="0.9" strokeLinecap="round"
      />
      <polyline
        points="220,66 250,66 250,58 280,58"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="250" cy="22" r="2" fill="#176331" />
      <circle cx="250" cy="58" r="2" fill="#176331" />

      {/* -- Browser window frame -- corner brackets in accent green */}
      {/* Top-left */}
      <path
        d="M 74 8 L 60 8 L 60 22"
        stroke="#8abe53" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Top-right */}
      <path
        d="M 206 8 L 220 8 L 220 22"
        stroke="#8abe53" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Bottom-left */}
      <path
        d="M 60 66 L 60 78 L 74 78"
        stroke="#8abe53" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Bottom-right */}
      <path
        d="M 206 78 L 220 78 L 220 66"
        stroke="#8abe53" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Frame side edges connecting brackets (where mid-traces attach) */}
      <line
        x1="60" y1="22" x2="60" y2="66"
        stroke="#176331" strokeWidth="0.75" opacity="0.4"
      />
      <line
        x1="220" y1="22" x2="220" y2="66"
        stroke="#176331" strokeWidth="0.75" opacity="0.4"
      />

      {/* Chrome toolbar strip */}
      <line
        x1="60" y1="22" x2="220" y2="22"
        stroke="#8abe53" strokeWidth="0.75" opacity="0.45"
      />

      {/* Browser control dots */}
      <circle cx="72" cy="15" r="2" stroke="#8abe53" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="80" cy="15" r="2" stroke="#8abe53" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="88" cy="15" r="2" stroke="#8abe53" strokeWidth="1" fill="none" opacity="0.5" />

      {/* URL bar */}
      <rect
        x="97" y="11" width="78" height="8" rx="2.5"
        stroke="#176331" strokeWidth="0.8" opacity="0.45"
      />

      {/* Two-column layout divider */}
      <line
        x1="140" y1="26" x2="140" y2="74"
        stroke="#176331" strokeWidth="0.7"
        strokeDasharray="2 3" opacity="0.4"
      />

      {/* Left content column — navigation/copy traces */}
      <line x1="66" y1="32" x2="132" y2="32" stroke="#176331" strokeWidth="1"    opacity="0.6" />
      <line x1="66" y1="40" x2="120" y2="40" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <line x1="66" y1="46" x2="132" y2="46" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <line x1="66" y1="54" x2="110" y2="54" stroke="#176331" strokeWidth="0.7"  opacity="0.3" />
      <line x1="66" y1="60" x2="132" y2="60" stroke="#176331" strokeWidth="0.7"  opacity="0.3" />
      <line x1="66" y1="68" x2="102" y2="68" stroke="#176331" strokeWidth="0.7"  opacity="0.25" />

      {/* Right content column — copy traces + image placeholder */}
      <line x1="148" y1="32" x2="214" y2="32" stroke="#176331" strokeWidth="1"    opacity="0.6" />
      <line x1="148" y1="40" x2="214" y2="40" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <line x1="148" y1="46" x2="194" y2="46" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <rect
        x="148" y="53" width="66" height="20" rx="2"
        stroke="#176331" strokeWidth="0.8" opacity="0.3"
      />

      {/* -- Nodes -- */}
      {/* Corner frame nodes — always accent green */}
      <circle cx="60"  cy="8"  r="3" fill="#8abe53" />
      <circle cx="220" cy="8"  r="3" fill="#8abe53" />
      <circle cx="60"  cy="78" r="3" fill="#8abe53" />
      <circle cx="220" cy="78" r="3" fill="#8abe53" />

      {/* Chrome junction nodes */}
      <circle cx="60"  cy="22" r="1.8" fill="#8abe53" opacity="0.65" />
      <circle cx="220" cy="22" r="1.8" fill="#8abe53" opacity="0.65" />
      <circle cx="140" cy="22" r="1.8" fill="#8abe53" opacity="0.5"  />

      {/* Mid-frame trace connection nodes */}
      <circle cx="60"  cy="40" r="2" fill="#8abe53" opacity="0.75" />
      <circle cx="220" cy="40" r="2" fill="#8abe53" opacity="0.75" />

      {/* -- Hover highlight layer -- */}
      {/* Parent card must have className="group ...". */}
      {/* Opacity-only transitions: compositor-only, zero repaint cost. */}
      <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {/* Top and bottom edge glow traces */}
        <line x1="60" y1="8"  x2="220" y2="8"  stroke="#8abe53" strokeWidth="0.8" opacity="0.35" />
        <line x1="60" y1="78" x2="220" y2="78" stroke="#8abe53" strokeWidth="0.8" opacity="0.25" />
        {/* Corner node halos */}
        <circle cx="60"  cy="8" r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
        <circle cx="220" cy="8" r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
        {/* Center column node halo */}
        <circle cx="140" cy="22" r="4"   stroke="#8abe53" strokeWidth="0.8"  fill="none" opacity="0.4"  />
        {/* Mid-side node halos */}
        <circle cx="60"  cy="40" r="4"   stroke="#8abe53" strokeWidth="0.6"  fill="none" opacity="0.3"  />
        <circle cx="220" cy="40" r="4"   stroke="#8abe53" strokeWidth="0.6"  fill="none" opacity="0.3"  />
      </g>
    </svg>
  );
}
