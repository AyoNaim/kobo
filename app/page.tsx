import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { ProductRoster } from "@/components/home/product-roster";
import { VibeMarquee } from "@/components/home/vibe-marquee";
import { Locations } from "@/components/home/locations";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <VibeMarquee />
        <ProductRoster />
        <Manifesto />
        <Locations />
      </main>

      <SiteFooter />
    </>
  );
}