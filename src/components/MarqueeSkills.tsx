"use client";
import { SKILLS_MATRIX } from "@/lib/data";

const all = SKILLS_MATRIX.flatMap((g) => g.skills);
const row1 = all.slice(0, Math.ceil(all.length / 2));
const row2 = all.slice(Math.ceil(all.length / 2));

export default function MarqueeSkills() {
  return (
    <section className="py-6 overflow-hidden">
      <div className="gradient-line mb-6" />
      <div className="relative space-y-2">
        {/* Soft edge blur masks */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...row1, ...row1, ...row1].map((s, i) => (
              <span
                key={`a-${i}`}
                className="inline-flex items-center gap-2 px-5 py-2 mx-1 rounded-lg text-white/15 text-sm font-medium whitespace-nowrap transition-colors duration-500 hover:text-[#22d3ee]/60 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track-rev">
            {[...row2, ...row2, ...row2].map((s, i) => (
              <span
                key={`b-${i}`}
                className="inline-flex items-center gap-2 px-5 py-2 mx-1 rounded-lg text-white/15 text-sm font-medium whitespace-nowrap transition-colors duration-500 hover:text-[#22d3ee]/60 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
