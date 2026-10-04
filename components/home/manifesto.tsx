"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden border-b border-[var(--border)] px-5 py-28 md:px-8 md:py-44"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* -------------------------------------------------
            SECTION LABEL
            ------------------------------------------------- */}

        <div className="mb-16 flex items-center justify-between md:mb-24">
          <p className="label text-muted">The philosophy / 04</p>

          <p className="label hidden text-muted md:block">
            Made by hand / No hurry
          </p>
        </div>

        {/* -------------------------------------------------
            MAIN STATEMENT
            ------------------------------------------------- */}

        <div className="grid md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 1,
              ease: EASE,
            }}
            className="md:col-span-10 md:col-start-2"
          >
            <p className="font-display text-[clamp(3.5rem,8.5vw,9.5rem)] leading-[0.82] tracking-[-0.055em]">
              We believe good coffee
              <span className="text-matcha">.</span>
              <br />
              Good matcha
              <span className="text-matcha">.</span>
              <br />
              Good things
              <br />
              take time
              <span className="text-matcha">.</span>
            </p>
          </motion.div>
        </div>

        {/* -------------------------------------------------
            IMAGE + COPY
            ------------------------------------------------- */}

        <div className="mt-24 grid items-start gap-16 md:mt-40 md:grid-cols-12 md:gap-0">
          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 1.04,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
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
            className="image-reveal relative aspect-[4/5] overflow-hidden md:col-span-5 md:col-start-2"
          >
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85"
              alt="Freshly prepared coffee on a wooden table"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-espresso/10 mix-blend-multiply"
            />

            <div className="absolute bottom-4 left-4">
              <p className="label text-paper">
                Made slowly / 04
              </p>
            </div>
          </motion.div>

          {/* Copy */}

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
            className="md:col-span-4 md:col-start-8 md:pt-20"
          >
            <p className="label mb-8 text-muted">
              Why KŌBŌ
            </p>

            <div className="space-y-6 text-sm leading-7">
              <p>
                Coffee is roasted. Matcha is whisked. Milk is
                steamed. Cups get stained. Hands get dirty.
              </p>

              <p>
                We like it that way.
              </p>

              <p className="text-muted">
                KŌBŌ is a small bar built around the simple
                pleasure of making something properly.
              </p>
            </div>

            <div className="mt-12">
              <span className="label border-b border-espresso pb-2">
                Craft over convenience
              </span>
            </div>
          </motion.div>
        </div>

        {/* -------------------------------------------------
            CLOSING LINE
            ------------------------------------------------- */}

        <div className="mt-28 border-t border-[var(--border)] pt-5 md:mt-44 md:flex md:items-start md:justify-between">
          <p className="label text-muted">
            04 / 04
          </p>

          <p className="mt-6 max-w-md font-display text-3xl leading-[0.95] tracking-[-0.035em] md:mt-0 md:text-4xl">
            Nothing rushed.
            <br />
            Nothing unnecessary.
          </p>

          <p className="mt-6 max-w-[180px] text-xs leading-5 text-muted md:mt-0">
            Coffee, matcha, and a little room to breathe.
          </p>
        </div>
      </div>
    </section>
  );
}