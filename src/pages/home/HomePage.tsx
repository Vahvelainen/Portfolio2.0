import { BioSection } from "@/components/sections/BioSection";
import { Hero } from "@/components/sections/Hero";
import { HistorySection } from "@/components/sections/HistorySection";
import { WorkGrid } from "@/components/sections/WorkGrid";

export function HomePage() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <BioSection />
      <HistorySection />
    </>
  );
}
