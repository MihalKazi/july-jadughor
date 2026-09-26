"use client";

/**
 * Abstracted central-monument silhouette — five stepped pillars on a base
 * plinth, the site's masthead anchor in place of a printed seal or stamp.
 * Simplified geometric form, not a literal rendering of any specific
 * photograph or protected artwork.
 */
export function MonumentMark({ size = 96 }: { size?: number }) {
  const pillars = [
    { x: 6, w: 10, h: 34 },
    { x: 22, w: 11, h: 52 },
    { x: 39, w: 14, h: 78 },
    { x: 59, w: 11, h: 52 },
    { x: 76, w: 10, h: 34 },
  ];
  const baseY = 92;

  return (
    <svg
      width={size}
      height={size * 0.98}
      viewBox="0 0 96 94"
      role="img"
      aria-label="Monument mark"
      className="shrink-0"
    >
      <line x1="2" y1={baseY} x2="94" y2={baseY} stroke="var(--ink)" strokeWidth="2" />
      <line x1="2" y1={baseY + 4} x2="94" y2={baseY + 4} stroke="var(--ink)" strokeWidth="1" opacity="0.5" />
      {pillars.map((p, i) => (
        <g key={i}>
          <rect
            x={p.x}
            y={baseY - p.h}
            width={p.w}
            height={p.h}
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.75"
          />
          <path
            d={`M ${p.x} ${baseY - p.h} Q ${p.x + p.w / 2} ${baseY - p.h - 5} ${p.x + p.w} ${baseY - p.h}`}
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.75"
          />
        </g>
      ))}
      <circle cx="48" cy={baseY + 4} r="2.5" fill="var(--ink-accent)" />
    </svg>
  );
}
