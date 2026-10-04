import Link from "next/link";

const footerLinks = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Visit",
    href: "#visit",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] px-5 pb-6 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Closing statement */}
        <div className="max-w-6xl">
          <p className="label mb-6 text-muted">
            Coffee / Matcha / Made Slowly
          </p>

          <h2 className="font-display text-[clamp(4rem,11vw,11rem)] leading-[0.78] tracking-[-0.06em]">
            GOOD
            <br />
            THINGS
            <br />
            TAKE
            <br />
            TIME.
          </h2>
        </div>

        {/* Information */}
        <div className="mt-20 grid border-t border-[var(--border)] pt-6 md:mt-32 md:grid-cols-4">
          {/* Location */}
          <div className="mb-10 md:mb-0">
            <p className="label mb-4 text-muted">Find us</p>

            <address className="not-italic text-sm leading-6">
              Lagos, Nigeria
              <br />
              12 Bourdillon Street
              <br />
              Victoria Island
            </address>
          </div>

          {/* Hours */}
          <div className="mb-10 md:mb-0">
            <p className="label mb-4 text-muted">Hours</p>

            <p className="text-sm leading-6">
              Monday — Friday
              <br />
              07:00 — 19:00
              <br />
              <br />
              Saturday — Sunday
              <br />
              08:00 — 20:00
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-10 md:mb-0">
            <p className="label mb-4 text-muted">Explore</p>

            <nav aria-label="Footer navigation" className="flex flex-col">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="group flex w-fit items-center gap-2 py-1 text-sm"
                >
                  <span>{link.label}</span>

                  <span
                    aria-hidden="true"
                    className="translate-x-[-4px] opacity-0 transition-all duration-500 ease-[var(--ease-kobo)] group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Manifesto */}
          <div>
            <p className="label mb-4 text-muted">A small reminder</p>

            <p className="max-w-xs font-display text-2xl leading-[0.95] tracking-[-0.03em] md:text-3xl">
              Stay for another cup.
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--border)] pt-5 md:mt-24 md:flex-row md:items-end md:justify-between">
          <p className="label text-muted">
            © {new Date().getFullYear()} KŌBŌ
          </p>

          <p className="label text-muted">
            Coffee. Matcha. Made slowly.
          </p>

          <p className="label text-muted">
            Lagos / Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}