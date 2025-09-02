import CtaExportTool from "@/components/product/export-tool/cta";
import ExportPreview from "@/components/product/export-tool/export-formats";
import Features from "@/components/product/export-tool/features";
import HeroExportTool from "@/components/product/export-tool/hero";
import UseCases from "@/components/product/export-tool/usecases";
import WhyChoose from "@/components/product/export-tool/why-choose";

export default function Page() {
  return (
    <>
      <HeroExportTool />
      <WhyChoose />
      <Features />
      <ExportPreview />
      <UseCases />
      <CtaExportTool />
    </>
  );
}
