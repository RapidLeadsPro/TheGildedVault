import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FeaturedOffer } from "@/components/sections/featured-offer";
import { FiveElements } from "@/components/sections/elements";
import { Comparison } from "@/components/sections/comparison";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <FeaturedOffer />
      <FiveElements />
      <Comparison />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
