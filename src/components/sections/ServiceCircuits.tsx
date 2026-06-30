// Custom circuit-style SVG graphics for each service card.
// Built from the same circuit-board aesthetic as the logo -- traces, nodes, corner brackets.
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

      {/* Left content column -- navigation/copy traces */}
      <line x1="66" y1="32" x2="132" y2="32" stroke="#176331" strokeWidth="1"    opacity="0.6" />
      <line x1="66" y1="40" x2="120" y2="40" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <line x1="66" y1="46" x2="132" y2="46" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <line x1="66" y1="54" x2="110" y2="54" stroke="#176331" strokeWidth="0.7"  opacity="0.3" />
      <line x1="66" y1="60" x2="132" y2="60" stroke="#176331" strokeWidth="0.7"  opacity="0.3" />
      <line x1="66" y1="68" x2="102" y2="68" stroke="#176331" strokeWidth="0.7"  opacity="0.25" />

      {/* Right content column -- copy traces + image placeholder */}
      <line x1="148" y1="32" x2="214" y2="32" stroke="#176331" strokeWidth="1"    opacity="0.6" />
      <line x1="148" y1="40" x2="214" y2="40" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <line x1="148" y1="46" x2="194" y2="46" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <rect
        x="148" y="53" width="66" height="20" rx="2"
        stroke="#176331" strokeWidth="0.8" opacity="0.3"
      />

      {/* -- Nodes -- */}
      {/* Corner frame nodes -- always accent green */}
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

// -- Mobile App Development --
// Traces route from both edges to a phone-shaped frame (corner brackets).
// Interior shows screen content traces, status bar, speaker slot, home bar.
export function MobileCircuit() {
  return (
    <svg
      viewBox="0 0 280 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      {/* -- Left routing traces -- entering from left, jogging to phone frame at x=106 */}
      <polyline
        points="0,22 40,22 40,14 106,14"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="0" y1="43" x2="106" y2="43" stroke="#176331" strokeWidth="0.9" strokeLinecap="round" />
      <polyline
        points="0,64 40,64 40,70 106,70"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="22" r="2" fill="#176331" />
      <circle cx="40" cy="64" r="2" fill="#176331" />

      {/* -- Right routing traces -- exiting from phone frame at x=174 to right edge */}
      <polyline
        points="174,14 240,14 240,22 280,22"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="174" y1="43" x2="280" y2="43" stroke="#176331" strokeWidth="0.9" strokeLinecap="round" />
      <polyline
        points="174,70 240,70 240,64 280,64"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="240" cy="22" r="2" fill="#176331" />
      <circle cx="240" cy="64" r="2" fill="#176331" />

      {/* -- Phone outline -- corner brackets in accent green */}
      {/* Top-left */}
      <path d="M 120 8 L 106 8 L 106 22"  stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Top-right */}
      <path d="M 160 8 L 174 8 L 174 22"  stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom-left */}
      <path d="M 106 64 L 106 78 L 120 78" stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom-right */}
      <path d="M 160 78 L 174 78 L 174 64" stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Phone body outline -- low opacity silhouette makes phone shape instantly readable */}
      <rect x="106" y="8" width="68" height="70" rx="7"
        stroke="#8abe53" strokeWidth="0.8" fill="none" opacity="0.22" />

      {/* Phone side edges */}
      <line x1="106" y1="22" x2="106" y2="64" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <line x1="174" y1="22" x2="174" y2="64" stroke="#176331" strokeWidth="0.75" opacity="0.4" />

      {/* Status bar divider */}
      <line x1="106" y1="22" x2="174" y2="22" stroke="#8abe53" strokeWidth="0.75" opacity="0.45" />

      {/* Camera dot + speaker slot */}
      <circle cx="140" cy="12" r="1.5" stroke="#8abe53" strokeWidth="0.8" fill="none" opacity="0.5" />
      <line x1="130" y1="14" x2="150" y2="14" stroke="#176331" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

      {/* Screen content traces */}
      <line x1="112" y1="29" x2="168" y2="29" stroke="#176331" strokeWidth="1"    opacity="0.55" />
      <line x1="112" y1="36" x2="155" y2="36" stroke="#176331" strokeWidth="0.75" opacity="0.4"  />
      <line x1="112" y1="43" x2="168" y2="43" stroke="#176331" strokeWidth="0.75" opacity="0.35" />
      <line x1="112" y1="50" x2="148" y2="50" stroke="#176331" strokeWidth="0.7"  opacity="0.28" />
      <line x1="112" y1="57" x2="168" y2="57" stroke="#176331" strokeWidth="0.7"  opacity="0.22" />

      {/* Home bar */}
      <line x1="126" y1="72" x2="154" y2="72" stroke="#176331" strokeWidth="2" strokeLinecap="round" opacity="0.35" />

      {/* -- Nodes -- */}
      {/* Corner frame nodes */}
      <circle cx="106" cy="8"  r="3" fill="#8abe53" />
      <circle cx="174" cy="8"  r="3" fill="#8abe53" />
      <circle cx="106" cy="78" r="3" fill="#8abe53" />
      <circle cx="174" cy="78" r="3" fill="#8abe53" />

      {/* Status bar junction nodes */}
      <circle cx="106" cy="22" r="1.8" fill="#8abe53" opacity="0.65" />
      <circle cx="174" cy="22" r="1.8" fill="#8abe53" opacity="0.65" />

      {/* Mid-side attach nodes */}
      <circle cx="106" cy="43" r="2" fill="#8abe53" opacity="0.75" />
      <circle cx="174" cy="43" r="2" fill="#8abe53" opacity="0.75" />

      {/* -- Hover highlight layer -- */}
      <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <line x1="106" y1="8"  x2="174" y2="8"  stroke="#8abe53" strokeWidth="0.8" opacity="0.35" />
        <line x1="106" y1="78" x2="174" y2="78" stroke="#8abe53" strokeWidth="0.8" opacity="0.25" />
        <circle cx="106" cy="8"  r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
        <circle cx="174" cy="8"  r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
        <circle cx="106" cy="43" r="4"   stroke="#8abe53" strokeWidth="0.6"  fill="none" opacity="0.3"  />
        <circle cx="174" cy="43" r="4"   stroke="#8abe53" strokeWidth="0.6"  fill="none" opacity="0.3"  />
      </g>
    </svg>
  );
}

