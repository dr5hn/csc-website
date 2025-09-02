import CTA from "@/components/cta";
import EasyIntegration from "@/components/product/api/api-integration";
import HeroApi from "@/components/product/api/hero";
import WhyChooseOurApi from "@/components/product/api/why-choose-our-api";

export default function Page() {
  return (
    <>
      <HeroApi />
      <WhyChooseOurApi />
      <EasyIntegration />
      <CTA />
    </>
  );
}
