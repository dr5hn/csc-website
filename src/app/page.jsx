import CommunitySection from "@/components/community";
import CTA from "@/components/cta";
import HeroSection from "@/components/hero";
import Products from "@/components/products";
import SkipTheHassle from "@/components/skip-the-hassle";
import Stats from "@/components/stats";
import { Testimonials } from "@/components/ui/animated-testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <WhyChooseUs />
      <Products />
      <SkipTheHassle />
      <Testimonials />
      <CTA />
      <CommunitySection />
    </>
  );
}