// -- UI/UX Design --
// Same outer frame as WebCircuit. Interior shows wireframe layout objects and an active
// pen-tool path with Bezier anchor nodes and control handles.
export function DesignCircuit() {
  return (
    <svg
      viewBox="0 0 280 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      {/* -- Left routing traces -- same entry points as WebCircuit */}
      <polyline
        points="0,22 30,22 30,14 60,14"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="0" y1="40" x2="60" y2="40" stroke="#176331" strokeWidth="0.9" strokeLinecap="round" />
      <polyline
        points="0,58 30,58 30,66 60,66"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="22" r="2" fill="#176331" />
      <circle cx="30" cy="58" r="2" fill="#176331" />

      {/* -- Right routing traces -- */}
      <polyline
        points="220,14 250,14 250,22 280,22"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="220" y1="40" x2="280" y2="40" stroke="#176331" strokeWidth="0.9" strokeLinecap="round" />
      <polyline
        points="220,66 250,66 250,58 280,58"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="250" cy="22" r="2" fill="#176331" />
      <circle cx="250" cy="58" r="2" fill="#176331" />

      {/* -- Artboard frame -- corner brackets in accent green */}
      <path d="M 74 8 L 60 8 L 60 22"    stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 206 8 L 220 8 L 220 22"  stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 60 66 L 60 78 L 74 78"   stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 206 78 L 220 78 L 220 66" stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Frame side edges */}
      <line x1="60"  y1="22" x2="60"  y2="66" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <line x1="220" y1="22" x2="220" y2="66" stroke="#176331" strokeWidth="0.75" opacity="0.4" />

      {/* Top design-tool bar */}
      <line x1="60" y1="22" x2="220" y2="22" stroke="#8abe53" strokeWidth="0.75" opacity="0.45" />

      {/* Ruler ticks along top bar */}
      <line x1="80"  y1="22" x2="80"  y2="26" stroke="#176331" strokeWidth="0.7" opacity="0.3"  />
      <line x1="100" y1="22" x2="100" y2="26" stroke="#176331" strokeWidth="0.7" opacity="0.3"  />
      <line x1="120" y1="22" x2="120" y2="26" stroke="#176331" strokeWidth="0.7" opacity="0.3"  />
      <line x1="140" y1="22" x2="140" y2="28" stroke="#176331" strokeWidth="0.7" opacity="0.35" />
      <line x1="160" y1="22" x2="160" y2="26" stroke="#176331" strokeWidth="0.7" opacity="0.3"  />
      <line x1="180" y1="22" x2="180" y2="26" stroke="#176331" strokeWidth="0.7" opacity="0.3"  />
      <line x1="200" y1="22" x2="200" y2="26" stroke="#176331" strokeWidth="0.7" opacity="0.3"  />

      {/* Wireframe layout objects */}
      {/* Header block */}
      <rect x="64"  y="28" width="152" height="10" rx="0" stroke="#176331" strokeWidth="0.7" opacity="0.22" />
      {/* Left content area */}
      <rect x="64"  y="42" width="92"  height="30" rx="0" stroke="#176331" strokeWidth="0.7" opacity="0.2"  />
      {/* Right sidebar */}
      <rect x="161" y="42" width="55"  height="30" rx="0" stroke="#176331" strokeWidth="0.7" opacity="0.2"  />

      {/* -- Pen tool path -- the active design element crossing the artboard */}
      <polyline
        points="70,72 108,40 150,55 196,26"
        stroke="#8abe53"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />

      {/* Bezier control handles from the selected anchor node at (150,55) */}
      <line x1="150" y1="55" x2="130" y2="47" stroke="#8abe53" strokeWidth="0.7" opacity="0.45" />
      <line x1="150" y1="55" x2="170" y2="63" stroke="#8abe53" strokeWidth="0.7" opacity="0.45" />
      <circle cx="130" cy="47" r="1.5" stroke="#8abe53" strokeWidth="0.8" fill="none" opacity="0.55" />
      <circle cx="170" cy="63" r="1.5" stroke="#8abe53" strokeWidth="0.8" fill="none" opacity="0.55" />

      {/* Pen anchor nodes -- open circles */}
      <circle cx="70"  cy="72" r="3" stroke="#8abe53" strokeWidth="1" fill="none" opacity="0.75" />
      <circle cx="108" cy="40" r="3" stroke="#8abe53" strokeWidth="1" fill="none" opacity="0.75" />
      <circle cx="196" cy="26" r="3" stroke="#8abe53" strokeWidth="1" fill="none" opacity="0.75" />
      {/* Selected anchor node -- filled */}
      <circle cx="150" cy="55" r="3" fill="#8abe53" opacity="0.9" />

      {/* -- Nodes -- */}
      {/* Corner frame nodes */}
      <circle cx="60"  cy="8"  r="3" fill="#8abe53" />
      <circle cx="220" cy="8"  r="3" fill="#8abe53" />
      <circle cx="60"  cy="78" r="3" fill="#8abe53" />
      <circle cx="220" cy="78" r="3" fill="#8abe53" />

      {/* Bar junction nodes */}
      <circle cx="60"  cy="22" r="1.8" fill="#8abe53" opacity="0.65" />
      <circle cx="220" cy="22" r="1.8" fill="#8abe53" opacity="0.65" />
      <circle cx="140" cy="22" r="1.8" fill="#8abe53" opacity="0.5"  />

      {/* Mid-frame attach nodes */}
      <circle cx="60"  cy="40" r="2" fill="#8abe53" opacity="0.75" />
      <circle cx="220" cy="40" r="2" fill="#8abe53" opacity="0.75" />

      {/* -- Hover highlight layer -- */}
      <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <line x1="60" y1="8"  x2="220" y2="8"  stroke="#8abe53" strokeWidth="0.8" opacity="0.35" />
        <line x1="60" y1="78" x2="220" y2="78" stroke="#8abe53" strokeWidth="0.8" opacity="0.25" />
        <circle cx="60"  cy="8"  r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
        <circle cx="220" cy="8"  r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
        <circle cx="140" cy="22" r="4"   stroke="#8abe53" strokeWidth="0.8"  fill="none" opacity="0.4"  />
        <circle cx="60"  cy="40" r="4"   stroke="#8abe53" strokeWidth="0.6"  fill="none" opacity="0.3"  />
        <circle cx="220" cy="40" r="4"   stroke="#8abe53" strokeWidth="0.6"  fill="none" opacity="0.3"  />
        {/* Selected pen node halo */}
        <circle cx="150" cy="55" r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
      </g>
    </svg>
  );
}

