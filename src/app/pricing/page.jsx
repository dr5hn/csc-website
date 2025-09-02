import FAQs from "@/components/faq";
import PricingSection from "@/components/pricing";
import PricingCTA from "@/components/pricing-cta";
import PricingHero from "@/components/pricing-hero";

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingSection />
      <FAQs />
      <PricingCTA />
    </>
  );
}
