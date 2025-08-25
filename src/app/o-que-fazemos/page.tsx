import BannerSection from "@/features/what-we-do/components/BannerSection";
import JoinUsSection from "@/features/what-we-do/components/JoinUsSection";
import { ProjectsDisplay } from "../../features/what-we-do/components/ProjectDisplay";
import { ServicesWeOffer } from "@/features/what-we-do/components/ServicesWeOffer";

function WhatWeDo() {
  return (
    <main>
      <BannerSection />
      <ServicesWeOffer />
      <ProjectsDisplay />
      <JoinUsSection />
    </main>
  );
}

export default WhatWeDo;
