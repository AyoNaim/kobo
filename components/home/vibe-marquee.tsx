import Link from "next/link";

const phrases = [
  "ROASTED SLOW",
  "WHISKED BY HAND",
  "SMALL BATCH",
  "GOOD THINGS",
  "MADE SLOWLY",
];

const marqueeItems = [...phrases, ...phrases];

export function VibeMarquee() {
  return (
    <section
      aria-label="Kōbō philosophy"
      className="relative overflow-hidden border-b border-[var(--border)] bg-espresso py-5 text-paper md:py-6"
    >
      {/* Moving line */}
      <div className="marquee-track">
        {marqueeItems.map((phrase, index) => (
          <div
            key={`${phrase}-${index}`}
            className="flex shrink-0 items-center"
          >
            <span className="font-display text-[clamp(1.8rem,3.2vw,3.5rem)] leading-none tracking-[-0.04em]">
              {phrase}
            </span>

            <span
              aria-hidden="true"
              className="mx-6 text-matcha md:mx-10"
            >
              ×
            </span>
          </div>
        ))}
      </div>

      {/* Static editorial label */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 items-center bg-gradient-to-r from-espresso to-transparent pl-8 md:flex">
        <span className="label text-paper/60">KŌBŌ</span>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 items-center justify-end bg-gradient-to-l from-espresso to-transparent pr-8 md:flex">
        <span className="label text-paper/60">02</span>
      </div>

      {/* Accessible navigation anchor */}
      <Link
        href="#story"
        aria-label="Continue to the Kōbō story"
        className="absolute inset-0 z-20"
      />
    </section>
  );
}