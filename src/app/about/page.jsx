import AboutIntro from "@/components/about-intro";
import InnovationValues from "@/components/innovation";
import MissionValues from "@/components/mission-values";
import SocialProof from "@/components/social-proof";
import Timeline from "@/components/timeline";

export default function About() {
  return (
    <>
      <AboutIntro />
      <MissionValues />
      <Timeline />
      <InnovationValues />
      <SocialProof />
    </>
  );
}
