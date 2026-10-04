"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3129595/3129595-hd_1920_1080_25fps.mp4";

const EASE = [0.22, 1, 0.36, 1] as const;

const heroVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: EASE,
    },
  },
} as const;

const videoVariants = {
  hidden: {
    scale: 1.12,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: EASE,
      delay: 0.25,
    },
  },
} as const;

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* -------------------------------------------------
          HERO GRID
          ------------------------------------------------- */}

      <div className="mx-auto grid min-h-[100svh] max-w-[1800px] grid-cols-1 px-5 pt-28 md:grid-cols-12 md:px-8 md:pt-32">
        {/* -------------------------------------------------
            EYEBROW
            ------------------------------------------------- */}

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-5 top-28 z-20 md:left-8 md:top-36"
        >
          <p className="label flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-matcha" />
            Specialty Coffee / Ceremonial Matcha
          </p>
        </motion.div>

        {/* -------------------------------------------------
            MAIN TYPOGRAPHY
            ------------------------------------------------- */}

        <div className="relative z-10 flex min-h-[calc(100svh-7rem)] flex-col justify-end pb-10 md:col-span-9 md:min-h-0 md:pb-16">
          <motion.p
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.05 }}
            className="label mb-7 max-w-xs text-muted md:mb-10"
          >
            A small bar for
            <br />
            good things made by hand.
          </motion.p>

          <motion.h1
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="hero-type relative max-w-[1100px]"
          >
            <span className="relative z-10 block">COFFEE</span>

            <span className="relative z-20 ml-[0.18em] block md:ml-[0.24em]">
              &
            </span>

            <span className="relative z-30 block">
              MATCHA<span className="text-matcha">.</span>
            </span>
          </motion.h1>
        </div>

        {/* -------------------------------------------------
            MEDIA
            ------------------------------------------------- */}

        <motion.div
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          className="
            absolute
            right-[5vw]
            top-[19vh]
            z-20
            h-[43vh]
            w-[58vw]
            max-w-[760px]
            overflow-hidden
            md:right-[7vw]
            md:top-[21vh]
            md:h-[58vh]
            md:w-[39vw]
          "
        >
          <div className="relative h-full w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Close-up footage of coffee being prepared"
              className="h-full w-full object-cover"
              src={HERO_VIDEO}
            />

            {/* Editorial color treatment */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-espresso/10 mix-blend-multiply"
            />

            {/* Edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 border border-espresso/20"
            />

            {/* Media label */}
            <div className="absolute bottom-4 left-4 z-10">
              <p className="label text-paper">
                Slow extraction / 01
              </p>
            </div>
          </div>
        </motion.div>

        {/* -------------------------------------------------
            MANIFESTO
            ------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: EASE,
          }}
          className="absolute bottom-8 right-5 z-30 max-w-[150px] md:bottom-14 md:right-8"
        >
          <p className="text-xs leading-5 text-muted">
            Roasted with patience.
            <br />
            Whisked with intention.
            <br />
            Served without hurry.
          </p>
        </motion.div>

        {/* -------------------------------------------------
            INDEX MARK
            ------------------------------------------------- */}

        <div className="absolute bottom-8 left-5 z-30 md:bottom-14 md:left-8">
          <p className="label text-muted">01 / 04</p>
        </div>

        {/* -------------------------------------------------
            SHOP CTA
            ------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: EASE,
          }}
          className="absolute bottom-8 right-[calc(50%-2rem)] z-40 md:bottom-14 md:right-[28%]"
        >
          <Link
            href="/shop"
            className="group matcha-button label flex h-12 items-center gap-5 px-5"
          >
            <span>Explore the bar</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-500 ease-[var(--ease-kobo)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>

      {/* ---------------------------------------------------
          BOTTOM EDGE
          --------------------------------------------------- */}

      <div className="absolute bottom-0 left-5 right-5 border-t border-[var(--border)] md:left-8 md:right-8" />
    </section>
  );
}