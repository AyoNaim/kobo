"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navigation = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Visit",
    href: "#visit",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: EASE,
      }}
      className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-8 md:py-7"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1800px] items-center justify-between"
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Kōbō home"
          className="group relative flex items-center"
        >
          <span className="font-display text-[1.65rem] leading-none tracking-[-0.08em] md:text-[1.9rem]">
            KŌBŌ
          </span>

          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-px w-0 bg-espresso transition-[width] duration-500 ease-[var(--ease-kobo)] group-hover:w-full"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label group relative py-2"
            >
              {item.label}

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-espresso transition-[width] duration-500 ease-[var(--ease-kobo)] group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        {/* Cart */}
        <button
          type="button"
          aria-label="Open shopping bag"
          className="label group relative flex items-center gap-2 py-2"
        >
          <span>Bag</span>

          <span
            aria-hidden="true"
            className="flex h-5 min-w-5 items-center justify-center border border-espresso px-1 text-[0.5rem] transition-colors duration-500 group-hover:bg-matcha"
          >
            00
          </span>

          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-0 bg-espresso transition-[width] duration-500 ease-[var(--ease-kobo)] group-hover:w-full"
          />
        </button>
      </nav>
    </motion.header>
  );
}