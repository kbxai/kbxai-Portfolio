export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <span
      className="inline-block select-none"
      style={{ fontSize: size, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 }}
    >
      <span style={{ color: "#ffffff" }}>KB</span>
      <span style={{ color: "rgba(255,255,255,0.85)" }}>x</span>
      <span style={{ color: "#22d3ee" }}>AI</span>
    </span>
  );
}