// -- Cloud & DevOps Solutions --
// Same outer frame. Interior shows a cloud outline (stroke only) above a hub-and-spoke
// node network suggesting a distributed/cloud service mesh.
export function CloudCircuit() {
  return (
    <svg
      viewBox="0 0 280 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      {/* -- Left routing traces -- same entry points as WebCircuit */}
      <polyline
        points="0,22 30,22 30,14 60,14"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="0" y1="40" x2="60" y2="40" stroke="#176331" strokeWidth="0.9" strokeLinecap="round" />
      <polyline
        points="0,58 30,58 30,66 60,66"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="22" r="2" fill="#176331" />
      <circle cx="30" cy="58" r="2" fill="#176331" />

      {/* -- Right routing traces -- */}
      <polyline
        points="220,14 250,14 250,22 280,22"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="220" y1="40" x2="280" y2="40" stroke="#176331" strokeWidth="0.9" strokeLinecap="round" />
      <polyline
        points="220,66 250,66 250,58 280,58"
        stroke="#176331"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="250" cy="22" r="2" fill="#176331" />
      <circle cx="250" cy="58" r="2" fill="#176331" />

      {/* -- Outer frame -- corner brackets in accent green */}
      <path d="M 74 8 L 60 8 L 60 22"    stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 206 8 L 220 8 L 220 22"  stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 60 66 L 60 78 L 74 78"   stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 206 78 L 220 78 L 220 66" stroke="#8abe53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Frame side edges */}
      <line x1="60"  y1="22" x2="60"  y2="66" stroke="#176331" strokeWidth="0.75" opacity="0.4" />
      <line x1="220" y1="22" x2="220" y2="66" stroke="#176331" strokeWidth="0.75" opacity="0.4" />

      {/* Top bar */}
      <line x1="60" y1="22" x2="220" y2="22" stroke="#8abe53" strokeWidth="0.75" opacity="0.45" />

      {/* -- Cloud shape outline -- stroke only, no fill */}
      <path
        d="M 90,58 Q 88,44 98,40 Q 96,22 115,24 Q 122,12 140,14 Q 158,12 165,24 Q 184,20 186,38 Q 196,40 194,58 Z"
        stroke="#176331"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.55"
      />

      {/* Cloud outline junction nodes at curve inflection points */}
      <circle cx="98"  cy="40" r="1.5" fill="#8abe53" opacity="0.5" />
      <circle cx="115" cy="24" r="1.5" fill="#8abe53" opacity="0.5" />
      <circle cx="165" cy="24" r="1.5" fill="#8abe53" opacity="0.5" />
      <circle cx="186" cy="38" r="1.5" fill="#8abe53" opacity="0.5" />

      {/* -- Hub-and-spoke node network below cloud -- */}
      {/* Vertical stem connecting cloud bottom to hub */}
      <line x1="140" y1="58" x2="140" y2="65" stroke="#8abe53" strokeWidth="1" opacity="0.65" />

      {/* Spoke traces from hub to leaf service nodes */}
      <line x1="140" y1="65" x2="100" y2="74" stroke="#176331" strokeWidth="0.8" opacity="0.5" />
      <line x1="140" y1="65" x2="122" y2="71" stroke="#176331" strokeWidth="0.8" opacity="0.5" />
      <line x1="140" y1="65" x2="158" y2="71" stroke="#176331" strokeWidth="0.8" opacity="0.5" />
      <line x1="140" y1="65" x2="180" y2="74" stroke="#176331" strokeWidth="0.8" opacity="0.5" />

      {/* Horizontal bus trace connecting outer leaf nodes */}
      <line x1="100" y1="74" x2="180" y2="74" stroke="#176331" strokeWidth="0.7" strokeDasharray="2 3" opacity="0.3" />

      {/* Hub node */}
      <circle cx="140" cy="65" r="3"   fill="#8abe53" />

      {/* Leaf service nodes */}
      <circle cx="100" cy="74" r="2.5" fill="#8abe53" opacity="0.8" />
      <circle cx="122" cy="71" r="2"   fill="#8abe53" opacity="0.7" />
      <circle cx="158" cy="71" r="2"   fill="#8abe53" opacity="0.7" />
      <circle cx="180" cy="74" r="2.5" fill="#8abe53" opacity="0.8" />

      {/* -- Nodes -- */}
      {/* Corner frame nodes */}
      <circle cx="60"  cy="8"  r="3" fill="#8abe53" />
      <circle cx="220" cy="8"  r="3" fill="#8abe53" />
      <circle cx="60"  cy="78" r="3" fill="#8abe53" />
      <circle cx="220" cy="78" r="3" fill="#8abe53" />

      {/* Bar junction nodes */}
      <circle cx="60"  cy="22" r="1.8" fill="#8abe53" opacity="0.65" />
      <circle cx="220" cy="22" r="1.8" fill="#8abe53" opacity="0.65" />
      <circle cx="140" cy="22" r="1.8" fill="#8abe53" opacity="0.5"  />

      {/* Mid-frame attach nodes */}
      <circle cx="60"  cy="40" r="2" fill="#8abe53" opacity="0.75" />
      <circle cx="220" cy="40" r="2" fill="#8abe53" opacity="0.75" />

      {/* -- Hover highlight layer -- */}
      <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <line x1="60" y1="8"  x2="220" y2="8"  stroke="#8abe53" strokeWidth="0.8" opacity="0.35" />
        <line x1="60" y1="78" x2="220" y2="78" stroke="#8abe53" strokeWidth="0.8" opacity="0.25" />
        <circle cx="60"  cy="8"  r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
        <circle cx="220" cy="8"  r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
        <circle cx="140" cy="22" r="4"   stroke="#8abe53" strokeWidth="0.8"  fill="none" opacity="0.4"  />
        <circle cx="60"  cy="40" r="4"   stroke="#8abe53" strokeWidth="0.6"  fill="none" opacity="0.3"  />
        <circle cx="220" cy="40" r="4"   stroke="#8abe53" strokeWidth="0.6"  fill="none" opacity="0.3"  />
        {/* Hub node halo */}
        <circle cx="140" cy="65" r="5.5" stroke="#8abe53" strokeWidth="0.75" fill="none" opacity="0.35" />
      </g>
    </svg>
  );
}
