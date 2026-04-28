import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Authority from "@/components/Authority";
import Framework from "@/components/Framework";
import ValueStack from "@/components/ValueStack";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";

import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <>
      <Hero />
      <StickyBar />
      <Story />
      <Authority />
      <Framework />
      <ValueStack />
      <Testimonials />
      <FinalCTA />
      <FAQ />
    </>
  );
}
