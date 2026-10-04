import Link from "next/link";

const products = [
  {
    number: "01",
    category: "Coffee",
    name: "House Espresso",
    description: "Dark chocolate / toasted almond / molasses",
    price: "₦8,500",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85",
    href: "/product/house-espresso",
    size: "large",
  },
  {
    number: "02",
    category: "Matcha",
    name: "Ceremonial Matcha",
    description: "Sweet grass / vanilla / soft umami",
    price: "₦12,000",
    image:
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=1200&q=85",
    href: "/product/ceremonial-matcha",
    size: "small",
  },
  {
    number: "03",
    category: "Coffee",
    name: "Washed Ethiopia",
    description: "Peach / jasmine / bergamot",
    price: "₦11,500",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    href: "/product/washed-ethiopia",
    size: "small",
  },
];

export function ProductRoster() {
  return (
    <section
      id="story"
      className="relative border-b border-[var(--border)] px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* -------------------------------------------------
            SECTION INTRO
            ------------------------------------------------- */}

        <div className="grid gap-10 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-4">
            <p className="label text-muted">The roster / 03</p>
          </div>

          <div className="md:col-span-6 md:col-start-6">
            <h2 className="max-w-4xl font-display text-[clamp(3.2rem,7vw,7.5rem)] leading-[0.82] tracking-[-0.055em]">
              GOOD
              <br />
              BEANS.
              <br />
              GOOD
              <br />
              LEAVES.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-6 text-muted md:mt-12">
              A small selection of things we love to drink.
              Roasted carefully, whisked properly, and served
              without getting in the way.
            </p>
          </div>
        </div>

        {/* -------------------------------------------------
            PRODUCT ROSTER
            ------------------------------------------------- */}

        <div className="mt-20 grid gap-x-6 gap-y-16 md:mt-32 md:grid-cols-12">
          {products.map((product, index) => (
            <Link
              key={product.name}
              href={product.href}
              className={`group block ${
                index === 0
                  ? "md:col-span-7"
                  : "md:col-span-4 md:col-start-9"
              }`}
            >
              {/* Image */}
              <div
                className={`image-reveal relative bg-clay ${
                  index === 0
                    ? "aspect-[4/5]"
                    : "aspect-[4/5] md:aspect-[3/4]"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />

                {/* Index */}
                <span className="absolute left-4 top-4 z-10 label text-paper">
                  {product.number}
                </span>

                {/* Category */}
                <span className="absolute right-4 top-4 z-10 label text-paper">
                  {product.category}
                </span>

                {/* Hover marker */}
                <div className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center border border-paper/70 text-paper opacity-0 transition-all duration-700 ease-[var(--ease-kobo)] group-hover:opacity-100">
                  <span className="transition-transform duration-700 ease-[var(--ease-kobo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </div>

              {/* Product information */}
              <div className="mt-5 border-t border-[var(--border)] pt-4">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl leading-none tracking-[-0.035em] md:text-4xl">
                      {product.name}
                    </h3>

                    <p className="mt-2 max-w-sm text-xs leading-5 text-muted">
                      {product.description}
                    </p>
                  </div>

                  <p className="label shrink-0 pt-1">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* -------------------------------------------------
            SHOP LINK
            ------------------------------------------------- */}

        <div className="mt-20 flex justify-end md:mt-28">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-6 border-b border-espresso pb-2"
          >
            <span className="label">View the full roster</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-500 ease-[var(--ease-kobo)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}