"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Locations() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden border-b border-[var(--border)] px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* -------------------------------------------------
            HEADER
            ------------------------------------------------- */}

        <div className="mb-16 flex items-end justify-between md:mb-24">
          <div>
            <p className="label mb-5 text-muted">
              Come by / 05
            </p>

            <h2 className="font-display text-[clamp(4rem,9vw,10rem)] leading-[0.78] tracking-[-0.055em]">
              VISIT
              <br />
              KŌBŌ<span className="text-matcha">.</span>
            </h2>
          </div>

          <p className="label hidden text-muted md:block">
            Lagos / Nigeria
          </p>
        </div>

        {/* -------------------------------------------------
            LOCATION GRID
            ------------------------------------------------- */}

        <div className="grid gap-12 md:grid-cols-12 md:gap-0">
          {/* -------------------------------------------------
              IMAGE
              ------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: "-10% 0px",
            }}
            transition={{
              duration: 1.2,
              ease: EASE,
            }}
            className="image-reveal relative aspect-[4/3] overflow-hidden md:col-span-8 md:aspect-[16/10]"
          >
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1800&q=85"
              alt="Warm coffee bar interior with seating"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-espresso/10 mix-blend-multiply"
            />

            <div className="absolute bottom-5 left-5">
              <p className="label text-paper">
                Victoria Island / Lagos
              </p>
            </div>
          </motion.div>

          {/* -------------------------------------------------
              INFORMATION
              ------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-10% 0px",
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: EASE,
            }}
            className="flex flex-col justify-between md:col-span-3 md:col-start-10 md:py-3"
          >
            <div>
              <p className="label mb-5 text-muted">
                The bar
              </p>

              <address className="not-italic font-display text-3xl leading-[0.95] tracking-[-0.035em] md:text-4xl">
                12 Bourdillon
                <br />
                Street
                <br />
                Victoria Island
                <br />
                Lagos
              </address>
            </div>

            <div className="mt-12">
              <div className="mb-8 border-t border-[var(--border)] pt-4">
                <p className="label mb-4 text-muted">
                  Hours
                </p>

                <div className="text-sm leading-6">
                  <p className="flex justify-between gap-8">
                    <span>Mon — Fri</span>
                    <span>07:00 — 19:00</span>
                  </p>

                  <p className="mt-1 flex justify-between gap-8">
                    <span>Sat — Sun</span>
                    <span>08:00 — 20:00</span>
                  </p>
                </div>
              </div>

              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="matcha-button group label flex h-12 w-full items-center justify-between px-5"
              >
                <span>Get directions</span>

                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 ease-[var(--ease-kobo)] group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* -------------------------------------------------
            CLOSING NOTE
            ------------------------------------------------- */}

        <div className="mt-16 flex flex-col gap-5 border-t border-[var(--border)] pt-5 md:mt-24 md:flex-row md:items-start md:justify-between">
          <p className="label text-muted">
            05 / 05
          </p>

          <p className="max-w-md font-display text-2xl leading-[0.95] tracking-[-0.03em] md:text-3xl">
            Come for the coffee.
            <br />
            Stay for the quiet.
          </p>

          <p className="max-w-[200px] text-xs leading-5 text-muted">
            A small room for slow mornings,
            long conversations, and one more cup.
          </p>
        </div>
      </div>
    </section>
  );
}