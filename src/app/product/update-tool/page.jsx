import CtaUpdateTool from "@/components/product/update-tool/cta";
import Difference from "@/components/product/update-tool/difference";
import HeroUpdateTool from "@/components/product/update-tool/hero";
import HowItWorks from "@/components/product/update-tool/how-the-process-works";
import WhyContribute from "@/components/product/update-tool/why-contribute";

export default function Page() {
  return (
    <>
      <HeroUpdateTool />
      <WhyContribute />
      <HowItWorks />
      <Difference />
      <CtaUpdateTool />
    </>
  );
}
